---
title: Browser Resolution Test Domains | Unstoppable Domains Developer Portal
description: This page provides a list of the browser resolution test domains and reviews the process for retrieving test records.
---

# Browser Resolution Test Domains

| Domain name |
| :--- |
| udtestdev-dns-ipfs.crypto |
| udtestdev-dns.crypto |
| udtestdev-dns-a-record.crypto |
| udtestdev-ipfs.crypto |
| udtestdev-dns-global-ttl.crypto |
| udtestdev-dns-ipfs-no-preffered-records.crypto |
| udtestdev-dns-cname.crypto |
| udtestdev-dns-ipfs-redirect.crypto |
| udtestdev-redirect.crypto |
| udtestdev-dns-ipfs-redirect-legacy-ipfs-legacy.crypto |
| udtestdev-ipfs-legacy.crypto |
| udtestdev-ipfs-legacy-redirect-legacy.crypto |
| udtestdev-redirect-legacy.crypto |

## Getting test records

Check records with the [Resolution Libraries](/developer-toolkit/resolution-integration-methods/resolution-libraries/libraries-overview.md) and [Resolution CLI](/developer-toolkit/resolution-integration-methods/resolution-cli.md):

```typescript JavaScript
import Resolution from '@unstoppabledomains/resolution/build/Resolution';

// obtain a key from https://unstoppabledomains.com/partner-api-dashboard if you are a partner. See https://github.com/unstoppabledomains/resolution for more initialization options
const resolution = new Resolution({ apiKey: "<api_key>" });
resolution.allRecords('udtestdev-dns-ipfs.crypto').then((records) => {
  console.log(records);
  // Output
  // {
  //   'dns.A': '["10.0.0.1","10.0.0.2"]',
  //   'dns.A.ttl': '1800',
  //   'dns.ttl': '1000',
  //   'dns.CNAME': '',
  //   'dns.CNAME.ttl': '',
  //   'dweb.ipfs.hash': 'QmVJ26hBrwwNAPVmLavEFXDUunNDXeFSeMPmHuPxKe6dJv',
  //   'browser.preferred_protocols': '["ipfs","https","http"]',
  //   'browser.redirect_url': '',
  //   'ipfs.html.value': '',
  //   'ipfs.redirect_domain.value': ''
  // }
});
```

```bash Resolution CLI
$ resolution -d udtestdev-dns-ipfs.crypto -a
{
    "records": {
        "dns.A": "[\"10.0.0.1\",\"10.0.0.2\"]",
        "dns.A.ttl": "1800",
        "dns.ttl": "1000",
        "dweb.ipfs.hash": "QmVJ26hBrwwNAPVmLavEFXDUunNDXeFSeMPmHuPxKe6dJv",
        "browser.preferred_protocols": "[\"ipfs\",\"https\",\"http\"]"
    }
}
```

```swift Swift
import UnstoppableDomainsResolution

// obtain a key from https://unstoppabledomains.com/partner-api-dashboard if you are a partner. See https://github.com/unstoppabledomains/resolution-swift for more initialization options
guard let resolution = try? Resolution(apiKey: "<api_key>") else {
  print ("Init of Resolution instance failed...")
  return
}

resolution.allRecords(domain: "udtestdev-dns-ipfs.crypto") { result in
  switch result {
  case .success(let returnValue):
    dump(returnValue);
     /*
        Output:
        'dns.A': '["10.0.0.1","10.0.0.2"]'
        'dns.A.ttl': '1800'
        'dns.ttl': '1000'
        'dns.CNAME': ''
        'dns.CNAME.ttl': ''
        'dweb.ipfs.hash': 'QmVJ26hBrwwNAPVmLavEFXDUunNDXeFSeMPmHuPxKe6dJv'
        'browser.preferred_protocols': '["ipfs","https","http"]'
        'browser.redirect_url': ''
        'ipfs.html.value': '',
        'ipfs.redirect_domain.value': ''
      */
  case .failure(let error):
    XCTFail("Expected all records from uns domain, but got \(error)");
  }
}
```

```java Java
import com.unstoppabledomains.resolution.Resolution;
import java.util.Map;
​
public class Main {
  public static void main(String[] args) {
    try {
      // obtain a key from https://unstoppabledomains.com/partner-api-dashboard if you are a partner. See https://github.com/unstoppabledomains/resolution-java for more initialization options
      DomainResolution resolution = new Resolution("<api_key>");
      Map<String, String> records = res.getAllRecords("udtestdev-dns-ipfs.crypto");
      for (Map.Entry<String, String> entry : records.entrySet()) {
        System.out.println(String.format("'%s': '%s'", entry.getKey(), entry.getValue());
      }
     /*
      * Output:
      * 'dns.A': '["10.0.0.1","10.0.0.2"]'
      * 'dns.A.ttl': '1800'
      * 'dns.ttl': '1000'
      * 'dns.CNAME': ''
      * 'dns.CNAME.ttl': ''
      * 'dweb.ipfs.hash': 'QmVJ26hBrwwNAPVmLavEFXDUunNDXeFSeMPmHuPxKe6dJv'
      * 'browser.preferred_protocols': '["ipfs","https","http"]'
      * 'browser.redirect_url': ''
      * 'ipfs.html.value': '',
      * 'ipfs.redirect_domain.value': ''
      */
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
```

```go Golang
package main
​
import (
  "fmt"
  "github.com/unstoppabledomains/resolution-go/v3"
)
​
func main() {
  // obtain a key from https://unstoppabledomains.com/partner-api-dashboard if you are a partner. See https://github.com/unstoppabledomains/resolution-go for more initialization options
  uns, _ := resolution.NewUnsBuilder().SetUdClient("<api_key>").Build()
  allUnsRecords, _ := uns.AllRecords("udtestdev-dns-ipfs.crypto")
  fmt.Println("Records for udtestdev-dns-ipfs.crypto", allUnsRecords)
  // Output
  // {
  //   'dns.A': '["10.0.0.1","10.0.0.2"]',
  //   'dns.A.ttl': '1800',
  //   'dns.ttl': '1000',
  //   'dns.CNAME': '',
  //   'dns.CNAME.ttl': '',
  //   'dweb.ipfs.hash': 'QmVJ26hBrwwNAPVmLavEFXDUunNDXeFSeMPmHuPxKe6dJv',
  //   'browser.preferred_protocols': '["ipfs","https","http"]',
  //   'browser.redirect_url': '',
  //   'ipfs.html.value': '',
  //   'ipfs.redirect_domain.value': ''
  // }
}
```
