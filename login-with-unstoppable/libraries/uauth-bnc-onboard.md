---
title: UAuth BNC-Onboard Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/bnc-onboard middleware library.
---

# UAuth BNC-Onboard Library

### `UAuthBNCOnboard`

The `UAuthBNCOnboard` class is the default export for `@uauth/bnc-onboard`.

```javascript
import type {WalletModule} from 'bnc-onboard/dist/src/interfaces'
import type UAuth from '@uauth/js'
import type {
  ConstructorOptions,
  CallbackOptions,
  ModuleOptions,
} from '@uauth/bnc-onboard'

export default class UAuthBNCOnboard {
  // A reference to the UAuth library. Used to construct a UAuth instance if one
  // isn't passed in the constructor.
  public static UAuth: typeof UAuth

  // Assigns pkg to UAuthConnector.UAuth.
  public static registerUAuth(pkg: typeof UAuth): void

  // Dynamically imports UAuth and assigns it to UAuthConnector.UAuth.
  public static async importUAuth(): Promise<void>

  constructor(public options: ConstructorOptions) {}

  // Gets the local UAuth instance.
  public get uauth(): UAuth

  // Calls UAuthBNCOnboard.importUAuth and gets the local UAuth instance.
  public async getUAuth(): Promise<UAuth>

  // Calls this.uauth.loginCallback and selects wallet using onboard instance.
  public async callbackAndWalletSelect(
    options: CallbackOptions,
  ): Promise<boolean>

  // Creates a wallet module used to instanciate an Onboard instance
  public module({preferred = true, walletconnect}: ModuleOptions): WalletModule
}
```

### `shouldLoginWithRedirect`

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

### Caching Wallets

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