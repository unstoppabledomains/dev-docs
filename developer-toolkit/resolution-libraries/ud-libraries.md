---
title: Resolution Libraries
description: This page reviews the different resolution library options that can be used for resolving a domain. The libraries are fully supported and maintained by UD.
---

Resolution libraries are used for interacting with blockchain domain names. They can be used to retrieve [payment addresses](../crypto-payments.md), IPFS hashes for [decentralized websites](../../build-a-decentralized-website/overview-of-ipfs-and-d-web.md), DNS records and other [records types](../../domain-registry-essentials/records-reference.md). Each Resolution Library is built and maintained by Unstoppable Domains, so updates happen automatically.&#x20;

## Supported Domains for Resolution Libraries

The Resolution Libraries support decentralized domains across two main zones:

| Name Service                   | Supported Domains                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| Zilliqa Name Service (ZNS)     | `.zil`                                                                                 |
| Unstoppable Name Service (UNS) | `.crypto`, `.nft`, `.blockchain`, `.bitcoin`, `.coin`, `.wallet,` `.888`, `.dao`, `.x` |

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippets below show how to do this for Java, JavaScript, Swift, and Golang.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
const { default: Resolution } = require('@unstoppabledomains/resolution');
const resolution = new Resolution();

function resolveCustomRecord(domain, record) {
  resolution
    .records(domain, [record])
    .then((value) => console.log(`Domain ${domain} ${record} is: ${value}`))
    .catch(console.error);
}

resolveCustomRecord('homecakes.crypto', 'custom.record.value');
```
{% endtab %}

{% tab title="Java" %}
```java
String record = resolution.getRecord("ryan.crypto", "custom.record.value");
assertEquals("Example custom record value", record);
```
{% endtab %}

{% tab title="Swift" %}
```swift
// Lookup specific records
resolution.record(domain: "ryan.crypto", record: "custom.record.value") { result in
  switch result {
  case .success(let returnValue):
    // Example custom record value
    let recordValue = returnValue
  case .failure(let error):
    print("Expected record value, but got \(error)")
}
}
```
{% endtab %}

{% tab title="Golang" %}
```go
uns, _ := resolution.NewUnsBuilder().Build()
  ethAddress, _ := uns.Addr("brad.crypto", "ETH")
  fmt.Println("ETH address for brad.crypto is", ethAddress)
```
{% endtab %}
{% endtabs %}

## List of UD Resolution Libraries

The following table lists the UD Resolution Libraries along with links to each respective GitHub Repository.

| Resolution Library | GitHub Repository                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| JavaScript         | [https://github.com/unstoppabledomains/resolution](https://github.com/unstoppabledomains/resolution)             |
| Java               | [https://github.com/unstoppabledomains/resolution-java](https://github.com/unstoppabledomains/resolution-java)   |
| Swift              | [https://github.com/unstoppabledomains/resolution-swift](https://github.com/unstoppabledomains/resolution-swift) |
| Golang             | [https://github.com/unstoppabledomains/resolution-go](https://github.com/unstoppabledomains/resolution-go)       |

## Support

If you have any questions or need assistance with using UD resolution libraries, join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from us and the community.
