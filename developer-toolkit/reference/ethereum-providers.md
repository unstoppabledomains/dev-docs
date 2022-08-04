---
title: Ethereum Providers Usage | Unstoppable Domains Developer Portal
description: This page covers Ethereum providers and shows how to use them with the Resolution Libraries.
---

# Ethereum Providers Usage

This page covers Ethereum providers and shows how to use them with the Resolution Libraries.

## Ethereum Nodes

An Ethereum node is a computer running the Ethereum client software. They are responsible for mining Ethereum, verifying transactions on the blockchain, and keeping the network secure and the data accurate. There are different types of nodes:

### Full Node

They store the entire blockchain data and participate in mining Ethereum and validating new blocks.

### Light Node

They do not store the entire blockchain data but request it from a full node. Light nodes allow low-end devices to participate in the Ethereum network.

### Archive Node

They store all the data from full nodes and build an archive of historical states. Archive nodes are handy for services like block explorers, wallet vendors, and on-chain analytics.

## Node Service Providers

Node service providers run optimized and distributed node infrastructures, then expose an interface for you to access the functionalities of the node and participate in the network. They bear all the maintenance and operational responsibility of the blockchain node, so you can focus on developing your application or product instead.

## Using Custom Ethereum Providers

Each of the Resolution Libraries supports an Ethereum provider URL for configuration. You can obtain a provider URL from a service like Alchemy, where getting an API key is free and only requires creating an account.

To choose an alternative Ethereum provider see the [Nodes as a Service](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/) guide.

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

```golang Go
import (
  "github.com/ethereum/go-ethereum/ethclient"
	"github.com/unstoppabledomains/resolution-go"
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
resolution --ethereum-provider-url https://eth-mainnet.g.alchemy.com/v2/${secret} -d udtestdev-usdt.crypto
```

## Resources

* [Nodes and Clients](https://ethereum.org/en/developers/docs/nodes-and-clients/)
* [Nodes as a Service](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/)
