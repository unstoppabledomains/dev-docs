---
title: UAuth JS Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the core @uauth/js library.
---

# UAuth JS Library

The `@uauth/js` library is the core UAuth library for single-page applications. It manages login sessions with the Uauth Service and provides a login popup flow built with React.

## Client

The `Client` class is the default export for the `@uauth/js` package.

### Constructor

```javascript
constructor(options: ClientOptions){
  ...
}

const uauth = new Client(options);
```

### login()

Initiates UAuth authentication with an auth server redirect flow.

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

```typescript
async loginCallback<T>(
        options?: Partial<LoginCallbackOptions>,
    ): Promise<LoginCallbackResponse<T>>
```

### user()

Returns the [`UserInfo`](#userinfo) associated with the current UAuth instance.

```typescript
async user(options: UserOptions = {}): Promise<UserInfo>
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

## Interfaces

### AuthorizationOptions

```typescript
export interface AuthorizationOptions {
  clientID?: string
  username?: string
  scope?: string
  resource?: string
}
```

### ClientOptions

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

### LoginOptions

```typescript
interface LoginOptions {
// BaseLoginOptions
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

// FullLoginOptions extends BaseLoginOptions {
  username?: string
  state?: any
  beforeRedirect?(url: string): Promise<void> | void
}
```

### LogoutOptions

```typescript
interface LogoutOptions {
// BaseLogoutOptions
  rpInitiatedLogout: boolean
  postLogoutRedirectUri?: string

// AuthorizationOptions 
  clientID?: string
  username?: string
  scope?: string
  resource?: string

// LogoutOptions
  state?: any
  beforeRedirect?(url: string): Promise<void> | void
}
```

Extends `BaseLogoutOptions` and `AuthorizationOptions`.

### UserInfo

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

Equivalent to the response of the `UserInfo` endpoint of the UAuth server. Contains the claims requested by the current authorization sesson, based on the values defined in the `ClientOptions` scope field. See [Scope for Login](/login-with-unstoppable/scopes-for-login.md) for more information about supported login scopes.