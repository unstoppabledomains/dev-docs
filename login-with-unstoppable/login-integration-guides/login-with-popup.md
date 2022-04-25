---
title: 5 Minute Guide for Login with Unstoppable with Popup
description: This integration guide is intended for a generic @uauth/js, no Ethereum provider, with callback, and with the popup feature.
---

# 5 Minute Guide: Login with Unstoppable with Popup

In this integration guide, we will show how to add Login with Unstoppable with the popup feature to an empty HTML page. There will be no complicated install requirements – to complete this integration, you just need to be a JavaScript developer with a few minutes of time.

:::info
If you’d like to skip ahead or follow along you can download the [full example (1 KB zipped)](https://gist.github.com/perfect-cents/b2a0df5b73b441feb86168a272670565/archive/2463d1538d9e8257e70dc1908e65d95464665fe9.zip) beforehand.
:::

## Step 1: Project Setup

Before we get started, you’ll need to install Node and Yarn or npm, and create a directory for your project. Then, install the following packages into your app using one of the following scripts:

```shell
mkdir project && cd project
yarn init --yes
yarn add --dev parcel
yarn add @uauth/js
```

Or when using npm run:

```shell
mkdir project && cd project
npm init --yes
npm install --save-dev parcel
npm install --save @uauth/js
```

:::info
**@uauth/js** is the library used for implementing Login with Unstoppable on the frontend.
:::

## Step 2: Create an HTML File

Build out the `index.html` file as follows:

```html
<html>
  <head>
    <title>Login with Unstoppable</title>
  </head>
  <body>
    <button onclick="login()">Login with Unstoppable</button>
    <script type="module" src="app.js"></script>
  </body>
</html>
```

## Step 3: Instantiate the Library

Now, configure the `app.js` as follows:

```javascript
import UAuth from '@uauth/js';

const uauth = new UAuth({
  clientID: 'uauth_example_spa_id',
  redirectUri: 'http://localhost:5000/callback',
});
```

## Step 4: Implement the Login Handler

Add more code to the `app.js` file as follows:

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

## Step 5: Login with Unstoppable

:::info
You need a domain in order to use the Login with Unstoppable feature. If you don’t have a domain, you can mint a [test domain](../../getting-started/test-domains/faucet.md) with the self-serve faucet. Or, you can [purchase a domain](https://unstoppabledomains.com) for $5 and mint it to Polygon for free.
:::

<embed src="/snippets/_login-mainnet-warning.md" />

The following command will run the app. Keep in mind that the credentials will only work if you are on the correct port.

```shell
yarn parcel --open --port 5000 index.html
```

## Step 6: Configure the Login UI

<embed src="/snippets/_login-ui-config.md" />
