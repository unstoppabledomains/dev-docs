---
title: Resolution-Go
description: This page details basic configuration and usage of the resolution-go library.
---

# Resolution-Go

This page details basic configuration and usage of the [resolution-go library](https://github.com/unstoppabledomains/resolution-go).

## Configuration

Resolution libraries require a connection to the Ethereum network to resolve .crypto and .eth domains. To initialize the library, you need to specify an Ethereum node service provider. Once the instance is created you can begin resolving domains. Below are examples of how to initialize the library with different providers.

### Provider URL

Each of the resolution libraries supports an Ethereum provider url for configuration. You can obtain a provider url from a service like Alchemy where obtaining an API key is free and only requires creating an account.

To choose an alternative Ethereum provider see [Nodes as a Service guide.](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/)

:::attention info

Unstoppable libraries use Infura as a provider by default without restrictions and rate limits for UNS resolution. Default configuration can be considered production-ready.

:::

```golang
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

:::warning

Make sure to allow [mainnet.infura.io](http://mainnet.infura.io) and [polygon-mainnet.infura.io](http://polygon-mainnet.infura.io) or simply "https:/\/*.[infura.io](http://infura.io)" (if using the default configuration) as a connect-src in your Content Security Policy to allow these requests through.

:::

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippets below show how to do this for Java, JavaScript, Swift, and Golang.

```go
uns, _ := resolution.NewUnsBuilder().Build()
  ethAddress, _ := uns.Addr("brad.crypto", "ETH")
  fmt.Println("ETH address for brad.crypto is", ethAddress)
```
