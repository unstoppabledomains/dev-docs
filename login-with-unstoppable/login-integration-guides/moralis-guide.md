---
title: Moralis Guide for Login With Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with ethereum provider, using the Moralis library.
---

# Moralis Guide: Login With Unstoppable

This is the basic installation guide for the `moralis` library and is best used for single page applications (SPAs). For more information about this library, please see the [associated github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/moralis).

:::info
For a completed example of a Moralis application, you can [download this example project](https://github.com/unstoppabledomains/uauth/blob/main/examples/moralis).
:::

## Step 1: Install the Libraries

Install with `yarn` or `npm`.

```shell yarn
yarn add @uauth/moralis react-moralis moralis
```

```shell npm
npm install --save @uauth/moralis react-moralis moralis
```

## Step 2: Configure the `moralis` Library

Next, configure the `moralis` library:

```typescript
// connectors.ts

import {UAuthMoralisConnector} from '@uauth/moralis'

// Instantiate your other connectors.
export const injected = {}

export const walletconnect = {provider: 'walletconnect'}

UAuthMoralisConnector.setUAuthOptions({
  clientID: process.env.REACT_APP_CLIENT_ID!,
  redirectUri: process.env.REACT_APP_REDIRECT_URI!,
  fallbackIssuer: process.env.REACT_APP_FALLBACK_ISSUER!,

  // Scope must include openid and wallet
  scope: 'openid wallet',
  // Injected and walletconnect connectors are required
  connectors: {injected, walletconnect},
});

export const uauth = {connector: UAuthMoralisConnector};

const connectors: Record<string, any> = {
  injected,
  walletconnect,
  uauth,
}

export default connectors
```

:::info
Because pop-ups are a more integration friendly approach, the `@uauth/moralis` library now uses them by default. If you want the "old" redirect functionality, you need to set `shouldLoginWithRedirect: true` in the options passed to `setUAthOptions()` and create a callback page.
:::

## Step 3: Test the Usage

Once configured, the `react-moralis` library can be used normally.

<embed src="/snippets/_login-mainnet-warning.md" />

```typescript

import React from 'react'
import {useMoralis} from 'react-moralis'
import {uauth} from './connectors'

// On login button click...

async function handleUAuthConnect() {
  const {authenticate} = useMoralis()

  await authenticate(uauth)
}
```

## Step 4: Configure the Login UI

<embed src="/snippets/_login-ui-config.md" />
