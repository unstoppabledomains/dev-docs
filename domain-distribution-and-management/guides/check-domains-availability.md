---
title: Check Domains Availability Guide | Unstoppable Domains Developer Portal
description: This guide shows how to check the availability of multiple domain names before purchase with your Partner account.
redirectFrom:
  - /partner/partner-integration-guides/domain-name-availability/
  - /partner/partner-integration-guides/multiple-domain-name-availability/
---

# Check Domains Availability

The Partner API offers an endpoint that lets you check the availability of multiple domain names before purchase to avoid making minting calls to non-available domains. Partners can use this endpoint to implement a bulk domain name search field in their application, allowing users to search for multiple domains simultaneously.

<figure>

![Multiple domain search field example](/images/multiple-domain-search-field.png)

<figcaption>Multiple domain search field example</figcaption>
</figure>

## Step 1: Retrieve Your Reseller ID and Secret API Token

<embed src="/snippets/_reseller-id-location.md" />

## Step 2: Prepare Query Parameters

The `Multiple Domain Name Availability` endpoint requires a `search` field which contains the domain name(s) to check with or without TLD. If you omit the domain name TLD, the endpoint will return the domain name with all the [supported domain endings](https://docs.unstoppabledomains.com/openapi/resolution/#operation/StatusController.listSupportedTlds).

| Name   | Type          | Mandatory | Description                                                       |
| ------ | ------------- | --------- | ----------------------------------------------------------------- |
| search | ARRAY[STRING] | YES       | Domain name(s) to check their availability. You can omit the TLD. |

:::info
If your request must include multiple `search` fields, you need to use a new `search` query param instance for each domain name.
:::

## Step 3: Prepare Authorization Headers

<embed src="/snippets/_auth-headers-preparation.md" />

## Step 4: Use the Multiple Domain Name Availability Endpoint

Send a `GET` request with the authorization headers you have prepared and the domain name you want to check to the [Multiple Domain Name Availability](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetDomains) endpoint. Here is the URL for our API environments:

Sandbox Environment:

```bash
https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/domains?search={DOMAIN_TO_CHECK}
```

Production Environment:

```bash
https://unstoppabledomains.com/api/v2/resellers/{PARTNER_RESELLERID}/domains?search={DOMAIN_TO_CHECK}
```

:::info
The `PARTNER_RESELLERID` path parameter is the same one you retrieved from your partner account earlier.
:::

## Example

Here is an example request to check the availability of the `buyadomain.dao` and `buyanotherdomain.crypto` domains before purchase:

```bash Request
curl --location --request GET 'https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/domains?search=buyadomain.dao&search=buyanotherdomain.crypto' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}'
```

```json Response
{
  "domains": [
    {
      "domain": {
        "id": 12390,
        "name": "buyadomain.dao",
        "ownerAddress": null,
        "resolver": null,
        "resolution": {},
        "blockchain": "MATIC",
        "projectedBlockchain": "MATIC",
        "registryAddress": "0x2a93c52e7b6e7054870758e15a1446e769edfb93",
        "networkId": 80001,
        "freeToClaim": true,
        "node": "0xbaee34a867ed94387a307bf426ae01af9f4254f8c1dc2c633c577278df0d6454"
      },
      "availability": {
        "registered": false,
        "protected": false,
        "price": 20,
        "availableForFree": false,
        "test": false
      }
    },
    {
      "domain": {
        "id": 12537,
        "name": "buyanotherdomain.crypto",
        "ownerAddress": null,
        "resolver": null,
        "resolution": {},
        "blockchain": "MATIC",
        "projectedBlockchain": "MATIC",
        "registryAddress": "0x2a93c52e7b6e7054870758e15a1446e769edfb93",
        "networkId": 80001,
        "freeToClaim": true,
        "node": "0xf98d0b7603d2813f7d21ad7537c0670c9037a556e715e9fb572c7a87e5e854b4"
      },
      "availability": {
        "registered": false,
        "protected": false,
        "price": 40,
        "availableForFree": false,
        "test": false
      }
    }
  ]
}
```

:::success Congratulations!
You have successfully checked the availability of multiple domain names with the Partner API.
:::

<embed src="/snippets/_discord.md" />
