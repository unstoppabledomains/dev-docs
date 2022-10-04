---
title: Get Domain Image Source | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Domain Image Source` endpoint.
---

# Get Domain Image Source

```
https://resolve.unstoppabledomains.com/image-src/<domainOrToken>
```

This endpoint returns the image data of a domain name in `image/svg+xml` format.

## Request Method

* GET

## Authentication

* none

## URL Params

| Name | Type | Mandatory | Description |
| - | - | - | - |
| domainOrToken | STRING | YES | A domain name or the [namehash](/getting-started/domain-registry-essentials/namehashing.md) of a domain registered by Unstoppable Domains. See all the [supported domain endings](../overview.md#supported-domains-endings) |

## Query Params

* none

## Returns

The image data of the domain in `image/svg+xml` format.

## Example

Here is an example request to retrieve the SVG image data of the `brad.crypto` domain:

### Request

```bash
curl --location --request GET 'https://resolve.unstoppabledomains.com/image-src/brad.crypto'
```

### Response

<figure>

![brad.crypto domain image data](/images/brad.crypto.svg '#width=40%')

<figcaption>brad.crypto domain image data</figcaption>
</figure>

<embed src="/snippets/_discord.md" />
