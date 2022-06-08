---
title: Resolution-Swift | Unstoppable Domains Developer Portal
description: This page details basic configuration and usage of the resolution-swift library.
---

# Resolution-Swift

This page details basic configuration and usage of the [resolution-swift library](https://github.com/unstoppabledomains/resolution-swift).

<embed src="/snippets/_libraries-provider-config.md" />

<embed src="/snippets/_res-lib-default-provider.md" />

```swift
import UnstoppableDomainsResolution

let infuraApiKey = INFURA_PROJECT_ID

guard let resolution = try? Resolution(
    configs: Configurations(
        uns: UnsLocations(
            layer1: NamingServiceConfig(
                        providerUrl: "https://mainnet.infura.io/v3/" + infuraApiKey,
                        network: "mainnet"),
            layer2: NamingServiceConfig(
                        providerUrl: "https://polygon-mainnet.infura.io/v3/" + infuraApiKey,
                        network: "polygon-mainnet")
        )
    )
) else {
  print ("Init of Resolution instance with custom parameters failed...")
  return
}
```

<embed src="/snippets/_res-lib-connect-src-warning.md" />

## Error Handling

<embed src="/snippets/_res-lib-error-intro.md" />

```swift Swift
import UnstoppableDomainsResolution

guard let resolution = try? Resolution() else {
  print ("Init of Resolution instance with default parameters failed...")
  return
}

resolution.addr(domain: "domain-with-error.crypto", ticker: "ETH") { result in
    switch result {
        case .success(let returnValue):
            // Success flow
        case .failure(let error):
            switch error {
                case ResolutionError.unregisteredDomain:
                    // Domain is not registered
                    break;

                case ResolutionError.recordNotFound:
                    // Crypto record is not found (or empty)
                    break;

                case ResolutionError.unspecifiedResolver:
                    // Domain is not configured (empty resolver)
                    break;

                case ResolutionError.unsupportedDomain:
                    // Domain is not supported
                    break;
            }
    }
}
```

### Error Codes

| Error Code | Description |
|---|---|
| contractNotInitialized | Thrown when the proxy reader of the current resolution instance has not been initialized. |
| inconsistentDomainArray | Thrown when you attempt to retrieve the locations of multiple domains with different naming services. The location of a domain contains the `blockchain`, `networkId`, and valuable metadata like `owner`, `resolver`, `registry addresses`, and `provider URL` of that domain. |
| invalidDomainName | Thrown when you resolve an invalid domain address. |
| methodNotSupported | Thrown when you use a method of the current resolution instance not supported by the naming service you're resolving from. For example, using the `batchOwners()`, `getTokenUri()`, `locations()`, and `getDomainName()` methods for the Zilliqa Name Service (ZNS). |
| proxyReaderNonInitialized | Thrown when the registry address of the current resolution instance has not been initialized. |
| recordNotFound | Thrown when you resolve an undefined record of a domain. For example, resolving the Twitter handle of a domain that doesn't have one. |
| recordNotSupported | Thrown when you resolve an unsupported domain record. |
| registryAddressIsNotProvided | Thrown when using an incorrect contract address with the current resolution instance. |
| unregisteredDomain | Thrown when you resolve a domain not owned by any address. |
| unknownError | Thrown when an unknown error occurs while resolving a domain with the current resolution instance. |
| unspecifiedResolver | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| unsupportedDomain | Thrown when you resolve a domain with an ending not supported by the current resolution instance. |
| unsupportedServiceName | Thrown when using an unsupported naming service with the current resolution instance. |

## Use Case: Retrieve a Domain Record

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippet below show how to do this in Swift.

```swift
// lookup specific records
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

<embed src="/snippets/_discord.md" />
