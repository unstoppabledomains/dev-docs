---
title: BNC Onboard Guide for Login with Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with ethereum provider, using the BNC Onboard library.
showNextButton: false
---

# BNC Onboard Guide: Login with Unstoppable

:::warning Web3-onboard
This guide and the `@uauth/bnc-onboard` package uses `bnc-onboard`, a depreciated version of the **Blocknative Onboard** library. For integrating with `web3-onboard` (onboard `v2.0.0` and later), see the [Web3 Onboard Guide](./web3-onboard-guide.md).
:::

This is the basic installation guide for the `bnc-onboard` library and is best used for single page applications (SPAs). For more information about this library, please see the associated [github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/bnc-onboard).

:::info
For a completed example of a BNC Onboard application, you can [download this example project](https://github.com/unstoppabledomains/uauth/blob/main/examples/bnc-onboard/).
:::

## Step 1: Install the Libraries

Install with `yarn` or `npm`.

```shell yarn
yarn add bnc-onboard @uauth/bnc-onboard @uauth/js @walletconnect/web3-provider
```

```shell npm
npm install --save bnc-onboard @uauth/bnc-onboard @uauth/js @walletconnect/web3-provider
```

## Step 2: Configure the @uauth/bnc-onboard Library

Next, configure the `@uauth/bnc-onboard` library:

```typescript
import UAuthBncOnboard from '@uauth/bnc-onboard'

const uauthOnboard = new UAuthBncOnboard({
  clientID: process.env.REACT_APP_CLIENT_ID!,
  redirectUri: process.env.REACT_APP_REDIRECT_URI!,
  postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,\
  // Scope must include openid and wallet
  scope: 'openid wallet',
})
```

You can also construct a `UAuth` instance before hand and use that to create the library.

```javascript
import UAuth from '@uauth/js'

const uauthOnboard = new UAuthBncOnboard({
  uauth: new UAuth({
    clientID: process.env.REACT_APP_CLIENT_ID!,
    redirectUri: process.env.REACT_APP_REDIRECT_URI!,
    postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI!,
    scope: 'openid wallet',
  }),
})
```

:::info
Because pop-ups are a more integration friendly approach, the `@uauth/bnc-onboard` library now uses them by default. If you want the "old" redirect functionality, you need to set `shouldLoginWithRedirect: true` in the `ConstructorOptions` passed to your new instance of `UAuthBNCOnboard` and [create a callback page](#shouldloginwithredirect).
:::

## Step 3: Configure the bnc-onboard Library

Next, the `bnc-onboard` library needs to be configured.

```javascript
import initOnboard from 'bnc-onboard'

const onboard = initOnboard({
  dappId: process.env.REACT_APP_ONBOARD_KEY!,
  networkId: 1,
  walletSelect: {
    wallets: [
      {
        walletName: 'metamask',
        preferred: true,
      },
      {
        walletName: 'walletConnect',
        preferred: true,
        infuraKey: process.env.REACT_APP_INFURA_ID!,
      },
      // This creates a custom wallet module. See here: https://docs.blocknative.com/onboard#creating-custom-modules
      uauthOnboard.module({
        // Mark true if you want Unstoppable to be
        preferred: true,
        // Onboard uses a store system that makes it impossible to read the
        // state of other wallets. This means that we have to supply a seperate
        // configuration to the @walletconnect/web3-provider instance.
        // See here: https://docs.walletconnect.com/1.0/quick-start/dapps/web3-provider
        walletconnect: {
          infuraId: process.env.REACT_APP_INFURA_ID!,
        },
      }),
    ],
  },
})
```

## Step 4: Login with Unstoppable

Once configured, the `bnc-onboard` library can be used normally.

<embed src="/snippets/_login-mainnet-warning.md" />

```javascript
import onboard from './onboard'

const handleLogin = async () => {
  await onboard.walletSelect()
  await onboard.walletCheck()
}

const handeLogout = () => {
  uauthOnboard.getUAuth().then(uauth => uauth.logout())
  onboard.walletReset()
}

```

<embed src="/snippets/_login-paths-next.md" />