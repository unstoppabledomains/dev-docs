---
description: >-
  This page details the Reseller API Endpoints and links to the external
  Reseller API Specification.
---

# Reseller API Endpoints

For details about the API endpoints, see the [Reseller API Endpoint Specification](https://raw.githubusercontent.com/unstoppabledomains/website-api-docs-v2/master/openapi.yaml). These endpoints are specified in OpenAPI format, which provides an interactive API explorer in which you can try out sample API calls.

The Reseller API endpoints are as follows:

* `GET` **Domain Name**: checks availability of domain name before purchase
* `GET` **Domains Suggestions:** provides domain suggestions based on entered information
* `GET` **Domains Suggestions Free:** provides free domain suggestions based on entered information if Reseller is eligible to offer free domains
* `POST` **Orders**: used to buy domains or claim free domains from Unstoppable Domains
* `GET` **Order Number**: checks blockchain transaction status to see if domain is successfully “minted”

### Upcoming Features

This new API endpoint will be added in the next update:

* `POST` **Reserve Free Domain**: reserves a free and available domain for 7 days; the domain is unlocked automatically if it is not claimed within 7 days

{% hint style="info" %}
**NOTE:** To reserve or lock a free domain the reseller must provide a unique user identifier (this could be an email, or some other internal user identifier). The same identifier must be provided when claiming the domain (using the POST Orders endpoint).
{% endhint %}

For assistance with this API Specification, please join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community.
