---
description: This page details how to configure the libraries for domain resolution.
---

# Library Configuration

Resolution libraries require a connection to the Ethereum network to resolve .crypto and .eth domains. To initialize the library, you need to specify an Ethereum node service provider. Once the instance is created you can begin resolving domains. Below are examples of how to initialize the library with different providers.

Each of the resolution libraries supports an Ethereum provider url for configuration. You can obtain a provider url from a service like Alchemy where obtaining an API key is free and only requires creating an account.

To choose an alternative Ethereum provider see [Nodes as a Service guide.](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/)

{% hint style="info" %}
Unstoppable libraries use Infura provider by default without restrictions and rate limits for UNS resolution. Default configuration can be considered as production-ready.
{% endhint %}

{% hint style="warning" %}
Make sure to allow [mainnet.infura.io](http://mainnet.infura.io) and [polygon-mainnet.infura.io](http://polygon-mainnet.infura.io) or simply “https://\*.[infura.io](http://infura.io)” (if using the default configuration) as a connect-src in your Content Security Policy to allow these requests through.
{% endhint %}

* [JavaScript Resolution library](library-configuration.md#javascript-resolution-library)&#x20;
* [Java Resolution library](library-configuration.md#java-resolution-library)
* [Swift Resolution library](library-configuration.md#swift-resolution-library)
* [Golang Resolution library](https://github.com/unstoppabledomains/resolution-go)

## JavaScript Resolution library

Configuration for the [Javascript resolution library](https://github.com/unstoppabledomains/resolution)

### Provider URL

```javascript
import Resolution from "@unstoppabledomains/resolution";

const infuraApiKey = INFURA_PROJECT_ID;

const infuraProviderUrl = `https://mainnet.infura.io/v3/${infuraApiKey}`;
const polygonProviderUrl = `https://polygon-mainnet.infura.io/v3/${infuraApiKey}`;

const resolution = new Resolution({
    sourceConfig: {
      uns: {
        locations: {
          Layer1: {url: infuraProviderUrl, network: 'mainnet'},
          Layer2: {
            url: poligonProviderUrl,
            network: 'polygon-mainnet',
          },
        },
      },
      ens: {url: infuraProviderUrl, network: 'mainnet')
    },
  });


const resolution = Resolution.infura(infuraApiKey);
```

### Web3 provider

Connect a web3 provider. You may already have one available in your application from wallets like Metamask and WalletConnect.

```javascript
import Resolution from "@unstoppabledomains/resolution";

// if web3rovider is attached to window
const web3Provider = window.ethereum;

// if web3Provider.version - 0.x
const resolution = Resolution.fromWeb3Version0Provider(web3Provider);
// or
// if web3Provider.version - 1.x
const resolution = Resolution.fromWeb3Version1Provider(web3Provider);
```

### Ethers provider

Connect a provider from [ethers.js](https://www.npmjs.com/package/ethers)

```javascript
import Resolution from "@unstoppabledomains/resolution";

const resolution = Resolution.fromEthersProvider(ethersProvider);
```

## Java Resolution library

Configuration for the [Java resolution library](https://github.com/unstoppabledomains/resolution-java)

### Provider URL

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

## Swift Resolution library

Configuration for the [Swift resolution library](https://github.com/unstoppabledomains/resolution-swift)

### Provider URL

```swift
import UnstoppableDomainsResolution

let infuraApiKey = INFURA_PROJECT_ID

guard let resolution = try? Resolution(
    configs: Configurations(
        uns: UnsLocations(
            layer1: NamingServiceConfig(
                        providerUrl: "https://mainnet.infura.io/v3/" + infuraApiKey,
                        network: "mainnet"),
            layer2: NamingServiceConfig(
                        providerUrl: "https://polygon-mainnet.infura.io/v3/" + infuraApiKey,
                        network: "polygon-mainnet")
        )
    )
) else {
  print ("Init of Resolution instance with custom parameters failed...")
  return
}
```

## Golang Resolution Library

Configuration for the [Golang resolution library](https://github.com/unstoppabledomains/resolution-go)

### Provider URL

```swift
import (
    "github.com/ethereum/go-ethereum/ethclient"
	"github.com/unstoppabledomains/resolution-go/v2"
)

var infuraApiKey = INFURA_PROJECT_ID
var ethereumUrl = "https://mainnet.infura.io/v3/" + infuraApiKey
var ethereumL2Url = "https://polygon-mumbai.infura.io/v3/" + infuraApiKey

var unsBuilder := resolution.NewUnsBuilder()
var backend, _ := ethclient.Dial(ethereumUrl)
var backendL2, _ := ethclient.Dial(ethereumL2Url)

unsBuilder.SetContractBackend(backend)
unsBuilder.SetL2ContractBackend(backendL2)

var unsResolution, _ = unsBuilder.Build()
var znsResolution, _ = resolution.NewZnsBuilder().Build()
```
