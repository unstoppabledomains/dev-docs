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

<embed src="/snippets/_res-lib-default-provider.md" />

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

<embed src="/snippets/_res-lib-connect-src-warning.md" />

## Error Handling

<embed src="/snippets/_res-lib-error-intro.md" />

```go Golang
package main

import (
    "fmt"
    "github.com/unstoppabledomains/resolution-go"
)

func main() {
    uns, err := resolution.NewUnsBuilder().Build()

    if err != nil {
        switch err.(type) {
        // UnsConfigurationError Error when UNS resolution service is configured incorrectly
        case *resolution.UnsConfigurationError:
            fmt.Println("Uns configuration error:", err.Error())
        default:
            fmt.Println("Unknown error")
        }
    }

    address, err := uns.Addr("domain-with-error.crypto", "ETH")

    if err != nil {
        switch err.(type) {
        // DomainNotRegisteredError Error when domain is missing an owner
        case *resolution.DomainNotRegisteredError:
            fmt.Println("DomainNotRegisteredError:", err.Error())
        // DomainNotConfiguredError Error when domain does not have a resolver set
        case *resolution.DomainNotConfiguredError:
            fmt.Println("DomainNotConfiguredError:", err.Error())
        // DomainNotSupportedError Error when domain is not supported by the naming service
        case *resolution.DomainNotSupportedError:
            fmt.Println("DomainNotSupportedError:", err.Error())
        // MethodIsNotSupportedError Error when naming services does not support called method
        case *resolution.MethodIsNotSupportedError:
            fmt.Println("MethodIsNotSupportedError:", err.Error())
        // InvalidDomainNameReturnedError Error when ERC721 metadata provides returns incorrect domain name
        case *resolution.InvalidDomainNameReturnedError:
            fmt.Println("InvalidDomainNameReturnedError:", err.Error())
        default:
            fmt.Println("Unknown error")
        }
    }
}
```

### Error Codes

| Error Code | Description |
|---|---|
| DomainNotConfiguredError | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| DomainNotRegisteredError | Thrown when you resolve a domain not owned by any address. |
| DomainNotSupportedError | Thrown when you resolve a domain with a TLD not supported by the current resolution instance. |
| InvalidDomainNameReturnedError | Thrown when you resolve an invalid domain address. |
| MethodIsNotSupportedError | Thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `TokenURI()`, `TokenURIMetadata()`, and `Unhash()` methods for the Zilliqa Name Service (ZNS). |
| UnsConfigurationError | Thrown when the UNS resolution service is misconfigured. |

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippets below show how to do this for Java, JavaScript, Swift, and Golang.

```go
uns, _ := resolution.NewUnsBuilder().Build()
  ethAddress, _ := uns.Addr("brad.crypto", "ETH")
  fmt.Println("ETH address for brad.crypto is", ethAddress)
```

<embed src="/snippets/_discord.md" />
