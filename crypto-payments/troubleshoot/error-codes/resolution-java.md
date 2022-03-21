---
title: Error Codes for Resolution-Java
description: This page provides all the error codes existing in the Java Resolution Library.
---

# Error Codes for Resolution-Java

This is a list of all the error codes you might encounter when integrating crypto payments with the [resolution-java](https://github.com/unstoppabledomains/resolution-java) library.

## BlockchainIsDown

This error is thrown when you resolve a domain and its naming service blockchain network is down.

## InconsistentDomainArray

This error is thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain.

## IncorrectContractAddress

This error is thrown when using an incorrect contract address with the current resolution instance.

## InvalidDomain

This error is thrown when you resolve an invalid domain address.

## NotImplemented

This error is thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `getDns()`, `batchOwners()`, `getDomainName()`, `getLocations()`, and `getTokenUri()` methods for the Zilliqa Name Service (ZNS).

## RecordNotFound

This error is thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one.

## UnknownCurrency

This error is thrown when you resolve a domain with a currency not supported by the current resolution instance.

## UnknownError

This error is thrown when an unknown error occurs while resolving a domain with the current resolution instance.

## UnregisteredDomain

This error is thrown when you resolve a domain not owned by any address.

## UnspecifiedResolver

This error is thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver.

## UnsupportedCurrency

This error is thrown when you resolve a domain with a currency not supported by the current resolution instance.

## UnsupportedDomain

This error is thrown when you resolve a domain with a TLD not supported by the current resolution instance.

## Asking for help

Please don't be shy; we're here to help. Join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community if you need assistance integrating your app.
