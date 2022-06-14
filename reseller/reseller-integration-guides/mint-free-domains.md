---
title: Free Domain Minting Guide | Unstoppable Domains Developer Portal
description: This guide shows how to mint free domains with your Partner account.
---

## Overview

Unstoppable Domains offers free domain minting to Partners based on specified criteria. Authorized Partners can use the following [API endpoints](../reseller-api-endpoints.md): `Get Free Domains Suggestions`, `Reserve Free Domain Name`, and `Claim Free Domain`.

The following diagram shows the general process between the Partner and Unstoppable Domains during the free domain minting process.

<figure>

![Success flow for minting free domains with UD](/images/free-domain-minting-success-flow.png '#width=80%;')

<figcaption>Success flow for minting free domains with UD</figcaption>
</figure>

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Setup Criteria for Free Domains

Partners work with the Unstoppable Domains team to establish the "allowed free TLDs" and "allowed free tiers" criteria for their account.

Then, the "allowed free TLDs" and "allowed free tiers" list is assigned to the Partner's account, and they can only mint a free domain if it matches the tier and has an appropriate domain ending.

The table below shows how the pricing tiers are structured at Unstoppable Domains. Most free domains will be a Tier 7 or Tier 8 domain with a combination of letters and numbers.

<figure>

![Pricing tiers for UD domains](/images/domain-pricing-tiers.png '#width=80%;')

<figcaption>Pricing tiers for UD domains</figcaption>
</figure>

:::info
Domains containing numerals in the name (i.e: tim1, monica95, etc) are discounted by up to 75% of the standard prices, and most free domains fall within this category.
:::

## Step 3: Prepare Your Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 4: Prepare Your Order Security

Unstoppable Domains uses [FingerprintJS](https://fingerprint.com/) to verify free domain orders and catch sophisticated fraudsters. See the [FingerprintJS Docs](https://dev.fingerprintjs.com/docs) for integration guides and how to generate a FingerprintJS ID (`VisitorID`) for your users.

:::info
The Unstoppable Domains Partner API will only accept a `VisitorID` generated within the past 30 seconds and has a confidence score of at least 90%.
:::

## Step 5: Prepare Your Request Body

The request body contains information about your order and must be in JSON format for the API. Here’s the structure:

```javascript
{
  "payment": {
    "method": "free"
  },
  "security": [
    {
      "type": "fingerprintjs",
      "identifier": string // FingerprintJS ID of the user minting the domain
    }
  ],
  "domains": [
    {
      "name": string, // domain name you are minting
      "ownerAddress": string, // wallet address to mint the domain to
      "email": string, // UD email address to link the domain to
      "resolution": object, // predefined records to mint the domain with
      "resellerIdentityKey": string // domain reservation ID
    }
  ]
}
```

* `payment`: A key-value dictionary with payment information about the order:
    * `method`: (string) The payment method the API should create. The value should be "free" for free domains.
* `security`: (array) An array with information about the order security:
    * `type`: The order security method. The value should be "fingerprintjs" for FingerprintJS verification.
    * `identifier`: The FingerprintJS ID (`VisitorID`) of the user minting the domain.
* `domains`: (array) An array with information about the domains you want to purchase:
    * `name`: The domain name you want to purchase. This parameter is required for every order.
    * `ownerAddress`: The wallet address the domain should be minted to. This parameter is optional.
    * `email`: The email address the domain should be linked to after purchase. The user can mint the domain from their UD dashboard later. This parameter is optional.
    * `resolution`: A key-value pair of resolution records to configure for the domain after minting. See the Records Reference guide for supported key values. This parameter is optional and requires the `ownerAddress` parameter to be provided.
    * `resellerIdentityKey`: The domain reservation ID. This parameter is required if you reserved the domain you’re minting.

:::info
You need to provide either the `ownerAddress` or `email` parameter in every order request. You can also provide both parameters in your request.
:::

## Step 6: Use the Orders Endpoint

<embed src="/snippets/_orders-endpoint-usage.md" />

## Free Domain Minting Example

Here is an example request to mint a free domain with the following details:

| Field Name | Value |
| - | - |
| Security Type | FingerprintJS |
| FingerprintJS ID | qwerty12345 |
| Domain Name | partner-test-67687986466875.wallet |
| Customer Wallet Address | 0x6EC0DEeD30605Bcd19342f3c30201DB263291589 |
| Customer Email | sandbox-test@unstoppabledomains.com |
| Predefined Domain Records | {"crypto.ETH.address": "0x6EC0DEeD30605Bcd19342f3c30201DB263291589", "crypto.BTC.address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"} |

### Request

```bash
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{ResellerID}/orders/' \
--header 'Authorization: Bearer {Secret API Token}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "payment": {
    "method": "free"
  },
  "security": [
    {
      "type": "fingerprintjs",
      "identifier": "qwerty12345"
    }
  ],
  "domains": [
    {
      "name": "partner-test-67687986466875.wallet",
      "ownerAddress": "0x6EC0DEeD30605Bcd19342f3c30201DB263291589",
      "email": "sandbox-test@unstoppabledomains.com",
      "resolution": {
          "crypto.ETH.address": "0x6EC0DEeD30605Bcd19342f3c30201DB263291589",
          "crypto.BTC.address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
      }
    }
  ]
}'
```

### Response

```json
{
    "orderNumber": "78023",
    "total": 0,
    "payment": {
        "method": "free"
    },
    "items": [
        {
            "domain": {
                "id": 966210,
                "name": "partner-test-67687986466875.wallet",
                "ownerAddress": null,
                "resolver": null,
                "resolution": {},
                "blockchain": "MATIC",
                "registryAddress": "0x2a93c52e7b6e7054870758e15a1446e769edfb93",
                "networkId": 80001,
                "freeToClaim": true,
                "node": "0xeb55b00b50af99d760b002c6d855532658c332d059dcd69eb167fec5ec97d0fa"
            },
            "mintingTransaction": {
                "id": 44958,
                "type": "MaticTx",
                "operation": "MintDomain",
                "statusGroup": "Pending",
                "hash": null,
                "blockchain": "MATIC",
                "blockExplorerUrl": null
            }
        }
    ]
}
```

## Reserving a Free Domain

You can reserve a free domain and mint it at a later date. Reserved domains become unavailable to be claimed and minted by anyone except the Partner that reserved it.

To reserve a domain, you need to request the Reserve Free Domains endpoint with the following details:

* Your `resellerID`
* The `domainName` to reserve
* A unique identifier for your reservation

### Domain Reservation Example

```
curl --location -g --request POST '/{resellerID}/domains/{domainName}/reserve/' \
--header 'Content-Type: application/json' \
--data-raw '{
  "resellerIdentityKey": "{domainReservationID}"
}'
```

:::info
You can only reserve one domain per `resellerIdentityKey`, and the reservation time is 168 hours (7 days).
:::

## Considerations

The following considerations apply to minting free domains:

* The Reseller ID will be allowed to provide specified domain endings for free.
* If the Reseller ID doesn't have an allowance to provide free domains, then they will not be permitted to mint free domains.
* The domain is available for sale (e.g., it's not restricted, protected, trademarked, claimed, etc.)
* The domain does not have a custom price set.
* It has 8+ characters, at least one letter, and one number.
* If a wallet or email already has a free domain, then a second free domain is not permitted.
* The FingerprintJS ID provided must be generated within the past 30 seconds and have a confidence score of at least 90%.

:::success congratulations!
You have successfully minted a free domain with the Partner API.
:::

<embed src="/snippets/_discord.md" />
