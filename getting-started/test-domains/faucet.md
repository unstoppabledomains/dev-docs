---
title: Get a Test Domain using Unstoppable Website Faucet
description: This page describes the process for requesting a free test domain as a developer using the Unstoppable Website faucet.
---

# Get a Test Domain using Unstoppable Website Faucet

**[[insert overview, reusable content]]**

{% hint style="info" %}
Note: The Reseller feature only support Polygon.
{% endhint %}

## Step 1: Gather Requirements for the Website Faucet

* A web3 compatible wallet
* Configure your wallet for [Rinkeby Testnet](get-test-domain.md#step-1-gather-requirements-for-etherscan) or [Polygon/Mumbai](get-test-domain.md#step-1.-configure-your-metamask-wallet)
* Get[ free Ether from Rinkeby faucet](get-test-domain.md#step-2.-get-matic-tokens-though-the-faucet) or [free MATIC tokens from Polygon faucet](get-test-domain.md#step-2.-get-matic-tokens-though-the-faucet-1) to cover transaction fees (only for Rinkeby and Mumbai Testnet)
* Ensure you have funds in your wallet to pay transaction fees (only for Polygon Mainnet)

{% hint style="info" %}
Domains on Polygon Mainnet can be purchased for free through Unstoppable Website Faucet, but users will need to cover their own gas fees to mint the domain.
{% endhint %}

## Step 2: Configure the Test Domain

* Go to the [Unstoppable Website Faucet](https://unstoppabledomains.com/developers/testdomain) page for developers.
* Select the network for the domain: **Rinkeby Testnet**, **Polygon Mainnet,** or **Mumbai Testnet**.
* Configure the domain options:
  * **domain extension**: .888, .crypto, .x, .coin, .wallet, .bitcoin, .nft, .dao
  * **domain suffix**: the part of the domain the follows `udtestdev-`
  * **recipient address**: must enter ETH address (required)
  * **cryptocurrency records**: add optional cryptocurrency addresses, such as bitcoin or litecoin
  * **custom records**: add optional key and value pairs

{% hint style="warning" %}
**Important:** For [Login with Unstoppable integrations](login-with-unstoppable/login-integration-guides/), users must select **Polygon Mainnet** as the domain network.
{% endhint %}

![Configure options on Unstoppable website faucet](images/website-faucet-options.png)

{% hint style="info" %}
If you don't know the recipient address, this information will be retrieved and populated for you after connecting your wallet to the transaction. Just click on **Mint Domain** to continue.
{% endhint %}

## Step 3: Mint the Domain & Sign the Transaction

* Click the **Mint Domain** button when finished configuring options.
* Sign the transaction with your wallet.

{% hint style="success" %}
Congratulations! You're the new proud owner of a test domain on your preferred network. Happy hacking!
{% endhint %}
