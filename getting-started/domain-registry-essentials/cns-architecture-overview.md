---
title: CNS Architecture Overview
description: This section provides a high-level overview of CNS — Crypto Name Service. Readers should have a basic understanding of Ethereum smart contracts and the ERC-721 token standard.
---

# CNS Architecture Overview

This page covers the following topics:

* [Smart contract architecture](#smart-contract-architecture) — An overview of the core smart contracts that make up CNS. This section explains how domains are minted and managed, what domain information is stored, and how users can interact with those domains through a blockchain.
* [Domain hierarchy and ownership](#domain-hierarchy-and-ownership) — All things subdomains. How they can be structured, created, and managed.
* [Delegating domain management](#delegating-domain-management) — Explains the role of the transaction processor and meta transactions in minting domains and allowing users to delegate transaction costs.

Unstoppable Domains are built on CNS — the Crypto Name Service. CNS is a set of smart contracts on the Ethereum blockchain that govern how domains are created and used. Although it serves a similar _purpose_ as a traditional DNS system, CNS has architectural differences that change the interaction model significantly. For example, CNS domains are owned **irrevocably**. They do not need to be renewed and cannot be reclaimed by Unstoppable Domains. Once minted, users have complete control of their domains.

Every CNS domain is issued as an [ERC-721](https://eips.ethereum.org/EIPS/eip-721) token. Building on this standard makes it easier for developers to integrate with Unstoppable Domains and it lets users manage their domain ownership from any compatible wallet, exchange, or marketplace.

:::info
For more information about the structural differences between CNS and UNS, see the [UNS vs CNS comparison](cns-uns-comparison.md).
:::

## Smart contract architecture

The two central components of CNS are its `Registry` and `Resolver` smart contracts. `Registry` is a _map_ (or _dictionary_) from domain names to an owner address and a `Resolver` address. And `Resolver` is a _map_ from domain names to the records associated with that domain (cryptocurrency addresses, etc.).

<figure>

![Relation between Registry and Resolver smart contracts](/images/registry_resolver_relation-22231.svg)

<figcaption>Relation between Registry and Resolver smart contracts</figcaption>
</figure>

There is only one `Registry` smart contract deployed in the Ethereum Mainnet, but there are many versions of `Resolver` smart contracts. In theory, every domain could use a different `Resolver` contract but in practice the majority of domains are managed by the same `Resolver` smart contract instance (like Resolver 1 in the example above).

:::info
Updates to our `Resolver` smart contract are incremental and non-breaking. All `Resolver` smart contracts must adhere to our [IResolver interface](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/IResolver.sol). This interface defines the basic set of functionality and guarantees compatibility between different implementations.
:::

Each ERC-721 token can be identified by a unique number, its `tokenId`. To make domains identifiable, we use a process called [Namehashing](namehashing.md).

For instance, `example.crypto`'s namehash: `0xd584c5509c6788ad9d9491be8ba8b4422d05caf62674a98fbf8a9988eeadfb7e`

### Visualization

This flow describes how the CNS `Registry` and `Resolvers` interact.

<figure>

![Interaction between CNS Registry ad Resolvers](/images/smart-contract-architecture-administration-44233.svg)

<figcaption>Interaction between CNS Registry ad Resolvers</figcaption>
</figure>

### Registry

`Registry` is the most essential smart contract in CNS. This is the contract that defines ownership rules, how domains are minted, provides [ERC-721 token metadata](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#IERC721Metadata), and stores a metadata-enriched list of all domains.

`Registry` stores:

* Owner address
* Approved operator address
* Resolver address
* Domain name

:::info
Since domains are identified by a namehash we also explicitly store the domain's name. This allows users who only know a namehash to look up a record by its name (name to namehash, namehash to record).
:::

`Registry`'s smart contract includes a set of methods for minting new domains, creating new subdomains, and managing ownership.

Accounts that are allowed to mint second-level domains (e.g.: `alice.crypto`) are called whitelisted minters. Whitelisted minters are only permitted to mint new domains. They can't control domain ownership (e.g. approve or transfer a domain to another owner) and they can't change domain records. Whitelisted minters are operated by Unstoppable Domains.

`Registry`'s smart contract was designed without an admin. This means that no entity can manage or transfer a user's domains without their permission — even Unstoppable Domains.

Domain owners can:

* Transfer domain ownership
* Set a new resolver
* Mint a new subdomain
* Burn a domain

Domain owners can set one _Approved address_ per domain and many _Operator_ addresses. These roles can manage a domain on a user's behalf. For more details, see [Managing domain ownership](../../manage-domains/index.md).

### Resolver

`Resolver` is a smart contract that is used for resolving domains and storing domain records. This is where domain owners store their data, such as cryptocurrency addresses, chat IDs, and IPFS hashes for decentralized websites.

Under the surface, `Resolver` is effectively a map of domain namehashes to key-value dictionaries of records. This structure allows users to store arbitrary records, even those that aren't specified by the [Records reference](records-reference.md).

In practice, `Resolver`'s data structure is slightly more complicated. If you're interested in the implementation details, see [Resolver.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/Resolver.sol).

`Resolver` allows domain owners, approved addresses, and operators to edit records of their owned domains. `Resolver` also provides an interface for getting standardized records, making it easier to access general information about domains.

### ProxyReader

`ProxyReader` is a smart contract that our [resolution libraries](https://github.com/unstoppabledomains?q=resolution) use to resolve domains. Normally, it would take at least two queries to the Ethereum blockchain to resolve a domain:

1. Call `Registry` to learn a domain's Resolver address
2. Call `Resolver` to read records themselves

`ProxyReader` consolidates these operations into a single call.

For more information on how the resolution process works read [Resolving domain records](../../developer-toolkit/direct-blockchain-calls/resolve-eth-smart-contracts.md).

## Domain Hierarchy and Ownership

Domain ownership can take many forms in CNS.

A domain can be owned by both an external address (one that is accessed with a private key) or an internal address (i.e.: a smart contract). Managing domains with smart contracts opens up many new ways to structure ownership. For example, domain management could be governed by a multi-signature wallet or it could be equally shared among a group of administrators. These are two simple examples but there are many more possibilities.

Subdomains are subject to the same set of rules as second-level domains in CNS. Subdomains can be transferred or burned by both a direct owner and a domain zone owner (i.e. parent domain owner). Only a direct domain owner can set a `Resolver` address and manage domain records.

Such an ownership model might not be suitable for every user. One may want to mint subdomains that are irrevocable and can be transferred only by a direct owner – this and other models are possible if a domain zone is owned by a smart contract. For more details on alternative ownership models, see the section below.

:::info
**Note:** If the owner of a `.crypto` top-level domain is set to a [burn address](https://etherscan.io/address/0x000000000000000000000000000000000000dEaD), that means that only direct owners can transfer or burn their second-level domains. To mint second-level domains we use a different mechanism, which doesn't rely on domain ownership. For more information, see the [Minting controller](#minting-controller) section.
:::

### Alternative ownership models

Using Solidity smart contracts allows many new ways to manage subdomains. One of these ways is to use the `DomainZoneController` smart contract, which is supported by the Unstoppable Domains team.

`DomainZoneController` implements a model of ownership where subdomains can be managed only by their owners. Minting subdomains can be performed using whitelisted accounts which can be added or removed by the smart contract administrators.

In addition to minting subdomains, `DomainZoneController` provides functionality to set a `Resolver` address and manage the records of a domain zone itself. These actions can only be performed by whitelisted accounts.

:::info
Internal addresses can't be accessed directly by a wallet. Meaning domains owned by smart contracts can only be managed with rules defined by the smart contracts themselves. For example, one cannot transfer a subdomain if such functionality isn't defined by a smart contract's set of methods.
:::

## Delegating domain management

CNS allows users to delegate transaction execution to accounts that aren't domain owners.

`Registry` and `Resolver` smart contracts implement methods that use [Meta Transactions](../../manage-domains/delegating-transactions.md). One use-case for meta transactions is delegating (gas-using) blockchain calls to other accounts. This allows domain owners to keep their domains and funds on separate accounts or even have someone else pay their transaction fees.

Unstoppable Domains uses this delegation feature to operate an internal transaction processor. Our transaction processor makes it possible for users to mint and manage their domains without having to worry about their wallet's balance. Under the hood, the transaction processor is a queue-based job processor that sends transactions from Unstoppable Domains-owned accounts.

On behalf of our users, our transaction processor generally handles:

* Minting domains
* Managing domains (transferring, setting `Resolver` address, modifying records)

**Minting domains** happens when a user mints a domain from the Unstoppable Domains website. This action doesn't require a domain owner's signature, since the minting of second-level domains is controlled by Unstoppable Domains.

**Managing domains**, in contrast, can only be performed with a domain owner's permission. Each delegated transaction that modifies the owner address, the `Resolver` address, or the domain records requires a domain owner's signature.

CNS transaction delegation does not depend on Unstoppable Domains' transaction processor. As long as the domain owner provides a valid signature, write operations can be performed by any Ethereum account.

To learn more about the technical details of delegating transactions in CNS, read our [Meta Transactions](../../manage-domains/delegating-transactions.md) page.
