```javascript JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
const resolution = new Resolution();
let namehash = resolution.namehash("brad.crypto", "UNS");
```

```java Java
import com.unstoppabledomains.resolution.Resolution;
DomainResolution resolution = new Resolution();
String namehash = resolution.getNamehash("brad.crypto", "UNS");
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
    "github.com/unstoppabledomains/resolution-go/v2"
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

:::info
The [JavaScript](/developer-toolkit/resolution-integration-methods/resolution-libraries/resolution.md) and [Java](/developer-toolkit/resolution-integration-methods/resolution-libraries/resolution-java.md) Resolution Libraries require a `Naming Service` parameter to generate namehashes. This specifies the name service that manages the domain name, and the value must either be `"UNS"` or `"ZNS"`.
:::
