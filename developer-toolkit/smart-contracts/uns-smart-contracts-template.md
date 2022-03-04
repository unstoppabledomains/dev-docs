[comment]: <> (! Note: Do not modify src/domain-registry-essentials/uns-smart-contracts.md directly. Edit templates/uns-smart-contracts-template.md instead following rules from README.)
# UNS smart contracts

Unstoppable Name Service (UNS) is built on Ethereum and is effectively a bundle of Solidity smart contracts. Their source code is hosted in the [UNS repository](https://github.com/unstoppabledomains/uns) and maintained by the Unstoppable Domains team. This page lists the smart contracts from that repository and gives a brief description of each along with links to the source code and deployment addresses. For high-level details about how UNS works, see [UNS Architecture overview](uns-architecture-overview.md).

This page is divided into sections, grouping contracts by the following categories:

- [User-facing contracts](uns-smart-contracts.md#user-facing-contracts)
- [Registry controllers](uns-smart-contracts.md#registry-controllers)
- [Interfaces](uns-smart-contracts.md#interfaces)
- [Utility contracts](uns-smart-contracts.md#utility-contracts)

## User-facing contracts

This section lists all the smart contracts that users can directly interact with.

### UNSRegistry


`Registry` is the most essential smart contract in UNS. This is the contract that defines ownership rules, how domains are minted, provides [ERC-721 token metadata](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#IERC721Metadata), and stores a metadata-enriched list of all domains. This is where domain owners store their data, such as cryptocurrency addresses, chat IDs, and IPFS hashes for decentralized websites.

Under the surface, Registry is effectively a map of domain namehashes to key-value dictionaries of records. This structure allows users to store arbitrary records, even those that aren't specified by the [Records reference](records-reference.md).

#include "templates/contracts/uns/UNSRegistry.md"

**Source code:** [contracts/UnsRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/UNSRegistry.sol)

### ProxyReader

`ProxyReader` provides an interface that allows users to fetch information about domains from both `UNSRegistry` and CNS smart contracts in one call. For more details, see [Architecture overview - ProxyReader](architecture-overview.md#proxyreader).

#include "templates/contracts/uns/ProxyReader.md"

**Source code:** [contracts/ProxyReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/ProxyReader.sol)

### TwitterValidationOperator

`TwitterValidationOperator` is used when initiating Chainlink verification requests to link domain records with Twitter usernames.

#include "templates/contracts/uns/TwitterValidationOperator.md"

**Source code:** [contracts/operators/TwitterValidationOperator.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/operators/TwitterValidationOperator.sol)

## Registry controllers

The Unstoppable Domains team reserves the right to mint second-level domains and edit some `Registry` settings, such as token URI prefix. To avoid giving anyone absolute admin rights, `Registry` utilizes controllers that implement a limited set of admin actions.

### MintingManager

`MintingManager` defines an interface for minting second-level domains. This smart contract is primarily used by the Unstoppable Domains team, but its interface also supports delegating minting process to other parties via [Meta Transactions](../managing-domains/meta-transactions.md). All calls to `MintingManager` are proxied to the `UNSRegistry` via the [MintingManager](uns-smart-contracts.md#mintingmanager) smart contract.

#include "templates/contracts/uns/MintingManager.md"

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

### ERC677Receiver

The `ERC677Receiver` interface declares an ERC-677 method for receiving smart contracts.

**Source code:** [contracts/util/ERC677Receiver.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/util/ERC677Receiver.sol)

**Implemented by:**

- [TwitterValidationOperator.sol](uns-smart-contracts.md#twittervalidationoperator)

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

### CapperRole

`CapperRole` is an extension of Open Zeppelin's `AccessControlUpgradeable` that adds operations for adding and removing capper accounts.

**Source code:** [contracts/roles/CapperRole.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/roles/CapperRole.sol)

**Used by:**

- [TwitterValidationOperator.sol](uns-smart-contracts.md#twittervalidationoperator)

### MinterRole

`MinterRole` is an extension of Open Zeppelin's `AccessControlUpgradeable` that adds operations for adding and removing minting accounts.

**Source code:** [contracts/roles/MinterRole.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/roles/MinterRole.sol)

**Used by:**

- [MintingManager.sol](uns-smart-contracts.md#mintingmanager)

### WhitelistedRole

`WhitelistedRole` is an extension of Open Zeppelin's `AccessControlUpgradeable` that adds operations for adding and removing whitelisted accounts.

**Source code:** [contracts/roles/WhitelistedRole.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/roles/WhitelistedRole.sol)

**Used by:**

- [TwitterValidationOperator.sol](uns-smart-contracts.md#twittervalidationoperator)

### MultiSend

The `MultiSend` smart contract is used internally by the Unstoppable Domains team to fund worker accounts.

**Source code:** [contracts/util/MultiSend.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/util/MultiSend.sol)
