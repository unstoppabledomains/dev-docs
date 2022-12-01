---
title: Get Records for Owner Addresses | Unstoppable Domains Developer Portal
description: This page covers the documentation for the `Get Records for Owner Addresses` endpoint.
---

# Get Records for Owner Addresses

```bash
https://resolve.unstoppabledomains.com/domains
```

This endpoint returns the domain name records and metadata owned by wallet addresses or configured to a resolution record.

## Request Method

* GET

## Authentication

* Bearer Token

## Query Params

| Name | Type | Mandatory | Description |
| - | - | - | - |
| owners | ARRAY[STRING] | NO | A list of wallet addresses to query for domain information |
| resolution | OBJECT | NO | A key-value pair of resolution records the response results should be filtered with. See the [Records Reference](/developer-toolkit/reference/records-reference.md) documentation for supported key values |
| tlds | ARRAY[STRING] | NO | A list of domain endings the response should be filtered with. See all the [supported domain endings](../overview.md#supported-domains-endings) |
| sortBy | STRING | NO | The field to use for sorting of the response. Currently supports `id` (domain ID), `name` (domain name alphabetically), and `created_at` (domain creation date) |
| sortDirection | STRING | NO | The order to use for sorting of the response. Currently supports `ASC` (ascending) and `DESC` (descending) |
| perPage | NUMBER | NO | The number of results to return per response page. Must be a value between 1 and 200 |
| startingAfter | STRING | NO | The API will skip the results before this value in the response. This value depends on the `nextStartingAfter` response field |

:::info
If your request must include multiple `owners` or `tlds` fields, you need to use a new `owners` or `tlds` query param instance for each wallet address and TLD.
:::

## Returns

An object with a `data` field that contains a list of domain details and some meta about the request.

* `data`: (array) An array with the data and metadata of domains owned by a wallet address.
    * `id`: (string) The domain ID.
    * `attributes`: A list of domain details. The details are the same as for [Get records for a domain](get-records-for-a-domain.md#returns) response.
* `meta`: Contains list metadata.
    * `perPage` - (number) The number of elements in the list in a single response.
    * `nextStartingAfter` - (string) A value you can pass in the `startingAfter` query parameter to get the next page of the domains list.
    * `sortBy` - (string) The field used to sort the domains list.
    * `sortDirection` - (string) The order of applied sorting (ascending or descending).
    * `hasMore` - (boolean) It indicates if the response has more domains to show in the next pages.

## Example

Here is an example request to query for the records and metadata of domains with a resolution record and are owned by either of two wallet address:

* 0x8aad44321a86b170879d7a244c1e8d360c99dda8
* 0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c
* `{"crypto.BTC.address": "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y"}`

### Request

```bash
curl \
--request GET "https://resolve.unstoppabledomains.com/domains?owners=0x8aad44321a86b170879d7a244c1e8d360c99dda8&owners=0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c&resolution%5Bcrypto.BTC.address%5D=bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y" \
--header 'Authorization: Bearer {SECRET_API_TOKEN}'
```

### Response

```json
{
    "data": [
        {
            "id": "brad.crypto",
            "attributes": {
                "meta": {
                    "domain": "brad.crypto",
                    "blockchain": "ETH",
                    "networkId": 1,
                    "owner": "0x8aad44321a86b170879d7a244c1e8d360c99dda8",
                    "resolver": "0xb66dce2da6afaaa98f2013446dbcb0f4b0ab2842",
                    "registry": "0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe"
                },
                "records": {
                    "ipfs.html.value": "QmTiqc12wo2pBsGa9XsbpavkhrjFiyuSWsKyffvZqVGtut",
                    "crypto.ADA.address": "DdzFFzCqrhsuwQKiR3CdQ1FzuPAydtVCBFTRdy9FPKepAHEoXCee2qrio975M4cEbqYwZBsWJTNyrJ8NLJmAReSwAakQEHWBEd2HvSS7",
                    "crypto.BTC.address": "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y",
                    "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8",
                    "gundb.username.value": "0x8912623832e174f2eb1f59cc3b587444d619376ad5bf10070e937e0dc22b9ffb2e3ae059e6ebf729f87746b2f71e5d88ec99c1fb3c7c49b8617e2520d474c48e1c",
                    "social.picture.value": "1/erc1155:0xc7e5e9434f4a71e6db978bd65b4d61d3593e5f27/14317",
                    "gundb.public_key.value": "pqeBHabDQdCHhbdivgNEc74QO-x8CPGXq4PKWgfIzhY.7WJR5cZFuSyh1bFwx0GWzjmrim0T5Y6Bp0SSK0im3nI",
                    "ipfs.redirect_domain.value": "https://abbfe6z95qov3d40hf6j30g7auo7afhp.mypinata.cloud/ipfs/Qme54oEzRkgooJbCDr78vzKAWcv6DDEZqRhhDyDtzgrZP6"
                }
            }
        }
    ],
    "meta": {
        "perPage": 100,
        "nextStartingAfter": "12777",
        "sortBy": "id",
        "sortDirection": "ASC",
        "hasMore": false
    }
}
```

The response has more data that is not included on the first page, so the query for the next page would use the `nextStartingAfter` response value:

```bash
curl \
--request GET "https://resolve.unstoppabledomains.com/domains?owners=0x8aad44321a86b170879d7a244c1e8d360c99dda8&owners=0xF5FFF32CF83A1A614e15F25Ce55B0c0A6b5F8F2c&resolution%5Bcrypto.BTC.address%5D=bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y&startingAfter=30031" \
--header 'Authorization: Bearer {SECRET_API_TOKEN}'
```

<embed src="/snippets/_discord.md" />
