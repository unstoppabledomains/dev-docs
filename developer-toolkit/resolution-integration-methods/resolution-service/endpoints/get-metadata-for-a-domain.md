---
title: Get Metadata for a Domain | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Metadata for a Domain` endpoint.
---

# Get Metadata for a Domain

```
https://resolve.unstoppabledomains.com/metadata/<domainOrToken>
```

This endpoint returns the ERC721 metadata information of a domain name in a single response.

## Request Method

* GET

## Authentication

* none

## URL Params

| Name | Type | Mandatory | Description |
| - | - | - | - |
| domainOrToken | STRING | YES | A domain name registered by Unstoppable Domains. See all the [supported domain endings](../overview.md#supported-domains-endings) |

## Query Params

* none

## Returns

An object with the following fields:

* `name`: (string) Name of the domain.
* `description`: (string) A description of the domain name.
* `properties`: A key-value dictionary with information about the domain:
    * `records`: A key-value dictionary with all domain records set on-chain. This includes wallet addresses and IPFS website hashes. To get more details, visit the Unstoppable Domains [Records Reference](/developer-toolkit/reference/records-reference.md) documentation.
* `external_url`: (string) An external URL attached to the domain.
* `image`: (string) The PFP of the domain name in base64 format.
* `image_url`: (string) A link to the PFP of the domain name.
* `attributes`: (array) An array containing the attributes of the domain name.
    * `trait_type`: (string) The domain attribute type.
    * `value`: (string) The attribute type value.

## Example

Here is an example request to retrieve the ERC721 metadata information of the `brad.crypto` domain:

### Request

```bash
curl --location --request GET 'https://resolve.unstoppabledomains.com/metadata/brad.crypto'
```

### Response

```json
{
    "name": "brad.crypto",
    "description": "A CNS or UNS blockchain domain. Use it to resolve your cryptocurrency addresses and decentralized websites.\nhttps://gateway.pinata.cloud/ipfs/QmTiqc12wo2pBsGa9XsbpavkhrjFiyuSWsKyffvZqVGtut",
    "properties": {
        "records": {
            "ipfs.html.value": "QmTiqc12wo2pBsGa9XsbpavkhrjFiyuSWsKyffvZqVGtut",
            "crypto.ADA.address": "DdzFFzCqrhsuwQKiR3CdQ1FzuPAydtVCBFTRdy9FPKepAHEoXCee2qrio975M4cEbqYwZBsWJTNyrJ8NLJmAReSwAakQEHWBEd2HvSS7",
            "crypto.BTC.address": "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y",
            "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8",
            "gundb.username.value": "0x8912623832e174f2eb1f59cc3b587444d619376ad5bf10070e937e0dc22b9ffb2e3ae059e6ebf729f87746b2f71e5d88ec99c1fb3c7c49b8617e2520d474c48e1c",
            "social.picture.value": "1/erc1155:0xc7e5e9434f4a71e6db978bd65b4d61d3593e5f27/14317",
            "gundb.public_key.value": "pqeBHabDQdCHhbdivgNEc74QO-x8CPGXq4PKWgfIzhY.7WJR5cZFuSyh1bFwx0GWzjmrim0T5Y6Bp0SSK0im3nI",
            "ipfs.redirect_domain.value": "https://abbfe6z95qov3d40hf6j30g7auo7afhp.mypinata.cloud/ipfs/Qme54oEzRkgooJbCDr78vzKAWcv6DDEZqRhhDyDtzgrZP6"
        }
    },
    "external_url": "https://unstoppabledomains.com/search?searchTerm=brad.crypto",
    "image": "data:image/svg+xml;base64",
    "image_url": "https://metadata.unstoppabledomains.com/image-src/brad.crypto.svg",
    "attributes": [
        {
            "trait_type": "Ending",
            "value": "crypto"
        },
        {
            "trait_type": "Level",
            "value": 2
        },
        {
            "trait_type": "Length",
            "value": 4
        },
        {
            "trait_type": "Type",
            "value": "standard"
        },
        {
            "trait_type": "Character Set",
            "value": "letter"
        },
        {
            "trait_type": "Picture",
            "value": "verified nft"
        }
    ]
}
```

<embed src="/snippets/_discord.md" />
