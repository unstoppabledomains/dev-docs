---
title: UNS Smart Contracts | Unstoppable Domains Developer Portal
description: >-
  This page provides brief descriptions with links to source code and deployment
  addresses for the Unstoppable Name Service smart contracts.
editPage:
  disable: true
redirects:
  /developer-toolkit/reference/smart-contracts/uns-smart-contracts/: {}
---

# UNS Smart Contracts

Unstoppable Name Service (UNS) is built on Ethereum and is effectively a bundle of Solidity Smart Contracts that lives on the blockchain. The Unstoppable Domains team maintains the source code. This page lists the smart contracts from the [UNS repository](https://github.com/unstoppabledomains/uns), gives a brief description, and links to the source code and deployment addresses. For high-level details about how UNS works, see the [UNS Architecture Overview](../overview/uns-architecture-overview.md).

This page is divided into sections, grouping contracts by the following categories:

- [User-facing contracts](uns-smart-contracts.md#user-facing-contracts)
- [Registry controllers](uns-smart-contracts.md#registry-controllers)
- [Interfaces](uns-smart-contracts.md#interfaces)
- [Utility contracts](uns-smart-contracts.md#utility-contracts)

{% admonition type="info"%}
  All contract addresses are available on the [UNS GitHub repository](https://github.com/unstoppabledomains/uns/blob/main/Contracts.md)
{% /admonition %}

## User-facing contracts

This section lists all the smart contracts that members can directly interact with.

### UNSRegistry

`Registry` is the most essential smart contract in UNS. This is the contract that defines ownership rules, how domains are minted, provides [ERC-721 token metadata](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#IERC721Metadata), and stores a metadata-enriched list of all domains. This is where domain owners store their data, such as cryptocurrency addresses, chat IDs, and IPFS hashes for decentralized websites.

Under the surface, Registry is effectively a map of domain namehashes to key-value dictionaries of records. This structure allows members to store arbitrary records, even those that aren't specified by the [Records reference](/resolution/records-reference.md).

**Source code:** [contracts/UnsRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/UNSRegistry.sol)

### ProxyReader

`ProxyReader` provides an interface that allows members to fetch information about domains from both `UNSRegistry` and CNS smart contracts in one call. For more details, see [Architecture overview - ProxyReader](../overview/uns-architecture-overview.md#proxyreader).

**Source code:** [contracts/ProxyReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/ProxyReader.sol)

## Registry controllers

The Unstoppable Domains team reserves the right to mint second-level domains and edit some `Registry` settings, such as token URI prefix. To avoid giving anyone absolute admin rights, `Registry` utilizes controllers that implement a limited set of admin actions.

### MintingManager

`MintingManager` defines an interface for minting second-level domains. This smart contract is primarily used by the Unstoppable Domains team, but its interface also supports delegating minting process to other parties via Meta Transactions. All calls to `MintingManager` are proxied to the `UNSRegistry` via the [MintingManager](uns-smart-contracts.md#mintingmanager) smart contract.

**Source code:** [contracts/MintingManager.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/MintingManager.sol)

## Interfaces

The following interfaces can be used as guidelines for the minimal implementation of custom smart contract versions. Also, Solidity developers can rely on them for making calls to the official CNS smart contracts.

### IDataReader

The `IDataReader` interface declares the methods that are unique to the `ProxyReader` smart contract, which returns combined data from the `Registry` and `Resolver` contracts.

**Source code:** [contracts/IDataReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IDataReader.sol)

**Implemented by:**

- [ProxyReader](uns-smart-contracts.md#proxyreader)

### IMintingManager

The `IMintingManager` interface declares a set of methods for minting second level domains.

**Source code:** [contracts/IMintingManager.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IMintingManager.sol)

**Implemented by:**

- [MintingManager](uns-smart-contracts.md#mintingmanager)

### IRecordReader

The `IRecordReader` interface declares read methods for resolution data.

**Source code:** [contracts/IRecordReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IRecordReader.sol)

**Implemented by:**

- [ProxyReader](uns-smart-contracts.md#proxyreader)
- [UNSRegistry](uns-smart-contracts.md#unsregistry)

### IRecordStorage

The `IRecordStorage` interface declares write methods for resolution data.

**Source code:** [contracts/IRecordStorage.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IRecordStorage.sol)

**Implemented by:**

- [UNSRegistry](uns-smart-contracts.md#unsregistry)

### IRegistryReader

The `IRegistryReader` interface declares only read-only `Registry` methods.

**Source code:** [contracts/IRegistryReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IRegistryReader.sol)

**Implemented by:**

- [ProxyReader](uns-smart-contracts.md#proxyreader)

### IUNSRegistry

The `IUNSRegistry` interface declares all the `UNSRegistry` events and methods (both read and write).

**Source code:** [contracts/IUNSRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IUNSRegistry.sol)

**Implemented by:**

- [UNSRegistry](uns-smart-contracts.md#unsregistry)

### IRootRegistry

The `IRootRegistry` interface declares a set of methods for depositing and withdrawing (bridging tokens and records) to Polygon.

**Source code:** [contracts/IRootRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IRootRegistry.sol)

**Implemented by:**

- [RootChainManager](uns-smart-contracts.md#rootchainmanager)

### IReverseRegistry

The `IReverseRegistry` interface declares a set of events and methods for managing Reverse Resolution records (both read and write).

**Source code:** [contracts/IReverseRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IReverseRegistry.sol)

**Implemented by:**

- [UNSRegistry](uns-smart-contracts.md#unsregistry)

## Utility contracts

Utility contracts are generally used to share common functionality between other smart contracts. This list also includes some contracts that are used internally by the Unstoppable Domains team.

### KeyStorage

`KeyStorage` implements functions for adding and retrieving a set of keys which can be resolved from a domain.

**Source code:** [contracts/KeyStorage.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/KeyStorage.sol)

**Used by:**

- [UNSRegistry](uns-smart-contracts.md#unsregistry)

### RecordStorage

`RecordStorage` implements functions for adding and retrieving records from a domain.

**Source code:** [contracts/RecordStorage.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/RecordStorage.sol)

**Used by:**

- [UNSRegistry](uns-smart-contracts.md#unsregistry)

### MinterRole

`MinterRole` is an extension of Open Zeppelin's `AccessControlUpgradeable` that adds operations for adding and removing minting accounts.

**Source code:** [contracts/roles/MinterRole.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/roles/MinterRole.sol)

**Used by:**

- [MintingManager.sol](uns-smart-contracts.md#mintingmanager)

### MultiSend

The `MultiSend` smart contract is used internally by the Unstoppable Domains team to fund worker accounts.

**Source code:** [contracts/utils/MultiSend.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/utils/MultiSend.sol)

### Pausable

The `Pausable` smart contract is used internally by the Unstoppable Domains team to pause the minting of domains in case of emergencies (hacks).

**Source code:** [contracts/utils/Pausable.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/utils/Pausable.sol)

**Used by:**

- [MintingManager.sol](uns-smart-contracts.md#mintingmanager)

### Strings

The `Strings` smart contract implements functions to work with string data type in contracts. It simplifies things like splitting domain names to label and extension.

**Source code:** [contracts/utils/Strings.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/utils/Strings.sol)

**Used by:**

- [MintingManager.sol](uns-smart-contracts.md#mintingmanager)

### Blocklist

The `Blocklist` smart contract is used internally by the Unstoppable Domains team to block accounts from minting domains.

**Source code:** [contracts/utils/Blocklist.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/utils/Blocklist.sol)

**Used by:**

- [MintingManager.sol](uns-smart-contracts.md#mintingmanager)
