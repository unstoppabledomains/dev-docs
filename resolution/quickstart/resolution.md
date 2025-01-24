---
title: Resolution Library | Unstoppable Domains Developer Portal
description: This page details basic configuration and usage of the resolution library.
---

# Resolve Domains

This page details basic installation, configuration, and usage of the [JavaScript Resolution Library](https://github.com/unstoppabledomains/resolution).

## Installation

Resolution can be installed with either the `yarn` or `npm` command.

```bash yarn
yarn add @unstoppabledomains/resolution
```

```bash npm
npm install @unstoppabledomains/resolution --save
```

## Updating Resolution

Resolution can be updated with either the `yarn` or `npm` command.

```bash yarn
yarn upgrade @unstoppabledomains/resolution --latest
```

```bash npm
npm update @unstoppabledomains/resolution --save
```
## Initialize with Unstoppable Domains' UNS Proxy Provider

Connect to the Unstoppable Domains UNS Proxy Provider. Refer to the [Retrieve an API Key Guide](https://docs.unstoppabledomains.com/resolution/quickstart/retrieve-an-api-key/) to aquire an API key. This configuration will support all Unstoppable Registries and is the recommended option.

```javascript
const { default: Resolution } = require("@unstoppabledomains/resolution");
const resolution = new Resolution({
  // Obtain a key by following this document https://docs.unstoppabledomains.com/resolution/quickstart/retrieve-an-api-key/
  apiKey: "<api_key>",
  sourceConfig: {
    zns: {
      url: "https://api.zilliqa.com",
      network: "mainnet",
    },
  },
});
```

## Initialize with Custom Provider Configuration

<embed src="/snippets/_libraries-provider-config.md" />

To support the new Unstoppable Registry on Base and the use of your own RPC URLs, you will need to use the Javascript SDK version `9.3.3` or greater. This update allows for specifying a new UNS location for `base` alongside the existing `eth` and `pol` (previously `Layer1` and `Layer2`) locations.

```javascript SDK version >=9.3.3
const { default: Resolution } = require("@unstoppabledomains/resolution");
// Obtain a key from https://www.infura.io
const resolution = new Resolution({
  sourceConfig: {
    uns: {
      locations: {
        eth: {
          url: "https://mainnet.infura.io/v3/<infura_api_key>",
          network: "mainnet",
        },
        pol: {
          url: "https://polygon-mainnet.infura.io/v3/<infura_api_key>",
          network: "polygon-mainnet",
        },
        base: {
          url: "https://base-mainnet.infura.io/v3/<infura_api_key>",
          network: "base-mainnet",
        },
      },
    },
    zns: {
      url: "https://api.zilliqa.com",
      network: "mainnet",
    },
  },
});
```
```javascript SDK version <9.3.3
const { default: Resolution } = require("@unstoppabledomains/resolution");
// Obtain a key from https://www.infura.io
const resolution = new Resolution({
  sourceConfig: {
    uns: {
      locations: {
        Layer1: {
          url: "https://mainnet.infura.io/v3/<infura_api_key>",
          network: "mainnet",
        },
        Layer2: {
          url: "https://polygon-mainnet.infura.io/v3/<infura_api_key>",
          network: "polygon-mainnet",
        },
      },
    },
    zns: {
      url: "https://api.zilliqa.com",
      network: "mainnet",
    },
  },
});
```

<embed src="/snippets/_res-lib-connect-src-warning.md" />

#### Web3 provider

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

#### Ethers provider

Connect a provider from [ethers.js](https://www.npmjs.com/package/ethers)

```javascript
import Resolution from "@unstoppabledomains/resolution";
const resolution = Resolution.fromEthersProvider(ethersProvider);
```

## Resolve Domain Records

### Retrieve a Custom Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippet below shows how to do this in JavaScript.

```javascript
const { default: Resolution } = require('@unstoppabledomains/resolution');
// See https://github.com/unstoppabledomains/resolution for more initialization options
const resolution = new Resolution({ apiKey: "<api_key>" });

function resolveCustomRecord(domain, record) {
  resolution
    .records(domain, [record])
    .then((value) => console.log(`Domain ${domain} ${record} is: ${value}`))
    .catch(console.error);
}

resolveCustomRecord('homecakes.crypto', 'custom.record.value');
```

### Resolve Addresses Existing on a Single Blockchain

The resolution library provides a method for resolving the addresses of tickers for single blockchains (e.g. `SOL` only exists on the `Solana` blockchain). The code snippet below shows how to do this in JavaScript.

```javascript
const {default: Resolution} = require('@unstoppabledomains/resolution');
// See https://github.com/unstoppabledomains/resolution for more initialization options
const resolution = new Resolution({ apiKey: "<api_key>" });

function getWalletAddr(domain, ticker) {
  resolution
    .addr(domain, ticker)
    .then((address) =>
      console.log(`Domain ${domain} has address for ${ticker}: ${address}`),
    )
    .catch(console.error);
}
getWalletAddr('partner-engineering.crypto', 'SOL');
```

### Resolve Addresses Existing on Multiple Blockchains

The resolution library provides a method for resolving the addresses of tickers for different blockchains (e.g. `USDT` exists on `EOS`, `ERC20`, `OMNI`, and `TRON` blockchains). The code snippet below shows how to do this in JavaScript.

```javascript
const {default: Resolution} = require('@unstoppabledomains/resolution');
// See https://github.com/unstoppabledomains/resolution for more initialization options
const resolution = new Resolution({ apiKey: "<api_key>" });

function getMultiChainWalletAddr(domain, ticker, network) {
  resolution
    .multiChainAddr(domain, ticker, network)
    .then((address) =>
      console.log(
        `Domain ${domain} has address for ${ticker} on network ${network}: ${address}`,
      ),
    )
    .catch(console.error);
}
getMultiChainWalletAddr('partner-engineering.crypto', 'MATIC', 'ERC20');
```

### Resolve IPFS Hashes for Decentralized Websites

The resolution library provides a method for resolving the IPFS hashes on a domain. The code snippet below shows how to do this in JavaScript.

```javascript
const {default: Resolution} = require('@unstoppabledomains/resolution');
// See https://github.com/unstoppabledomains/resolution for more initialization options
const resolution = new Resolution({ apiKey: "<api_key>" });

function resolveIpfsHash(domain) {
  resolution
    .ipfsHash(domain)
    .then((hash) =>
      console.log(
        `You can access this website via a public IPFS gateway: https://gateway.ipfs.io/ipfs/${hash}`,
      ),
    )
    .catch(console.error);
}
resolveIpfsHash('partner-engineering.nft');
```

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

### Error Codes

| Error Code | Description |
|---|---|
| InconsistentDomainArray | Thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain. |
| IncorrectResolverInterface | Thrown when the domain resolver of the current resolution instance is misconfigured. |
| InvalidDomainAddress | Thrown when you resolve an invalid domain address. |
| InvalidTwitterVerification | Thrown when you resolve the Twitter handle of a domain with an invalid Twitter signature verification. |
| MetadataEndpointError | Thrown when you resolve a domain with an undefined metadata endpoint. |
| RecordNotFound | Thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one. |
| ServiceProviderError | Thrown when you make an invalid request with the current resolution instance configured provider. |
| UnregisteredDomain | Thrown when you resolve a domain not owned by any address. |
| UnspecifiedCurrency | Thrown when the domain you're resolving doesn't have any address of the specified currency. |
| UnspecifiedResolver | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| UnsupportedCurrency | Thrown when you resolve a domain with a currency not supported by the current resolution instance. |
| UnsupportedDomain | Thrown when you resolve a domain with an ending not supported by the current resolution instance. |
| UnsupportedService | Thrown when using an unsupported naming service with the current resolution instance. |
| UnsupportedMethod | Thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `twitter()`, `reverse()`, `getDomainFromTokenId()`, `locations()`, and `getTokenuri()` methods for the Zilliqa Name Service (ZNS). |
