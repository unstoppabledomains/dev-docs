---
title: UNS vs CNS Comparison
description: This page provides a high level overview of the differences between UNS and CNS.
---

# UNS vs CNS Comparison

## Table. High Level Differences between CNS and UNS

| CNS                                                                | UNS                                                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Implements the ERC721 standard                                     | Implements the ERC721 standard                                                                                  |
| Hosts a single .crypto TLD                                         | Hosts multiple TLDs                                                                                             |
| Separate resolver and registry contracts                           | Single contract contains both the registry and resolution data                                                  |
| Requires a Resolver lookup call in order to resolve domain data    | Does not require a Resolver (RecordStorage) lookup call since all domain data stored in a single smart contract |
| Domain minting governed by MintingController and WhitelistedMinter | Domain minting governed by MintingManager                                                                       |

### Simplified Architecture

Overall, the main difference between CNS and UNS is that UNS has a simplified architecture which is optimized for higher volumes of transaction and supporting multiple TLDs.

### Easier Data Retrieval

The next difference is that unlike CNS, UNS doesn’t have separate resolver contracts for domains.

* Resolution data is stored within the registry itself which allows retrieving data in a single smart contract call.
* This change removes unnecessary events and functions that were used for setting custom resolvers, thus improving optimizations.

### Simplified Minting Control

Another major change in UNS when compared to CNS is simplified minting control. While CNS is controlled by two smart contracts, UNS has a simpler MintingManager that combines functionality of the old MintingController and WhitelistedMinter.\


### More Resources

For a detailed list of breaking changes in UNS, see [https://github.com/unstoppabledomains/uns#backward-incompatibility](https://github.com/unstoppabledomains/uns#backward-incompatibility).
