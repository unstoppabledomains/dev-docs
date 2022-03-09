---
description: >-
  This integration guide is intended for a custom @uauth/js integration, with
  ethereum provider, using web3 react library.
---

# Web3 React Guide: Login with Unstoppable

This is the basic installation guide for the **web3-react** framework and is best used for React based single page applications (SPAs). For more information about this library, please see the associated [github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/web3-react).

{% hint style="info" %}
For a completed example of a Web3 React application, you can [download the files](https://github.com/unstoppabledomains/uauth/blob/main/examples/web3-react/README.md) directly.
{% endhint %}

## Step 1: Install the Required Libraries

Install with yarn.

```shell
yarn add @uauth/web3-react @web3-react/core @web3-react/injected-connector @web3-react/walletconnect-connector @web3-react/abstract-connector
```

## Step 2: Configure the web3-react Library

Next, configure the web3-react connectors:

{% code title="connectors.ts" %}
```typescript
import {UAuthConnector} from '@uauth/web3-react'
import {InjectedConnector} from '@web3-react/injected-connector'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import type {AbstractConnector} from '@web3-react/abstract-connector'

// Instanciate your other connectors.
export const injected = new InjectedConnector({supportedChainIds: [1]})

export const walletconnect = new WalletConnectConnector({
  infuraId: process.env.REACT_APP_INFURA_ID!,
  qrcode: true,
})

export const uauth = new UAuthConnector({
  clientID: process.env.REACT_APP_CLIENT_ID!,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET!,
  redirectUri: process.env.REACT_APP_REDIRECT_URI!,
  postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,
  // Scope must include openid and wallet
  scope: 'openid wallet',

  // Injected and walletconnect connectors are required.
  connectors: {injected, walletconnect},
})

const connectors: Record<string, AbstractConnector> = {
  injected,
  walletconnect,
  uauth,
}

export default connectors
```
{% endcode %}

You can also construct a UAuth instance before hand and use that to create the connector.

{% code title="connectors.ts" %}
```javascript
import UAuth from '@uauth/js'

const uauth = new UAuthConnector({
  uauth: new UAuth({
    clientID: process.env.REACT_APP_CLIENT_ID!,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET!,
    redirectUri: process.env.REACT_APP_REDIRECT_URI!,
    postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,
    scope: 'openid wallet',
  }),
  connectors: {injected, walletconnect},
})
```
{% endcode %}

{% hint style="info" %}
Because popups are a more integration friendly approach, the `@uauth/web3-react` library now uses them by default. If you want the "old" redirect functionality, you need to initialize the `UAuthConnector` with this setting: [`shouldLoginWithRedirect: true.`](web3-react-guide.md#shouldloginwithredirect)``
{% endhint %}

## Step 3: Test the Usage

Once configured, web3-react can be used like normal.

{% hint style="warning" %}
**Important:** For Login with Unstoppable integrations, users must use **Polygon Mainnet** or **Ethereum Mainnet** as the network for the domain. Domains minted on Rinkeby Testnet will not work with the Login feature.
{% endhint %}

{% code title="login-page.ts" %}
```javascript
import {useWeb3React} from '@web3-react/core'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import React from 'react'
import {uauth} from './connectors'

// On login button click...

async function handleUAuthConnect() {
  const {activate} = useWeb3React()

  await activate(uauth)
}
```
{% endcode %}

## Step 4: Add Login UI Requirements

Login with Unstoppable has UI requirements for the UD buttons, user modals, and authenticated user icons. For example, once a user has successfully authenticated, the application's UI should display the user’s domain name (instead of address) to confirm the authorization was successful.&#x20;

Please follow the instructions in the [**Login UI Requirements Guide**](../login-ui-requirements.md) to complete this final step in the integration process.

{% hint style="success" %}
**Congratulations!** You just implemented Login with Unstoppable.
{% endhint %}

## Reference

### **shouldLoginWithRedirect**

If `shouldLoginWithRedirect` is `true`, then you must set up a callback page for the authorization server to redirect back to.

{% code title="callback-page.ts" %}
```javascript
import {uauth} from './connectors'

// On page load...

const {activate} = useWeb3React()

useEffect(() => {
  uauth
    .callbackAndActivate({activate})
    .then(() => {
      // Redirect to success page
    })
    .catch(error => {
      // Redirect to failure page
    })
}, [])
```
{% endcode %}

### **UAuthConnector Class**

`UAuthConnector` is the default export.

```javascript
import type {
  UAuthConnectors,
  UAuthConnectorOptions,
  ConnectorLoginCallbackOptions,
} from '@uauth/web3-react'
import type UAuth from '@uauth/js'

export default class UAuthConnector extends AbstractConnector {
  // A reference to the UAuth library. Used to construct a UAuth instance if one
  // isn't passed in the constructor.
  static UAuth: typeof UAuth

  // Assigns pkg to UAuthConnector.UAuth.
  static registerUAuth(pkg: typeof UAuth): void

  // Dynamically imports UAuth and assigns it to UAuthConnector.UAuth.
  public static async importUAuth(): Promise<void>

  constructor(public options: UAuthConnectorOptions) {}

  // Calls this.uauth.loginCallback and activates the connector using the
  // activate argument.
  async callbackAndActivate<T>(
    options: ConnectorLoginCallbackOptions,
  ): Promise<void>

  // Gets connector used internally to connect into `web3-react`.
  public get subConnector(): AbstractConnector & {
    isAuthorized?(): Promise<boolean>
  }

  // Gets the local UAuth instance.
  public get uauth(): UAuth
}
```
