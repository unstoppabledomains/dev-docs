---
title: Reseller API Implementation Guide | Unstoppable Domains Developer Portal
description: How to integrate the Reseller API for domain search, registration, DNS management, and lifecycle operations
---

# Reseller API Implementation Guide

The Reseller API provides domain search, registration, DNS management, and lifecycle operations through a single RESTful API. It is designed for resellers who want to offer traditional DNS domain registration and management to their end users.

To get started, visit the [Reseller Dashboard](https://unstoppabledomains.com/reseller-dashboard) to create an account and obtain your API key.

The API is available in two environments:

| Environment | Base URL |
|-------------|----------|
| Production  | `https://api.unstoppabledomains.com/partner/v3` |
| Sandbox     | `https://api.ud-sandbox.com/partner/v3` |

Use the sandbox environment for development and testing. There is no charge for sandbox usage. For complete endpoint details, see the [API Reference](/apis/reseller/openapi).

## Your Responsibilities as a Reseller

The Reseller API handles domain operations, but several responsibilities fall on you as the integrating platform:

- **Domain-to-user mapping.** The API does not track which end user owns which domain. You must maintain this mapping in your own system so that you can associate domains with the correct user accounts.

- **Contact management.** You are responsible for creating ICANN contacts and associating them with domains during registration. Unstoppable Domains handles contact verification by sending a verification email to the contact's email address. You decide how to map contacts to your users -- whether each user gets their own contact, or multiple users share a contact, or some other arrangement.

- **Payment processing.** Unstoppable Domains keeps a running balance against your reseller account and invoices you periodically. You are responsible for building your own checkout and billing experience for end users and collecting payment from them.

- **Renewal tracking.** The API provides renewal eligibility and pricing information, but you are responsible for monitoring domain expiration dates and initiating renewals on time. Build reminders and automation into your platform to avoid letting domains expire.

- **DNS configuration.** You can set up DNS records on behalf of your users or expose DNS management directly in your UI. Either way, it is your responsibility to ensure domains are configured correctly for your users.

## Core Concepts

### Operations

Every mutating API call (registration, DNS changes, renewals, etc.) returns an **Operation** object. Operations are the primary mechanism for tracking the progress of asynchronous work.

An Operation progresses through the following statuses:

```
QUEUED → PROCESSING → COMPLETED | FAILED | CANCELLED
```

Two additional statuses exist:

- **PREVIEW** -- Returned when using preview mode (`$preview=true`). The operation was not executed.
- **AWAITING_UPDATES** -- The operation requires additional input or action before it can proceed.

Only one operation can be active on a domain at a time. If you attempt a mutating action while another operation is in progress, the API will return a `409 Conflict`. Use `GET /domains/{name}/pending-operations` to check for active operations before initiating changes.

Each Operation contains **dependencies**, which are smaller units of work that make up the overall operation. Each dependency has its own status, so you can track granular progress.

To check the status of an operation, poll the operation endpoint:

```bash
curl "https://api.ud-sandbox.com/partner/v3/operations/{id}" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Example response:

```json
{
  "id": "op-a1b2c3d4-5678-90ab-cdef-1234567890ab",
  "status": "PROCESSING",
  "type": "DOMAIN_REGISTRATION",
  "dependencies": [
    {
      "type": "DNS_REGISTRATION",
      "status": "COMPLETED"
    },
    {
      "type": "CONTACT_ASSOCIATION",
      "status": "PROCESSING"
    }
  ]
}
```

### Preview Mode

Add the `$preview=true` query parameter to any mutating request to validate it without executing. This is useful for:

- Getting a price quote before committing to a registration or renewal
- Validating request parameters before submitting
- Showing users what will happen before they confirm

A preview request returns what the Operation would look like, with the status set to `PREVIEW`. No changes are made, and no charges are incurred.

```bash
curl -X POST "https://api.ud-sandbox.com/partner/v3/domains?\$preview=true" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "example.com"}'
```

### Domain Flags

Domain flags control what actions are permitted on a domain. There are six flags:

| Flag | EPP Status | Description |
|------|------------|-------------|
| `DNS_RESOLUTION` | `clientHold` | Controls whether the domain resolves via DNS |
| `DNS_TRANSFER_OUT` | `clientTransferProhibited` | Controls whether the domain can be transferred to another registrar |
| `DNS_DELETE` | `clientDeleteProhibited` | Controls whether the domain can be deleted |
| `DNS_UPDATE` | `clientUpdateProhibited` | Controls whether DNS records can be modified |
| `DNS_RENEW` | `clientRenewProhibited` | Controls whether the domain can be renewed |
| `DNS_WHOIS_PROXY` | -- | Controls whether WHOIS privacy protection is enabled |

Some flags may be read-only, meaning you cannot change them. When a flag is read-only, the API returns a reason code explaining why:

- **ADMIN** -- The flag is locked by an administrator.
- **HOSTING** -- The flag is controlled by the hosting configuration.
- **DNS_PROVIDER** -- The flag is controlled by the DNS provider.

## Getting Started

### Prerequisites

1. Create an account and apply on the [Reseller Dashboard](https://unstoppabledomains.com/reseller-dashboard).
2. Wait for our team to approve your application.
3. Obtain your API key from the dashboard.
4. All requests require a Bearer token in the `Authorization` header.

### Your First Request

Search for domain availability using the sandbox environment:

```bash
curl "https://api.ud-sandbox.com/partner/v3/domains?query=example.com&ending=com&\$expand=registration" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

The `$expand=registration` parameter includes registration availability and pricing information in the response. If the request succeeds, you are authenticated and ready to integrate.

## Search and Registration Flow

This section walks through the full flow from searching for a domain to completing registration.

### Step 1: Search for Available Domains

Search for domains matching a query:

```bash
curl "https://api.ud-sandbox.com/partner/v3/domains?query=example.com&ending=com&\$expand=registration" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

The response includes availability status and registration information for each matching domain.

### Step 2: Check Pricing

Get detailed pricing for a specific domain:

```bash
curl "https://api.ud-sandbox.com/partner/v3/pricing/dns/domains/example.com" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

This returns the registration price, renewal price, and any applicable fees.

### Step 3: Create a Contact

Before registering a domain, you need an ICANN contact. Create one with the required fields:

```bash
curl -X POST "https://api.ud-sandbox.com/partner/v3/contacts" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@example.com",
    "phone": {
      "dialingPrefix": "+1",
      "number": "5551234567"
    },
    "countryCode": "US",
    "street": "123 Main St",
    "city": "San Francisco",
    "postalCode": "94105",
    "stateProvince": "CA"
  }'
```

A verification email will be sent to the contact's email address. The contact can be used in domain registrations immediately, but domains associated with unverified contacts may become unmanageable after a certain period. See the [Contact Management](#contact-management) section for details on verification statuses.

### Step 4: Register the Domain

With a contact created, register the domain. Use `$preview=true` first to validate and get a price quote, then switch to `$preview=false` to execute:

```bash
curl -X POST "https://api.ud-sandbox.com/partner/v3/domains?\$preview=false" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "example.com",
    "owner": {
      "type": "SELF",
      "contact": "ct-a1b2c3d4-5678-90ab-cdef-1234567890ab"
    },
    "dns": {
      "period": 1,
      "contacts": {
        "admin": "ct-a1b2c3d4-5678-90ab-cdef-1234567890ab",
        "tech": "ct-a1b2c3d4-5678-90ab-cdef-1234567890ab",
        "billing": "ct-a1b2c3d4-5678-90ab-cdef-1234567890ab"
      }
    }
  }'
```

The response includes an Operation ID that you use to track the registration progress.

### Step 5: Track the Operation

Poll the operation endpoint until the status reaches `COMPLETED` or `FAILED`:

```bash
curl "https://api.ud-sandbox.com/partner/v3/operations/{id}" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

```json
{
  "id": "op-a1b2c3d4-5678-90ab-cdef-1234567890ab",
  "status": "COMPLETED",
  "type": "DOMAIN_REGISTRATION"
}
```

Poll at a reasonable interval (every 2-5 seconds) and implement a timeout. For production systems, consider using [webhooks](#webhooks) instead of polling.

### Using Preview Mode for Price Quotes

Before committing to a registration, run the same request with `$preview=true` instead of `$preview=false`. The response includes the pricing breakdown and validates all fields without actually registering the domain. See [Preview Mode](#preview-mode) for details.

## Contact Management

Contacts represent the ICANN registrant, admin, tech, and billing entities associated with a domain. Proper contact management is essential for domain registration and compliance.

### Required Fields

Every contact requires the following fields:

| Field | Description |
|-------|-------------|
| `firstName` | Contact's first name |
| `lastName` | Contact's last name |
| `email` | Contact's email address (used for verification) |
| `phone` | Object with `dialingPrefix` (e.g., `"+1"`) and `number` |
| `countryCode` | Two-letter ISO country code (e.g., `"US"`) |
| `street` | Street address |
| `city` | City |
| `postalCode` | Postal or ZIP code |
| `stateProvince` | State or province |

The `organization` field is optional and should be included when registering domains on behalf of a business.

### Email Verification

Contacts can be used in domain registrations immediately without waiting for verification. However, if a contact remains unverified past a deadline, their status becomes `SUSPENDED`, which can lead to domain suspension.

The verification flow works as follows:

1. **During registration** -- New contacts are created with `UNVERIFIED` status. Existing registrant contacts are marked as `PENDING` for verification. Registration proceeds immediately.
2. **After registration** -- A background job picks up `PENDING` contacts, sends a verification email with a deadline link, and marks them as `REQUESTED`.
3. **Enforcement** -- If the contact does not verify by the deadline, they are marked `SUSPENDED`, which can lead to domain suspension.

```
UNVERIFIED → PENDING → REQUESTED → VERIFIED
```

A contact can also reach `FAILED` or `SUSPENDED` status if verification fails or the deadline passes.

### Contact Roles

Domains have four contact roles:

- **Owner (Registrant)** -- The legal owner of the domain. Set during registration via the `owner` field.
- **Admin** -- The administrative contact for the domain.
- **Tech** -- The technical contact responsible for DNS configuration.
- **Billing** -- The billing contact for renewal and payment matters.

Contacts are assigned during registration. You can update contacts after registration using:

```bash
curl -X PATCH "https://api.ud-sandbox.com/partner/v3/domains/{name}/dns/contacts?\$preview=false" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "admin": "ct-new-contact-id",
    "tech": "ct-new-contact-id",
    "billing": "ct-new-contact-id"
  }'
```

### Inline vs. Referenced Contacts

You can create contacts in two ways:

- **Referenced** -- Create a contact first via `POST /contacts`, then reference its ID during registration. This is useful when reusing the same contact across multiple domains.
- **Inline** -- Provide the full contact details directly in the registration request body. The API creates the contact automatically. This is convenient for one-off registrations.

## DNS Management

The Reseller API provides full DNS record management for domains registered through your account.

### Listing Records

Retrieve all DNS records for a domain:

```bash
curl "https://api.ud-sandbox.com/partner/v3/domains/example.com/dns/records" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

You can filter by record type and subdomain:

```bash
curl "https://api.ud-sandbox.com/partner/v3/domains/example.com/dns/records?type=A&subName=www" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Creating Records

Create a new DNS record:

```bash
curl -X POST "https://api.ud-sandbox.com/partner/v3/domains/example.com/dns/records" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "A",
    "subName": "www",
    "value": "192.0.2.1",
    "ttl": 3600
  }'
```

Supported record types include `A`, `AAAA`, `CNAME`, `MX`, `TXT`, `SRV`, and others.

The `$upsert` query parameter controls behavior when a conflicting record already exists:

| Value | Behavior |
|-------|----------|
| `REPLACE` | Replace the existing record with the new one |
| `APPEND` | Add the new record alongside the existing one |
| `DISALLOWED` | Fail if a conflicting record exists (default) |

### Updating and Deleting Records

Each DNS record has a unique ID in the format `rr-<uuid>`. Use this ID to update or delete individual records:

```bash
# Update a record
curl -X PUT "https://api.ud-sandbox.com/partner/v3/domains/example.com/dns/records/rr-a1b2c3d4" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "value": "192.0.2.2",
    "ttl": 7200
  }'

# Delete a record
curl -X DELETE "https://api.ud-sandbox.com/partner/v3/domains/example.com/dns/records/rr-a1b2c3d4" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Nameservers

By default, domains use Unstoppable Domains-managed nameservers.

You can set custom nameservers if needed. You must provide between 2 and 12 nameservers:

```bash
curl -X PUT "https://api.ud-sandbox.com/partner/v3/domains/example.com/dns/nameservers" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "nameservers": [
      "ns1.example.net",
      "ns2.example.net"
    ]
  }'
```

To revert to UD-managed nameservers:

```bash
curl -X DELETE "https://api.ud-sandbox.com/partner/v3/domains/example.com/dns/nameservers" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Domain Lifecycle

### Renewal

Check if a domain is eligible for renewal and get pricing:

```bash
curl "https://api.ud-sandbox.com/partner/v3/domains/example.com/renewals" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Renew the domain by specifying the renewal period in years:

```bash
curl -X POST "https://api.ud-sandbox.com/partner/v3/domains/example.com/renewals?\$preview=false" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "period": 1
  }'
```

This returns an Operation that you can track to confirm the renewal completed.

### Transfers Out

To transfer a domain to another registrar:

1. Ensure the `DNS_TRANSFER_OUT` flag is enabled on the domain.
2. Retrieve the EPP authorization code:

```bash
curl "https://api.ud-sandbox.com/partner/v3/domains/example.com/dns/authorization-code" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

3. Provide the authorization code to the gaining registrar to initiate the transfer on their end.

### Transfers In

To transfer a domain from another registrar into your account, use the same `POST /domains` endpoint used for registration. Include the `dns.authorizationCode` field in the request body -- the presence of an authorization code tells the API this is a transfer rather than a new registration:

```bash
curl -X POST "https://api.ud-sandbox.com/partner/v3/domains?\$preview=false" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "example.com",
    "owner": {
      "type": "SELF",
      "contact": "ct-a1b2c3d4-5678-90ab-cdef-1234567890ab"
    },
    "dns": {
      "authorizationCode": "EPP_AUTH_CODE_HERE",
      "contacts": {
        "admin": "ct-a1b2c3d4-5678-90ab-cdef-1234567890ab",
        "tech": "ct-a1b2c3d4-5678-90ab-cdef-1234567890ab",
        "billing": "ct-a1b2c3d4-5678-90ab-cdef-1234567890ab"
      }
    }
  }'
```

### Managing Flags

View the current flags for a domain:

```bash
curl "https://api.ud-sandbox.com/partner/v3/domains/example.com/flags" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Update flags:

```bash
curl -X PATCH "https://api.ud-sandbox.com/partner/v3/domains/example.com/flags?\$preview=false" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "DNS_TRANSFER_OUT": false,
    "DNS_WHOIS_PROXY": true
  }'
```

Common patterns include:

- Enabling transfer lock (`DNS_TRANSFER_OUT: false`) on newly registered domains to prevent accidental transfers.
- Enabling WHOIS privacy (`DNS_WHOIS_PROXY: true`) to protect registrant information.

## Webhooks

Webhooks provide real-time notifications when operations complete, fail, or require action. For production systems, webhooks are more efficient than polling and ensure you respond to events promptly.

### Event Types

| Type | Description |
|------|-------------|
| `OPERATION_FINISHED` | An operation has completed (successfully or with failure) |
| `OPERATION_ACTION_REQUIRED` | An operation needs manual intervention to proceed |
| `OPERATION_CREATED` | A new operation has been started |

### Registering a Webhook

Register a webhook endpoint to receive notifications:

```bash
curl -X POST "https://api.ud-sandbox.com/partner/v3/account/webhooks" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-platform.com/webhooks/ud",
    "type": "OPERATION_FINISHED"
  }'
```

Register multiple webhooks if you want to listen for different event types.

### Webhook Payload

When an event occurs, the API sends a `POST` request to your registered URL with a JSON body containing:

| Field | Description |
|-------|-------------|
| `@type` | The webhook payload type identifier |
| `type` | The event type (e.g., `OPERATION_FINISHED`) |
| `data` | The full Operation object with current status and dependencies |

The request includes two headers for verification:

- `x-ud-timestamp` -- The Unix timestamp when the webhook was sent.
- `x-ud-signature` -- A Base64-encoded HMAC-SHA256 signature of the raw request body, using your API key as the secret.

### Verifying Webhook Signatures

Always verify the `x-ud-signature` header to confirm the webhook came from Unstoppable Domains. Compute the HMAC-SHA256 of the raw request body bytes using your API key as the secret, then Base64-encode the result. Compare it to the value in the `x-ud-signature` header.

Example in Node.js:

```javascript
const crypto = require("crypto");

function verifyWebhook(rawBody, signature, apiKey) {
  const expected = crypto
    .createHmac("sha256", apiKey)
    .update(rawBody)
    .digest("base64");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}
```

### Retry Behavior

If your endpoint does not respond with a `200` status code, the API retries with exponential backoff for up to 8 attempts:

| Retry | Delay |
|-------|-------|
| 1 | 1 minute |
| 2 | 2 minutes |
| 3 | 4 minutes |
| 4 | 8 minutes |
| 5 | 16 minutes |
| 6 | 32 minutes |
| 7 | 64 minutes |
| 8 | 120 minutes |

Your endpoint must respond with HTTP `200` to acknowledge receipt. Any other status code triggers a retry.

### Webhooks vs. Polling

Use webhooks in production for efficient, real-time notifications. Polling (repeatedly calling `GET /operations/{id}`) is acceptable during development and debugging, but is not recommended for production due to unnecessary API load and delayed responses.

## Error Handling

### Error Response Format

When a request fails, the API returns a JSON error response with a status code and descriptive message:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "The 'name' field is required.",
  "status": 400
}
```

### Common Status Codes

| Code | Meaning |
|------|---------|
| `400` | Validation error -- the request body or parameters are invalid |
| `401` | Authentication error -- the API key is missing or invalid |
| `403` | Permission error -- the API key does not have access to this resource |
| `404` | Not found -- the requested domain, contact, or operation does not exist |
| `409` | Conflict -- the action conflicts with the current state (e.g., the domain is already registered) |
| `500` | Internal server error -- retry the request after a short delay |

### Partial Failures

An Operation can have some dependencies that `COMPLETED` and others that `FAILED`. When an operation finishes, always check the status of each individual dependency rather than relying solely on the top-level operation status. This allows you to identify exactly which part of a multi-step operation failed and take appropriate corrective action.

For complete endpoint details, request schemas, and response examples, see the [API Reference](/apis/reseller/openapi).
