---
title: WAGMI Guide for Unstoppable Login | UD Developer Portal
description: This integration guide is intended for a custom @uauth/js integration, with the WAGMI library.
showNextButton: false
---

# WAGMI Guide: Unstoppable Login

## Step 1: Install the Libraries

Install with `yarn` or `npm`.

```shell yarn
yarn add @uauth/js @uauth/wagmi
```

```shell npm
npm install --save @uauth/js @uauth/wagmi
```

## Step 2: Configure the `WAGMI` Library

Next, configure the wagmi client:

```typescript
// Import connectors
import { UAuthWagmiConnector } from "@uauth/wagmi";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";

import { publicProvider } from "@wagmi/core/providers/public";
import { configureChains, Connector, createClient } from "wagmi";
import { mainnet } from "wagmi/chains";

// Configure wagmi clients
const { chains, provider } = configureChains([mainnet], [publicProvider()]);

const uauthClient = new UAuth({
  clientID: "CLIENT_ID",
  redirectUri: "REDIRECT_URI",
  // Scope must include openid and wallet
  scope: "openid wallet",
});

const metaMaskConnector = new MetaMaskConnector();
const walletConnectConnector = new WalletConnectConnector({
  options: {
    projectId: "WC_PROJECT_ID", // Get projectID at https://cloud.walletconnect.com
  },
});

const uauthConnector = new UAuthWagmiConnector({
  chains,
  options: {
    uauth: uauthClient,
    metaMaskConnector,
    walletConnectConnector,
  },
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [uauthConnector, metaMaskConnector, walletConnectConnector],
  provider,
});
```

## Step 3: Set up the `WAGMI` React Provider

Now, pass the wagmi client we created in the previous step into the `WagmiConfig` React Provider:

```jsx
import { WagmiConfig } from "wagmi";

<WagmiConfig client={wagmiClient}>
  <App />
</WagmiConfig>;
```

## Step 4: Unstoppable Login

Once configured, the `wagmi` library can be used normally.

<embed src="/snippets/_login-mainnet-warning.md" />

```jsx
import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

function LoginButton() {
  const { connect, connectors } = useConnect();

  const onClick = async () => {
    await connect({ connector: connectors[0] });
  };

  return <button onClick={onClick}>Login</button>;
}

function LogoutButton() {
  const { disconnect } = useDisconnect();

  const onClick = async () => {
    await disconnect();
  };

  return <button onClick={onClick}>Logout</button>;
}
```

:::success Congratulations!
You have implemented Unstoppable Login with WAGMI.
:::

<embed src="/snippets/_login-paths-next.md" />
