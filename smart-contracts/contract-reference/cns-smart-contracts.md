---
title: CNS Smart Contract | Unstoppable Domains Developer Portal
description: This page provides brief descriptions with links to source code and deployment addresses for the Crypto Name Service smart contracts.
redirectFrom:
  - /developer-toolkit/reference/smart-contracts/cns-smart-contracts/
editPage:
  disable: true
---

# CNS Smart Contract

Crypto Name Service (CNS) is built on Ethereum and is effectively a bundle of Solidity smart contracts. Their source code is hosted in the [dot-crypto repository](https://github.com/unstoppabledomains/dot-crypto) and maintained by the Unstoppable Domains team. This page lists the smart contracts from that repository and gives a brief description of each along with links to the source code and deployment addresses. For high-level details about how CNS works, see [CNS Architecture overview](/getting-started/domain-registry-essentials/cns-architecture-overview.md).

This page is divided into sections, grouping contracts by the following categories:

- [User-facing contracts](cns-smart-contracts.md#user-facing-contracts)
- [Registry controllers](cns-smart-contracts.md#registry-controllers)
- [Interfaces](cns-smart-contracts.md#interfaces)
- [Utility contracts](cns-smart-contracts.md#utility-contracts)
- [Test smart contracts](cns-smart-contracts.md#test-smart-contracts)

## User-facing contracts

This section lists all the smart contracts that users can directly interact with.

### Registry

`Registry` is the central smart contract, which stores all CNS domains. Implementing the ERC-721 non-fungible token standard, `Registry` defines domain ownership rules. It stores owner and `Resolver` addresses. For more details, see [Architecture overview - Registry](/getting-started/domain-registry-essentials/cns-architecture-overview.md#registry).

:::info
This is an auto-generated table with CNS smart-contract addresses. See README for more info.
:::

<table>
    <th>Network</th>
    <th>Contract address</th>
    <tr>
        <td>Mainnet</td>
        <td><a href="https://etherscan.io/address/0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe">0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe</a></td>
    </tr>
    <tr>
        <td>Goerli</td>
        <td><a href="https://goerli.etherscan.io/address/0x801452cFAC27e79a11c6b185986fdE09e8637589">0x801452cFAC27e79a11c6b185986fdE09e8637589</a></td>
    </tr>
</table>

**Source code:** [contracts/Registry.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/Registry.sol)

### Resolver

`Resolver` is the smart contract that stores domain records and provides methods for domain resolution. For more details, see [Architecture overview - Resolver](/getting-started/domain-registry-essentials/cns-architecture-overview.md#resolver).

:::info
This is an auto-generated table with CNS smart-contract addresses. See README for more info.
:::

<table>
    <th>Network</th>
    <th>Contract address</th>
    <tr>
        <td>Mainnet</td>
        <td><a href="https://etherscan.io/address/0xb66DcE2DA6afAAa98F2013446dBCB0f4B0ab2842">0xb66DcE2DA6afAAa98F2013446dBCB0f4B0ab2842</a></td>
    </tr>
    <tr>
        <td>Goerli</td>
        <td><a href="https://goerli.etherscan.io/address/0x0555344A5F440Bd1d8cb6B42db46c5e5D4070437">0x0555344A5F440Bd1d8cb6B42db46c5e5D4070437</a></td>
    </tr>
</table>
<br>
<table>
    <th>Network</th>
    <th>Legacy addresses</th>
    <tr>
        <td>Mainnet</td>
           <td><a
                    href="https://etherscan.io/address/0xa1cac442be6673c49f8e74ffc7c4fd746f3cbd0d">0xa1cac442be6673c49f8e74ffc7c4fd746f3cbd0d</a>
               <a
                    href="https://etherscan.io/address/0x878bc2f3f717766ab69c0a5f9a6144931e61aed3">0x878bc2f3f717766ab69c0a5f9a6144931e61aed3</a>
            </td>
    </tr>
</table>

**Source code:** [contracts/Resolver.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/Resolver.sol)

### ProxyReader

`ProxyReader` provides an interface that allows users to fetch information about domains from both `Registry` and `Resolver` smart contracts in one call. For more details, see [Architecture overview - ProxyReader](/getting-started/domain-registry-essentials/cns-architecture-overview.md#proxyreader).

:::info
This is an auto-generated table with CNS smart-contract addresses. See README for more info.
:::

<table>
    <th>Network</th>
    <th>Contract address</th>
    <tr>
        <td>Mainnet</td>
        <td><a href="https://etherscan.io/address/0xa6E7cEf2EDDEA66352Fd68E5915b60BDbb7309f5">0xa6E7cEf2EDDEA66352Fd68E5915b60BDbb7309f5</a></td>
    </tr>
    <tr>
        <td>Goerli</td>
        <td><a href="https://goerli.etherscan.io/address/0x9A70ff906D422C2FD0F7B94244D6b36DB62Ee982">0x9A70ff906D422C2FD0F7B94244D6b36DB62Ee982</a></td>
    </tr>
</table>
<br>
<table>
    <th>Network</th>
    <th>Legacy addresses</th>
    <tr>
        <td>Mainnet</td>
           <td><a
                    href="https://etherscan.io/address/0x7ea9Ee21077F84339eDa9C80048ec6db678642B1">0x7ea9Ee21077F84339eDa9C80048ec6db678642B1</a>
            </td>
    </tr>
    <tr>
        <td>Goerli</td>
           <td><a
                    href="https://goerli.etherscan.io/address/0xFc5f608149f4D9e2Ed0733efFe9DD57ee24BCF68">0xFc5f608149f4D9e2Ed0733efFe9DD57ee24BCF68</a>
            </td>
    </tr>
</table>

**Source code:** [contracts/ProxyReader.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/ProxyReader.sol)

### SignatureController

`SignatureController` allows any account to submit management transactions on behalf of a token owner if an owner provides a signature for that call.

:::info
This is an auto-generated table with CNS smart-contract addresses. See README for more info.
:::

<table>
    <th>Network</th>
    <th>Contract address</th>
    <tr>
        <td>Mainnet</td>
        <td><a href="https://etherscan.io/address/0x82EF94294C95aD0930055f31e53A34509227c5f7">0x82EF94294C95aD0930055f31e53A34509227c5f7</a></td>
    </tr>
    <tr>
        <td>Goerli</td>
        <td><a href="https://goerli.etherscan.io/address/0x5199dAE4B24B987ba18FcE1b64664D1B798d372B">0x5199dAE4B24B987ba18FcE1b64664D1B798d372B</a></td>
    </tr>
</table>

**Source code:** [contracts/controllers/SignatureController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/SignatureController.sol)

### DomainZoneController

`DomainZoneController` allows owners of a domain zone to mint subdomains. These subdomains can be managed only by the domain zone owners. For more details, see [Architecture Overview - Alternative Ownership Models](/getting-started/domain-registry-essentials/cns-architecture-overview.md#alternative-ownership-models).

:::info
This is an auto-generated table with CNS smart-contract addresses. See README for more info.
:::

<table>
    <th>Network</th>
    <th>Contract address</th>
    <tr>
        <td>Mainnet</td>
        <td><a href="https://etherscan.io/address/0xeA70777e28E00E81f58b8921fC47F78B8a72eFE7">0xeA70777e28E00E81f58b8921fC47F78B8a72eFE7</a></td>
    </tr>
    <tr>
        <td>Goerli</td>
        <td><a href="https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000">0x0000000000000000000000000000000000000000</a></td>
    </tr>
</table>

**Source code:** [contracts/controllers/DomainZoneController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/DomainZoneController.sol)

### TwitterValidationOperator

`TwitterValidationOperator` is used when initiating Chainlink verification requests to link domain records with Twitter usernames.

:::info
This is an auto-generated table with CNS smart-contract addresses. See README for more info.
:::

<table>
    <th>Network</th>
    <th>Contract address</th>
    <tr>
        <td>Mainnet</td>
        <td><a href="https://etherscan.io/address/0xbb486C6E9cF1faA86a6E3eAAFE2e5665C0507855">0xbb486C6E9cF1faA86a6E3eAAFE2e5665C0507855</a></td>
    </tr>
    <tr>
        <td>Goerli</td>
        <td><a href="https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000">0x0000000000000000000000000000000000000000</a></td>
    </tr>
</table>

**Source code:** [contracts/operators/TwitterValidationOperator.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/operators/TwitterValidationOperator.sol)

## Registry controllers

The Unstoppable Domains team reserves the right to mint second-level domains and edit some `Registry` settings, such as token URI prefix. To avoid giving anyone absolute admin rights, `Registry` utilizes controllers that implement a limited set of admin actions.

### MintingController

The deployed version of the `Registry` smart contract only allows `MintingController` to mint second-level domains.

:::info
This is an auto-generated table with CNS smart-contract addresses. See README for more info.
:::

<table>
    <th>Network</th>
    <th>Contract address</th>
    <tr>
        <td>Mainnet</td>
        <td><a href="https://etherscan.io/address/0xb0EE56339C3253361730F50c08d3d7817ecD60Ca">0xb0EE56339C3253361730F50c08d3d7817ecD60Ca</a></td>
    </tr>
    <tr>
        <td>Goerli</td>
        <td><a href="https://goerli.etherscan.io/address/0xCEC41677be322049cC885c0DAe2fE0D52CA195ca">0xCEC41677be322049cC885c0DAe2fE0D52CA195ca</a></td>
    </tr>
</table>

**Source code:** [contracts/controllers/MintingController.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/controllers/MintingController.sol)

### URIPrefixController

`URIPrefixController` enables the Unstoppable Domains team to edit the token URI prefix.

:::info
This is an auto-generated table with CNS smart-contract addresses. See README for more info.
:::

<table>
    <th>Network</th>
    <th>Contract address</th>
    <tr>
        <td>Mainnet</td>
        <td><a href="https://etherscan.io/address/0x09B091492759737C03da9dB7eDF1CD6BCC3A9d91">0x09B091492759737C03da9dB7eDF1CD6BCC3A9d91</a></td>
    </tr>
    <tr>
        <td>Goerli</td>
        <td><a href="https://goerli.etherscan.io/address/0x29465e3d2daA588E62375977bCe9b3f51406a794">0x29465e3d2daA588E62375977bCe9b3f51406a794</a></td>
    </tr>
</table>

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

The `ISignatureController` interface declares the functions that are implemented by `SignatureController` to enable [Meta transactions](/manage-domains/delegating-transactions.md) for the `Registry` smart contract.

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

`SignatureUtil` is a helper smart contract. Its implementation is used to extend smart contracts that require [Meta Transactions](/manage-domains/delegating-transactions.md).

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

`RelayTest` is used for testing relaying functionality for [Meta Transactions](/manage-domains/delegating-transactions.md).

**Source code:** [contracts/test-helpers/RelayTest.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/test-helpers/RelayTest.sol)

### Simple

The `Simple` smart contract is used for testing ERC-721 receiver validation checks.

**Source code:** [contracts/test-helpers/Simple.sol](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/test-helpers/Simple.sol)
