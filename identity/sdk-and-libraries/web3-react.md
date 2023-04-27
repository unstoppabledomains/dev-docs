---
title: UAuth Web3-React Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/web3-react middleware library.
redirectFrom:
  - /login-with-unstoppable/libraries/uauth-web3-react/
---

# UAuth Web3-React Library

The `@uauth/web3-react` library is a middleware library used for integrating UAuth with web3-react applications.

## UAuthConnector

The `UAuthConnector` class is the default export of the `@uauth/web3-react` library.

### constructor

```typescript
class UAuthConnector extends Connector {
  constructor({ actions, options, onError }: UAuthConnectorConstructorArgs) {}
}

const uauthConnector = new UAuthConnector(args);
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

Calls the [loginCallback()](/identity/sdk-and-libraries/uauth-js.md#logincallback) method of [this.uauth](#uauth) and activates the connector using the activate argument.

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
public get subConnector(): Connector & {
  isAuthorized?(): Promise<boolean>
}
```

## UAuthConnectors

```typescript
interface UAuthConnectors {
  injected: Connector;
  walletconnect: Connector;
}
```

## UAuthConnectorConstructorArgs

The arguments object passed to the UAuthConnector [constructor](#constructor).

```typescript
interface UAuthConnectorConstructorArgs {
  actions: Actions;
  options: UAuthConstructorOptions & {
    uauth?: UAuth;
    connectors: UAuthConnectors;
    shouldLoginWithRedirect?: boolean;
  };
  onError?: (error: Error) => void;
}
```

### options.shouldLoginWithRedirect

If `shouldLoginWithRedirect` is set to `true`, the [uauthConnector](#uauthconnector) instance will use the [login()](/identity/sdk-and-libraries/uauth-js.md#login) method instead of the default, [loginWithPopup()](/identity/sdk-and-libraries/uauth-js.md#loginwithpopup).

Then you must set up a callback page for the authorization server to redirect back to.

```javascript
import { uauth } from "./connectors";

// On page load...

const { activate } = useWeb3React();

useEffect(() => {
  uauth
    .callbackAndActivate({ activate })
    .then(() => {
      // Redirect to success page
    })
    .catch((error) => {
      // Redirect to failure page
    });
}, []);
```

## ConnectorLoginCallbackOptions

```typescript
interface ConnectorLoginCallbackOptions {
  url?: string;
  activate: (
    connector: Connector,
    onError?: (error: Error) => void,
    throwErrors?: boolean
  ) => Promise<void>;
  onError?: (error: Error) => void;
  throwErrors?: boolean;
}
```
