---
title: Smart Contract Configuration Guide | UD Developer Portal
description: This guide covers how to set Reverse Resolution records for UD domains using smart contracts. This process requires using the ABIs implemented into the Unstoppable Domains UNS smart contract.
---

# Smart Contract Configuration Guide

This guide covers how to set Reverse Resolution records for UD domains using smart contracts. This process requires using the ABIs implemented into the Unstoppable Domains UNS smart contract.

## Step 1: Select a UNS Registry Smart Contract

<embed src="/snippets/_uns_smart_contracts.md" />

<figure>

![Polygon testnet registry contract](/images/polygon-testnet-registry-contract.png)

<figcaption>polygon testnet registry contract</figcaption>
</figure>

## Step 2: Open the “Write as Proxy” Tab for the Registry Contract

Navigate to the `Contract` tab in either the Etherscan or Polygonscan page of the Registry contract and click on the `Write as Proxy` tab.

<figure>

![Polygonscan write as proxy tab](/images/polygonscan-write-as-proxy-tab.png '#width=50%')

<figcaption>polygonscan write as proxy tab</figcaption>
</figure>


## Step 3: Connect Your Web3 Wallet

Click on the `Connect to Web3` button in the `Write as Proxy` tab and connect the wallet associated with the domain:

<figure class="half-inline-block">

![Polygonscan connect wallet](/images/polygonscan-connect-wallet.png)

<figcaption>polygonscan connect wallet</figcaption>
</figure>

<figure class="half-inline-block">

![Wallet provider list](/images/wallet-provider-list.png)

<figcaption>wallet provider list</figcaption>
</figure>

## Step 4: Generate the Namehash of Your Domain

You can generate the [namehash](../../getting-started/domain-registry-essentials/namehashing/) of your domain using any of the [resolution libraries](../../developer-toolkit/resolution-libraries/libraries-overview/) or [CLI](../../developer-toolkit/resolution-cli/). You can also use [online tools](https://swolfeyes.github.io/ethereum-namehash-calculator/) to calculate the namehash of the domain.

```javascript JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
const resolution = new Resolution();
let namehash = resolution.namehash("brad.crypto")
```
```java Java
import com.unstoppabledomains.resolution.Resolution;

DomainResolution resolution = new Resolution();
String namehash = resolution.getNamehash("brad.crypto");
```
```swift Swift
import UnstoppableDomainsResolution

guard let resolution = try? Resolution() else {
  print ("Init of Resolution instance with default parameters failed...")
  return
}

let namehash = try resolution.namehash(domain: "brad.crypto")
```
```go Golang
package main

import (
    "fmt"
    "github.com/unstoppabledomains/resolution-go"
)

func main() {
    uns, _ := resolution.NewUnsBuilder().Build()
    namehash, _ := uns.Namehash("brad.crypto")
    fmt.Println("The namehash for brad.crypto is", namehash)
}
```
```bash Resolution CLI
$ resolution namehash -d brad.crypto
"0x756e4e998dbffd803c21d23b06cd855cdc7a4b57706c95964a37e24b47c10fc9"
```

## Step 5: Set the Reverse Record

The UNS contract has a `setReverse()` ABI method that takes in the namehash of a domain and sets its reverse record to your wallet address.

<figure>

![Polygonscan setReverse method](/images/set-reverse-abi.png)

<figcaption>polygonscan setReverse method</figcaption>
</figure>

Add the generated namehash of the domain you want to configure Reverse Resolution for in the `tokenId` field of the `setReverse()` method and click the `Write` button.

<figure>

![Polygonscan setReverse response](/images/set-reverse-response.png)

<figcaption>polygonscan setReverse response</figcaption>
</figure>

## Step 6: Execute the Contract

Click the `Write` button to sign the transaction and execute the contract.

<figure>

![Metamask sign transaction](/images/set-reverse-tx-sign.png '#width=50%')

<figcaption>metamask sign transaction</figcaption>
</figure>

After signing the transaction, you can view its details on the blockchain explorer, like so:

<figure>

![Reverse record adding transaction](/images/finished-adding-reverse-record.png)

<figcaption>reverse record adding transaction</figcaption>
</figure>

:::success Congratulations
You have successfully configured Reverse Resolution for your domain using smart contracts.
:::
