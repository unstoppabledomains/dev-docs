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
      * `tokenId`: (string) The unique identifier of the domain used by smart contracts.
      * `namehash`: (string) The hexadecimal representation of the domain's `token ID`.
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
                "tokenId": "80857839086949982994991786364369016617620430153731374656890181041655083653945",
                "namehash": "0xb2c3ea44b9e0d14f5c6c783bb59cf15a476279dff6fdb7d17d17ea2b6e775b39",
                "owner": "0x3eaa674612f79a97ad451fcf860a51ad41ac2c19",
                "reverse": true
            }
        },
        {
            "meta": {
                "domain": "jim-unstoppable.x",
                "tokenId": "79577619103421681308616456791817211704484961220433918391016311189913909952757",
                "namehash": "0xafef56165acf49408e6280cf683899f6e31402793e9eba29cbc985422ee980f5",
                "owner": "0x88bc9b6c56743a38223335fac05825d9355e9f83",
                "reverse": true
            }
        }
    ]
}
```

<embed src="/snippets/_discord.md" />
