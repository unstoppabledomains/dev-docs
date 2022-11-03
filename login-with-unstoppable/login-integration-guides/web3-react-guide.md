---
title: Web3 React Guide for Login with Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with ethereum provider, using web3 react library.
showNextButton: false
---

# Web3 React Guide: Login with Unstoppable

This is the basic installation guide for the `web3-react` framework and is best used for React-based single page applications (SPAs). For more information about this library, please see the associated [github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/web3-react).

## Step 1: Install the Libraries

Install with `yarn` or `npm`.

```shell yarn
yarn add @uauth/web3-react @web3-react/core @web3-react/injected-connector @web3-react/walletconnect-connector @web3-react/abstract-connector
```

```shell npm
npm install --save @uauth/web3-react @web3-react/core @web3-react/injected-connector @web3-react/walletconnect-connector @web3-react/abstract-connector
```

## Step 2: Configure the `web3-react` Library

Next, configure the `web3-react` connectors:

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

You can also construct a `UAuth` instance and use that to create the connector.

```javascript
import UAuth from '@uauth/js'

const uauth = new UAuthConnector({
  uauth: new UAuth({
    clientID: process.env.REACT_APP_CLIENT_ID!,
    redirectUri: process.env.REACT_APP_REDIRECT_URI!,
    postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,
    scope: 'openid wallet',
  }),
  connectors: {injected, walletconnect},
})
```

:::info
Because popups are a more integration friendly approach, the `@uauth/web3-react` library now uses them by default. If you want the "old" redirect functionality, you need to set `shouldLoginWithRedirect: true` in your `UAuthConnectorOptions` and [create a callback page](/login-with-unstoppable/libraries/uauth-web3-react.md#shouldloginwithredirect).
:::

## Step 3: Login with Unstoppable

Once configured, `web3-react` can be used like normal.

<embed src="/snippets/_login-mainnet-warning.md" />

```javascript
import {useWeb3React} from '@web3-react/core'
import {WalletConnectConnector} from '@web3-react/walletconnect-connector'
import React from 'react'
import {uauth} from './connectors'

// On login button click
async function handleLogin() {
  const {activate} = useWeb3React()

  await activate(uauth)
}

// On logout button click
async function handleLogout() {
  const {deactivate} = useWeb3React()

  deactivate()
}
```

<embed src="/snippets/_login-paths-next.md" />