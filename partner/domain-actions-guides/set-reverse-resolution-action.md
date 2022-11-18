---
title: SetReverseResolution Domain Action Guide | Unstoppable Domains Developer Portal
description: This guide shows how to configure reverse resolution records using the Domains Actions API.
---

# SetReverseResolution Domain Action Guide

The Domains Actions API offers the functionality to generate a list of transactions that needs to be performed to **configure reverse resolution records** without having to form them on the client.

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Request Body

The request body contains information about your order and must be in JSON format for the API. Here’s the structure:

```javascript
{
    "action": "SetReverseResolution",
    "parameters": {
        "remove": boolean // whether to remove reverse resolution records
    },
    "domain": string, // domain name to set reverse resolution records
    "gasCompensationPolicy": string // gas compensation policy
}
```

* `action`: (string) The domain action you want to perform. To configure reverse resolution, the value should be `"SetReverseResolution"`.
* `parameters`: A key-value dictionary with additional information about the action:
  * `remove`: (boolean) Setting this value to `true` will remove reverse resolution records, while `false` will set reverse resolution records.
* `domain`: (string) The domain name you want to set reverse resolution records.
* `gasCompensationPolicy`: (string) The gas compensation policy that should be used for the domain action.

:::info
The `SetReverseResolution` domain action sets the transaction message signer address as a reverse address for the domain by default.
:::

## Step 3: Use the Create Domain Action Request Endpoint

<embed src="/snippets/_domain-actions-endpoint-usage.md" />

## Example

Here is an example request to create the domain action request to configure reverse resolution records with the following parameters:

| Parameter | Value |
| - | - |
| Domain Action | SetReverseResolution |
| Remove Reverse Resolution | No |
| Domain | reseller-test-udtesting-602716235250.crypto |
| Gas Compensation Policy | CompensateFree |

### Request

```bash
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions' \
--header 'Content-Type: application/json' \
--data-raw '{
    "action": "SetReverseResolution",
    "parameters": {
        "remove": false
    },
    "domain": "reseller-test-udtesting-602716235250.crypto",
    "gasCompensationPolicy": "CompensateFree"
}'
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

The `id` field in the API response is the domain action ID and the `txs` field contains the list of transactions that needs to be performed to configure reverse resolution records.

:::success Congratulations!
You have successfully created the domain action request to configure reverse resolution records with the Domain Actions API.
:::

<embed src="/snippets/_discord.md" />
