---
title: Resolution Service API
description: This page covers the resolution service API feature for Unstoppable domains hosted by Alchemy.
---

# Resolution Service API

Resolution service provides an API for getting domain data and metadata regardless of that domain's location, whether it is stored on Ethereum, Zilliqa, Polygon, or any other blockchain. The service is used to cache blockchain events in a database for easy retrieval without accessing blockchain APIs.

:::warning Important
Unstoppable Domains periodically releases new TLDs, and our Resolution libraries and APIs will automatically detect and support any new TLDs. It is imperative for future proofing your resolution integration to allow all domain inputs to pass through rather than implementing a front end filter (e.g. avoid hard coding domains or placing a regex filter for just .crypto, .nft, etc.).
:::

## Alchemy Hosted API

We have partnered with Alchemy to offer UD developers an Alchemy-hosted Resolution Service API. Developers will [sign-up for Alchemy's API service](https://auth.alchemyapi.io/signup?redirectUrl=https%3A%2F%2Fdashboard.alchemyapi.io%2Fsignup%2F%3Freferrer\_origin%3Dhttps%3A%2F%2Fwww.google.com%2F) and retrieve API keys directly from Alchemy.

For Alchemy API documentation, endpoints, and support videos, visit Alchemy's dedicated page for [Unstoppable Domains APIs](https://docs.alchemy.com/alchemy/enhanced-apis/unstoppable-domains-apis).

## Support

For assistance with this API feature, please join our[ Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community.
