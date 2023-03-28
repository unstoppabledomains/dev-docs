---
title: Web3 Modal Guide for Login with Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with ethereum provider, using web3 modal library.
showNextButton: false
---

# Web3 Modal Guide: Login with Unstoppable

This is the basic installation guide for the `web3modal` library and is best used for single page applications (SPAs). For more information about this library, please see the [associated github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/web3modal).

<figure>

![Web3 Modal with Unstoppable Domains](/images/login-selection-web3modal.png '#width=70%')

<figcaption>Web3 Modal with Unstoppable Domains</figcaption>
</figure>

## Step 1: Install the Libraries

Install with `yarn` or `npm`.

```shell yarn
yarn add web3modal @uauth/web3modal @uauth/js @walletconnect/web3-provider
```

```shell npm
npm install --save web3modal @uauth/web3modal @uauth/js @walletconnect/web3-provider
```

## Step 2: Configure the `web3modal` Library

Next, configure the `web3modal` library:

```typescript
import * as UAuthWeb3Modal from '@uauth/web3modal'
import UAuthSPA from '@uauth/js'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'

// These options are used to construct the UAuthSPA instance.
export const uauthOptions: IUAuthOptions = {
  clientID: 'uauth_client_id',
  redirectUri: 'http://localhost:3000',

  // Must include both the openid and wallet scopes.
  scope: 'openid wallet',
}

const providerOptions = {
  // Currently the package isn't inside the web3modal library. For now,
  // users must use this libary to create a custom web3modal provider.

  // All custom `web3modal` providers must be registered using the "custom-"
  // prefix.
  'custom-uauth': {
    // The UI Assets
    display: UAuthWeb3Modal.display,

    // The Connector
    connector: UAuthWeb3Modal.connector,

    // The SPA libary
    package: UAuthSPA,

    // The SPA libary options
    options: uauthOptions,
  },

  // For full functionality we include the walletconnect provider as well.
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'INFURA_ID',
    },
  },

  // Include any other web3modal providers here
}

const web3modal = new Web3Modal({providerOptions})

// Register the web3modal so the connector has access to it.
UAuthWeb3Modal.registerWeb3Modal(web3modal)

export default web3modal
```

:::info
Because pop-ups are a more integration friendly approach, the `@uauth/web3modal` library now uses them by default. If you want the "old" redirect functionality, you need to set `shouldLoginWithRedirect: true` in your `IUAuthOptions` and [create a callback page](/login-with-unstoppable/libraries/uauth-web3modal.md#shouldloginwithredirect)
:::

## Step 3: Login with Unstoppable

Once configured, the `web3modal` library can be used normally.

<embed src="/snippets/_login-mainnet-warning.md" />

```javascript
import web3modal from './web3modal'
import Web3 from 'web3'

async function handleLogin() {
  const provider = await web3modal.connect()
}

function handleLogout() {
  if (web3modal.cachedProvider === 'custom-uauth') {
    await uauth.logout()
  }
  web3modal.clearCachedProvider()
}

// Save provider in state
```

:::success Congratulations!
You have implemented Login with Unstoppable with web3modal.
:::

<embed src="/snippets/_login-paths-next.md" />