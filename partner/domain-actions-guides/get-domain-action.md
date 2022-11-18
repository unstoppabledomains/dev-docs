---
title: Get Domain Action Guide | Unstoppable Domains Developer Portal
description: This guide shows how to retrieve the details of a domain action request using the Domains Actions API.
---

# Get Domain Action Guide

The Domains Actions API offers the functionality to **retrieve the details** of a domain action request.

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

Here is an example request to retrieve the details of a domain action request with `domain action id` of `10`:

### Request

```bash
curl --location --request GET 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions/10'
```

### Response

```json
{
    "id": 10,
    "action": "SetReverseResolution",
    "status": "Draft",
    "domain": {
        "id": 11949,
        "name": "reseller-test-udtesting-602716235250.crypto",
        "ownerAddress": "0x499dd6d875787869670900a2130223d85d4f6aa7",
        "resolver": "0x2a93c52e7b6e7054870758e15a1446e769edfb93",
        "resolution": {
            "crypto.ETH.address": "0x499dd6d875787869670900a2130223d85d4f6aa7",
            "crypto.MATIC.version.ERC20.address": "0x499dd6d875787869670900a2130223d85d4f6aa7",
            "crypto.MATIC.version.MATIC.address": "0x499dd6d875787869670900a2130223d85d4f6aa7"
        },
        "blockchain": "MATIC",
        "projectedBlockchain": "MATIC",
        "registryAddress": "0x2a93c52e7b6e7054870758e15a1446e769edfb93",
        "networkId": 80001,
        "freeToClaim": true,
        "node": "0x047fd742a6793ecd66d6de1140724c7bcfc1f429fc5a1150a76f58877105b6da"
    },
    "txs": [
        {
            "id": 107,
            "blockchain": "MATIC",
            "hash": null,
            "from": "0x499dd6d875787869670900a2130223d85d4f6aa7",
            "status": "Draft",
            "operation": "SetReverseResolution",
            "failReason": null,
            "type": "Meta",
            "signatureStatus": "Required",
            "messageToSign": "0xd2d022511a81534e04924777166adfb0440b54da944642d9ced160fc5b21a88a"
        }
    ],
    "paymentInfo": null
}
```

:::success Congratulations!
You have successfully retrieved the details of a domain action request with the Domain Actions API.
:::

<embed src="/snippets/_discord.md" />
