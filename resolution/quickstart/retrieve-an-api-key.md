---
title: Resolution Service API | Unstoppable Domains Developer Portal
description: This page provides a high-level overview of the Resolution Service API hosted by Unstoppable Domains.
---

# Set up Resolution Service API Access Guide

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
Refer to [Domain Resolution API](https://docs.unstoppabledomains.com/openapi/resolution/) for supported use cases.

By default, you will have access to `Domain Resolution API`. You do not need to click on `Request access to Partner API v3`.

{% admonition type="warning"%}
Your API key is only intended for use on your backend servers. Any other usage could result in security risks and or your key being deactivated.
{% /admonition %}

### SDK Key
Refer to the [Javascript Resolution SDKs](https://github.com/unstoppabledomains/resolution)

The key is only allowed to be used in Resolution SDKs to interact with EVM RPC providers to query on-chain data. 

{% admonition type="warning"%}
The SDKs are no longer maintained.
{% /admonition %}

## Step 4: Authenticate Your Requests

The Resolution Service API uses `Bearer Tokens` to authorize requests with the API key gotten from Unstoppable Domains.

| Field Name | Value |
| - | - |
| Security Scheme Type | HTTP |
| HTTP Authorization Scheme | bearer |
| Bearer Format | a token provided by Unstoppable Domains |

### Fork Our Postman Collection

Unstoppable Domains offers a Postman collection that you can easily import into your workspace to quickly interact with the Resolution Service API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19507736-52bf9f35-1608-4dc4-a96d-e62682b59199?action=collection%2Ffork&collection-url=entityId%3D19507736-52bf9f35-1608-4dc4-a96d-e62682b59199%26entityType%3Dcollection%26workspaceId%3D6762865c-b510-4216-ba7f-45cd07f164c7#?env%5BResolution%20Service%20-%20Open%20API%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vcmVzb2x2ZS51bnN0b3BwYWJsZWRvbWFpbnMuY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL3Jlc29sdmUudW5zdG9wcGFibGVkb21haW5zLmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJhcGlfa2V5IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfV0=)

{% admonition type="success" name="Congratulations!" %}
You just registered to become an official Unstoppable Domains Partner.
{% /admonition %}
