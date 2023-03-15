---
title: Resolution Service API | Unstoppable Domains Developer Portal
description: This page provides a high-level overview of the Resolution Service API hosted by Unstoppable Domains.
---

# Getting Started With the Resolution Service

## Acquire an API Key

Before you can make any request to the Resolution Service API, you must acquire an API key from Unstoppable Domains. Please email <partnerengineering@unstoppabledomains.com> to request an API key for your integration.

:::info
The API key provided by Unstoppable Domains is free to acquire (no cost to open source projects). However, storing the keys in a secret manager or environment variables for open-source projects like other third-party APIs is advisable.
:::

## Authenticate Your Requests

The Resolution Service API uses `Bearer Tokens` to authorize requests with the API key gotten from Unstoppable Domains.

| Field Name | Value |
| - | - |
| Security Scheme Type | HTTP |
| HTTP Authorization Scheme | bearer |
| Bearer Format | a token provided by Unstoppable Domains |

## Fork Our Postman Collection

Unstoppable Domains offers a Postman collection that you can easily import into your workspace to quickly interact with the Resolution Service API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19507736-52bf9f35-1608-4dc4-a96d-e62682b59199?action=collection%2Ffork&collection-url=entityId%3D19507736-52bf9f35-1608-4dc4-a96d-e62682b59199%26entityType%3Dcollection%26workspaceId%3D6762865c-b510-4216-ba7f-45cd07f164c7#?env%5BResolution%20Service%20-%20Open%20API%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vcmVzb2x2ZS51bnN0b3BwYWJsZWRvbWFpbnMuY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL3Jlc29sdmUudW5zdG9wcGFibGVkb21haW5zLmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJhcGlfa2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfV0=)

<embed src="/snippets/_discord.md" />
