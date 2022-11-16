---
title: Web3 React Guide for Login with Unstoppable | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with ethereum provider, using web3 react library.
showNextButton: false
---

# Web3 React Guide: Login with Unstoppable

This is the basic installation guide for the `web3-react` framework and is best used for React-based single page applications (SPAs). For more information about this library, please see the associated [github repo](https://github.com/unstoppabledomains/uauth/tree/main/packages/web3-react).

## Step 1: Install the Libraries

Install `web3-react` the connectors for MetaMask, WalletConnect, and UAuth with `yarn` or `npm`.

```shell yarn
yarn add @web3-react/core@beta @web3-react/metamask@beta @web3-react/walletconnect@beta @uauth/web3-react
```

```shell npm
npm install --save @web3-react/core@beta @web3-react/metamask@beta @web3-react/walletconnect@beta @uauth/web3-react
```

## Step 2: Configure the `web3-react` Library

Next, configure the MetaMask, WalletConnect, and UAuth connectors for `web3-react`.

<figure>

```javascript
import {initializeConnector} from '@web3-react/core'
import {MetaMask} from '@web3-react/metamask'
import {WalletConnect} from '@web3-react/walletconnect'
import {UAuthConnector} from '@uauth/web3-react'

const metaMask = initializeConnector((actions) => new MetaMask({ actions }));

const walletConnect = initializeConnector(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: {1: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`},
        qrcode: true,
      },
    })
)

const uauth = initializeConnector(
  (actions) => new UAuthConnector({
    actions,
    options: {
      // These values can be copied from your dashboard client configuration
      clientID: process.env.REACT_APP_CLIENT_ID,
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
      scope: 'openid wallet',

      // Injected/metamask and walletconnect connectors are required
      connectors: {injected: metaMask[0], walletconnect: walletConnect[0]}
    },
  })
)

const connectors = {
  "UAuth": uauth,
  "MetaMask": metaMask,
  "WalletConnect": walletConnect,
}

export default connectors
```

<figcaption> <code>connectors.js</code> </figcaption>
</figure>

:::info
Because popups are a more integration friendly approach, the `@uauth/web3-react` library now uses them by default. If you want the "old" redirect functionality, you need to set `shouldLoginWithRedirect: true` in your `UAuthConnectorConstructorArgs` and [create a callback page](/login-with-unstoppable/libraries/uauth-web3-react.md#optionsshouldloginwithredirect).
:::

## Step 3: Login with Unstoppable

Once the connector is configured, you can call the `activate()` method to trigger UAuth login. The example `App` component below creates a button to acivate and deactive the connector and displays a simple connection and error state.

<figure>

```jsx
import { useState } from 'react'
import connectors from './connectors.js'

function App() {
  const connector = connectors["UAuth"][0]

  // Get web3-react hooks from UAuthConnector
  const { useIsActivating, useIsActive } = connectors["UAuth"][1]
  const isActivating = useIsActivating()
  const isActive = useIsActive()

  const [connectionStatus, setConnectionStatus] = useState('Disconnected')
  const [error, setError] = useState()

  // Handle connector activation and update connection/error state
  const handleToggleConnect = () => {
    setError(undefined) // Clear error state
    
    if (isActive) {
      if (connector?.deactivate) {
        void connector.deactivate()
      } else {
        void connector.resetState()
      }
      setConnectionStatus('Disconnected')
    }
    else if (!isActivating) {
      setConnectionStatus('Connecting...')

      // Activate the connector and update state
      connector.activate(1)
        .then(() => {
          setConnectionStatus('Connected')
        })
        .catch((e) => {
          connector.resetState()
          setError(e)
        })
    }
  }

  // Control connector activation with a button and track simple connection and error state
  return (
      <h1>Login with Unstoppable</h1>
      <h3>Status - {(error?.message) ? ("Error: " + error.message) : connectionStatus}</h3>
      
      <button onClick={handleToggleConnect} disabled={false}>
        {isActive ? "Disconnect" : "Connect"}
      </button>
  )
}

export default App

```

<figcaption> <code>App.jsx</code> </figcaption>
</figure>

:::success Congratulations!
You have implemented Login with Unstoppable using web3-react
:::

<embed src="/snippets/_login-paths-next.md" />