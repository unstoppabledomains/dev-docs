---
title: Getting Started with Login | Unstoppable Domains Developer Portal
description: This page provides a step-by-step overview of the Login integration process. This feature works for Polygon and Ethereum domains.
---

# Getting Started with Login

Login with Unstoppable is a versatile feature with several integration pathways available for developers. This guide will step you through your first login integration with one of several supported libraries.

<embed src="/snippets/_login-mainnet-warning.md" />

## Step 1: Get Your Client Credentials

* Go to the [Client Management Dashboard](https://dashboard.auth.unstoppabledomains.com).
* Click the **Connect Wallet** and sign the transaction.
* Click the **Create Client** button to add a new client.

The dashboard will generate a unique **client ID** and open the configuration page for your new client. The **Client Metadata** is automatically populated with the `clientID` and default values for the `redirectURI` and `scope`. See [Login Client Configuration](/login-with-unstoppable/login-integration-guides/login-client-configuration.md) for more details about the settings on this page.

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
The `scope` property of your client metadata will default to `"openid wallet"`, which is the minimum scope required for login. You can request additional information from users by adding additional scopes to this string. For information on the other scopes Login supports, see [Scopes for Login](/login-with-unstoppable/scopes-for-login.md).
:::

## Step 2: Choose Your Integration Path

There are several ways to integrate with Login with Unstoppable, which are listed in the table below.

Because pop-ups are a more integration friendly approach, every integration path except for **Login without Pop-up** and **Node.js Server** uses them by default. You can use redirects instead with the `login()` method of `@uauth/js` or the `shouldLoginWithRedirect` configuration option for other `@uauth/*` libraries.

For DApps built with web3 libraries like `web3-react`, `web3-modal`, `web3-onboard`, and `moralis`, UAuth provides packages that help you wrap a new UAuth instance in an interface that each library supports. After configuring these packages, you can continue using the web3 library normally.

| Integration Guide                                                                               |                                         Example Project                                     |   Web3 Provider   | Package             |     Front-end UI   |
|-------------------------------------------------------------------------------------------------| :-----------------------------------------------------------------------------------------: | :---------------: |:-------------------:|:------------------:|
| [Login with Pop-up](/login-with-unstoppable/login-integration-guides/login-with-popup.md)       | [spa](https://github.com/unstoppabledomains/uauth/tree/main/examples/spa/)                  |       &#10060;    |`@uauth/js`          |      JavaScript    |
| [Login without Pop-up](/login-with-unstoppable/login-integration-guides/login-without-popup.md) |                                                 -                                           |       &#10060;    |`@uauth/js`          |        React       |
| [Web3 React](/login-with-unstoppable/login-integration-guides/web3-react-guide.md)              | [web3-react](https://github.com/unstoppabledomains/uauth/blob/main/examples/web3-react/)    |       &#9989;     |`@uauth/web3-react`  |     `web3-react`   |
| [Web3 Modal](/login-with-unstoppable/login-integration-guides/web3-modal-guide.md)              | [web3modal](https://github.com/unstoppabledomains/uauth/blob/main/examples/web3modal/)      |       &#9989;     |`@uauth/web3modal`   |     `web3-modal`   |
| [Web3 Onboard](/login-with-unstoppable/login-integration-guides/web3-onboard-guide.md)          | [web3-onboard](https://github.com/unstoppabledomains/uauth/blob/main/examples/web3-onboard/)|       &#9989;     |`@uauth/web3-onboard`|   `web3-onboard`   |
| [Moralis](/login-with-unstoppable/login-integration-guides/moralis-guide.md)                    | [moralis](https://github.com/unstoppabledomains/uauth/blob/main/examples/moralis)           |       &#9989;     |`@uauth/moralis`     |     `moralis`      |
| [Node.js Server](/login-with-unstoppable/login-integration-guides/node-js-server-guide.md)      | [server](https://github.com/unstoppabledomains/uauth/tree/main/examples/server)             |       &#10060;    |`@uauth/node`        |        None        |
| [Auth0](/login-with-unstoppable/login-integration-guides/auth0-guide.md)                        | [UAuth + Auth0 ](https://github.com/unstoppabledomains/uauth-auth0-sample-dapp)     |       &#10060;    |      `auth0`        |       `auth0`      |

:::info
See the [UAuth Example App](https://example.auth.unstoppabledomains.com/) for a live demo of the login flow.
:::

## Step 3: Login Best Practices

Login with Unstoppable will require some additional configuration to display the authenticated user's information in your dApp after a successful login. See the [**Login Best Practices**](/login-with-unstoppable/login-integration-guides/login-best-practices.mdx) guide for more information about accessing and displaying logged-in user information and Login with Unstoppable UI button styles.

## Step 4: Promote Your Application

Once your login integration is live, you can [promote your application](/use-cases/promote-ud-integration.md) by submitting it to the official UD [app integrations database](https://unstoppabledomains.com/apps).

<embed src="/snippets/_discord.md" />
