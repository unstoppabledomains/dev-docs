---
title: BNC Onboard Guide for Login with Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with ethereum provider, using the BNC Onboard library.
---

# BNC Onboard Guide: Login with Unstoppable

:::warning Web3-onboard
This guide and the `@uauth/bnc-onboard` package uses `bnc-onboard`, a depreciated version of the **Blocknative Onboard** library. For integrating with `web3-onboard` (onboard `v2.0.0` and later), see the [Web3 Onboard Guide](./web3-onboard-guide.md).
:::

This is the basic installation guide for the `bnc-onboard` library and is best used for single page applications (SPAs). For more information about this library, please see the associated [github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/bnc-onboard).

:::info
For a completed example of a BNC Onboard application, you can [download this example project](https://github.com/unstoppabledomains/uauth/blob/main/examples/bnc-onboard/).
:::

## Step 1: Install the Libraries

Install with `yarn` or `npm`.

```shell yarn
yarn add bnc-onboard @uauth/bnc-onboard @uauth/js @walletconnect/web3-provider
```

```shell npm
npm install --save bnc-onboard @uauth/bnc-onboard @uauth/js @walletconnect/web3-provider
```

## Step 2: Configure the @uauth/bnc-onboard Library

Next, configure the `@uauth/bnc-onboard` library:

```typescript
import UAuthBncOnboard from '@uauth/bnc-onboard'

const uauthOnboard = new UAuthBncOnboard({
  clientID: process.env.REACT_APP_CLIENT_ID!,
  redirectUri: process.env.REACT_APP_REDIRECT_URI!,
  postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,\
  // Scope must include openid and wallet
  scope: 'openid wallet',
})
```

You can also construct a `UAuth` instance before hand and use that to create the library.

```javascript
import UAuth from '@uauth/js'

const uauthOnboard = new UAuthBncOnboard({
  uauth: new UAuth({
    clientID: process.env.REACT_APP_CLIENT_ID!,
    redirectUri: process.env.REACT_APP_REDIRECT_URI!,
    postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,
    scope: 'openid wallet',
  }),
})
```

:::info
Because pop-ups are a more integration friendly approach, the `@uauth/bnc-onboard` library now uses them by default. If you want the "old" redirect functionality, you need to set `shouldLoginWithRedirect: true` in the `ConstructorOptions` passed to your new instance of `UAuthBNCOnboard` and [create a callback page](#shouldloginwithredirect).
:::

## Step 3: Configure the bnc-onboard Library

Next, the `bnc-onboard` library needs to be configured.

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

## Step 4: Test the Usage

Once configured, the `bnc-onboard` library can be used normally.

<embed src="/snippets/_login-mainnet-warning.md" />

```javascript
import onboard from './onboard'

const handleLogin = async () => {
  await onboard.walletSelect()
  await onboard.walletCheck()
}

const handeLogout = () => {
  uauthOnboard.getUAuth().then(uauth => uauth.logout())
  onboard.walletReset()
}

```

## Step 5: Configure the Login UI

<embed src="/snippets/_login-ui-config.md" />

## Reference

### `UAuthBNCOnboard`

The `UAuthBNCOnboard` class is the default export for `@uauth/bnc-onboard`.

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

### `shouldLoginWithRedirect`

If `shouldLoginWithRedirect` is set to `true` in the `ConstructorOptions` used to instantiate `UAuthBNCOnboard`, then you must set up a callback page for the authorization server to redirect back to.

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

### Caching Wallets

Blocknative has [documentation](https://docs.blocknative.com/onboard#caching-wallet-selection) about caching wallets. The example code won't quite work out of the box because the `bnc-onboard` library doesn't know if the token from the last login session is still valid. To fix this, you need to check before selecting the Unstoppable wallet.

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
