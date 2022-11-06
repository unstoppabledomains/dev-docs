---
title: Resolve Using Matic SDK | Unstoppable Domains Developer Portal
description: This page covers the Unstoppable domain resolution plugin in the matic.js utils namespace and a few examples of how to use this in your applications.
---

# Resolve Using Matic.js SDK

The [Unstoppable Domains Resolution Plugin](https://github.com/unstoppabledomains/maticjs-resolution) is natively integrated into the official [Matic SDK](https://github.com/maticnetwork/matic.js) `utils` namespace, so you can access all Unstoppable's library functions using the same syntax as `web3.js` and `ethers.js`. This allows developers building Polygon-based applications to easily integrate Unstoppable Domains resolution functionalities.

:::info
The Resolution Plugin has the same API as the [JavaScript Resolution Library](https://github.com/unstoppabledomains/resolution), so all the functions that are in the library are available in the Resolution Plugin and Matic SDK.
:::

## Prerequisites

* [Matic SDK](https://github.com/maticnetwork/matic.js) v3.2.5 or later installed on your machine.
* [UD Matic Resolution Plugin](https://github.com/unstoppabledomains/maticjs-resolution) installed on your machine.

## Use Case: Retrieve a Domain Record

To run the snippet below you need to install the following packages:

```bash
npm install @truffle/hdwallet-provider
npm install @maticnetwork/maticjs
npm install @maticnetwork/maticjs-web3
npm install @unstoppabledomains/maticjs-resolution
```

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application.

```javascript
const HDWalletProvider = require('@truffle/hdwallet-provider')
const { POSClient, use } = require('@maticnetwork/maticjs')
const { Web3ClientPlugin } = require("@maticnetwork/maticjs-web3")
const {
  UnstoppableDomainsClientPlugin
} = require("@unstoppabledomains/maticjs-resolution")

// plugins for matic.js
use(Web3ClientPlugin);
use(UnstoppableDomainsClientPlugin);

async function resolveWithUnstoppableExample() {
    const privateKey = '{KEY}'
    const userAddress = '{ADDRESS}'

    // Client setup
    const posClient = new POSClient();
    await posClient.init({
        log: true,
        network: 'testnet',
        version: 'mumbai',
        parent: {
          provider: new HDWalletProvider(privateKey, '{PROVIDER_URL}'),
          defaultConfig: {
            from : userAddress
          }
        },
        child: {
          provider: new HDWalletProvider(privateKey, '{PROVIDER_URL}'),
          defaultConfig: {
            from : userAddress
          }
        }
    });
    const client = posClient.client;

    // Resolution examples

    // Resolve a token address from a domain
    const addr = await client.resolution.addr('brad.crypto', 'ETH');
    console.log(`Ethereum address for brad.crypto is ${addr}`);

    // Resolve all records from a domain
    const records = await client.resolution.allRecords('brad.crypto');
    console.log(`All records for brad.crypto are ${JSON.stringify(records)}`);

    // Resolve an ipfs hash from a domain
    const ipfsHash = await client.resolution.ipfsHash('homecakes.crypto');
    console.log(`IPFS hash for homecakes.crypto is ${ipfsHash}`);
}

resolveWithUnstoppableExample()
```

<embed src="/snippets/_discord.md" />
