---
title: Resolution-Java | Unstoppable Domains Developer Portal
description: This page details basic configuration and usage of the resolution-java library.
---

# Resolution-Java

This page details basic installation, configuration, and usage of the [resolution-java library](https://github.com/unstoppabledomains/resolution-java).

## Installation

Resolution Java can be installed with using the [JitPack](https://jitpack.io/#unstoppabledomains/resolution-java) package repository.

<embed src="/snippets/_libraries-provider-config.md" />

<embed src="/snippets/_res-lib-default-provider.md" />

```java
import com.unstoppabledomains.resolution.Resolution;

String ethProviderURL = ALCHEMY_ETHEREUM_API;
String polygonProviderURL = ALCHEMY_POLYGON_API;

DomainResolution resolution = Resolution.builder()
                .unsProviderUrl(UNSLocation.Layer1, ethProviderURL)
                .unsProviderUrl(UNSLocation.Layer2, polygonProviderURL)
                .build();
```

<embed src="/snippets/_res-lib-connect-src-warning.md" />

## Error Handling

<embed src="/snippets/_res-lib-error-intro.md" />

```java
import com.unstoppabledomains.resolution.Resolution;
import com.unstoppabledomains.exceptions.ns.NamingServiceException;
import com.unstoppabledomains.exceptions.ns.NSExceptionCode;

DomainResolution resolution = new Resolution();
try {
    String receiverETHAddress = resolution.getAddress("domain-with-error.crypto", "ETH");
} catch (NamingServiceException exception) {
   if (exception.getCode() == NSExceptionCode.UnregisteredDomain) {
        // Domain is not registered
   }
   if (exception.getCode() == NSExceptionCode.RecordNotFound) {
        // Crypto record is not found (or empty)
   }
   if (exception.getCode() == NSExceptionCode.UnspecifiedResolver) {
        // Domain is not configured (empty resolver)
   }
   if (exception.getCode() == NSExceptionCode.UnsupportedDomain) {
        // Domain is not supported
   }
}
```

### Error Codes

| Error Code | Description |
|---|---|
| BlockchainIsDown | Thrown when you resolve a domain and its naming service blockchain network is down. |
| InconsistentDomainArray | Thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain. |
| IncorrectAddress | Thrown when you attempt to retrieve the reverse record of an incorrect wallet address. |
| IncorrectContractAddress | Thrown when using an incorrect contract address with the current resolution instance. |
| InvalidDomain | Thrown when you resolve an invalid domain address. |
| NotImplemented | Thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `getDns()`, `batchOwners()`, `getDomainName()`, `getLocations()`, and `getTokenUri()` methods for the Zilliqa Name Service (ZNS). |
| RecordNotFound | Thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one. |
| ReverseResolutionNotSpecified | Thrown when reverse resolution is not configured for an address. |
| UnknownCurrency | Thrown when you resolve a domain with a currency not supported by the current resolution instance. |
| UnknownError | Thrown when an unknown error occurs while resolving a domain with the current resolution instance. |
| UnregisteredDomain | Thrown when you resolve a domain not owned by any address. |
| UnspecifiedResolver | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| UnsupportedCurrency | Thrown when you resolve a domain with a currency not supported by the current resolution instance. |
| UnsupportedDomain | Thrown when you resolve a domain with an ending not supported by the current resolution instance. |


## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippet below show how to do this in Java.

```java
String record = resolution.getRecord("ryan.crypto", "custom.record.value");
assertEquals("Example custom record value", record);
```

<embed src="/snippets/_discord.md" />
