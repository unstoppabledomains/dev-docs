---
title: Resolving Domains in Web Applications
description: This page describes how to use UD Resolution to resolve NFT domains in web applications. It assumes the reader has a basic understanding of UD Resolution.
---

# Resolving Domains in Web Applications

Resolution is a library for interacting with NFT domain names. It can be used to retrieve [payment addresses](../crypto-payments/index.md), IPFS hashes for [decentralized websites](../d-websites/index.md), and GunDB usernames for [decentralized chat](https://unstoppabledomains.com/chat).

Resolution is built and maintained by Unstoppable Domains and supports decentralized domains across two main zones:

| Name Service                   | Supported Domains                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| Zilliqa Name Service (ZNS)     | `.zil`                                                                                 |
| Unstoppable Name Service (UNS) | `.crypto`, `.nft`, `.blockchain`, `.bitcoin`, `.coin`, `.wallet,` `.888`, `.dao`, `.x` |

:::info
For more information on Unstoppable Domains Resolution, see [Resolve Using Ethereum Smart Contracts](./direct-blockchain-calls/resolve-eth-smart-contracts.md) and the [Resolution API Reference](https://unstoppabledomains.github.io/resolution/). To make domain resolution easier, we've written libraries for web, Android, and iOS.
:::

## Installing Resolution

Resolution can be installed with either `yarn` or `npm`.

```
yarn add @unstoppabledomains/resolution
```

```
npm install @unstoppabledomains/resolution --save
```

If you're interested in resolving domains via the command line, see the  [CLI section](#command-line-interface) below.

## Using Resolution

Create a new project.

```
mkdir resolution && cd $_
yarn init -y
yarn add @unstoppabledomains/resolution
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

function resolveMultiChain(domain, currency, chain) {
  resolution
    .multiChainAddr(domain, currency, chain)
    .then((address) => console.log(domain, 'resolves to', address, version))
    .catch(console.error);
}

resolve('brad.crypto', 'ETH');
resolve('brad.zil', 'ZIL');
resolveMultiChain('brad.crypto', 'USDT', 'ERC20');
resolveMultiChain('brad.crypto', 'USDT', 'OMNI');
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

```
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

To use resolution via the command line install the package globally.

```
yarn global add @unstoppabledomains/resolution
```

```
npm install -g @unstoppabledomains/resolution
```

By default, the CLI uses Infura as its primary gateway to the Ethereum blockchain. If you'd like to override this default and set another provider you can do so using the `--ethereum-url` flag.

For example:

```
resolution --ethereum-url https://mainnet.infura.io/v3/${secret} -d udtestdev-usdt.crypto -a
```

Use the `-h` or `--help` flag to see all the available CLI options.

## Default Ethereum Providers

Resolution provides zero-configuration experience by using built-in production-ready [Infura](http://infura.io) endpoint by default. Default Ethereum provider is free to use without restrictions and rate-limits for `CNS (.crypto domains)` resolution.

\
To resolve `ENS` domains on production it's recommended to change Ethereum provider.\
Default provider can be changed by changing constructor options `new Resolution(options)` or by using one of the factory methods:

* `Resolution.infura()`
* `Resolution.fromWeb3Version1Provider()`
* `Resolution.fromEthersProvider()`
* etc.

To see all constructor options and factory methods check the [Unstoppable API reference](https://unstoppabledomains.github.io/resolution).

## Autoconfiguration of Blockchain Network

In some scenarios, the system might not be flexible enough to easily distinguish between various Ethereum testnets on compile time. For such cases, the resolution library provides a special async constructor which should be waited for `await Resolution.autonetwork(options)`. This method makes a JSON RPC "net\_version" call to the provider to get the network id.

This method configures CNS and UNS. ZNS is supported only on Zilliqa mainnet. You can provide a configured provider or a blockchain url as in the following example:

```json
Resolution.autoNetwork({
    uns: {
        locations: {
            Layer1: {
                url: 'http://alchemy.com/ethereum/api-key'
            },
            Layer2: {
                url: 'http://alchemy.com/polygon/api-key'
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

    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
    ```
2.  Install concrete version of `node.js`

    ```
    nvm install 12.12.0
    ```
3.  Install `yarn`

    ```
    npm install -g yarn
    ```
4.  Clone the repository

    ```
    git clone https://github.com/unstoppabledomains/resolution.git
    cd resolution
    ```
5.  Install dependencies

    ```
    yarn install
    ```

### Internal Config

**To update:**

* Network config: `$ yarn network-config:pull`
* Supported keys: `$ yarn supported-keys:pull`
* Both configs: `$ yarn config:pull`

<embed src="/snippets/_discord.md" />
