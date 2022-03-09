---
description: >-
  This page details the Reseller API Endpoints and links to the external
  Reseller API Specification.
---

# Reseller API Endpoints

{% hint style="warning" %}
The Reseller API feature is under development due to recent upgrades to [Polygon L2](../polygon-l2-network/polygon-high-level-overview.md). When the Reseller feature resumes, it will only support domains and wallets on the Polygon L2 network. See the [Polygon Developer Integration Guide](../polygon-l2-network/polygon-developer-integration.md) for next steps.
{% endhint %}

For details about the API endpoints, see the [Reseller API Endpoint Specification](https://apidocs.unstoppabledomains.com/#tag/reseller). These endpoints are specified in OpenAPI format, which provides an interactive API explorer in which you can try out sample API calls.

There are six endpoints in the Reseller API:

* `GET` **Domain Name Availability**: checks availability of domain name before purchase
* `POST` **Buy Domain**: used for buying domains from UD
* `GET` **Order Status**: checks blockchain transaction status to see if it is successfully “mined”
* `GET` **User Status**: checks if user has a domain and whether they are eligible for a free domain
* `GET` **Reverse Lookup**: retrieves all domains that are connected to certain owner
* `GET` **Domains Variations:** provides domains variants, or similar domains, based on provided domains and labels

For assistance with this API Specification, please join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community.
