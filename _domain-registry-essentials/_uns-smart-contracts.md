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

Under the surface, Registry is effectively a map of domain namehashes to key-value dictionaries of records. This structure allows users to store arbitrary records, even those that aren't specified by the [Records reference](/developer-toolkit/reference/records-reference.md).

[comment]: <> (This is an auto-generated table with CNS smart-contract addresses. See README for more info.)
    <table>
        <th>Network</th>
        <th>Contract address</th>
        <tr>
            <td>Mainnet</td>
            <td><a href="https://etherscan.io/address/0x049aba7510f45BA5b64ea9E658E342F904DB358D">0x049aba7510f45BA5b64ea9E658E342F904DB358D</a></td>
        </tr>
        <tr>
            <td>Goerli</td>
            <td><a href="https://goerli.etherscan.io/address/0x070e83FCed225184E67c86302493ffFCDB953f71">0x070e83FCed225184E67c86302493ffFCDB953f71</a></td>
        </tr>
        <tr>
            <td>Polygon mainnet</td>
            <td><a href="https://polygonscan.com/address/0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f">0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f</a></td>
        </tr>
        <tr>
            <td>Polygon testnet (Mumbai)</td>
            <td><a href="https://mumbai.polygonscan.com/address/0x2a93C52E7B6E7054870758e15A1446E769EdfB93">0x2a93C52E7B6E7054870758e15A1446E769EdfB93</a></td>
        </tr>
    </table>


**Source code:** [contracts/UnsRegistry.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/UNSRegistry.sol)

### ProxyReader

`ProxyReader` provides an interface that allows users to fetch information about domains from both `UNSRegistry` and CNS smart contracts in one call. For more details, see [Architecture overview - ProxyReader](architecture-overview.md#proxyreader).

[comment]: <> (This is an auto-generated table with CNS smart-contract addresses. See README for more info.)
    <table>
        <th>Network</th>
        <th>Contract address</th>
        <tr>
            <td>Mainnet</td>
            <td><a href="https://etherscan.io/address/0x1BDc0fD4fbABeed3E611fd6195fCd5d41dcEF393">0x1BDc0fD4fbABeed3E611fd6195fCd5d41dcEF393</a></td>
        </tr>
        <tr>
            <td>Goerli</td>
            <td><a href="https://goerli.etherscan.io/address/0xE3b961856C417d081a02cBa0161a051268F52677">0xE3b961856C417d081a02cBa0161a051268F52677</a></td>
        </tr>
        <tr>
            <td>Polygon mainnet</td>
            <td><a href="https://polygonscan.com/address/0x3E67b8c702a1292d1CEb025494C84367fcb12b45">0x3E67b8c702a1292d1CEb025494C84367fcb12b45</a></td>
        </tr>
        <tr>
            <td>Polygon testnet (Mumbai)</td>
            <td><a href="https://mumbai.polygonscan.com/address/0x6fe7c857C1B0E54492C8762f27e0a45CA7ff264B">0x6fe7c857C1B0E54492C8762f27e0a45CA7ff264B</a></td>
        </tr>
    </table>
    <br>
    <table>
        <th>Network</th>
        <th>Legacy addresses</th>
        <tr>
            <td>Mainnet</td>
            <td><a
                    href="https://etherscan.io/address/0x58034A288D2E56B661c9056A0C27273E5460B63c">0x58034A288D2E56B661c9056A0C27273E5460B63c</a>
                <a
                    href="https://etherscan.io/address/0xc3C2BAB5e3e52DBF311b2aAcEf2e40344f19494E">0xc3C2BAB5e3e52DBF311b2aAcEf2e40344f19494E</a>
                <a
                    href="https://etherscan.io/address/0xfEe4D4F0aDFF8D84c12170306507554bC7045878">0xfEe4D4F0aDFF8D84c12170306507554bC7045878</a>
                <a
                    href="https://etherscan.io/address/0xa6E7cEf2EDDEA66352Fd68E5915b60BDbb7309f5">0xa6E7cEf2EDDEA66352Fd68E5915b60BDbb7309f5</a>
                <a
                    href="https://etherscan.io/address/0x7ea9Ee21077F84339eDa9C80048ec6db678642B1">0x7ea9Ee21077F84339eDa9C80048ec6db678642B1</a>
            </td>
    </tr>
        <tr>
            <td>Goerli</td>
            <td><a
                    href="https://goerli.etherscan.io/address/0x9A70ff906D422C2FD0F7B94244D6b36DB62Ee982">0x9A70ff906D422C2FD0F7B94244D6b36DB62Ee982</a>
                <a
                    href="https://goerli.etherscan.io/address/0xFc5f608149f4D9e2Ed0733efFe9DD57ee24BCF68">0xFc5f608149f4D9e2Ed0733efFe9DD57ee24BCF68</a>
            </td>
    </tr>
        <tr>
            <td>Polygon mainnet</td>
            <td><a
                    href="https://polygonscan.com/address/0x423F2531bd5d3C3D4EF7C318c2D1d9BEDE67c680">0x423F2531bd5d3C3D4EF7C318c2D1d9BEDE67c680</a>
                <a
                    href="https://polygonscan.com/address/0xA3f32c8cd786dc089Bd1fC175F2707223aeE5d00">0xA3f32c8cd786dc089Bd1fC175F2707223aeE5d00</a>
            </td>
    </tr>
        <tr>
            <td>Polygon testnet (Mumbai)</td>
            <td><a
                    href="https://mumbai.polygonscan.com/address/0xbd9e01F6513E7C05f71Bf21d419a3bDF1EA9104b">0xbd9e01F6513E7C05f71Bf21d419a3bDF1EA9104b</a>
                <a
                    href="https://mumbai.polygonscan.com/address/0x332A8191905fA8E6eeA7350B5799F225B8ed30a9">0x332A8191905fA8E6eeA7350B5799F225B8ed30a9</a>
            </td>
    </tr>
    </table>


**Source code:** [contracts/ProxyReader.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/ProxyReader.sol)

### TwitterValidationOperator

`TwitterValidationOperator` is used when initiating Chainlink verification requests to link domain records with Twitter usernames.

[comment]: <> (This is an auto-generated table with CNS smart-contract addresses. See README for more info.)
    <table>
        <th>Network</th>
        <th>Contract address</th>
        <tr>
            <td>Mainnet</td>
            <td><a href="https://etherscan.io/address/0x2F659766E3D08561CA3408FbAba7C0749ab2c402">0x2F659766E3D08561CA3408FbAba7C0749ab2c402</a></td>
        </tr>
        <tr>
            <td>Goerli</td>
            <td><a href="https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000">0x0000000000000000000000000000000000000000</a></td>
        </tr>
        <tr>
            <td>Polygon mainnet</td>
            <td><a href="https://polygonscan.com/address/0x0000000000000000000000000000000000000000">0x0000000000000000000000000000000000000000</a></td>
        </tr>
        <tr>
            <td>Polygon testnet (Mumbai)</td>
            <td><a href="https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000">0x0000000000000000000000000000000000000000</a></td>
        </tr>
    </table>
    <br>
    <table>
        <th>Network</th>
        <th>Legacy addresses</th>
        <tr>
            <td>Mainnet</td>
            <td><a
                    href="https://etherscan.io/address/0xbb486C6E9cF1faA86a6E3eAAFE2e5665C0507855">0xbb486C6E9cF1faA86a6E3eAAFE2e5665C0507855</a>
            </td>
    </tr>
    </table>


**Source code:** [contracts/operators/TwitterValidationOperator.sol](https://github.com/unstoppabledomains/uns/blob/main/contracts/operators/TwitterValidationOperator.sol)

## Registry controllers

The Unstoppable Domains team reserves the right to mint second-level domains and edit some `Registry` settings, such as token URI prefix. To avoid giving anyone absolute admin rights, `Registry` utilizes controllers that implement a limited set of admin actions.

### MintingManager

`MintingManager` defines an interface for minting second-level domains. This smart contract is primarily used by the Unstoppable Domains team, but its interface also supports delegating minting process to other parties via [Meta Transactions](../managing-domains/meta-transactions.md). All calls to `MintingManager` are proxied to the `UNSRegistry` via the [MintingManager](uns-smart-contracts.md#mintingmanager) smart contract.

[comment]: <> (This is an auto-generated table with CNS smart-contract addresses. See README for more info.)
    <table>
        <th>Network</th>
        <th>Contract address</th>
        <tr>
            <td>Mainnet</td>
            <td><a href="https://etherscan.io/address/0x2a7084870bB724175a3C96Da8FaA55128fa3E19D">0x2a7084870bB724175a3C96Da8FaA55128fa3E19D</a></td>
        </tr>
        <tr>
            <td>Goerli</td>
            <td><a href="https://goerli.etherscan.io/address/0x9ee42D3EB042e06F8Cd241890C4fA0d51e4DA345">0x9ee42D3EB042e06F8Cd241890C4fA0d51e4DA345</a></td>
        </tr>
        <tr>
            <td>Polygon mainnet</td>
            <td><a href="https://polygonscan.com/address/0x7be83293BeeDc9Eba1bd76c66A65F10F3efaeC26">0x7be83293BeeDc9Eba1bd76c66A65F10F3efaeC26</a></td>
        </tr>
        <tr>
            <td>Polygon testnet (Mumbai)</td>
            <td><a href="https://mumbai.polygonscan.com/address/0x428189346bb3CC52f031A1092fd47C919AC30A9f">0x428189346bb3CC52f031A1092fd47C919AC30A9f</a></td>
        </tr>
    </table>


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
