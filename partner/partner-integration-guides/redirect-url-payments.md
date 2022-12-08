---
title: Redirect URL Payments Guide | Unstoppable Domains Developer Portal
description: This guide covers configuring the Partner account to mint paid domains using the redirect URL payment processing flow.
---

# Redirect URL Payments Guide

The Redirect URL payment flow is the most straightforward payment process to implement for Partners. You do not have to set up native paid domain flows in your application and can generate a URL to redirect payments to Unstoppable Domains to be processed.

In this case, the Partner acts like an "affiliate" where they redirect their users to the Unstoppable Domains website to purchase domains and receive a commission from the sale.

## Step 1: Retrieve Your UD Referral Code

Before integrating Redirect URL payments, you must acquire a referral code from Unstoppable Domains, which helps track and reward the traffic Partners bring and share sales revenue. Please email <partnerengineering@unstoppabledomains.com> to request a referral code for your integration.

## Step 2: Search for Available Domain Names (Optional)

Unstoppable Domains provides the [Get Domains Suggestions](get-domains-suggestions.md) and [Domain Name Availability](domain-name-availability.md) endpoints to check for domain names available for purchase.

## Step 3: Redirect Users to the Unstoppable Domains Website

The Unstoppable Domains website accepts the `ref` and `searchTerm` fields as query parameters for processing Redirect URL payments. After preparing your parameter values, construct the payment URL and redirect the user to it in their browser:

| Name | Type | Mandatory | Description |
| - | - | - | - |
| ref | STRING | YES | The Partner's referral code for tracking traffic |
| searchTerm | STRING | NO | The domain name the user wants to purchase |

Sandbox Environment:

```bash
https://ud-sandbox.com/search?ref={UD_REFERRAL_CODE}&searchTerm={DOMAIN_TO_PURCHASE}
```

Production Environment:

```bash
https://unstoppabledomains.com/search?ref={UD_REFERRAL_CODE}&searchTerm={DOMAIN_TO_PURCHASE}
```

## Example

Here is an example payment URL for the `buyadomain.crypto` domain name and `unstoppable` referral code:

```bash
https://ud-sandbox.com/search?searchTerm=buyadomain.crypto&ref=unstoppable
```

Here is an example payment URL that only uses the Partner's referral code:

```bash
https://ud-sandbox.com/search?ref=unstoppable
```

:::success Congratulations!
You just configured your Partner account to process payments using a Redirect URL.
:::

<embed src="/snippets/_discord.md" />
