---
title: Resolution-Go | Unstoppable Domains Developer Portal
description: This page details basic configuration and usage of the resolution-go library.
---

# Resolution-Go

This page details basic installation, configuration, and usage of the [resolution-go library](https://github.com/unstoppabledomains/resolution-go).

## Installation

Resolution Go can be installed with the `go get` command.

```bash
go get github.com/unstoppabledomains/resolution-go/v2
```

## Updating Resolution Go

Resolution Go can be updated with the `go get` command.

```bash
go get -u github.com/unstoppabledomains/resolution-go/v2
```

<embed src="/snippets/_libraries-provider-config.md" />

<embed src="/snippets/_res-lib-default-provider.md" />

```golang
package main

import (
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/unstoppabledomains/resolution-go/v2"
)

func main() {
	var alchemyApiKey = ALCHEMY_PROJECT_ID
	var ethereumUrl = "https://eth-mainnet.g.alchemy.com/v2/" + alchemyApiKey
	var ethereumL2Url = "https://polygon-mainnet.g.alchemy.com/v2/" + alchemyApiKey

	var unsBuilder := resolution.NewUnsBuilder()
	var backend, _ := ethclient.Dial(ethereumUrl)
	var backendL2, _ := ethclient.Dial(ethereumL2Url)

	unsBuilder.SetContractBackend(backend)
	unsBuilder.SetL2ContractBackend(backendL2)

	var unsResolution, _ = unsBuilder.Build()
	var znsResolution, _ = resolution.NewZnsBuilder().Build()
}
```

<embed src="/snippets/_res-lib-connect-src-warning.md" />

## Error Handling

<embed src="/snippets/_res-lib-error-intro.md" />

```go
package main

import (
    "fmt"
    "github.com/unstoppabledomains/resolution-go/v2"
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
| DomainNotSupportedError | Thrown when you resolve a domain with an ending not supported by the current resolution instance. |
| InvalidDomainNameReturnedError | Thrown when you resolve an invalid domain address. |
| MethodIsNotSupportedError | Thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `TokenURI()`, `TokenURIMetadata()`, and `Unhash()` methods for the Zilliqa Name Service (ZNS). |
| UnsConfigurationError | Thrown when the UNS resolution service is misconfigured. |

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippet below show how to do this in Golang.

```go
uns, _ := resolution.NewUnsBuilder().Build()
ethAddress, _ := uns.Addr("brad.crypto", "ETH")
fmt.Println("ETH address for brad.crypto is", ethAddress)
```

<embed src="/snippets/_discord.md" />
