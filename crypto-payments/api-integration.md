---
title: Integrate Crypto Payments Using the Resolution API | UD Developer Portal
description: This page covers integrating crypto payments into your applications using Unstoppable Domains Resolution Service API.
---

# Integrate Crypto Payments Using the Resolution API

Unstoppable Domains provides an HTTP-based API for getting domain data and metadata from every supported blockchain without accessing any blockchain APIs. Please see the [Resolution Service API](/developer-toolkit/resolution-integration-methods/resolution-service/overview.md) guide for a detailed description and configuration.

## Get Records for a Domain

To get the records attached to a domain, you must send a `GET` request to the `domains` endpoint and provide the `domain name` parameter in your request. The endpoint will return all configured resolution records and domain metadata in a single response.

## Example

The code snippet below shows how to resolve the records and metadata for the `brad.crypto` domain:

### Request

```bash
curl \
--request GET 'https://unstoppabledomains.g.alchemy.com/domains/brad.crypto' \
--header 'Authorization: Bearer <YOUR API KEY>'
```

### Response

The Resolution Service API will return the following response to the request above:

```json
{
  "records": {
    "ipfs.html.value": "QmVHmG6BDRsDuzcFrWw6m5ByDnzcvfQbmdQF9bbSFTUeD1",
    "crypto.ADA.address": "DdzFFzCqrhsuwQKiR3CdQ1FzuPAydtVCBFTRdy9FPKepAHEoXCee2qrio975M4cEbqYwZBsWJTNyrJ8NLJmAReSwAakQEHWBEd2HvSS7",
    "crypto.BTC.address": "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y",
    "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8",
    "gundb.username.value": "0x8912623832e174f2eb1f59cc3b587444d619376ad5bf10070e937e0dc22b9ffb2e3ae059e6ebf729f87746b2f71e5d88ec99c1fb3c7c49b8617e2520d474c48e1c",
    "social.picture.value": "1/erc1155:0xc7e5e9434f4a71e6db978bd65b4d61d3593e5f27/14317",
    "gundb.public_key.value": "pqeBHabDQdCHhbdivgNEc74QO-x8CPGXq4PKWgfIzhY.7WJR5cZFuSyh1bFwx0GWzjmrim0T5Y6Bp0SSK0im3nI",
    "ipfs.redirect_domain.value": "https://abbfe6z95qov3d40hf6j30g7auo7afhp.mypinata.cloud/ipfs/Qme54oEzRkgooJbCDr78vzKAWcv6DDEZqRhhDyDtzgrZP6"
  },
  "meta": {
    "domain": "brad.crypto",
    "blockchain": "ETH",
    "networkId": 1,
    "owner": "0x8aad44321a86b170879d7a244c1e8d360c99dda8",
    "resolver": "0xb66dce2da6afaaa98f2013446dbcb0f4b0ab2842",
    "registry": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe"
  }
}
```

:::info
Please see the [Records Reference](/developer-toolkit/reference/records-reference.md) guide for information about supported crypto payment tickers and chain versions.
:::

<embed src="/snippets/_discord.md" />
