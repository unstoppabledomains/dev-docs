---
title: UAuth Web3Modal Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/web3modal middleware library.
---

# UAuth Web3Modal Library

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

Since UAuth is not yet natively integrated into the `web3modal` library, applications must supply some digital assets for the Web3 Modal UI. These are those assets.

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