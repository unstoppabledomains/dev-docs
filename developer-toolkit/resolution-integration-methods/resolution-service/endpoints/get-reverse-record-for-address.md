---
title: Get Reverse Record for an Address | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Reverse Record for an Address` endpoint.
---

# Get Reverse Record for an Address

```bash
https://resolve.unstoppabledomains.com/reverse/<walletAddress>
```

This endpoint will return the reverse record of the wallet address and all the domain name records and domain metadata in a single response.

## Request Method

* GET

## Authentication

* Bearer Token

## URL Params

| Name | Type | Mandatory | Description |
| - | - | - | - |
| walletAddress | STRING | YES | A wallet address to query for reverse record |

## Query Params

* none

## Returns

An object with the following fields:

* `meta`: A key-value dictionary with general information about the domain:
    * `domain`: (string) Name of the domain.
    * `owner`: (string) The wallet address that owns the domain.
    * `resolver`: (string) The Resolver smart contract address. This contract is responsible for managing domain records.
    * `registry`: (string) The Registry smart contract address. Registry manages domain ownership, minting domains and subdomains, storing domain metadata, and burning domains. The registry also stores and manages domain records in the Unstoppable Name Service (UNS).
    * `blockchain`: (string) The blockchain the domain is located (MATIC, ETH, ZIL). The blockchain names are coin types according to [SLIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).
    * `networkId`: (number) The blockchain network ID.
        * 1 - Ethereum or Zilliqa Mainnet
        * 137 - Polygon (Matic) Mainnet
        * 80001 - Polygon (Matic) Mumbai Testnet
        * 4 - Ethereum Rinkeby Testnet
        * 5 - Ethereum Goerli Testnet
    * `reverse`: (boolean) A boolean indicating if the domain has a reverse record.
* `records`: A key-value dictionary with all domain records set on-chain. This includes wallet addresses and IPFS website hashes. To get more details, visit the Unstoppable Domains [Records Reference](/developer-toolkit/reference/records-reference.md) documentation.

## Example

Here is an example request to query for the reverse record for the `"0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19"` wallet address:

### Request

```bash
curl \
--request GET "https://resolve.unstoppabledomains.com/reverse/0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19" \
--header 'Authorization: Bearer {{ SECRET_API_TOKEN }}'
```

### Response

```json
{
  "meta": {
    "domain": "reseller-test-udtesting-034215839398.crypto",
    "blockchain": "MATIC",
    "networkId": 137,
    "owner": "0x3eaa674612f79a97ad451fcf860a51ad41ac2c19",
    "resolver": "0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f",
    "registry": "0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f",
    "reverse": true
  },
  "records": {
    "crypto.ETH.address": "0x3eaa674612f79a97ad451fcf860a51ad41ac2c19",
    "crypto.MATIC.version.ERC20.address": "0x3eaa674612f79a97ad451fcf860a51ad41ac2c19",
    "crypto.MATIC.version.MATIC.address": "0x3eaa674612f79a97ad451fcf860a51ad41ac2c19"
  }
}
```

<embed src="/snippets/_discord.md" />
