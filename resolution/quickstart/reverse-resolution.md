---
title: Resolution Service API Integration Guide | UD Developer Portal
description: This guide covers how to retrieve the reverse record of UD domains using the Resolution Service API.
---

# Reverse Resolve Domains

This page details basic configuration and usage of the [Resolution Service API](https://docs.unstoppabledomains.com/openapi/resolution/) to retrieve the reverse record of UD domains.

## Project Setup


## Authentication


## Backend Proxy


## Frontend


## Examples

### Reverse Resolution for an Address

To resolve the reverse record of a wallet address, you must call the appropriate endpoint from the Resolution Service API and provide the address parameter.


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
You have successfully integrated Reverse Resolution using Unstoppable Domains Resolution Service API. Happy Hacking!
:::


