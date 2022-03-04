[comment]: <> (! Note: Do not modify src/domain-registry-essentials/cns-smart-contracts.md directly. Edit templates/cns-smart-contracts-template.md instead following rules from README.)
# CNS smart contracts

Crypto Name Service (CNS) is built on Ethereum and is effectively a bundle of Solidity smart contracts. Their source code is hosted in the [dot-crypto repository](https://github.com/unstoppabledomains/dot-crypto) and maintained by the Unstoppable Domains team. This page lists the smart contracts from that repository and gives a brief description of each along with links to the source code and deployment addresses. For high-level details about how CNS works, see [Architecture overview](architecture-overview.md).

This page is divided into sections, grouping contracts by the following categories:

- [User-facing contracts](cns-smart-contracts.md#user-facing-contracts)
- [Registry controllers](cns-smart-contracts.md#registry-controllers)
- [Interfaces](cns-smart-contracts.md#interfaces)
- [Utility contracts](cns-smart-contracts.md#utility-contracts)
- [Test smart contracts](cns-smart-contracts.md#test-smart-contracts)

## User-facing contracts

This section lists all the smart contracts that users can directly interact with.

### Registry

`Registry` is the central smart contract, which stores all CNS domains. Implementing the ERC-721 non-fungible token standard, `Registry` defines domain ownership rules. It stores owner and `Resolver` addresses. For more details, see [Architecture overview - Registry](architecture-overview.md#registry).

#include "templates/contracts/cns/Registry.md"

**Source code:** [contracts/Registry.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/Registry.sol)

### Resolver

`Resolver` is the smart contract that stores domain records and provides methods for domain resolution. For more details, see [Architecture overview - Resolver](architecture-overview.md#resolver).

#include "templates/contracts/cns/Resolver.md"

**Source code:** [contracts/Resolver.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/Resolver.sol)

### ProxyReader

`ProxyReader` provides an interface that allows users to fetch information about domains from both `Registry` and `Resolver` smart contracts in one call. For more details, see [Architecture overview - ProxyReader](architecture-overview.md#proxyreader).

#include "templates/contracts/cns/ProxyReader.md"

**Source code:** [contracts/ProxyReader.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/ProxyReader.sol)

### SignatureController

`SignatureController` allows any account to submit management transactions on behalf of a token owner if an owner provides a signature for that call.

#include "templates/contracts/cns/SignatureController.md"

**Source code:** [contracts/controllers/SignatureController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/SignatureController.sol)

### DomainZoneController

`DomainZoneController` allows owners of a domain zone to mint subdomains. These subdomains can be managed only by the domain zone owners. For more details, see [Architecture Overview - Alternative Ownership Models](architecture-overview.md#alternative-ownership-models).

#include "templates/contracts/cns/DomainZoneController.md"

**Source code:** [contracts/controllers/DomainZoneController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/DomainZoneController.sol)

### TwitterValidationOperator

`TwitterValidationOperator` is used when initiating Chainlink verification requests to link domain records with Twitter usernames.

#include "templates/contracts/cns/TwitterValidationOperator.md"

**Source code:** [contracts/operators/TwitterValidationOperator.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/operators/TwitterValidationOperator.sol)

## Registry controllers

The Unstoppable Domains team reserves the right to mint second-level domains and edit some `Registry` settings, such as token URI prefix. To avoid giving anyone absolute admin rights, `Registry` utilizes controllers that implement a limited set of admin actions.

### MintingController

The deployed version of the `Registry` smart contract only allows `MintingController` to mint second-level domains.

#include "templates/contracts/cns/MintingController.md"

**Source code:** [contracts/controllers/MintingController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/MintingController.sol)

### URIPrefixController

`URIPrefixController` enables the Unstoppable Domains team to edit the token URI prefix.

#include "templates/contracts/cns/URIPrefixController.md"

**Source code:** [contracts/controllers/URIPrefixController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/URIPrefixController.sol)

## Interfaces

The following interfaces can be used as guidelines for the minimal implementation of custom smart contract versions. Also, Solidity developers can rely on them for making calls to the official CNS smart contracts.

### IRegistry

The `IRegistry` interface declares all the `Registry` events and methods (both read and write).

**Source code:** [contracts/IRegistry.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/IRegistry.sol)

**Implemented by:**

- [Registry](cns-smart-contracts.md#registry)

### IRegistryReader

The `IRegistryReader` interface declares only read-only `Registry` methods.

**Source code:** [contracts/IRegistryReader.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/IRegistryReader.sol)

**Implemented by:**

- [Registry](cns-smart-contracts.md#registry)
- [ProxyReader](cns-smart-contracts.md#proxyreader)

### IResolver

The `IResolver` interface declares the minimal set of `Resolver` methods for configuring domain records.

**Source code:** [contracts/IResolver.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/IResolver.sol)

**Implemented by:**

- [Resolver](cns-smart-contracts.md#resolver)

### IResolverReader

The `IResolverReader` interface declares the set of methods for reading `Resolver` records.

**Source code:** [contracts/IResolverReader.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/IResolverReader.sol)

**Implemented by:**

- [Resolver](cns-smart-contracts.md#resolver)
- [ProxyReader](cns-smart-contracts.md#proxyreader)

### IDataReader

The `IDataReader` interface declares the methods that are unique to the `ProxyReader` smart contract, which returns combined data from the `Registry` and `Resolver` contracts.

**Source code:** [contracts/IDataReader.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/IDataReader.sol)

**Implemented by:**

- [ProxyReader](cns-smart-contracts.md#proxyreader)

### IMintingController

The `IMintingController` interface declares a set of methods for minting, which both `MintingController` implement.

**Source code:** [contracts/controllers/IMintingController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/IMintingController.sol)

**Implemented by:**

- [MintingController](cns-smart-contracts.md#mintingcontroller)

### ISignatureController

The `ISignatureController` interface declares the functions that are implemented by `SignatureController` to enable [Meta transactions](../managing-domains/meta-transactions.md) for the `Registry` smart contract.

**Source code:** [contracts/controllers/ISignatureController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/ISignatureController.sol)

**Implemented by:**

- [SignatureController](cns-smart-contracts.md#signaturecontroller)

### IURIPrefixController

The `IURIPrefixController` interface declares the functions that are implemented by `URIPrefixController`.

**Source code:** [contracts/controllers/IURIPrefixController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/IURIPrefixController.sol)

**Implemented by:**

- [URIPrefixController](cns-smart-contracts.md#uriprefixcontroller)

### ERC677Receiver

The `ERC677Receiver` interface declares an ERC-677 method for receiving smart contracts.

**Source code:** [contracts/util/ERC677Receiver.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/util/ERC677Receiver.sol)

**Implemented by:**

- [TwitterValidationOperator.sol](cns-smart-contracts.md#twittervalidationoperator)

## Utility contracts

Utility contracts are generally used to share common functionality between other smart contracts. This list also includes some contracts that are used internally by the Unstoppable Domains team.

### ControllerRole

The `ControllerRole` smart contract defines an Open Zeppelin [Role](https://docs.openzeppelin.com/contracts/2.x/access-control#using-roles), which is used by `Registry` to designate controllers.

**Source code:** [contracts/util/ControllerRole.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/util/ControllerRole.sol)

**Used by:**

- [Registry](cns-smart-contracts.md#registry)

### MultiSend

The `MultiSend` smart contract is used internally by the Unstoppable Domains team to fund worker accounts.

**Source code:** [contracts/util/MultiSend.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/util/MultiSend.sol)

### SignatureUtil

`SignatureUtil` is a helper smart contract. Its implementation is used to extend smart contracts that require [Meta Transactions](../managing-domains/meta-transactions.md).

**Source code:** [contracts/util/SignatureUtil.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/util/SignatureUtil.sol)

**Used by:**

- [Resolver](cns-smart-contracts.md#resolver)
- [SignatureController](cns-smart-contracts.md#signaturecontroller)

### Migrations

The [Truffle migrations](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations) smart contract.

**Source code:** [contracts/Migrations.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/Migrations.sol)

## Test smart contracts

There are several smart contracts that are used for testing purposes without being deployed to public networks or imported by other smart contracts.

### LinkTokenMock

The `LinkTokenMock` smart contract is used for testing [TwitterValidationOperator](cns-smart-contracts.md#twittervalidationoperator).

**Source code:** [contracts/test-helpers/LinkTokenMock.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/test-helpers/LinkTokenMock.sol)

### RelayTest

`RelayTest` is used for testing relaying functionality for [Meta Transactions](../managing-domains/meta-transactions.md).

**Source code:** [contracts/test-helpers/RelayTest.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/test-helpers/RelayTest.sol)

### Simple

The `Simple` smart contract is used for testing ERC-721 receiver validation checks.

**Source code:** [contracts/test-helpers/Simple.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/test-helpers/Simple.sol)
