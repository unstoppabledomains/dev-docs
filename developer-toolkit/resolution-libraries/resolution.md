---
title: Resolution Library | Unstoppable Domains Developer Portal
description: This page details basic configuration and usage of the resolution library.
---

# Resolution

This page details basic configuration and usage of the JavaScript [resolution library](https://github.com/unstoppabledomains/resolution).

## Configuration

Resolution libraries require a connection to the Ethereum network to resolve .crypto and .eth domains. To initialize the library, you need to specify an Ethereum node service provider. Once the instance is created you can begin resolving domains. Below are examples of how to initialize the library with different providers.

### Provider URL

Each of the resolution libraries supports an Ethereum provider url for configuration. You can obtain a provider url from a service like Alchemy where obtaining an API key is free and only requires creating an account.

To choose an alternative Ethereum provider see [Nodes as a Service guide.](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/)

<embed src="/snippets/_res-lib-default-provider.md" />

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

<embed src="/snippets/_res-lib-connect-src-warning.md" />

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

## Error Handling

<embed src="/snippets/_res-lib-error-intro.md" />

```typescript JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
const resolution = new Resolution();
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

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippet below show how to do this in JavaScript.

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
<embed src="/snippets/_discord.md" />
