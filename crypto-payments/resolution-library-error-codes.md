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

## Invalid Domain Error

This error is thrown when you attempt to resolve an invalid domain.

## UnspecifiedCurrency Error

This error is thrown when the domain you're attempting to resolve doesn't have any address of the specified currency.

## UnsupportedCurrency or UnknownCurrency Error

This error is thrown when you attempt to resolve a domain with a currency not supported by the current Resolution instance.

## RecordNotFound Error

This error is thrown when you attempt to resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one.

## BlockchainIsDown Error

This error is thrown when you attempt to resolve a domain and its naming service blockchain network is down.

## UnknownError Error

This error is thrown when an unknown error occurs while resolving a domain with the current Resolution instance.

## IncorrectContractAddress Error

This error is thrown when using an incorrect contract address with the current Resolution instance.

## UnspecifiedResolver Error

This error is thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver.

## UnsupportedService Error

This error is thrown when you attempt to use an unsupported naming service with the current Resolution instance.

## UnsupportedMethod or NotImplemented Error

This error is thrown when you attempt to use a method of the current Resolution instance not supported by the naming service you're resolving from. For example, using the `tokenURI()`, `tokenURIMetadata()`, and `getDns()` methods for the Zilliqa Name Service (ZNS).

## IncorrectResolverInterface Error

This error is thrown when the domain resolver of the current Resolution instance is misconfigured.

## MetadataEndpointError Error

This error is thrown when you attempt to resolve a domain with an undefined metadata endpoint.

## ServiceProviderError Error

This error is thrown when you make an invalid request with the current Resolution instance configured provider.

## InvalidTwitterVerification Error

This error is thrown when you attempt to resolve the Twitter handle of a domain with an invalid Twitter signature verification.

## InconsistentDomainArray Error

This error is thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain.
