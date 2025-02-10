---
title: Records Reference | Unstoppable Domains Developer Portal
description: This page contains an overview of all standardized domain records. It covers crypto payments, social records, and browser resolution for DWeb and DNS.
redirectFrom:
  - /developer-toolkit/reference/records-reference/
---

# Records Reference

This reference page is divided into sections, grouping records by their namespaces and use-cases:

- [Records Reference](#records-reference)
  - [Cryptocurrency payments](#cryptocurrency-payments)
    - [Single-chain currencies](#single-chain-currencies)
    - [Multi-chain currencies](#multi-chain-currencies)
    - [Blockchain Family, Network, Token Level Addresses](#blockchain-family-network-token-level-addresses)
  - [Browser resolution](#browser-resolution)
    - [DWeb records](#dweb-records)
    - [DNS records](#dns-records)
    - [Deprecated records](#deprecated-records)
  - [Social records](#social-records)
    - [Deprecated records](#deprecated-records-1)

Developers may also set custom records for the domains. Domain records are stored as a key-value dictionary by domains and are not validated on the smart-contract level. For more details, read [CNS Architecture](/smart-contracts/overview/cns-architecture-overview.md), [UNS Architecture](/smart-contracts/overview/uns-architecture-overview.md), and [Managing Domain Records](/smart-contracts/quick-start/manage-domain-records.md).

:::info
A list of keys supported by Unstoppable Domains can be found in [reference json file](https://github.com/unstoppabledomains/uns/blob/main/resolver-keys.json)
:::

## Cryptocurrency payments

### Single-chain currencies

See [example](/resolution/quickstart/resolution/#resolve-wallet-addresses) for how to resolve the address format

**`crypto.ETH.address`**

Ethereum address to receive cryptocurrency payments.

| Format              | Example                                      |
| ------------------- | -------------------------------------------- |
| `0x[0-9a-fA-F]{40}` | `0x0f4a10a4f46c288cea365fcf45cccf0e9d901b94` |

**`crypto.BTC.address`**

Bitcoin address to receive cryptocurrency payments.

| Format                      | Example                           |
| --------------------------- | --------------------------------- | ------------------------------------ |
| `bc1[ac-hj-np-z02-9]{6,87}$ | ^[13][a-km-za-hj-np-z1-9]{25,39}` | `1Nb7Mt1EqUqxxrAdmefUovS7aTgMUf2A6m` |

**`crypto.<TICKER>.address`**

Cryptocurrency address of the ticker.

### Multi-chain currencies

Some currencies exist on multiple chains.

See [example](/resolution/quickstart/resolution/#resolve-wallet-addresses) for how to resolve the address format

**`crypto.USDT.version.ERC20.address`**

| Format              | Example                                      |
| ------------------- | -------------------------------------------- |
| `0x[0-9a-fA-F]{40}` | `0x8aaD44321A86b170879d7A244c1e8d360c99DdA8` |

**`crypto.USDT.version.TRON.address`**

| Format            | Example                              |
| ----------------- | ------------------------------------ |
| `[a-zA-Z0-9]{34}` | `THG9jVSMfKEbg4vYTYWjmLRyga3CKZdDsk` |

**`crypto.USDT.version.EOS.address`**

| Format                       | Example              |
| ---------------------------- | -------------------- |
| `[a-z][a-z1-5.]{10}[a-z1-5]` | `unstoppabledomains` |

**`crypto.USDT.version.OMNI.address`**

| Format | Example                        |
| ------ | ------------------------------ | ------------------------------------ |
| `(bc1  | [13])[a-zA-HJ-NP-Z0-9]{25,39}` | `16df369whGV8o3DVeGBmfSNwytaqZGWtYJ` |

**`crypto.<TICKER>.version.<VERSION>.address`**

Cryptocurrency address of ticker version


### Blockchain Family, Network, Token Level Addresses

Wallet address of specific token can be derived from block chain family and network.
See [example](/resolution/quickstart/resolution/#resolve-wallet-addresses) for how to resolve the address format

**`token.EVM.address`**

| Format              | Example                                      |
| ------------------- | -------------------------------------------- |
| `0x[0-9a-fA-F]{40}` | `0x8aaD44321A86b170879d7A244c1e8d360c99DdA8` |

**`token.<FAMILY>.address`**
Cryptocurrency address of blockchain family version


**`token.EVM.ETH.address`**

| Format              | Example                                      |
| ------------------- | -------------------------------------------- |
| `0x[0-9a-fA-F]{40}` | `0x8aaD44321A86b170879d7A244c1e8d360c99DdA8` |

**`token.<FAMILY>.<NETWORK>.address`**
Cryptocurrency address of blockchain network version


**`token.EVM.AVAX.USDT.address`**

| Format              | Example                                      |
| ------------------- | -------------------------------------------- |
| `0x[0-9a-fA-F]{40}` | `0x8aaD44321A86b170879d7A244c1e8d360c99DdA8` |

**`token.<FAMILY>.<NETWORK>.<TOKEN>.address`**
Cryptocurrency address of token version

## Browser resolution

Browser resolution is described in the [Browser Resolution Algorithm](/resolution/guides/browser-resolution/algorithm.md) page.

**`browser.preferred_protocols`**

Protocols that browser should prioritize to display content for.

| Format                | Example           |
| --------------------- | ----------------- |
| JSON serialized array | `["ipfs","http"]` |

**`browser.redirect_url`**

A fallback URL, to which a user will be redirected if no other resolution method is supported.

| Format                                                    | Example                        |
| --------------------------------------------------------- | ------------------------------ |
| [RFC-1738](https://datatracker.ietf.org/doc/html/rfc1738) | `http://example.com/home.html` |

### DWeb records

For more details, read [Browser Resolution Algorithm - DWeb Records](/resolution/guides/browser-resolution/algorithm.md#decentralized-web-records).

**`dweb.ipfs.hash`**

IPFS network content hash.

| Format            | Example                                          |
| ----------------- | ------------------------------------------------ |
| `[0-9a-zA-Z]{46}` | `QmVaAtQbi3EtsfpKoLzALm6vXphdi2KjMgxEDKeGg6wHvK` |

**`dweb.bzz.hash`**

Swarm network content hash.

| Format         | Example                                                            |
| -------------- | ------------------------------------------------------------------ |
| `[0-9a-f]{64}` | `d1f25a870a7bb7e5d526a7623338e4e9b8399e76df8b634020d11d969594f24a` |

### DNS records

For more details, see [Browser Resolution Algorithm - DNS Records](/resolution/guides/browser-resolution/algorithm.md#dns-records).

**`dns.ttl`**

Default TTL setting for all DNS records.

| Format | Example |
| ------ | ------- |
| `\d+`  | `128`   |

**`dns.A`**

DNS A record IP addresses.

| Format                | Example                   |
| --------------------- | ------------------------- |
| JSON serialized array | `["10.0.0.1","10.0.0.2"]` |

**`dns.A.ttl`**

TTL setting for all A records.

| Format | Example |
| ------ | ------- |
| `\d+`  | `128`   |

**`dns.CNAME`**

DNS CNAME record IP addresses.

| Format                | Example            |
| --------------------- | ------------------ |
| JSON serialized array | `["example.com."]` |

**`dns.CNAME.ttl`**

TTL setting for all CNAME records.

| Format | Example |
| ------ | ------- |
| `\d+`  | `128`   |

**`dns.<RECORD>`**

Specified DNS record values.

| Format                | Example            |
| --------------------- | ------------------ |
| JSON serialized array | `["example.com."]` |

**`dns.<RECORD>.ttl`**

TTL setting for corresponding type of records.

| Format | Example |
| ------ | ------- |
| `\d+`  | `164`   |

### Deprecated records

**`ipfs.html.value`**

Deprecated: use `dweb.ipfs.hash` instead.

| Format            | Example                                          |
| ----------------- | ------------------------------------------------ |
| `[0-9a-zA-Z]{46}` | `QmVaAtQbi3EtsfpKoLzALm6vXphdi2KjMgxEDKeGg6wHvK` |

**`ipfs.redirect_domain.value`**

Deprecated: use `browser.redirect_url` instead.

| Format                                                    | Example                        |
| --------------------------------------------------------- | ------------------------------ |
| [RFC-1738](https://datatracker.ietf.org/doc/html/rfc1738) | `http://example.com/home.html` |

## Social records

**`social.picture.value`**

Stores data about the PFP of a Web3 domain (type of NFT, contract address, token ID).

| Format | Example                                                      |
| ------ | ------------------------------------------------------------ |
| None   | `1/erc1155:0xc7e5e9434f4a71e6db978bd65b4d61d3593e5f27/14317` |

**`whois.email.value`**

Public email addresses of the domain owner.

| Format                 | Example             |
| ---------------------- | ------------------- |
| `^[^@]+@[^\\.]+\\..+$` | `brad.crypto@ud.me` |

**`whois.for_sale.value`**

Indicates if a domain if available for sale.

| Format  | Example  |
| ------- | -------- | ------ |
| `(true) | (false)` | `true` |

**`forwarding.url`**

Off-chain source to implement records forwarding. For example, if you want to change your `crypto.ETH.address` every 10 seconds, you may set the `forwarding.url` record to `https://my-record-provider/records/bob` and make sure that URL returns a different `crypto.ETH.address` all the time.

| Format                             | Example                                  |
| ---------------------------------- | ---------------------------------------- |
| `^(https?)://[^\\s/$.?#].[^\\s]*$` | `https://my-record-provider/records/bob` |

### Deprecated records

**`social.twitter.username`**

Twitter username of the domain owner.

| Format | Example      |
| ------ | ------------ |
| None   | `giozaarour` |

**`validation.social.twitter.username`**

A signature generated by some authority confirming the domain owner indeed possesses this Twitter username.

| Format | Example                                                                                                                                |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| None   | `0x7623989b6437e52560b3b5ac13a6bbcb64ac4274d25daa877379d99d7c9ebcae51a845f7a9a18cd7465b5c12d7fefaf3655fe4bc4abed1aea1dc5e04f2f67bff1b` |

**`gundb.username.value`**

**`gundb.public_key.value`**

**`social.payid.name`**
