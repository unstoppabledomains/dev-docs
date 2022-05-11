---
title: Web3 Modal Guide for Login with Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with ethereum provider, using web3 modal library.
---

# Web3 Modal Guide: Login with Unstoppable

This is the basic installation guide for the `web3modal` library and is best used for single page applications (SPAs). For more information about this library, please see the [associated github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/web3modal).

:::info
For a completed example of a Web3 Modal application, you can [download this example project](https://github.com/unstoppabledomains/uauth/blob/main/examples/web3modal).
:::

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
  clientID: 'client_id',
  redirectUri: 'http://localhost:3000',

  // Must include both the openid and wallet scopes.
  scope: 'openid wallet',
}

const providerOptions = {
  // Currently the package isn't inside the web3modal library currently. For now,
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

  // Include any other web3modal providers here too...
}

const web3modal = new Web3Modal({providerOptions})

// Register the web3modal so the connector has access to it.
UAuthWeb3Modal.registerWeb3Modal(web3modal)

export default web3modal
```

:::info
Because pop-ups are a more integration friendly approach, the `@uauth/web3modal` library now uses them by default. If you want the "old" redirect functionality, you need to set `shouldLoginWithRedirect: true` in your `IUAuthOptions` and [create a callback page](#shouldloginwithredirect) 
:::

## Step 3: Test the Usage

Once configured, the `web3modal` library can be used normally.

<embed src="/snippets/_login-mainnet-warning.md" />

```javascript
import web3modal from './web3modal'
import Web3 from 'web3'

// On login button click...

const provider = await web3modal.connect()

// Save provider in state
```

## Step 4: Configure the Login UI

<embed src="/snippets/_login-ui-config.md" />

## Reference

### `shouldLoginWithRedirect`

If `shouldLoginWithRedirect` in your `IUAuthOptions` is set to `true`, then you must set up a callback page for the authorization server to redirect back to.

```javascript
import UAuthSPA from '@uauth/js'
import * as UAuthWeb3Modal from '@uauth/web3modal'
import {uauthOptions} from './web3modal'

// On page load...

UAuthWeb3Modal.getUAuth(UAuthSPA, uauthOptions)
  .loginCallback()
  .then(async () => {
    const provider = await web3modal.connectTo('custom-uauth')

    // Save provider in state and redirect to success page
  })
  .catch(error => {
    // Redirect to failure page
  })
```

### `connector`

The `connector` is used to create a provider for the `web3modal` library.

```typescript
import type UAuthSPA from '@uauth/js'
import type {IUAuthOptions} from '@uauth/web3modal'

export async function connector(
  UAuth: typeof UAuthSPA,
  opts: IUAuthOptions,
): Promise<any>
```

### `display`

When UAuth is not yet natively integrated into the `web3modal` library, applications must supply some digital assets for the Web3 Modal UI. These are those assets.

```typescript
import type {IProviderDisplay} from 'web3modal'

export const display: IProviderDisplay = { ... }
```

### `registerWeb3Modal()`

The `connector` needs access to the `web3modal` instance in order to connect a provider properly. This function registers the `web3modal` instance for the `connector` to use. This function MUST be called for the connector to work.

```typescript
import type Web3Modal from 'web3modal'

export function registerWeb3Modal(web3modal: Web3Modal) => void
```

### `getUAuth()`

This function creates a UAuth instance using the package and options.

```typescript
import type UAuthSPA from '@uauth/js'

export function getUAuth(UAuth: typeof UAuthSPA, opts: IUAuthOptions): UAuth {
  return new UAuth(opts)
}
```

