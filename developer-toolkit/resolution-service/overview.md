---
title: Resolution Service API | Unstoppable Domains Developer Portal
description: This page covers the resolution service API feature for Unstoppable domains hosted by Alchemy.
---

# Resolution Service API

The Resolution Service provides an API for getting domain data and metadata regardless of the blockchain in which the domain is stored. The service caches blockchain events in a database for easy retrieval without accessing any blockchain APIs.

With the Resolution Service API, you can quickly build applications directly communicating with the blockchain to get UD domain data with a single API request.

## Supported Domains Endings

The Resolution Service API supports decentralized domains across two main zones:

| Name Service                   | Supported Domains                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| Zilliqa Name Service (ZNS)     | `.zil`                                                                                 |
| Unstoppable Name Service (UNS) | `.crypto`, `.nft`, `.blockchain`, `.bitcoin`, `.coin`, `.wallet,` `.888`, `.dao`, `.x` |

:::warning important
Unstoppable Domains periodically releases new domain endings, and our Resolution libraries and APIs will automatically detect and support them. Therefore, do not implement a front end filter into your application (e.g. hard coding domains or placing a regex filter for just .crypto, .nft, etc.). We also provide an [API endpoint to query for supported domain endings](endpoints/get-supported-tlds.md).
:::

## Getting Started With Alchemy

### Generating an API Key

Before being able to make any requests to the API, you must create an API key via the [Alchemy dashboard](https://dashboard.alchemyapi.io/).

### Making Requests to the API

All requests made to the Resolution Service API must contain the following headers:

| Header Name | Description |
| - | - |
| API KEY | The Alchemy API key as a string |

### Quickstart Guide

Here’s a guide on setting up your Alchemy account and querying the Unstoppable Domains Resolution Service API.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/7cd5398275e74d8ba024323985cd90c7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## API Endpoints Overview

| Endpoint | Short Description | Documentation |
| - | - | - |
| Get records for a domain | returns all the records attached to a domain name. | [Get Domain Records Docs](endpoints/get-records-for-a-domain.md) |
| Get records for owner addresses | returns all the domain names, records, and metadata owned by a wallet address or configured to a resolution record. | [Get Records for Owner Docs](endpoints/get-records-for-owner-addresses.md) |
| Get domain transfer events | returns the transfer history of a domain name. | [Get Domain Transfers Docs](endpoints/get-domain-transfer-events.md) |
| Get supported TLDs | returns all the domain endings supported by Unstoppable Domains. | [Get Supported TLDs Docs](endpoints/get-supported-tlds.md) |

<embed src="/snippets/_discord.md" />
