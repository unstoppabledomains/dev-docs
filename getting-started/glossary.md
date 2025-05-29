---
title: Documentation Glossary | Unstoppable Domains Developer Portal
description: The glossary provides a list of definitions for terms, acronyms, and phrases used in the Unstoppable Domains developer documentation.
---

# Developer Documentation Glossary

The glossary provides a list of definitions for terms, acronyms, and phrases used in the Unstoppable Domains developer documentation to help its members understand common terminology.

### Burn

The process of permanently destroying and clearing all the associated [metadata](#metadata) and [records](#record) of a domain, so it is no longer available for purchase or [re-minting](#minting).

### Bridge

An interoperability protocol that allows tokens and arbitrary data to be transferred from one blockchain to another.

### CNS

Crypto Name Service (CNS) is the [name service](#name-service) handling `.crypto` domains on the Ethereum [mainnet](#mainnet). It is deprecated as new domains are minted on [UNS](#uns), which supports various domain endings besides `.crypto`.

### DApp

Decentralized Application (DApp), also known as Decentralized Website (D-Website), is an application or website that exist and run on a blockchain or peer-to-peer network of computers instead of a single computer and is outside the purview and control of a single authority. They are usually powered by [smart contracts](#smart-contract).

### Domain Actions API

An API service provided by Unstoppable Domains for generating transactions to interact with a domain on the blockchain. It allows partners to perform actions such as updating domain records, configuring reverse resolution, or transferring domain ownership with a single API request, without having to handle the complex details of forming transactions on the client.

### Domain Ending

Also known as TLD or domain extension, it is the last segment of a domain name or the part that follows immediately after the `dot` (.) symbol, i.e., `.crypto`, `.nft`, `.x`.

### Domain Resolution

The process of retrieving the [records](#record) associated with a Web3 domain, i.e., cryptocurrency addresses, chat IDs, and IPFS hashes for [decentralized websites](#dapp).

### Ethereum Provider

A computer running the Ethereum client software responsible for mining Ethereum, verifying transactions on the blockchain, and keeping the network secure and accurate data.

### Gas

A fee or pricing value paid by a user to successfully conduct a transaction or execute a [smart contract](#smart-contract) on the blockchain. This fee depends upon the transaction’s complexity and the current demand on the network.

### Gas Compensation Policy

A set of rules that determine how transaction fees ([gas](#gas)) are paid when executing a domain action on the blockchain.

### Humanity Check

A feature provided by Unstoppable Domains which allows an application to anonymously verify their users' personal information using their [Web3 domains](#web3-domain) without revealing their identity.

### IPFS

InterPlanetary File System (IPFS) is a protocol and peer-to-peer network for storing and accessing files, websites, applications, and data in a distributed file system.

### L1

Layer 1 (L1) is the blockchain platform itself, also referred to as the base layer, mainchain, or [mainnet](#mainnet), i.e., Bitcoin, Ethereum, Cardano, Litecoin, Solana, Polkadot.

### L2

Layer 2 (L2) is a secondary framework or protocol built on top of an existing [Layer 1](#l1) blockchain. They are commonly used to improve scalability, privacy, and cross-chain communication. Unlike sidechains, which use their consensus mechanisms, Layer 2 protocols are secured by their underlying blockchain, i.e., Lightning Network, Optimism, Arbitrum.

### Mainnet

This is the main blockchain protocol that is fully developed and deployed, meaning that cryptocurrency transactions are being broadcasted, verified, and recorded here.

### Metadata

A collection of data provides information about one or more aspects of another data, but not the content itself. It is used to summarize basic information about data which can make tracking and working with specific data easier, i.e., social media profiles of a person.

### Minting

The process of validating information, such as domain ownership, and registering that onto the blockchain.

### MintingManager

The [naming service](#name-service) [smart contract](#smart-contract) that manages the minting of second-level domains. The Unstoppable Domains team primarily uses the MintingManager, but its interface also supports delegating the minting process to other parties.

### Name Service

A bundle of [smart contracts](#smart-contract) hosted on the blockchain responsible for defining domain ownership rules, storing domain [records](#record) and [metadata](#metadata), [minting](#minting), [resolving](#domain-resolution), and [burning](#burn) domains.

### Namehash

A hexadecimal representation of the [unique identifier](#token-id) of a domain. It is produced by the [namehashing](#namehashing) algorithm.

### Namehashing

A one-way algorithm that converts a domain name like `example.crypto` into an ERC-721 token ID so [smart contracts](#smart-contract) can understand it.

### Web3 Domain

The domain names [minted](#minting) on the blockchain which allow people to govern their data, set their Web3 username, take control of their digital worlds, and harness the power of the internet.

### Oracle

A service that supplies [smart contracts](#smart-contract) with data from the outside world (such as real-world data from weather to stocks). Smart contracts cannot access off-chain data, so they rely on oracles to retrieve, verify, and provide external information, i.e., Chainlink and Band Protocol.

### Partner

A user authorized by Unstoppable Domains to [sell domains to users](/domain-distribution-and-management/overview.md) in their applications.

### Partner API

An API service maintained by Unstoppable Domains for Partners to [mint](#minting) free and paid domains, check the availability of domain names, reserve domains for users, and get domain name suggestions available for purchase.

### ProxyReader

The [naming service](#name-service) [smart contract](#smart-contract) that allows members to fetch information about domains from both [UNSRegistry](#registry) and [CNS](#cns) smart contracts in one call.

### Record

The data associated with a [Web3 domain](#web3-domain), i.e., cryptocurrency addresses, chat IDs, and IPFS hashes for [decentralized websites](#dapp). It is stored as a key-value dictionary by the domain on the blockchain.

### Registry

The [naming service](#name-service) [smart contract](#smart-contract) that manages domain ownership, minting domains, storing domain [metadata](#metadata), and [burning](#burn) domains. The registry also stores and manages domain [records](#record) in the [Unstoppable Name Service (UNS)](#uns).

### Resolution Library

A set of libraries and SDK's maintained by Unstoppable Domains for interacting with [Web3 domain names](#web3-domain). The Resolution Libraries retrieve payment addresses, [IPFS hashes](#ipfs) for decentralized websites, DNS records, and other [record](#record) types.

### Resolution Service

An API service maintained by Unstoppable Domains for getting domain data and [metadata](#metadata). It allows you to build applications directly communicating with the blockchain to get UD domain data with a single API request.

### Resolver

The [Crypto Name Service (CNS)](#cns) [smart contract](#smart-contract) that is responsible for storing, updating, and resolving domain [records](#record).

### Reverse Resolution

A feature that enables applications that integrate with Unstoppable Domains to show domain names where they would typically only show addresses.

### Sandbox

A controlled environment maintained by Unstoppable Domains for [Partners](#partner) to test their integrations before deploying them in production.

### Smart Contract

A smart contract is a contract whose terms are expressed as a computer program with logic and state persisted on the blockchain. Smart contracts can automatically carry out their terms and conditions with total transparency and no counterparty risk, allowing transactions without an intermediary figure and trust between the parties involved.

### Testnet

A software environment that mimics a [mainnet](#mainnet) blockchain. It is used to test network upgrades and [smart contracts](#smart-contract) before deploying them to the [mainnet](#mainnet).

### Token ID

The unique identifier of a domain name on the blockchain. It is defined as a part of the [EIP-137](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md#namehash-algorithm) standard and is used by [smart contracts](#smart-contract).

### UD

Short for Unstoppable Domains.

### UNS

Unstoppable Name Service (UNS) is the [name service](#name-service) handling the [minting](#minting) and management of [Web3 domains](#web3-domain) on the [Ethereum (L1)](#l1) and [Polygon (L2)](#l2) blockchains.

### ZNS

Zilliqa Name Service (ZNS) is the [name service](#name-service) handling `.zil` domains on the Zilliqa [mainnet](#mainnet).
