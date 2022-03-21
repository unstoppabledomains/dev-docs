---
title: Java Resolution Library
description: This page details basic configuration and usage of the Java resolution library.
---

# Java Resolution Library

This page details basic configuration and usage of the [Java resolution library](https://github.com/unstoppabledomains/resolution-java).

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

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippets below show how to do this for Java, JavaScript, Swift, and Golang.

```java
String record = resolution.getRecord("ryan.crypto", "custom.record.value");
assertEquals("Example custom record value", record);
```
