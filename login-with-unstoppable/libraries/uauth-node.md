---
title: UAuth JS Library | Unstoppable Domains Developer Portal
description: This page provides documents the public interface of the core @uauth/node library.
---

# UAuth Node.js Library

### `createLogin<Context>()`

This is the login factory method for the `Client` class. Here is an example using `express-sessions`.

```javascript
interface ExpressSessionContext {
  req: Request
  res: Response
  next: NextFunction
}

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