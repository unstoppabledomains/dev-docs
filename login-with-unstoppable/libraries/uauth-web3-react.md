---
title: UAuth Web3-React Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/web3-react middleware library.
---

# UAuth Web3-React Library

### `UAuthConnector`

The `UAuthConnector` class is the default export.

```typescript
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

### `shouldLoginWithRedirect`

If `shouldLoginWithRedirect` is set to `true`, then you must set up a callback page for the authorization server to redirect back to.

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