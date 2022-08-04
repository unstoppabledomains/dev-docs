---
title: Get a Free Polygon Test Domain | Unstoppable Domains Developer Portal
description: This guide covers the process of obtaining a free test domain, through direct smart contract calling on Polygonscan.
---

# Get a Free Polygon Test Domain

<embed src="/snippets/_test-domain-explain.md" />

:::info
[Polygon faucet](https://faucet.polygon.technology) offers free money in the form of matic tokens for domains minted on Polygon Testnet.
:::

## Step 1. Configure your Metamask wallet for Polygon

* Go to [**Metamask**](https://metamask.io) **→ Settings → Networks.**
* Press **Add Network** button.
* Fill fields with the following values:
  * **Network Name:** Mumbai
  * **New RPC URL:** [https://polygon-rpc.com/](https://polygon-rpc.com/)
  * **Chain ID:** 80001
  * **Currency Symbol:** MATIC
  * **Block Explorer URL:** [https://mumbai.polygonscan.com](https://mumbai.polygonscan.com)

<figure>

![Configure network settings in MetaMask to use Polygonscan domains (Layer 2)](/images/configure-metamask-polygonscan.png)

<figcaption>Configure network settings in MetaMask to use Polygonscan domains (Layer 2)</figcaption>
</figure>

## Step 2. Get free MATIC tokens from Polygon Faucet

* Go to Faucet Page: [https://faucet.polygon.technology/](https://faucet.polygon.technology).
* Choose MATIC token and Mumbai network.
* Enter your wallet address.
* Click **Submit** button.

<figure>

![Retrieve free MATIC tokens through the faucet to cover gas fees for domains on Mumbai testnet (Layer 2)](/images/polygon-free-matic-tokens.png)

<figcaption>Retrieve free MATIC tokens through the faucet to cover gas fees for domains on Mumbai testnet (Layer 2)</figcaption>
</figure>

## Step 3: Locate the domain ending namehash for Polygon

* The domain ending [namehash](../domain-registry-essentials/namehashing.md) can be found by using the website API:
  * .wallet domain ending -[https://unstoppabledomains.com/api/v1/wallet](https://unstoppabledomains.com/api/v1/wallet)
  * .888 domain ending -[https://unstoppabledomains.com/api/v1/888](https://unstoppabledomains.com/api/v1/888)
  * .dao domain ending -[https://unstoppabledomains.com/api/v1/dao](https://unstoppabledomains.com/api/v1/dao)

For example, the API response for .dao domain ending namehash is `0xb5f2bbf81da581299d4ff7af60560c0ac854196f5227328d2d0c2bb0df33e553`.

```json
{
  "addresses": {},
  "multicoinAddresses": {},
  "whois": {},
  "ipfs": {},
  "social": {},
  "dns": [],
  "meta": {
    "domain": "dao",
    "namehash": "0xb5f2bbf81da581299d4ff7af60560c0ac854196f5227328d2d0c2bb0df33e553",
    "tokenId": "82297499899003349669721577255820055932923117933045045557665992854629036320083",
    "owner": null,
    "resolver": null,
    "type": "CNS",
    "ttl": 0
  },
  "records": {}
}
```

* Or, you can locate the domain ending namehash in the following list:

```bash
0x0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f = 'crypto';
0xb5f2bbf81da581299d4ff7af60560c0ac854196f5227328d2d0c2bb0df33e553 = 'wallet';
0x7674e7282552c15f203b9c4a6025aeaf28176ef7f5451b280f9bada3f8bc98e2 = 'coin';
0x241e7e2b7fd7333b3c0c049b326316b811af0c01cfc0c7a90b466fda3a70fc2d = 'x';
0xb75cf4f3d8bc3deb317ed5216d898899d5cc6a783f65f6768eb9bcb89428670d = 'nft';
0x4118ebbd893ecbb9f5d7a817c7d8039c1bd991b56ea243e2ae84d0a1b2c950a7 = 'blockchain';
0x042fb01c1e43fb4a32f85b41c821e17d2faeac58cfc5fb23f80bc00c940f85e3 = 'bitcoin';
0x5c828ec285c0bf152a30a325b3963661a80cb87641d60920344caf04d4a0f31e = '888';
0xb5f2bbf81da581299d4ff7af60560c0ac854196f5227328d2d0c2bb0df33e553 = 'dao';
```

## Step 4: Write the Polygonscan Smart Contract Request

* Go to [Polygonscan/Mumbai](https://mumbai.polygonscan.com/address/0x428189346bb3CC52f031A1092fd47C919AC30A9f#writeProxyContract) Smart Contract Page.
* Choose **Write as Proxy** tab.
* Connect your wallet (Goerli).
* Choose `claimToWithRecords` method and fill properties with needed values: receiver wallet address, domain ending namehash, and test domain suffix.

<figure>

![Enter data for 'claim to records' for Polygonscan domain (Layer2)](/images/polygonscan-claim-to-records.png)

<figcaption>Enter data for 'claim to records' for Polygonscan domain (Layer2)</figcaption>
</figure>

* Click the **Write** button to start the transaction.

:::success Congratulations!
You're the new proud owner of a test domain on Polygon Mumbai testnet. Happy hacking!
:::
