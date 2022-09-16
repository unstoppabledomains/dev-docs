---
title: Resolution Service API | Unstoppable Domains Developer Portal
description: This page provides a high-level overview of the Resolution Service API hosted by Unstoppable Domains.
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
<embed src="/snippets/_new_tld_warning.md" />
:::

## Getting Started With the Resolution Service

### Acquire an API Key

Before being able to make any requests to the Resolution Service API, you must acquire an API key from Unstoppable Domains. Please email <partnerengineering@unstoppabledomains.com> to request an API key for your integration.

:::info
The API key provided by Unstoppable Domains is free to acquire (no cost to open source projects). However, storing the keys in a secret manager or environment variables for open-source projects like other third-party APIs is advisable.
:::

### Making Requests to the Resolution Service

All HTTP requests made to the Resolution Service API must contain the following headers:

| Header Name | Description |
| - | - |
| API KEY | The Unstoppable Domains API key as a string |

## API Endpoints Spec

Below is a table of all the API endpoints provided by the Resolution Service, a short description of their function, and links to their respective documentation.

| Endpoint | Short Description | Documentation |
| - | - | - |
| Get records for a domain | returns all the records attached to a domain name. | [Get Domain Records Docs](endpoints/get-records-for-a-domain.md) |
| Get records for owner addresses | returns all the domain names, records, and metadata owned by a wallet address or configured to a resolution record. | [Get Records for Owner Docs](endpoints/get-records-for-owner-addresses.md) |
| Get domain transfer events | returns the transfer history of a domain name. | [Get Domain Transfers Docs](endpoints/get-domain-transfer-events.md) |
| Get supported TLDs | returns all the domain endings supported by Unstoppable Domains. | [Get Supported TLDs Docs](endpoints/get-supported-tlds.md) |

<embed src="/snippets/_discord.md" />
