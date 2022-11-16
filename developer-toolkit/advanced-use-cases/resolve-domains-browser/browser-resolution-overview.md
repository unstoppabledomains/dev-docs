---
title: Browser Resolution Overview | Unstoppable Domains Developer Portal
description: This page provides a high level overview of how UD Resolution works when resolving domains using a traditional HTTP Web Browser or a DApp Browser.
---

# How Browser Resolution Works

:::info
For more information on Unstoppable Domains Resolution, see [Resolve Using Smart Contracts](/developer-toolkit/resolution-integration-methods/direct-blockchain-calls/resolve-eth-smart-contracts.md).
:::

## General Domain Resolution Information

Domain Resolution allows developers to translate a `.crypto` or `.zil` domain name into addresses for BTC, ETH, IPFS, and more. Domain Resolution can (and we believe, should) be used anywhere your application has a "Send to: " field.

To make domain resolution easier, we've written libraries for web, Android, and iOS.

### Domain Resolution Libraries

* [Resolution](/developer-toolkit/resolution-integration-methods/resolution-libraries/resolution.md) (JavaScript)
* [Resolution-Java](/developer-toolkit/resolution-integration-methods/resolution-libraries/resolution-java.md)
* [Resolution-Swift](/developer-toolkit/resolution-integration-methods/resolution-libraries/resolution-swift.md)
* [Resolution-Go](/developer-toolkit/resolution-integration-methods/resolution-libraries/resolution-go.md)

### Access Domain Metadata Directly

If you're familiar with blockchain development and would rather avoid an additional dependency in your application, you can also read domain metadata directly.

* [Resolve Unstoppable Domains With Direct Blockchain Calls](/developer-toolkit/resolution-integration-methods/direct-blockchain-calls/resolve-unstoppable-domain-names.md)
* [Resolve .zil With Direct Blockchain Calls](/developer-toolkit/resolution-integration-methods/direct-blockchain-calls/resolve-zil-without-libraries.md)
* [Resolve Using Smart Contracts](/developer-toolkit/resolution-integration-methods/direct-blockchain-calls/resolve-eth-smart-contracts.md)
* [CNS Smart Contracts reference](/developer-toolkit/reference/smart-contracts/cns-smart-contracts.md)
* [UNS Smart Contracts reference](/developer-toolkit/reference/smart-contracts/uns-smart-contracts.md)
* [Records reference](/developer-toolkit/reference/records-reference.md)

## End-User Features (For Resolving Domains in a Browser)

### HTTP Website Browsing

Given a Web3 domain has a DNS record configured. When the user enters the domain name into a browser address bar, the browser resolves the domain and gets the specified DNS records. Then, the browser requests and displays the content using DNS protocol and HTTP protocol.

### Distributed Website Browsing

Given a Web3 domain has a d-web content identifier record configured (e.g. an IPFS hash). When the user enters the domain name into a browser address bar, the browser resolves the domain and gets the content hash of a domain. Then, the browser retrieves the content by the hash using a related protocol and displays the content.

<figure>

![Diagram showing how to read D-Web from Ethereum](/images/overview\_read\_dweb\_website\_from\_ethereum\_and\_decentralized\_network.png '#width=75%')

<figcaption>Diagram showing how to read D-Web from Ethereum</figcaption>
</figure>

### Domain-Level Redirect

Given a Web3 domain has both a redirect URL and IPFS hash configured, and the user's browser doesn't support IPFS protocol. When the user enters the domain name into a browser address bar, the browser resolves the domain and gets both the redirect URL and IPFS hash records. Then, the browser redirects the user to the redirect URL because the IPFS protocol is not supported.

### Resolution Configuration

To change ETH provider services, the user goes to Browser Settings > Crypto Domains section:

* User changes the Ethereum node URL from default to another.
* User changes Registry Address for each support crypto registry.
* User changes network for Ethereum node.
* User changes DNS gateway
* User changes Dweb gateway

Then, the browser uses the new settings to make requests to Ethereum blockchain:

* If the network is not specified explicitly, it can be retrieved from the Ethereum node URL.
* If the Registry Address is not specified, it can use a default for the specified network

<figure>

![Diagram showing how to configure DNS Gateway](/images/configure\_dns\_gateway.png '#width=75%')

<figcaption>Diagram showing how to configure DNS Gateway</figcaption>
</figure>

## Hypermedia Protocol

In addition to base browser hypermedia protocols like `http`, Web3 domains can also be configured for distributed content protocols like `ipfs`. These hypermedia protocols can be associated with a Web3 domain:

* Traditional
  * HTTP
  * HTTPS
  * FTP
* Distributed
  * [IPFS](https://en.wikipedia.org/wiki/InterPlanetary\_File\_System) - `ipfs://`
  * [Swarm](https://docs.ethswarm.org/docs/) - `bzz://`

A browser may support any subset of traditional or distributed protocols that still make Web3 domain websites displayable.

## Gateway to Simplify the Integration

While it is possible to resolve a domain via a call to **ETH RPC** and support distributed content protocols in a browser, it might be easier to make those calls via gateways using protocols already supported by all browsers: **HTTP** and **DNS**. A gateway may simplify the integration to a browser but comes at the downside of decreased decentralization (if the gateway is hosted by a third party) or a more complex user experience (if the gateway is hosted by the user).

There are 2 possible gateways for each problem:

* Distributed content (D-Web) gateway
* Resolution over DNS gateway

See a description of how they work below

<figure>

![Visual flow of resolving DWeb via DNS and DWeb gateway](/images/overview\_dweb\_website\_via\_dns\_dweb\_gateways.png '#width=75%')

<figcaption>Visual flow of resolving DWeb via DNS and DWeb gateway</figcaption>
</figure>

### Distributed Content Gateway

A gateway is an HTTP Server that acts as a proxy between HTTP and a distributed content protocol. Basic functionality of such a gateway:

1. Receive HTTP request to a Web3 domain (like `http://example.crypto`)
2. Resolve the domain into resolution records
3. Get the content based on [Browser Resolution Algorithm](browser-resolution-algorithm.md)
4. Return the content to the client via HTTP

### Resolution Over DNS Gateway

A gateway is a DNS Server that resolves not just traditional domains but also `.crypto` domains. Basic functionality of such a gateway:

1. Receive a domain resolution request
2. Resolve a domain using classical DNS system if is in classical domain ending (like `.com`)
3. Resolve a domain using [Browser Resolution Algorithm](browser-resolution-algorithm.md) if it is in .crypto domain ending
   * If a domain is set using DNS, transform [Crypto DNS records](browser-resolution-algorithm.md#dns-records) into classical records
   * If a domain is set using distributed content
     * If the client requests `A` record, resolve to [Distributed Content Gateway](#distributed-content-gateway) IP Address
     * If the client requests a `TXT` record, resolve to all resolution records in JSON encoded key-value format
4. Send resolution to client

<figure>

![Visualization of how to resolve DWeb via DNS and DWeb gateways](/images/resolve\_dweb\_website\_via\_dns\_gateway\_and\_dweb\_gateway.png '#width=75%')

<figcaption>Visualization of how to resolve DWeb via DNS and DWeb gateways</figcaption>
</figure>
