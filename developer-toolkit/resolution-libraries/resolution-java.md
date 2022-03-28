---
title: Resolution-Java
description: This page details basic configuration and usage of the resolution-java library.
---

# Resolution-Java

This page details basic configuration and usage of the [resolution-java library](https://github.com/unstoppabledomains/resolution-java).

## Configuration

Resolution libraries require a connection to the Ethereum network to resolve .crypto and .eth domains. To initialize the library, you need to specify an Ethereum node service provider. Once the instance is created you can begin resolving domains. Below are examples of how to initialize the library with different providers.

### Provider URL

Each of the resolution libraries supports an Ethereum provider url for configuration. You can obtain a provider url from a service like Alchemy where obtaining an API key is free and only requires creating an account.

To choose an alternative Ethereum provider see [Nodes as a Service guide.](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/)

:::attention info

Unstoppable libraries use Infura as a provider by default without restrictions and rate limits for UNS resolution. Default configuration can be considered production-ready.

:::

```java
import com.unstoppabledomains.resolution.Resolution

String infuraApiKey = INFURA_PROJECT_ID;
String ethProviderURL = "https://mainnet.infura.io/v3/" + infuraApiKey
String polygonProviderURL = "https://polygon-mainnet.infura.io/v3/" + infuraApiKey

DomainResolution resolution = Resolution.builder()
                .unsProviderUrl(UNSLocation.Layer1, ethProviderURL)
                .unsProviderUrl(UNSLocation.Layer1, polygonProviderURL)
                .build();
```

:::warning

Make sure to allow [mainnet.infura.io](http://mainnet.infura.io) and [polygon-mainnet.infura.io](http://polygon-mainnet.infura.io) or simply "https:/\/*.[infura.io](http://infura.io)" (if using the default configuration) as a connect-src in your Content Security Policy to allow these requests through.

:::

## Error Handling

<embed src="/snippets/_resolution-lib-error-intro.md" />

```java Java
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
| IncorrectContractAddress | Thrown when using an incorrect contract address with the current resolution instance. |
| InvalidDomain | Thrown when you resolve an invalid domain address. |
| NotImplemented | Thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `getDns()`, `batchOwners()`, `getDomainName()`, `getLocations()`, and `getTokenUri()` methods for the Zilliqa Name Service (ZNS). |
| RecordNotFound | Thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one. |
| UnknownCurrency | Thrown when you resolve a domain with a currency not supported by the current resolution instance. |
| UnknownError | Thrown when an unknown error occurs while resolving a domain with the current resolution instance. |
| UnregisteredDomain | Thrown when you resolve a domain not owned by any address. |
| UnspecifiedResolver | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| UnsupportedCurrency | Thrown when you resolve a domain with a currency not supported by the current resolution instance. |
| UnsupportedDomain | Thrown when you resolve a domain with a TLD not supported by the current resolution instance. |


## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippets below show how to do this for Java, JavaScript, Swift, and Golang.

```java
String record = resolution.getRecord("ryan.crypto", "custom.record.value");
assertEquals("Example custom record value", record);
```

<embed src="/snippets/_discord.md" />
