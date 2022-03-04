---
description: >-
  This integration guide is intended for a generic @uauth/js, no Ethereum
  provider, with callback, and without popup.
---

# 10 Minute Guide: Login with Unstoppable without Popup

This integration guide shows you how to add Login to Unstoppable to your application using javascript, without the popup feature. You will essentially be configuring the application to receive the authorization tokens and metadata by following the steps below.&#x20;

{% hint style="warning" %}
**Important:** For Login with Unstoppable integrations, users must use **Polygon Mainnet** or **Ethereum Mainnet** as the network for the domain. Domains minted on Rinkeby Testnet will not work with the Login feature.
{% endhint %}

## Step 1: Configure the UAuth Class

In this step, you will configure the UAuth class as follows:

* Add the Client ID and Client Secret from your [credentials](../getting-login-credentials.md).
* Add all the [scopes](../scopes-for-login.md) you will be requesting from the user.
* Add the [​​](https://github.com/unstoppabledomains/uauth/blob/c01776f3aedf599dfc76b20ea86750890754010e/examples/spa/src/index.tsx#L23)redirect URI that the auth server will redirect back to after every authorization attempt.

```javascript
const uauth = new UAuth({
  // These can be copied from the bottom of your app's configuration page on unstoppabledomains.com.
  clientID: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,

  // These are the scopes your app is requesting from the ud server.
  scope: 'openid email wallet',

  // This is the url that the auth server will redirect back to after every authorization attempt.
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
})
```

{% hint style="danger" %}
The redirect URls used in this UAuth class must be an exact match to the redirect URIs entered on the Client Configuration Screen (see the [Getting Login Credentials](../getting-login-credentials.md) Guide for details).
{% endhint %}

## Step 2: Create a Login Button

Next, you will call the `uauth.login()` function to initiate a UAuth login. The function should be called upon clicking the login button. Features of this method include:&#x20;

1. Exposes modal to allow users to select domain.
2. Queries the blockchain to find if an auth server has been configured otherwise uses fallback.
3. Redirects the user to the auth server with a OIDC compliant authorization request.
4. After every authorization attempt the server will redirect the user to the `redirectUri` specified at instantiation.
5. This function will also throw if any login errors happen before you are redirected to the server.

Below is an example of what a login page could look like in React.

```javascript
const Login: React.FC<RouteProps> = props => {
  const [errorMessage, setErrorMessage] = useState<string | null>(
    new URLSearchParams(props.location?.search || '').get('error'),
  )

  const handleLoginButtonClick: React.MouseEventHandler<HTMLButtonElement> =
    e => {
      setErrorMessage(null)
      uauth.login().catch(error => {
        console.error('login error:', error)
        setErrorMessage('User failed to login.')
      })
    }

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <button onClick={handleLoginButtonClick}>Login with Unstoppable</button>
    </>
  )
}
```

## Step 3: Create the Callback Page

Then, on the page registered as your `redirectUri`, you will call the `uauth.loginCallback()` function. The function should be called upon page load and will  the to exchange the authorization code for access and id tokens and handle any failures along the way. Features of this method include:&#x20;

1. Parses authorization code found in current URI.
2. Exchanges authorization code for access and id tokens.
3. Stores authorization (id and access tokens) inside cache, the default cache is `window.localStorage`.
4. This function will throw if an error occurs when logging into the server or when parsing and verifying the authorization server's response .

Below is an example of what a callback page could look like in React.

```javascript
const Callback: React.FC<RouteProps> = props => {
  const [redirectTo, setRedirectTo] = useState<string>()

  useEffect(() => {
    // Try to exchange authorization code for access and id tokens.
    uauth
      .loginCallback()
      // Successfully logged and cached user in `window.localStorage`
      .then(response => {
        console.log('loginCallback ->', response)
        setRedirectTo('/profile')
      })
      // Failed to exchange authorization code for token.
      .catch(error => {
        console.error('callback error:', error)
        setRedirectTo('/login?error=' + error.message)
      })
  }, [])

  if (redirectTo) {
    return <Redirect to={redirectTo} />
  }

  return <>Loading...</>
}
```

## Step 4: Create the Logout Button

For the last step, you will call the `uauth.logout()` function to handle logging out. The function should be called upon clicking the logout button. Features of this method include:&#x20;

1. Clears cache of authorization.
2. If the `postLogoutRedirectUri` is present.
   1. Uses cached authorization to create a logout uri.
   2. Redirects to that uri.
   3. After every logout attempt the server will redirect the user to the `postLogoutRedirectUri` specified at instantiation.

```javascript
const Profile: React.FC<RouteProps> = () => {
  const [user, setUser] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [redirectTo, setRedirectTo] = useState<string>()

  useEffect(() => {
    uauth
      .user()
      .then(setUser)
      .catch(error => {
        console.error('profile error:', error)
        setRedirectTo('/login?error=' + error.message)
      })
  }, [])
  
  const handleLogoutButtonClick: React.MouseEventHandler<HTMLButtonElement> =
    e => {
      console.log('logging out!')
      setLoading(true)
      uauth
        .logout()
        .catch(error => {
          console.error('profile error:', error)
          setLoading(false)
        })
    }

  if (redirectTo) {
    return <Redirect to={redirectTo} />
  }

  if (!user || loading) {
    return <>Loading...</>
  }

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={handleLogoutButtonClick}>Logout</button>
    </>
  )
}
```

## Step 5: Add Login UI Requirements

Login with Unstoppable has UI requirements for the UD buttons, user modals, and authenticated user icons. For example, once a user has successfully authenticated, the application's UI should display the user’s domain name (instead of address) to confirm the authorization was successful.&#x20;

Please follow the instructions in the [**Login UI Requirements Guide**](../login-ui-requirements.md) to complete this final step in the integration process.

{% hint style="success" %}
**Congratulations!** You just implemented Login with Unstoppable.
{% endhint %}
