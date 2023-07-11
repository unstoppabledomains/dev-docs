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

## Get Started with Partner API v2 (Legacy)

Follow the [Partner API v2 (Legacy) integration guide](../partner-api-v2/partner-api-v2-integration.md) to get started.

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
