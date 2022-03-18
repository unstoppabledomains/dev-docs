---
description: >-
  This page provides a high level overview of how UD Resolution works when
  resolving domains using a traditional HTTP Web Browser or a Dapp Browser.
---

# How Browser Resolution Works

:::info
For more information on Unstoppable Domains Resolution, see [Resolving Domain Records](../domain-registry-essentials/resolving-domain-records.md).
:::

## General Domain Resolution Information

Domain Resolution allows developers to translate a `.crypto` or `.zil` domain name into addresses for BTC, ETH, IPFS, and more. Domain Resolution can (and we believe, should) be used anywhere your application has a "Send to: " field.

To make domain resolution easier, we've written libraries for web, Android, and iOS.

### Domain Resolution Libraries

* [JavaScript resolution library](https://github.com/unstoppabledomains/resolution)
* [Java resolution library](https://github.com/unstoppabledomains/resolution-java)
* [Swift resolution library](https://github.com/unstoppabledomains/resolution-swift)
* [Golang resolution library](https://github.com/unstoppabledomains/resolution-go)

### Access Domain Metadata Directly

If you're familiar with blockchain development and would rather avoid an additional dependency in your application, you can also read domain metadata directly.

* [Resolve .crypto without libraries](https://medium.com/unstoppabledomains/how-to-resolve-crypto-domain-names-82046db0404a)
* [Resolve .zil without libraries](https://medium.com/unstoppabledomains/how-to-resolve-zil-domain-names-f43da8fe37a9)
* [Resolving domain records](../domain-registry-essentials/resolving-domain-records.md)
* [CNS Smart Contracts reference](../domain-registry-essentials/cns-smart-contracts.md)
* [UNS Smart Contracts reference](../domain-registry-essentials/uns-smart-contracts.md)
* [Records reference](../domain-registry-essentials/records-reference.md)

## End-User Features (For Resolving Domains in a Browser)

### HTTP website browsing

Given a blockchain domain has a DNS record configured. When the user enters the domain name into a browser address bar, the browser resolves the domain and gets the specified DNS records. Then, the browser requests and displays the content using DNS protocol and HTTP protocol.

### Distributed website browsing

Given a blockchain domain has a d-web content identifier record configured (e.g.: an IPFS hash). When the user enters the domain name into a browser address bar, the browser resolves the domain and gets the content hash of a domain. Then, the browser retrieves the content by the hash using a related protocol and displays the content.

![Diagram showing how to read DWeb from Ethereum](<../../images/overview\_read\_dweb\_website\_from\_ethereum\_and\_decentralized\_network (4) (4) (3) (4) (1).png>)

### Domain-level redirect

Given a blockchain domain has both a redirect URL and IPFS hash configured, and the user's browser doesn't support IPFS protocol. When the user enters the domain name into a browser address bar, the browser resolves the domain and gets both the redirect URL and IPFS hash records. Then, the browser redirects the user to the redirect URL because the IPFS protocol is not supported.

### Resolution configuration

To change ETH provider services, the user goes to Browser Settings > Crypto Domains section:

* User changes the Ethereum node URL from default to another.
* User changes Registry Address for each support crypto registry.
* User changes network for Ethereum node.
* User changes DNS gateway
* User changes Dweb gateway

Then, the browser uses the new settings to make requests to Ethereum blockchain:

* If the network is not specified explicitly, it can be retrieved from the Ethereum node URL.
* If the Registry Address is not specified, it can use a default for the specified network

![Diagram showing how to configure DNS Gateway](<../../images/configure\_dns\_gateway (4) (4) (3) (4) (3).png>)

## Hypermedia Protocol

In addition to base browser hypermedia protocols like `http`, blockchain domains can also be configured for distributed content protocols like `ipfs`. These hypermedia protocols can be associated with a crypto domain:

* Traditional
  * HTTP
  * HTTPS
  * FTP
* Distributed
  * [IPFS](https://en.wikipedia.org/wiki/InterPlanetary\_File\_System) - `ipfs://`
  * [Swarm](https://docs.ethswarm.org/docs/) - `bzz://`

A browser may support any subset of traditional or distributed protocols that still make crypto domain websites displayable.

## Gateway to Simplify the Integration

While it is possible to resolve a domain via a call to ETH RPC and support distributed content protocols in a browser, it might be easier to make those calls via gateways using protocols already supported by all browsers: HTTP and DNS. A gateway may simplify the integration to a browser but comes at the downside of decreased decentralization (if the gateway is hosted by a third party) or a more complex user experience (if the gateway is hosted by the user).

There are 2 possible gateways for each problem:

* Distributed content (Dweb) gateway
* Resolution over DNS gateway

See a description of how they work below

![Visual flow of resolving DWeb via DNS and DWeb gateway](<../../images/overview\_dweb\_website\_via\_dns\_dweb\_gateways (4) (4) (3) (4) (2).png>)

### Distributed content gateway

A gateway is an HTTP Server that acts as a proxy between HTTP and a distributed content protocol. Basic functionality of such a gateway:

1. Receive HTTP request to a blockchain domain (like `http://example.crypto`)
2. Resolve the domain into crypto records
3. Get the content based on [Browser resolution algorithm](browser-resolution-algorithm.md)
4. Return the content to the client via HTTP

### Resolution over DNS gateway

A gateway is a DNS Server that resolves not just traditional domains but also `.crypto` domains. Basic functionality of such a gateway:

1. Receive a domain resolution request
2. Resolve a domain using classical DNS system if is in classical TLD (like `.com`)
3. Resolve a domain using [Browser resolution algorithm](browser-resolution-algorithm.md) if it is in crypto TLD
   * If a domain is set using DNS, transform [Crypto DNS records](browser-resolution-algorithm.md#dns-records) into classical records
   * If a domain is set using distributed content
     * If the client requests `A` record, resolve to [Distributed content gateway](resolving-domains-in-web-applications.md#distributed-content-gateway) IP Address
     * If the client requests a `TXT` record, resolve to all crypto records in JSON encoded key-value format
4. Send resolution to client

![Visualization of how to resolve DWeb via DNS and DWeb gateways](<../../images/resolve\_dweb\_website\_via\_dns\_gateway\_and\_dweb\_gateway (4) (3) (1).png>)
