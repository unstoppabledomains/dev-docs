---
title: UAuth Web3-Onboard Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/web3-onboard middleware library.
---

# UAuth Web3-Onboard Library

The `@uauth/web3-onboard` library is a middleware library used for integrating UAuth with Blocknative Web3-Onboard applications.

## uauthBNCModule

The default export for the the `@uauth/web3-onboard` library. Implements Web3 Onboard `WalletInit`.

```typescript
function uauthBNCModule(
  options: ConstructorOptions,
): WalletInit
```

## ConstructorOptions

The options object passed to [uauthBNCModule](#uauthbncmodule).

```typescript
interface ConstructorOptions {
  uauth: UAuth
  shouldLoginWithRedirect?: boolean
  walletconnect: IWalletConnectProviderOptions
}
```

### shouldLoginWithRedirect

If `shouldLoginWithRedirect` is set to `true`, the [uauthBNCModule](#uauthbncmodule) instance will use the [uauth.login()](/login-with-unstoppable/libraries/uauth-js.md#login) method instead of the default, [uauth.loginWithPopup()](/login-with-unstoppable/libraries/uauth-js.md#loginwithpopup).