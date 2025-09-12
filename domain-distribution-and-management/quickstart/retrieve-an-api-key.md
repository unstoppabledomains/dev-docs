---
title: Set up Partner API Access Guide | Unstoppable Domains Developer Portal
description: >-
  This page explains the process for creating an account and applying to become
  an authorized partner for Unstoppable Domains.
redirects:
  /partner/: {}
  /partner/set-up-sandbox-for-testing/: {}
  /partner/integration-paths/: {}
---

# Set up Partner API Access Guide

This page explains the process for creating an account and applying to become an authorized partner for Unstoppable Domains.

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

Navigate to the `API & SDK Panel` by clicking the `API & SDK` button.

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
Refer to [Partner API v3](https://docs.unstoppabledomains.com/openapi/partner/latest/) and [Domain Resolution API](https://docs.unstoppabledomains.com/openapi/resolution/) for supported use cases.

{% admonition type="warning"%}
Your API key is only intended for use on your backend servers. Any other usage could result in security risks and or your key being deactivated. Please refer to [Best Practices for Integrating Partner API](https://docs.unstoppabledomains.com/domain-distribution-and-management/guides/best-practices/#dont-use-your-secrets-in-the-frontend) for integrating with us.
{% /admonition %}

By default, you will have access to `Domain Resolution API`.

If you wish to have access to `Partner API v3`, please click `Request access to Partner API v3`. Our `Partner engineering team` team will be contacting you in shortly via email.


### SDK Key
Refer to the [Javascript Resolution SDKs](https://github.com/unstoppabledomains/resolution)

The key is only allowed to be used in Resolution SDKs to interact with EVM RPC providers to query on-chain data. The SDKs are unmaintained.

### Legacy API Key
Refer to [Domain Resolution](https://docs.unstoppabledomains.com/openapi/resolution/) and [Domain Distribution and Management Overview
](https://docs.unstoppabledomains.com/domain-distribution-and-management/overview/#domain-distribution-and-management-overview) for supported use cases.

Click `Reveal Key` under `Legacy API key` to acquire your API Key

{% admonition type="success" name="Congratulations!" %}
You just registered to become an official Unstoppable Domains Partner.
{% /admonition %}

## Step 4: Set up UD Sandbox

To build the Partner API integrations, switch to Sandbox mode. This mode allows you play around with test net which does not incur cost during development. To access Sandbox, toggle the `Sandbox` button at the top of the application.

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

{% admonition type="success" name="Congratulations!" %}
You have successfully accessed and set up the Unstoppable Domains Sandbox Environment. Happy hacking!
{% /admonition %}

{% partial file="/_partials/_partner-survey-embed.md" /%}
