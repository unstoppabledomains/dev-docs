---
title: Login Integration Pathways | Unstoppable Domains Developer Portal
description: This page provides a step-by-step overview of the Login integration process. This feature works for Polygon and Ethereum domains.
---

# Getting Started with Login

Login with Unstoppable is a versatile feature with several integration pathways available for developers. This guide will step you through your first login integration with one of several supported libraries.

<embed src="/snippets/_login-mainnet-warning.md" />

## Step 1: Get Your Client Credentials

To begin the integration process for Login with Unstoppable, you will need to obtain and configure your client credentials using the **My Clients** and **Client Configuration** pages. Please see the [**Login Client Configuration**](/login-with-unstoppable/login-integration-guides/login-client-configuration.md) guide for more details.

When you've customized your client and saved your changes, you will need the **Client Metadata** to configure your integration. This can be copied directly from the first section of the **Client Configuration** page.

<figure>
<figcaption>Example client metadata</figcaption>

```javascript
{
    clientID: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    redirectUri: "http://localhost",
    scope: "openid wallet",
}
```

</figure>

The `scope` property of your client metadata will default to `"openid wallet"`, which is the minimum scope required for login. You can request additional information from users by adding additional scopes. For information on the other scopes Login supports, see [Scopes for Login](/login-with-unstoppable/scopes-for-login.md).

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

## Step 3: Configure the Login UI

Login with Unstoppable has UI requirements that must be configured to properly display the authenticated user's domain name after a successful login. Please follow the instructions in the [**Login UI Configuration**](/login-with-unstoppable/login-integration-guides/login-ui-configuration.mdx) guide to complete this final step in the integration process.

## Step 4: Promote Your Application

Once your integration is live, you can [promote your application](/use-cases/promote-ud-integration.md) by submitting it to the official UD [app integrations database](https://unstoppabledomains.com/apps).

<embed src="/snippets/_discord.md" />
