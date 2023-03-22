---
title: Set up Partner API Access Guide | Unstoppable Domains Developer Portal
description: This page explains the process for creating an account and applying to become an authorized partner for Unstoppable Domains.
---

# Set up Partner API Access Guide

This page explains the process for creating an account and applying to become an authorized partner for Unstoppable Domains.

:::warning
The Partner API only supports domains and wallets on the Polygon L2 network. See the [Polygon Developer Integration Guide](/manage-domains/polygon-release-notes.md) to get started.
:::

## Step 1: Apply for API Access

You must create an Unstoppable Domains [Sandbox](https://www.ud-sandbox.com/partner-api-dashboard) or [Production](https://unstoppabledomains.com/partner-api-dashboard) Partner account. You may **Login** using your existing Unstoppable Domains account information or **Sign Up** if you don’t already have an account.

<figure>

![Login or sign-up options for new partners](/images/1.png '#width=60%;')

<figcaption>Login or sign-up options for new partners</figcaption>
</figure>

## Step 2: Submit Approval for API Key

After logging in, you will have the option to submit a partner application. Please complete the required information and submit the application. The review process takes up to five business days but is usually sooner.

:::info
To avoid missing the email about your partner application status, please update your email settings to approve messages from [notifications@unstoppabledomains.com](mailto:notifications@unstoppabledomains.com), so it doesn’t end up in your spam folder.
:::

After your application is approved, you will be given full access to your Partner API credentials to view your ResellerID and update payment information.

## Step 3: Configure Payment Information

The Partner API must be configured with one or more payment options before users can begin purchasing domains. Please follow the instructions in the [Partner Integration Guides](integration-paths.md) to integrate one or more payment methods for your partner account.

:::success Congratulations!
You just registered to become an official Unstoppable Domains Partner.
:::

<!-- ---
title: Set up UD Sandbox for Testing Guide | Unstoppable Domains Developer Portal
description: This page details how to access and set up the Unstoppable Domains Sandbox Environment for partners to test their integrations.
--- -->

# Set up UD Sandbox for Testing Guide

This page details how to access and set up the Unstoppable Domains Sandbox Environment for partners to test their integrations.

## Step 1: Register on the UD Sandbox

Open the UD Sandbox in your browser: <https://ud-sandbox.com/>, then provide your contact details (company and email address).

<figure>

![UD Sandbox IP adding page](/images/ud-sandbox-ip-adding.png '#width=60%;')

<figcaption>UD Sandbox IP adding page</figcaption>
</figure>

:::info
If your IP address is added in the Sandbox allowlist, you will not be redirected to the IP adding page.
:::

## Step 2: Verify Your Email Address

Unstoppable Domains will send a verification message to the email address you provided to the Sandbox Environment.

<figure>

![UD Sandbox verification](/images/ud-sandbox-verification.png '#width=40%;')

<figcaption>UD Sandbox verification</figcaption>
</figure>

## Step 3: Add Your IP Address to the Sandbox

Open the verification email and click the link to add your IP address to the UD Sandbox Environment allowlist.

<figure>

![Add your IP address in the Sandbox](/images/ud-sandbox-ip-adding-links.png '#width=80%;')

<figcaption>Add your IP address to the Sandbox</figcaption>
</figure>

:::info
You can use the second link to revoke your IP address from the Sandbox allowlist.
:::

## Step 4: Access the UD Sandbox

After adding your IP address, you will be redirected to the Unstoppable Domains Sandbox Environment, where you can test your integrations.

<figure>

![Wait to be redirected](/images/ud-sandbox-redirection.png '#width=80%;')

<figcaption>Wait to be redirected</figcaption>
</figure>

<figure>

![UD Sandbox homepage](/images/ud-sandbox-home.png '#width=80%;')

<figcaption>UD Sandbox homepage</figcaption>
</figure>

:::info
Please see the [Get a Test Domain using Unstoppable Website Faucet](/getting-started/test-domains/faucet.md) guide for instructions on minting a free domain for testing purposes.
:::

## Sandbox Environment URLs

### Sandbox Website

```bash
https://ud-sandbox.com/
```

### Sandbox API Endpoint

```bash
https://api.ud-sandbox.com/
```

### Sandbox Partner Account

```bash
https://ud-sandbox.com/partner-api-dashboard/
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

After [setting up access to the Partner API](index.md), you must obtain your `resellerID` from your [Sandbox](https://www.ud-sandbox.com/partner-api-dashboard) or [Production](https://unstoppabledomains.com/partner-api-dashboard) Partner account to integrate our services into your application for your customers.

## Step 2: Add a Domain Search Functionality

Before you integrate free or paid domain minting (via Stripe or Redirect URLs) payment flows, you must implement a domain search functionality into your application. Unstoppable Domains provides a set of endpoints to provide domain suggestions, check the availability of domain names, and reserve free domain names.

| Pathway | Description | Integration Guides |
| - | - | - |
| Get Domains Suggestions | provides free and paid domain suggestions based on the entered information | [Get Domains Suggestions Guide](partner-integration-guides/get-domains-suggestions.md) |
| Domain Name Availability | checks the availability of a domain name before purchase | [Domain Name Availability Guide](partner-integration-guides/domain-name-availability.md) |
| Multiple Domain Name Availability | checks the availability of multiple domain names before purchase | [Multiple Domain Name Availability Guide](partner-integration-guides/multiple-domain-name-availability.md) |
| Reserve Free Domain Name | reserves a free and available domain name for seven days | [Reserve Free Domain Name Guide](partner-integration-guides/reserve-free-domain-name.md) |

## Step 3: Choose Your Integration Path

There are several ways to integrate with Unstoppable's Partner API, detailed in the table below. Partners are encouraged to integrate more than one pathway.

| Pathway | Description | Integration Guides |
| - | - | - |
| Free domains | mint free domains for customers following pre-determined "allowed free TLDs" and "allowed free tiers" | [Free Domain Minting Guide](partner-integration-guides/mint-free-domains.md) |
| Paid domains: Stripe | configure Stripe account to process paid domains via credit card, PayPal, and ApplePay | [Stripe Payments Guide](partner-integration-guides/stripe-payments.md) |
| Paid domains: Redirect URL | generate a URL to redirect payments to Unstoppable Domains to be processed, does not require native paid domain flow | [Redirect URL Payments Guide](partner-integration-guides/redirect-url-payments.md) |
| Paid domains: Redirect URL With Auto-Configured Crypto Records | generate a URL to redirect payments to Unstoppable Domains to be processed and automatically configure domain records, does not require native paid domain flow  | [Redirect URL Payments With Auto-Configured Crypto Records Guide](partner-integration-guides/redirect-url-payments-with-records.md) |

:::info
Unstoppable Domains provides a [Sandbox Environment](set-up-sandbox-for-testing.md) for partners to test their integrations.
:::

## Considerations

The following considerations apply to purchasing domains:

* The domain must contain only letters (`a-z`), numbers (`0-9`), and hyphens (`-`)
* The domain name cannot start with a hyphen (`-`)
* The domain length must not exceed 253 characters

## Fork Our Postman Collection

Unstoppable Domains offers a Postman collection that you can easily import into your workspace to quickly interact with the Partner and Domain Actions API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9?action=collection%2Ffork&collection-url=entityId%3D19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9%26entityType%3Dcollection%26workspaceId%3D6762865c-b510-4216-ba7f-45cd07f164c7#?env%5BSandbox%20-%20Partner%20API%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vYXBpLnVkLXNhbmRib3guY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL2FwaS51ZC1zYW5kYm94LmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJodHRwX2F1dGgiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOmZhbHNlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6ImFwaV9rZXkiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJzZWNyZXQiLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjJ9LHsia2V5IjoicmVzZWxsZXJfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6InN0cmlwZV90ZXN0X2tleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6InNlY3JldCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NH1d)

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />