---
title: Error Codes for Resolution
description: This page provides all the error codes existing in the JavaScript Resolution Library.
---

# Error Codes for Resolution

This is a list of all the error codes you might encounter when using the [resolution](https://github.com/unstoppabledomains/resolution) library.

| Error Code | Description |
|---|---|
| InconsistentDomainArray | Thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain. |
| IncorrectResolverInterface | Thrown when the domain resolver of the current resolution instance is misconfigured. |
| InvalidDomainAddress | Thrown when you resolve an invalid domain address. |
| InvalidTwitterVerification | Thrown when you resolve the Twitter handle of a domain with an invalid Twitter signature verification. |
| MetadataEndpointError | Thrown when you resolve a domain with an undefined metadata endpoint. |
| RecordNotFound | Thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one. |
| ServiceProviderError | Thrown when you make an invalid request with the current resolution instance configured provider. |
| UnregisteredDomain | Thrown when you resolve a domain not owned by any address. |
| UnspecifiedCurrency | Thrown when the domain you're resolving doesn't have any address of the specified currency. |
| UnspecifiedResolver | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| UnsupportedCurrency | Thrown when you resolve a domain with a currency not supported by the current resolution instance. |
| UnsupportedDomain | Thrown when you resolve a domain with a TLD not supported by the current resolution instance. |
| UnsupportedService | Thrown when using an unsupported naming service with the current resolution instance. |
| UnsupportedMethod | Thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `twitter()`, `reverse()`, `getDomainFromTokenId()`, `locations()`, and `getTokenuri()` methods for the Zilliqa Name Service (ZNS). |

<embed src="/snippets/_discord.md" />
