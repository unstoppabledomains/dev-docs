---
title: Purchase Domains with Stripe | Unstoppable Domains Developer Portal
description: This guide shows how to purchase domains using the Stripe payment processing flow. You can track payout information in your Unstoppable Domains Partner account.
redirectFrom:
  - /partner/partner-integration-guides/stripe-payments/
  - /domain-distribution-and-management/quickstart/purchase-domains-with-stripe/
---

# Purchase Domains with Stripe

Unstoppable Domains supports [Stripe payments](https://stripe.com) to process payments from Partners. Stripe is a payment provider that allows you to accept credit cards, PayPal, and Apple Pay from customers. This is a recommended and secure payment method for partners that mostly use client-side applications.

The diagram below illustrates the general process between a Partner and Unstoppable Domains during the process of buying a domain with Stripe.

<figure>

![Success flow for buying domains with Stripe](/images/stripe-payment-success-flow.png "#width=80%;")

<figcaption>Success flow for buying domains with Stripe</figcaption>
</figure>

## Step 1: Connect Stripe to Unstoppable Domains

Click on the `Connect` button in the Stripe section of your [Sandbox](https://www.ud-sandbox.com/partner-api-dashboard) or [Production](https://unstoppabledomains.com/partner-api-dashboard) Partner account. Unstoppable Domains uses different Stripe API keys for the Sandbox and Production environments.

<figure>

![Stripe connect button](/images/stripe-connect-button.png)

<figcaption>Stripe connect button</figcaption>
</figure>

After clicking the Stripe `CONNECT` button, Stripe will walk you through the business integration form:

<figure>

![Stripe business integrations form to connect your Stripe and UD accounts](/images/10.png "#width=80%;")

<figcaption>Stripe integrations form to connect your Stripe and UD accounts</figcaption>
</figure>

Once your Stripe and Unstoppable Domains accounts have been connected, your Stripe API key will appear directly in your Stripe dashboard.

<figure>

![Stripe connect success](/images/stripe-connect-sucess.png)

<figcaption>Stripe connect success</figcaption>
</figure>

## Step 2: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 3: Prepare Request Body

When making an order, the body must contain information about your domain order in JSON format with the following structure:

```javascript
{
  "payment": {
    "method": "stripe"
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

- `payment`: A key-value dictionary with payment information about the order:
  - `method`: (string) The payment method the API should create. For Stripe payments, the value should be `"stripe"`.
- `domains`: (array) An array with information about the domains you want to purchase:
  - `name`: The domain name you want to purchase. This parameter is required.
  - `ownerAddress`: The wallet address the domain should be minted to. This parameter is required.
  - `email`: The email address the domain should be linked to after purchase. The user can mint the domain from their UD dashboard later. This parameter is optional.
  - `resolution`: A key-value pair of resolution records to configure for the domain after minting. See the [Records Reference](/resolution/guides/records-reference.md) guide for supported key values. This parameter is optional.

## Step 4: Prepare Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 5: Use the Orders Endpoint

<embed src="/snippets/_orders-endpoint-usage.md" />

## Step 6: Retrieve the Stripe Payment Intent ID

Under the hood, Unstoppable Domains uses Stripe's [Payment Intents API](https://stripe.com/docs/payments/payment-intents) to process Stripe payments and generates a `Payment Intent ID` for the partner to complete the payment. The `Buy a Domain or Claim Free Domain` endpoint response follows this format:

```json
{
  "orderNumber": "{ORDER_NUMBER}",
  "total": "{TOTAL_ORDER_PRICE}",
  "payment": {
    "method": "stripe",
    "details": {
      "clientSecret": "{STRIPE_CLIENT_SECRET}",
      "paymentIntentId": "{STRIPE_PAYMENT_INTENT_ID}"
    }
  },
  "items": ["{DOMAINS_TO_PURCHASE}"]
}
```

The value of the `clientSecret` and `paymentIntentId` fields can be used with the Stripe [Payment Intents](https://stripe.com/docs/api/payment_intents) API to complete the payment.

## Example

Here is an example request to purchase a domain with the following details using the Stripe payment method:

| Field Name                | Value                                                                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Domain Name               | partner-test-67687986466871.wallet                                                                                                       |
| Customer Wallet Address   | 0x6EC0DEeD30605Bcd19342f3c30201DB263291589                                                                                               |
| Customer Email            | sandbox-test@unstoppabledomains.com                                                                                                      |
| Predefined Domain Records | {"crypto.ETH.address": "0x6EC0DEeD30605Bcd19342f3c30201DB263291589", "crypto.BTC.address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"} |

```bash Request
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/orders' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payment": {
        "method": "stripe"
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

```json Response
{
  "orderNumber": "78085",
  "total": 500,
  "payment": {
    "method": "stripe",
    "details": {
      "clientSecret": "pi_3LbAAG8POyZCUJh0h2YXvwg_secret_nktbz6kcVk8U1X5UJI36BA6c",
      "paymentIntentId": "pi_3LbABAG8POyZcuJhen2YXwwo"
    }
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

Stripe payouts occur daily directly from Stripe and can be tracked within your Partner account by clicking on the `View Dashboard` button, depending on which payouts are being tracked.

:::info
The `View Dashboard` button will only appear after you have successfully connected your Stripe and Unstoppable Domains Partner accounts.
:::

### Stripe Payouts Tab

Clicking the `View Dashboard` button displays the main tab of the payouts screen, which lists all transactions with dates and payment amounts. The image below shows the main view of the Payouts screen:

<figure>

![Main/default view of Stripe Payouts (i.e., payouts tab) ](/images/24.png "#width=80%;")

<figcaption>Main/default view of Stripe Payouts (i.e., payouts tab) </figcaption>
</figure>

### Stripe Accounts Tab

Click the `Account` tab to view Stripe account information or update your Stripe banking information.

<figure>

![View of Stripe Account information (i.e., account tab)](/images/25.png "#width=80%;")

<figcaption>View of Stripe Account information (i.e., account tab)</figcaption>
</figure>

:::success congratulations!
You have successfully purchased a domain using the Stripe payment method.
:::


