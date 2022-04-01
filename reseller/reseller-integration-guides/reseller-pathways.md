---
title: Reseller Integration Guides
description: >-
  This page reviews the integration guides for UD's Reseller API feature. This
  feature works for Polygon domains.
---

# Reseller Integration Guides

UD's Reseller API is a versatile feature with several integration pathways available for developers. This page reviews the integration guides and overall features for each installation option.

:::warning Important
Reseller API Integrations will only work on **Polygon L2 network**. See the [Polygon Developer Integration Guide](../../polygon/polygon-migration-guide.md) to get started.
:::

## Step 1: Register As a Reseller

Before beginning the integration process for Unstoppable's Reseller feature, you must register as a reseller and obtain reseller credentials. Please see the [**Register as a Reseller Guide**](../index.md) for more details.

## Step 2: Locate Your Reseller ID

To integrate free domain claiming or paid domain claiming (via Stripe, Coinbase, Redirect URL, etc.) for your customers, you must know your resellerID. This information can be found in your [UD Reseller Dashboard](https://unstoppabledomains.com/resellers).

<figure>

![Location of ResellerID in UD Reseller Dashboard](/images/reseller-id.png '#display=block;margin-left=auto;margin-right=auto;width=80%;')
	
<figcaption style="text-align: center">Location of ResellerID in UD Reseller Dashboard</figcaption>
</figure>

## Step 3: Choose Your Integration Path

There are several ways to integrate with Unstoppable's Reseller feature, which is detailed in the chart below. Resellers are encouraged to integrate more than one pathway.

:::warning
Stripe and Coinbase payment methods are currently unavailable. Resellers will be notified directly when these features have resumed.
:::

| Pathway                    | Short Description                                                                                                    | Integration Guides                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Free domains               | claim free domains for customers following pre-determined "allowed free TLDs" and "allowed free tiers"               | [Claim Free Domains Guide](claim-free-domains.md)       |
| Paid domains: Stripe       | configure Stripe account to process paid domains via credit card, PayPal, and ApplePay                               | [Stripe Payments Guide](stripe-payments.md)             |
| Paid domains: Coinbase     | configure Coinbase to process paid domains via Bitcoin, Litecoin, and other cryptocurrencies                         | [Coinbase Payments Guide](coinbase-payments.md)         |
| Paid domains: Redirect URL | generate a URL to redirect payments to Unstoppable Domains to be processed, does not require native paid domain flow | [Redirect URL Payments Guide](redirect-url-payments.md) |

<embed src="/snippets/_discord.md" />
