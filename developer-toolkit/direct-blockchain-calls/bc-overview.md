---
title: Resolve Domains with Direct Blockchain Calls | UD Developer Portal
description: These guides demonstrate the process for resolving domains using direct blockchain calls and a few examples of how to use this to build applications.
---

# Resolve Domains With Direct Blockchain Calls

NFT domain names are domain names launched as smart contracts on public blockchains. What sets them apart from traditional domain names (like `.com`) is that NFT domains are stored by their owners in their wallet like cryptocurrency, and no third party can change or remove them.

One strategy for resolving domains is to read directly from the blockchain. This is a secure method of resolving domains, but this method requires manual updates and modifications as it is not maintained by UD like the [Resolution Libraries](../resolution-libraries/libraries-overview.md) or [Resolution CLI](../resolution-cli.md).

:::warning important
Unstoppable Domains periodically releases new domain endings, and our Resolution libraries and APIs will automatically detect and support them. Therefore, do not implement a front-end filter into your application (e.g., hard-coding domains or placing a regex filter for just .crypto, .nft, etc.). We also provide an [API endpoint to query for supported domain endings](../resolution-service/endpoints/get-supported-tlds.md).
:::

## **Use Cases**

* [Resolve Unstoppable Domains with Direct Blockchain Calls](resolve-unstoppable-domain-names.md)
* [Resolve .zil with Direct Blockchain Calls](resolve-zil-without-libraries.md)
* [Resolve Domains with Ethereum Smart Contracts](resolve-eth-smart-contracts.md)

<embed src="/snippets/_discord.md" />
