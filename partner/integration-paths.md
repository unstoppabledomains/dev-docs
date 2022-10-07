---
title: Partner Integration Guides | Unstoppable Domains Developer Portal
description: This page reviews the integration guides for UD's Partner API feature. This feature works for Polygon domains.
---

# Getting Started with Integrating UD

Unstoppable Domains Partner API is a versatile feature with several integration pathways available for developers. This page reviews the integration guides and overall features for each installation option.

:::warning important
Partner API Integrations will only work on **Polygon L2 network**. See the [Polygon Developer Integration Guide](/polygon/polygon-migration-guide.md) to get started.
:::

## Step 1: Set Up Partner API Access

Before beginning the integration process for Unstoppable's Partner API, you must set up Partner API access and obtain partner credentials. Please see the **[Set Up Partner API Access Guide](index.md)** for more details.

## Step 2: Locate Your Reseller ID

To integrate free or paid domain minting (via Stripe or Redirect URLs) for your customers, you must know your `resellerID`. This information can be found in your [UD Partner Dashboard](https://unstoppabledomains.com/resellers).

## Step 3: Choose Your Integration Path

There are several ways to integrate with Unstoppable's Partner API, detailed in the chart below. Partners are encouraged to integrate more than one pathway.

| Pathway | Description | Integration Guides |
| - | - | - |
| Free domains | mint free domains for customers following pre-determined "allowed free TLDs" and "allowed free tiers" | [Free Domain Minting Guide](partner-integration-guides/mint-free-domains.md) |
| Paid domains: Stripe | configure Stripe account to process paid domains via credit card, PayPal, and ApplePay | [Stripe Payments Guide](partner-integration-guides/stripe-payments.md) |
| Paid domains: Redirect URL | generate a URL to redirect payments to Unstoppable Domains to be processed, does not require native paid domain flow | [Redirect URL Payments Guide](partner-integration-guides/redirect-url-payments.md) |
| Paid domains: Redirect URL With Auto-Configured Crypto Records | generate a URL to redirect payments to Unstoppable Domains to be processed and automatically configure crypto records, does not require native paid domain flow  | [Redirect URL Payments With Auto-Configured Crypto Records Guide](partner-integration-guides/redirect-url-payments-with-records.md) |

:::info
Unstoppable Domains provides a [sandbox environment](set-up-sandbox-for-testing.md) for partners to test their integrations.
:::

## Considerations

The following considerations apply to purchasing domains:

* The domain must contain only alphabets (`A-Z`), numbers (`0-9`), and hyphens (`-`)
* The domain name cannot start with a hyphen
* The domain length must not exceed 253 characters

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
