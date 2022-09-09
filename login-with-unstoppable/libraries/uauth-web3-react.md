---
title: UAuth Web3-React Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/web3-react middleware library.
---

# UAuth Web3-React Library

## `UAuthConnector`

The `UAuthConnector` class is the default export of the `@uauth/web3-react` library.

### constructor

```typescript
class UAuthConnector extends AbstractConnector {
  constructor(public options: UAuthConnectorOptions) {}
}

const uauthConnector = new UAuthConnector(options);
```

### registerUAuth()

Assigns pkg to `UAuthConnector.UAuth`.

```typescript
static registerUAuth(pkg: typeof UAuth): void
```

### importUAuth()

Dynamically imports UAuth and assigns it to `UAuthConnector.UAuth`.

```typescript
public static async importUAuth(): Promise<void>
```

### callbackAndActivate()

Calls the [loginCallback()](/login-with-unstoppable/libraries/uauth-js.md#logincallback) method of [this.uauth](#uauth) and activates the connector using the activate argument.

```typescript
async callbackAndActivate<T>(
  options: ConnectorLoginCallbackOptions,
): Promise<void>
```

### uauth

Returns the local UAuth instance.

```typescript
public get uauth(): UAuth
```

### subConnector

Returns the connector used internally to connect to `web3-react`.

```typescript
public get subConnector(): AbstractConnector & {
  isAuthorized?(): Promise<boolean>
}
```

## UAuthConnectors

```typescript
interface UAuthConnectors {
  injected: AbstractConnector
  walletconnect: AbstractConnector
}
```

## UAuthConnectorOptions

The options object passed to the UAuthConnector [constructor](#constructor).

```typescript
interface UAuthConnectorOptions
  extends AbstractConnectorArguments,
    Partial<UAuthConstructorOptions> {
  uauth?: UAuth
  connectors: UAuthConnectors
  shouldLoginWithRedirect?: boolean
}
```

|           Field           |                 Type                | Description |
| ------------------------- | :---------------------------------: | ----------- |
|         `uauth`           | [UAuth Client](/login-with-unstoppable/libraries/uauth-js.md#client) | |
|         `connectors`      | [UAuthConnectors](#uauthconnectors) | |
| `shouldLoginWithRedirect` |             `boolean`               | If set to `true`, the `uauthConnector` instance will use the [login()](/login-with-unstoppable/libraries/uauth-js.md#login) method instead of the default, [loginWithPopup()](/login-with-unstoppable/libraries/uauth-js.md#loginwithpopup). |

### shouldLoginWithRedirect

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

## ConnectorLoginCallbackOptions

```typescript
interface ConnectorLoginCallbackOptions {
  url?: string
  activate: (
    connector: AbstractConnector,
    onError?: (error: Error) => void,
    throwErrors?: boolean,
  ) => Promise<void>
  onError?: (error: Error) => void
  throwErrors?: boolean
}
```