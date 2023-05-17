---
title: Retrieve Client Credentials | Unstoppable Domains Developer Portal
description: This page provides a guide to retrieve Login client credentials
redirectFrom:
  - /login-with-unstoppable/developer-integration
  - /login-with-unstoppable/login-integration-guides/
  - /login-with-unstoppable/login-integration-guides/integration-pathways/
  - /login-with-unstoppable/get-started-login/integration-pathways/
  - /login-with-unstoppable/get-started-login/
---

# Retrieve Client Credentials

Login with Unstoppable is a versatile feature with several integration pathways available for developers. This guide will step you through your first login integration with one of several supported libraries.

<embed src="/snippets/_login-mainnet-warning.md" />

## Step 1: Get Your Client Credentials

- Go to the [Client Management Dashboard](https://dashboard.auth.unstoppabledomains.com).
- Click the **Connect Wallet** and sign the transaction.
- Click the **Create Client** button to add a new client.

The dashboard will generate a unique **client ID** and open the configuration page for your new client. The **Client Metadata** is automatically populated with the `clientID` and default values for the `redirectURI` and `scope`. See [Login Client Configuration](/identity/guides/client-configurations.md) for more details about the settings on this page.

<figure>
<video loop autoplay muted width="100%" src="/videos/connect-wallet-and-create-client.mp4"></video>
<figcaption>Connect a wallet and create a new client</figcaption>
</figure>

Once you've created your client, you will need the **Client Metadata** to configure your UAuth application. This can be copied directly from the **Login** page of your **Client Configuration**.

<figure>

```javascript
{
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    redirectUri: "http://localhost",
    scope: "openid wallet",
}
```

<figcaption>Example client metadata</figcaption>
</figure>

:::info
The `scope` property of your client metadata will default to `"openid wallet"`, which is the minimum scope required for login. You can request additional information from users by adding additional scopes to this string. For information on the other scopes Login supports, see [Scopes for Login](/identity/guides/login-scopes.md).
:::

## Step 2: Choose Your Integration Path

There are several ways to integrate with Login with Unstoppable, which are listed in the table below.

Because pop-ups are a more integration friendly approach, every integration path except for **Login without Pop-up** and **Node.js Server** uses them by default. You can use redirects instead with the `login()` method of `@uauth/js` or the `shouldLoginWithRedirect` configuration option for other `@uauth/*` libraries.

For DApps built with web3 libraries like `web3-react`, `web3-modal`, `web3-onboard`, and `moralis`, UAuth provides packages that help you wrap a new UAuth instance in an interface that each library supports. After configuring these packages, you can continue using the web3 library normally.

| Integration Guide                                                            |                                     Example Project                                      | Web3 Provider |        Package        |  Front-end UI  |
| ---------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------: | :-----------: | :-------------------: | :------------: |
| [Login with Pop-up](/identity/quickstart/login-with-pop-up.md)               |        [spa](https://github.com/unstoppabledomains/uauth/tree/main/examples/spa/)        |   &#10060;    |      `@uauth/js`      |   JavaScript   |
| [Login without Pop-up](/identity/quickstart/login-without-pop-up.md)         |                                            -                                             |   &#10060;    |      `@uauth/js`      |     React      |
| [Web3 React](/identity/quickstart/other-integration-paths/web3-react.md)     | [web3-react](https://github.com/unstoppabledomains/uauth/blob/main/examples/web3-react/) |    &#9989;    |  `@uauth/web3-react`  |  `web3-react`  |
| [Web3 Modal](/identity/quickstart/other-integration-paths/web3-modal.md)     |  [web3modal](https://github.com/unstoppabledomains/uauth/blob/main/examples/web3modal/)  |    &#9989;    |  `@uauth/web3modal`   |  `web3-modal`  |
| [Web3 Onboard](/identity/quickstart/other-integration-paths/web3-onboard.md) |                                            -                                             |    &#9989;    | `@web3-onboard/uauth` | `web3-onboard` |
| [Moralis](/identity/quickstart/other-integration-paths/moralis.md)           |    [moralis](https://github.com/unstoppabledomains/uauth/blob/main/examples/moralis)     |    &#9989;    |   `@uauth/moralis`    |   `moralis`    |
| [Node.js Server](/identity/quickstart/other-integration-paths/node-js.md)    |     [server](https://github.com/unstoppabledomains/uauth/tree/main/examples/server)      |   &#10060;    |     `@uauth/node`     |      None      |
| [Auth0](/identity/quickstart/other-integration-paths/auth0.md)               |     [UAuth + Auth0 ](https://github.com/unstoppabledomains/uauth-auth0-sample-dapp)      |   &#10060;    |        `auth0`        |    `auth0`     |
| [WAGMI](/identity/quickstart/other-integration-paths/wagmi.md)               |      [WAGMI](https://github.com/unstoppabledomains/uauth/tree/main/examples/wagmi)       |   &#10060;    |    `@uauth/wagmi`     |    `wagmi`     |

:::info
See the [UAuth Example App](https://example.auth.unstoppabledomains.com/) for a live demo of the login flow.
:::

<embed src="/snippets/_discord.md" />
