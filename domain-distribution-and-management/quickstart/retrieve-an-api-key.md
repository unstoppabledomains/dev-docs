---
title: Set up Partner API Access Guide | Unstoppable Domains Developer Portal
description: This page explains the process for creating an account and applying to become an authorized partner for Unstoppable Domains.
redirectFrom:
  - /partner/
  - /partner/set-up-sandbox-for-testing/
  - /partner/integration-paths/
---

# Set up Partner API Access Guide

This page explains the process for creating an account and applying to become an authorized partner for Unstoppable Domains.

:::warning
The Partner API only supports domains and wallets on the Polygon L2 network. See the [Polygon Developer Integration Guide](/manage-domains/polygon-release-notes.md) to get started.
:::

## Step 1: Sign Up to Partner Dashboard

You must create an Unstoppable Domains Partner account in [Partner Dashboard](https://dashboard.auth.unstoppabledomains.com). You may **Login** using your existing Unstoppable Domains account information or **Sign Up** if you don’t already have an account.

<figure>

![Login or sign-up options for new partners](/images/partner-signup.png "#width=60%;")

<figcaption>Login or sign-up options for new partners</figcaption>
</figure>


## Step 2: Setup Your First Application

Let us know who you are by submitting your **Company name** and **Company type**

<figure>

![Submit company details](/images/submit-company-name.png "#width=60%;")

<figcaption>Submit company details</figcaption>
</figure>

Navigate to [Clients Page](https://dashboard.auth.unstoppabledomains.com/clients) by clicking `Clients` at the top of the app. Read the `Partner API Terms` and submit your agreement.

<figure>

![Partner API Terms](/images/dashboard-client-page.png "#width=90%;")

<figcaption>Partner API Terms</figcaption>
</figure>

Create your first client by clicking the `Create Client` button.

<figure>

![Create First Client](/images/dashboard-empty-client-page.png "#width=80%;")

<figcaption>Create First Client</figcaption>
</figure>

Update your client information and click `Confirm Changes`

<figure>

![Update Client Information](/images/dashboard-update-client-info.png "#width=80%;")

<figcaption>Update Client Information</figcaption>
</figure>

## Step 3: Obtain an API Key

Navigate to the `API Panel` by clicking the `API` button.

<figure>

![API Panel](/images/dashboard-api-pannel.png "#width=80%;")

<figcaption>API Panel</figcaption>
</figure>

Request one of the following keys depending on your current usage. You **might** be required to provide an email address for our partner engineering team to contact you if you originally signed up using a Wallet address such as MetaMask.

<figure>

![Email Requirement](/images/dashboard-email-requirement.png "#width=80%;")

<figcaption>Email Requirement</figcaption>
</figure>

### API Key
Refer to [Partner API v3](https://docs.unstoppabledomains.com/openapi/partner/latest/) for supported use cases.

When you click on the `Request key`, an email will be sent to our `Partner engineering team`. The team will be contacting you in shortly via the email you login with or the one submitted when requesting to acquire the key.

### Legacy API Key
Refer to [Domain Resolution](https://docs.unstoppabledomains.com/openapi/resolution/) and [Domain Distribution and Management Overview
](https://docs.unstoppabledomains.com/domain-distribution-and-management/overview/#domain-distribution-and-management-overview) for supported use cases.

Click `Reveal Key` under `Legacy API key` to acquire your API Key


## Step 3: Configure Payment Information

The Partner API must be configured with one or more payment options before users can begin purchasing domains. Please follow the instructions in the [Partner Integration Guides](#partner-api-integration-paths) to integrate one or more payment methods for your partner account.

:::success Congratulations!
You just registered to become an official Unstoppable Domains Partner.
:::

# Set up UD Sandbox for Testing Guide

To test integrations, you can switch to Sandbox mode. This mode allows you play around with test net which does not incur cost during development. To access Sandbox, toggle the `Sandbox` button at the top of the application.

<figure>

![Sandbox Mode](/images/dashboard-sandbox-button.png "#width=90%;")

<figcaption>Sandbox Mode</figcaption>
</figure>


## Sandbox Environment URLs

### Sandbox Website

```bash
https://ud-sandbox.com/
```

### Sandbox API Endpoint

```bash
https://api.ud-sandbox.com/
```

:::success Congratulations!
You have successfully accessed and set up the Unstoppable Domains Sandbox Environment. Happy hacking!
:::

# Partner API Integration Paths

Unstoppable Domains Partner API is a versatile feature with several integration pathways available for developers. This page reviews the integration guides and overall features for each installation option. For more information about the endpoints, please consult the [Partner API endpoint specification](https://docs.unstoppabledomains.com/openapi/reference/).

:::warning important
Partner API Integrations will only work on **Polygon L2 network**. See the [Polygon Developer Integration Guide](/manage-domains/polygon-release-notes.md) to get started.
:::

## Step 1: Locate Your Reseller ID

After [setting up access to the Partner API](#set-up-partner-api-access-guide), you must obtain your `resellerID` from the `API Panel` of the [Partner Dashboard](https://dashboard.auth.unstoppabledomains.com) to integrate our services into your application for your customers.

## Step 2: Add a Domain Search Functionality

Before you integrate free or paid domain minting (via Stripe or Redirect URLs) payment flows, you must implement a domain search functionality into your application. Unstoppable Domains provides a set of endpoints to provide domain suggestions, check the availability of domain names, and reserve free domain names.

| Pathway                  | Description                                                                | Integration Guides                                                              |
| ------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Get Domains Suggestions  | provides free and paid domain suggestions based on the entered information | [Get Domains Suggestions Guide](../quickstart/search-domains.md)                |
| Domain Name Availability | checks the availability of a domain name before purchase                   | [Domain Name Availability Guide](../../guides/check-domains-availability.md)    |
| Reserve Free Domain Name | reserves a free and available domain name for seven days                   | [Reserve Free Domain Name Guide](../../guides/claim-or-reserve-free-domains.md) |

## Step 3: Choose Your Integration Path

There are several ways to integrate with Unstoppable's Partner API, detailed in the table below. Partners are encouraged to integrate more than one pathway.

| Pathway                                                        | Description                                                                                                                                                     | Integration Guides                                                                                                                                                                  |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Free domains                                                   | mint free domains for customers following pre-determined "allowed free TLDs" and "allowed free tiers"                                                           | [Free Domain Minting Guide](../../guides/claim-or-reserve-free-domains.md)                                                                                                          |
| Paid domains: Stripe                                           | configure Stripe account to process paid domains via credit card, PayPal, and ApplePay                                                                          | [Stripe Payments Guide](../quickstart/purchase-domains-with-stripe.md)                                                                                                              |
| Paid domains: Redirect URL                                     | generate a URL to redirect payments to Unstoppable Domains to be processed, does not require native paid domain flow                                            | [Redirect URL Payments Guide](../../guides/purchase-domains-with-redirect-url.md)                                                                                                   |
| Paid domains: Redirect URL With Auto-Configured Crypto Records | generate a URL to redirect payments to Unstoppable Domains to be processed and automatically configure domain records, does not require native paid domain flow | [Redirect URL Payments With Auto-Configured Crypto Records Guide](../../guides/purchase-domains-with-redirect-url/#redirect-url-payments-with-auto-configured-crypto-records-guide) |

:::info
Unstoppable Domains provides a [Sandbox Environment](set-up-sandbox-for-testing.md) for partners to test their integrations.
:::

## Considerations

The following considerations apply to purchasing domains:

- The domain must contain only letters (`a-z`), numbers (`0-9`), and hyphens (`-`)
- The domain name cannot start with a hyphen (`-`)
- The domain length must not exceed 253 characters

## Fork Our Postman Collection

Unstoppable Domains offers a Postman collection that you can easily import into your workspace to quickly interact with the Partner and Domain Actions API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9?action=collection%2Ffork&collection-url=entityId%3D19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9%26entityType%3Dcollection%26workspaceId%3D6762865c-b510-4216-ba7f-45cd07f164c7#?env%5BSandbox%20-%20Partner%20API%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vYXBpLnVkLXNhbmRib3guY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL2FwaS51ZC1zYW5kYm94LmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJodHRwX2F1dGgiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOmZhbHNlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6ImFwaV9rZXkiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJzZWNyZXQiLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjJ9LHsia2V5IjoicmVzZWxsZXJfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6InN0cmlwZV90ZXN0X2tleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6InNlY3JldCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NH1d)

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
