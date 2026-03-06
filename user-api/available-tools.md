---
title: MCP Available Tools | Unstoppable Domains Developer Portal
description: Detailed reference for all tools available in the Unstoppable Domains MCP server.
---

# Available Tools

The following section is a detailed description of all the tools available in the Unstoppable Domains MCP server. While this documentation is provided for your information, the LLM will automatically choose the specific tools required to complete the tasks from your conversation.

## Domain Search

### ud_domains_search

Search for domain availability and pricing across TLDs.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string or string[] | Yes | Domain name(s) to search. Can be full domain ("example.com") or search term ("mybusiness"). Up to 10 queries. |
| `tlds` | string[] | No | TLDs to search (e.g., ["com", "org", "io"]). Max 5. Use `ud_tld_list` to verify support. |
| `limit` | number | No | Results to return (1-100, default: 20) |
| `offset` | number | No | Results to skip for pagination (default: 0) |

**Example prompts:**

- "Search for available domains with 'startup' in the name"
- "Check if example.com is available"
- "Find .io domains containing 'dev'"

{% admonition type="info" %}
Not all ICANN TLDs are supported. Use `ud_tld_list` first to verify. Prices are returned in cents (USD).
{% /admonition %}

### ud_tld_list

List all available ICANN TLDs supported by the registrar.

**Parameters:** None

**Example prompts:**

- "What TLDs can I register?"
- "Show me all available domain extensions"
- "Is .ai supported?"

## Portfolio Management

### ud_portfolio_list

List domains in your portfolio with filtering and sorting.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | number | No | Page number, 1-indexed (default: 1) |
| `pageSize` | number | No | Domains per page (1-100, default: 50) |
| `searchTerm` | string | No | Filter by domain name |
| `status` | string | No | "all", "for-sale", or "unlisted" (default: "all") |
| `registryType` | string | No | "dns" (ICANN) or "web3" (default: "dns") |
| `expiringWithinDays` | number | No | Filter domains expiring within N days (1-365) |
| `expired` | boolean | No | Filter for expired domains |
| `minLength` / `maxLength` | number | No | Filter by domain label length |
| `autoRenewal` | string | No | "true" or "false" |
| `tagFilters` | string[] | No | Filter by tags (e.g., ["personal", "business"]) |
| `orderBy` | string | No | Sort by: "name", "length", "purchasedAt", "expiresAt", "listingPrice", "offers", "leads", "watchlistCount" |
| `orderDirection` | string | No | "asc" or "desc" (default: "asc") |

**Example prompts:**

- "Show me all my domains"
- "List domains expiring in the next 30 days"
- "Show domains I have listed for sale, sorted by price"
- "Find my 4-letter domains"

## ICANN Contacts

### ud_contacts_list

List ICANN contacts for domain registration.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `includeDisabled` | boolean | No | Include disabled contacts (default: false) |

**Example prompts:**

- "Show my ICANN contacts"
- "List all registration contacts including disabled ones"

### ud_contact_create

Create a new ICANN contact for DNS domain registration.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `firstName` | string | Yes | Contact first name |
| `lastName` | string | Yes | Contact last name |
| `email` | string | Yes | Contact email address |
| `phone` | object | Yes | `{ dialingPrefix: "+1", number: "5551234567" }` |
| `street` | string | Yes | Street address |
| `city` | string | Yes | City |
| `stateProvince` | string | Yes | State/province code |
| `postalCode` | string | Yes | Postal/ZIP code |
| `countryCode` | string | Yes | Two-letter ISO country code (e.g., "US") |
| `organization` | string | No | Company name |

**Example prompts:**

- "Create an ICANN contact for John Smith at 123 Main St, New York, NY 10001"
- "Add a business contact for Acme Corp"

{% admonition type="info" %}
Required before purchasing .com, .org, .net, and other ICANN domains.
{% /admonition %}

## Cart Management

### ud_cart_get

Get shopping cart contents with pricing breakdown.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `discountCode` | string | No | Promo code to apply |

**Example prompts:**

- "Show my cart"
- "What's in my shopping cart?"
- "Apply promo code SAVE20 to my cart"

### ud_cart_add_domain

Add primary (unregistered) domains to cart.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domains` | array | Yes | Array of domain objects |
| `domains[].name` | string | Yes | Full domain name (e.g., "example.com") |
| `domains[].quantity` | number | No | Registration years (1-10, default: 1) |

**Example prompts:**

- "Add example.com to my cart"
- "Add mybrand.io for 2 years"
- "Add startup.com and startup.io to my cart"

### ud_cart_add_domain_listed

Add marketplace-listed domains to cart (buy-now or lease-to-own).

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domains` | array | Yes | Array of domain objects (max 50) |
| `domains[].name` | string | Yes | Listed domain name |
| `domains[].leaseToOwnOptions` | object | No | Lease-to-own configuration |
| `domains[].leaseToOwnOptions.type` | string | No | "equal_installments" or "down_payment_plus_equal_installments" |
| `domains[].leaseToOwnOptions.termLength` | number | No | Payment term (3-24 months) |
| `domains[].leaseToOwnOptions.downPaymentPercentage` | number | No | Down payment (10-90%, required for down_payment type) |

**Example prompts:**

- "Add premium.com to my cart"
- "Add premium.com with lease-to-own over 12 months"
- "Add premium.com with 20% down payment and 12 monthly installments"

### ud_cart_add_domain_renewal

Add domain renewals to cart.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domains` | array | Yes | Array of domain objects (max 50) |
| `domains[].name` | string | Yes | Domain to renew (must own) |
| `domains[].quantity` | number | No | Renewal years (1-10, default: 1) |

**Example prompts:**

- "Renew example.com for 1 year"
- "Add 3-year renewal for mybrand.io"

### ud_cart_remove

Remove items from cart.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `productIds` | string[] | Yes | Product IDs to remove (from cart response) |

**Example prompts:**

- "Remove example.com from my cart"
- "Clear the domain I just added"

## Payment & Checkout

### ud_cart_get_payment_methods

Get saved payment methods and account balance.

**Parameters:** None

**Example prompts:**

- "Show my payment methods"
- "What's my account balance?"
- "What cards do I have on file?"

### ud_payment_method_add_url

Get a URL to add a new payment method (for example, when you don't have any cards on file).

**Parameters:** None

**Example prompts:**

- "Give me a link to add a new card"
- "I don't have any payment methods, how do I add one?"
- "Generate a URL so I can add a payment method"

### ud_cart_checkout

Complete checkout using saved payment method or account balance.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `paymentMethodId` | string | No | Stripe payment method ID |
| `useAccountBalance` | boolean | No | Use account balance (default: true) |
| `discountCode` | string | No | Promo code |
| `contactId` | string | No | ICANN contact ID for DNS domains |

**Example prompts:**

- "Complete my purchase using my account balance"
- "Checkout using my Visa ending in 4242"
- "Complete checkout with contact ID abc123"

{% admonition type="info" %}
For DNS domains (.com, .org, etc.), you must have an ICANN contact. Use `ud_contacts_list` to find your contact ID.
{% /admonition %}

### ud_cart_get_url

Generate a checkout URL for browser-based purchase.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `discountCode` | string | No | Promo code for checkout |

**Example prompts:**

- "Give me a checkout link"
- "Generate a URL to complete my purchase"

## Marketplace Listings

### ud_listing_create

Create marketplace listings to sell domains.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domains` | array | Yes | Array of listing objects (max 50) |
| `domains[].domainName` | string | Yes | Domain to list |
| `domains[].priceInCents` | number | No | Buy-now price in cents (0 for offers-only) |
| `domains[].expiresAt` | string | No | Listing expiration (ISO 8601) |
| `domains[].isEmailAliasUsed` | boolean | No | Enable email contact feature |
| `domains[].listingSettings` | object | No | Additional settings |
| `domains[].listingSettings.isOfferFeatureEnabled` | boolean | No | Accept offers |
| `domains[].listingSettings.minOfferAmountInCents` | number | No | Minimum offer amount |
| `domains[].leaseToOwnOptions` | object | No | Lease-to-own configuration |

**Example prompts:**

- "List mydomain.com for $5,000"
- "List mydomain.com for offers only with $1,000 minimum"
- "List mydomain.com for $10,000 with lease-to-own option"

{% admonition type="info" %}
Prices are in cents (e.g., $5,000 = 500000 cents). Set `priceInCents` to 0 for offers-only listings.
{% /admonition %}

### ud_listing_update

Update existing marketplace listings.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `listings` | array | Yes | Array of update objects (max 50) |
| `listings[].id` | number | Yes | Listing ID |
| `listings[].priceInCents` | number | No | New price in cents |
| `listings[].expiresAt` | string | No | New expiration date |
| `listings[].listingSettings` | object | No | Updated settings |

**Example prompts:**

- "Change mydomain.com listing price to $7,500"
- "Enable offers on my listing with ID 12345"

### ud_listing_cancel

Cancel marketplace listings.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `listingIds` | number[] | Yes | Listing IDs to cancel (max 50) |

**Example prompts:**

- "Cancel my listing for mydomain.com"
- "Remove mydomain.com from the marketplace"

### ud_offers_list

List incoming offers on your domains.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domainName` | string | No | Filter by domain |
| `group` | string | No | "active" or "sold" |
| `page` | number | No | Page number |

**Example prompts:**

- "Show me all incoming offers"
- "What offers do I have on mydomain.com?"
- "Show my accepted offers"

### ud_offer_respond

Accept or reject offers on your domains.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `offers` | array | Yes | Array of response objects (max 50) |
| `offers[].id` | number | Yes | Offer ID |
| `offers[].action` | string | Yes | "accept" or "reject" |

**Example prompts:**

- "Accept offer 12345"
- "Reject the $500 offer on mydomain.com"

## Domain Conversations

### ud_leads_list

List domain conversation leads (buyer-seller messages).

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | No | Filter by domain name |
| `skipEmpty` | boolean | No | Skip conversations with no messages (default: false) |
| `skip` | number | No | Pagination offset (default: 0) |
| `take` | number | No | Conversations to return (1-100, default: 20) |

**Example prompts:**

- "Show my domain conversations"
- "List leads for mydomain.com"

### ud_domain_contact_seller

Contact a domain seller to start a conversation.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain to inquire about |
| `buyerId` | string | No | Encoded buyer ID (for offer responses) |

**Example prompts:**

- "Contact the seller of premium.com"
- "Start a conversation about example.io"

### ud_lead_messages_list

Get messages in a domain conversation.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversationId` | number | Yes | Conversation ID |
| `cursor` | string | No | Pagination cursor for older messages |

**Example prompts:**

- "Show messages in conversation 12345"
- "What did the seller say?"

### ud_lead_message_send

Send a message in a domain conversation.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversationId` | number | Yes | Conversation ID |
| `content` | string | Yes | Message text (1-1000 characters) |

**Example prompts:**

- "Send 'I'm interested in your domain' to conversation 12345"
- "Reply asking about their minimum price"

## DNS Records

### ud_dns_records_list

List DNS records for a domain.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `type` | string | No | Filter by record type (A, AAAA, CNAME, MX, TXT, NS) |
| `subName` | string | No | Filter by subdomain |
| `cursor` | string | No | Pagination cursor |

**Example prompts:**

- "Show DNS records for mybrand.io"
- "List all MX records for example.com"
- "What A records does mydomain.com have?"

### ud_dns_record_add

Add a DNS record to a domain.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `type` | string | Yes | Record type: A, AAAA, CNAME, MX, TXT, NS, SRV, CAA |
| `values` | string[] | Yes | Record values |
| `subName` | string | No | Subdomain (default: "@" for root) |
| `ttl` | number | No | Time-to-live in seconds (60-86400, default: 3600) |
| `upsertMode` | string | No | "append", "replace", or "disallowed" |

**Example prompts:**

- "Add an A record for mybrand.io pointing to 192.0.2.1"
- "Add a CNAME for www.mybrand.io pointing to mybrand.io"
- "Add MX records for Google Workspace"
- "Add a TXT record for domain verification"

{% admonition type="info" %}
Use `subName: "@"` for root domain records. Use `upsertMode: "replace"` to overwrite existing records of the same type/subname.
{% /admonition %}

### ud_dns_record_update

Update an existing DNS record.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `recordId` | string | Yes | Record ID (from `ud_dns_records_list`) |
| `values` | string[] | Yes | New record values |
| `ttl` | number | No | New TTL (60-86400, default: 3600) |

**Example prompts:**

- "Update my A record to point to 192.0.2.2"
- "Change the TTL on record abc123 to 300 seconds"

### ud_dns_record_remove

Remove a specific DNS record.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `recordId` | string | Yes | Record ID to remove |

**Example prompts:**

- "Delete the old A record"
- "Remove DNS record abc123"

### ud_dns_records_remove_all

Remove ALL user-created DNS records from a domain.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `confirm` | boolean | Yes | Must be `true` to confirm deletion |

**Example prompts:**

- "Remove all DNS records from mybrand.io"
- "Clear all my custom DNS settings"

{% admonition type="warning" %}
This is destructive. The `confirm: true` parameter is required.
{% /admonition %}

## DNS Nameservers

### ud_dns_nameservers_list

List nameservers for a domain.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `includeDnssec` | boolean | No | Include DNSSEC information |

**Example prompts:**

- "What nameservers is mybrand.io using?"
- "Show nameserver configuration with DNSSEC status"

### ud_dns_nameservers_set_custom

Set custom (external) nameservers.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `nameservers` | string[] | Yes | Nameserver hostnames (2-12 required) |
| `dnssec` | object | No | DNSSEC DS records |

**Example prompts:**

- "Point mybrand.io to Cloudflare nameservers"
- "Set custom nameservers: ns1.example.com and ns2.example.com"

{% admonition type="info" %}
Requires 2-12 nameserver hostnames. DNS record management through this tool will be disabled when using custom nameservers.
{% /admonition %}

### ud_dns_nameservers_set_default

Reset to Unstoppable Domains default nameservers.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |

**Example prompts:**

- "Switch mybrand.io back to default nameservers"
- "Reset nameservers to UD defaults"

{% admonition type="info" %}
Re-enables DNS record management through these tools.
{% /admonition %}

## DNS Hosting

### ud_dns_hosting_list

List hosting/forwarding configurations.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `cursor` | string | No | Pagination cursor |

**Example prompts:**

- "Show hosting configuration for mybrand.io"
- "What redirects are set up for my domain?"

### ud_dns_hosting_add

Add hosting configuration (for-sale page, 301/302 redirect).

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `type` | string | Yes | "LISTING_PAGE", "REDIRECT_301", or "REDIRECT_302" |
| `targetUrl` | string | Conditional | Required for redirects |
| `subName` | string | No | Subdomain to configure |
| `forceCompatibility` | boolean | No | Auto-configure nameservers if needed |

**Example prompts:**

- "Set up a for-sale landing page for mybrand.io"
- "Redirect mybrand.io to https://mynewsite.com with a 301"
- "Add a 302 redirect from old.mybrand.io to mybrand.io/new"

### ud_dns_hosting_remove

Remove hosting/forwarding configuration.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `subName` | string | No | Subdomain to remove config from |
| `deleteAll` | boolean | No | Remove ALL hosting configs |
| `confirmDeleteAll` | boolean | Conditional | Required if `deleteAll` is true |

**Example prompts:**

- "Remove the redirect from mybrand.io"
- "Delete all hosting configurations"

## Domain Operations

### ud_domain_pending_operations

Check status of pending DNS operations.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | Domain name |
| `includeCompleted` | boolean | No | Include operations completed in last 24 hours |

**Example prompts:**

- "Are there any pending DNS changes for mybrand.io?"
- "Check the status of my nameserver update"

### ud_domain_auto_renewal_update

Enable or disable auto-renewal for ICANN domains.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string | Yes | "enable" or "disable" |
| `domains` | array | Yes | Array of domain objects (max 50) |
| `domains[].name` | string | Yes | Domain name |
| `paymentMethodId` | string | No | Payment method ID (uses default card if omitted) |

**Example prompts:**

- "Enable auto-renewal for mybrand.io"
- "Turn off auto-renewal for example.com"
- "Enable auto-renewal for all my domains using my Visa"

{% admonition type="info" %}
When enabling, a payment method is used. If `paymentMethodId` is omitted, your default card will be used. Use `ud_cart_get_payment_methods` to see available methods.
{% /admonition %}
