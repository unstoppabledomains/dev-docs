---
title: UAuth JS Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the core @uauth/node library.
---

# UAuth Node.js Library

The `@uauth/node` library is the core UAuth library for server-side applications. It does not come with a default front-end UI and requires custom front-end UI development. 

## Client

The `Client` class is the default export for the `@uauth/node` package.

### constructor

```typescript
constructor(options: ClientConstructorOptions)
```

### createExpressSessionLogin()

```typescript
createExpressSessionLogin(
    sessionKey = 'uauth',
    localsKey = 'uauth',
): ExpressSessionLogin 
```

### validateAuthorization()

```typescript
validateAuthorization(
    authorization: Authorization | undefined,
    scopes: string[] = [],
)
```

### createLogin()

This is the login factory method for the `Client` class.

```typescript
createLogin<T>(actions: {
    storeInteraction: (ctx: T, interaction: Interaction) => void | Promise<void>,
    retrieveInteraction: (ctx: T) => Interaction | undefined | Promise<Interaction | undefined>,
    deleteInteraction: (ctx: T) => void | Promise<void>,
    storeAuthorization: (ctx: T, authorization: Authorization) => void | Promise<void>,
    retrieveAuthorization: (ctx: T) => Authorization | undefined | Promise<Authorization | undefined>,
    deleteAuthorization: (ctx: T) => void | Promise<void>,
    retrieveAuthorizationEndpointResponse: (ctx: T) => AuthorizationEndpointResponse,
    passOnAuthorization: (ctx: T, authorization: Authorization) => void,
    redirect: (ctx: T, url: string) => void | Promise<void>,
  }): {
    login(ctx: T, options: LoginOptions): Promise<void>
    callback(ctx: T): Promise<Authorization>
    middleware(ctx: T, scopes?: string[]): void
  }
```

Here is an example using `express-sessions`.

```typescript
const {login, callback, middleware} = client.createLogin<ExpressSessionContext>(
  {
    // Interaction CR*D operations
    storeInteraction: (ctx, interaction) => {
      ctx.req.session.interaction = interaction
    },
    retrieveInteraction: ctx => ctx.req.session.interaction,
    deleteInteraction: ctx => {
      delete ctx.req.session.interaction
    },

    // Authorization CR*D operations
    storeAuthorization: (ctx, authorization) => {
      ctx.req.session.uauth = uauth
    },
    retrieveAuthorization: ctx => ctx.req.session.uauth,
    deleteAuthorization: ctx => {
      delete ctx.req.session.uauth
    },

    // Takes the context and returns authorization response as an `Object`.
    retrieveAuthorizationEndpointResponse: ctx => ctx.req.body,

    // Attaches the authorization to context and calls next.
    passOnAuthorization: (ctx, authorization) => {
      ctx.res.locals.uauth = authorization
      return ctx.next()
    },

    // Redirects user to different url.
    redirect: (ctx, url) => {
      ctx.res.redirect(url)
    },
  },
)
```

## ClientOptions

```typescript
interface ClientOptions {
  clientID: string
  clientSecret: string
  scope: string
  redirectUri: string
  maxAge: number
  clockSkew: number
  audience?: string
  resolution: DomainResolver
  fallbackIssuer: string
  createIpfsUrl: (cid: string, path: string) => string
}
```

## ClientConstructorOptions

The configuration options object passed to the `@uauth/node` Client [constructor](#constructor).

```typescript
type ClientConstructorOptions = Optional<
  ClientOptions,
  'fallbackIssuer' | 'scope' | 'maxAge' | 'clockSkew' | 'createIpfsUrl'
>
```

## BuildAuthorizationUrlAndInteractionOptions
```typescript
interface BuildAuthorizationUrlAndInteractionOptions {
  username?: string
}
```

## Interaction

```typescript
interface Interaction {
  state: string
  nonce: string
  verifier: string
  tokenEndpoint: string
  jwksUri?: string
  jwks?: string
}
```

## LoginOptions

The options object passed to the login function returned by [createLogin](#createlogin). Extends [BuildAuthorizationUrlAndInteractionOptions](#buildauthorizationurlandinteractionoptions).

```typescript
interface LoginOptions extends BuildAuthorizationUrlAndInteractionOptions {
  beforeRedirect?(options: LoginOptions, url: string): Promise<void> | void
}
```

## ExpressSessionContext

```typescript
interface ExpressSessionContext {
  req: Request
  res: Response
  next: NextFunction
}
```

## ExpressSessionLogin

```typescript
interface ExpressSessionLogin {
  login: (
    req: Request,
    res: Response,
    next: NextFunction,
    options: LoginOptions,
  ) => Promise<void>
  callback: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<Authorization>
  middleware: (
    scopes?: string[],
  ) => (req: Request, res: Response, next: NextFunction) => void
}
```