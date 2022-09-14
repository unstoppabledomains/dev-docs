---
title: UAuth Moralis Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/moralis middleware library.
---

# UAuth Moralis Library

The `@uauth/moralis` library is a middleware library used for integrating UAuth with Moralis applications.

## UAuthMoralisConnector

The default export for the `@uauth/moralis` library.

```typescript
class UAuthMoralisConnector extends AbstractWeb3Connector
```

### activate()

```typescript
public async activate({
    chainId: providedChainId,
    mobileLinks,
} = {}): Promise<any>
```

### disconnect()

Discconnects any walletconnect provider and calls [`uauth.logout()`](/login-with-unstoppable/libraries/uauth-js.md#logout).

```typescript
public async deactivate()
```

### setUAuthOptions

Sets the static [`UAuthConstructorOptions`](#uauthconnectoroptions) member of the class.

```typescript
public static setUAuthOptions(_options: UAuthConnectorOptions)
```

### uauth

Returns the `uauth` member of the class instance.

```typescript
public get uauth(): UAuth
```

## UAuthConnectorOptions

The configuration options object passed to the UAuthMoralisConnector [constructor](#constructor).

```typescript
interface UAuthConnectorOptions
  extends Partial<UAuthConstructorOptions> {
  uauth?: UAuth
  connectors: UAuthMoralisConnectors
  shouldLoginWithRedirect?: boolean
}
```

### shouldLoginWithRedirect

If `shouldLoginWithRedirect` is set to `true`, the [UAuthMoralisConnector](#uauthmoralisconnector) instance will use the [login()](/login-with-unstoppable/libraries/uauth-js.md#login) method instead of the default, [loginWithPopup()](/login-with-unstoppable/libraries/uauth-js.md#loginwithpopup).

## UAuthMoralisConnectors

```typescript
interface UAuthMoralisConnectors {
  injected: any | undefined
  walletconnect: any | undefined
}
```