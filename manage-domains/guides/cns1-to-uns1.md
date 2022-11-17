---
title: CNS L1 to UNS L1--Domain Transfer Guide | UD Developer Portal
description: This guide explains the process for transferring a domain from CNS Layer 1 (Ethereum) registry to the UNS Layer 1 (Ethereum) registry.
redirectFrom:
  - /polygon/cns1-to-uns1/
  - /polygon/polygon-migration-guide/
---

# CNS L1 to UNS L1: Domain Transfer Guide

This guide covers two options for transferring from CNS Layer 1 to UNS Layer 1. Both options call the safeTransferFrom function, but the second option passes the `_data` parameter of `abi.encode(['bool'], [false])`. See [Step 3](#step-3-select-a-safetransferfrom-option) for details on the safeTransferFrom domain transfer options.

## Prerequisites
* Token ID of minted domain on Layer 1 (Ethereum)
* Owner’s wallet address
* abiCoder.encode(['bool'], [false]) = `0x0000000000000000000000000000000000000000000000000000000000000000`

:::info
The `abiCoder.encode` pre-requisite is only needed for the second migration option, which uses the false boolean abider.encode parameter.
:::

## Step 1: Verify Contract Info for Each Registry
* Open the [CNS Layer 1 Contract](https://etherscan.io/address/0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe) page
* Open the [UNS Layer 1 Contract](https://etherscan.io/address/0x049aba7510f45BA5b64ea9E658E342F904DB358D) page
* Verify that you’ve opened the correct contracts by checking the Contract address (top of the page) and tracker field (right side of page).

### For CNS Layer 1
* contract address should be: `0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe`
* token tracker should read: `.crypto (UD)`

<figure>

![CNS Layer 1 contract address and tracker info](/images/cns-contract-verify.png)

<figcaption>CNS Layer 1 contract address and tracker info</figcaption>
</figure>

### For UNS Layer 1
* contract address should be: `0x049aba7510f45BA5b64ea9E658E342F904DB358D`
* token tracker should read: `Unstoppable Domains (UD)`

<figure>

![UNS Layer 1 contract address and tracker info](/images/uns-contract-verify.png)

<figcaption>UNS Layer 1 contract address and tracker info</figcaption>
</figure>

## Step 2: Verify Domain Ownership on CNS L1
* Retrieve the token ID of the domain you want to transfer.
* On the [CNS Layer 1 Contract](https://etherscan.io/address/0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe) page, select **Contract -> Read Contract ->** and scroll down to complete the **OwnerOf** function.
* Paste the **token ID** into the ‘ownerOf’ field.
* Select the **Query** button to check the ownership and confirm the location of the domain.
* Verify the **wallet address** returned by the OwnerOf query to ensure it is an exact match to your wallet address.

:::info
You will receive the owner’s wallet address in response to the `ownerOfquery` if the domain is located on the CNS registry. Otherwise, you will receive the ER721 error: "owner query for nonexistent token.”
:::

<figure>

![Image showing how to use the ownerOf function](/images/cnsL1-to-unsL1_small.png)

<figcaption>Image showing how to use the ownerOf function</figcaption>
</figure>

## Step 3: Select a safeTransferFrom Option
Before writing the contract, you must select a `safeTransferFrom` Option. Both of the safeTransferFrom options operate the same way on the backend, so it doesn’t matter which option is selected as long as all parameters are correctly entered.

### OPTION 1: safeTransferFrom function with three fields
* Complete the three `safeTransferFrom` fields: from, to, tokenId.
    * from (address): Enter the owner’s wallet address
    * to (address): Enter the UNS Layer 1 contract address
    * tokenId: Enter the tokenId of the domain you want to rewrite to the UNS registry (i.e., the same tokenID that you verified in Step 2 above)

<figure>

![safeTransferFrom Option 1 with 3 fields to complete](/images/cns-safe-transfer-option1.png)

<figcaption>safeTransferFrom Option 1 with 3 fields to complete</figcaption>
</figure>

### OPTION 2: safeTransferFrom function with four fields
* Complete the four `safeTransferFrom` fields: from, to, tokenId, _data.
    * from (address): Enter the owner’s wallet address
    * to (address): Enter the UNS Layer 1 contract address
    * tokenId: Enter the tokenId of the domain you want to rewrite to the UNS registry (i.e., the same tokenID that you verified in Step 2 above)
    * _data: enter the false boolean parameter required for this function, `0x0000000000000000000000000000000000000000000000000000000000000000`

<figure>

![safeTransferFrom Option 2 with 4 fields to complete](/images/cns-safe-transfer-option2.png)

<figcaption>safeTransferFrom Option 2 with 4 fields to complete</figcaption>
</figure>

## Step 4: Rewrite the Domain to UNS L1 Registry
* At the top of the [CNS Layer 1 Contract](https://etherscan.io/address/0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe) page, select **Contract -> Write Contract -> Connect to Web3** to connect your wallet.
* Then, select **Contract -> Write Contract** -> and scroll down to complete one of the `safeTransferFrom` options selected from [Step 3](#step-3-select-a-safetransferfrom-option).

<figure>

![Steps for writing the contract to CNS L1](/images/cns-write-contract-steps.png)

<figcaption>Steps for writing the contract to CNS L1</figcaption>
</figure>

* Select the **Write** button to rewrite or transfer the domain to the UNS Layer 1 registry.

:::info
If the ‘write’ button is grayed out, then scroll to the top of the page and select the Connect to Web3 button. Then, return to this section to write the contract.
:::

* **Sign the transaction** with your wallet address.
* Click the **View your transaction** button to verify the transaction, such as status, from, to, and tokens transferred fields.

<figure>

![CNS L1 transaction details UI](/images/cns-transaction-details.png)

<figcaption>CNS L1 transaction details UI</figcaption>
</figure>

## Step 5: Verify Domain Transfer to UNS L1
:::info
It is recommended that you double-check the transaction status by verifying domain ownership on the UNS Registry.
:::

* On the [UNS Layer 1 Contract](https://etherscan.io/address/0x049aba7510f45BA5b64ea9E658E342F904DB358D) page, select **Contract -> Read as Proxy** -> and scroll down to complete the **OwnerOf** function.

<figure>

![Verify domain transfer to UNS L1 using Contract -> Read as Proxy](/images/uns-L1-check-owner.png)

<figcaption>Verify domain transfer to UNS L1 using Contract -> Read as Proxy</figcaption>
</figure>

* Paste the **token ID** into the ‘ownerOf’ field.
* Select the **Query** button to check the ownership and confirm the location of the domain.
* Verify the **wallet address** returned by the `OwnerOf` query to ensure it is an exact match to your wallet address. If your wallet address is showing, then it means that your domain transferred successfully from CNS Layer 1 over to UNS Layer 1.

:::success
**Congratulations!** You just migrated your domain from CNS L1 to UNS L1!
:::
