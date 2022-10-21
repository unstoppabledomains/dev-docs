---
title: Get Domains Suggestions Guide | Unstoppable Domains Developer Portal
description: This guide shows how to get suggestions of available free and paid domains to purchase with your Partner account.
---

# Get Domains Suggestions Guide

The Partner API offers an endpoint that provides free and paid domain suggestions available for purchase based on the entered information. Partners can use this endpoint to implement a domain suggestions field in their application to shows users alternative domains they can purchase if what they want isn't available.

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
| search | ARRAY[STRING] | NO | Keywords that will be used to build domain suggestions. It can be domain name(s) with or without TLD |
| tlds | ARRAY[STRING] | NO | Specific TLDs the suggestions should be limited to |

:::info
If your request must include multiple `search` or `tlds` fields, you need to use a new `search` or `tlds` query param instance for each keyword and TLD filter.
:::

## Step 4: Use the Get Domains Suggestions Endpoint

The Partner API has two endpoints for generating domain name suggestions: one for paid domains and another for free domains.

Send a `GET` request with the authorization headers and query parameters you have prepared to the `Get Domains Suggestions` or `Get Free Domains Suggestions` endpoint. Here is the URL for our API environments:

### Get Domains Suggestions

Sandbox Environment:

```bash
https://api.ud-sandbox.com/api/v2/resellers/{{ PARTNER_RESELLERID }}/domains/suggestions?search={{ KEYWORD }}&tlds={{ TLD_TO_FILTER }}
```

Production Environment:

```bash
https://unstoppabledomains.com/api/v2/resellers/{{ PARTNER_RESELLERID }}/domains/suggestions?search={{ KEYWORD }}&tlds={{ TLD_TO_FILTER }}
```

### Get Free Domains Suggestions

Sandbox Environment:

```bash
https://api.ud-sandbox.com/api/v2/resellers/{{ PARTNER_RESELLERID }}/domains/suggestions/free?search={{ KEYWORD }}&tlds={{ TLD_TO_FILTER }}
```

Production Environment:

```bash
https://unstoppabledomains.com/api/v2/resellers/{{ PARTNER_RESELLERID }}/domains/suggestions/free?search={{ KEYWORD }}&tlds={{ TLD_TO_FILTER }}
```

:::info
If the Partner isn't eligible to mint free domains, the [Get Free Domains Suggestions](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions~1free/get) endpoint will return an error.
:::

## Get Domains Suggestions Example

Here is an example request to generate paid domain suggestions with the following parameters:

| Parameter | Value |
| - | - |
| Keywords | buyadomain.dao, hosting, doctor |
| TLD Filter | dao, nft |

### Request

```bash
curl --location --request GET 'https://api.ud-sandbox.com/api/v2/resellers/{{ PARTNER_RESELLERID }}/domains/suggestions?search=buyadomain.dao&search=hosting&search=doctor&tlds=dao&tlds=wallet' \
--header 'Authorization: Bearer {{ SECRET_API_TOKEN }}'
```

### Response

```json
[
  {
      "name": "buyadomain.dao",
      "price": 20
  },
  {
      "name": "buyadomainag.wallet",
      "price": 20
  },
  {
      "name": "prhosting.dao",
      "price": 20
  },
  {
      "name": "hostingdb.dao",
      "price": 20
  },
  {
      "name": "brdoctor.wallet",
      "price": 20
  }
]
```

:::success Congratulations!
You have successfully gotten suggestions of available free and paid domains to purchase with the Partner API.
:::

<embed src="/snippets/_discord.md" />
