---
title: Web3 Onboard Guide for Login with Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with ethereum provider, using the web3 onboard library.
---

# Web3 Onboard Guide: Login with Unstoppable

This is the basic installation guide for the `web3-onboard` library and is best used for single page applications (SPAs). For more information about this library, please see the [associated github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/web3-onboard).

:::info
For a completed example of a Web3 Modal application, you can [download this example project](https://github.com/unstoppabledomains/uauth/blob/main/examples/web3-onboard).
:::

## Step 1: Install the Libraries

Install with `yarn` or `npm`.

```sh yarn
yarn add @uauth/web3-onboard @uauth/js @web3-onboard/core
```

```sh npm
npm install --save @uauth/web3-onboard @uauth/js @web3-onboard/core
```

## Step 2: Configure the `web3-onboard` Library

```typescript
// onboard.ts

import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import UAuth from '@uauth/js'
import uauthBNCModule from '@uauth/web3-onboard'

const uauthOptions = {
  clientID: process.env.REACT_APP_CLIENT_ID!,
  redirectUri: process.env.REACT_APP_REDIRECT_URI!,
  fallbackIssuer: process.env.REACT_APP_FALLBACK_ISSUER!,
  scope: 'openid wallet',
}

const uauth = new UAuth(uauthOptions)

const uauthBNCOptions = {
  uauth: uauth,
  walletconnect: {
    infuraId: process.env.REACT_APP_INFURA_ID!,
  },
}

const uauthModule = uauthBNCModule(uauthOptions)

export const onboard = Onboard({
    wallets: [injected, uauthModule],
    ...
  },
})
```

:::info
Because pop-ups are a more integration friendly approach, the `@uauth/web3-onboard` library now uses them by default. If you want the "old" redirect functionality, you need to set `shouldLoginWithRedirect: true` in your `uauthBNCOptions` and create a callback page.
:::

## Step 3: Test the Usage

```typescript
import onboard from './onboard'

// On login button click...
const connectedWallets = await onboard.connectWallet()
console.log(connectedWallets);
```

## Step 4: Configure the Login UI

<embed src="/snippets/_login-ui-config.md" />