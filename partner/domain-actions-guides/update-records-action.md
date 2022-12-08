---
title: UpdateRecords Domain Action Guide | Unstoppable Domains Developer Portal
description: This guide shows how to create a domain action request to update resolution records using the Domain Actions API.
---

# UpdateRecords Domain Action Guide

The Domain Actions API offers the functionality to generate a list of transactions that needs to be performed to **update resolution records** without having to form them on the client.

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Request Body

When making a domain action request, the body must contain information about your domain action in JSON format with the following structure:

```javascript
{
    "action": "UpdateRecords",
    "parameters": {
        "records": object // resolution records to update
    },
    "domain": string, // domain name you are updating
    "gasCompensationPolicy": string // gas compensation policy
}
```

* `action`: (string) The domain action you want to perform. To update resolution records, the value should be `"UpdateRecords"`.
* `parameters`: A key-value dictionary with additional information about the action:
  * `records`: A key-value pair of resolution records to configure for the domain after minting. See the [Records Reference](/developer-toolkit/reference/records-reference.md) guide for supported key values.
* `domain`: (string) The domain name you want to update it's records.
* `gasCompensationPolicy`: (string) The [gas compensation policy](overview.md#gas-compensation-policies) that should be used for the domain action.

## Step 3: Prepare Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 4: Use the Create Domain Action Request Endpoint

<embed src="/snippets/_domain-actions-endpoint-usage.md" />

## Example

Here is an example of a request that you can use to create a domain action request to update resolution records with the following parameters:

| Parameter | Value |
| - | - |
| Domain Action | UpdateRecords |
| Resolution Records | `{"crypto.ETH.address": "0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19"}` |
| Domain | reseller-test-udtesting-602716235250.crypto |
| Gas Compensation Policy | CompensateFree |

```bash Request
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "action": "UpdateRecords",
    "parameters": {
        "records": {
            "crypto.ETH.address": "0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19"
        }
    },
    "domain": "reseller-test-udtesting-602716235250.crypto",
    "gasCompensationPolicy": "CompensateFree"
}'
```

```json Response
{
    "id": 4,
    "action": "UpdateRecords",
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
            "id": 100,
            "blockchain": "MATIC",
            "hash": null,
            "from": "0x499dd6d875787869670900a2130223d85d4f6aa7",
            "status": "Draft",
            "operation": "ResolverRecordsUpdate",
            "failReason": null,
            "type": "Meta",
            "signatureStatus": "Required",
            "messageToSign": "0x6f360e8a64523c115fa5c343d7e8162bf0dc67a3d8e4d9961344bbcfd9f41ff9"
        }
    ],
    "paymentInfo": null
}
```

The `id` field in the API response is the domain action ID and the `txs` field contains the list of transactions that needs to be performed to update the resolution records for the `reseller-test-udtesting-602716235250.crypto` domain.

:::success Congratulations!
You have successfully created the domain action request to update resolution records with the Domain Actions API.
:::

<embed src="/snippets/_discord.md" />
