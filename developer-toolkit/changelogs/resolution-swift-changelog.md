---
title: Resolution-Swift Changelog | Unstoppable Domains Developer Portal
description: This is the changelog page for Resolution-Swift Library, Unstoppable Domains.
editPage:
  disable: true
---

# Resolution Swift Changelog

## 4.0.0

### Breaking changes
- ENS support has been removed.
    - Library configurations has been changed and all ens mentions have been removed.

## 3.0.0

### Breaking changes
- Library initialization has been changed.
   - Uns configurations now require setup for ETH network for L1 and poligon network for L2
- `Resolution#getNetwork` has been removed. It is redundant since anyone who is using the library will have the configurations built-in
- `Resolution#batchOwners` has changed signature. It now returns a map [String: String?] of domain to owner addresses.
- `Resolution#tokensOwnedBy` has been removed
- ENS considered deprecated and will be removed in the future

### New methods and features
- 🎉 🎉 🎉 Add Polygon Layer 2 support!
-  Introducing `Resolution#allRecords` method. It resolves a domain and returns all records the domain has been configured on the chain as a map [String: String] record to value
-  Introducing `Resolution#locations` method which will help to determine domains location (blockhain, networkId) and useful metadata like owner, resolver, registry addresses, provider url if possible.
    `public struct Location: Equatable {
        var registryAddress: String?
        var resolverAddress: String?
        var networkId: String?
        var blockchain: String?
        var owner: String?
        var providerURL: String?
    }`


## 2.0.1
- Fix `Resolution#tokensOwnedBy` issue with lowercased addresses.

## 2.0.0

### Breaking changes

- `Resolution#isSupported` is now making an async call. Method signature was changed.
- `Configurations` class accepts `uns` configs instead of  `cns`.
  - For example: `let resolution = try Resolution(configs: Configurations(uns: NamingServiceConfig(...uns config)));`

### New methods and features

- Support new TLD's ( .888, .nft, .coin, .blockchain, .wallet, .x, .bitcoin, .dao )
- Introduce Resolution#tokenURI - Retrieves the tokenURI from the registry smart contract
- Introduce Resolution#tokenURIMetadata - Retrieves the data from the endpoint provided by tokenURI from the registry smart contract.
- Introduce Resolution#unhash - Retrieves the domain name from token metadata that is provided by tokenURI from the registry smart contract
- Return `ENS` support
- Allowed custom networks for each of the naming services. If custom network has been set, it is required to set the proxyReader contract address for UNS and registryAddress for ENS && ZNS (see `./Sources/UnstoppableDomainsResolution/Resources/UNS/uns-config.json`)

## 1.0.0
- Remove Ens support ([#41](https://github.com/unstoppabledomains/resolution-swift/pull/41)) via [@JohnnyJumper](https://github.com/JohnnyJumper)

## 0.3.7
- Zns fix ([#40](https://github.com/unstoppabledomains/resolution-swift/pull/40)) via [@merenkoff](https://github.com/merenkoff)
- Warning in project due to incorrect podspec #38 ([#39](https://github.com/unstoppabledomains/resolution-swift/pull/39)) via [@merenkoff](https://github.com/merenkoff)

## 0.3.6
- Zilliqa testnet support. ([#37](https://github.com/unstoppabledomains/resolution-swift/pull/37)) via [@merenkoff](https://github.com/merenkoff)
- UnregisteredDomain instead of UnspecifiedResolver ([#36](https://github.com/unstoppabledomains/resolution-swift/pull/36)) via [@JohnnyJumper](https://github.com/JohnnyJumper)

## 0.3.5
 * Introduce DomainResolution#getMultiChainAddress general method to fetch a ticker address from specific chain
 * Deprecate DomainResolution#getUsdt method in favor of DomainResolution#getMultiChainAddress

- General multichain support ([#33](https://github.com/unstoppabledomains/resolution-swift/pull/33)) via [@JohnnyJumper](https://github.com/JohnnyJumper)
- Auto network ([#32](https://github.com/unstoppabledomains/resolution-swift/pull/32)) via [@JohnnyJumper](https://github.com/JohnnyJumper)
- Move Base58 lib from dependencies to internal sources.

## 0.3.0
- [Customizing naming services](https://github.com/unstoppabledomains/resolution-swift#customizing-naming-services)
Version 0.3.0 introduced the `Configurations` struct that is used for configuring each connected naming service.
Library can offer three naming services at the moment:

* `cns` resolves `.crypto` domains,
* `ens` resolves `.eth` domains,
* `zns` resolves `.zil` domains

*By default, each of them is using the mainnet network via infura provider.
Unstoppable domains are using the infura key with no restriction for CNS.
Unstoppable domains recommends setting up your own provider for ENS, as we don't guarantee ENS Infura key availability.
You can update each naming service separately*

- Update keys ([#30](https://github.com/unstoppabledomains/resolution-swift/pull/30)) via [@JohnnyJumper](https://github.com/JohnnyJumper)
- Change ABI codec dependency ([#31](https://github.com/unstoppabledomains/resolution-swift/pull/31)) via [@merenkoff](https://github.com/merenkoff)

## 0.2.0
- Added correct initialization of Resolution object if `rinkeby` test network used([#27](https://github.com/unstoppabledomains/resolution-swift/pull/27)) via [@merenkoff](https://github.com/merenkoff)
- Dns records support ([#25](https://github.com/unstoppabledomains/resolution-swift/pull/25)) via [@JohnnyJumper](https://github.com/JohnnyJumper)
- Resolution#usdt ([#26](https://github.com/unstoppabledomains/resolution-swift/pull/26)) via [@JohnnyJumper](https://github.com/JohnnyJumper)
- CNS supports both `mainnet` and `rinkeby` from network-config.json file ([#23](https://github.com/unstoppabledomains/resolution-swift/pull/23)) via [@rommex](https://github.com/rommex)
- BadRequestOrResponse is Handled ([#21](https://github.com/unstoppabledomains/resolution-swift/pull/21)) via [@rommex](https://github.com/rommex)
- Proxy reader 2 0 support ([#22](https://github.com/unstoppabledomains/resolution-swift/pull/22)) via [@rommex](https://github.com/rommex)

## 0.1.6
- Downgrade minimum support version ([#20](https://github.com/unstoppabledomains/resolution-swift/pull/20)) via [@vladyslav-iosdev](https://github.com/vladyslav-iosdev)
- iOS11 support in swiftPM

## 0.1.4
- Batch Request for owners of domains

## 0.1.2
- Ininial release
