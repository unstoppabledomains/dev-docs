---
title: Resolve Using Smart Contracts Guide | UD Developer Portal
description: This page explains the process for resolving domain records by making calls to Ethereum and Polygon smart contracts using Ethereum JSON RPC.
redirectFrom:
  - /developer-toolkit/resolution-integration-methods/direct-blockchain-calls/*
---

# Resolve Domains Using Smart Contracts

Resolving a domain is retrieving a domain's records when the domain name and required record names are given. There are no limits to who can read domain records on the Registry side. Anyone accessing a mainnet Ethereum or Polygon Node can resolve a domain.

This section describes resolving domain records by making calls to Ethereum and Polygon smart contracts using the Ethereum JSON RPC. For developers who prefer a more straightforward solution, it might be more convenient to use the [Resolution Libraries](/developer-toolkit/resolution-integration-methods/resolution-libraries/libraries-overview.md) maintained by Unstoppable Domains.

To resolve a domain, your software must access the Ethereum or Polygon network. For more information, see [Configuring an Ethereum Network Connection](#configuring-an-ethereum-network-connection).

## Retrieve Records with `ProxyReader`

The simplest way to resolve a domain with Ethereum JSON RPC is to make a read-only call to `ProxyReader` smart contract. `ProxyReader` provides an API that allows users to resolve domains by making just one call by passing only keys of records and a domain namehash. Without `ProxyReader` it would require executing at least two calls: one to obtain a domain resolver address and another to get the records themselves. With `ProxyReader` it all happens under the hood.

See the [UNS ProxyReader](/developer-toolkit/reference/smart-contracts/uns-smart-contracts.md#proxyreader) docs for a list of all the ProxyReader smart contract addresses owned and managed by Unstoppable Domains. Here's an example in JavaScript of getting two records (using the [ethers.js library](https://www.npmjs.com/package/ethers)):

```javascript
// Ethereum ProxyReader contract address
const proxyReaderAddress = "0x1BDc0fD4fbABeed3E611fd6195fCd5d41dcEF393";

// Partial ABI, just for the getMany function.
const proxyReaderAbi = [
  "function getMany(string[] calldata keys, uint256 tokenId) external view returns (string[] memory)",
];

const proxyReaderContract = new ethers.Contract(
  proxyReaderAddress,
  proxyReaderAbi,
  provider
);

// user domain and records to resolve
const domain = "brad.crypto";
const tokenId = namehash(domain);
const keys = ["crypto.ETH.address", "crypto.BTC.address"];

const values = await proxyReaderContract.getMany(keys, tokenId);
console.log(values);

// [
//   '0x8aaD44321A86b170879d7A244c1e8d360c99DdA8',
//   'bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y'
// ]
```

UNS code example:

```javascript
// UNS Registry Contract Address
var unsAddress = "0x070e83FCed225184E67c86302493ffFCDB953f71";

// Partial ABI, just for the getMany function.
var abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "string[]",
        name: "keys",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getData",
    outputs: [
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "values",
        type: "string[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

var provider = ethers.providers.getDefaultProvider("goerli");
var contract = new ethers.Contract(unsAddress, abi, provider);
async function fetchContractData(keys, tokenId) {
  return contract.getData(keys, tokenId);
}

// user domain and records to resolve
const domain = "udtestdev-test.crypto";
const tokenId = namehash(domain);
const keys = ["crypto.BTC.address", "crypto.ETH.address"];

const data = await fetchContractData(keys, tokenId);
console.log({ resolver: data.resolver, owner: data.owner, values: data[2] });

// {
//   owner: "0x58ca45e932a88b2e7d0130712b3aa9fb7c5781e2"
//   resolver: "0xb66dce2da6afaaa98f2013446dbcb0f4b0ab2842"
//   values: ["bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y", "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"]
// }
```

:::info
`namehash()` - namehashing algorithm implementation. See the [Namehashing](/getting-started/domain-registry-essentials/namehashing.md) guide for more information.
:::

<figure>

![Resolving domain records via ProxyReader for CNS and UNS Registries](/images/domain-records-via-proxy-reader-smart-contract.png)

<figcaption>Resolving domain records via ProxyReader for CNS and UNS Registries</figcaption>
</figure>

See the [Records Reference](/developer-toolkit/reference/records-reference.md) for more information about the standardized records.

:::info
When resolving domains to records, first check the records on the Polygon network, then check on the Ethereum network.
:::

## Record Value Validation

For CNS, `Resolver` doesn't have built-in record value validation when updated. For UNS, `RecordStorage` doesn’t have built-in record value validation after an update.

This is for two reasons:

- Any validation would require additional gas to be paid
- Solidity is a special-purpose programming language that doesn't have built-in data validation tools like Regular Expressions

Any domain management application should perform record format validation before submitting a transaction. However, there is no guarantee that all management applications will do it correctly. For this reason, records should be validated when the domain is resolved.

See the [Records Reference](/developer-toolkit/reference/records-reference.md) for more information for the validator of each record.

## Configuring an Ethereum Network Connection

Domain resolution configuration at a low level requires three configuration parameters:

- Ethereum JSON RPC provider
- Ethereum CHAIN ID
- Registry Contract Address

Ethereum JSON RPC provider is an API implementing the Ethereum JSON RPC standard. Usually, it is given in the form of an HTTP API endpoint. However, other forms may exist if the Ethereum node is launched locally. Unstoppable Domains recommends the [Cloudflare Ethereum Gateway](https://developers.cloudflare.com/distributed-web/ethereum-gateway), an Ethereum node service provider. To learn more about providers, see [Nodes and client](https://ethereum.org/en/developers/docs/nodes-and-clients/) and [Nodes as a service](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/).

Ethereum CHAIN ID is an ID of the Ethereum network a node is connected to. You can only connect each RPC provider to one network. There is only one production network with CHAIN ID equal to `1` and called `mainnet`. Other networks are only used for testing purposes. See [EIP-155](https://eips.ethereum.org/EIPS/eip-155) for more information. You can determine CHAIN ID of an Ethereum node by calling the [net version method](https://eth.wiki/json-rpc/API#net_version) on JSON RPC, which should be used as a default when only JSON RPC provider is given.

There are two registry contract addresses, **Crypto Registry Contract Address** and **UNS Registry Contract Address**, each with its production registry address on the mainnet. The following addresses should be used as the default for production configuration:

- CNS production registry address on the mainnet: [0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe](https://etherscan.io/address/0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe)
- UNS production registry address on the mainnet: [0x049aba7510f45BA5b64ea9E658E342F904DB358D](https://etherscan.io/address/0x049aba7510f45BA5b64ea9E658E342F904DB358D)
