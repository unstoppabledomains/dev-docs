---
title: Namehashing | Unstoppable Domains Developer Portal
description: This page details the Namehashing algorithm and the features of the ERC-721 token standard.
---

# Namehashing

Namehashing is an algorithm that converts a domain name in a classical format \(like `www.example.crypto`\) to ERC-721 token id. All `.crypto` contracts accept a domain name as a method argument in the form of an ERC-721 token. Namehashing is defined as a part of the [EIP-137](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md#namehash-algorithm) standard. See the standard for a text description of the algorithm.

To verify an implementation of the namehash algorithm, use the following reference table:

| Domain Name | ERC721 Token |
| :--- | :--- |
| `.` | `0x0000000000000000000000000000000000000000000000000000000000000000` |
| `crypto` | `0x0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f` |
| `example.crypto` | `0xd584c5509c6788ad9d9491be8ba8b4422d05caf62674a98fbf8a9988eeadfb7e` |
| `www.example.crypto` | `0x3ae54ac25ccd63401d817b6d79a4a56ae7f79a332fe77a98fa0c9d10adf9b2a1` |
| `a.b.c.crypto` | `0x353ea3e0449067382e0ea7934767470170dcfa9c49b1be0fe708adc4b1f9cf13` |

## Generating a Domain Namehash

You can generate the namehash of a domain using any of the [Resolution Libraries](/developer-toolkit/resolution-integration-methods/resolution-libraries/libraries-overview.md) or [Resolution CLI](/developer-toolkit/resolution-integration-methods/resolution-cli.md). You can also use [online tools](https://swolfeyes.github.io/ethereum-namehash-calculator/) to calculate the namehash of the domain.

<embed src="/snippets/_namehashing-snippets.md" />

## Reverse lookup

Fundamentally, namehashing is a one-way operation. It recursively hashes the labels using the SHA-256 hash function.

If one possesses a precomputed table of all hashes and corresponding domains reverse lookups are possible. This table can be reconstructed using the events on the CNS and UNS Registry `NewURI` event.

## JSON RPC

The UNS and CNS metadata APIs track all domain names with their corresponding namehash. That makes it possible to obtain an original domain name from token metadata which can be retrieved from the token metadata URI.

The token metadata URI can be retrieved via ETH RPC call to [ProxyReader\#tokenURI](https://github.com/unstoppabledomains/uns/blob/1ee37ef421bb9539b7254b9b0add5215c94282ec/contracts/ProxyReader.sol#L38). This works for CNS and UNS.

Now, the domain name along with other metadata can be retrieved by performing a simple GET request using the token metadata URI.

For example:

```javascript
// Get a proxy reader contract instance using web3 or ethers
let proxyReaderContractInstance = new Contract(address, abi);

// call the tokenURI method
let tokenUri = await proxyReaderContractInstance.tokenURI("0x756e4e998dbffd803c21d23b06cd855cdc7a4b57706c95964a37e24b47c10fc9");

// GET data from URI
let metadataResponse = await fetch(tokenUri);
// Parse it as json
let metadata = await metadataResponse.json();

// Retrieve the domain name from metadata
console.log(metadata.name);
```

## NewURI events

When a domain is created its name and token ID are logged using a `NewURI` event. This event can be looked up in order to reverse the namehash of a domain. This approach also works for CNS and UNS.

For an implementation example, see the [`unhash` function](https://github.com/unstoppabledomains/resolution/blob/221170af1ece1d97c02c86d6d1645d4c5761005e/src/Resolution.ts#L613) of the resolution library.

Note that regardless of the way a namehash is reversed, it should always be forward-validated by hashing the retrieved domain name. In order to ensure the integrity of the retrieved domain name.

## Public API

Unstoppable Domains maintains a public-facing API which can be used to obtain domain information with a namehash. To do this, call `https://resolve.unstoppabledomains.com/metadata/{namehash}`

**CNS** Example Request:

```bash
curl https://resolve.unstoppabledomains.com/metadata/0x0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f
```

**CNS** Example Response:

```json
{
  "addresses": {},
  "whois": {},
  "ipfs": {},
  "gundb": {},
  "social": {},
  "meta": {
    "owner": "0x000000000000000000000000000000000000dead",
    "type": "CNS",
    "ttl": 0,
    "domain": "crypto",
    "namehash": "0x0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f"
  },
  "records": {}
}
```

**UNS** Example Request:

```bash
curl https://resolve.unstoppabledomains.com/metadata/0x4cf2206dea828b317ad033d760428ba3b0624b974bd5657bbeaef92d624e7b85
```

**UNS** Example Response:

```json
{
  "addresses": {},
  "multicoinAddresses": {},
  "whois": {},
  "ipfs": {
    "html": "QmQ38zzQHVfqMoLWq2VeiMLHHYki9XktzXxLYTWXt8cydu"
  },
  "social": {},
  "dns": [],
  "meta": {
    "domain": "myjohnny.wallet",
    "namehash": "0x4cf2206dea828b317ad033d760428ba3b0624b974bd5657bbeaef92d624e7b85",
    "tokenId": "34803577301218677365125560751744006764397707708613262855939915661234351799173",
    "owner": "0xe7474d07fd2fa286e7e0aa23cd107f8379085037",
    "resolver": "0x049aba7510f45ba5b64ea9e658e342f904db358d",
    "type": "UNS",
    "ttl": 0
  },
  "records": {
    "ipfs.html.value": "QmQ38zzQHVfqMoLWq2VeiMLHHYki9XktzXxLYTWXt8cydu"
  }
}
```
