---
title: Best Practices for Crypto Payments Integration
description: This page covers best practices to follow while integrating crypto payments.
---

# Best Practices for Crypto Payments Integration

<embed src="/snippets/_new-tld-warning.md" />

Here are best practices to ensure the proper integration of the Unstoppable Domains crypto payments features into your applications:

## 1. Display Resolved Addresses Near Domain Names

Always display the resolved crypto address near the domain name for additional security. Doing this helps the user of your application to detect and avoid Man-in-the-middle (MITM) attacks aimed to replace the payment address with the attacker's own.

![preview of resolved address near domain name](/images/successful-domain-resolving.png '#display=block;margin-left=auto;margin-right=auto;width=50%;')

## 2. Don't Overwrite the Input Field With Resolved Addresses

For the best user experience of your application, don't overwrite the domain input field with cryptocurrency addresses after resolving the domain. Doing this allows them to quickly fix typos if they make any without typing the domain name again because an address has replaced it.

## 3. Resolve Domains With the Provided Currency

When you don't find a currency address record for a domain, please do not make assumptions about the currency code and try others. Instead, inform the user that they have not set an address for the requested currency.

## 4. Handle Errors According to Their Type

When you encounter errors using any resolution method (library, service API, CLI), handle them according to the error type rather than generically handling them or passing them silently. Please see the [Resolution Library Error Handling](../../developer-toolkit/resolution-libraries/library-error-handling/) guide for information.

## 5. Validate the Addresses Resolved From Domains

Always validate the addresses you resolve from domains using the resolution methods (library, service API, CLI) because the user has complete control over the domain and can set invalid values for its records.

<embed src="/snippets/_discord.md" />
