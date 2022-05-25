---
title: Reseller API Endpoints | Unstoppable Domains Developer Portal
description: This page details the Reseller API Endpoints and links to the external Reseller API Specification.
---

# Reseller API Endpoints

For details about the API endpoints, see the [Reseller API Endpoint Specification](https://raw.githubusercontent.com/unstoppabledomains/website-api-docs-v2/master/openapi.yaml). These endpoints are specified in OpenAPI format, which provides an interactive API explorer in which you can try out sample API calls.

:::info note
The Reseller API is limited to 60 requests per hour. However, this is subject to change in the future.
:::

The Reseller API endpoints are as follows:

* `GET` **Domain Name**: checks availability of domain name before purchase
* `GET` **Domains Suggestions:** provides domain suggestions based on entered information
* `GET` **Domains Suggestions Free:** provides free domain suggestions based on entered information if Reseller is eligible to offer free domains
* `POST` **Orders**: used to buy domains or mint free domains from Unstoppable Domains
* `GET` **Order Number**: checks blockchain transaction status to see if domain is successfully “minted”
* `POST` **Reserve Free Domain**: reserves a free and available domain for 7 days; the domain is unlocked automatically if it is not minted within 7 days

:::info Note
To reserve or lock a free domain the reseller must provide a unique user identifier (this could be an email, or some other internal user identifier). The same identifier must be provided when minting the domain (using the POST Orders endpoint).
:::

<embed src="/snippets/_discord.md" />
