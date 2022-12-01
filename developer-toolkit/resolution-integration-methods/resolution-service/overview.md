---
title: Resolution Service API | Unstoppable Domains Developer Portal
description: This page provides a high-level overview of the Resolution Service API hosted by Unstoppable Domains.
---

# Resolution Service API

The Resolution Service provides an API for getting domain data and metadata regardless of the blockchain in which the domain is stored. The service caches blockchain events in a database for easy retrieval without accessing any blockchain APIs.

With the Resolution Service API, you can quickly build applications directly communicating with the blockchain to get UD domain data with a single API request. For example, the [Web3 Domain Resolution Demo](https://resolutionwithunstoppable.com) was built using the Resolution Service API.

## Supported Domains Endings

The Resolution Service API supports decentralized domains across two main zones:

<embed src="/snippets/_supported-domain-endings.md" />

:::warning important
<embed src="/snippets/_new_tld_warning.md" />
:::

## Getting Started With the Resolution Service

### Acquire an API Key

Before you can make any request to the Resolution Service API, you must acquire an API key from Unstoppable Domains. Please email <partnerengineering@unstoppabledomains.com> to request an API key for your integration.

:::info
The API key provided by Unstoppable Domains is free to acquire (no cost to open source projects). However, storing the keys in a secret manager or environment variables for open-source projects like other third-party APIs is advisable.
:::

### Authenticate Your Requests

The Resolution Service API uses `Bearer Tokens` to authorize requests with the API key gotten from Unstoppable Domains.

| Field Name | Value |
| - | - |
| Security Scheme Type | HTTP |
| HTTP Authorization Scheme | bearer |
| Bearer Format | a token provided by Unstoppable Domains |

### Fork Our Postman Collection

Unstoppable Domains provides a Postman collection that you can fork to your workspace and interact with the Resolution Service API in one click.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19507736-52bf9f35-1608-4dc4-a96d-e62682b59199?action=collection%2Ffork&collection-url=entityId%3D19507736-52bf9f35-1608-4dc4-a96d-e62682b59199%26entityType%3Dcollection%26workspaceId%3D6762865c-b510-4216-ba7f-45cd07f164c7#?env%5BResolution%20Service%20-%20Open%20API%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vcmVzb2x2ZS51bnN0b3BwYWJsZWRvbWFpbnMuY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL3Jlc29sdmUudW5zdG9wcGFibGVkb21haW5zLmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJhcGlfa2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfV0=)

## API Endpoints Spec

Below is a table of all the API endpoints provided by the Resolution Service, a description of their function, and links to their respective documentation. For more details about the endpoints, see the [Resolution Service endpoint specification](https://docs.unstoppabledomains.com/openapi/resolution/).

| Endpoint | Description | Documentation |
| - | - | - |
| Domain Endpoints |
| Get Records for a Domain | returns all the records attached to a domain name. | [Get Records for a Domain Docs](endpoints/get-records-for-a-domain.md) |
| Get Records for Multiple Domains | returns all the records attached to multiple domain names. | [Get Records for Multiple Domains Docs](endpoints/get-records-for-multiple-domains.md) |
| Get Records for Owner Addresses | returns all the domain names, records, and metadata owned by a wallet address or configured to a resolution record. | [Get Records for Owner Addresses Docs](endpoints/get-records-for-owner-addresses.md) |
| Get Domain Transfer Events | returns the transfer history of a domain name. | [Get Domain Transfers Docs](endpoints/get-domain-transfer-events.md) |
| Reverse Endpoints |
| Get Reverse Record for an Address | returns the reverse record of a wallet address. | [Get Reverse Record for an Address Docs](endpoints/get-reverse-record-for-address.md) |
| Get Reverse Record for Multiple Addresses | returns the reverse record of multiple wallet addresses. | [Get Reverse Record for Multiple Addresses Docs](endpoints/get-reverse-record-for-multiple-addresses.md) |
| TLDs Endpoints |
| Get Supported TLDs | returns all the domain endings supported by Unstoppable Domains. | [Get Supported TLDs Docs](endpoints/get-supported-tlds.md) |
| Metadata Endpoints |
| Get Metadata for a Domain | returns the ERC721 metadata information of a domain name. | [Get Metadata for a Domain Docs](endpoints/get-metadata-for-a-domain.md) |
| Get Domain SVG Image | returns the image data of a domain name as a SVG string. | [Get Domain SVG Image Docs](endpoints/get-domain-svg-image.md) |
| Get Domain Image Source | returns the image data of a domain name in `image/svg+xml` format. | [Get Domain Image Source Docs](endpoints/get-domain-image-source.md) |

## Rate Limits

The rate limits for the Resolution Service endpoints are as follows:

* 20 requests per IP per second for metadata endpoints
* 20 requests per IP per second for other endpoints

:::info
When the rate limit is exceeded, a status code of **429** will be returned.
:::

## Self-hosting the Resolution Service

The Resolution Service can be installed, configured, and self-hosted locally and in the cloud. Unstoppable Domains provides the Resolution Service as a docker image so it can be launched on various platforms. Please see the [Resolution Service installation guide](https://github.com/unstoppabledomains/resolution-service#installation) for steps on running a self-hosted version of the service.

<embed src="/snippets/_discord.md" />
