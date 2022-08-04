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
