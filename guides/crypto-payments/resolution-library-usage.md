---
title: Using the Resolution Libraries
description: This page reviews the process for sending and receiving crypto payments using resolution libraries.
---

## Resolving a Crypto Address From a Domain

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

:::attention info
Our libraries use Alchemy to interact with the Ethereum blockchain by default. To configure a custom Ethereum provider see our [library configuration guide.](library-configuration.md)
:::

### Records Involved

In the code above, the `addr()` and `getAddress()` methods convert the provided 3-letter ticker into the format `crypto.<TICKER>.address` and queries the blockchain for the attached record. Some applications also set custom records for a domain to use within themselves.

## Resolving Addresses Existing On Multiple Blockchains

The resolution library provides another method for resolving the addresses of tickers for different blockchains (e.g. `USDT` exists on `EOS`, `ERC20`, `OMNI`, and `TRON` blockchains).

See how to handle this using UD's resolution libraries for the `udtestdev-usdt.crypto` domain:

```JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
const resolution = new Resolution();
resolution
    .multiChainAddr('udtestdev-usdt.crypto', 'USDT', 'ERC20')
    .then((receiverUSDTAddress) => {
        // receiverUSDTAddress consists address for receiving USDT on Ethereum (ERC20 version)
        // use this address as recipient of the payment
    })
    .catch(console.error);
```

```Java
import com.unstoppabledomains.resolution.Resolution
...
DomainResolution resolution = new Resolution();
String receiverUSDTAddress = resolution.getMultiChainAddress("udtestdev-usdt.crypto", "USDT", "ERC20");
// receiverUSDTAddress consists address for receiving USDT on Ethereum (ERC20 version)
// use this address as recipient of the payment
```

```Swift
import UnstoppableDomainsResolution

guard let resolution = try? Resolution() else {
  print ("Init of Resolution instance with default parameters failed...")
  return
}

resolution.multiChainAddress(domain: "udtestdev-usdt.crypto", ticker: "USDT", chain: "ERC20") { (result) in
  switch result {
  case .success(let returnValue):
     receiverUSDTAddress = returnValue;
     // receiverUSDTAddress consists address for receiving USDT on Ethereum (ERC20 version)
     // use this address as recipient of the payment
  case .failure(let error):
     print("Expected USDT-ETC20 Address, but got \(error)")
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
    usdtAddress, _ := uns.AddrVersion("udtestdev-usdt.crypto", "USDT", "ERC20")
    fmt.Println("USDT-ERC20 address for udtestdev-usdt.crypto is", usdtAddress)
}
```

### Records Involved

The `multiChainAddr()`, `multiChainAddress()`, `getMultiChainAddress()`, and `AddrVersion()` methods create a key from the provided `USDT` ticker and `ERC20` version. The key format is `crypto.USDT.version.<VERSION>.address`. In the example above with the `ERC-20` version of `USDT`, the created key would be `crypto.USDT.version.ERC20.address`.

:::attention info
See the managing domain records guide for information about supported crypto payment tickers and USDT versions.
:::
