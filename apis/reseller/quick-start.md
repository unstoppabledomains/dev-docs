---
title: Quick Start | Unstoppable Domains Developer Portal
description: Get access to the Reseller API, authenticate, and make your first request
---

# Quick Start

The Reseller API provides domain search, registration, DNS management, and lifecycle operations through a single RESTful API. It is designed for resellers who want to offer traditional DNS domain registration and management to their end users.

## Get Access

Visit the [Reseller Dashboard](https://unstoppabledomains.com/reseller-dashboard) to create an account, submit your application, and obtain your API key.

## Environments

The API is available in two environments:

| Environment | Base URL |
|-------------|----------|
| Production  | `https://api.unstoppabledomains.com/partner/v3` |
| Sandbox     | `https://api.ud-sandbox.com/partner/v3` |

Use the sandbox environment for development and testing. There is no charge for sandbox usage. For complete endpoint details, see the [API Reference](/apis/reseller/openapi).

## Prerequisites

1. Create an account on the [Reseller Dashboard](https://unstoppabledomains.com/reseller-dashboard).
2. Obtain your API key from the dashboard.
3. Send your API key as a Bearer token in the `Authorization` header on every request.

## Your First Request

Search for domain availability using the sandbox environment:

```bash
curl "https://api.ud-sandbox.com/partner/v3/domains?query=example.com&ending=com&\$expand=registration" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

The `$expand=registration` parameter includes registration availability and pricing information in the response. If the request succeeds, you are authenticated and ready to integrate.

## Next Steps

- Continue with the [Implementation Guide](/apis/reseller/implementation-guide) for search, registration, contacts, DNS, lifecycle operations, webhooks, and error handling.
- Use the [API Reference](/apis/reseller/openapi) for endpoint details, schemas, and live request examples.
