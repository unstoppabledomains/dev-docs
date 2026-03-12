---
title: CLI Command Reference | Unstoppable Domains Developer Portal
description: Complete reference for all Unstoppable Domains CLI commands, including syntax, flags, and examples.
---

# Command Reference

This page documents every command available in the Unstoppable Domains CLI. For installation and setup, see the [CLI Quick Start](cli).

## Search & Discovery

### ud search

Search for domain availability and pricing.

```bash
ud search <query>
```

**Example:**

```bash
ud search "mybusiness"
ud search "coffee.com"
```

### ud tlds

List all available TLDs supported by the registrar.

```bash
ud tlds
```

## Domain Management

### ud domains list

List domains in your portfolio.

```bash
ud domains list
```

**Key flags:**

| Flag | Description |
|------|-------------|
| `--status <status>` | Filter by `all`, `for-sale`, or `unlisted` |
| `--expiring-within <days>` | Show domains expiring within N days |
| `--tag <tag>` | Filter by tag |
| `--order-by <field>` | Sort by `name`, `length`, `purchasedAt`, `expiresAt`, `listingPrice`, `offers`, `leads`, `watchlistCount` |
| `--order-direction <dir>` | `asc` or `desc` |

**Example:**

```bash
ud domains list --status for-sale --order-by listingPrice
ud domains list --expiring-within 30
ud domains list --fields name,expiresAt,offersCount
```

### ud domains get

Get detailed information about one or more domains.

```bash
ud domains get <domains...>
```

**Example:**

```bash
ud domains get example.com
ud domains get example.com mybrand.io
```

### ud domains push

Push a domain to another user.

```bash
ud domains push <domains...>
```

### ud domains auto-renewal update

Toggle auto-renewal for domains.

```bash
ud domains auto-renewal update <domains...>
```

### ud domains tags

Manage domain tags.

```bash
ud domains tags add <domains...> --tag <tag>
ud domains tags remove <domains...> --tag <tag>
```

### ud domains flags update

Update domain flags.

```bash
ud domains flags update <domains...>
```

## DNS

### ud domains dns records show

Display DNS records for a domain.

```bash
ud domains dns records show <domain>
```

**Example:**

```bash
ud domains dns records show example.com
```

### ud domains dns records add

Add a DNS record.

```bash
ud domains dns records add <domain>
```

Pass record data inline with `--data` or from a file with `--file`:

```bash
ud domains dns records add example.com --data '{"type":"A","hostName":"@","value":"192.0.2.1","ttl":3600}'
ud domains dns records add example.com --file records.json
```

### ud domains dns records update

Update an existing DNS record.

```bash
ud domains dns records update <domain>
```

### ud domains dns records remove

Remove a DNS record.

```bash
ud domains dns records remove <domain>
```

### ud domains dns records remove-all

Remove ALL user-created DNS records from one or more domains.

```bash
ud domains dns records remove-all <domains...>
```

{% admonition type="warning" %}
This is destructive and cannot be undone. All user-created DNS records will be permanently deleted.
{% /admonition %}

### ud domains dns nameservers show

Display current nameservers.

```bash
ud domains dns nameservers show <domain>
```

### ud domains dns nameservers set-custom

Set custom nameservers.

```bash
ud domains dns nameservers set-custom <domain>
```

### ud domains dns nameservers set-default

Reset to UD default nameservers.

```bash
ud domains dns nameservers set-default <domain>
```

{% admonition type="warning" %}
Using custom nameservers disables DNS record management through the CLI and API. Set default nameservers to re-enable it.
{% /admonition %}

## Hosting

### ud domains hosting redirects show

Show redirect configurations for a domain.

```bash
ud domains hosting redirects show <domain>
```

### ud domains hosting redirects add

Add a redirect configuration.

```bash
ud domains hosting redirects add
```

### ud domains hosting redirects remove

Remove a redirect configuration.

```bash
ud domains hosting redirects remove
```

### ud domains hosting landers generate

Generate an AI-powered landing page for one or more domains.

```bash
ud domains hosting landers generate <domains...>
```

### ud domains hosting landers show

Show lander generation status for one or more domains.

```bash
ud domains hosting landers show <domains...>
```

### ud domains hosting landers remove

Remove an AI-generated landing page from one or more domains.

```bash
ud domains hosting landers remove <domains...>
```

## Cart & Checkout

### ud cart list

View items in your shopping cart.

```bash
ud cart list
```

### ud cart add

Add domains to your cart. Without a subcommand, `ud cart add` auto-detects the source type:

```bash
ud cart add <domains...>                # Smart add — auto-detects source
ud cart add registration <domains...>   # New domain registration
ud cart add renewal <domains...>        # Domain renewal
ud cart add listed <domains...>         # Marketplace listing
ud cart add afternic <domains...>       # Afternic listing
ud cart add sedo <domains...>           # Sedo listing
```

**Example:**

```bash
ud cart add mybusiness.com mybusiness.io  # Auto-detect
ud cart add registration mybusiness.com   # Explicit type
ud cart add listed premium.io
```

### ud cart url

Get a checkout URL to complete the purchase in a browser.

```bash
ud cart url
```

### ud cart remove

Remove items from the cart.

```bash
ud cart remove <domains...>
```

### ud cart checkout

Complete the purchase.

```bash
ud cart checkout
```

### ud cart payment-methods

Manage payment methods.

```bash
ud cart payment-methods
```

## Marketplace

### ud marketplace listings create

List domains for sale on the marketplace.

```bash
ud marketplace listings create <domains...>
```

### ud marketplace listings update

Update existing marketplace listings.

```bash
ud marketplace listings update <domains...>
```

### ud marketplace listings cancel

Remove domains from the marketplace.

```bash
ud marketplace listings cancel <domains...>
```

### ud marketplace offers list

View incoming offers on your domains.

```bash
ud marketplace offers list
```

### ud marketplace offers respond

Accept or decline an offer.

```bash
ud marketplace offers respond
```

### ud marketplace leads list

View conversation leads for your domains.

```bash
ud marketplace leads list
```

### ud marketplace leads open

Open a conversation lead.

```bash
ud marketplace leads open
```

### ud marketplace leads messages list

List messages in a lead conversation.

```bash
ud marketplace leads messages list
```

### ud marketplace leads messages send

Send a message in a lead conversation.

```bash
ud marketplace leads messages send
```

## Contacts

### ud domains contacts create

Create an ICANN contact for domain registration.

```bash
ud domains contacts create --data '{"firstName":"Jane","lastName":"Doe","email":"jane@example.com",...}'
```

### ud domains contacts list

List your saved ICANN contacts.

```bash
ud domains contacts list
```

## Configuration

### ud config set

Save default options for a command.

```bash
ud config set "<command>" <key> <value>
```

**Example:**

```bash
ud config set "domains list" fields name,expiresAt
ud config set "domains list" format json
```

### ud config get

View saved defaults.

```bash
ud config get [command]
```

### ud config reset

Remove saved defaults.

```bash
ud config reset <command> [key]
```

### ud env set

Switch the active environment.

```bash
ud env set <environment>
```

**Example:**

```bash
ud env set sandbox
ud env set production
```

### ud env show

Display the current environment.

```bash
ud env show
```

## Authentication

### ud auth signup

Create a new Unstoppable Domains account. Prompts for email and password, sends a verification code, and signs you in automatically.

```bash
ud auth signup
```

Requires an interactive terminal. Password must be at least 8 characters with uppercase, lowercase, number, and special character.

### ud auth login

Sign in to an existing Unstoppable Domains account.

```bash
ud auth login            # OAuth (opens browser)
ud auth login --key <key>  # API key
```

### ud auth status

Check current authentication status.

```bash
ud auth status
```

### ud auth logout

Clear stored credentials.

```bash
ud auth logout
```

## Utilities

### ud update

Update the CLI to the latest version.

```bash
ud update
```

### ud update check

Check for available CLI updates without installing.

```bash
ud update check
```

### ud completion

Generate shell completion scripts.

```bash
ud completion
```

### ud install --skills

Install agent skills for Claude Code, Cursor, or GitHub Copilot.

```bash
ud install --skills
```

{% admonition type="info" %}
You can also install skills via npx:

```bash
npx skills add unstoppabledomains/ud-cli
```
{% /admonition %}

## Passing Complex Data

For commands that require structured input, use `--data` for inline JSON or `--file` to read from a file:

```bash
# Inline JSON
ud domains contacts create --data '{"firstName":"Jane","lastName":"Doe","email":"jane@example.com"}'

# From a file
ud domains dns records add example.com --file records.json
```
