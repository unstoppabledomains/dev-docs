---
title: Get Reverse Record for an Address | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get reverse record for an address` endpoint.
---

# Get Reverse Record for an Address

```
GET https://unstoppabledomains.g.alchemy.com/reverse/<wallet address>
```

This endpoint will return the reverse record of the wallet address and all the domain name records and domain metadata in a single response.

## URL Params

| Name | Type | Mandatory | Description |
| - | - | - | - |
| wallet address | STRING | YES | A wallet address to query for reverse record |

## Query Params

* none

## Returns

A single object with the following fields:

* `meta`: A key-value dictionary with general information about the domain:
    * `domain`: (string) domain name.
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
* `records`: A key-value dictionary with all domain records set on-chain. This includes wallet addresses and IPFS website hashes. To get more details, visit the Unstoppable Domains [Records Reference](../../records-reference.md) documentation.

## Example

Here is an example request to query for the reverse record for the `"0xcb9c0e0Cd1949a42C4F876C384647aD652a95886"` wallet address:

### Request

```bash
curl \
--request GET "https://unstoppabledomains.g.alchemy.com/reverse/0xcb9c0e0Cd1949a42C4F876C384647aD652a95886" \
--header 'Authorization: Bearer <YOUR API KEY>'
```

### Response

```json
{
  "meta": {
    "domain": "brad.crypto",
    "owner": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8",
    "resolver": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe",
    "registry": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe",
    "blockchain": "ETH",
    "networkId": 1337,
  },
  "records": {
    "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8",
  }
}
```

<embed src="/snippets/_discord.md" />
