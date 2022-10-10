---
title: Get Records for Multiple Domains | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Records for Multiple Domains` endpoint.
---

# Get Records for Multiple Domains

```
https://resolve.unstoppabledomains.com/records
```

This endpoint returns all the records attached to multiple domain names in a single response.

## Request Method

* GET

## Authentication

* Bearer Token

## URL Params

* none

## Query Params

| Name | Type | Mandatory | Description |
| - | - | - | - |
| domains | ARRAY[STRING] | YES | A list of UD domains to query for resolution records |
| key | STRING | NO | The resolution record to retrieve across the requested domains. See the [Records Reference](/developer-toolkit/reference/records-reference.md) documentation for supported values |

:::info
To retrieve the records of multiple domains, you need to use a new `domains` query param instance for each domain name.
:::

## Returns

An object with a `data` field that contains a list of domains and resolution records.

* `data`: (array) An array with the data and metadata of domains owned by a wallet address.
    * `domain`: (string) Name of the domain.
    * `records`: A key-value dictionary with all domain records set on-chain. This includes wallet addresses and IPFS website hashes. To get more details, visit the Unstoppable Domains [Records Reference](/developer-toolkit/reference/records-reference.md) documentation.

## Example 1

Here is an example request to query for the records of two domains:

1. `brad.crypto`
2. `matt.crypto`

### Request

```bash
curl \
--request GET 'https://resolve.unstoppabledomains.com/records?domains=brad.crypto&domains=matt.crypto' \
--header 'Authorization: Bearer <YOUR API KEY>'
```

### Response

```json
{
  "data": [
    {
      "domain": "brad.crypto",
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
    {
      "domain": "matt.crypto",
      "records": {
        "ipfs.html.value": "QmdjzCh82mFFLEhwhkfoH5HWvFp1fv4NwdjdJgazrjPsFy",
        "crypto.ETH.address": "0xa59C818Ddb801f1253edEbf0Cf08c9E481EA2fE5",
        "social.picture.value": "1/erc721:0xbd3531da5cf5857e7cfaa92426877b022e612cf8/395"
      }
    }
  ]
}
```

## Example 2

Here is an example request to query for a specific resolution record from multiple domain names:

1. `brad.crypto`
2. `matt.crypto`
3. `crypto.ETH.address`

### Request

```bash
curl \
--request GET 'https://resolve.unstoppabledomains.com/records?domains=brad.crypto&domains=matt.crypto&key=crypto.ETH.address' \
--header 'Authorization: Bearer <YOUR API KEY>'
```

### Response

```json
{
  "data": [
    {
      "domain": "brad.crypto",
      "records": {
        "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
      }
    },
    {
      "domain": "matt.crypto",
      "records": {
        "crypto.ETH.address": "0xa59C818Ddb801f1253edEbf0Cf08c9E481EA2fE5"
      }
    }
  ]
}
```

<embed src="/snippets/_discord.md" />
