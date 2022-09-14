---
title: UAuth Web3-Onboard Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/web3-onboard middleware library.
---

# UAuth Web3-Onboard Library

The `@uauth/web3-onboard` library is a middleware library used for integrating UAuth with Blocknative Web3-Onboard applications.

## uauthBNCModule

The default export for the the `@uauth/web3-onboard` library. Implements Web3 Onboard `WalletInit`.

```typescript
const uauthModule = new uauthBNCModule(options: ConstructorOptions);
```

## ConstructorOptions

```typescript
interface ConstructorOptions {
  uauth: UAuth
  shouldLoginWithRedirect?: boolean
  walletconnect: IWalletConnectProviderOptions
}
```

`uauth`

Type: [UAuth Client](/login-with-unstoppable/libraries/uauth-js.md#client)

An instance of the UAuth Client class.

`shouldLoginWithRedirect`

Type: **boolean**

If set to `true`, the `uauthBNCModule` instance will use the [login()](/login-with-unstoppable/libraries/uauth-js.md#login) method instead of the default, [loginWithPopup()](/login-with-unstoppable/libraries/uauth-js.md#loginwithpopup).

`walletconnect`

Type: **IWalletConnectProviderOptions**

Configuration options used to to support authentication with WalletConnect.