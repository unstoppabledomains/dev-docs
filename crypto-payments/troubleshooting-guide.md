---
title: Crypto Payments Troubleshooting Guide
description: This page covers frequently encountered problems when integrating the crypto payments feature and potential solutions.
---

# Crypto Payments Troubleshooting Guide

Here are some of the problems you may frequently encounter when integrating crypto payments with Unstoppable Domains and how to fix them.

## Error: UnregisteredDomain or DomainNotRegisteredError

This error occurs when you try to resolve a domain that is not registered and owned by any address on the blockchain. The solution is to provide an existing domain to the resolution library or inform the user to double-check their input.

## Error: RecordNotFound

This error occurs when you try to resolve a domain record that does not exist, for example, resolving the Twitter handle of a domain that doesn't have one. The solution is to inform the user that they have not set the record you request.

## Error: UnspecifiedResolver

This error occurs when the resolution libraries cannot find a resolver contract address for the domain you're trying to resolve. The solution is to inform the user that their domain has no resolver or manually provide one for the library.

## Error: UnsupportedDomain or DomainNotSupportedError

This error occurs when you try to resolve a domain with a TLD not supported by Unstoppable Domains. The solution is to provide a domain with a [supported TLD](../../developer-toolkit/resolution-libraries/libraries-overview.md/#supported-domains-for-resolution-libraries) to the resolution instance or inform the user to double-check their input.

## Asking for help

Please don't be shy; we're here to help. Join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community if you need assistance integrating your app.
