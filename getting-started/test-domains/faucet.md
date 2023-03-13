---
title: Get a Test Domain using Unstoppable Website Faucet Guide
description: This page describes the process for requesting a free test domain as a developer using the Unstoppable Website faucet.
---

# Get a Test Domain using Unstoppable Website Faucet Guide

<embed src="/snippets/_test-domain-explain.md" />

:::warning
The [Partner API](/partner/index.md) only supports Polygon Layer2 Network. And, for [Login with Unstoppable](/login-with-unstoppable/get-started-login.md), it can be integrated with any EVM-compatible DApp. However, domains minted on testnets (e.g. Mumbai or Goerli) are not supported.
:::

## Step 1: Gather Requirements for the Website Faucet

* A Web3 compatible wallet
* Configure your wallet for the [Polygon/Mumbai](/manage-domains/guides/add-polygon-to-metamask.md) network
* Get [free MATIC tokens from Polygon faucet](/manage-domains/guides/get-polygon-test-tokens.md) to cover transaction fees (only for Mumbai testnet)
* Ensure you have funds in your wallet to pay transaction fees

:::info
Domains on Polygon mainnet can be purchased for free through Unstoppable Website Faucet, but members will need to cover their own gas fees to mint the domain.
:::

## Step 2: Configure the Test Domain

* Go to the [Unstoppable Website Faucet](https://unstoppabledomains.com/developers/testdomain) page for developers.
* Select the network for the domain: **Polygon Mainnet** or **Mumbai Testnet**.
* Configure the domain options:
  * **domain ending:** .crypto, .wallet, .blockchain, .bitcoin, .x, .888, .nft, .dao, .klever, .zil, .hi, .kresus, .polygon
  * **domain suffix:** the part of the domain the follows `udtestdev-`
  * **recipient address:** must enter Polygon address (required)
  * **cryptocurrency records:** add optional cryptocurrency addresses, such as Bitcoin or Litecoin
  * **custom records:** add optional key and value pairs

:::warning
The [Partner API](/partner/index.md) only supports Polygon Layer2 Network. And, for [Login with Unstoppable](/login-with-unstoppable/get-started-login.md), it can be integrated with any EVM-compatible DApp. However, domains minted on testnets (e.g. Mumbai or Goerli) are not supported.
:::

<figure>

![Configure options on Unstoppable website faucet](/images/website-faucet-options.png)

<figcaption>Configure options on Unstoppable website faucet</figcaption>
</figure>

:::info
If you don't know the recipient address, this information will be retrieved and populated for you after connecting your wallet to the transaction. Just click on **Mint Domain** to continue.
:::

## Step 3: Mint the Domain & Sign the Transaction

* Click the **Mint Domain** button when finished configuring options.
* Sign the transaction with your wallet.

:::success Congratulations!
You're the new proud owner of a test domain on your preferred network. Happy hacking!
:::
