---
title: Managing Domains Using Contracts
description: This guide covers how to manage Unstoppable Domain records using contracts. This process requires using the Etherscan and Polygonscan user interface to write and execute contracts.
---

# Managing Domains Using Contracts

This guide covers how to manage Unstoppable Domain records using contracts. This process requires using the Etherscan and Polygonscan user interface to write and execute contracts.

## Step 1: Select a UNS Registry Smart Contract
The [UNS Registry](../../developer-toolkit/smart-contracts/uns-smart-contracts/#unsregistry) contract is where domain owners store their data and is a map of domain namehashes to key-value dictionaries of records. Choose one of the Unstoppable Registry smart contracts to interact with (either mainnet or testnet).

| Network | Contract address |
| - | - |
| Ethereum mainnet | [0x049aba7510f45BA5b64ea9E658E342F904DB358D](https://etherscan.io/address/0x049aba7510f45BA5b64ea9E658E342F904DB358D) |
| Ethereum testnet (Goerli) | [0x070e83FCed225184E67c86302493ffFCDB953f71](https://goerli.etherscan.io/address/0x070e83FCed225184E67c86302493ffFCDB953f71) |
| Polygon mainnet | [0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f](https://polygonscan.com/address/0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f) |
| Polygon testnet (Mumbai) | [0x2a93C52E7B6E7054870758e15A1446E769EdfB93](https://mumbai.polygonscan.com/address/0x2a93C52E7B6E7054870758e15A1446E769EdfB93) |

<figure>

![polygon testnet registry contract](/images/polygon-testnet-registry-contract.png)

<figcaption>polygon testnet registry contract</figcaption>
</figure>

## Step 2: Open the "Write as Proxy" Tab for the Registry Contract

Navigate to the `Contract` tab in either the Etherscan or Polygonscan page of the Registry contract:

<figure>

![polygonscan contract tab](/images/polygonscan-contract-tab.png '#width=50%')

<figcaption>polygonscan contract tab</figcaption>
</figure>

Next, navigate to the `Write as Proxy` tab under the `Contract` tab section:

<figure>

![polygonscan write as proxy tab](/images/polygonscan-write-as-proxy-tab.png '#width=50%')

<figcaption>polygonscan write as proxy tab</figcaption>
</figure>

## Step 3: Connect Your Web3 Wallet

Click on the `Connect to Web3` button in the `Write as Proxy` tab and connect the wallet associated with the domain:

<figure class="half-inline-block">

![polygonscan connect wallet](/images/polygonscan-connect-wallet.png)

<figcaption>polygonscan connect wallet</figcaption>
</figure>

<figure class="half-inline-block">

![wallet provider list](/images/wallet-provider-list.png)

<figcaption>wallet provider list</figcaption>
</figure>

## Step 4: Manage the Domain Records

Choose the `set` or `setMany` method from the `Write as Proxy` tab section. The `set` method allows you to update a single record, while the `setMany` method allows you to update multiple records simultaneously.

<figure>

![polygonscan setMany method](/images/polygonscan-setmany-method.png '#width=50%')

<figcaption>polygonscan setMany method</figcaption>
</figure>

Next, add the records you want to manage to the `keys` and `values` fields as a single value for the `set` method or array of values for the `setMany` method.

<figure>

![adding records with setMany](/images/adding-records-with-setmany.png)

<figcaption>adding records with setMany</figcaption>
</figure>

:::info
Please see the [Record Reference](../../getting-started/domain-registry-essentials/records-reference/) guide and [reference JSON](https://github.com/unstoppabledomains/uns/blob/main/resolver-keys.json) file for all the resolver keys used by the Unstoppable Domains UNS Registry.
:::

## Step 5: Generate the Namehash of the Domain

You can generate the [namehash](../../getting-started/domain-registry-essentials/namehashing/) of a domain using any of the [resolution libraries](../../developer-toolkit/resolution-libraries/libraries-overview/) or [CLI](../../developer-toolkit/resolution-cli/). You can also use [online tools](https://swolfeyes.github.io/ethereum-namehash-calculator/) to calculate the namehash of the domain.

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

After generating the domain namehash, insert it into the `tokenId` field of the `set` or `setMany` method.

<figure>

![adding domain namehash](/images/adding-domain-namehash.png)

<figcaption>adding domain namehash</figcaption>
</figure>

## Step 6: Execute the Contract

Click the `Write` button to sign the transaction and execute the contract:

<figure>

![metamask sign transaction](/images/metamask-sign-transaction.png '#width=50%')

<figcaption>metamask sign transaction</figcaption>
</figure>

After signing the transaction, you can view its details on the blockchain explorer, like so:

<figure>

![polygonscan transaction details](/images/polygonscan-transaction-details.png '#width=50%')

<figcaption>polygonscan transaction details</figcaption>
</figure>

:::success Congratulations!
You have successfully managed your Unstoppable Domain records using contracts. Happy hacking!
:::
