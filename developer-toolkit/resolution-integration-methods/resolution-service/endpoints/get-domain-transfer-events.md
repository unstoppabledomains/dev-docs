---
title: Get Domain Transfer Events | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Domain Transfer Events` endpoint.
---

# Get Domain Transfer Events

```
https://resolve.unstoppabledomains.com/domains/<domain>/transfers/latest
```

This endpoint tracks the blocks and blockchains domain names are being transferred from one owner wallet address to another.

## Request Method

* GET

## Authentication

* Bearer Token

## URL Params

| Name | Type | Mandatory | Description |
| - | - | - | - |
| domain | STRING | YES | A domain name registered by Unstoppable Domains. See all the [supported domain endings](../overview.md#supported-domains-endings) |

## Query Params

* none

## Returns

An object with a `data` field that contains a list of domain transfer events.

* `data`: (array) An array with the latest transfers of the domain in different blockchains.
    * `domain`: (string) Name of the domain.
    * `from`: (address) The wallet address that sent the domain.
    * `to`: (address) The wallet address of the receiver.
    * `networkId`: (number) The blockchain network ID
        * 1 - Ethereum or Zilliqa Mainnet
        * 137 - Polygon (Matic) Mainnet
        * 80001 - Polygon (Matic) Mumbai Testnet
        * 4 - Ethereum Rinkeby Testnet
        * 5 - Ethereum Goerly Testnet
    * `blockNumber`: (number) The blockchain block where the transfer happened.
    * `blockchain`: (string) The blockchain the domain is located (MATIC, ETH, ZIL). The blockchain names are coin types according to [SLIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md).

## Example

Here is an example request to query for the transfer events of the `brad.crypto` domain:

### Request

```bash
curl \
--request GET "https://resolve.unstoppabledomains.com/domains/brad.crypto/transfers/latest" \
--header 'Authorization: Bearer {{ SECRET_API_TOKEN }}'
```

### Response

```json
{
  "data": [
    {
      "domain": "brad.crypto",
      "from": "0x020e7c546B1567FfC7f6202Ca5F748533523dADc",
      "to": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8",
      "networkId": 1,
      "blockNumber": 10060311,
      "blockchain": "ETH"
    }
  ]
}
```

<embed src="/snippets/_discord.md" />
