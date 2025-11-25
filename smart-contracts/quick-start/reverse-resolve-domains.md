---
title: Smart Contract Integration Guide | UD Developer Portal
description: This guide covers how to retrieve the reverse record of UD domains using smart contracts. This process requires using the ABIs built into the Unstoppable Domains UNS smart contract.
---

# Reverse Resolve Domains Using Smart Contracts

This guide covers how to retrieve the reverse record of UD domains using smart contracts. This process requires using the ABIs built into the Unstoppable Domains UNS smart contract.

## Step 1: Select a UNS Registry Smart Contract

The [UNS Registry](/smart-contracts/contract-reference/uns-smart-contracts.md#unsregistry) smart contract is where domain owners store their data and is a map of domain namehashes to key-value dictionaries of records. Choose one of the Unstoppable Registry smart contracts to interact with below. 

- [Ethereum Mainnet Registry](https://etherscan.io/address/0x049aba7510f45BA5b64ea9E658E342F904DB358D)
- [Polygon Mainnet Registry](https://polygonscan.com/address/0xa9a6A3626993D487d2Dbda3173cf58cA1a9D9e9f)
- [Base Mainnet Registry](https://basescan.org/address/0xF6c1b83977DE3dEffC476f5048A0a84d3375d498)

{% admonition type="info"%}
For help identifying which Registry to use for which TLD, refer to the `meta` object returned from the [supported TLDs endpoint](https://api.unstoppabledomains.com/resolve/supported_tlds). Use the registry that aligns with the `registrationBlockchain` for your TLD.
{% /admonition %}

<figure>

![polygon registry contract](/images/polygon-registry-contract.png)

<figcaption>polygon registry contract</figcaption>
</figure>

## Step 2: Open the “Read as Proxy” Tab for the Registry Contract

Navigate to the `Contract` tab in either the Etherscan or Polygonscan page of the Registry contract and click on the `Read as Proxy` tab:

<figure>

![polygonscan read as proxy tab](/images/polygonscan-read-as-proxy.png)

<figcaption>polygonscan read as proxy tab</figcaption>
</figure>

## Step 3: Retrieve the Reverse Record

The UNS contract has a `reverseNameOf()` method that takes in a wallet address and returns the name of the domain that has configured Reverse Resolution to that address.

<figure>

![polygonscan reverseNameOf method](/images/reverse-name-of-abi.png '#width=50%')

<figcaption>polygonscan reverseNameOf method</figcaption>
</figure>

Add the wallet address you want to resolve in the `addr` field of the `reverseNameOf()` method and click the `Query` button.

<figure>

![polygonscan reverseNameOf response](/images/reverse-name-of-abi-response.png)

<figcaption>polygonscan reverseNameOf response</figcaption>
</figure>

{% admonition type="info"%}
The `reverseNameOf()` method will return a value of `''` if there is no reverse record configured for the wallet address provided.
{% /admonition %}

`reverseNameOf()` method will return human-readable domain name.

To calculate `namehash` from domain name use namehashing functions:

{% partial file="/_partials/_namehashing-snippets.md" /%}

## Smart Contract Considerations

Integrating Reverse Resolution with smart contracts involves using the `reverseNameOf()` method to retrieve the domain name of the reverse record.

You can also integrate Reverse Resolution into your application using libraries that allow you to call smart contracts ABIs like [ethers.js](https://github.com/ethers-io/ethers.js/) and [web3.js](https://github.com/ChainSafe/web3.js). Here’s an application that integrates Reverse Resolution using `ethers.js`: <https://github.com/Noxturnix/web3udmintfeed.nft>.

An example in JavaScript of integrating Reverse Resolution (using the [ethers.js library](https://www.npmjs.com/package/ethers)):

```javascript
const proxyReaderAddress = "0x423F2531bd5d3C3D4EF7C318c2D1d9BEDE67c680";

// partial ABI, just for the reverseNameOf method
const proxyReaderAbi = [
    "function reverseNameOf(address addr) external view returns (string)",
];

const proxyReaderContract = new ethers.Contract(
    proxyReaderAddress,
    proxyReaderAbi,
    provider
);

const address = "0x88bc9b6c56743a38223335fac05825d9355e9f83";

// call the reverseNameOf method
const reverseDomainName = await proxyReaderContract.reverseNameOf(address);
// jim-unstoppable.x
```

{% admonition type="success" name="Congratulations" %}
You have successfully integrated Reverse Resolution using smart contracts. Happy Hacking!
{% /admonition %}


