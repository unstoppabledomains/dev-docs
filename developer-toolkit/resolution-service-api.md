---
title: Resolution Service API
description: This page covers the resolution service API feature for Unstoppable domains. We offer an Alchemy-hosted API and Unstoppable Domain-hosted API option.
---

Resolution service provides an API for getting domain data and metadata regardless of that domain's location, whether it is stored on Ethereum, Zilliqa, Polygon, or any other blockchain. The service is used to cache blockchain events in a database for easy retrieval without accessing blockchain APIs.

## Alchemy Hosted API

UD customers are encouraged to use the Alchemy-hosted Resolution Service API. Customers will [sign-up for Alchemy's API service](https://auth.alchemyapi.io/signup?redirectUrl=https%3A%2F%2Fdashboard.alchemyapi.io%2Fsignup%2F%3Freferrer\_origin%3Dhttps%3A%2F%2Fwww.google.com%2F) and retrieve API keys directly from Alchemy.

For Alchemy API documentation, endpoints, and support videos, visit Alchemy's dedicated page for [Unstoppable Domains APIs](https://docs.alchemy.com/alchemy/enhanced-apis/unstoppable-domains-apis).

## Unstoppable Domains Hosted API

Unstoppable Domains will continue to run and support its own hosted API. This ensures continuity for our existing API service customers, but new customers interested in Resolution Service API will be encouraged to signup for [Alchemy-hosted API service](resolution-service-api.md#alchemy-hosted-api).

[Unstoppable Domains hosted API](https://github.com/unstoppabledomains/resolution-service) requires developers to accept Terms of Service before accessing the API key (email [bd@unstoppabledomains.com](mailto:bd@unstoppabledomains.com) to sign or review TOS). For more on the UD Hosted API endpoints, see the [Unstoppable Domains Hosted API Specification](http://resolve.unstoppabledomains.com/api-docs/).&#x20;

### UD Hosted API Endpoints

There are four endpoints in the Resolution Service API:

* **`GET`** domains: retrieves and displays the list of domains
* **`GET`** domains/{domainName}: gets the resolution of the specified domain
* **`GET`** status: gets the synchronization status
* **`GET`** metadata/{domainortoken}: retrieves the metadata for the domain or token

## Support

For assistance with this API feature, please join our[ Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community.
