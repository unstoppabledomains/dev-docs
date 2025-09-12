---
title: UAuth Web3Modal Library | Unstoppable Domains Developer Portal
description: >-
  This page provides documents the public interface of the @uauth/web3modal
  middleware library.
redirects:
  /login-with-unstoppable/libraries/uauth-web3modal/: {}
---

# UAuth Web3Modal Library

The `@uauth/web3modal` library is a middleware library used for integrating UAuth with Web3Modal applications.

## connector()

The `connector` function is used to create a provider for the `web3modal` library.

```typescript
async function connector(
  UAuth: typeof UAuthSPA,
  opts: IUAuthOptions
): Promise<any>;
```

## registerWeb3Modal()

The `connector()` function needs access to a `web3modal` instance in order to connect a provider properly. This function registers a `web3modal` instance for the `connector` to use. This function **MUST** be called before [connector()](#connector).

```typescript
function registerWeb3Modal(web3modal: Web3Modal) => void
```

## getUAuth()

This function creates and returns a new UAuth instance using the package and options.

```typescript
function getUAuth(UAuth: typeof UAuthSPA, opts: IUAuthOptions): UAuth;
```

## display

Since UAuth is not natively integrated into the `web3modal` library, applications must supply some assets for the Web3 Modal UI. These are those assets.

```typescript
import type {IProviderDisplay} from 'web3modal'

export const display: IProviderDisplay = { ... }
```

## IUAuthOptions

The options object passed to the [connector](#connector) function to configure a UAuth provider for Web3Modal. Extends `IAbstractConnectorOptions` and [UAuthConstructorOptions](/identity/sdk-and-libraries/uauth-js.md#clientoptions);

```typescript
interface IUAuthOptions
  extends Partial<IAbstractConnectorOptions>,
    UAuthConstructorOptions {
  shouldLoginWithRedirect?: boolean;
}
```

### shouldLoginWithRedirect

If set to `true`, the UAuth provider created by the [connector](#connector) function will use the [login()](/identity/sdk-and-libraries/uauth-js.md#login) method instead of the default, [loginWithPopup()](/identity/sdk-and-libraries/uauth-js.md#loginwithpopup).

Then you must set up a callback page for the authorization server to redirect back to.

```javascript
import UAuthSPA from "@uauth/js";
import * as UAuthWeb3Modal from "@uauth/web3modal";
import { uauthOptions } from "./web3modal";

// On page load...

UAuthWeb3Modal.getUAuth(UAuthSPA, uauthOptions)
  .loginCallback()
  .then(async () => {
    const provider = await web3modal.connectTo("custom-uauth");

    // Save provider in state and redirect to success page
  })
  .catch((error) => {
    // Redirect to failure page
  });
```
