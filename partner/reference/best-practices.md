---
title: Best Practices for Integrating Partner API | Unstoppable Domains Developer Portal
description: This page covers best practices to follow while integrating the Partner API.
---

# Best Practices for Integrating Partner API

Here are best practices to ensure the proper integration of the Unstoppable Domains Partner API into your applications:

## Simplify Your Domain Search Fields With the Domains Suggestions Endpoint

Instead of making API calls to both the [Domain Name Availability](/partner/partner-integration-guides/domain-name-availability.md) and [Get Domains Suggestions](/partner/partner-integration-guides/get-domains-suggestions.md) endpoints to check the availability of a domain name and generate domain suggestions for a domain search field, you can make a single request to the `Get Domains Suggestions` endpoint with the requested domain name as a `search` parameter. If the domain name is available, it will be at the top of the list, along with other suggestions.

<figure class="half-inline-block">

![domain suggestions search demo](/images/domain-suggestions-search-demo.png)

<figcaption>domain suggestions search demo</figcaption>
</figure>

<figure class="half-inline-block">

![domain suggestions API response](/images/domain-suggestions-search-api.png)

<figcaption>domain suggestions API response</figcaption>
</figure>

## Utilize Free Domains as an Incentive To Complete KYC

Since distributing Free Domains **requires** strict anti-abuse measures, such as KYC, we recommend claiming a free domain as an incentive to complete KYC within your application.

## Only Pre-fill Crypto Records if Your App Is a Wallet

Unstoppable Domains Partner API can pre-fill crypto payment addresses for the user during the minting process, which adds complexity to the implementation. Therefore, we only recommend doing this if your application is a wallet since wallets contain the addresses of various cryptos for the user.

<embed src="/snippets/_discord.md" />
