---
title: Resolving Domains in Web Applications | UD Developer Portal
description: This page describes how to use the Resolution library to resolve Web3 domains in web applications. It assumes a basic understanding of UD Resolution.
---

# Resolving Domains in Web Applications

Resolution is a library for interacting with Web3 domain names. It can be used to retrieve [payment addresses](/crypto-payments/index.md) and IPFS hashes for [decentralized websites](/d-websites/index.md).

Resolution is built and maintained by Unstoppable Domains and supports decentralized domains across two main zones:

<embed src="/snippets/_supported-domain-endings.md" />

:::info
For more information on Unstoppable Domains Resolution, see [Resolve Using Smart Contracts](../resolution-integration-methods/direct-blockchain-calls/resolve-eth-smart-contracts.md) and the [Resolution API Reference](https://unstoppabledomains.github.io/resolution/). To make domain resolution easier, we've written libraries for web, Android, and iOS.
:::

## Installing Resolution

Resolution can be installed with either `yarn` or `npm`.

```bash yarn
yarn add @unstoppabledomains/resolution
```

```bash npm
npm install @unstoppabledomains/resolution --save
```

If you're interested in resolving domains via the command line, see the  [CLI section](#command-line-interface) below.

## Using Resolution

Create a new project.

```bash
$ mkdir resolution && cd $_
$ yarn init -y
$ yarn add @unstoppabledomains/resolution
```

### Look up a domain's crypto address

Create a new file in your project, `address.js`.

```javascript
const { default: Resolution } = require('@unstoppabledomains/resolution');
const resolution = new Resolution();

function resolve(domain, currency) {
  resolution
    .addr(domain, currency)
    .then((address) => console.log(domain, 'resolves to', address))
    .catch(console.error);
}

resolve('brad.crypto', 'ETH');
resolve('brad.zil', 'ZIL');
```

Execute the script.

```javascript
$ node address.js
brad.crypto resolves to 0x8aaD44321A86b170879d7A244c1e8d360c99DdA8
brad.zil resolves to zil1yu5u4hegy9v3xgluweg4en54zm8f8auwxu0xxj
```

### Find the IPFS hash for a decentralized website

Create a new file in your project, `ipfs_hash.js`.

```javascript
const { default: Resolution } = require('@unstoppabledomains/resolution');
const resolution = new Resolution();

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

resolveIpfsHash('homecakes.crypto');
```

Execute the script.

```bash
$ node ipfs_hash.js
You can access this website via a public IPFS gateway: https://gateway.ipfs.io/ipfs/QmVJ26hBrwwNAPVmLavEFXDUunNDXeFSeMPmHuPxKe6dJv
```

### Find a custom record

Create a new file in your project, `custom-resolution.js`.

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

### Command Line Interface

To use resolution via the command line, [download one of the binaries](https://github.com/unstoppabledomains/resolution-cli/releases) or install using Go.

```bash
go get -u github.com/unstoppabledomains/resolution-cli/resolution
```

By default, the CLI uses Alchemy as its primary gateway to the blockchain. If you'd like to override this default and set another provider you can do so using the `--ethereum-provider-url` flag for Ethereum and `ethereum-l2-provider-url` for Polygon.

For example:

```bash
resolution --ethereum-provider-url https://eth-mainnet.g.alchemy.com/v2/{API_KEY} -d udtestdev-usdt.crypto
```

Use the `-h` or `--help` flag to see all the available CLI options. Please see the [Resolution CLI](/developer-toolkit/resolution-integration-methods/resolution-cli.md) documentation for more information.

## Default Ethereum Providers

Resolution provides zero-configuration experience by using built-in production-ready [Alchemy](http://alchemy.com/) endpoint by default. The Default Ethereum provider is free to use without restrictions and rate-limits for `CNS (.crypto domains)` resolution.

To resolve `ENS` domains on production it's recommended to change the Ethereum provider. Default provider can be changed by changing constructor options `new Resolution(options)` or by using one of the factory methods:

* `Resolution.alchemy()`
* `Resolution.infura()`
* `Resolution.fromWeb3Version1Provider()`
* `Resolution.fromEthersProvider()`
* etc.

To see all constructor options and factory methods check the [Unstoppable API reference](https://unstoppabledomains.github.io/resolution).

## Autoconfiguration of Blockchain Network

In some scenarios, the system might not be flexible enough to easily distinguish between various Ethereum testnets on compile time. For such cases, the resolution library provides a special async constructor which should be waited for `await Resolution.autoNetwork(options)`. This method makes a JSON RPC "net\_version" call to the provider to get the network id.

This method configures CNS and UNS. ZNS is supported only on Zilliqa mainnet. You can provide a configured provider or a blockchain url as in the following example:

```javascript
Resolution.autoNetwork({
    uns: {
        locations: {
            Layer1: {
                url: 'http://alchemy.com/ethereum/{API_KEY}'
            },
            Layer2: {
                url: 'http://alchemy.com/polygon/{API_KEY}'
            }
        }
    }
})
```

## Error Handling

When resolution encounters an error it returns the error code instead of stopping the process. Keep an eye out for return values like `RECORD_NOT_FOUND`.

## Development

Use these commands to set up a local development environment (**macOS Terminal** or **Linux shell**).

1.  Install `nvm`

    ```bash
    curl --location --request GET 'https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh' | bash
    ```
2.  Install concrete version of `node.js`

    ```bash
    nvm install 16.15.0
    ```
3.  Install `yarn`

    ```bash
    npm install -g yarn
    ```
4.  Clone the repository

    ```bash
    git clone https://github.com/unstoppabledomains/resolution.git
    cd resolution
    ```
5.  Install dependencies

    ```bash
    yarn install
    ```

### Internal Config

**To update:**

* Network config: `yarn network-config:pull`
* Supported keys: `yarn supported-keys:pull`
* Both configs: `yarn config:pull`

<embed src="/snippets/_discord.md" />
