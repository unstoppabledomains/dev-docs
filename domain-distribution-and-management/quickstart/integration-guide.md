---
title: Partner API Integration Guide | Unstoppable Domains Developer Portal
description: Step-by-step guide for integrating the Unstoppable Domains Partner API
---

# Partner API Integration Guide

The Unstoppable Domains Partner API offers several utilities to that go beyond simply distributing and managing Web3 domains, this integration guide is focused on the core set of functionality to help you build your own Web3 Registrar.

The primary components of a Web3 Registrar are:

1. **Search** - Helping users find their domain
2. **Purchase** - Selling users their domain
3. **Registration** - Giving users ownership of their domain
4. **Management** - Helping users manage their domain

:::info API Key needed!
Before you can use the Partner API, you will need an API key. Follow [these steps](https://docs.unstoppabledomains.com/domain-distribution-and-management/quickstart/retrieve-an-api-key/) to get access.
:::

## The Basics

There are some key principles to keep in mind when working with the Partner API that impact integration:

1. Every endpoint is authenticated
2. The API should **only be used from backend systems** to avoid revealing your API key. This means you will need your own API servers to interact with the Partner API and for your own API servers to handle requests from your website's frontend or mobile app.
3. You are responsible for payment collection from end users, giving you the freedom to use whatever payment processing works best for your application. We will periodically invoice you for your owed balance.

### Making a Request

Once you have your [API key](https://docs.unstoppabledomains.com/domain-distribution-and-management/quickstart/retrieve-an-api-key/), you can quickly verify things are working by making a simple `GET` request to view [your account details](https://docs.unstoppabledomains.com/openapi/partner/latest/#tag/account):


```typescript
import axios from 'axios';

const baseUrl = 'https://api.unstoppabledomains.com/partner/v3';
const apiKey = 'your-API-key';

async function getAccountDetails() {
    const result = await axios.get(`${baseUrl}/account`, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });

    console.log(result);
}

// Call the API
void getAccountDetails();
```


## Search & Suggestions

Follow [this guide](todo) to learn how to use the Partner API to help users find their perfect Web3 domain.


## Purchases

Follow [this guide](todo) to learn about best practices for integrating the Partner API into your payment processing system.

## Registrations

Follow [this guide](todo) to learn about the various ways to handle domain registrations to pick what will work best in your application.

## Management

Give users the full domain experience. Follow [this guide](todo) to learn about how domains can be managed through the Partner API to help users fully engage in Web3.

## What's next?

Looking for more?

1. Check out the [Partner API specification](https://docs.unstoppabledomains.com/openapi/partner/latest/) to discover everything it has to offer
2. Learn more about [Domain resolution](https://docs.unstoppabledomains.com/resolution/overview/). It is the perfect way to boost the user experience of your Web3 application by incorporating Web3 everywhere users would expect it!
3. [Start from the beginning](https://docs.unstoppabledomains.com/getting-started/) and learn more about Unstoppable Domains


<embed src="/snippets/_partner-survey-embed.md" />
