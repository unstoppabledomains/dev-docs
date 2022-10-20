---
title: Partner API Endpoints | Unstoppable Domains Developer Portal
description: This page details the Partner API endpoints and links to the external Partner API specification.
---

# Partner API Endpoints

Below is a table of all the API endpoints provided by the Partner API, a description of their function, and links to their respective documentation. For more details about the endpoints, see the [Partner API endpoint specification](https://raw.githubusercontent.com/unstoppabledomains/website-api-docs-v2/master/openapi.yaml).

| Endpoint | Description | Documentation |
| - | - | - |
| Domain Name Availability | checks the availability of a domain name before purchase | [Domain Name Availability Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1%7BdomainName%7D/get) |
| Get Domains Suggestions | provides domain suggestions based on the entered information | [Get Domains Suggestions Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions/get) |
| Get Free Domains Suggestions | provides free domain suggestions based on entered information if the partner is eligible to offer free domains | [Get Free Domains Suggestions Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions~1free/get) |
| Buy a Domain or Claim for Free | used to buy domains or mint free domains from Unstoppable Domains | [Buy a Domain or Claim for Free Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/orders/paths/~1orders/post) |
| Get Order Status | provides the status of your order and tells if the domain has successfully "minted" | [Get Order Status Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/orders/paths/~1orders~1%7BorderNumber%7D/get) |
| Reserve Free Domain Name | reserves a free and available domain for seven days; the domain is automatically unlocked if it is not minted within seven days | [Reserve Free Domain Name Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1%7BdomainName%7D~1reserve/post) |
| Get Fingerprint Public Key | provides a Fingerprint public key to generate a `Visitor ID` for your order security; the endpoint returns a different key when called to avoid rate limitations | [Get Fingerprint Public Key Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/security/paths/~1security~1fingerprintjs~1keys/post) |

:::info
The Partner API is limited to 60 requests per hour. However, this is subject to change in the future.
:::

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
