---
title: Manage Domains Using Smart Contracts Guide | UD Developer Portal
description: >-
  This guide covers how to manage UD domain records using the Etherscan,
  Polygonscan, and Basescan user interfaces to write and execute proxy
  contracts.
redirects:
  /manage-domains/managing-domains-using-contracts/: {}
---

# Manage Domains Using Smart Contracts

This guide covers how to manage UD domain records using proxy contracts. This process requires using the Etherscan, Polygonscan, and Basescan user interface to write and execute contracts.

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

## Step 2: Open the "Write as Proxy" Tab for the Registry Contract

Navigate to the `Contract` tab in either the Etherscan or Polygonscan page of the Registry contract and click on the `Write as Proxy` tab:

<figure>

![polygonscan write as proxy tab](/images/polygonscan-write-as-proxy-tab.png)

<figcaption>polygonscan write as proxy tab</figcaption>
</figure>

## Step 3: Connect Your Web3 Wallet

Click on the `Connect to Web3` button in the `Write as Proxy` tab and connect the wallet associated with the domain:

<figure class="half-inline-block">

![polygonscan connect wallet](/images/polygonscan-connect-wallet.png)

<figcaption>polygonscan connect wallet</figcaption>
</figure>

<figure class="half-inline-block">

![wallet provider list](/images/wallet-provider-list.png)

<figcaption>wallet provider list</figcaption>
</figure>

## Step 4: Manage the Domain Records

Choose the `set` or `setMany` method from the `Write as Proxy` tab section. The `set` method allows you to update a single record, while the `setMany` method allows you to update multiple records simultaneously.

<figure class="half-inline-block">

![polygonscan set method](/images/polygonscan-set-method.png)

<figcaption>polygonscan set method</figcaption>
</figure>

<figure class="half-inline-block">

![polygonscan setMany method](/images/polygonscan-setmany-method.png)

<figcaption>polygonscan setMany method</figcaption>
</figure>

Next, add the record(s) you want to manage to the `key` and `value` fields as a single value for the `set` method or array of values for the `setMany` method.

<figure>

![adding records with setMany](/images/adding-records-with-setmany.png)

<figcaption>adding records with setMany</figcaption>
</figure>

{% admonition type="info"%}
Please see the [Record Reference](/resolution/records-reference.md) guide and [reference JSON](https://github.com/unstoppabledomains/uns/blob/main/resolver-keys.json) file for all the resolver keys used by the Unstoppable Domains UNS Registry.
{% /admonition %}

## Step 5: Generate the Namehash of the Domain

{% partial file="/_partials/_namehashing-snippets.md" /%}

After generating the domain namehash, insert it into the `tokenId` field of the `set` or `setMany` method.

<figure>

![adding domain namehash](/images/adding-domain-namehash.png)

<figcaption>adding domain namehash</figcaption>
</figure>

## Step 6: Execute the Contract

Click the `Write` button to sign the transaction and execute the contract. After signing the transaction, you can view its details on the blockchain explorer, like so:

<figure>

![polygonscan transaction details](/images/polygonscan-transaction-details.png '#width=50%')

<figcaption>polygonscan transaction details</figcaption>
</figure>

{% admonition type="success" name="Congratulations!" %}
You have successfully managed your Unstoppable Domain records using smart contracts. Happy hacking!
{% /admonition %}
