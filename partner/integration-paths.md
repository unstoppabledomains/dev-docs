---
title: Partner API Integration Paths | Unstoppable Domains Developer Portal
description: This page reviews the integration guides for UD's Partner API feature. This feature works for Polygon domains.
---

# Partner API Integration Paths

Unstoppable Domains Partner API is a versatile feature with several integration pathways available for developers. This page reviews the integration guides and overall features for each installation option.

:::warning important
Partner API Integrations will only work on **Polygon L2 network**. See the [Polygon Developer Integration Guide](/polygon/polygon-migration-guide.md) to get started.
:::

## Step 1: Locate Your Reseller ID

After [setting up access to the Partner API](index.md), you must obtain your `resellerID` from your [Sandbox](https://www.ud-sandbox.com/partner-api-dashboard) or [Production](https://unstoppabledomains.com/partner-api-dashboard) Partner account to integrate our services into your application for your customers.

## Step 2: Add a Domain Search Functionality

Before you integrate free or paid domain minting (via Stripe or Redirect URLs) payment flows, you must implement a domain search functionality into your application. Unstoppable Domains provides a set of endpoints to provide domain suggestions, check the availability of domain names, and reserve free domain names.

| Endpoint | Description | Integration Guides |
| - | - | - |
| Get Domains Suggestions | provides free and paid domain suggestions based on the entered information | [Get Domains Suggestions Guide](partner-integration-guides/get-domains-suggestions.md) |
| Domain Name Availability | checks the availability of a domain name before purchase | [Domain Name Availability Guide](partner-integration-guides/domain-name-availability.md) |
| Multiple Domain Name Availability | checks the availability of multiple domain names before purchase | [Multiple Domain Name Availability Guide](partner-integration-guides/multiple-domain-name-availability.md) |
| Reserve Free Domain Name | reserves a free and available domain name for seven days | [Reserve Free Domain Name Guide](partner-integration-guides/reserve-free-domain-name.md) |

## Step 3: Choose Your Integration Path

There are several ways to integrate with Unstoppable's Partner API, detailed in the chart below. Partners are encouraged to integrate more than one pathway.

| Pathway | Description | Integration Guides |
| - | - | - |
| Free domains | mint free domains for customers following pre-determined "allowed free TLDs" and "allowed free tiers" | [Free Domain Minting Guide](partner-integration-guides/mint-free-domains.md) |
| Paid domains: Stripe | configure Stripe account to process paid domains via credit card, PayPal, and ApplePay | [Stripe Payments Guide](partner-integration-guides/stripe-payments.md) |
| Paid domains: Redirect URL | generate a URL to redirect payments to Unstoppable Domains to be processed, does not require native paid domain flow | [Redirect URL Payments Guide](partner-integration-guides/redirect-url-payments.md) |
| Paid domains: Redirect URL With Auto-Configured Crypto Records | generate a URL to redirect payments to Unstoppable Domains to be processed and automatically configure crypto records, does not require native paid domain flow  | [Redirect URL Payments With Auto-Configured Crypto Records Guide](partner-integration-guides/redirect-url-payments-with-records.md) |

:::info
Unstoppable Domains provides a [Sandbox environment](set-up-sandbox-for-testing.md) for partners to test their integrations.
:::

## Considerations

The following considerations apply to purchasing domains:

* The domain must contain only alphabets (`A-Z`), numbers (`0-9`), and hyphens (`-`)
* The domain name cannot start with a hyphen
* The domain length must not exceed 253 characters

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
