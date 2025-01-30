---
title: Resolution Service API | Unstoppable Domains Developer Portal
description: This page details basic configuration and usage of the resolution service API.
---

# Resolve Domains

This page details basic configuration and usage of the [Resolution Service API](https://docs.unstoppabledomains.com/openapi/resolution/).

## Project Setup

You'll need the following to get started:

- An [API key](https://docs.unstoppabledomains.com/resolution/quickstart/retrieve-an-api-key/)

## Backend Proxy



## Frontend


## Examples


### Retrieve a Custom Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippet below shows how to do this in JavaScript.


### Resolve Addresses Existing on a Single Blockchain

The resolution library provides a method for resolving the addresses of tickers for single blockchains (e.g. `SOL` only exists on the `Solana` blockchain). The code snippet below shows how to do this in JavaScript.


### Resolve Addresses Existing on Multiple Blockchains

The resolution library provides a method for resolving the addresses of tickers for different blockchains (e.g. `USDT` exists on `EOS`, `ERC20`, `OMNI`, and `TRON` blockchains). The code snippet below shows how to do this in JavaScript.


### Resolve IPFS Hashes for Decentralized Websites

The resolution library provides a method for resolving the IPFS hashes on a domain. The code snippet below shows how to do this in JavaScript.


## Error Handling

<embed src="/snippets/_res-lib-error-intro.md" />

```typescript JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
// See https://github.com/unstoppabledomains/resolution for more initialization options
const resolution = new Resolution({ apiKey: "<api_key>" });
resolution
    .addr('domain-with-error.crypto', 'ETH')
    .then((ethAddress) => {
    })
    .catch((error) => {
        if (error.code === 'UnregisteredDomain') {
            console.log('Domain is not registered')
        }
        if (error.code === 'RecordNotFound') {
            console.log('Crypto record is not found (or empty)')
        }
        if (error.code === 'UnspecifiedResolver') {
            console.log('Domain is not configured (empty resolver)')
        }
        if (error.code === 'UnsupportedDomain') {
            console.log('Domain is not supported')
        }
    });
```

:::success Congratulations
You have successfully integrated Resolution using Unstoppable Domains Resolution Service API. Happy Hacking!
:::