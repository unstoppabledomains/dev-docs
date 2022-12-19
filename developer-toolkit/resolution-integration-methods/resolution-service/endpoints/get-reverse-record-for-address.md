---
title: Get Reverse Record for an Address | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Reverse Record for an Address` endpoint.
---

# Get Reverse Record for an Address

```bash
https://resolve.unstoppabledomains.com/reverse/{walletAddress}
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

## Returns

An object with the following fields:

* `meta`: A key-value dictionary with general information about the domain. The details are the same as for [Get Records for a Domain](get-records-for-a-domain.md#returns) response.
* `records`: A key-value dictionary with all domain records set on-chain. This includes wallet addresses and IPFS website hashes. To get more details, visit the Unstoppable Domains [Records Reference](/developer-toolkit/reference/records-reference.md) documentation.

## Example

Here is an example request to query for the reverse record for the `"0x88bc9b6c56743a38223335fac05825d9355e9f83"` wallet address:

```bash Request
curl \
--request GET "https://resolve.unstoppabledomains.com/reverse/0x88bc9b6c56743a38223335fac05825d9355e9f83" \
--header 'Authorization: Bearer {SECRET_API_TOKEN}'
```

```json Response
{
    "meta": {
        "domain": "jim-unstoppable.x",
        "tokenId": "79577619103421681308616456791817211704484961220433918391016311189913909952757",
        "namehash": "0xafef56165acf49408e6280cf683899f6e31402793e9eba29cbc985422ee980f5",
        "blockchain": "MATIC",
        "networkId": 137,
        "owner": "0x88bc9b6c56743a38223335fac05825d9355e9f83",
        "resolver": "0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f",
        "registry": "0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f",
        "reverse": true
    },
    "records": {
        "ipfs.html.value": "QmWPEVzQVTybSGafTDV5djAbaYF9whruhuBzb7LnyLu7Hk",
        "crypto.ETH.address": "0x57A82545be709963F0182B69F6E9B6f00B977592",
        "crypto.MATIC.version.MATIC.address": "0x621bf2A4720DbFF5E0AC4A94f539ef7c4555Cf22"
    }
}
```

<embed src="/snippets/_discord.md" />
