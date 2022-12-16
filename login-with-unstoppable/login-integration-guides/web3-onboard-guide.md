---
title: Web3-Onboard Guide for Login with Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with ethereum provider, using the Blocknative UAuth module.
showNextButton: false
---

#  Web3-Onboard Guide: Login with Unstoppable

This is the basic integration guide for the Blocknative Web3-Onboard UAuth module and is best used for single page applications (SPAs). For more information about this module, please see the source code on [github](https://github.com/blocknative/web3-onboard/tree/v2-web3-onboard-develop/packages/uauth).

<figure>

![Web3 Onboard with Unstoppable Domains](../../static/images/login-selection-web3-onboard.png '#width=70%')

<figcaption>Web3 Onboard with Unstoppable Domains</figcaption>
</figure>

## Step 1: Install the Blocknative Packages

``` sh yarn
yarn add @web3-onboard/core @web3-onboard/uauth
```

``` sh npm
npm i @web3-onboard/core @web3-onboard/uauth
```

## Step 2: Configure UAuth

Configure the Blocknative UAuth module using the `clientID` and `redirectUri` from your [Login Client Configuration](/login-with-unstoppable/login-integration-guides/login-client-configuration.md). The remaining fields of [uauthInitOptions](/login-with-unstoppable/libraries/web3-onboard-uauth.md#uauthinitoptions) will be set to default values if left undefined. 

See [Scopes for Login](/login-with-unstoppable/scopes-for-login.md) for more on the information you can request from users using the `scope` field.

``` javascript
import Onboard from '@web3-onboard/core'
import uauthModule from '@web3-onboard/uauth'

// initialize the module with options
const uauth = uauthModule({
  clientID: 'YOUR_CLIENT_ID',
  redirectUri: 'YOUR_REDIRECT_URI',
  scope?: 'YOUR_SCOPES',
  shouldLoginWithRedirect?: false
  bridge?: 'YOUR_CUSTOM_BRIDGE_SERVER',
  qrcodeModalOptions?: {
    mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
  },
  connectFirstChainId?: true
})
```

## Step 3: Login With Unstoppable

Once configured, the UAuth module will function like any other wallet module in Web3-Onboard.

``` javascript
const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    uauth
    //... other wallets
  ]
})

const connectedWallets = await onboard.connectWallet()
console.log(connectedWallets)
```

:::success Congratulations!
You have implemented Login with Unstoppable with Blocknative Web3-Onboard.
:::

<embed src="/snippets/_login-paths-next.md" />