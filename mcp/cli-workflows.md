---
title: CLI Common Workflows | Unstoppable Domains Developer Portal
description: Step-by-step guides for common domain management tasks using the Unstoppable Domains CLI.
---

# Common Workflows

These workflows show how to accomplish common tasks with the CLI. Each one builds on the commands from the [Command Reference](cli-commands).

## Register a New Domain

Search for a domain, create a contact, add to cart, and purchase.

```bash
# 1. Search for available domains
ud search "mybusiness"

# 2. Create an ICANN contact (required for first registration)
ud domains contacts create --data '{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "phone": "+1.5551234567",
  "address1": "123 Main St",
  "city": "San Francisco",
  "state": "CA",
  "postalCode": "94102",
  "country": "US"
}'

# 3. Add the domain to your cart
ud cart add registration mybusiness.com

# 4. Review your cart
ud cart list

# 5. Complete the purchase
ud cart checkout
```

## Set Up DNS for a Website

Configure A, CNAME, and MX records for a domain.

```bash
# View existing records
ud domains dns records show mybrand.io

# Point the root domain to your server
ud domains dns records add mybrand.io --data '{"type":"A","hostName":"@","value":"192.0.2.1","ttl":3600}'

# Add a www CNAME
ud domains dns records add mybrand.io --data '{"type":"CNAME","hostName":"www","value":"mybrand.io","ttl":3600}'

# Add MX records for email (e.g., Google Workspace)
ud domains dns records add mybrand.io --data '{"type":"MX","hostName":"@","value":"aspmx.l.google.com","priority":1,"ttl":3600}'
```

{% admonition type="info" %}
DNS changes can take up to 48 hours to propagate. Use `ud domains get <domain>` to check for pending operations.
{% /admonition %}

## Bulk DNS Updates from a File

For multiple records, create a JSON file and import them at once.

```bash
# records.json
# [
#   {"type":"A","hostName":"@","value":"192.0.2.1","ttl":3600},
#   {"type":"CNAME","hostName":"www","value":"mybrand.io","ttl":3600},
#   {"type":"MX","hostName":"@","value":"aspmx.l.google.com","priority":1,"ttl":3600}
# ]

ud domains dns records add mybrand.io --file records.json
```

## List a Domain for Sale

Create a marketplace listing and manage offers.

```bash
# List your domain for sale
ud marketplace listings create premium.com

# Check for incoming offers
ud marketplace offers list

# Respond to an offer
ud marketplace offers respond
```

## Buy from the Marketplace

Find and purchase a listed domain.

```bash
# Search for the domain
ud search "premium.com"

# Add the marketplace listing to your cart
ud cart add listed premium.com

# Review the cart
ud cart list

# Complete the purchase
ud cart checkout
```

## Manage Expiring Domains

Find domains that are about to expire and renew them.

```bash
# Show domains expiring in the next 30 days
ud domains list --expiring-within 30

# Enable auto-renewal
ud domains auto-renewal update mybrand.io

# Or renew manually
ud cart add renewal mybrand.io
ud cart checkout
```

## Scripting with JSON Output

Use `--format json` and pipe to `jq` for automation.

```bash
# Get all domain names as a plain list
ud domains list --format json | jq -r '.[].name'

# Find domains with active offers
ud domains list --format json | jq '[.[] | select(.offersCount > 0)]'

# Export domain details to CSV
ud domains list --format csv > domains.csv

# Count domains by TLD
ud domains list --format json | jq 'group_by(.name | split(".") | last) | map({tld: .[0].name | split(".") | last, count: length})'
```

## Contact a Domain Seller

Reach out to the owner of a domain you're interested in.

```bash
# Open a conversation with the seller
ud marketplace leads open

# View your lead conversations
ud marketplace leads list

# Send and read messages
ud marketplace leads messages list
ud marketplace leads messages send
```

## Generate an AI Landing Page

Create, check, and manage AI-generated landing pages for your domains.

```bash
# Generate a landing page
ud domains hosting landers generate mybrand.com

# Check the generation status
ud domains hosting landers show mybrand.com

# Download the generated page
ud domains hosting landers download mybrand.com

# Remove the landing page
ud domains hosting landers remove mybrand.com
```

## Backorder an Expiring Domain

Browse expiring domains and set up automatic registration when they drop.

```bash
# Browse expiring domains
ud expireds list

# Filter by TLD and status
ud expireds list --tlds com,net --status AVAILABLE_BACKORDER

# Create a backorder
ud backorders create premium.com

# Check your backorders
ud backorders list

# Cancel a backorder
ud backorders cancel --backorder-id abc123
```

## Switch Between Environments

Test in sandbox before going to production.

```bash
# Create an account or sign in on sandbox
ud auth signup --env sandbox
# Or sign in to an existing account
ud auth login --env sandbox

# Run commands against sandbox
ud search "test.com" --env sandbox

# Or set sandbox as default
ud env set sandbox

# Switch back to production
ud env set production
```
