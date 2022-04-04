---
title: Crypto Payments Troubleshooting Guide
description: This page covers frequently encountered problems when integrating the crypto payments feature and potential solutions.
---

# Crypto Payments Troubleshooting Guide

Here are some of the problems you may frequently encounter when integrating crypto payments with Unstoppable Domains and how to fix them.

## UnregisteredDomain or DomainNotRegisteredError

This error occurs when you try to resolve a domain that is not registered and owned by any address on the blockchain. The solution is to provide an existing domain to the resolution library or inform the user to double-check their input.

<figure>

![unregistered domain error](/images/unregistered-domain-error.png '#width=50%')

<figcaption>unregistered domain error</figcaption>
</figure>

## RecordNotFound Error

This error occurs when you try to resolve a domain record that does not exist, for example, resolving the Twitter handle of a domain that doesn't have one. The solution is to inform the user that they have not set the record you request.

<figure>

![record not found error](/images/record-not-found-error.png '#width=50%')

<figcaption>record not error</figcaption>
</figure>

## UnspecifiedResolver Error

This error occurs when the resolution libraries cannot find a resolver contract address for the domain you're trying to resolve. The solution is to inform the user that their domain has no resolver or manually provide one for the library.

<figure>

![unspecified resolver error](/images/unspecified-resolver-error.png '#width=50%')

<figcaption>unspecified resolver error</figcaption>
</figure>

## UnsupportedDomain or DomainNotSupportedError

This error occurs when you try to resolve a domain with a TLD not supported by Unstoppable Domains. The solution is to provide a domain with a [supported TLD](../../developer-toolkit/resolution-libraries/libraries-overview/#supported-domains-for-resolution-libraries) to the resolution instance or inform the user to double-check their input.

<figure>

![unsupported domain error](/images/unsupported-domain-error.png '#width=50%')

<figcaption>unsupported domain error</figcaption>
</figure>

## InvalidDomain Error

This error can pop up in the following ways depending on the resolution library: `InvalidDomain`, `InvalidDomainAddress`, `invalidDomainName`, and `InvalidDomainNameReturnedError`. It occurs when you try to resolve a domain that follows an invalid format, for example, resolving a domain name with a missing TLD or does not follow standard domain naming conventions.

<figure>

![invalid domain error](/images/invalid-domain-error.png '#width=50%')

<figcaption>invalid domain error</figcaption>
</figure>

<embed src="/snippets/_discord.md" />
