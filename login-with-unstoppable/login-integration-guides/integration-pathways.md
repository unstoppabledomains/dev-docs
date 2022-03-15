---
description: >-
  This page reviews the integration guides for Login with Unstoppable. This
  feature works for Polygon and Ethereum domains.
---

# Login Integration Guides

Login with Unstoppable is a versatile feature with several integration pathways available for developers. This page reviews the integration guides, overall features, and related libraries for each installation option.

{% hint style="warning" %}
**Important:** For Login with Unstoppable Integrations, users must use **Polygon Mainnet** or **Ethereum Mainnet** as the network for the domain. Domains minted on Rinkeby Testnet will not work with the Login feature.
{% endhint %}

## Step 1: Register Your Application

Before beginning the integration process for Login with Unstoppable, you must register your application with Unstoppable Domains and obtain your client credentials. Please see the [**Register Your Application Guide**](../register-your-application.md) **** for more details.

## Step 2: Configure the Login Client

Next, you will configure your application using the My Clients and Client Configuration pages. Please see the [**Login Client Configuration Guide**](../login-client-configuration.md) **** for more details.

## Step 3: Choose Your Integration Path

There are several ways to integrate with Login with Unstoppable, which is detailed in the chart below.

| Short Description                          | Pathway or Features                                                                                                                   | Integration Guides                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| No Ethereum Provider with Popup Feature    | generic @uauth/js integration, no ethereum provider, with callback, with popup feature                                                | [Login with Unstoppable Guide with Popup](login-with-popup.md)       |
| No Ethereum Provider with Popup Feature    | generic @uauth/js integration, no ethereum provider, with callback, no popup feature                                                  | [Login with Unstoppable Guide without Popup](login-without-popup.md) |
| Ethereum Provider with Web3 React Library  | custom @uauth/js integration, with ethereum provider, web3-react library                                                              | [Web3 React Guide](web3-react-guide.md)                              |
| Ethereum Provider with Web3 Modal Library  | custom @uauth/js integration, with ethereum provider, web3modal library                                                               | [Web3 Modal Guide](web3-modal-guide.md)                              |
| Ethereum Provider with BNC Onboard Library | custom @uauth/js integration, with ethereum provider, bnc-onboard library                                                             | [BNC Onboard Guide](bnc-onboard-guide.md)                            |
| Custom uAuth Node without Frontend UI      | custom @uauth/node integration for server-side applications, without frontend UI, DOM UI package recommended to help with frontend UI | [Node.js Server Guide](node-js-server-guide.md)                      |

{% hint style="info" %}
The [UAuth Demo Application](https://uauth-demo.uc.r.appspot.com) is available for developer use along with a [single page sample application](https://github.com/unstoppabledomains/uauth/tree/main/examples/spa/src) to model the flow. Applications can also use Unstoppable Domain’s [UAuth Library](https://github.com/unstoppabledomains/uauth) to simplify the integration.&#x20;
{% endhint %}

## Step 4: Configure the Login UI

Login with Unstoppable has UI requirements that must be configured to properly display the authenticated user's domain name after a successful login. Please follow the instructions in the [**Login UI Configuration Guide**](../login-ui-configuration.md) to complete this final step in the integration process.

## Resources

For assistance with the Login with Unstoppable feature, please join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community.
