---
title: Error Codes for Resolution Libraries
description: This page provides error codes when troubleshooting the Resolution Libraries.
---

# Resolution Libraries Error Codes

Learn about the Resolution Libraries error codes you might encounter when troubleshooting your integration.

## UnregisteredDomain Error

This error is thrown when you attempt to resolve a domain not owned by any address.

## UnsupportedDomain Error

This error is thrown when you attempt to resolve a domain with a TLD not supported by the current Resolution instance.

## UnspecifiedCurrency Error

This error is thrown when the domain you're attempting to resolve doesn't have any address of the specified currency.

## UnsupportedCurrency Error

This error is thrown when you attempt to resolve a domain with a currency not supported by the current Resolution instance.

## RecordNotFound Error

This error is thrown when you attempt to resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one.

## UnspecifiedResolver Error

This error is thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver.

## UnsupportedService Error

This error is thrown when you attempt to use an unsupported naming service with the Resolution Library.

## UnsupportedMethod Error

This error is thrown when you attempt to use a Resolution Library method not supported by the naming service you're using to resolve. For example, using the `tokenURI()`, `tokenURIMetadata()`, and `unhash()` methods for the Zilliqa Name Service (ZNS).

## IncorrectResolverInterface Error

This error is thrown when the domain resolver of the current Resolution instance is misconfigured.

## MetadataEndpointError Error

This error is thrown when you attempt to resolve a domain with an undefined metadata endpoint.

## ServiceProviderError Error

This error is thrown when you make an invalid request with the Resolution Library configured provider.

## InvalidTwitterVerification Error

This error is thrown when you attempt to resolve the Twitter handle of a domain with an invalid Twitter signature verification.

## InconsistentDomainArray Error

This error is thrown when you attempt to retrieve the address of multiple domain registry contracts that have different naming services.
