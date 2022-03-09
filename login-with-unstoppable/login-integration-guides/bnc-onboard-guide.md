---
description: >-
  This integration guide is intended for a custom @uauth/js integration, with
  ethereum provider, using BNC Onboard library.
---

# BNC Onboard Guide: Login with Unstoppable

This is the basic installation guide for the `bnc-onboard` library and is best used for single page applications (SPAs). For more information about this library, please see the associated [github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/bnc-onboard).

{% hint style="info" %}
For a completed example of a BNC Onboard application, you can [download the files](https://github.com/unstoppabledomains/uauth/blob/main/examples/bnc-onboard/README.md) directly.
{% endhint %}

## Step 1: Install the Libraries

Install with yarn.

```shell
yarn add bnc-onboard @uauth/bnc-onboard @uauth/js @walletconnect/web3-provider
```

{% hint style="info" %}
Because popups are a more integration friendly approach, the `@uauth/bnc-onboard` library now uses them by default. If you want the "old" redirect functionality, you need to initialize the Module with this option:`shouldLoginWithRedirect: true`.
{% endhint %}

## Step 2: Configure the @uauth/bnc-onboard Library

Next, configure the `@uauth/bnc-onboard` library:

{% code title="uauthOnboard.ts" %}
```typescript
import UAuthBncOnboard from '@uauth/bnc-onboard'

const uauthOnboard = new UAuthBncOnboard({
  clientID: process.env.REACT_APP_CLIENT_ID!,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET!,
  redirectUri: process.env.REACT_APP_REDIRECT_URI!,
  postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,\
  // Scope must include openid and wallet
  scope: 'openid wallet',
})
```
{% endcode %}

You can also construct a UAuth instance before hand and use that to create the library.

{% code title="uauthOnboard.ts" %}
```javascript
import UAuth from '@uauth/js'

const uauthOnboard = new UAuthBncOnboard({
  uauth: new UAuth({
    clientID: process.env.REACT_APP_CLIENT_ID!,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET!,
    redirectUri: process.env.REACT_APP_REDIRECT_URI!,
    postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,
    scope: 'openid wallet',
  }),
})
```
{% endcode %}

## Step 3: Configure the bnc-onboard Library

Next, the `bnc-onboard` library needs to be configured.

{% code title="onboard.ts" %}
```javascript
import initOnboard from 'bnc-onboard'

const onboard = initOnboard({
  dappId: process.env.REACT_APP_ONBOARD_KEY!,
  networkId: 1,
  walletSelect: {
    wallets: [
      {
        walletName: 'metamask',
        preferred: true,
      },
      {
        walletName: 'walletConnect',
        preferred: true,
        infuraKey: process.env.REACT_APP_INFURA_ID!,
      },
      // This creates a custom wallet module. See here: https://docs.blocknative.com/onboard#creating-custom-modules
      uauthOnboard.module({
        // Mark true if you want Unstoppable to be
        preferred: true,
        // Onboard uses a store system that makes it impossible to read the
        // state of other wallets. This means that we have to supply a seperate
        // configuration to the @walletconnect/web3-provider instance.
        // See here: https://docs.walletconnect.com/1.0/quick-start/dapps/web3-provider
        walletconnect: {
          infuraId: process.env.REACT_APP_INFURA_ID!,
        },
      }),
    ],
  },
})
```
{% endcode %}

## Step 4: Test the Usage

Once configured, the `bnc-onboard` library can be used normally.

{% hint style="warning" %}
**Important:** For Login with Unstoppable integrations, users must use **Polygon Mainnet** or **Ethereum Mainnet** as the network for the domain. Domains minted on Rinkeby Testnet will not work with the Login feature.
{% endhint %}

{% code title="login-page.ts" %}
```javascript
import onboard from './onboard'

// On login button click...

await onboard.walletSelect()

await onboard.walletCheck()
```
{% endcode %}

## Step 5: Add Login UI Requirements

Login with Unstoppable has UI requirements for the UD buttons, user modals, and authenticated user icons. For example, once a user has successfully authenticated, the application's UI should display the user’s domain name (instead of address) to confirm the authorization was successful.&#x20;

Please follow the instructions in the [**Login UI Requirements Guide**](../login-ui-requirements.md) to complete this final step in the integration process.

{% hint style="success" %}
**Congratulations!** You just implemented Login with Unstoppable.
{% endhint %}

## Reference

**shouldLoginWithRedirect is true**: If `shouldLoginWithRedirect` is `true`, then you must set up a callback page for the authorization server to redirect back to.

{% code title="callback-page.ts" %}
```javascript
import onboard from './onboard'
import uauthOnboard from './uauthOnboard'

// On page load...

uauthOnboard
  .callbackAndWalletSelect({onboard})
  .then(() => {
    // Redirect to success page
  })
  .catch(error => {
    // Redirect to failure page
  })
```
{% endcode %}

**caching wallets:** Blocknative has [documentation](https://docs.blocknative.com/onboard#caching-wallet-selection) about caching wallets. The code inside the documentation won't quite work out of the box because the `bnc-onboard` library doesn't know if the token from the last login session is still valid. To fix this, you need to check before selecting the Unstoppable wallet.

```javascript
const previouslySelectedWallet = window.localStorage.getItem('selectedWallet')
if (previouslySelectedWallet != null) {
  // We check to see if the last connected wallet was the Unstoppable one.
  if (previouslySelectedWallet === 'Unstoppable') {
    // If it is then we try to retrieve the user and select the wallet.
    // Otherwise we don't try to reconnect.
    await uauthOnboard
      .getUAuth()
      .then(async uauth => {
        await uauth.user()
        await onboard.walletSelect('Unstoppable')
      })
      .catch(() => {
        window.localStorage.removeItem('selectedWallet')
      })
  } else {
    await onboard.walletSelect(previouslySelectedWallet)
  }
}
```

**UAuthBNCOnboard**: `UAuthBNCOnboard` is the default export.

```javascript
import type {WalletModule} from 'bnc-onboard/dist/src/interfaces'
import type UAuth from '@uauth/js'
import type {
  ConstructorOptions,
  CallbackOptions,
  ModuleOptions,
} from '@uauth/bnc-onboard'

export default class UAuthBNCOnboard {
  // A reference to the UAuth library. Used to construct a UAuth instance if one
  // isn't passed in the constructor.
  public static UAuth: typeof UAuth

  // Assigns pkg to UAuthConnector.UAuth.
  public static registerUAuth(pkg: typeof UAuth): void

  // Dynamically imports UAuth and assigns it to UAuthConnector.UAuth.
  public static async importUAuth(): Promise<void>

  constructor(public options: ConstructorOptions) {}

  // Gets the local UAuth instance.
  public get uauth(): UAuth

  // Calls UAuthBNCOnboard.importUAuth and gets the local UAuth instance.
  public async getUAuth(): Promise<UAuth>

  // Calls this.uauth.loginCallback and selects wallet using onboard instance.
  public async callbackAndWalletSelect(
    options: CallbackOptions,
  ): Promise<boolean>

  // Creates a wallet module used to instanciate an Onboard instance
  public module({preferred = true, walletconnect}: ModuleOptions): WalletModule
}
```
