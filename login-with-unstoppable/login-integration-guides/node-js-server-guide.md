---
title: Node.js Server Guide for Login with Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/node integration for server-side applications and does not come with a default front-end UI.
showNextButton: false
---

# Node.js Server Guide: Login with Unstoppable

This integration guide is for the `@uauth/node` library used in server-side applications. It does not come with a default front-end UI and requires custom front-end UI development. For more information about this library, please see the associated [github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/node).

:::info
For a completed example of a server integration using `@uauth/node` library, you can [download this example project](https://github.com/unstoppabledomains/uauth/tree/main/examples/server).
:::

<embed src="/snippets/_login-mainnet-warning.md" />

## Step 1: Install the @uauth/node Library

Install with `yarn` or `npm`.

```shell yarn
yarn add @uauth/node @unstoppabledomains/resolution
```

```shell npm
npm install --save @uauth/node @unstoppabledomains/resolution
```

## Step 2: Setup @uauth/node Library

Then, setup and configure the library. On your client dashboard, you will need to set the [Token Endpoint Authentication Method](/login-with-unstoppable/login-integration-guides/login-client-configuration/#token-endpoint-authentication-method) to **Client Secret Post**. You can then initialize a new `Client` instance using the Client Metadata copied from the **Basic** page.

```typescript
import {Client} from '@uauth/node'
import Resolution from '@unstoppabledomains/resolution'
// This package requires a fetch polyfill for now.

import 'whatwg-fetch'

global.XMLHttpRequest = require('xhr2')
global.XMLHttpRequestUpload = (
  global.XMLHttpRequest as any
).XMLHttpRequestUpload

// Done polyfilling fetch.

const client = new Client({
  clientID: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
  redirectUri: 'http://localhost:5000/callback',
  scope: 'openid wallet',
  resolution: new Resolution(),
})
```

## Step 3: Build the Server's Endpoints

Because there are a variety of ways to store session data about a user, the package comes with a way to specify in an abstract way the three methods required to authorize and maintain a user session.

### Step 3A: The Login Method

**`login(ctx: Context, options: {username: string}): Promise<void>`**

1. Takes a username and generates an interaction object, saves it to a session.
2. Queries the blockchain to find if an auth server has been configured otherwise uses fallback.
3. Redirects the user to the auth server with a OIDC compliant authorization request.
4. After every authorization attempt the server will redirect the user to the `redirectUri` specified at instantiation.

### Step 3B: The Callback Method

**`callback(ctx: Context): Promise<Authorization>`**

1. Parses authorization code found in current uri.
2. Exchanges authorization code for access and id tokens.
3. Stores authorization (id and access tokens) inside session.

### Step 3C: The Middleware Method

**`middleware(): (ctx: Context) => void`**

1. The authorization inside the session is attached to the context then passed to the next handler.
2. If there is no session, it throws an Error.

### Step 3D: Putting it all together

The following is an example of using the pre-configured `express-session` to implement login.

```javascript
import session from 'express-session'
import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

// Required for express session middleware
app.use(session({secret: 'keyboard cat'}))

// Required for /login & /callback
app.use(express.urlencoded({extended: true}))

const {login, callback, middleware} = client.createExpressSessionLogin()

app.post('/login', (req, res, next) => {
  return login(req, res, next, {
    username: req.body.domain,
  })
})

app.post('/callback', async (req, res, next) => {
  console.log('Calling back!')

  await callback(req, res, next)

  return res.redirect('/profile')
})

const onlyAuthorized = middleware()

app.get('/profile', onlyAuthorized, (req, res) => {
  res.json(res.locals.uauth)
})
```

Developers can also create their own login system using a different session system from `express-session` using the [login() method](#step-3a-the-login-method).

## Step 4: Build a Front-end UI

The form must call the endpoint where the [`login` handler](node-js-server-guide.md#step-3a-the-login-method) is called and it must correspond with the parameters to that function. See this example corresponding with the `login` handler configured above in [Step 3D](node-js-server-guide.md#step-3d-putting-it-all-together).

```javascript
app.get('/', (_, res) => {
  const indexPage = 
  `<!DOCTYPE html><html><body>
    <form action="/login" method="POST">
      <input name="domain" id="domain" />
    <button type="submit">Login</button>
    </form>
  </body></html>`

  return res.send(indexPage)
})
```

## Step 5: Run the Server!

The server can now listen and serve requests.

```javascript
app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`)
})
```

:::success Congratulations!
You just implemented Login with Unstoppable.
:::

<embed src="/snippets/_login-paths-next.md" />