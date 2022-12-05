---
title: Bridge Action Guide | Unstoppable Domains Developer Portal
description: This guide shows how to create a domain action request to bridge domains between Ethereum and Polygon using the Domain Actions API.
---

# Bridge Action Guide

The Domain Actions API offers the functionality to generate a list of transactions that needs to be performed to **bridge domains between Ethereum and Polygon** without having to form them on the client.

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Request Body

When making a domain action request, the body must contain information about your domain action in JSON format with the following structure:

```javascript
{
    "action": string, // bridge action. Must be either "Deposit" or "Withdraw"
    "parameters": {
      "resetRecords": boolean, // whether to reset the domain records
      "resetReverse": boolean // whether to remove reverse resolution records
    }
    "domain": string, // domain name you are bridging
    "gasCompensationPolicy": string // gas compensation policy
}
```

* `action`: (string) The domain action you want to perform. To bridge domains from Ethereum to Polygon, the value should be `"Deposit"`. To bridge domains from Polygon to Ethereum, the value should be `"Withdraw"`.
* `parameters`: A key-value dictionary with additional information about the action:
  * `resetRecords`: (boolean) Setting this value to `true` will reset the domain's records before bridging, while `false` will keep the records after the bridging.
  * `resetReverse`: (boolean) Setting this value to `true` will remove reverse resolution records before bridging, while `false` will remove the reverse resolution records after the bridging.
* `domain`: (string) The domain name you want to bridge.
* `gasCompensationPolicy`: (string) The [gas compensation policy](overview.md#gas-compensation-policies) that should be used for the domain action.

## Step 3: Use the Create Domain Action Request Endpoint

<embed src="/snippets/_domain-actions-endpoint-usage.md" />

## Example

Here is an example of a request that you can use to create a domain action request to bridge a domain from Ethereum to Polygon with the following parameters:

| Parameter | Value |
| - | - |
| Domain Action | Deposit |
| Domain | reseller-test-udtesting-052523593694.crypto |
| Reset Records | Yes |
| Remove Reverse Resolution | Yes |
| Gas Compensation Policy | CompensateFree |

### Request

```bash
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions' \
--header 'Content-Type: application/json' \
--data-raw '{
    "action": "Deposit",
    "parameters": {
        "resetRecords": true,
        "resetReverse": true
    },
    "domain": "reseller-test-udtesting-052523593694.crypto",
    "gasCompensationPolicy": "CompensateFree"
}'
```

### Response

```json
{
    "id": 233580,
    "action": "Deposit",
    "status": "Draft",
    "domain": {
        "id": 157676541,
        "name": "reseller-test-udtesting-052523593694.crypto",
        "ownerAddress": "0x499dd6d875787869670900a2130223d85d4f6aa7",
        "resolver": "0xb66dce2da6afaaa98f2013446dbcb0f4b0ab2842",
        "resolution": {
            "crypto.ADA.address": "addr1q844pk75fvnjrnycnc8f37v8stx72uw7ge4ws93ck3vdc96senmu7qeqellettmmgq8t728uxa5kh4l4kkfvpeshdrfs79knld",
            "social.twitter.username": "Marlene12Bob",
            "validation.social.twitter.username": "0x01882395ce631866b76f43535843451444ef4a8ff44db0a9432d5d00658a510512c7519a87c78ba9cad7553e26262ada55c254434a1a3784cd98d06fb4946cfb1b"
        },
        "blockchain": "ETH",
        "projectedBlockchain": "ETH",
        "registryAddress": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe",
        "networkId": 1,
        "freeToClaim": true,
        "node": "0x0ef61568699a847f9994473ba65185dc75906121d3e10cb9deb37bc722ce6334"
    },
    "txs": [
        {
            "id": 3314600,
            "blockchain": "ETH",
            "status": "Draft",
            "operation": "DepositToPolygon",
            "hash": null,
            "failReason": null,
            "type": "Regular",
            "signatureStatus": "Required",
            "to": "0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe",
            "data": "0xb88d4fde000000000000000000000000499dd6d875787869670900a2130223d85d4f6aa7000000000000000000000000049aba7510f45ba5b64ea9e658e342f904db358d0ef61568699a847f9994473ba65185dc75906121d3e10cb9deb37bc722ce6334000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001"
        },
        {
            "id": 3314601,
            "type": "System",
            "blockchain": "MATIC",
            "hash": null,
            "status": "Draft",
            "signatureStatus": "NotRequired",
            "operation": "MintOnDeposit",
            "failReason": null
        }
    ],
    "paymentInfo": null
}
```

The `id` field in the API response is the domain action ID and the `txs` field contains the list of transactions that needs to be performed to bridge the `reseller-test-udtesting-052523593694.crypto` domain from Ethereum to Polygon.

:::success Congratulations!
You have successfully created the domain action request to bridge a domain from Ethereum to Polygon with the Domain Actions API.
:::

<embed src="/snippets/_discord.md" />
