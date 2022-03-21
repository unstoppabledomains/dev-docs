---
title: Error Codes for Resolution-Swift
description: This page provides all the error codes existing in the Swift Resolution Library.
---

# Error Codes for Resolution-Swift

This is a list of all the error codes you might encounter when integrating crypto payments with the [resolution-swift](https://github.com/unstoppabledomains/resolution-swift) library.

## contractNotInitialized

This error is thrown when the proxy reader of the current resolution instance has not been initialized.

## inconsistentDomainArray

This error is thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain.

## invalidDomainName

This error is thrown when you resolve an invalid domain address.

## methodNotSupported

This error is thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `batchOwners()`, `getTokenUri()`, `locations()`, and `getDomainName()` methods for the Zilliqa Name Service (ZNS).

## proxyReaderNonInitialized

This error is thrown when the registry address of the current resolution instance has not been initialized.

## recordNotFound

This error is thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one.

## recordNotSupported

This error is thrown when you resolve an unsupported domain record.

## registryAddressIsNotProvided

This error is thrown when using an incorrect contract address with the current resolution instance.

## unregisteredDomain

This error is thrown when you resolve a domain not owned by any address.

## unknownError

This error is thrown when an unknown error occurs while resolving a domain with the current resolution instance.

## unspecifiedResolver

This error is thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver.

## unsupportedDomain

This error is thrown when you resolve a domain with a TLD not supported by the current resolution instance.

## unsupportedServiceName

This error is thrown when using an unsupported naming service with the current resolution instance.

## Asking for help

Please don't be shy; we're here to help. Join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community if you need assistance integrating your app.
