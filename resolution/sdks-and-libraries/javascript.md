---
title: Resolution Library | Unstoppable Domains Developer Portal
description: This page details basic configuration and usage of the resolution library.
redirectFrom:
  - /developer-toolkit/resolution-integration-methods/resolution-libraries/resolution/
  - /developer-toolkit/advanced-use-cases/resolve-domains-in-web-applications/
---

# Resolution

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

```javascript
const { default: Resolution } = require("@unstoppabledomains/resolution");
const resolution = new Resolution({
  // obtain a key by following this document https://docs.unstoppabledomains.com/domain-distribution-and-management/quickstart/retrieve-an-api-key/#api-key
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

```javascript
const { default: Resolution } = require("@unstoppabledomains/resolution");
// obtain a key from https://www.infura.io
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

## Resolution Example:

### Resolve wallet address using `addr`

This API is used to retrieve wallet address for single address record. (See
[Cryptocurrency payment](https://docs.unstoppabledomains.com/resolution/guides/records-reference/#cryptocurrency-payments)
section for the record format)

With `homecakes.crypto` has `crypto.ETH.address` on-chain:

```javascript
function getWalletAddr(domain, ticker) {
  resolution
    .addr(domain, ticker)
    .then((address) =>
      console.log(`Domain ${domain} has address for ${ticker}: ${address}`),
    )
    .catch(console.error);
}
getWalletAddr('homecakes.crypto', 'ETH');
// Domain homecakes.crypto has address for ETH: 0xe7474D07fD2FA286e7e0aa23cd107F8379085037
```

### Resolve multi-chain address format

This API is used to retrieve wallet address for multi-chain address records.
(See
[multi-chain currency](https://docs.unstoppabledomains.com/resolution/guides/records-reference/#multi-chain-currencies))

With `aaron.x` has `crypto.AAVE.version.ERC20.address` on-chain:

```javascript
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
getMultiChainWalletAddr('aaron.x', 'AAVE', 'ETH');
// Domain aaron.x has address for AAVE on network ETH: 0xCD0DAdAb45bAF9a06ce1279D1342EcC3F44845af
```

### Resolve wallet address using `getAddress`

This (beta) API can be used to resolve different formats

```javascript
function getWalletAddress(domain, network, token) {
  resolution
    .getAddress(domain, network, token)
    .then((address) =>
      console.log(
        `Domain ${domain} has address for ${token} on ${network}: ${address}`,
      ),
    )
    .catch(console.error);
}
```

**Resolve single address format (similar to **`addr`** API)**

With `homecakes.crypto` has a `crypto.ETH.address` record set on-chain:

```javascript
getWalletAddress('homecakes.crypto', 'ETH', 'ETH');
// Domain homecakes.crypto has address for ETH on ETH: 0xe7474D07fD2FA286e7e0aa23cd107F8379085037
```

**Resolve multi-chain currency address format (See
[multi-chain currency](https://docs.unstoppabledomains.com/resolution/guides/records-reference/#multi-chain-currencies))**

With `aaron.x` has a `crypto.AAVE.version.ERC20.address` record set to
`0xCD0DAdAb45bAF9a06ce1279D1342EcC3F44845af`. The `ERC20` indicates it's a token
on `ETH` network:

```javascript
getWalletAddress('aaron.x', 'ETH', 'AAVE');
// Domain aaron.x has address for AAVE on ETH: 0xCD0DAdAb45bAF9a06ce1279D1342EcC3F44845af
```

**Derive wallet addresses within the same blockchain network and blockchain
family.**

The API can also be used by crypto exchanges to infer wallet addresses. In
centralized exchanges, users have same wallet addresses on different networks
with same wallet family.

With `blockchain-family-keys.x` only has `token.EVM.address` record on-chain.
The API resolves to same wallet address for tokens live on EVM compatible
networks.

```javascript
getWalletAddress('blockchain-family-keys.x', 'ETH', 'AAVE');
// Domain blockchain-family-keys.x has address for AAVE on ETH: 0xCD0DAdAb45bAF9a06ce1279D1342EcC3F44845af

getWalletAddress('blockchain-family-keys.x', 'ETH', 'ETH');
// Domain blockchain-family-keys.x has address for ETH on ETH: 0xCD0DAdAb45bAF9a06ce1279D1342EcC3F44845af

getWalletAddress('blockchain-family-keys.x', 'AVAX', 'USDT');
// Domain blockchain-family-keys.x has address for USDT on AVAX: 0xCD0DAdAb45bAF9a06ce1279D1342EcC3F44845af
```

With `uns-devtest-nickshatilo-withdraw-test2.x` only has `token.EVM.ETH.address`
record on chain. The API resolves to the same wallet address for tokens
specifically on Ethereum network.

```javascript
getWalletAddress('uns-devtest-nickshatilo-withdraw-test2.x', 'ETH', 'AAVE');
// Domain blockchain-family-keys.x has address for AAVE on ETH: 0xCD0DAdAb45bAF9a06ce1279D1342EcC3F44845af

getWalletAddress('uns-devtest-nickshatilo-withdraw-test2.x', 'ETH', 'MATIC');
// Domain blockchain-family-keys.x has address for ETH on ETH: 0xCD0DAdAb45bAF9a06ce1279D1342EcC3F44845af

getWalletAddress('uns-devtest-nickshatilo-withdraw-test2.x', 'ETH', 'USDT');
// Domain blockchain-family-keys.x has address for USDT on ETH: 0xCD0DAdAb45bAF9a06ce1279D1342EcC3F44845af

getWalletAddress('uns-devtest-nickshatilo-withdraw-test2.x', 'MATIC', 'USDT');
// won't work
```

The API is compatible with other address formats. If a domain has multiple
address formats set, it will follow the algorithm described as follow:

if a domain has following records set:

```
token.EVM.address
crypto.USDC.version.ERC20.address
token.EVM.ETH.USDC.address
crypto.USDC.address
token.EVM.ETH.address
```

`getAddress(domain, 'ETH', 'USDC')` will lookup records in the following order:

```
1. token.EVM.ETH.USDC.address
2. crypto.USDC.address
3. crypto.USDC.version.ERC20.address
4. token.EVM.ETH.address
5. token.EVM.address
```

## Error Handling

<embed src="/snippets/_res-lib-error-intro.md" />

```typescript JavaScript
const { default: Resolution } = require("@unstoppabledomains/resolution");

const resolution = new Resolution({
  // obtain a key by following this document https://docs.unstoppabledomains.com/domain-distribution-and-management/quickstart/retrieve-an-api-key/#api-key
  apiKey: "<api_key>",
  sourceConfig: {
    zns: {
      url: "https://api.zilliqa.com",
      network: "mainnet",
    },
  },
});
resolution
  .addr("domain-with-error.crypto", "ETH")
  .then((ethAddress) => {})
  .catch((error) => {
    if (error.code === "UnregisteredDomain") {
      console.log("Domain is not registered");
    }
    if (error.code === "RecordNotFound") {
      console.log("Crypto record is not found (or empty)");
    }
    if (error.code === "UnspecifiedResolver") {
      console.log("Domain is not configured (empty resolver)");
    }
    if (error.code === "UnsupportedDomain") {
      console.log("Domain is not supported");
    }
  });
```

### Error Codes

| Error Code                 | Description                                                                                                                                                                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| InconsistentDomainArray    | Thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain.      |
| IncorrectResolverInterface | Thrown when the domain resolver of the current resolution instance is misconfigured.                                                                                                                                                                                                 |
| InvalidDomainAddress       | Thrown when you resolve an invalid domain address.                                                                                                                                                                                                                                   |
| InvalidTwitterVerification | Thrown when you resolve the Twitter handle of a domain with an invalid Twitter signature verification.                                                                                                                                                                               |
| MetadataEndpointError      | Thrown when you resolve a domain with an undefined metadata endpoint.                                                                                                                                                                                                                |
| RecordNotFound             | Thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one.                                                                                                                                                |
| ServiceProviderError       | Thrown when you make an invalid request with the current resolution instance configured provider.                                                                                                                                                                                    |
| UnregisteredDomain         | Thrown when you resolve a domain not owned by any address.                                                                                                                                                                                                                           |
| UnspecifiedCurrency        | Thrown when the domain you're resolving doesn't have any address of the specified currency.                                                                                                                                                                                          |
| UnspecifiedResolver        | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver.                                                                                                                                                            |
| UnsupportedCurrency        | Thrown when you resolve a domain with a currency not supported by the current resolution instance.                                                                                                                                                                                   |
| UnsupportedDomain          | Thrown when you resolve a domain with an ending not supported by the current resolution instance.                                                                                                                                                                                    |
| UnsupportedService         | Thrown when using an unsupported naming service with the current resolution instance.                                                                                                                                                                                                |
| UnsupportedMethod          | Thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `twitter()`, `reverse()`, `getDomainFromTokenId()`, `locations()`, and `getTokenuri()` methods for the Zilliqa Name Service (ZNS). |

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippet below show how to do this in JavaScript.

```javascript
function resolveCustomRecord(domain, record) {
  resolution
    .records(domain, [record])
    .then((value) => console.log(`Domain ${domain} ${record} is: ${value}`))
    .catch(console.error);
}

resolveCustomRecord("homecakes.crypto", "custom.record.value");
```

## Use Case: Resolve Addresses Existing on Multiple Blockchains

The resolution library provides a method for resolving the addresses of tickers for different blockchains (e.g. `USDT` exists on `EOS`, `ERC20`, `OMNI`, and `TRON` blockchains). The code snippet below show how to do this in JavaScript.

```javascript
resolution
  .multiChainAddr("udtestdev-usdt.crypto", "USDT", "ERC20")
  .then((receiverUSDTAddress) => {
    // receiverUSDTAddress consists address for receiving USDT on Ethereum (ERC20 version)
    // use this address as recipient of the payment
  })
  .catch(console.error);
```

<embed src="/snippets/_discord.md" />
