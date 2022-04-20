---
title: Login Integration Pathways | Unstoppable Domains Developer Portal
description: This page reviews the integration guides for Login with Unstoppable. This feature works for Polygon and Ethereum domains.
---

# Login Integration Pathways

Login with Unstoppable is a versatile feature with several integration pathways available for developers. This page reviews the integration guides, overall features, and related libraries for each installation option.

<embed src="/snippets/_login-mainnet-warning.md" />

## Step 1: Get Your Client Credentials

To begin the integration process for Login with Unstoppable, you will need to obtain and configure your client credentials using the **My Clients** and **Client Configuration** pages. Please see the [**Login Client Configuration**](../login-integration-guides/login-client-configuration.md) guide for more details.

## Step 2: Choose Your Integration Path

There are several ways to integrate with Login with Unstoppable, which is detailed in the chart below.

| Short Description                          | Pathway or Features                                                                                                                   | Integration Guides                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| No Ethereum Provider with Popup Feature    | generic @uauth/js integration, no ethereum provider, with callback, with popup feature                                                | [Login with Unstoppable Guide with Popup](../login-integration-guides/login-with-popup.md)       |
| No Ethereum Provider with Popup Feature    | generic @uauth/js integration, no ethereum provider, with callback, no popup feature                                                  | [Login with Unstoppable Guide without Popup](../login-integration-guides/login-without-popup.md) |
| Ethereum Provider with Web3 React Library  | custom @uauth/js integration, with ethereum provider, web3-react library                                                              | [Web3 React Guide](../login-integration-guides/web3-react-guide.md)                              |
| Ethereum Provider with Web3 Modal Library  | custom @uauth/js integration, with ethereum provider, web3modal library                                                               | [Web3 Modal Guide](../login-integration-guides/web3-modal-guide.md)                              |
| Ethereum Provider with BNC Onboard Library | custom @uauth/js integration, with ethereum provider, bnc-onboard library                                                             | [BNC Onboard Guide](../login-integration-guides/bnc-onboard-guide.md)                            |
| Custom uAuth Node without Frontend UI      | custom @uauth/node integration for server-side applications, without frontend UI, DOM UI package recommended to help with frontend UI | [Node.js Server Guide](../login-integration-guides/node-js-server-guide.md)                      |

:::info
The [UAuth Demo Application](https://uauth-demo.uc.r.appspot.com) is available for developer use along with a [single page sample application](https://github.com/unstoppabledomains/uauth/tree/main/examples/spa/src) to model the flow. Applications can also use Unstoppable Domain’s [UAuth Library](https://github.com/unstoppabledomains/uauth) to simplify the integration.
:::

## Step 3: Configure the Login UI

Login with Unstoppable has UI requirements that must be configured to properly display the authenticated user's domain name after a successful login. Please follow the instructions in the [**Login UI Configuration**](../login-integration-guides/login-ui-configuration.md) guide to complete this final step in the integration process.

## Step 4: Promote Your Applicaiton

Once your integration is live, you can [promote your application](/use-cases/promote-ud-integration.md) by submitting it to the official UD [app integrations database](https://unstoppabledomains.com/apps). 

<embed src="/snippets/_discord.md" />
