---
title: Error Codes for Resolution Libraries
description: This page provides error codes when troubleshooting the Resolution Libraries.
---

# Resolution Libraries Error Codes

This is a list of all the error codes you might encounter when troubleshooting your integration with the Resolution Libraries.

:::info
This page contains the error codes of all the Resolution Libraries irrespective of their language, so whenever you see **OR** in an error code name, it represents its implementation in another language.
:::

## BlockchainIsDown

This error is thrown when you resolve a domain and its naming service blockchain network is down.

## ContractNotInitialized

This error is thrown when the proxy reader of the current resolution instance has not been initialized.

## InconsistentDomainArray

This error is thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain.

## IncorrectContractAddress or RegistryAddressIsNotProvided

This error is thrown when using an incorrect contract address with the current resolution instance.

## IncorrectResolverInterface

This error is thrown when the domain resolver of the current resolution instance is misconfigured.

## InvalidDomain or InvalidDomainName or InvalidDomainNameReturnedError

This error is thrown when you resolve an invalid domain.

## InvalidTwitterVerification

This error is thrown when you resolve the Twitter handle of a domain with an invalid Twitter signature verification.

## MetadataEndpointError

This error is thrown when you resolve a domain with an undefined metadata endpoint.

## ProxyReaderNonInitialized

This error is thrown when the registry address of the current resolution instance has not been initialized.

## RecordNotFound

This error is thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one.

## RecordNotSupported

This error is thrown when you resolve an unsupported domain record.

## ServiceProviderError

This error is thrown when you make an invalid request with the current resolution instance configured provider.

## UnknownError

This error is thrown when an unknown error occurs while resolving a domain with the current resolution instance.

## UnregisteredDomain or DomainNotRegisteredError

This error is thrown when you resolve a domain not owned by any address.

## UnsConfigurationError

This error is thrown when the UNS resolution service is misconfigured.

## UnspecifiedCurrency

This error is thrown when the domain you're resolving doesn't have any address of the specified currency.

## UnspecifiedResolver or DomainNotConfiguredError

This error is thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver.

## UnsupportedCurrency or UnknownCurrency

This error is thrown when you resolve a domain with a currency not supported by the current resolution instance.

## UnsupportedDomain or DomainNotSupportedError

This error is thrown when you resolve a domain with a TLD not supported by the current resolution instance.

## UnsupportedMethod or NotImplemented or MethodNotSupported or MethodIsNotSupportedError

This error is thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `tokenURI()`, `tokenURIMetadata()`, and `getDns()` methods for the Zilliqa Name Service (ZNS).

## UnsupportedService or UnsupportedServiceName

This error is thrown when using an unsupported naming service with the current resolution instance.

## Asking for help

Please don't be shy; we're here to help. Join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community if you need assistance integrating your app.
