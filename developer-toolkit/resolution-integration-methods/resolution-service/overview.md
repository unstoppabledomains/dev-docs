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

The Resolution Service API uses bearer tokens to authorize requests with the API key gotten from Unstoppable Domains.

| Field Name | Value |
| - | - |
| Security Scheme Type | HTTP |
| HTTP Authorization Scheme | bearer |
| Bearer Format | a token provided by Unstoppable Domains |

## API Endpoints Spec

Below is a table of all the API endpoints provided by the Resolution Service, a description of their function, and links to their respective documentation.

| Endpoint | Description | Documentation |
| - | - | - |
| Get Records for a Domain | returns all the records attached to a domain name. | [Get Records for a Domain Docs](endpoints/get-records-for-a-domain.md) |
| Get Records for Multiple Domains | returns all the records attached to multiple domain names. | [Get Records for Multiple Domains Docs](endpoints/get-records-for-multiple-domains.md) |
| Get Records for Owner Addresses | returns all the domain names, records, and metadata owned by a wallet address or configured to a resolution record. | [Get Records for Owner Addresses Docs](endpoints/get-records-for-owner-addresses.md) |
| Get Domain Transfer Events | returns the transfer history of a domain name. | [Get Domain Transfers Docs](endpoints/get-domain-transfer-events.md) |
| Get Reverse Record for an Address | returns the reverse record of a wallet address. | [Get Reverse Record for an Address Docs](endpoints/get-reverse-record-for-address.md) |
| Get Supported TLDs | returns all the domain endings supported by Unstoppable Domains. | [Get Supported TLDs Docs](endpoints/get-supported-tlds.md) |
| Get Metadata for a Domain | returns the ERC721 metadata information of a domain name. | [Get Metadata for a Domain Docs](endpoints/get-metadata-for-a-domain.md) |
| Get Domain SVG Image | returns the image data of a domain name as a SVG string. | [Get Domain SVG Image Docs](endpoints/get-domain-svg-image.md) |
| Get Domain Image Source | returns the image data of a domain name in `image/svg+xml` format. | [Get Domain Image Source Docs](endpoints/get-domain-image-source.md) |

<embed src="/snippets/_discord.md" />
