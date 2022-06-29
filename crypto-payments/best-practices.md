---
title: Best Practices for Crypto Payments Integration | UD Developer Portal
description: This page covers best practices to follow while integrating crypto payments.
---

# Best Practices for Crypto Payments Integration

Here are best practices to ensure the proper integration of the Unstoppable Domains crypto payments features into your applications:

## Don't hardcode UD domain endings into your application

Unstoppable Domains periodically releases new domain endings, and our Resolution libraries and APIs will automatically detect and support them. Therefore, do not implement a front end filter into your application (e.g. hard coding domains or placing a regex filter for just .crypto, .nft, etc.). We also provide an [API endpoint to query for supported domain endings](../developer-toolkit/resolution-service/endpoints/get-supported-tlds.md).

## Display Resolved Addresses Near Domain Names

Always display the resolved crypto address near the domain name for additional security. Doing this helps the user of your application to detect and avoid Man-in-the-middle (MITM) attacks aimed to replace the payment address with the attacker's own.

<figure>

![preview of resolved address near domain name](/images/successful-domain-resolving.png '#width=50%')

<figcaption>preview of resolved address near domain name</figcaption>
</figure>

## Don't Overwrite the Input Field With Resolved Addresses

For the best user experience of your application, don't overwrite the domain input field with cryptocurrency addresses after resolving the domain. Doing this allows them to quickly fix typos if they make any without typing the domain name again because an address has replaced it.

## Resolve Domains With the Provided Currency

When you don't find a currency address record for a domain, please do not make assumptions about the currency code and try others. Instead, inform the user that they have not set an address for the requested currency.

## Handle Errors According to Their Type

When you encounter errors using any resolution method (library, service API, CLI), handle them according to the error type rather than generically handling them or passing them silently.

:::info
Please see the [Resolution Libraries](../developer-toolkit/resolution-libraries/libraries-overview.md) docs for language-specific error handling guides and library error codes you might encounter during integration.
:::

## Validate the Addresses Resolved From Domains

Always validate the addresses you resolve from domains using the resolution methods (library, service API, CLI) because the user has complete control over the domain and can set invalid values for its records.

<embed src="/snippets/_discord.md" />
