---
title: Partner API v2 (Legacy) Integration Paths | Unstoppable Domains Developer Portal
description: This guide shows how to get started with Partner API v2 (Legacy).
---

# Partner API v2 (Legacy) Integration Paths

Unstoppable Domains Partner API v2 (Legacy) has several integration pathways available for developers. This page reviews the integration guides and overall features for each installation option. For more information about the endpoints, please consult the [Partner API v2 (Legacy) endpoint specification](https://docs.unstoppabledomains.com/openapi/partner/v2/).

:::warning important
Partner API Integrations will only work on **Polygon L2 network**.
:::

## Step 1: Locate Your Reseller ID

After [setting up access to the Partner API v2 (Legacy)](/domain-distribution-and-management/quickstart/retrieve-an-api-key/), you must obtain your `resellerID` from the `API Panel` of the [Partner Dashboard](https://dashboard.auth.unstoppabledomains.com) to integrate our services into your application for your customers.

## Step 2: Add Domain Search Functionality

Before you integrate free or paid domain minting (via Stripe or Redirect URLs) payment flows, you must implement a domain search functionality into your application. Unstoppable Domains provides a set of endpoints to provide domain suggestions, check the availability of domain names, and reserve free domain names.

| Pathway                  | Description                                                                | Integration Guides                                                              |
| ------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Get Domains Suggestions  | provides free and paid domain suggestions based on the entered information | [Get Domains Suggestions Guide](./search-domains.md)                |
| Domain Name Availability | checks the availability of a domain name before purchase                   | [Domain Name Availability Guide](../guides/check-domains-availability.md)    |
| Reserve Free Domain Name | reserves a free and available domain name for seven days                   | [Reserve Free Domain Name Guide](../guides/claim-or-reserve-free-domains.md) |

## Step 3: Choose Your Integration Path

There are several ways to integrate with Unstoppable's Partner API, detailed in the table below. Partners are encouraged to integrate more than one pathway.

| Pathway                                                        | Description                                                                                                                                                     | Integration Guides                                                                                                                                                                  |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Free domains                                                   | mint free domains for customers following pre-determined "allowed free TLDs" and "allowed free tiers"                                                           | [Free Domain Minting Guide](../guides/claim-or-reserve-free-domains.md)                                                                                                          |
| Paid domains: Stripe                                           | configure Stripe account to process paid domains via credit card, PayPal, and ApplePay                                                                          | [Stripe Payments Guide](../quickstart/purchase-domains-with-stripe.md)                                                                                                              |
| Paid domains: Redirect URL                                     | generate a URL to redirect payments to Unstoppable Domains to be processed, does not require native paid domain flow                                            | [Redirect URL Payments Guide](../guides/purchase-domains-with-redirect-url.md)                                                                                                   |
| Paid domains: Redirect URL With Auto-Configured Crypto Records | generate a URL to redirect payments to Unstoppable Domains to be processed and automatically configure domain records, does not require native paid domain flow | [Redirect URL Payments With Auto-Configured Crypto Records Guide](../guides/purchase-domains-with-redirect-url/#redirect-url-payments-with-auto-configured-crypto-records-guide) |

:::info
Unstoppable Domains provides a [Sandbox Environment](/domain-distribution-and-management/quickstart/retrieve-an-api-key/#set-up-ud-sandbox-for-testing-guide) for partners to test their integrations.
:::

## Considerations

The following considerations apply to purchasing domains:

- The domain must contain only letters (`a-z`), numbers (`0-9`), and hyphens (`-`)
- The domain name cannot start with a hyphen (`-`)
- The domain length must not exceed 253 characters

## Fork Our Postman Collection

Unstoppable Domains offers a Postman collection that you can easily import into your workspace to quickly interact with the Partner and Domain Actions API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9?action=collection%2Ffork&collection-url=entityId%3D19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9%26entityType%3Dcollection%26workspaceId%3D6762865c-b510-4216-ba7f-45cd07f164c7#?env%5BSandbox%20-%20Partner%20API%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vYXBpLnVkLXNhbmRib3guY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL2FwaS51ZC1zYW5kYm94LmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJodHRwX2F1dGgiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOmZhbHNlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6ImFwaV9rZXkiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJzZWNyZXQiLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjJ9LHsia2V5IjoicmVzZWxsZXJfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6InN0cmlwZV90ZXN0X2tleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6InNlY3JldCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NH1d)





<embed src="/snippets/_partner-survey-embed.md" />
