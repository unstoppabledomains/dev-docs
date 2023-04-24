---
title: Domain Distribution and Management Overview | Unstoppable Domains Developer Portal
description: Domain distribution and management overview and Partner API introduction.
redirectFrom:
  - /partner/partner-api-endpoints/
---

# Domain Distribution and Management Overview

Domain distribution and managemnt can be achieved via the Unstoppable Partner API and Smart Contracts.

# Partner API Endpoints

The table below lists all the API endpoints provided by the Partner API, along with a description of their function and links to their documentation. For more information about the endpoints, please consult the [Partner API endpoint specification](https://docs.unstoppabledomains.com/openapi/reference/).

| Endpoint                          | Description                                                                                                                                                      | Documentation                                                                                                                     |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Orders Endpoints                  |
| Buy a Domain or Claim Free Domain | used to buy domains or mint free domains from Unstoppable Domains                                                                                                | [Buy a Domain or Claim Free Domain Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostOrders)             |
| Get Order Status                  | provides the status of your order and tells if the domain has successfully "minted"                                                                              | [Get Order Status Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetOrder)                                |
| Domains Endpoints                 |
| Domain Name Availability          | checks the availability of a domain name before purchase                                                                                                         | [Domain Name Availability Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetDomain)                       |
| Multiple Domain Name Availability | checks the availability of multiple domain names before purchase                                                                                                 | [Multiple Domain Name Availability Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetDomains)             |
| Get Domains Suggestions           | provides domain suggestions based on the entered information                                                                                                     | [Get Domains Suggestions Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetDomainsSuggestions)            |
| Get Free Domains Suggestions      | provides free domain suggestions based on entered information if the partner is eligible to offer free domains                                                   | [Get Free Domains Suggestions Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetDomainsSuggestionsFree)   |
| Reserve Free Domain Name          | reserves a free and available domain for seven days; the domain is automatically unlocked if it is not minted within seven days                                  | [Reserve Free Domain Name Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostDomainReserve)               |
| Security Endpoints                |
| Get Fingerprint Public Key        | provides a Fingerprint public key to generate a `Visitor ID` for your order security; the endpoint returns a different key when called to avoid rate limitations | [Get Fingerprint Public Key Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostSecurityFingerprintjsKeys) |
| Domain Actions Endpoints          |
| Create Domain Action Request      | provides a list of transactions that need to be signed by the user in order to perform a domain action                                                           | [Create Domain Action Request Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostActions)                 |
| Get Domain Action                 | receives a `domain action Id` and provides a list of transactions that need to be signed by the user in order to perform that action                             | [Get Domain Action Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetAction)                              |
| Get Domain Actions                | provides domain actions performed by a user, domain or owner address                                                                                             | [Get Domain Actions Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/GetActions)                            |
| Submit Domain Action Signature    | submits the required data for a domain action to be executed                                                                                                     | [Submit Domain Action Signature Docs](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostActionSign)            |

## Rate Limits

Currently, the rate limits for the Partner API endpoints are set at **60 requests per IP per hour**. Please note that these limits are subject to change in the future.

## Fork Our Postman Collection

Unstoppable Domains offers a Postman collection that you can easily import into your workspace to quickly interact with the Partner and Domain Actions API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9?action=collection%2Ffork&collection-url=entityId%3D19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9%26entityType%3Dcollection%26workspaceId%3D6762865c-b510-4216-ba7f-45cd07f164c7#?env%5BSandbox%20-%20Partner%20API%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vYXBpLnVkLXNhbmRib3guY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL2FwaS51ZC1zYW5kYm94LmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJodHRwX2F1dGgiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOmZhbHNlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6ImFwaV9rZXkiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJzZWNyZXQiLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjJ9LHsia2V5IjoicmVzZWxsZXJfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6InN0cmlwZV90ZXN0X2tleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6InNlY3JldCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NH1d)

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
