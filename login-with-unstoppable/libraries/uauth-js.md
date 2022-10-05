---
title: UAuth JS Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the core @uauth/js library.
---

# UAuth JS Library

The `@uauth/js` library is the core UAuth library for single-page applications. It manages login sessions with the Uauth Service and provides a login popup flow built with React.

## Client

The `Client` class is the default export for the `@uauth/js` package.

### constructor

```javascript
constructor(options: ClientOptions)

const uauth = new Client(options);
```

### login()

Initiates UAuth authentication with an auth server redirect and callback flow. When using this method, the `redirectUri` in the [ClientOptions](#clientoptions) must point to a page that calls [loginCallback()](#logincallback).

```typescript
async login(
    options: Partial<LoginOptions> = {}
): Promise<void>
```

### loginWithPopUp()

Initiates UAuth authentication with a React popup flow.

```typescript
async loginWithPopup(
    options: Partial<Omit<LoginOptions, 'responseMode'>> = {},
    config?: PopupConfig,
): Promise<Authorization>
```

### loginCallback()

Parses the authorization code and application state after [login()](#login) has been called and the authorization server has redirected back to the `redirectUri` defined in the [ClientOptions](#clientoptions).

```typescript
async loginCallback<T>(
    options?: Partial<LoginCallbackOptions>,
): Promise<LoginCallbackResponse<T>>
```

### authorization()

Returns the [Authorization](#authorization) for the current login session.

```typescript
async authorization(
    options: AuthorizationOptions = {},
): Promise<Authorization>
```

### user()

Returns the [UserInfo](#userinfo) associated with the current UAuth instance.

```typescript
async user(options: UserOptions = {}): Promise<UserInfo>
```

### getVerifiedAccounts()

Returns [VerifiedAddress](#verifiedaddress) array containing all verified accounts associated with an authorized domain, with optional symbol filtering, which allows a dapp to request only the verified accounts they are interested in.

```typescript
getVerifiedAccounts(
  authorization: Authorization, 
  symbols: string[] = []
): VerifiedAddress[]
```

### getAuthorizationAccount

The UAuth service allows users to login with certain verified accounts associated with a domain's ud.me profile in addition to the Ethereum or Polygon wallet that owns the domain. This method takes an [Authorization](#authorization) from [loginWithPopup()](#login) or [loginCallback()](#logincallback) and returns a [VerifiedAddress](#verifiedaddress) describing the account that authorized a login request, such as a verified Solana wallet.

```typescript
getAuthorizationAccount(
    authorization: Authorization, 
    type = 'sig', 
    version = 'v1'
): VerifiedAddress | undefined
```

### logout()

Executes the `beforeRedirect` callback if defined in [`LogoutOptions`](#logoutoptions), deletes the session authorization from the local clientstore, and redirects to the `postLogoutRedirectUri`.

```typescript
async logout({
    clientID,
    username,
    scope,
    resource,
    ...options
}: Partial<LogoutOptions> = {}): Promise<void>
```

## ClientOptions

The options object passed to the Client [constructor](#constructor).

```typescript
export interface ClientOptions {
  // Fallback Login Options
  clientID: string
  clientSecret?: string
  redirectUri: string
  clientAuthMethod?: ClientAuthMethod
  resource?: string
  responseMode?: ResponseMode
  scope?: string
  prompt?: string
  maxAge?: number

  // Fallback Logout Options
  rpInitiatedLogout?: boolean
  postLogoutRedirectUri?: string

  // Cache Options
  cacheOptions?: CacheOptions

  // Other Options
  window?: Window | undefined
  fallbackIssuer?: string
  storeType?: StoreType
  store?: Store
  createIpfsUrl?: (cid: string, path: string) => string
  resolution?: DomainResolver
}
```

## LoginOptions

The options object passed to [login()](#login) and [loginWithPopup()](#loginwithpopup).

```typescript
interface LoginOptions {
  clientID: string
  clientSecret?: string
  clientAuthMethod: ClientAuthMethod
  maxAge: number
  prompt: string
  resource?: string
  redirectUri: string
  responseMode: ResponseMode
  scope: string
  flowId?: 'login' | 'signup'
  packageName?: string
  packageVersion?: string

  username?: string
  state?: any
  beforeRedirect?(url: string): Promise<void> | void
}
```

## Authorization

The login authorization returned by [loginWithPopup()](#loginwithpopup) and [loginCallback()](#logincallback).

```typescript
interface Authorization {
  accessToken: string
  expiresAt: number
  idToken: IdToken
  scope: string
  resource?: string
}
```

## AuthorizationOptions

```typescript
interface AuthorizationOptions {
  clientID?: string
  username?: string
  scope?: string
  resource?: string
}
```

## UserOptions

The options object passed to [user()](#user).

```typescript
interface UserOptions extends AuthorizationOptions {
  claims?: string[]
}
```

## BaseLogoutOptions

```typescript
interface BaseLogoutOptions {
  rpInitiatedLogout: boolean
  postLogoutRedirectUri?: string
}
```

## LogoutOptions

The options object passed to [logout()](#logout). Extends [BaseLogoutOptions](#baselogoutoptions) and [AuthorizationOptions](#authorizationoptions).

```typescript
interface LogoutOptions {
  state?: any
  beforeRedirect?(url: string): Promise<void> | void
}
```

## LoginCallbackOptions

The options object passed to [loginCallback()](#logincallback).

```typescript
interface LoginCallbackOptions {
  url?: string
}
```

## LoginCallbackResponse

The object returned by [loginCallback()](#logincallback).

```typescript
interface LoginCallbackResponse<T> {
  authorization: Authorization
  state?: T
}
```

## UserInfo

The object returned by [user()](#user). Equivalent to the response of the `UserInfo` endpoint of the UAuth server. Contains the claims requested by the current authorization session, based on the values defined in the `ClientOptions.scope` field. See [Scopes for Login](/login-with-unstoppable/scopes-for-login.md) for more information about supported login scopes.

```typescript
interface UserInfo {
// Partial<WalletClaims>
  wallet_address: string
  wallet_type_hint: WalletType
  eip4361_message: string
  eip4361_signature: string
            
// Partial<EmailClaims>
  email: string
  email_verified: boolean
            
// Partial<AddressClaims>
  address: AddressClaim

// Partial<PhoneClaims>
  phone_number: string
  phone_number_verified: boolean

// Partial<ProfileClaims>
  name: string
  given_name: string
  family_name: string
  middle_name: string
  nickname: string
  preferred_username: string
  profile: string
  picture: string
  website: string
  gender: string
  birthdate: string
  zoneinfo: string
  locale: string
  updated_at: string
            
// Partial<HumanityCheckClaims> { sub: string }
  humanity_check_id: string
}
```

## VerifiedAddress

Defines a verified address associated with an authorized domain. Returned by [getVerifiedAccounts()](#getverifiedaccounts) and [getAuthorizationAccount()](#getauthorizationaccount).

```typescript
interface VerifiedAddress {
  address: string
  message: string
  signature: string
  symbol: string
}
```