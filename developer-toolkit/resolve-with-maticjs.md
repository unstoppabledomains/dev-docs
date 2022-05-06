---
title: Resolve With the Matic SDK | Unstoppable Domains Developer Portal
description: This page covers the Unstoppable domain resolution plugin in the matic.js utils namespace and a few examples of how to use this in your applications.
---

# Resolve With the Matic SDK

The [Unstoppable Domains resolution plugin](https://github.com/unstoppabledomains/maticjs-resolution) is natively integrated into the official [Matic SDK](https://github.com/maticnetwork/matic.js) `utils` namespace, so you can access all Unstoppable's library functions using the same syntax as `web3.js` and `ethers.js`. This allows developers building Polygon-based applications to easily integrate Unstoppable domain resolution functionalities.

## Prerequisites

* [Matic SDK](https://github.com/maticnetwork/matic.js) v3.2.5 or later installed on your machine.
* [UD Matic Resolution Plugin](https://github.com/unstoppabledomains/maticjs-resolution) installed on your machine.

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippet below show how to do this with the matic.js SDK.

```javascript
const addr = client.resolution.addr('brad.crypto', 'ETH')
```

<embed src="/snippets/_discord.md" />
