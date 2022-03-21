---
title: JavaScript Resolution Library
description: This page details basic configuration and usage of the JavaScript resolution library.
---

# JavaScript Resolution library

This page details basic configuration and usage of the [JavaScript resolution library](https://github.com/unstoppabledomains/resolution).

## Configuration

Resolution libraries require a connection to the Ethereum network to resolve .crypto and .eth domains. To initialize the library, you need to specify an Ethereum node service provider. Once the instance is created you can begin resolving domains. Below are examples of how to initialize the library with different providers.

### Provider URL

Each of the resolution libraries supports an Ethereum provider url for configuration. You can obtain a provider url from a service like Alchemy where obtaining an API key is free and only requires creating an account.

To choose an alternative Ethereum provider see [Nodes as a Service guide.](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/)

:::attention info

Unstoppable libraries use Infura as a provider by default without restrictions and rate limits for UNS resolution. Default configuration can be considered production-ready.

:::

```javascript
import Resolution from "@unstoppabledomains/resolution";

const infuraApiKey = INFURA_PROJECT_ID;

const infuraProviderUrl = `https://mainnet.infura.io/v3/${infuraApiKey}`;
const polygonProviderUrl = `https://polygon-mainnet.infura.io/v3/${infuraApiKey}`;

const resolution = new Resolution({
    sourceConfig: {
      uns: {
        locations: {
          Layer1: {url: infuraProviderUrl, network: 'mainnet'},
          Layer2: {
            url: polygonProviderUrl,
            network: 'polygon-mainnet',
          },
        },
      },
      ens: {url: infuraProviderUrl, network: 'mainnet'}
    },
  });


const resolution = Resolution.infura(infuraApiKey);
```

:::warning

Make sure to allow [mainnet.infura.io](http://mainnet.infura.io) and [polygon-mainnet.infura.io](http://polygon-mainnet.infura.io) or simply "https:/\/*.[infura.io](http://infura.io)" (if using the default configuration) as a connect-src in your Content Security Policy to allow these requests through.

:::

### Web3 provider

Connect a web3 provider. You may already have one available in your application from wallets like Metamask and WalletConnect.

```javascript
import Resolution from "@unstoppabledomains/resolution";

// if web3rovider is attached to window
const web3Provider = window.ethereum;

// if web3Provider.version - 0.x
const resolution = Resolution.fromWeb3Version0Provider(web3Provider);
// or
// if web3Provider.version - 1.x
const resolution = Resolution.fromWeb3Version1Provider(web3Provider);
```

### Ethers provider

Connect a provider from [ethers.js](https://www.npmjs.com/package/ethers)

```javascript
import Resolution from "@unstoppabledomains/resolution";

const resolution = Resolution.fromEthersProvider(ethersProvider);
```

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippets below show how to do this for Java, JavaScript, Swift, and Golang.

```javascript
const { default: Resolution } = require('@unstoppabledomains/resolution');
const resolution = new Resolution();

function resolveCustomRecord(domain, record) {
  resolution
    .records(domain, [record])
    .then((value) => console.log(`Domain ${domain} ${record} is: ${value}`))
    .catch(console.error);
}

resolveCustomRecord('homecakes.crypto', 'custom.record.value');
```
