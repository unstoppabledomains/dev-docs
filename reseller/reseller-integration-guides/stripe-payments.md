---
title: Stripe Payments Guide | Unstoppable Domains Developer Portal
description: This guide shows how to purchase domains using the Stripe payment processing flow. You can track payout information in the Unstoppable Domains Partner dashboard.
---

# Stripe Payments Guide

Unstoppable Domains supports [Stripe](https://stripe.com) payments. Stripe is a payment provider that allows you to accept credit cards, PayPal, and Apple Pay from customers. This is a recommended and secure payment method for partners that mostly use client-side applications.

The following diagram shows the general process between Stripe and Unstoppable Domains after a customer buys a domain.

<figure>

![Payment flow for pre-paid domain purchases, such as Stripe](/images/paid-domains-claiming-prepayment.png '#width=80%;')

<figcaption>Payment flow for pre-paid domain purchases, such as Stripe</figcaption>
</figure>

## Step 1: Create a Stripe Account

You need to have a Stripe account before connecting it to your Unstoppable Domains Partner account. If you have not created a Stripe account before now, create one here: <https://dashboard.stripe.com/register>.

## Step 2: Connect Stripe to Unstoppable Domains

Click on the `CONNECT` button in the Stripe section of the [UD Partner dashboard](https://unstoppabledomains.com/resellers). Unstoppable Domains uses different Stripe API keys for live and test orders.

Your Stripe API keys are public keys and they are safe to reveal in your application:

* pk\_test\_\* (reseller-test-\* namespace)
* pk\_live\_\* (all other domains)

<figure>

![Strive Live and Stripe Test payment setup areas](/images/screen-shot-2021-07-12-at-2.04.09-pm.png '#width=80%;')

<figcaption>Strive Live and Stripe Test payment setup areas</figcaption>
</figure>

:::info
The `Stripe Live Connect Button` is how you get paid by Unstoppable Domains when your customers make a purchase; it uses real money and generates real transactions. The `Stripe Test Connect Button` does not involve real money and uses test credentials to integrate.
:::

After clicking the Stripe Live or Stripe Test `CONNECT` button, Stripe will walk you through the integration form:

<figure>

![Stripe integrations form to connect your Stripe and UD accounts](/images/10.png '#width=80%;')

<figcaption>Stripe integrations form to connect your Stripe and UD accounts</figcaption>
</figure>

Once your Stripe and Unstoppable Domains accounts have been connected, your Stripe API key will appear directly in your Stripe dashboard.

## Step 3: Generate a Stripe Payment Token

Stripe generates a payment token for every transaction, which Unstoppable Domains later uses to process the payment. This keeps Unstoppable Domains from needing to store your customer’s sensitive data.

See the [Stripe Tokens](https://stripe.com/docs/api/tokens) and [Payment Integrations](https://stripe.com/docs/payments) guides to learn how to generate a payment token using your Stripe API key. Here’s an example of the Stripe token response:

```json
{
    "id": "tok_1L6Ys1G8PQyZCUJhiFcaDUVy",
    "object": "token",
    "card": {
        "id": "card_1L6Ys1G8PQyZCUJh3Jv2N8xc",
        "object": "card",
        "address_city": null,
        "address_country": null,
        "address_line1": null,
        "address_line1_check": null,
        "address_line2": null,
        "address_state": null,
        "address_zip": null,
        "address_zip_check": null,
        "brand": "Visa",
        "country": "US",
        "cvc_check": "unchecked",
        "dynamic_last4": null,
        "exp_month": 4,
        "exp_year": 2023,
        "fingerprint": "0w14LEeNDGGIdQgB",
        "funding": "credit",
        "last4": "4242",
        "metadata": {},
        "name": null,
        "tokenization_method": null
    },
    "client_ip": null,
    "created": 1654256449,
    "livemode": false,
    "type": "card",
    "used": false
}
```

The payment token is stored in the `id` field. In the example above, the value is `tok_1L6Ys1G8PQyZCUJhiFcaDUVy`.

## Step 4: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 5: Prepare Your Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 6: Prepare Your Request Body

The request body contains information about your order and must be in JSON format for the API. Here’s the structure:

```javascript
{
  "payment": {
    "method": "stripe",
    "properties": {
      "tokenId": string // Stripe payment token
    }
  },
  "domains": [
    {
      "name": string, // domain name you are minting
      "ownerAddress": string, // wallet address to mint the domain to
      "email": string, // UD email address to link the domain to
      "resolution": object // predefined records to mint the domain with
    }
  ]
}
```

* `payment`: A key-value dictionary with payment information about the order:
    * `method`: (string) The payment method the API should create. The value should be "free" for free domains.
    * `properties`: A key-value dictionary with more information about the order payment method:
      * `tokenId`: (string) The Stripe payment token for the order
* `domains`: (array) An array with information about the domains you want to purchase:
    * `name`: The domain name you want to purchase. This parameter is required for every order.
    * `ownerAddress`: The wallet address the domain should be minted to. This parameter is optional.
    * `email`: The email address the domain should be linked to after purchase. The user can mint the domain from their UD dashboard later. This parameter is optional.
    * `resolution`: A key-value pair of resolution records to configure for the domain after minting. See the Records Reference guide for supported key values. This parameter is optional and requires the `ownerAddress` parameter to be provided.

:::info
You need to provide either the `ownerAddress` or `email` parameter in every order request. You can also provide both parameters in your request.
:::

## Step 7: Use the Orders Endpoint

<embed src="/snippets/_orders-endpoint-usage.md" />

## Stripe Payment Example

Here is an example request to purchase a domain with the following details using the Stripe payment method:

| Field Name | Value |
| - | - |
| Stripe Token | tok_1L6Ys1G8PQyZCUJhiFcaDUVy |
| Domain Name | partner-test-67687986466871.wallet |
| Customer Wallet Address | 0x6EC0DEeD30605Bcd19342f3c30201DB263291589 |
| Customer Email | sandbox-test@unstoppabledomains.com |
| Predefined Domain Records | {"crypto.ETH.address": "0x6EC0DEeD30605Bcd19342f3c30201DB263291589", "crypto.BTC.address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"} |

### Request

```bash
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{ResellerID}/orders' \
--header 'Authorization: Bearer {Secret API Token}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payment": {
        "method": "stripe",
        "properties": {
            "tokenId": "tok_1L6Ys1G8PQyZCUJhiFcaDUVy"
        }
    },
    "domains": [
        {
            "name": "partner-test-67687986466871.wallet",
            "email": "sandbox-test@unstoppabledomains.com",
            "ownerAddress": "0x6EC0DEeD30605Bcd19342f3c30201DB263291589",
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
    "orderNumber": "78085",
    "total": 500,
    "payment": {
        "method": "stripe"
    },
    "items": [
        {
            "domain": {
                "id": 971624,
                "name": "partner-test-67687986466871.wallet",
                "ownerAddress": null,
                "resolver": null,
                "resolution": {},
                "blockchain": "MATIC",
                "registryAddress": "0x2a93c52e7b6e7054870758e15a1446e769edfb93",
                "networkId": 80001,
                "freeToClaim": true,
                "node": "0xbf153dc812a038ec41a8f332e20e2b927da06e035592857308745febac1fe855"
            },
            "mintingTransaction": {
                "id": 45081,
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

## Receive Stripe Payouts

Stripe payouts occur daily directly from Stripe and can be tracked within the Partner dashboard by clicking on the `View Test Dashboard` or `View Live Dashboard` button, depending on which payouts are being tracked.

<figure>

![Button selection for tracking Stripe payouts](/images/screen-shot-2021-07-12-at-2.53.26-pm.png '#width=80%;')

<figcaption>Button selection for tracking Stripe payouts</figcaption>
</figure>

:::info
The `View Live Dashboard` and `View Test Dashboard` buttons will only appear after the `Stripe Live` or `Stripe Test` options are successfully connected, linking your Stripe and Unstoppable Domains Partner accounts.
:::

### Stripe Payouts Tab

Clicking either of the `View Dashboard` buttons displays the main tab of the payouts screen, which lists all transactions with dates and payment amounts. The figure below shows the main view of the Payouts screen.

<figure>

![Main/default view of Stripe Payouts (i.e., payouts tab) ](/images/24.png '#width=80%;')

<figcaption>Main/default view of Stripe Payouts (i.e., payouts tab) </figcaption>
</figure>

### Stripe Accounts Tab

Click the `Account` tab to view Stripe account information or update your Stripe banking information.

<figure>

![View of Stripe Account information (i.e., account tab)](/images/25.png '#width=80%;')

<figcaption>View of Stripe Account information (i.e., account tab)</figcaption>
</figure>

:::success congratulations!
You have successfully purchased a domain using the Stripe payment method.
:::

<embed src="/snippets/_discord.md" />
