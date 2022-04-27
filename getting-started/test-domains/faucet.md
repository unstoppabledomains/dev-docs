---
title: Get a Test Domain using Unstoppable Website Faucet
description: This page describes the process for requesting a free test domain as a developer using the Unstoppable Website faucet.
---

# Get a Test Domain using Unstoppable Website Faucet

<embed src="/snippets/_test-domain-explain.md" />

:::warning Important
The [Reseller feature](../../reseller/reseller-integration-guides/reseller-pathways.md) only supports Polygon Layer2 Network. And, for [Login with Unstoppable](/login-with-unstoppable/get-started-login/integration-pathways.md), applications must use **Polygon Mainnet** as the domain network.
:::

## Step 1: Gather Requirements for the Website Faucet

- A web3 compatible wallet
- Configure your wallet for [Goerli Testnet](etherscan.md#step-1-check-wallet-compatibility-for-etherscan) or [Polygon/Mumbai](polygonscan.md#step-1-configure-your-metamask-wallet-for-polygon)
- Get[ free Ether from Goerli faucet](etherscan.md#step-2-get-free-ether-from-goerli-faucet) or [free MATIC tokens from Polygon faucet](polygonscan.md#step-2-get-free-matic-tokens-from-polygon-faucet) to cover transaction fees (only for Goerli and Mumbai Testnet)
- Ensure you have funds in your wallet to pay transaction fees (only for Polygon Mainnet)

:::info
Domains on Polygon Mainnet can be purchased for free through Unstoppable Website Faucet, but members will need to cover their own gas fees to mint the domain.
:::

## Step 2: Configure the Test Domain

- Go to the [Unstoppable Website Faucet](https://unstoppabledomains.com/developers/testdomain) page for developers.
- Select the network for the domain: **Goerli Testnet**, **Polygon Mainnet,** or **Mumbai Testnet**.
- Configure the domain options:
  - **domain ending**: .888, .crypto, .x, .coin, .wallet, .bitcoin, .nft, .dao
  - **domain suffix**: the part of the domain the follows `udtestdev-`
  - **recipient address**: must enter ETH address (required)
  - **cryptocurrency records**: add optional cryptocurrency addresses, such as bitcoin or litecoin
  - **custom records**: add optional key and value pairs

:::info reminder
The [Reseller feature](../../reseller/reseller-integration-guides/reseller-pathways.md) only supports Polygon Layer2 Network. And, for [Login with Unstoppable](/login-with-unstoppable/get-started-login/integration-pathways.md), applications must use **Polygon Mainnet** as the domain network.
:::

<figure>

![Configure options on Unstoppable website faucet](/images/website-faucet-options.png)

<figcaption>Configure options on Unstoppable website faucet</figcaption>
</figure>

:::info
If you don't know the recipient address, this information will be retrieved and populated for you after connecting your wallet to the transaction. Just click on **Mint Domain** to continue.
:::

## Step 3: Mint the Domain & Sign the Transaction

- Click the **Mint Domain** button when finished configuring options.
- Sign the transaction with your wallet.

:::success Congratulations!
You're the new proud owner of a test domain on your preferred network. Happy hacking!
:::
