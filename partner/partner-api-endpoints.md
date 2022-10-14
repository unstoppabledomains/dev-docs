---
title: Partner API Endpoints | Unstoppable Domains Developer Portal
description: This page details the Partner API endpoints and links to the external Partner API specification.
---

# Partner API Endpoints

For more details about the Partner API endpoints, see the [Partner API endpoint specification](https://raw.githubusercontent.com/unstoppabledomains/website-api-docs-v2/master/openapi.yaml). These endpoints are specified in OpenAPI format, which provides an [interactive API explorer](https://docs.unstoppabledomains.com/openapi/reference/) in which you can try out sample API calls.

:::info
The Partner API is limited to 60 requests per hour. However, this is subject to change in the future.
:::

The Partner API endpoints are as follows:

| Endpoint | Description | Documentation |
| - | - | - |
| Domain Name Availability | checks the availability of a domain name before purchase | [Domain Name Availability Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1%7BdomainName%7D/get) |
| Get Domains Suggestions | provides domain suggestions based on the entered information | [Get Domains Suggestions Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions/get) |
| Get Free Domains Suggestions | provides free domain suggestions based on entered information if the partner is eligible to offer free domains | [Get Free Domains Suggestions Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions~1free/get) |
| Buy a Domain or Claim for Free | used to buy domains or mint free domains from Unstoppable Domains | [Buy a Domain or Claim for Free Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/orders/paths/~1orders/post) |
| Get Order Status | provides the status of your order and tells if the domain has successfully "minted" | [Get Order Status Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/orders/paths/~1orders~1%7BorderNumber%7D/get) |
| Reserve Domain Name | reserves a free and available domain for seven days; the domain is automatically unlocked if it is not minted within seven days | [Reserve Domain Name Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1%7BdomainName%7D~1reserve/post) |
| Get Fingerprint Public Key | provides a Fingerprint public key to generate a `Visitor ID` for your order security; the endpoint returns a different key when called to avoid rate limitations | [Get Fingerprint Public Key Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/security/paths/~1security~1fingerprintjs~1keys/post) |

:::info
The generated Fingerprint `Visitor ID` will always be the same despite the different public keys being returned.
:::

:::info
To reserve or lock a free domain, the partner must provide a unique user identifier (this could be an email or some other internal user identifier). The same identifier must be provided in the `resellerIdentityKey` parameter when minting the domain (using the `Orders` endpoint).
:::

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
