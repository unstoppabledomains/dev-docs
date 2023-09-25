---
title: Blocknative UAuth Module | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @web3-onboard/uauth Blocknative module.
redirectFrom:
  - /login-with-unstoppable/libraries/web3-onboard-uauth/
---

# UAuth Web3-Onboard Library

The `@web3-onboard/uauth` package is a module used for integrating UAuth with Blocknative Web3-Onboard applications.

## uauthModule

The default export for the `@web3-onboard/uauth` library. Implements Web3 Onboard `WalletInit`.

```typescript
function uauthModule(options: UauthInitOptions): WalletInit;
```

## UauthInitOptions

The options object passed to [uauthModule](#uauthmodule).

```typescript
type UauthInitOptions = {
  clientID: string; // required and will throw an error if not included: links dapp to Unstoppable Domains for customization
  redirectUri: string; // required and will throw an error if not included: used for pop-up and callback redirection
  scope?: string; // default = 'openid wallet'
  shouldLoginWithRedirect?: boolean; // if true, redirects to your callback page
  bridge?: string; // default = 'https://bridge.walletconnect.org'
  qrcodeModalOptions?: {
    mobileLinks: string[]; // set the order and list of mobile linking wallets
  };
  connectFirstChainId?: boolean; // if true, connects to the first network chain provided
};
```

### shouldLoginWithRedirect

If `shouldLoginWithRedirect` is set to `true`, the [uauthModule](#uauthmodule) instance will use the [uauth.login()](/identity/sdk-and-libraries/uauth-js.md#login) method instead of the default, [uauth.loginWithPopup()](/identity/sdk-and-libraries/uauth-js.md#loginwithpopup).
