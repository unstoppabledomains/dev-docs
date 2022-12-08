---
title: Deposit or Withdraw Action Guide | Unstoppable Domains Developer Portal
description: This guide shows how to create a domain action request to bridge domains between Ethereum and Polygon using the Domain Actions API.
showNextButton: false
---

# Deposit or Withdraw Action Guide

The Domain Actions API offers the functionality to generate a list of transactions that needs to be performed to **bridge domains from Ethereum to Polygon and vice versa** without having to form them on the client.

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

## Step 3: Prepare Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 4: Use the Create Domain Action Request Endpoint

<embed src="/snippets/_domain-actions-endpoint-usage.md" />

## Deposit Example

Here is an example of a request that you can use to create a domain action request to bridge a domain from Ethereum to Polygon with the following parameters:

| Parameter | Value |
| - | - |
| Domain Action | Deposit |
| Domain | reseller-test-udtesting-052523593694.crypto |
| Reset Records | Yes |
| Remove Reverse Resolution | Yes |
| Gas Compensation Policy | CompensateFree |

```bash Request
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}' \
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

```json Response
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

## Withdraw Example

Here is an example of a request that you can use to create a domain action request to bridge a domain from Polygon to Ethereum with the following parameters:

| Parameter | Value |
| - | - |
| Domain Action | Withdraw |
| Domain | reseller-test-udtesting-602716235250.crypto |
| Reset Records | Yes |
| Remove Reverse Resolution | Yes |
| Gas Compensation Policy | CompensateFree |

```bash Request
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "action": "Withdraw",
    "parameters": {
        "resetRecords": true,
        "resetReverse": true
    },
    "domain": "reseller-test-udtesting-602716235250.crypto",
    "gasCompensationPolicy": "CompensateFree"
}'
```

```json Response
{
    "id": 277718,
    "action": "Withdraw",
    "status": "Draft",
    "domain": {
        "id": 165454501,
        "name": "reseller-test-udtesting-602716235250.crypto",
        "ownerAddress": "0x499dd6d875787869670900a2130223d85d4f6aa7",
        "resolver": "0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f",
        "resolution": {
            "crypto.ETH.address": "0x499dd6d875787869670900a2130223d85d4f6aa7",
            "crypto.MATIC.version.ERC20.address": "0x499dd6d875787869670900a2130223d85d4f6aa7",
            "crypto.MATIC.version.MATIC.address": "0x499dd6d875787869670900a2130223d85d4f6aa7"
        },
        "blockchain": "MATIC",
        "projectedBlockchain": "MATIC",
        "registryAddress": "0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f",
        "networkId": 137,
        "freeToClaim": true,
        "node": "0xb2c3ea44b9e0d14f5c6c783bb59cf15a476279dff6fdb7d17d17ea2b6e775b39"
    },
    "txs": [
        {
            "id": 3381657,
            "blockchain": "MATIC",
            "hash": null,
            "from": "0x499dd6d875787869670900a2130223d85d4f6aa7",
            "status": "Draft",
            "operation": "WithdrawToEthereum",
            "failReason": null,
            "type": "Meta",
            "signatureStatus": "Required",
            "messageToSign": "0xd251a40ed8275b401505fd7681a7d38b746ea8c2605481fbb5f50ec37b4dcfba"
        },
        {
            "id": 3381658,
            "type": "System",
            "blockchain": "ETH",
            "hash": null,
            "status": "Draft",
            "signatureStatus": "NotRequired",
            "operation": "TrackPolygonCheckpoint",
            "failReason": null
        },
        {
            "id": 3381659,
            "blockchain": "ETH",
            "status": "Draft",
            "operation": "MintOnWithdrawal",
            "hash": null,
            "failReason": null,
            "type": "Regular",
            "signatureStatus": "WillBeRequired"
        }
    ],
    "paymentInfo": null
}
```

The `id` field in the API response is the domain action ID and the `txs` field contains the list of transactions that needs to be performed to bridge the `reseller-test-udtesting-602716235250.crypto` domain from Polygon to Ethereum.

:::success Congratulations!
You have successfully created the domain action request to bridge domains between Ethereum and Polygon with the Domain Actions API. Now that the domain action is created, you can [sign the transaction](overview.md#step-2-sign-the-transaction).
:::

<embed src="/snippets/_discord.md" />

<div class="custom-next-to">

[Next to **Sign the Transaction**](overview.md#step-2-sign-the-transaction)

</div>
