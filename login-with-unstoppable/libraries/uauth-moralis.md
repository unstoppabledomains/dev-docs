---
title: UAuth Moralis Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the @uauth/moralis middleware library.
---

# UAuth Moralis Library

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

```typescript
interface UAuthConnectorOptions
  extends Partial<UAuthConstructorOptions> {
  uauth?: UAuth
  connectors: UAuthMoralisConnectors
  shouldLoginWithRedirect?: boolean
}
```

## UAuthMoralisConnectors

```typescript
interface UAuthMoralisConnectors {
  injected: any | undefined
  walletconnect: any | undefined
}
```