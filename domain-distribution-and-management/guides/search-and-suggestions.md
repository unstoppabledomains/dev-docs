---
title: Partner API Search and Suggestions Guide | Unstoppable Domains Developer Portal
description: Guide for searching and suggestions Web3 Domains using the Unstoppable Domains Partner API
---

# Domain Search & Suggestions

Finding the perfect domain is the first step on a user's Web3 journey and the Unstoppable Domains Partner API is here to power the search. The Partner API offers offers both exact match searching and generating suggestions to find that perfect domain.

## Exact Match Searching

The Partner API provides a simple interface for searching for domains. The full [API specification can be found here](https://docs.unstoppabledomains.com/openapi/partner/latest/#operation/getMultipleDomains), but below we will demostrate how to fetch and present search results.

### Request and Response

The basic search request is:
```
GET /partner/v3/domains?query=example-123
```

This will return a JSON response that includes a list of results:
```json
{
    "@type": "unstoppabledomains.com/partner.v3.List",
    "items": [ ... ]
}
```

The `items` array will include an array of objects, one per domain (label + TLD) that matched your search.

Each result in the `items` array will be an object that looks like this:
```json
// Domain is available
{
    "name": "example-123.crypto",
    "@type": "unstoppabledomains.com/partner.v3.Domain",
    "owner": {
        "type": "NONE"
    },
    "availability": {
        "status": "AVAILABLE",
        "price": {
            "type": "STANDARD",
            "listPrice": {
                "usdCents": 1000
            },
            "subTotal": {
                "usdCents": 1000
            }
        }
    }
}

// ... OR ...

// Domain is already registered
{
    "name": "example-123.x",
    "@type": "unstoppabledomains.com/partner.v3.Domain",
    "owner": {
        "type": "EXTERNAL",
        "address": "0x1234567891234567891234567891234567890000"
    },
    "availability": {
        "status": "REGISTERED"
    },
    "blockchain": "MATIC"
}
```

- If the `availability.status` is `AVAILABLE`, the domain is available for registration.
- The price we expect you to collect from the user will be the value of `availability.price.subTotal.usdCents` (expressed as USD cents, divide it by `100` to get the value in USD).
- The `availability.price.listPrice.usdCents` is the value of the domain before any additional fees are included. Unstoppable Domains does not add any fees for our own TLDs.


### Searching across Multiple TLDs

By default, if no TLDs are specified in the request, all TLDs available to your account will be included in search results.

```
# Include all TLDs enabled on your account
GET /partner/v3/domains?query=example-123
```

However, you may want to allow users to filter by specific TLDs, or always limit the TLDs to a specific set that align with your brand. This can be done using the `ending` query string.

```
# Include specific TLDs
GET /partner/v3/domains?query=example-123&ending=crypto&ending=nft
```

### Multiple Searches at once

You can include mulitple search queries in a single request. This can enable your own logic to apply variations to the user provided search or simply allowing your users search for several domains at once.

```
GET /partner/v3/domains?query=example-123&query=my-brand-example-123
```


## Suggestions



## What's next?

Follow along our [integration guide](todo) to continue building your very own Web3 Registrar!
