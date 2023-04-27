---
title: Login with Unstoppable without Popup
description: This integration guide is intended for a generic @uauth/js, no Ethereum provider, with callback, and without popup.
redirectFrom:
  - /login-with-unstoppable/login-integration-guides/login-without-popup/
showNextButton: false
---

# Login with Unstoppable without Popup

This integration guide shows you how to add Login to Unstoppable to a single-page application without the popup feature, using a TypeScript and React Router example. You will configure the application to receive the authorization tokens and metadata by following the steps below.

<embed src="/snippets/_login-mainnet-warning.md" />

:::info dependencies
The example code in this guide has the following dependencies: `typescript`, `react`, `react-router-dom`, `@uauth/js`
:::

## Step 1: Create Your App

Create a new React application if you don't already have one. The following commands will create a new react/typescript project in the `login-without-popup` folder.

```yarn
yarn create react-app login-without-popup --template typescript
```

```npx
npx create-react-app login-without-popup --template typescript
```

All example code can be added to the `/src/App.tsx` file created by this step.

## Step 2: Install the Libraries

For this example, we will use the UAuth library for login authentication and React Router to handle single page routing.

```sh yarn
yarn add react-router-dom @uauth/js
```

```sh npm
npm install --save react-router-dom @uauth/js
```

Add the following imports to your `App.tsx`.

```typescript
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  RouteProps,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
```

## Step 3: Configure `UAuth`

First, you will configure the UAuth class using the [Client Metadata](/identity/guides/client-configurations.md#client-metadata) from your login client configuration.

```typescript
import UAuth from "@uauth/js";

const uauth = new UAuth({
  clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  redirectUri: "http://localhost:3000/callback",
  scope: "openid wallet email:optional humanity_check:optional",
});
```

:::danger
The redirect URIs used to configure this `UAuth` instance must be an **EXACT** match to the Redirect URIs [Redirect URI](login-client-configuration.md#redirect-uris) entered in your [Login Client Configuration](/identity/guides/client-configurations.md). See [Rules for Redirect URIs](login-client-configuration.md#rules-for-redirect-uris) for more details.

For local testing, they must also match the address and port your application is running on. For Create React App, this is `localhost:3000` by default.
:::

## Step 4: Create a Login Button

Next, you will call `uauth.login()` to initiate a UAuth login upon clicking the login button. Features of this method include:

1. Exposes modal to allow users to input their domain.
2. Queries the blockchain to find if an auth server has been configured otherwise uses fallback.
3. Redirects the user to the auth server with a OIDC compliant authorization request.
4. After every authorization attempt the server will redirect the user to the `redirectUri` specified at instantiation.
5. Throws if any login errors happen before you are redirected to the server.

Below is an example of what a login page could look like in React.

```typescript
const Login: React.FC<RouteProps> = (props) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(
    new URLSearchParams(useLocation().search || "").get("error")
  );

  const handleLoginButtonClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    setErrorMessage(null);
    uauth.login().catch((error) => {
      console.error("login error:", error);
      setErrorMessage("User failed to login.");
    });
  };

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <button onClick={handleLoginButtonClick}>Login with Unstoppable</button>
    </>
  );
};
```

## Step 5: Create the Callback Page

On the page registered as your `redirectUri`, you will call `uauth.loginCallback()` on page load. It will then exchange the authorization code for access and id tokens and handle any failures along the way. Features of this method include:

1. Parses authorization code found in current URI.
2. Exchanges authorization code for access and id tokens.
3. Stores authorization (id and access tokens) inside cache, the default cache is `window.localStorage`.
4. Throws if an error occurs when logging into the server or when parsing and verifying the authorization server's response.

Below is an example of what a callback page could look like in React.

```typescript
const Callback: React.FC<RouteProps> = (props) => {
  const [navigateTo, setNavigateTo] = useState<string>();

  useEffect(() => {
    // Try to exchange authorization code for access and id tokens.
    uauth
      .loginCallback()
      // Successfully logged and cached user in `window.localStorage`
      .then((response) => {
        console.log("loginCallback ->", response);
        setNavigateTo("/profile");
      })
      // Failed to exchange authorization code for token.
      .catch((error) => {
        console.error("callback error:", error);
        setNavigateTo("/login?error=" + error.message);
      });
  }, []);

  if (navigateTo) {
    return <Navigate to={navigateTo} />;
  }

  return <>Loading...</>;
};
```

## Step 6: Create a Logout Button

Finally, you will call `uauth.logout()` to handle logging out upon clicking the logout button. Features of this method include:

1. Clears cache of authorization.
2. If the `postLogoutRedirectUri` is present:
   1. Uses cached authorization to create a logout URI.
   2. Redirects to that URI.
   3. After every logout attempt the server will redirect the user to the `postLogoutRedirectUri` specified at instantiation.

```typescript
const Profile: React.FC<RouteProps> = () => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [navigateTo, setNavigateTo] = useState<string>();

  useEffect(() => {
    uauth
      .user()
      .then(setUser)
      .catch((error) => {
        console.error("profile error:", error);
        setNavigateTo("/login?error=" + error.message);
      });
  }, []);

  const handleLogoutButtonClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    console.log("logging out!");
    setLoading(true);
    uauth.logout().catch((error) => {
      console.error("profile error:", error);
      setLoading(false);
    });
  };

  if (navigateTo) {
    return <Navigate to={navigateTo} />;
  }

  if (!user || loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={handleLogoutButtonClick}>Logout</button>
    </>
  );
};
```

## Step 7: Routing to your Login Pages

Once you have all of your pages, you will need to create routes to them for React Router. This can be returned as follows from your React App component.

```typescript
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="callback" element={<Callback />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
```

:::success Contratulations
You now have an Login with Unstoppable single-page application without the popup feature. Type `yarn start`/`npm start` to preview your example application with a local server.
:::

<embed src="/snippets/_login-paths-next.md" />
