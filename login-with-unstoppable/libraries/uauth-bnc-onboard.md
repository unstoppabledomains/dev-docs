---
title: UAuth BNC-Onboard Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/bnc-onboard middleware library.
---

# UAuth BNC-Onboard Library

The `@uauth/bnc-onboard` library is a deprecated middleware library used for integrating UAuth with Blocknative BNC Onboard applications. For middleware for the latest Blocknative Onboard version, see [web3-onboard](/login-with-unstoppable/libraries/uauth-web3-onboard.md).

## UAuthBNCOnboard

The `UAuthBNCOnboard` class is the default export for `@uauth/bnc-onboard`.

```javascript
export default class UAuthBNCOnboard {
```

### constructor

```typescript
constructor(public options: ConstructorOptions)
```

### UAuth

A reference to the UAuth library. Used to construct a UAuth instance if one isn't passed to the constructor.

```typescript  
public static UAuth: typeof UAuth
```

### registerUAuth()

Registers an imported `@uauth/js` package as `UAuthConnector.UAuth.`

```typescript 
public static registerUAuth(pkg: typeof UAuth): void
```

### importUAuth()

Dynamically imports UAuth and assigns it to UAuthConnector.UAuth.

```typescript
public static async importUAuth(): Promise<void>
```

### get uauth()

Gets the local UAuth instance.

```typescript
public get uauth(): UAuth
```

### getUAuth()

Calls UAuthBNCOnboard.importUAuth and gets the local UAuth instance.

```typescript
public async getUAuth(): Promise<UAuth>
```

### callbackAndWalletSelect()

Calls `this.uauth.loginCallback` and selects a wallet using onboard instance.

```typescript  
public async callbackAndWalletSelect(
  options: CallbackOptions,
): Promise<boolean>
```

### module()

Creates a wallet module used to instantiate an Onboard instance

```typescript
public module({preferred = true, walletconnect}: ModuleOptions): WalletModule}
```

## `shouldLoginWithRedirect`

If `shouldLoginWithRedirect` is set to `true` in the `ConstructorOptions` used to instantiate `UAuthBNCOnboard`, then you must set up a callback page for the authorization server to redirect back to.

```javascript
import onboard from './onboard'
import uauthOnboard from './uauthOnboard'

// On page load...

uauthOnboard
  .callbackAndWalletSelect({onboard})
  .then(() => {
    // Redirect to success page
  })
  .catch(error => {
    // Redirect to failure page
  })
```

## Caching Wallets

Blocknative has [documentation](https://docs.blocknative.com/onboard#caching-wallet-selection) about caching wallets. The example code won't quite work out of the box because the `bnc-onboard` library doesn't know if the token from the last login session is still valid. To fix this, you need to check before selecting the Unstoppable wallet.

```javascript
const previouslySelectedWallet = window.localStorage.getItem('selectedWallet')
if (previouslySelectedWallet != null) {
  // We check to see if the last connected wallet was the Unstoppable one.
  if (previouslySelectedWallet === 'Unstoppable') {
    // If it is then we try to retrieve the user and select the wallet.
    // Otherwise we don't try to reconnect.
    await uauthOnboard
      .getUAuth()
      .then(async uauth => {
        await uauth.user()
        await onboard.walletSelect('Unstoppable')
      })
      .catch(() => {
        window.localStorage.removeItem('selectedWallet')
      })
  } else {
    await onboard.walletSelect(previouslySelectedWallet)
  }
}
```