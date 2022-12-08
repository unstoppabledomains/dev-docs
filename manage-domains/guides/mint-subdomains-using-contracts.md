---
title: Mint Subdomains Using Smart Contracts Guide | UD Developer Portal
description: This guide covers how to mint UD subdomains using the Polygonscan user interface to write and execute proxy contracts.
redirectFrom:
  - /manage-domains/mint-subdomains-using-contracts/
---

# Mint Subdomains Using Smart Contracts Guide

This guide covers how to mint UD subdomains using proxy contracts. This process requires using the Polygonscan user interface to write and execute proxy contracts.

:::info
Subdomains can only be minted for Polygon-based (L2) domains. Ethereum and Zilliqa domains will need to be migrated to Polygon before they can mint subdomains.
:::

## Step 1: Select a Minting Manager Smart Contract

The [Minting Manager](/developer-toolkit/reference/smart-contracts/uns-smart-contracts/#mintingmanager) smart contract is an interface for minting second-level domains. Choose one of the Minting Manager smart contracts to interact with (either Polygon mainnet or testnet).

<figure>

![polygon minting manager contract](/images/polygon-minting-manager-contract.png)

<figcaption>polygon minting manager contract</figcaption>
</figure>

## Step 2: Open the "Write as Proxy" Tab for the Minting Manager

Navigate to the `Contract` tab in the Polygonscan page of the Minting Manager contract and click on the `Write as Proxy` tab:

<figure>

![polygonscan write as proxy tab](/images/minting-manager-write-as-proxy-tab.png)

<figcaption>polygonscan write as proxy tab</figcaption>
</figure>

## Step 3: Connect Your Web3 Wallet

Click on the `Connect to Web3` button in the `Write as Proxy` tab and connect the wallet associated with the domain:

<figure class="half-inline-block">

![polygonscan connect wallet](/images/minting-manager-connect-wallet.png)

<figcaption>polygonscan connect wallet</figcaption>
</figure>

<figure class="half-inline-block">

![wallet provider list](/images/wallet-provider-list.png)

<figcaption>wallet provider list</figcaption>
</figure>

## Step 4: Mint the Subdomain

Choose the `issueWithRecords()` method from the `Write as Proxy` tab section. The method allows you to mint subdomains of domains you already own to your wallet address.

<figure>

![polygonscan issueWithRecords method](/images/polygonscan-issue-with-records-method.png '#width=50%')

<figcaption>polygonscan issueWithRecords method</figcaption>
</figure>

Next, add your wallet address that owns the root domain to the `to` field and the subdomain you want to mint to the `labels` field. For example, if you own the `example.crypto` domain with your wallet address as `0xC37d3c4326ab0E1D2b9D8b916bBdf5715f780fcF` and you want to mint `blog.example.crypto`, you will fill the parameters like so:

<figure>

![filling issueWithRecords parameters](/images/filling-issue-with-records-parameters.png '#width=50%')

<figcaption>filling issueWithRecords parameters</figcaption>
</figure>

Then, add the record(s) you want pre-filled in the subdomain after minting to the `keys` and `values` fields as an array of values. See the [Records Reference](/developer-toolkit/reference/records-reference.md) documentation for supported values. You can also provide empty records if you wish to.

<figure>

![filling issueWithRecords parameters](/images/filling-issue-with-records-parameters-2.png '#width=50%')

<figcaption>filling issueWithRecords parameters</figcaption>
</figure>

:::info
Domain records aren't automatically pre-filled in subdomains unless specified during minting. If you do not provide any records when minting a subdomain, you can always add/update them at a later time.
:::

## Step 5: Execute the Contract

Click the `Write` button to sign the transaction and execute the contract. After signing the transaction, you can view its details on the blockchain explorer, like so:

<figure>

![polygonscan transaction details](/images/polygonscan-subdomain-minting-transaction-details.png)

<figcaption>polygonscan transaction details</figcaption>
</figure>

## Considerations

The following considerations apply to minting subdomains:

* Subdomains must contain only lowercase letters (`a-z`), numbers (`0-9`), and hyphens (`-`)
* Subdomain names cannot start with a hyphen (`-`)

:::success Congratulations!
You have successfully minted a subdomain using smart contracts. Happy hacking!
:::
