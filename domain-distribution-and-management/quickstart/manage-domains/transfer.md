---
title: Transfer Domains Guide | Unstoppable Domains Developer Portal
description: This guide shows how to create a domain action request to transfer domains using the Domain Actions API.
redirectFrom:
  - /partner/domain-actions-guides/transfer-action/
showNextButton: false
---

# Transfer Domains

The Domain Actions API offers the functionality to generate a list of transactions that needs to be performed to **transfer a domain name** without having to form them on the client.

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Request Body

When making a domain action request, the body must contain information about your domain action in JSON format with the following structure:

```javascript
{
    "action": "Transfer",
    "parameters": {
        "to": string, // address to receive the domain
        "resetRecords": boolean // whether to reset the domain records
    },
    "domain": string, // domain name you are transferring
    "gasCompensationPolicy": string // gas compensation policy
}
```

- `action`: (string) The domain action you want to perform. To transfer domains, the value should be `"Transfer"`.
- `parameters`: A key-value dictionary with additional information about the action:
  - `to`: (string) The wallet address where the domain name should be transferred to.
  - `resetRecords`: (boolean) Setting this value to `true` will reset the domain's records before transferring, while `false` will keep the records after the transfer.
- `domain`: (string) The domain name you want to transfer.
- `gasCompensationPolicy`: (string) The [gas compensation policy](./overview.md#gas-compensation-policies) that should be used for the domain action.

## Step 3: Prepare Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 4: Use the Create Domain Action Request Endpoint

<embed src="/snippets/_domain-actions-endpoint-usage.md" />

## Example

Here is an example of a request that you can use to create a domain action request to transfer a domain with the following parameters:

| Parameter               | Value                                       |
| ----------------------- | ------------------------------------------- |
| Domain Action           | Transfer                                    |
| Domain                  | reseller-test-udtesting-602716235250.crypto |
| Domain Receiver         | 0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19  |
| Reset Records           | Yes                                         |
| Gas Compensation Policy | CompensateFree                              |

```bash Request
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "action": "Transfer",
    "parameters": {
        "to": "0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19",
        "resetRecords": true
    },
    "domain": "reseller-test-udtesting-602716235250.crypto",
    "gasCompensationPolicy": "CompensateFree"
}'
```

```json Response
{
  "id": 6,
  "action": "Transfer",
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
      "id": 102,
      "blockchain": "MATIC",
      "hash": null,
      "from": "0x499dd6d875787869670900a2130223d85d4f6aa7",
      "status": "Draft",
      "operation": "TransferDomain",
      "failReason": null,
      "type": "Meta",
      "signatureStatus": "Required",
      "messageToSign": "0x1b2799c4e60d353a7c2a5d6971790206599dd33b5ec477df817b61710f1b3e1b"
    }
  ],
  "paymentInfo": null
}
```

The `id` field in the API response is the domain action ID and the `txs` field contains the list of transactions that needs to be performed to transfer the `reseller-test-udtesting-602716235250.crypto` domain to `0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19`.

:::success Congratulations!
You have successfully created the domain action request to transfer a domain with the Domain Actions API. Now that the domain action is created, you can [sign the transaction](./overview.md#step-2-sign-the-transaction).
:::

<embed src="/snippets/_discord.md" />

<div class="custom-next-to">

[Next to **Sign the Transaction**](./overview.md#step-2-sign-the-transaction)

</div>
