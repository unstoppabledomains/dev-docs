---
title: Redirect URL Payments Guide | Unstoppable Domains Developer Portal
description: This guide covers the process for configuring the Partner account to mint paid domains using the redirect URL payment processing flow.
---

# Redirect URL Payments Guide

The Redirect URL payment flow is the most straightforward payment process to implement for partners. Partners do not have to set up native paid domain flows and can instead generate a URL to redirect payments to Unstoppable Domains to be processed.

In this case, the partner acts like an "affiliate" where they redirect their users to the Unstoppable Domains website to purchase domains and receive a commission from the sale.

## Step 1: Retrieve Your UD Referral Code

Before integrating Redirect URL payments, you must acquire a referral code from Unstoppable Domains, which helps track and reward the traffic partners bring to Unstoppable Domains and share domain sales revenue. Please email <partnerengineering@unstoppabledomains.com> to request a referral code for your integration.

## Step 2: Search for Available Domain Names (Optional)

Unstoppable Domains provides a [Domain Name Availability](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1%7BdomainName%7D/get) endpoint to check if a domain name is available for purchase.

## Step 3: Redirect Users to the Unstoppable Domains Website

The Unstoppable Domains website accepts the `ref` and `searchTerm` fields as query parameters for processing Redirect URL payments.

| Name | Type | Mandatory | Description |
| - | - | - | - |
| ref | STRING | YES | The Partner's referral code for tracking traffic |
| searchTerm | STRING | NO | The domain name the user wants to purchase |

After preparing your parameter values, construct the payment URL and redirect the user to it:

```
https://unstoppabledomains.com/search?ref={{UD_REFERRAL_CODE}}&searchTerm={{DOMAIN_NAME_TO_PURCHASE}}
```

## Redirect URL Payments Example

Here is an example payment URL for the `example12345.nft` domain name and `unstoppable` referral code:

```
https://unstoppabledomains.com/search?searchTerm=example12345.nft&ref=unstoppable
```

:::success Congratulations!
You just configured your Partner account to process payments using a Redirect URL.
:::

<embed src="/snippets/_discord.md" />
