---
title: Error Codes for Resolution-Go
description: This page provides all the error codes existing in the Golang Resolution Library.
---

## Error Codes for Resolution-Go

This is a list of all the error codes you might encounter when using the [resolution-go](https://github.com/unstoppabledomains/resolution-go) library.

| Error Code | Description |
|---|---|
| DomainNotConfiguredError | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| DomainNotRegisteredError | Thrown when you resolve a domain not owned by any address. |
| DomainNotSupportedError | Thrown when you resolve a domain with a TLD not supported by the current resolution instance. |
| InvalidDomainNameReturnedError | Thrown when you resolve an invalid domain address. |
| MethodIsNotSupportedError | Thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `TokenURI()`, `TokenURIMetadata()`, and `Unhash()` methods for the Zilliqa Name Service (ZNS). |
| UnsConfigurationError | Thrown when the UNS resolution service is misconfigured. |

## Asking for help

Please don't be shy; we're here to help. Join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community if you need assistance integrating your app.
