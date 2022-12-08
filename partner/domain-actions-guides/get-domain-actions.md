---
title: Get Domain Actions Guide | Unstoppable Domains Developer Portal
description: This guide shows how to retrieve the domain actions performed by a user, domain or owner address using the Domain Actions API.
---

# Get Domain Actions Guide

The Domain Actions API offers the functionality to **retrieve the domain actions** performed by a user, domain or owner address.

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Query Parameters

| Name | Type | Mandatory | Description |
| - | - | - | - |
| status | STRING | NO | The blockchain action status the response results should be filtered with. Currently supports `InProgress`, `Completed`, and `Failed` |
| userId | NUMBER | NO | The ID of the user to query for domain actions |
| domain | STRING | NO | The domain name to query for domain actions |
| ownerAddress | STRING | NO | The domain name to query for domain actions |
| perPage | NUMBER | NO | The number of actions to return per response page |
| page | NUMBER | NO | The response page to return. If `perPage` is 100 and `page` is 3, you'll get results 201 - 300 |

:::info
You need to provide at least one of `userId`, `domain`, or `ownerAddress` in every request. Every other parameter is optional.
:::

## Step 3: Prepare Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 4: Use the Get Domain Actions Endpoint

Send a `GET` request with the query parameters and authorization headers to the [Get Domain Actions](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetActions) endpoint:

Sandbox Environment:

```bash
https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions
```

Production Environment:

```bash
https://unstoppabledomains.com/api/v2/resellers/{PARTNER_RESELLERID}/actions
```

:::info
The `PARTNER_RESELLERID` path parameter is the same one you retrieved from your partner account earlier.
:::


## Example

Here is an example of a request that you can use to retrieve domain actions with the following parameters:

| Parameter | Value |
| - | - |
| Domain | matt.dao |
| Status | InProgress |
| perPage | 10 |
| page | 1 |

```bash Request
curl --location --request GET 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions?domain=matt.dao&status=InProgress&perPage=10&page=1' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}'
```

```json Response
{
  "id": 12882,
  "status": "Draft",
  "domain": {
    "id": 1001,
    "name": "matt.dao",
    "ownerAddress": "0x6EC0DEeD30605Bcd19342f3c30201DB263291589",
    "resolver": "0x049aba7510f45BA5b64ea9E658E342F904DB358D",
    "registryAddress": "0x049aba7510f45BA5b64ea9E658E342F904DB358D",
    "networkId": 1,
    "resolution": {
      "crypto.ETH.address": "0x6EC0DEeD30605Bcd19342f3c30201DB263291589",
      "crypto.BTC.address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
    },
    "blockchain": "MATIC",
    "freeToClaim": true,
    "node": "0x756e4e998dbffd803c21d23b06cd855cdc7a4b57706c95964a37e24b47c10fc9"
  },
  "txs": [
    {
      "id": 2883,
      "blockchain": "MATIC",
      "status": "Draft",
      "signatureStatus": "Required",
      "type": "Regular",
      "to": "0x801452cFAC27e79a11c6b185986fdE09e8637589",
      "data": "0xb88d4fde00000000000000000000000087348226e747df4cff2b1b1e38a528df405ccd5c000000000000000000000000070e83fced225184e67c86302493fffcdb953f7153b27892177c7f5b476966a119b206227e8155dc86269f932655df96e76d8803000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001"
    }
  ],
  "paymentInfo": {
    "id": "3882828",
    "stripeSecret": "string",
    "totalAmount": 424
  }
}
```

:::success Congratulations!
The Domain Actions API has successfully provided the details of domain actions performed by a specified domain.
:::

<embed src="/snippets/_discord.md" />
