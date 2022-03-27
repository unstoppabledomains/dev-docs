---
title: Resolution Library Error Handling
description: This page provides a guide on handling errors with the Resolution Libraries.
---

# Resolution Library Error Handling Guide

Unstoppable Domains follows the error handling best practices specific to each library's language. Each error data structure contains an error code, a human-readable message, and extra details that may help you debug the error, like so:

```typescript
{
  code: string; // one of our custom error codes
  message?: string; // human-readable error summary
  providerMessage?: string; // internal error message from the provider (alchemy, infura, etc.)
  errorMessage?: string; // internal error message / nested error
  method?: ResolutionMethod; // resolution method (UNS L1, UNS L2, CNS, ZNS, UD API)
  methodName?: string; // resolution method that was used (e.g. Resolution.addr, Resolution.allRecords)
  domain?: string; // domain that caused the error
  currencyTicker?: string; // currency ticker that caused the error
  recordName?: string; // record that caused the error
  namingService?: string; // naming service (UNSL1, UNSL2, ZNS, ENS, CNS, etc.)
  location?: UnsLocation; // domain location (L1, L2)
  tokenUri?: string; // domain metadata link
}
```

This page provides a guide on handling errors with the Resolution Libraries, and the code snippet below shows how to handle the common error cases you may encounter during integration, including:

- Resolving an unregistered domain
- Resolving an undefined record of a domain
- Resolving a misconfigured domain
- Resolving a domain with an unsupported TLD

:::warning Important
Unstoppable Domains periodically releases new TLDs, and our Resolution libraries and APIs will automatically detect and support any new TLDs. It is imperative for future proofing your resolution integration to allow all domain inputs to pass through rather than implementing a front end filter (e.g. avoid hard coding domains or placing a regex filter for just .crypto, .nft, etc.).
:::

```typescript JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
const resolution = new Resolution();
resolution
    .addr('domain-with-error.crypto', 'ETH')
    .then((ethAddress) => {
    })
    .catch((error) => {
        if (error.code === 'UnregisteredDomain') {
            console.log('Domain is not registered')
        }
        if (error.code === 'RecordNotFound') {
            console.log('Crypto record is not found (or empty)')
        }
        if (error.code === 'UnspecifiedResolver') {
            console.log('Domain is not configured (empty resolver)')
        }
        if (error.code === 'UnsupportedDomain') {
            console.log('Domain is not supported')
        }
    });
```

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

```swift Swift
import UnstoppableDomainsResolution

guard let resolution = try? Resolution() else {
  print ("Init of Resolution instance with default parameters failed...")
  return
}

resolution.addr(domain: "domain-with-error.crypto", ticker: "ETH") { result in
    switch result {
        case .success(let returnValue):
            // Success flow
        case .failure(let error):
            switch error {
                case ResolutionError.unregisteredDomain:
                    // Domain is not registered
                    break;

                case ResolutionError.recordNotFound:
                    // Crypto record is not found (or empty)
                    break;

                case ResolutionError.unspecifiedResolver:
                    // Domain is not configured (empty resolver)
                    break;

                case ResolutionError.unsupportedDomain:
                    // Domain is not supported
                    break;
            }
    }
}
```

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

In the code snippet above, we handled the errors thrown by the Resolution Library by switching on the `error code` and displaying custom messages to the user. You can then perform other actions to handle the error or show the `error message` value from the error data structure to the user.

:::info
To see all the supported error codes for each Resolution Library, please check the following pages:
- [Resolution Error Codes](./library-error-codes/resolution.md)
- [Resolution-Java Error Codes](./library-error-codes/resolution-java.md)
- [Resolution-Swift Error Codes](./library-error-codes/resolution-swift.md)
- [Resolution-Go Error Codes](./library-error-codes/resolution-go.md)
:::

:::warning Important
Always validate the addresses resolved from the Resolution Library as the user has complete control over the domain and can set invalid values.
:::

<embed src="/snippets/_discord.md" />
