---
title: Resolution CLI | Unstoppable Domains Developer Portal
description: This page reviews the Resolution CLI option for resolving a domain. This option is fully supported and maintained by UD.
---

# Resolution CLI

The Resolution-CLI is built and maintained by Unstoppable Domains. It is a simple CLI tool for resolving Unstoppable domains and interacting with NFT domain names. It can be used to retrieve [payment addresses](../crypto-payments/index.md), IPFS hashes for [decentralized websites](../d-websites/index.md), DNS records and other [records types](../getting-started/domain-registry-essentials/records-reference.md). Each Resolution Library is built and maintained by Unstoppable Domains, so updates happen automatically.

For more information on resolving domains using the Resolution CLI option, please see the [Resolution CLI Repository](https://github.com/unstoppabledomains/resolution-cli) on Github.

:::warning important
Unstoppable Domains periodically releases new domain endings, and our Resolution libraries and APIs will automatically detect and support them. Therefore, do not implement a front end filter into your application (e.g. hard coding domains or placing a regex filter for just .crypto, .nft, etc.). We also provide an [API endpoint to query for supported domain endings](resolution-service/endpoints/get-supported-tlds.md).
:::

## Use Case: Retrieve an ETH Address

This will retrieve the ETH address of a domain:

```shell
resolution resolve addr ETH -d brad.crypto
"0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
```

The crypto.ETH.address can be located in the [Records Reference](../getting-started/domain-registry-essentials/records-reference.md).

## Use Case: Retrieve a Domain Record

And this will retrieve any record from the domain, if it exists, and return the following records:

```shell
resolution resolve records crypto.ETH.address crypto.BTC.address -d brad.crypto
{
   "records": {
      "crypto.BTC.address": "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y",
      "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
   }
}
```

## Supported Domains for Resolution CLI

The Resolution CLI supports decentralized domains across two main zones:

| Name Service                   | Supported Domains                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| Zilliqa Name Service (ZNS)     | `.zil`                                                                                 |
| Unstoppable Name Service (UNS) | `.crypto`, `.nft`, `.blockchain`, `.bitcoin`, `.coin`, `.wallet,` `.888`, `.dao`, `.x` |

## Error Codes

Below is a list of all the error codes you might encounter when using the Resolution CLI.

| Error Code | Description |
|---|---|
| Domain is not registered | Thrown when you resolve a domain not owned by any address. |
| Domain does not have configured Resolver | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| Domain is not supported by naming service | Thrown when you resolve a domain with an ending not supported by the CLI. |
| Method is not supported | Thrown when the CLI is trying to use a method not supported by the naming service its resolving from. |
| Domain was returned from metadata provider | Thrown when you resolve an invalid domain address. |
| Invalid UNS configuration value | Thrown when the UNS resolution service is misconfigured. |

<embed src="/snippets/_discord.md" />
