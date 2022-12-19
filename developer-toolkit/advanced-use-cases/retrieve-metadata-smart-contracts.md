---
title: Retrieve Domain Metadata Using Smart Contracts Guide | UD Developer Portal
description: This guide covers retrieving the metadata of UD domains using smart contracts. This process requires using the ABIs built into the Unstoppable Domains UNS smart contract.
---

# Retrieve Domain Metadata Using Smart Contracts Guide

This guide covers retrieving the metadata of UD domains using smart contracts. This process requires using the ABIs built into the Unstoppable Domains UNS smart contract.

## Step 1: Select a UNS Registry Smart Contract

The [UNS Registry](/developer-toolkit/reference/smart-contracts/uns-smart-contracts.md#unsregistry) smart contract is where domain owners store their data and is a map of domain namehashes to key-value dictionaries of records. Choose one of the Unstoppable Registry smart contracts to interact with (either mainnet or testnet).

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

## Step 3: Generate the Namehash of the Domain

<embed src="/snippets/_namehashing-snippets.md" />

## Step 4: Retrieve the TokenURI

The UNS contract has a `tokenURI()` method that takes in the namehash of a domain and returns an HTTP URL to fetch the domain's metadata. Unstoppable Domains implements the [metadata extension](https://eips.ethereum.org/EIPS/eip-721#:~:text=The%20metadata%20extension%20is%20OPTIONAL%20for%20ERC%2D721%20smart%20contracts%20(see%20%E2%80%9Ccaveats%E2%80%9D%2C%20below).%20This%20allows%20your%20smart%20contract%20to%20be%20interrogated%20for%20its%20name%20and%20for%20details%20about%20the%20assets%20which%20your%20NFTs%20represent) defined in the EIP-721 token standard.

<figure>

![polygonscan tokenURI method](/images/token-uri-abi.png '#width=50%')

<figcaption>polygonscan tokenURI method</figcaption>
</figure>

Add the namehash of the domain you want to retrieve its metadata in the `tokenId` field of the `tokenURI()` method and click the `Query` button.

<figure>

![polygonscan tokenURI response](/images/token-uri-abi-response.png)

<figcaption>polygonscan tokenURI response</figcaption>
</figure>

## Step 5: Get the Domain Metadata

Send a `GET` request to the URL returned from the `tokenURI()` method call to retrieve the metadata of the domain:

```bash
https://metadata.unstoppabledomains.com/metadata/{domainOrToken}
```

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
  "background_color": string
}
```

## Smart Contract Considerations

Retrieving domain metadata with smart contracts involves using the `tokenURI()` method to get the metadata source URL, then making a `GET` request to the URL to fetch the metadata information.

You can also integrate domain metadata retrieval into your application using libraries that allow you to call smart contracts ABIs like [ethers.js](https://github.com/ethers-io/ethers.js/) and [web3.js](https://github.com/ChainSafe/web3.js).

An example in JavaScript of integrating domain metadata retrieval (using the [ethers.js library](https://www.npmjs.com/package/ethers)):

```javascript
const proxyReaderAddress = "0x423F2531bd5d3C3D4EF7C318c2D1d9BEDE67c680";

// partial ABI, just for the tokenURI method
const proxyReaderAbi = [
  "function tokenURI(uint256 tokenId) external view returns (string memory)",
];

const proxyReaderContract = new ethers.Contract(
  proxyReaderAddress,
  proxyReaderAbi,
  provider
);

// generate the namehash of the domain name
const domainName = "jim-unstoppable.x";
const namehash = resolution.namehash(domainName, "UNS");

// call the tokenURI method
const tokenURI = await proxyReaderContract.tokenURI(namehash);
fetch(tokenURI)
  .then(response => response.json())
  .then(data => console.log(data));
```

:::success Congratulations
You have successfully retrieved the metadata of a domain name using smart contracts. Happy Hacking!
:::

<embed src="/snippets/_discord.md" />
