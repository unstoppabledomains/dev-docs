---
title: Get Domain SVG Image | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Domain SVG Image` endpoint.
---

# Get Domain SVG Image

```bash
https://resolve.unstoppabledomains.com/image/{domainOrToken}
```

This endpoint returns the image data of a domain name as a SVG string.

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

An object with the following field:

* `image_data`: (string) The image data as a SVG string.

## Example

Here is an example request to retrieve the SVG image data of the `brad.crypto` domain:

### Request

```bash
curl --location --request GET 'https://resolve.unstoppabledomains.com/image/brad.crypto'
```

### Response

```json
{
    "image_data": "image/svg+xml form of the domain image data"
}
```

<embed src="/snippets/_discord.md" />
