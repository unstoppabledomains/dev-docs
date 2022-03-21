---
title: Resolution CLI
description: This page reviews the Resolution CLI option for resolving a domain. This option is fully supported and maintained by UD.
---

The Resolution-CLI is built and maintained by Unstoppable Domains. It is a simple CLI tool for resolving Unstoppable domains and interacting with blockchain domain names. It can be used to retrieve [payment addresses](crypto-payments.md), IPFS hashes for [decentralized websites](../build-a-decentralized-website/overview-of-ipfs-and-d-web.md), DNS records and other [records types](../domain-registry-essentials/records-reference.md).

For more information on resolving domains using the Resolution CLI option, please see the [Resolution CLI Repository](https://github.com/unstoppabledomains/resolution-cli) on Github.

## Use Case: Retrieve the ETH Address

This will retrieve the ETH address:

```shell
resolution resolve addr ETH -d brad.crypto
"0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
```

The crypto.ETH.address can be located in the [Records Reference](../getting-started/domain-registry-essentials/records-reference/).

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

## Support

If you have any questions or need assistance with using UD Resolution CLI, join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from us and the community.
