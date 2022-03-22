---
title: Error Codes for Resolution
description: This page provides all the error codes existing in the JavaScript Resolution Library.
---

## Error Codes for Resolution

This is a list of all the error codes you might encounter when integrating crypto payments with the [resolution](https://github.com/unstoppabledomains/resolution) library.

| Error Code | Description |
|---|---|
| InconsistentDomainArray | This error is thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain. |
| IncorrectResolverInterface | This error is thrown when the domain resolver of the current resolution instance is misconfigured. |
| InvalidDomainAddress | This error is thrown when you resolve an invalid domain address. |
| InvalidTwitterVerification | This error is thrown when you resolve the Twitter handle of a domain with an invalid Twitter signature verification. |
| MetadataEndpointError | This error is thrown when you resolve a domain with an undefined metadata endpoint. |
| RecordNotFound | This error is thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one. |
| ServiceProviderError | This error is thrown when you make an invalid request with the current resolution instance configured provider. |
| UnregisteredDomain | TThis error is thrown when you resolve a domain not owned by any address. |
| UnspecifiedCurrency | This error is thrown when the domain you're resolving doesn't have any address of the specified currency. |
| UnspecifiedResolver | This error is thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| UnsupportedCurrency | This error is thrown when you resolve a domain with a currency not supported by the current resolution instance. |
| UnsupportedDomain | This error is thrown when you resolve a domain with a TLD not supported by the current resolution instance. |
| UnsupportedService | This error is thrown when using an unsupported naming service with the current resolution instance. |
| UnsupportedMethod | This error is thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `twitter()`, `reverse()`, `getDomainFromTokenId()`, `locations()`, and `getTokenuri()` methods for the Zilliqa Name Service (ZNS). |

## Asking for help

Please don't be shy; we're here to help. Join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community if you need assistance integrating your app.
