---
title: Using the Resolution Libraries
description: This page reviews the process for sending and receiving crypto payments using resolution libraries.
---

## Resolving a crypto address from a domain

To resolve a domain into an address, you must call the appropriate method from the resolution library in the language you choose and pass the required parameters (currency and domain).

The code snippets below show how to do this for Java, JavaScript, Swift, and Golang.

```JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
const resolution = new Resolution();
resolution
  .addr('ryan.crypto', 'ETH')
  .then((receiverETHAddress) => {
    // receiverETHAddress consists receiver ethereum address
    // use this address as recipient of the payment
  })
  .catch(console.error);
```

```Java
import com.unstoppabledomains.resolution.Resolution;
...
DomainResolution resolution = new Resolution();
String receiverETHAddress = resolution.getAddress("ryan.crypto", "ETH");
// receiverETHAddress consists receiver ethereum address
// use this address as recipient of the payment
```

```Swift
import UnstoppableDomainsResolution

guard let resolution = try? Resolution() else {
  print ("Init of Resolution instance with default parameters failed...")
  return
}

resolution.addr(domain: "ryan.crypto", ticker: "ETH") { result in
  switch result {
  case .success(let returnValue):
    let receiverETHAddress = returnValue
    // receiverETHAddress consists receiver ethereum address
    // use this address as recipient of the payment
  case .failure(let error):
    print("Expected eth Address, but got \(error)")
  }
}
```

```Go
package main

import (
    "fmt"
    "github.com/unstoppabledomains/resolution-go"
)

func main() {
    uns, _ := resolution.NewUnsBuilder().Build()
    ethAddress, _ := uns.Addr("ryan.crypto", "ETH")
    fmt.Println("ETH address for ryan.crypto is", ethAddress)
}
```

We resolved the `ryan.crypto` domain into its Ethereum address in the example above. The library searches for the `crypto.ETH.address` record attached to the domain.

:::info
Some applications set custom records for a domain to use within themselves.
:::

:::attention
Our libraries use Alchemy to interact with the Ethereum blockchain by default. To configure a custom Ethereum provider see our [library configuration guide.](library-configuration.md)
:::

## Resolving addresses existing on multiple blockchains
