---
title: UNS Smart Contracts | Unstoppable Domains Developer Portal
description: This page provides brief descriptions with links to source code and deployment addresses for the Unstoppable Name Service smart contracts.
editPage:
  disable: true
---
# UNS Smart Contracts

Unstoppable Name Service (UNS) is built on Ethereum and is effectively a bundle of Solidity Smart Contracts that lives on the blockchain. The Unstoppable Domains team maintains the source code. This page lists the smart contracts from the [UNS repository](https://github.com/unstoppabledomains/uns), gives a brief description, and links to the source code and deployment addresses. For high-level details about how UNS works, see the [UNS Architecture Overview](/getting-started/domain-registry-essentials/uns-architecture-overview.md).

This page is divided into sections, grouping contracts by the following categories:

* [User-facing contracts](uns-smart-contracts.md#user-facing-contracts)
* [Registry controllers](uns-smart-contracts.md#registry-controllers)
* [Interfaces](uns-smart-contracts.md#interfaces)
* [Utility contracts](uns-smart-contracts.md#utility-contracts)

## User-facing contracts

This section lists all the smart contracts that members can directly interact with.

### UNSRegistry

`Registry` is the most essential smart contract in UNS. This is the contract that defines ownership rules, how domains are minted, provides [ERC-721 token metadata](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#IERC721Metadata), and stores a metadata-enriched list of all domains. This is where domain owners store their data, such as cryptocurrency addresses, chat IDs, and IPFS hashes for decentralized websites.

Under the surface, Registry is effectively a map of domain namehashes to key-value dictionaries of records. This structure allows members to store arbitrary records, even those that aren't specified by the [Records reference](/developer-toolkit/reference/records-reference.md).

| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0x049aba7510f45BA5b64ea9E658E342F904DB358D](https://etherscan.io/address/0x049aba7510f45BA5b64ea9E658E342F904DB358D) | [0x049aba7510f45BA5b64ea9E658E342F904DB358D](https://etherscan.io/address/0x049aba7510f45BA5b64ea9E658E342F904DB358D) |
| Ethereum testnet (Goerli) | [0x070e83FCed225184E67c86302493ffFCDB953f71](https://goerli.etherscan.io/address/0x070e83FCed225184E67c86302493ffFCDB953f71) | [0x070e83FCed225184E67c86302493ffFCDB953f71](https://goerli.etherscan.io/address/0x070e83FCed225184E67c86302493ffFCDB953f71) |
| Polygon mainnet | [0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f](http://polygonscan.com/address/0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f) | [0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f](http://polygonscan.com/address/0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f) |
| Polygon testnet (Mumbai) | [0x2a93C52E7B6E7054870758e15A1446E769EdfB93](https://mumbai.polygonscan.com/address/0x2a93C52E7B6E7054870758e15A1446E769EdfB93) | [0x2a93C52E7B6E7054870758e15A1446E769EdfB93](https://mumbai.polygonscan.com/address/0x2a93C52E7B6E7054870758e15A1446E769EdfB93) |

**Source code:** [contracts/UnsRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/UNSRegistry.sol)

### ProxyReader

`ProxyReader` provides an interface that allows members to fetch information about domains from both `UNSRegistry` and CNS smart contracts in one call. For more details, see [Architecture overview - ProxyReader](/getting-started/domain-registry-essentials/uns-architecture-overview.md#proxyreader).

| Network                  | Contract address                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Ethereum mainnet                  | [0x58034A288D2E56B661c9056A0C27273E5460B63c](https://etherscan.io/address/0x58034A288D2E56B661c9056A0C27273E5460B63c)           |
| Ethereum testnet (Goerli)                  | [0xE3b961856C417d081a02cBa0161a051268F52677](https://goerli.etherscan.io/address/0xE3b961856C417d081a02cBa0161a051268F52677)   |
| Polygon mainnet          | [0x423F2531bd5d3C3D4EF7C318c2D1d9BEDE67c680](http://polygonscan.com/address/0x423F2531bd5d3C3D4EF7C318c2D1d9BEDE67c680)        |
| Polygon testnet (Mumbai) | [0x6fe7c857C1B0E54492C8762f27e0a45CA7ff264B](https://mumbai.polygonscan.com/address/0x6fe7c857C1B0E54492C8762f27e0a45CA7ff264B) |



| Network | Legacy addresses                                                                                                                                                                                                                                                                                                                                                                          |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ethereum mainnet | [0xfEe4D4F0aDFF8D84c12170306507554bC7045878](https://etherscan.io/address/0xfEe4D4F0aDFF8D84c12170306507554bC7045878) </br>[0xa6E7cEf2EDDEA66352Fd68E5915b60BDbb7309f5](https://etherscan.io/address/0xa6E7cEf2EDDEA66352Fd68E5915b60BDbb7309f5) </br>[0x7ea9Ee21077F84339eDa9C80048ec6db678642B1](https://etherscan.io/address/0x7ea9Ee21077F84339eDa9C80048ec6db678642B1)                         |
| Ethereum testnet (Goerli) | [0xFc5f608149f4D9e2Ed0733efFe9DD57ee24BCF68](https://goerli.etherscan.io/address/0xFc5f608149f4D9e2Ed0733efFe9DD57ee24BCF68) |

**Source code:** [contracts/ProxyReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/ProxyReader.sol)

### ProxyAdmin


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0xAA16DA78110D9A9742c760a1a064F28654Ab93de](https://etherscan.io/address/0xAA16DA78110D9A9742c760a1a064F28654Ab93de) | &mdash; |
| Ethereum testnet (Goerli) | [0xf4906E210523F9dA79E33811A44EE000441F4E04](https://goerli.etherscan.io/address/0xf4906E210523F9dA79E33811A44EE000441F4E04) | &mdash; |
| Polygon mainnet | [0xe1D668052D52388F52b90f4d1798DB2b04bC3b88](http://polygonscan.com/address/0xe1D668052D52388F52b90f4d1798DB2b04bC3b88) | &mdash; |
| Polygon testnet (Mumbai) | [0x460d63117c7Ab1624b7474C45BF46eC6702f57ce](https://mumbai.polygonscan.com/address/0x460d63117c7Ab1624b7474C45BF46eC6702f57ce) | &mdash; |

### Resolver


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0xb66DcE2DA6afAAa98F2013446dBCB0f4B0ab2842](https://etherscan.io/address/0xb66DcE2DA6afAAa98F2013446dBCB0f4B0ab2842) | [0xc33aBEe943be2A2DA50708bAb61F47d581ee450d](https://etherscan.io/address/0xc33aBEe943be2A2DA50708bAb61F47d581ee450d) |
| Ethereum testnet (Goerli) | [0x0555344A5F440Bd1d8cb6B42db46c5e5D4070437](https://goerli.etherscan.io/address/0x0555344A5F440Bd1d8cb6B42db46c5e5D4070437) | [0xFCc1A95B7287Ae7a8B7cA813F12991dF5714d4C7](https://goerli.etherscan.io/address/0xFCc1A95B7287Ae7a8B7cA813F12991dF5714d4C7) |
| Polygon mainnet | &mdash; | &mdash; |
| Polygon testnet (Mumbai) | &mdash; | &mdash; |

### FreeMinter


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0x1fC985cAc641ED5846b631f96F35d9b48Bc3b834](https://etherscan.io/address/0x1fC985cAc641ED5846b631f96F35d9b48Bc3b834) | &mdash; |
| Ethereum testnet (Goerli) | &mdash; | &mdash; |
| Polygon mainnet | &mdash; | &mdash; |
| Polygon testnet (Mumbai) | &mdash; | &mdash; |

### MintableERC721Predicate


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0x932532aA4c0174b8453839A6E44eE09Cc615F2b7](https://etherscan.io/address/0x932532aA4c0174b8453839A6E44eE09Cc615F2b7) | &mdash; |
| Ethereum testnet (Goerli) | [0x56E14C4C1748a818a5564D33cF774c59EB3eDF59](https://goerli.etherscan.io/address/0x56E14C4C1748a818a5564D33cF774c59EB3eDF59) | &mdash; |
| Polygon mainnet | &mdash; | &mdash; |
| Polygon testnet (Mumbai) | &mdash; | &mdash; |

### RootChainManager


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0xA0c68C638235ee32657e8f720a23ceC1bFc77C77](https://etherscan.io/address/0xA0c68C638235ee32657e8f720a23ceC1bFc77C77) | &mdash; |
| Ethereum testnet (Goerli) | [0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74](https://goerli.etherscan.io/address/0xBbD7cBFA79faee899Eaf900F13C9065bF03B1A74) | &mdash; |
| Polygon mainnet | &mdash; | &mdash; |
| Polygon testnet (Mumbai) | &mdash; | &mdash; |

## Registry controllers

The Unstoppable Domains team reserves the right to mint second-level domains and edit some `Registry` settings, such as token URI prefix. To avoid giving anyone absolute admin rights, `Registry` utilizes controllers that implement a limited set of admin actions.

### MintingManager

`MintingManager` defines an interface for minting second-level domains. This smart contract is primarily used by the Unstoppable Domains team, but its interface also supports delegating minting process to other parties via [Meta Transactions](/manage-domains/delegating-transactions.md). All calls to `MintingManager` are proxied to the `UNSRegistry` via the [MintingManager](uns-smart-contracts.md#mintingmanager) smart contract.

| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0x2a7084870bB724175a3C96Da8FaA55128fa3E19D](https://etherscan.io/address/0x2a7084870bB724175a3C96Da8FaA55128fa3E19D) | [0xb970fbCF52cd8111c76c379D4f2FE12E7f8AE7fb](https://etherscan.io/address/0xb970fbCF52cd8111c76c379D4f2FE12E7f8AE7fb) |
| Ethereum testnet (Goerli) | [0x9ee42D3EB042e06F8Cd241890C4fA0d51e4DA345](https://goerli.etherscan.io/address/0x9ee42D3EB042e06F8Cd241890C4fA0d51e4DA345) | [0x7F9F48cF94C69ce91D4b442DA186F31118ac0185](https://goerli.etherscan.io/address/0x7F9F48cF94C69ce91D4b442DA186F31118ac0185) |
| Polygon mainnet | [0x7be83293BeeDc9Eba1bd76c66A65F10F3efaeC26](http://polygonscan.com/address/0x7be83293BeeDc9Eba1bd76c66A65F10F3efaeC26) | [0xC37d3c4326ab0E1D2b9D8b916bBdf5715f780fcF](http://polygonscan.com/address/0xC37d3c4326ab0E1D2b9D8b916bBdf5715f780fcF) |
| Polygon testnet (Mumbai) | [0x428189346bb3CC52f031A1092fd47C919AC30A9f](https://mumbai.polygonscan.com/address/0x428189346bb3CC52f031A1092fd47C919AC30A9f) | [0xEf3a491A8750BEC2Dff5339CF6Df94436d432C4d](https://mumbai.polygonscan.com/address/0xEf3a491A8750BEC2Dff5339CF6Df94436d432C4d) |

**Source code:** [contracts/MintingManager.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/MintingManager.sol)

### SignatureController


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0x82EF94294C95aD0930055f31e53A34509227c5f7](https://etherscan.io/address/0x82EF94294C95aD0930055f31e53A34509227c5f7) | &mdash; |
| Ethereum testnet (Goerli) | [0x5199dAE4B24B987ba18FcE1b64664D1B798d372B](https://goerli.etherscan.io/address/0x5199dAE4B24B987ba18FcE1b64664D1B798d372B) | &mdash; |
| Polygon mainnet | &mdash; | &mdash; |
| Polygon testnet (Mumbai) | &mdash; | &mdash; |

### MintingController


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0xb0EE56339C3253361730F50c08d3d7817ecD60Ca](https://etherscan.io/address/0xb0EE56339C3253361730F50c08d3d7817ecD60Ca) | &mdash; |
| Ethereum testnet (Goerli) | [0xCEC41677be322049cC885c0DAe2fE0D52CA195ca](https://goerli.etherscan.io/address/0xCEC41677be322049cC885c0DAe2fE0D52CA195ca) | &mdash; |
| Polygon mainnet | &mdash; | &mdash; |
| Polygon testnet (Mumbai) | &mdash; | &mdash; |

### WhitelistedMinter


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0xd3fF3377b0ceade1303dAF9Db04068ef8a650757](https://etherscan.io/address/0xd3fF3377b0ceade1303dAF9Db04068ef8a650757) | &mdash; |
| Ethereum testnet (Goerli) | &mdash; | &mdash; |
| Polygon mainnet | &mdash; | &mdash; |
| Polygon testnet (Mumbai) | &mdash; | &mdash; |

### URIPrefixController


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0x09B091492759737C03da9dB7eDF1CD6BCC3A9d91](https://etherscan.io/address/0x09B091492759737C03da9dB7eDF1CD6BCC3A9d91) | &mdash; |
| Ethereum testnet (Goerli) | [0x29465e3d2daA588E62375977bCe9b3f51406a794](https://goerli.etherscan.io/address/0x29465e3d2daA588E62375977bCe9b3f51406a794) | &mdash; |
| Polygon mainnet | &mdash; | &mdash; |
| Polygon testnet (Mumbai) | &mdash; | &mdash; |

### DomainZoneController


| Network | Contract address | Forwarder |
| - | - | - |
| Ethereum mainnet | [0xeA70777e28E00E81f58b8921fC47F78B8a72eFE7](https://etherscan.io/address/0xeA70777e28E00E81f58b8921fC47F78B8a72eFE7) | &mdash; |
| Ethereum testnet (Goerli) | &mdash; | &mdash; |
| Polygon mainnet | &mdash; | &mdash; |
| Polygon testnet (Mumbai) | &mdash; | &mdash; |

## Interfaces

The following interfaces can be used as guidelines for the minimal implementation of custom smart contract versions. Also, Solidity developers can rely on them for making calls to the official CNS smart contracts.

### IDataReader

The `IDataReader` interface declares the methods that are unique to the `ProxyReader` smart contract, which returns combined data from the `Registry` and `Resolver` contracts.

**Source code:** [contracts/IDataReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IDataReader.sol)

**Implemented by:**

* [ProxyReader](uns-smart-contracts.md#proxyreader)

### IMintingManager

The `IMintingManager` interface declares a set of methods for minting second level domains.

**Source code:** [contracts/IMintingManager.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IMintingManager.sol)

**Implemented by:**

* [MintingManager](uns-smart-contracts.md#mintingmanager)

### IRecordReader

The `IRecordReader` interface declares read methods for resolution data.

**Source code:** [contracts/IRecordReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IRecordReader.sol)

**Implemented by:**

* [ProxyReader](uns-smart-contracts.md#proxyreader)
* [UNSRegistry](uns-smart-contracts.md#unsregistry)

### IRecordStorage

The `IRecordStorage` interface declares write methods for resolution data.

**Source code:** [contracts/IRecordStorage.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IRecordStorage.sol)

**Implemented by:**

* [UNSRegistry](uns-smart-contracts.md#unsregistry)

### IRegistryReader

The `IRegistryReader` interface declares only read-only `Registry` methods.

**Source code:** [contracts/IRegistryReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IRegistryReader.sol)

**Implemented by:**

* [ProxyReader](uns-smart-contracts.md#proxyreader)

### IUNSRegistry

The `IUNSRegistry` interface declares all the `UNSRegistry` events and methods (both read and write).

**Source code:** [contracts/IUNSRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IUNSRegistry.sol)

**Implemented by:**

* [UNSRegistry](uns-smart-contracts.md#unsregistry)

### IRootRegistry

The `IRootRegistry` interface declares a set of methods for depositing and withdrawing (bridging tokens and records) to Polygon.

**Source code:** [contracts/IRootRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IRootRegistry.sol)

**Implemented by:**

* [RootChainManager](uns-smart-contracts.md#rootchainmanager)

### IReverseRegistry

The `IReverseRegistry` interface declares a set of events and methods for managing Reverse Resolution records (both read and write).

**Source code:** [contracts/IReverseRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/IReverseRegistry.sol)

**Implemented by:**

* [UNSRegistry](uns-smart-contracts.md#unsregistry)

## Utility contracts

Utility contracts are generally used to share common functionality between other smart contracts. This list also includes some contracts that are used internally by the Unstoppable Domains team.

### KeyStorage

`KeyStorage` implements functions for adding and retrieving a set of keys which can be resolved from a domain.

**Source code:** [contracts/KeyStorage.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/KeyStorage.sol)

**Used by:**

* [UNSRegistry](uns-smart-contracts.md#unsregistry)

### RecordStorage

`RecordStorage` implements functions for adding and retrieving records from a domain.

**Source code:** [contracts/RecordStorage.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/RecordStorage.sol)

**Used by:**

* [UNSRegistry](uns-smart-contracts.md#unsregistry)

### MinterRole

`MinterRole` is an extension of Open Zeppelin's `AccessControlUpgradeable` that adds operations for adding and removing minting accounts.

**Source code:** [contracts/roles/MinterRole.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/roles/MinterRole.sol)

**Used by:**

* [MintingManager.sol](uns-smart-contracts.md#mintingmanager)

### MultiSend

The `MultiSend` smart contract is used internally by the Unstoppable Domains team to fund worker accounts.

**Source code:** [contracts/utils/MultiSend.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/utils/MultiSend.sol)

### Pausable

The `Pausable` smart contract is used internally by the Unstoppable Domains team to pause the minting of domains in case of emergencies (hacks).

**Source code:** [contracts/utils/Pausable.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/utils/Pausable.sol)

**Used by:**

* [MintingManager.sol](uns-smart-contracts.md#mintingmanager)
