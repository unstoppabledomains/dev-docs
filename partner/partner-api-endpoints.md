---
title: Partner API Endpoints | Unstoppable Domains Developer Portal
description: This page details the Partner API endpoints and links to the external Partner API specification.
---

# Partner API Endpoints

Below is a table of all the API endpoints provided by the Partner API, a description of their function, and links to their respective documentation. For more details about the endpoints, see the [Partner API endpoint specification](https://docs.unstoppabledomains.com/openapi/reference/).

| Endpoint | Description | Documentation |
| - | - | - |
| Domain Name Availability | checks the availability of a domain name before purchase | [Domain Name Availability Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1%7BdomainName%7D/get) |
| Multiple Domain Name Availability | checks the availability of multiple domain names before purchase | [Multiple Domain Name Availability Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1/get) |
| Get Domains Suggestions | provides domain suggestions based on the entered information | [Get Domains Suggestions Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions/get) |
| Get Free Domains Suggestions | provides free domain suggestions based on entered information if the partner is eligible to offer free domains | [Get Free Domains Suggestions Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1suggestions~1free/get) |
| Buy a Domain or Claim for Free | used to buy domains or mint free domains from Unstoppable Domains | [Buy a Domain or Claim for Free Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/orders/paths/~1orders/post) |
| Get Order Status | provides the status of your order and tells if the domain has successfully "minted" | [Get Order Status Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/orders/paths/~1orders~1%7BorderNumber%7D/get) |
| Reserve Free Domain Name | reserves a free and available domain for seven days; the domain is automatically unlocked if it is not minted within seven days | [Reserve Free Domain Name Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/domains/paths/~1domains~1%7BdomainName%7D~1reserve/post) |
| Get Fingerprint Public Key | provides a Fingerprint public key to generate a `Visitor ID` for your order security; the endpoint returns a different key when called to avoid rate limitations | [Get Fingerprint Public Key Docs](https://docs.unstoppabledomains.com/openapi/reference/#tag/security/paths/~1security~1fingerprintjs~1keys/post) |

:::info
The Partner API is limited to 60 requests per hour. However, this is subject to change in the future.
:::

## Fork Our Postman Collection

Unstoppable Domains provides a Postman collection that you can fork to your workspace and interact with the Partner API in one click.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9?action=collection%2Ffork&collection-url=entityId%3D19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9%26entityType%3Dcollection%26workspaceId%3D6762865c-b510-4216-ba7f-45cd07f164c7#?env%5BSandbox%20-%20Partner%20API%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vYXBpLnVkLXNhbmRib3guY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL2FwaS51ZC1zYW5kYm94LmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJodHRwX2F1dGgiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOmZhbHNlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6ImFwaV9rZXkiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJzZWNyZXQiLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjJ9LHsia2V5IjoicmVzZWxsZXJfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6InN0cmlwZV90ZXN0X2tleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6InNlY3JldCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NH1d)

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
