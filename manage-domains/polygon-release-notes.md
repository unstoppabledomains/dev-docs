---
title: Polygon Migration Release Notes | Unstoppable Domains Developer Portal
description: This page outlines the steps developers will take to migrate to Polygon and support Unstoppable domains on Polygon L2 network.
redirectFrom:
  - /polygon/
  - /polygon/polygon-migration-guide/
---

# Polygon Migration Release Notes

There will be minimal changes to Unstoppable Domains’ resolution libraries and resolution service with the rollout of our Layer 2 solution on Polygon. Over 90% of the library and resolution service will be similar to what we provide for Ethereum. However, for UD developers, all of the integrated "apps" will need to update their resolution libraries or API endpoints in order to be able to read and resolve Web3 domains on Polygon.

## Polygon Updates

Polygon apps will resolve domains by reading [UNS Smart Contracts](/smart-contracts/contract-reference/uns-smart-contracts.md#interfaces) housed on Polygon. Developers can also go directly to the [Smart Contracts Repo](https://github.com/unstoppabledomains/uns/blob/main/Contracts.md) to help with integration.

To further assist with L2, the Polygon team will be adding Unstoppable Domains resolution to their API and Matic.js library. This will make it easier, for example, for Polygon apps to use domains for payments in wallets and login with DApps.

## Resolution Library Updates

Our Layer 2 resolution libraries will require a few configuration changes to allow the libraries to read from Polygon. There are a few small changes to function/method calls and one brand new method which provides additional resolution information.

### Method Changes and Updates

* **gettokensownedby** has been deprecated and is no longer supported in L2.
* **getallrecords** has changed structurally but does not require a change to the function or method call; the external interface remains the same, but the method will not be as decentralized because it uses our resolution service instead of querying the blockchain.

### New Supported Method

**Resolution#getLocations(\[domain1, domain2, domain3])** is a new method array that returns information for an unlimited number of domains; it only supports UNS and CNS due to Zilliqa technical limits.

This method returns a list of domain locations:

* Blockchain Provider URL (if possible otherwise null)
* RegistryAddress
* ResolverAddress
* [Network ID](https://chainlist.org)
* Blockchain ([Coin symbol](https://github.com/satoshilabs/slips/blob/master/slip-0044.md))
* Owner address

### List of Network IDs

This table displays the network IDs used by Unstoppable Domains in the UNS config file.

| Network ID | Description     |
| ---------- | --------------- |
| 1          | mainnet         |
| 5          | Goerli testnet |
| 137        | Polygon mainnet |
| 80001      | Polygon testnet |

## Resolution Service Updates

Unstoppable Domains’ Polygon resolution service will have the same specifications as our [existing resolution service](http://resolve.unstoppabledomains.com/api-docs/), but there will be a few metadata changes to the service.

### /status route

Overall changes for **/status route**

* Return [Network ID](https://chainlist.org) instead of _network_
* Move all fields under “blockchain” namespace

```javascript NEW Response
{
   "blockchain":{
      "ETH":{
         "latestNetworkBlock":13100548,
         "latestMirroredBlock":12674000,
         "networkId":1
      },
      "ZIL":{
         "latestNetworkBlock":1385207,
         "latestMirroredBlock":1385207,
         "networkId":1
      }
   }
}
```

```javascript OLD response
{
   "ETH":{
      "latestNetworkBlock":13230550,
      "latestMirroredBlock":13230530,
      "network":"mainnet"
   },
   "ZIL":{
      "latestNetworkBlock":1433099,
      "latestMirroredBlock":1433091,
      "network":"mainnet"
   }
}
```

### /domains and /domains/\<domain name> routes

Overall changes for **/domain and /domains\<domain name> routes**

* Return [Network ID](https://chainlist.org) instead of location field
* Add blockchain field to store data about Layer 1 and Layer 2

```javascript NEW response
{
  "records": {
    "crypto.BTC.address": "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y",
    "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
  },
   "meta": {
    "networkId":  1,
    "blockchain": "ETH",
    "domain": "brad.crypto",
    "owner": "0x8aad44321a86b170879d7a244c1e8d360c99dda8",
    "resolver": "0xb66dce2da6afaaa98f2013446dbcb0f4b0ab2842",
    "registry": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe"
  }
}
```

```javascript OLD Response
{
  "records": {
    "crypto.BTC.address": "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y",
    "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
  },
   "meta": {
    "location": "CNS",
    "domain": "brad.crypto",
    "owner": "0x8aad44321a86b170879d7a244c1e8d360c99dda8",
    "resolver": "0xb66dce2da6afaaa98f2013446dbcb0f4b0ab2842",
    "registry": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe"
  }
}
```

## Domain Transfer Options

You have several methods for transferring and depositing your Unstoppable Domains between networks.

| Transfer Option                          | Description                                                                                                                   | Transfer Guide Guide                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| CNS L1 to UNS L1    | how to transfer or migrate a domain from CNS L1 (Ethereum) to UNS L1 (Ethereum)                                                | [CNS L1 to UNS L1: Domain Transfer Guide](/manage-domains/guides/cns1-to-uns1.md)       |
| CNS L1 to UNS L2    | how to deposit your domain from CNS L1 (Ethereum) to UNS L2 (Polygon) feature                                                  | [CNS L1 to UNS L2: Domain Deposit Guide](//manage-domains/guides/cns1-to-uns2.md) |
| UNS L1 to UNS L2  | how to deposit your domain from UNS L1 (Ethereum) to UNS L2 (Polygon)                                                              | [UNS L1 to UNS L2: Domain Deposit Guide](/manage-domains/guides/uns1-to-uns2.md)                             |

