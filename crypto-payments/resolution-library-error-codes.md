---
title: Error Codes for Resolution Libraries
description: This page provides error codes when troubleshooting the Resolution Libraries.
---

# Resolution Libraries Error Codes

Learn about the Resolution Libraries error codes you might encounter when troubleshooting your integration.

## UnregisteredDomain

This error is thrown when you resolve a domain not owned by any address.

## UnsupportedDomain

This error is thrown when you resolve a domain with a TLD not supported by the current resolution instance.

## InvalidDomain or InvalidDomainName

This error is thrown when you resolve an invalid domain.

## UnspecifiedCurrency

This error is thrown when the domain you're resolving doesn't have any address of the specified currency.

## UnsupportedCurrency or UnknownCurrency

This error is thrown when you resolve a domain with a currency not supported by the current resolution instance.

## RecordNotSupported

This error is thrown when you resolve an unsupported domain record.

## RecordNotFound

This error is thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one.

## BlockchainIsDown

This error is thrown when you resolve a domain and its naming service blockchain network is down.

## UnknownError

This error is thrown when an unknown error occurs while resolving a domain with the current resolution instance.

## ProxyReaderNonInitialized

This error is thrown when the registry address of the current resolution instance has not been initialized.

## ContractNotInitialized

This error is thrown when the proxy reader of the current resolution instance has not been initialized.

## IncorrectContractAddress or RegistryAddressIsNotProvided

This error is thrown when using an incorrect contract address with the current resolution instance.

## UnspecifiedResolver

This error is thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver.

## UnsupportedService or UnsupportedServiceName

This error is thrown when using an unsupported naming service with the current resolution instance.

## UnsupportedMethod or NotImplemented or MethodNotSupported

This error is thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `tokenURI()`, `tokenURIMetadata()`, and `getDns()` methods for the Zilliqa Name Service (ZNS).

## IncorrectResolverInterface

This error is thrown when the domain resolver of the current resolution instance is misconfigured.

## MetadataEndpointError

This error is thrown when you resolve a domain with an undefined metadata endpoint.

## ServiceProviderError

This error is thrown when you make an invalid request with the current resolution instance configured provider.

## InvalidTwitterVerification

This error is thrown when you resolve the Twitter handle of a domain with an invalid Twitter signature verification.

## InconsistentDomainArray

This error is thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain.
