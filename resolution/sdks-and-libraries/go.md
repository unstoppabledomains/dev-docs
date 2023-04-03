---
title: Resolution-Go | Unstoppable Domains Developer Portal
description: This page details basic configuration and usage of the resolution-go library.
---

# Resolution-Go

This page details basic installation, configuration, and usage of the [Golang Resolution Library](https://github.com/unstoppabledomains/resolution-go).

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

## Initialize with Unstoppable Domains' Proxy Provider

```go
package main
import (
	"fmt"
	"github.com/unstoppabledomains/resolution-go/v2"
)
// obtain a key from https://unstoppabledomains.com/partner-api-dashboard if you are a partner
uns, _ := resolution.NewUnsBuilder().SetUdClient("<api_key>").Build()
zilliqaProvider := provider.NewProvider("https://api.zilliqa.com")
	zns, _ := resolution.NewZnsBuilder().SetProvider(zilliqaProvider).Build()
```

## Initialize with Custom Ethereum Provider Configuration

<embed src="/snippets/_libraries-provider-config.md" />

```go
package main
import (
	"fmt"
	"github.com/Zilliqa/gozilliqa-sdk/provider"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/unstoppabledomains/resolution-go/v2"
)
func main() {
	// obtain a key from https://www.infura.io
	var ethereumUrl = "https://mainnet.infura.io/v3/<infura_api_key>"
	var ethereumL2Url = "https://polygon-mainnet.infura.io/v3/<infura_api_key>"
	var unsBuilder := resolution.NewUnsBuilder()
	var backend, _ := ethclient.Dial(ethereumUrl)
	var backendL2, _ := ethclient.Dial(ethereumL2Url)
	unsBuilder.SetContractBackend(backend)
	unsBuilder.SetL2ContractBackend(backendL2)
	var uns, _ = unsBuilder.Build()
	zilliqaProvider := provider.NewProvider("https://api.zilliqa.com")
	zns, _ := resolution.NewZnsBuilder().SetProvider(zilliqaProvider).Build()
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
    // obtain a key from https://unstoppabledomains.com/partner-api-dashboard if you are a partner
    uns, _ := resolution.NewUnsBuilder().SetUdClient("<api_key>").Build()

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
ethAddress, _ := uns.Addr("brad.crypto", "ETH")
fmt.Println("ETH address for brad.crypto is", ethAddress)
```

## Use Case: Resolve Addresses Existing on Multiple Blockchains

The resolution library provides a method for resolving the addresses of tickers for different blockchains (e.g. `USDT` exists on `EOS`, `ERC20`, `OMNI`, and `TRON` blockchains). The code snippet below show how to do this in Golang.

```go
usdtAddress, _ := uns.AddrVersion("udtestdev-usdt.crypto", "USDT", "ERC20")
fmt.Println("USDT-ERC20 address for udtestdev-usdt.crypto is", usdtAddress)
```

<embed src="/snippets/_discord.md" />
