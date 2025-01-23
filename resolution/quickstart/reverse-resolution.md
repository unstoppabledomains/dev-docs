---
title: Resolution Libraries Integration Guide | UD Developer Portal
description: This guide covers how to retrieve the reverse record of UD domains using the Resolution Libraries. This process requires using the language-specific and blockchain-agnostic libraries managed by Unstoppable Domains.
---

# Reverse Resolve Domains

This guide covers how to retrieve the reverse record of UD domains using the Resolution Libraries. This process requires using the language-specific and blockchain-agnostic libraries managed by Unstoppable Domains. Please see the [Resolution Libraries Overview](../sdks-and-libraries/javascript.md) for a detailed description and configuration guide for the libraries.

## Reverse Resolution for an Address

To resolve the reverse record of a wallet address, you must call the appropriate method from the resolution library in the language you choose and provide the address parameter.

```javascript JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
// Obtain a key by following this document https://docs.unstoppabledomains.com/resolution/quickstart/retrieve-an-api-key/. See https://github.com/unstoppabledomains/resolution for more initialization options
const resolution = new Resolution({ apiKey: "<api_key>" });

function reverseTokenId(address) {
  resolution
    .reverseTokenId(address)
    .then((tokenId) => console.log(address, 'reversed to', tokenId))
    // tokenId consists the namehash of the domain with reverse resolution to that address
    .catch(console.error);
}

function reverseUrl(address) {
  resolution
    .reverse(address, {location: 'UNSLayer2'})
    .then((domain) => console.log(address, 'reversed to url', domain))
    // domain consists of the domain with reverse resolution to that address
    // use this domain in your application
    .catch(console.error);
}

reverseTokenId("0x88bc9b6c56743a38223335fac05825d9355e9f83");
reverseUrl("0x88bc9b6c56743a38223335fac05825d9355e9f83");
```

```java Java
import com.unstoppabledomains.resolution.Resolution;

// Obtain a key by following this document https://docs.unstoppabledomains.com/resolution/quickstart/retrieve-an-api-key/. See https://github.com/unstoppabledomains/resolution for more initialization options
DomainResolution resolution = new Resolution("<api_key>");

// tokenId consists the namehash of the domain with reverse resolution to that address
String tokenId = resolution.getReverseTokenId("0x88bc9b6c56743a38223335fac05825d9355e9f83");

// domain consists of the domain with reverse resolution to that address
// use this domain in your application
String domain = resolution.getReverse("0x88bc9b6c56743a38223335fac05825d9355e9f83");
```

```swift Swift
import UnstoppableDomainsResolution

// Obtain a key by following this document https://docs.unstoppabledomains.com/resolution/quickstart/retrieve-an-api-key/. See https://github.com/unstoppabledomains/resolution for more initialization options
guard let resolution = try? Resolution(apiKey: "<api_key>") else {
  print ("Init of Resolution instance failed...")
  return
}

// tokenId consists the namehash of the domain with reverse resolution to that address
resolution.reverseTokenId(address: "0x88bc9b6c56743a38223335fac05825d9355e9f83", location: nil) { (result) in
    switch result {
        case .success(let returnValue):
            let tokenId = returnValue
        case .failure(let error):
            print("Expected reverse record tokenId, but got \(error)")
    }
}

// domain consists of the domain with reverse resolution to that address
// use this domain in your application
resolution.reverse(address: "0x88bc9b6c56743a38223335fac05825d9355e9f83", location: nil) { (result) in
    switch result {
    case .success(let returnValue):
        let domain = returnValue
    case .failure(let error):
        print("Expected reverse record, but got \(error)")
    }
}
```

:::success Congratulations
You have successfully integrated Reverse Resolution using Unstoppable Domains Resolution Libraries. Happy Hacking!
:::


