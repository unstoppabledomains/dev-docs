---
title: Get Supported TLDs | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get supported TLDs` endpoint.
---

# Get Supported TLDs

```
GET https://resolve.unstoppabledomains.com/supported_tlds
```

This endpoint returns all the domain endings provided and supported by Unstoppable Domains.

## URL Params

* none

## Query Params

* none

## Returns

An object with a `tlds` field which contains a list of domain endings supported by Unstoppable Domains.

## Example

Here is an example request to query for the domain endings supported by Unstoppable Domains:

### Request

```bash
curl --location --request GET 'https://resolve.unstoppabledomains.com/supported_tlds'
```

### Response

```json
{
    "tlds": [
        "crypto",
        "wallet",
        "blockchain",
        "bitcoin",
        "x",
        "888",
        "nft",
        "dao",
        "zil"
    ]
}
```

<embed src="/snippets/_discord.md" />
