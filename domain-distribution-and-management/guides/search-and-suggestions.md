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
- All prices are expressed as USD cents. Divide the values by `100` to get the value in USD.
- The `availability.price.listPrice.usdCents` is the value of the domain before any additional fees are included. Unstoppable Domains does not add any fees for our own TLDs.
- The price we expect you to collect from the user will be the value of `availability.price.subTotal.usdCents`.
- See the [full API specification](https://docs.unstoppabledomains.com/openapi/partner/latest/#operation/getMultipleDomains!c=200&path=items/@type&t=response) for additional details on possible responses


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

Sometimes the exact-match searching will yield many unavailable options. An easy solution is to suggest some alternatives based on the user's original search.

Until the exact-match searching, **all results from the Suggestions API will be available for registration**.

### Request and Response

The basic suggestions request is:
```
GET /partner/v3/suggestions/domains?query=example-123
```

This will return a JSON response that includes a list of results:
```json
{
    "@type": "unstoppabledomains.com/partner.v3.List",
    "items": [ ... ]
}
```

The `items` array will include an array of objects, one per domain (label + TLD) that is being suggested.

Each result in the `items` array will be an object that looks like this:
```json
{
    "@type": "unstoppabledomains.com/partner.v3.DomainSuggestion",
    "name": "suggested-example-123.x",
    "price": {
        "type": "STANDARD",
        "listPrice": {
            "usdCents": 4000
        },
        "subTotal": {
            "usdCents": 4000
        }
    }
}
```
- Unlike the exact-match search results API, the Suggestions API will only provide domains available for registration, so the response is relatively minimal.
- All prices are expressed as USD cents. Divide the values by `100` to get the value in USD.
- The `price.listPrice.usdCents` is the value of the domain before any additional fees are included. Unstoppable Domains does not add any fees for our own TLDs.
- The price we expect you to collect from the user will be the value of `price.subTotal.usdCents`.

### Suggestions across Multiple TLDs

By default, if no TLDs are specified in the request, all TLDs available to your account will be included in suggestion results.

```
# Include all TLDs enabled on your account
GET /partner/v3/suggestions/domains?query=example-123
```

However, you may want to allow users to filter by specific TLDs, or always limit the TLDs to a specific set that align with your brand. This can be done using the `ending` query string.

```
# Include specific TLDs
GET /partner/v3/suggestions/domains?query=example-123&ending=crypto&ending=nft
```

### Multiple Suggestion searches at once

You can include mulitple suggestion queries in a single request. This can enable your own logic to apply variations to the user provided search or simply allowing your users search for several domains at once.

```
GET /partner/v3/domains?query=example-123&query=my-brand-example-123
```

## Best Practices

Utlimately, you should incorporate search and suggestion results in a way that makes sense for your application. That said, our general recommendation is to provide an experience similiar to the one offered on [unstoppabledomains.com](https://unstoppabledomains.com):
- Allow the user to enter a search term before displaying any results
- Present multiple TLD options for their exact search term
- In a separate section, also provide suggestions based on their search term
- Display the pricing information alongside each result with the ability to buy or add to a checkout cart
- If an exact-match result is unavailable for registration, clearly display to the user the domain is unavailable

## What's next?

Follow along our [integration guide](todo) to continue building your very own Web3 Registrar!
