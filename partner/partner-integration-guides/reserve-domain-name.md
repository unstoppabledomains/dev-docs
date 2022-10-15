---
title: Reserve Domain Name Guide | Unstoppable Domains Developer Portal
description: This guide shows how to reserve a domain name to purchase at a later date with your Partner account.
---

# Reserve Domain Name Guide

The Partner API offers an endpoint that allows Partners to reserve available domains so they'll be minted at a later date. Reserved domains become unavailable to be claimed and minted by anyone except the Partner that reserved it for 168 hours (7 days).

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Your Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 3: Prepare Request Body

The request body contains information about your order and must be in JSON format for the API. Here’s the structure:

```javascript
{
  "resellerIdentityKey": string // unique domain reservation identifier
}
```

:::info
Partners can only reserve one domain per reservation identifier and are allowed to use **ANY STRING VALUE** for the `resellerIdentityKey` parameter.
:::

## Step 4: Use the Reserve Domain Name Endpoint

Send a `GET` request with the authorization headers and request body you have prepared to check to the Reserve Domain Name endpoint. Here is the URL for our API environments:

Sandbox Environment:

```bash
https://api.ud-sandbox.com/api/v2/resellers/{{ PARTNER_RESELLERID }}/domains/{{ DOMAIN_NAME }}/reserve/
```

Production Environment:

```bash
https://unstoppabledomains.com/api/v2/resellers/{{ PARTNER_RESELLERID }}/domains/{{ DOMAIN_NAME }}/reserve/
```

:::info
The `PARTNER_RESELLERID` path parameter is the same one you retrieved from your partner account earlier.
:::

## Reserve Domain Name Example

Here is an example request to reserve a domain name with the following parameters:

| Parameter | Value |
| - | - |
| Domain Name | partner-test-67687986466871.crypto |
| Reservation ID | test-reservation-id |

### Request

```bash
curl --location --request GET 'https://api.ud-sandbox.com/api/v2/resellers/{{ PARTNER_RESELLERID }}/domains/partner-test-67687986466871.crypto/reserve/' \
--header 'Authorization: Bearer {{ SECRET_API_TOKEN }}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "resellerIdentityKey": "test-reservation-id"
}'
```

### Response

```json

```

## Minting a Reserved Domain Name

To mint a domain you have reserved, you need to fill the `resellerIdentityKey` request body parameter in the [Buy a Domain or Claim for Free](https://docs.unstoppabledomains.com/openapi/reference/#tag/orders/paths/~1orders/post) endpoint with the domain reservation identifier.

```json
{
  "payment": {
    "method": "{{ PAYMENT_METHOD }}"
  },
  "domains": [
    {
      "name": "{{ DOMAIN_NAME }}",
      "ownerAddress": "{{ MINTING_ADDRESS }}",
      "resellerIdentityKey": "{{ DOMAIN_RESERVATION_ID }}"
    }
  ]
}
```

:::success Congratulations!
You have successfully reserved a domain name with the Partner API.
:::

<embed src="/snippets/_discord.md" />
