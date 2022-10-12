---
title: Get Domains Suggestions Guide | Unstoppable Domains Developer Portal
description: This guide shows how to get suggestions of available free and paid domains to purchase with your Partner account.
---

# Get Domains Suggestions Guide

The Partner API offers an endpoint that provides free and paid domain suggestions available for purchase based on the entered information. You can use this endpoint to implement a domain suggestions field in your application that shows users alternative domains they can purchase if what they want isn't available.

<figure>

![Domain suggestions field example](/images/domain-suggestions-field.png '#width=70%;')

<figcaption>Domain suggestions field example</figcaption>
</figure>

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Your Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 3: Prepare Query Parameters

The Partner API suggestions endpoints accepts the `search` and `tlds` fields as query parameters to build domain name suggestions:

| Name | Type | Mandatory | Description |
| - | - | - | - |
| search | ARRAY[STRING] | NO | Keywords that will be used to build domain suggestions. It can be a TLD or domain name |
| tlds | ARRAY[STRING] | NO | Specific TLDs the suggestions should be limited to |

:::info
If your request must include multiple `search` or `tlds`, you need to use a new `search` or `tlds` query param instance for each keyword and TLD filter.
:::

## Step 4: Use the Get Domains Suggestions Endpoint

The Partner API has two endpoints for generating domain name suggestions: one for paid domains and another for free domains.

Send a `GET` request with the authorization headers and query parameters you have prepared to the [Get Domains Suggestions](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions/get) or [Get Free Domains Suggestions](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions~1free/get) endpoint. Here is the URL for our API environments:

Sandbox Environment:

```
GET https://api.ud-sandbox.com/api/v2/resellers/{{PARTNER_RESELLERID}}/domains/suggestions?search={{KEYWORD}}&tlds={{TLD_TO_FILTER}}
GET https://api.ud-sandbox.com/api/v2/resellers/{{PARTNER_RESELLERID}}/domains/suggestions/free?search={{KEYWORD}}&tlds={{TLD_TO_FILTER}}
```

Production Environment:

```
GET https://unstoppabledomains.com/api/v2/resellers/{{PARTNER_RESELLERID}}/domains/suggestions?search={{KEYWORD}}&tlds={{TLD_TO_FILTER}}
GET https://unstoppabledomains.com/api/v2/resellers/{{PARTNER_RESELLERID}}/domains/suggestions/free?search={{KEYWORD}}&tlds={{TLD_TO_FILTER}}
```

:::info
The `PARTNER_RESELLERID` path parameter is the same one you retrieved from your partner account earlier.
:::

:::info
If the Partner isn't eligible to mint free domains, the [Get Free Domains Suggestions](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions~1free/get) endpoint will return an error.
:::

## Get Domains Suggestions Example

Here is an example request to generate paid domain suggestions with the following parameters:

| Parameter | Value |
| - | - |
| Keywords | john, smith, doctor |
| TLD Filter | nft, wallet |

### Request

```bash
curl --location --request GET 'https://unstoppabledomains.com/api/v2/resellers/{{ResellerID}}/domains/suggestions?search=john&search=smith&search=doctor&tlds=nft&tlds=wallet' \
--header 'Authorization: Bearer {{Secret API Token}}'
```

### Response

```json
[
    {
        "name": "john.nft",
        "price": 20000
    },
    {
        "name": "spjohn.nft",
        "price": 100
    },
    {
        "name": "smithhq.nft",
        "price": 40
    },
    {
        "name": "brdoctor.nft",
        "price": 20
    }
]
```

:::success Congratulations!
You have successfully gotten suggestions of available free and paid domains to purchase with the Partner API.
:::

<embed src="/snippets/_discord.md" />
