---
title: Get Domain Action Guide | Unstoppable Domains Developer Portal
description: This guide shows how to retrieve the details of a domain action request using the Domains Actions API.
---

# Get Domain Action Guide

The Domains Actions API offers the functionality to retrieve the details of a domain action request.

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare URL Parameters

| Name | Type | Mandatory | Description |
| - | - | - | - |
| actionId | NUMBER | YES | Domain action `id` obtained from the [Create Domain Action Request](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetAction) endpoint |

## Step 3: Use the Get Domain Action Endpoint

Send a `GET` request with the `domain action Id` to the [Get Domain Action](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetAction) endpoint. Here is the URL for our API environments:

Sandbox Environment:

```bash
https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions/{DOMAIN_ACTION_ID}
```

Production Environment:

```bash
https://unstoppabledomains.com/api/v2/resellers/{PARTNER_RESELLERID}/actions/{DOMAIN_ACTION_ID}
```

:::info
The `PARTNER_RESELLERID` path parameter is the same one you retrieved from your partner account earlier.
:::


## Example

Here is an example request to retrieve the details of a domain action request with `domain action id` of `12882`:

### Request

```bash
curl --location --request GET 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions/12882'
```

### Response

```json
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
You have successfully retrieved the details of a domain action request with the Domain Actions API.
:::

<embed src="/snippets/_discord.md" />
