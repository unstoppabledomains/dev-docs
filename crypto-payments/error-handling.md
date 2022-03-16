---
title: Error Handling for Crypto Payment Integrations
description: This page reviews common errors and solutions when sending and receiving crypto payments.
---

## Common error cases

* Domain is not registered
* Crypto record is not found (or empty)
* Domain is not configured (empty resolver)
* Domain is not supported

{% tabs %}
{% tab title="resolution" %}
```javascript
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

{% hint style="info" %}
To see all supported error codes please check [resolution library api docs](https://unstoppabledomains.github.io/resolution/v1.17.0/enums/resolutionerrorcode.html)
{% endhint %}
{% endtab %}

{% tab title="resolution-java" %}
```java
import com.unstoppabledomains.resolution.Resolution
import com.unstoppabledomains.exceptions.ns.NamingServiceException
import com.unstoppabledomains.exceptions.ns.NSExceptionCode

...
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

{% hint style="info" %}
To see all supported error codes please check [resolution-java readme](https://github.com/unstoppabledomains/resolution-java#errors)
{% endhint %}
{% endtab %}

{% tab title="resolution-swift" %}
```swift
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

{% hint style="info" %}
To see all supported error codes please check [resolution-swift readme](https://github.com/unstoppabledomains/resolution-swift#possible-errors)
{% endhint %}
{% endtab %}

{% tab title="resolution-go" %}
```go
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
{% endtab %}
{% endtabs %}

{% hint style="danger" %}
Always check address validity after receiving a result from the library. The user has full control over the domain and is able to set any value - even values which are invalid.
{% endhint %}


## Resources

* [Get a test domain](../get-test-domain.md)
* [JavaScript Resolution library](https://github.com/unstoppabledomains/resolution)
* [Java Resolution library](https://github.com/unstoppabledomains/resolution-java)
* [Swift Resolution library](https://github.com/unstoppabledomains/resolution-swift) &#x20;
* [Golang Resolution library](https://github.com/unstoppabledomains/resolution-go)
* [Unstoppable Domains Developer Community](https://discord.com/invite/b6ZVxSZ9Hn) Ask questions here!
