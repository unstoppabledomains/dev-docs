---
title: Smart Contract Integration Guide | UD Developer Portal
description: This guide covers how to retrieve the reverse record of UD domains using smart contracts. This process requires using the ABIs built into the Unstoppable Domains UNS smart contract.
---

# Smart Contract Integration Guide

This guide covers how to retrieve the reverse record of UD domains using smart contracts. This process requires using the ABIs built into the Unstoppable Domains UNS smart contract.

## Step 1: Select a UNS Registry Smart Contract

The [UNS Registry](/developer-toolkit/reference/smart-contracts/uns-smart-contracts.md#unsregistry) contract is where domain owners store their data and is a map of domain namehashes to key-value dictionaries of records. Choose one of the Unstoppable Registry smart contracts to interact with (either mainnet or testnet).

<figure>

![Polygon testnet registry contract](/images/polygon-testnet-registry-contract.png)

<figcaption>polygon testnet registry contract</figcaption>
</figure>

## Step 2: Open the “Read as Proxy” Tab for the Registry Contract

Navigate to the `Contract` tab in either the Etherscan or Polygonscan page of the Registry contract and click on the `Read as Proxy` tab:

<figure>

![Polygonscan write as proxy tab](/images/read-as-proxy.png)

<figcaption>polygonscan write as proxy tab</figcaption>
</figure>

## Step 3: Retrieve the Reverse Record

The UNS contract has a `reverseOf()` method that takes in a wallet address and returns the namehash of the domain that has configured Reverse Resolution to that address.

<figure>

![Polygonscan reverseOf method](/images/reverse-of-abi.png '#width=50%')

<figcaption>polygonscan reverseOf method</figcaption>
</figure>

Add the wallet address you want to resolve in the `addr` field of the `reverseOf()` method and click the `Query` button.

<figure>

![Polygonscan reverseOf response](/images/reverse-of-abi-response.png)

<figcaption>polygonscan reverseOf response</figcaption>
</figure>

:::info
The `reverseOf()` method will return a value of `0` if there is no reverse record configured for the wallet address provided.
:::

## Step 4: Get the Domain Metadata

Send a `GET` request to the [Unstoppable Domains metadata endpoint](https://resolve.unstoppabledomains.com/api-docs/#/Meta%20Data/MetaDataController.getMetaData) to retrieve the metadata of the domain associated with the namehash returned from the `reverseOf()` method call:

```
https://resolve.unstoppabledomains.com/metadata/{namehash}
```

## Step 5: Get the Domain Name From the Metadata

The metadata endpoint returns a JSON response in the following format:

```javascript
{
  "name": string,
  "external_link": string,
  "image_url": string,
  "image_data": string,
  "properties": object,
  "attributes": [
    string
  ],
  "background_color": string,
  "animation_url": string,
  "youtube_url": string,
  "description": string,
  "image": string,
  "external_url": string
}
```

The human-readable form of the domain associated with the token is stored in the `name` field of the API response.

## Smart Contract Considerations

Integrating Reverse Resolution with smart contracts involves using the `reverseOf()` method to retrieve the namehash of the reverse record, then using the [metadata API endpoint](https://resolve.unstoppabledomains.com/api-docs/#/Meta%20Data/MetaDataController.getMetaData) to get the human-readable version of the domain.

You can also integrate Reverse Resolution into your application using libraries that allow you to call smart contracts ABIs like [ethers.js](https://github.com/ethers-io/ethers.js/) and [web3.js](https://github.com/ChainSafe/web3.js). Here’s an application that integrates Reverse Resolution using `ethers.js`: <https://github.com/Noxturnix/web3udmintfeed.nft>.

An example in JavaScript of integrating Reverse Resolution (using the [ethers.js library](https://www.npmjs.com/package/ethers)):

```javascript
const proxyReaderAddress = "0xc3C2BAB5e3e52DBF311b2aAcEf2e40344f19494E";

// partial ABI, just for the reverseOf function.
const proxyReaderAbi = [
  "function reverseOf(address addr) external view returns (uint256)",
];

const proxyReaderContract = new ethers.Contract(
  proxyReaderAddress,
  proxyReaderAbi,
  provider
);

const address = "0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19";

const reverseResolutionTokenId = await proxyReaderContract.reverseOf(address);
fetch(`https://resolve.unstoppabledomains.com/metadata/${reverseResolutionTokenId}`)
  .then(response => response.json())
  .then(data => console.log(data.name));

// lordghostx.wallet
```

:::success Congratulations
You have successfully integrated Reverse Resolution using smart contracts. Happy Hacking!
:::

<embed src="/snippets/_discord.md" />
