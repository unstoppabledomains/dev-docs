---
description: >-
  This integration guide is intended for a custom @uauth/node integration for
  server-side applications and does not come with a default front-end UI.
---

# Node.js Server Guide: Login with Unstoppable

This installation guide is for custom `@uauth/node` library used in server-side applications. It does not come with a default front-end UI and requires custom front-end UI development. For more information about this library, please see the associated [github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/node).

{% hint style="info" %}
For a completed example of a server integration using `@uauth/node` library, you can [download the files](https://github.com/unstoppabledomains/uauth/tree/main/examples/server) directly.
{% endhint %}

{% hint style="warning" %}
**Important:** For Login with Unstoppable integrations, users must use **Polygon Mainnet** or **Ethereum Mainnet** as the network for the domain. Domains minted on Rinkeby Testnet will not work with the Login feature.
{% endhint %}

## Step 1: Install the @uauth/node Library

Install the yarn.

```shell
yarn add @uauth/node @unstoppabledomains/resolution
```

## Step 2: Setup @uauth/node Library

Then, setup and configure the library.

```javascript
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
  clientID: 'uauth_example_spa_id',
  clientSecret: 'uauth_example_spa_secret',
  redirectUri: 'http://localhost:5000/callback',
  scope: 'openid email wallet'
  resolution: new Resolution(),
})
```

## Step 3: Build the Server's Endpoints

Because there are a variety of ways to store session data about a user, the package comes with a way to specify in an abstract way the three methods required to authorize and maintain a user session.

### Step 3A: The login Method

**`login(ctx: Context, options: {username: string}): Promise<void>`**

1. Takes a username and generates an interaction object, saves it to a session.
2. Queries the blockchain to find if an auth server has been configured otherwise uses fallback.
3. Redirects the user to the auth server with a OIDC compliant authorization request.
4. After every authorization attempt the server will redirect the user to the `redirectUri` specified at instantiation.

### Step 3B: The callback Method

**`callback(ctx: Context): Promise<Authorization>`**

1. Parses authorization code found in current uri.
2. Exchanges authorization code for access and id tokens.
3. Stores authorization (id and access tokens) inside session.

### Step 3C: The middleware Method

**`middleware(): (ctx: Context) => void`**

1. The authorization inside the session is attached to the context then passed to the next handler.&#x20;
2. Or if there is no session it throws an Error.

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

Developers can also create their own login system using a different session system from `express-session` using the [`createLogin` method](node-js-server-guide.md#createlogin-method).

## Step 4: Build a Front-end UI

There are two UI options for when you create a server-side integration.

### Option 1: Create a Custom UI

1. The form must call the endpoint where the [`login` handler](node-js-server-guide.md#step-3a-a-login-method) is called and it must correspond with the parameters to that function. See this example corresponding with the `login` handler configured above in [Step 3D](node-js-server-guide.md#step-3d-putting-it-all-together).

```javascript
app.get('/', (_, res) => {
  const indexPage = `<!DOCTYPE html><html><body>
<form action="/login" method="POST">
  <input name="domain" id="domain" />
  <button type="submit">Login</button>
</form></body></html>`

  return res.send(indexPage)
})
```

### Option 2: Use the DOM UI Package

The [DOM UI package](https://github.com/unstoppabledomains/uauth/tree/main/packages/dom-ui) can be used to help with the front-end UI development. The DOM UI package creates a simple UI modal on the website that is used by `@uauth/js` library internally to facilitate sign-in, so the user has a consistent UI on the front-end.&#x20;

There is no good documentation of this package yet, so developers should [see how it is used inside @uauth/js library](https://github.com/unstoppabledomains/uauth/blob/main/packages/js/src/Client.ts#L232).

The package takes an injection with a submit method attached that is called when a user interacts with the modal. The submit function should call the [login function/route](node-js-server-guide.md#step-3a-a-login-method) on your own service.

## Step 5: Configure the Login UI

Login with Unstoppable has UI requirements that must be configured to properly display the authenticated user's domain name after a successful login. For Node.js integrations, you can download official UD buttons to use in your UI in [**Step 3**](../login-ui-configuration.md#step-3-download-ud-buttons-node-js-only). Please follow the instructions in the [**Login UI Configuration Guide**](../login-ui-configuration.md) to complete this final step in the integration process.

## Step 6: Run the Server!

The server can now listen and serve requests.

```javascript
app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`)
})
```

{% hint style="success" %}
**Congratulations!** You just implemented Login with Unstoppable.
{% endhint %}

## Reference

### createLogin Method

**`client.createLogin<Context>()`**

This is the login factory method. Here is an example using `express-sessions`.

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
