---
title: Smart Contract Integration Guide | UD Developer Portal
description: This guide covers how to retrieve the reverse record of UD domains using smart contracts. This process requires using the ABIs built into the Unstoppable Domains UNS smart contract.
---

# Smart Contract Integration Guide

This guide covers how to retrieve the reverse record of UD domains using smart contracts. This process requires using the ABIs built into the Unstoppable Domains UNS smart contract.

## Step 1: Select a UNS Registry Smart Contract

The [UNS Registry](/developer-toolkit/reference/smart-contracts/uns-smart-contracts.md#unsregistry) contract is where domain owners store their data and is a map of domain namehashes to key-value dictionaries of records. Choose one of the Unstoppable Registry smart contracts to interact with (either mainnet or testnet).

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

The UNS contract has a `reverseOf()` method that takes in a wallet address and returns the namehash of the domain that has configured Reverse Resolution to that address.

<figure>

![polygonscan reverseOf method](/images/reverse-of-abi.png '#width=50%')

<figcaption>polygonscan reverseOf method</figcaption>
</figure>

Add the wallet address you want to resolve in the `addr` field of the `reverseOf()` method and click the `Query` button.

<figure>

![polygonscan reverseOf response](/images/reverse-of-abi-response.png)

<figcaption>polygonscan reverseOf response</figcaption>
</figure>

:::info
The `reverseOf()` method will return a value of `0` if there is no reverse record configured for the wallet address provided.
:::

## Step 4: Get the Domain Metadata

Send a `GET` request to the [Get Metadata for a Domain](/developer-toolkit/resolution-integration-methods/resolution-service/endpoints/get-metadata-for-a-domain.md) to retrieve the metadata of the domain associated with the namehash returned from the `reverseOf()` method call:

```bash
https://resolve.unstoppabledomains.com/metadata/{domainOrToken}
```

## Step 5: Get the Domain Name From the Metadata

The metadata endpoint returns a JSON response in the following format:

```javascript
{
  "name": string,
  "description": string,
  "properties": object,
  "external_url": string,
  "image": string,
  "image_url": string,
  "attributes": [
    object
  ],
  "image_data": string,
  "background_color": string
}
```

The human-readable form of the domain associated with the token is stored in the `name` field of the API response.

## Smart Contract Considerations

Integrating Reverse Resolution with smart contracts involves using the `reverseOf()` method to retrieve the namehash of the reverse record, then using the [Get Metadata for a Domain](/developer-toolkit/resolution-integration-methods/resolution-service/endpoints/get-metadata-for-a-domain.md) to get the human-readable version of the domain.

You can also integrate Reverse Resolution into your application using libraries that allow you to call smart contracts ABIs like [ethers.js](https://github.com/ethers-io/ethers.js/) and [web3.js](https://github.com/ChainSafe/web3.js). Here’s an application that integrates Reverse Resolution using `ethers.js`: <https://github.com/Noxturnix/web3udmintfeed.nft>.

An example in JavaScript of integrating Reverse Resolution (using the [ethers.js library](https://www.npmjs.com/package/ethers)):

```javascript
const proxyReaderAddress = "0x423F2531bd5d3C3D4EF7C318c2D1d9BEDE67c680";

// partial ABI, just for the reverseOf method
const proxyReaderAbi = [
  "function reverseOf(address addr) external view returns (uint256)",
];

const proxyReaderContract = new ethers.Contract(
  proxyReaderAddress,
  proxyReaderAbi,
  provider
);

const address = "0x88bc9b6c56743a38223335fac05825d9355e9f83";

// call the reverseOf method
const reverseResolutionTokenId = await proxyReaderContract.reverseOf(address);
fetch(`https://resolve.unstoppabledomains.com/metadata/${reverseResolutionTokenId}`)
  .then(response => response.json())
  .then(data => console.log(data.name));

// jim-unstoppable.x
```

:::success Congratulations
You have successfully integrated Reverse Resolution using smart contracts. Happy Hacking!
:::

<embed src="/snippets/_discord.md" />
