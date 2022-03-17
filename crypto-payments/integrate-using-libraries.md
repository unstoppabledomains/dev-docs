---
title: Send and Receive Crypto Payments using Libraries
description: This page reviews the process for sending and receiving crypto payments using resolution libraries.
---

The easiest way to integrate domain resolution for crypto payments is by using the Unstoppable Domains resolution libraries. These libraries communicate with the Ethereum, Polygon, and Zilliqa blockchains directly so that you don't have to.

This process converts a human-readable name like `brad.crypto` to the cryptocurrency addresses that name stores. As long as the addresses are set, a user can send any of our 80+ supported cryptocurrencies to an Unstoppable Domain and it will end up in the right place. A user can send `BTC` to `brad.crypto` and it will go to Brad's `BTC` address. A user can send `ETH` to `brad.crypto` and will go to Brad's `ETH` address.

![A successful domain resolution and payment](../../images/success-payment-example.gif)

## Step 1: Retrieve Domain Records

At a high-level, an application retrieves a domain's records through smart contracts deployed on the Ethereum, Zilliqa, and Polygon blockchains (`.crypto`, `.zil`, and `.wallet`, respectively).

In the example above, we're sending 1 `ETH` to `ryan.crypto`. The application sends those two parameters to the `Resolver` contract on the Ethereum blockchain and it returns the record stored under `crypto.ETH.address` for that domain. This address can be used to complete the `ETH` transfer to Ryan.

{% hint style="info" %}
A domain can store many records and key formats. To learn about our supported record types, see [Records reference guide](../domain-registry-essentials/records-reference.md).
{% endhint %}

![Data movement for a successful payment](<../images/Crypto payments success flow (1).png>)


## Step 2: Resolve Crypto Records

After you retrieve the domain records, you have several options to resolve the crypto records so you can begin sending and receiving crypto payments. The two options covered in this guide include resolving into an Ethereum address and resolving into an USDT-ERC20 address.

### Example: Resolving `ryan.crypto` into Ethereum address

To resolve `ryan.crypto` into its Ethereum address, the library searches for the `crypto.ETH.address` record attached to the domain.

{% tabs %}
{% tab title="resolution" %}
```javascript
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
{% endtab %}

{% tab title="resolution-java" %}
```java
import com.unstoppabledomains.resolution.Resolution
...
DomainResolution resolution = new Resolution();
String receiverETHAddress = resolution.getAddress("ryan.crypto", "ETH");
// receiverETHAddress consists receiver ethereum address
// use this address as recipient of the payment
```
{% endtab %}

{% tab title="resolution-swift" %}
```swift
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
{% endtab %}

{% tab title="resolution-go" %}
```go
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
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Our libraries use Alchemy to interact with the Ethereum blockchain by default. To configure a custom Ethereum provider see our [Library configuration guide.](resolution-libraries/library-configuration.md)
{% endhint %}

**Records involved**

In the code above, the `addr()` and `getAddr()` methods convert the provided 3-letter ticker into the format `crypto.<TICKER>.address`. In this example, `ETH` ticker becomes `crypto.ETH.address`. The library uses `crypto.ETH.address` and the domain name to query the blockchain.

### Example: Resolve `udtestdev-usdt.crypto` into USDT-ERC20 address

The `USDT` currency exists on multiple blockchains. Our libraries provide a dedicated method to look up cryptocurrency addresses for different blockchains.

{% tabs %}
{% tab title="resolution" %}
```javascript
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
{% endtab %}

{% tab title="resolution-java" %}
```java
import com.unstoppabledomains.resolution.Resolution
...
DomainResolution resolution = new Resolution();
String receiverUSDTAddress = resolution.getMultiChainAddress("udtestdev-usdt.crypto", "USDT", "ERC20");
// receiverUSDTAddress consists address for receiving USDT on Ethereum (ERC20 version)
// use this address as recipient of the payment
```
{% endtab %}

{% tab title="resolution-swift" %}
```swift
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
{% endtab %}

{% tab title="resolution-go" %}
```go
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
{% endtab %}
{% endtabs %}

**Records involved**

The `multiChainAddress()` and `getMultiChainAddress()` methods create a key from the provided `USDT` ticker and `ERC20` version. The key format is `crypto.USDT.version.<VERSION>.address`. In the example above with the `ERC-20` version of `USDT`, the created key would be `crypto.USDT.version.ERC20.address`.

{% hint style="info" %}
See [Managing domain records](../allow-my-users-to-manage-existing-domains/managing-domain-records.md) for information about supported crypto payment tickers and USDT versions.
{% endhint %}
