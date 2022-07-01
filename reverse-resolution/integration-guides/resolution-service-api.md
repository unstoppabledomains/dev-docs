---
title: Resolution Service API Integration Guide | UD Developer Portal
description: This guide covers how to retrieve the reverse record of UD domains using the Resolution Libraries. This process requires using the language-specific and blockchain-agnostic libraries managed by Unstoppable Domains.
---

# Resolution Service API Integration Guide

Unstoppable Domains provides an HTTP-based API for getting domain data and metadata from every supported blockchain without accessing any blockchain APIs. Please see the [Resolution Service API](../../developer-toolkit/resolution-service/overview.md) guide for a detailed description and configuration.

## Get Reverse Record for an Address

To get the reverse record of a wallet address, you must send a `GET` request to the `reverse` endpoint and provide the `wallet address` parameter in your request. The endpoint will return the reverse record of the wallet address and all the configured resolution records and domain metadata in a single response.

## Example

The code snippet below shows how to query for the reverse record for the `"0xcb9c0e0Cd1949a42C4F876C384647aD652a95886"` wallet address:

### Request

```bash
curl \
--request GET "https://unstoppabledomains.g.alchemy.com/reverse/0xcb9c0e0Cd1949a42C4F876C384647aD652a95886" \
--header 'Authorization: Bearer <YOUR API KEY>'
```

### Response

```json
{
  "meta": {
    "domain": "brad.crypto",
    "owner": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8",
    "resolver": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe",
    "registry": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe",
    "blockchain": "ETH",
    "networkId": 1337,
  },
  "records": {
    "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8",
  }
}
```

<embed src="/snippets/_discord.md" />
