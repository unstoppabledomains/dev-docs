---
title: Reseller API Endpoints | Unstoppable Domains Developer Portal
description: This page details the Reseller API endpoints and links to the external Reseller API specification.
---

# Reseller API Endpoints

For more details about the Reseller API endpoints, see the [Reseller API endpoint specification](https://raw.githubusercontent.com/unstoppabledomains/website-api-docs-v2/master/openapi.yaml). These endpoints are specified in OpenAPI format, which provides an [interactive API explorer](https://docs.unstoppabledomains.com/openapi/reference/) in which you can try out sample API calls.

:::info note
The Reseller API is limited to 60 requests per hour. However, this is subject to change in the future.
:::

The Reseller API endpoints are as follows:

* `GET` **Domain Name Availability**: checks the availability of a domain name before purchase
* `GET` **Get Domains Suggestions:** provides domain suggestions based on the entered information
* `GET` **Get Free Domains Suggestions:** provides free domain suggestions based on entered information if the Reseller is eligible to offer free domains
* `POST` **Buy a Domain** or **Claim Free Domain**: used to buy domains or mint free domains from Unstoppable Domains
* `GET` **Get Order Status**: provides the status of your order and tells if the domain has successfully "minted"
* `POST` **Reserve Free Domain**: reserves a free and available domain for seven days; the domain is automatically unlocked if it is not minted within seven days

:::info Note
To reserve or lock a free domain, the reseller must provide a unique user identifier (this could be an email or some other internal user identifier). The same identifier must be provided in the `resellerIdentityKey` parameter when minting the domain (using the `Orders` endpoint).
:::

<embed src="/snippets/_discord.md" />
