You can generate the [namehash](/getting-started/glossary.md#namehash) of a domain using any of the [Resolution Libraries](/resolution/sdks-and-libraries/overview.md), [Resolution CLI](/resolution/sdks-and-libraries/cli.md), or [Resolution Service](https://docs.unstoppabledomains.com/openapi/resolution/#operation/DomainsController.getDomainsRecords). You can also use [online tools](https://swolfeyes.github.io/ethereum-namehash-calculator/) to calculate the namehash of the domain.

```javascript JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
// obtain a key by following this document https://docs.unstoppabledomains.com/domain-distribution-and-management/quickstart/retrieve-an-api-key/#api-key
const resolution = new Resolution({ apiKey: "<api_key>" });
let namehash = resolution.namehash("brad.crypto", "UNS");
```

```java Java
import com.unstoppabledomains.resolution.Resolution;
// obtain a key by following this document https://docs.unstoppabledomains.com/domain-distribution-and-management/quickstart/retrieve-an-api-key/#api-key. See https://github.com/unstoppabledomains/resolution-java for more initialization options
DomainResolution resolution = new Resolution("<api_key>");
String namehash = resolution.getNamehash("brad.crypto", "UNS");
```

```swift Swift
import UnstoppableDomainsResolution

// obtain a key by following this document https://docs.unstoppabledomains.com/domain-distribution-and-management/quickstart/retrieve-an-api-key/#api-key. See https://github.com/unstoppabledomains/resolution-swift for more initialization options
guard let resolution = try? Resolution(apiKey: "<api_key>") else {
  print ("Init of Resolution instance failed...")
  return
}

let namehash = try resolution.namehash(domain: "brad.crypto")
```

```go Golang
package main

import (
    "fmt"
    "github.com/unstoppabledomains/resolution-go/v3"
)

func main() {
    // obtain a key by following this document https://docs.unstoppabledomains.com/domain-distribution-and-management/quickstart/retrieve-an-api-key/#api-key. See https://github.com/unstoppabledomains/resolution-go for more initialization options
    uns, _ := resolution.NewUnsBuilder().SetUdClient("<api_key>").Build()
    namehash, _ := uns.Namehash("brad.crypto")
    fmt.Println("The namehash for brad.crypto is", namehash)
}
```

```bash Resolution CLI
$ resolution namehash -d brad.crypto
"0x756e4e998dbffd803c21d23b06cd855cdc7a4b57706c95964a37e24b47c10fc9"
```

:::info
The [JavaScript](/resolution/sdks-and-libraries/javascript.md) and [Java](/resolution/sdks-and-libraries/java.md) Resolution Libraries require a `Naming Service` parameter to generate namehashes. This specifies the name service that manages the domain name, and the value must either be `"UNS"` or `"ZNS"`.
:::
