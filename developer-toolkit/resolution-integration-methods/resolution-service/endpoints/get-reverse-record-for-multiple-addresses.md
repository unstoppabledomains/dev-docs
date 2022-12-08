---
title: Get Reverse Record for Multiple Addresses | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Reverse Record for Multiple Addresses` endpoint.
---

# Get Reverse Record for Multiple Addresses

```bash
https://resolve.unstoppabledomains.com/reverse/query
```

This endpoint will return the reverse record of multiple wallet addresses in a single response.

## Request Method

* POST

## Authentication

* Bearer Token

## Request Body

The request body contains information about your query and must be in JSON format for the API. Here’s the structure:

```javascript
{
    "addresses": [
        "0x..." // wallet addresses to query for reverse records
    ]
}
```

:::info
The `addresses` field can accept a maximum of 1000 wallet addresses per request to query for reverse resolution records.
:::

## Returns

An object with a `data` field that contains a list of reverse resolution records:

* `data`: (array) An array with the metadata of domains that reverses to the provided wallet addresses.
    * `meta`: A key-value dictionary with general information about the domain.
      * `domain`: (string) Name of the domain.
      * `owner`: (string) The wallet address that owns the domain.
      * `reverse`: (boolean) A boolean indicating if the domain has a reverse record.

:::info
If a wallet addresses does not have a reverse record, it will not be returned by the Resolution Service.
:::

## Example

Here is an example request to query for the reverse record for following wallet addresses:

* 0x88bc9b6c56743a38223335fac05825d9355e9f83
* 0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19

```bash Request
curl --location --request POST 'https://resolve.unstoppabledomains.com/reverse/query' \
--header 'Authorization: Bearer {SECRET_API_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "addresses": [
        "0x88bc9b6c56743a38223335fac05825d9355e9f83",
        "0x3EAA674612f79A97ad451fCF860A51Ad41aC2C19"
    ]
}'
```

```json Response
{
    "data": [
        {
            "meta": {
                "domain": "lordghostx.wallet",
                "owner": "0x3eaa674612f79a97ad451fcf860a51ad41ac2c19",
                "reverse": true
            }
        },
        {
            "meta": {
                "domain": "jim-unstoppable.x",
                "owner": "0x88bc9b6c56743a38223335fac05825d9355e9f83",
                "reverse": true
            }
        }
    ]
}
```

<embed src="/snippets/_discord.md" />
