---
title: Resolution CLI | Unstoppable Domains Developer Portal
description: This page reviews the Resolution CLI option for resolving a domain. This option is fully supported and maintained by UD.
---

# Resolution CLI

The Resolution-CLI is built and maintained by Unstoppable Domains. It is a simple CLI tool for resolving Unstoppable domains and interacting with NFT domain names. It can be used to retrieve [payment addresses](/crypto-payments/index.md), IPFS hashes for [decentralized websites](/d-websites/index.md), DNS records and other [records types](/developer-toolkit/reference/records-reference.md). Each Resolution Library is built and maintained by Unstoppable Domains, so updates happen automatically.

For more information on resolving domains using the Resolution CLI option, please see the [Resolution CLI Repository](https://github.com/unstoppabledomains/resolution-cli) on Github.

## Supported Domains for Resolution CLI

<embed src="/snippets/_supported-domains.md" />

:::warning important
<embed src="/snippets/_new_tld_warning.md" />
:::

## Installing Resolution CLI

To use resolution via the command line, [download one of the binaries](https://github.com/unstoppabledomains/resolution-cli/releases) or install using Go.

```
go get -u github.com/unstoppabledomains/resolution-cli/resolution
```

## Use Case: Retrieve an ETH Address

This will retrieve the ETH address of a domain:

```shell
resolution resolve addr ETH -d brad.crypto
"0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
```

The crypto.ETH.address can be located in the [Records Reference](/developer-toolkit/reference/records-reference.md).

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
