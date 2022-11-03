---
title: Get Records for Multiple Domains | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Records for Multiple Domains` endpoint.
---

# Get Records for Multiple Domains

```bash
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

## Example

Here is an example request to query for a specific resolution record from multiple domain names:

1. `brad.crypto`
2. `matt.crypto`
3. `crypto.ETH.address`

### Request

```bash
curl \
--request GET 'https://resolve.unstoppabledomains.com/records?domains=brad.crypto&domains=matt.crypto&key=crypto.ETH.address' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}'
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
