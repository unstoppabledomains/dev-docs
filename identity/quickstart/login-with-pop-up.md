---
title: Unstoppable Login with Popup
description: This integration guide is intended for a generic @uauth/js, no Ethereum provider, with callback, and with the popup feature.
redirectFrom:
  - /login-with-unstoppable/login-integration-guides/login-with-popup/
showNextButton: false
---

# Unstoppable Login with Popup

In this integration guide, we will show how to add Unstoppable Login with the pop-up feature to an empty HTML page. There will be no complicated install requirements – to complete this integration, you just need to be a JavaScript developer with a few minutes of time.

<figure>
<div class="video-container">
<iframe src="https://www.youtube.com/embed/cGoz0nQWyAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<figcaption>Tutorial: Integrating Login With Popup</figcation>
</figure>

:::info
If you’d like to skip ahead or follow along you can download the [full example (1 KB zipped)](https://gist.github.com/perfect-cents/b2a0df5b73b441feb86168a272670565/archive/2463d1538d9e8257e70dc1908e65d95464665fe9.zip) beforehand.
:::

## Step 1: Project Setup

Before we get started, you’ll need to install Node and Yarn or npm and create a directory for your project. Then, install the following packages into your app using one of the following scripts:

```shell yarn
mkdir project && cd project
yarn init --yes
yarn add --dev parcel
yarn add @uauth/js
```

```shell npm
mkdir project && cd project
npm init --yes
npm install --save-dev parcel
npm install --save @uauth/js
```

:::info
**@uauth/js** is the library used for implementing Unstoppable Login on the frontend.
:::

## Step 2: Create an HTML File

Build out the `index.html` file as follows:

```html
<html>
  <head>
    <title>Unstoppable Login</title>
  </head>
  <body>
    <button onclick="login()">Unstoppable Login</button>
    <button onclick="logout()">Logout</button>
    <script type="module" src="app.js"></script>
  </body>
</html>
```

## Step 3: Instantiate the Library

Now, configure the `app.js` as follows:

```javascript
import UAuth from "@uauth/js";

const uauth = new UAuth({
  clientID: "uauth_example_spa_id",
  redirectUri: "http://localhost:5000/callback",
});
```

## Step 4: Implement the Login Handler

Add a login function to `app.js` as follows:

```javascript
window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup();

    console.log(authorization);
  } catch (error) {
    console.error(error);
  }
};
```

## Step 5: Implement the Logout Handler

Add a logout function to `app.js` as follows:

```javascript
window.logout = async () => {
  await uauth.logout();
  console.log("Logged out with Unstoppable");
};
```

## Step 6: Unstoppable Login

<embed src="/snippets/_login-mainnet-warning.md" />

The following command will run the app. Keep in mind that the credentials will only work if you are on the correct port.

```shell
yarn parcel --open --port 5000 index.html
```

<embed src="/snippets/_login-paths-next.md" />
