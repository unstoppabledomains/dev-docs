---
title: Return Domain Action Guide | Unstoppable Domains Developer Portal
description: This guide shows how to create a domain action request to return a domain to Unstoppable Domains and receive a refund using the Domains Actions API.
---

# Return Domain Action Guide

The Domains Actions API offers the functionality to generate a list of transactions that needs to be performed to **return a domain to Unstoppable Domains** and receive a refund without having to form them on the client.

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Request Body

The request body contains information about your order and must be in JSON format for the API. Here’s the structure:

```javascript
{
    "action": "Return",
    "domain": string, // domain name you are returning
    "gasCompensationPolicy": string // gas compensation policy
}
```

* `action`: (string) The domain action you want to perform. To return domains, the value should be `"Return"`.
* `domain`: (string) The domain name you want to return.
* `gasCompensationPolicy`: (string) The gas compensation policy that should be used for the domain action.

## Step 3: Use the Create Domain Action Request Endpoint

<embed src="/snippets/_domain-actions-endpoint-usage.md" />

## Example

Here is an example request to create the domain action request to return a domain with the following parameters:

| Parameter | Value |
| - | - |
| Domain Action | Return |
| Domain | reseller-test-udtesting-602716235250.crypto |
| Gas Compensation Policy | CompensateFree |

### Request

```bash
curl --location --request POST 'https://unstoppabledomains.com/api/v2/resellers/{PARTNER_RESELLERID}/actions' \
--header 'Content-Type: application/json' \
--data-raw '{
    "action": "Return",
    "domain": "lordghostx.wallet",
    "gasCompensationPolicy": "CompensateFree"
}'
```

### Response

```json
{
    "id": 11,
    "action": "Return",
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
            "id": 108,
            "blockchain": "MATIC",
            "hash": null,
            "from": "0x499dd6d875787869670900a2130223d85d4f6aa7",
            "status": "Draft",
            "operation": "TransferDomain",
            "failReason": null,
            "type": "Meta",
            "signatureStatus": "Required",
            "messageToSign": "0x4ba3d701323836da23ce8100b9f5b8e5dd09290d589f5c66e0d78a9c1bfb4778"
        }
    ],
    "paymentInfo": null
}
```

The `id` field in the API response is the domain action ID and the `txs` field contains the list of transactions that needs to be performed to return the `reseller-test-udtesting-602716235250.crypto` domain to Unstoppable Domains for a refund.

:::success Congratulations!
You have successfully created the domain action request to return a domain with the Domain Actions API.
:::

<embed src="/snippets/_discord.md" />
