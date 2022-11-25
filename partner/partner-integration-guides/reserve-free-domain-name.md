---
title: Reserve Free Domain Name Guide | Unstoppable Domains Developer Portal
description: This guide shows how to reserve a free and available domain name to purchase at a later date with your Partner account.
---

# Reserve Free Domain Name Guide

The Partner API offers an endpoint that allows Partners to reserve free and available domains so they'll be minted at a later date. Reserved domains become unavailable to be claimed and minted by anyone except the Partner that reserved it for 168 hours (7 days).

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Request Body

The request body contains information about your order and must be in JSON format for the API. Here’s the structure:

```javascript
{
  "resellerIdentityKey": string // unique domain reservation identifier
}
```

To reserve a free and available domain, the partner must provide a unique user identifier (this could be an email or some other internal user identifier). The same identifier must be provided in the `resellerIdentityKey` parameter when minting the domain (using the [Buy a Domain or Claim for Free](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostOrders) endpoint).

## Step 3: Prepare Your Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 4: Use the Reserve Free Domain Name Endpoint

Send a `POST` request with the authorization headers and request body you have prepared to check to the `Reserve Free Domain Name` endpoint. Here is the URL for our API environments:

Sandbox Environment:

```bash
https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/domains/{DOMAIN_NAME}/reserve/
```

Production Environment:

```bash
https://unstoppabledomains.com/api/v2/resellers/{PARTNER_RESELLERID}/domains/{DOMAIN_NAME}/reserve/
```

:::info
The `PARTNER_RESELLERID` path parameter is the same one you retrieved from your partner account earlier.
:::

## Example

Here is an example request to reserve a domain name with the following parameters:

| Parameter | Value |
| - | - |
| Domain Name | partner-test-67687986466871.crypto |
| Reservation ID | test-reservation-id |

### Request

```bash
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/domains/partner-test-67687986466871.crypto/reserve/' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "resellerIdentityKey": "test-reservation-id"
}'
```

### Minting a Reserved Domain Name

To mint a domain you have reserved, you need to fill the `resellerIdentityKey` request body parameter in the [Buy a Domain or Claim for Free](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostOrders) endpoint with the domain reservation identifier.

```bash
curl --location --request POST 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/orders/' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "payment": {
    "method": "free"
  },
  "security": "{ORDER_SECURITY}",
  "domains": [
    {
      "name": "partner-test-67687986466871.crypto",
      "ownerAddress": "{DOMAIN_OWNER_ADDRESS}",
      "resellerIdentityKey": "test-reservation-id"
    }
  ]
}'
```

:::success Congratulations!
You have successfully reserved a domain name with the Partner API.
:::

<embed src="/snippets/_discord.md" />
