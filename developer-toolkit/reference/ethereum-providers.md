---
title: Ethereum Providers Usage | Unstoppable Domains Developer Portal
description: This page covers Ethereum providers and shows how to use them with the Resolution Libraries.
---

# Ethereum Providers Usage

This page covers Ethereum providers and shows how to use them with the Resolution Libraries.

## Ethereum Nodes

Ethereum nodes are computers that run the Ethereum client software. They perform various functions such as mining Ethereum, verifying transactions on the blockchain, and maintaining the security and accuracy of the network. There are different types of nodes available:

* `Full Nodes`: These nodes store the entire blockchain data and are involved in the mining and validating of new blocks.
* `Light Nodes`: These nodes do not store the entire blockchain data but instead request it from a full node. This allows low-end devices to participate in the Ethereum network.
* `Archive Nodes`: These nodes store all the data from full nodes and create an archive of historical states. Archive nodes are useful for services such as block explorers, wallet vendors, and on-chain analytics.

## Node Service Providers

Node service providers operate optimized and distributed node infrastructures, providing an interface for users to access the node's functionality and participate in the network. These providers are responsible for maintaining and operating the blockchain node, allowing users to focus on developing their applications or products.

## Using Custom Ethereum Providers

Each of the Resolution Libraries supports using an Ethereum provider URL for configuration. You can obtain this URL from a service like Alchemy, which offers a free API key to users who create an account. If you wish to use an alternative Ethereum provider, see the [Nodes as a Service](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/) guide for more information.

```javascript JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');

const ethereumProviderUrl = ALCHEMY_ETHEREUM_API;
const polygonProviderUrl = ALCHEMY_POLYGON_API;

// custom provider config using the `Resolution` constructor options
const resolution = new Resolution({
    sourceConfig: {
      uns: {
        locations: {
          Layer1: {
            url: ethereumProviderUrl,
            network: 'mainnet'
          },
          Layer2: {
            url: polygonProviderUrl,
            network: 'polygon-mainnet',
          },
        },
      },
    },
  });
```

```java Java
import com.unstoppabledomains.resolution.Resolution;

String ethProviderURL = ALCHEMY_ETHEREUM_API;
String polygonProviderURL = ALCHEMY_POLYGON_API;

DomainResolution resolution = Resolution.builder()
                .unsProviderUrl(UNSLocation.Layer1, ethProviderURL)
                .unsProviderUrl(UNSLocation.Layer2, polygonProviderURL)
                .build();
```

```swift Swift
import UnstoppableDomainsResolution

let resolution = try Resolution(configs: Configurations(
        uns: UnsLocations = UnsLocations(
            layer1: NamingServiceConfig(
                providerUrl: ALCHEMY_ETHEREUM_API,
                network: "mainnet"),
            layer2: NamingServiceConfig(
                providerUrl: ALCHEMY_POLYGON_API,
                network: "polygon-mainnet"),
            zlayer: NamingServiceConfig(
                providerUrl: "https://api.zilliqa.com",
                network: "mainnet")
        )
);
```

```go Golang
import (
  "github.com/ethereum/go-ethereum/ethclient"
  "github.com/unstoppabledomains/resolution-go/v2"
)

var ethereumUrl = ALCHEMY_ETHEREUM_API
var ethereumL2Url = ALCHEMY_POLYGON_API

var unsBuilder := resolution.NewUnsBuilder()
var backend, _ := ethclient.Dial(ethereumUrl)
var backendL2, _ := ethclient.Dial(ethereumL2Url)

unsBuilder.SetContractBackend(backend)
unsBuilder.SetL2ContractBackend(backendL2)

var unsResolution, _ = unsBuilder.Build()
var znsResolution, _ = resolution.NewZnsBuilder().Build()
```

```bash Resolution CLI
resolution --ethereum-provider-url https://eth-mainnet.g.alchemy.com/v2/{API_KEY} -d udtestdev-usdt.crypto
```

## Resources

* [Nodes and Clients](https://ethereum.org/en/developers/docs/nodes-and-clients/)
* [Nodes as a Service](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/)
