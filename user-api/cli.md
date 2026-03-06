---
title: CLI | Unstoppable Domains Developer Portal
description: Install and use the Unstoppable Domains CLI to search, register, and manage domains from your terminal.
---

# CLI

The Unstoppable Domains CLI (`ud`) gives you command-line access to the [User API](/user-api/overview). Search for domains, manage DNS, interact with the marketplace, and complete purchases — all from your terminal.

## Installation

### macOS / Linux

```bash
curl -fsSL https://raw.githubusercontent.com/unstoppabledomains/ud-cli/main/install.sh | sh
```

### npm

```bash
npm install -g @unstoppabledomains/ud-cli
```

### Build from Source

```bash
git clone https://github.com/unstoppabledomains/ud-cli.git
cd ud-cli
npm install
npm run build
npm install -g .
```

After installation, verify it works:

```bash
ud --help
```

## Authentication

### Signup (New Account)

```bash
ud auth signup
```

Creates a new account directly from the terminal. Prompts for email and password, sends a verification code to your email, and signs you in — no browser needed.

### OAuth (Existing Account)

```bash
ud auth login
```

Opens your browser for authorization using OAuth 2.0 with PKCE. Use this to sign in to an existing account. Tokens refresh automatically.

### API Key

```bash
ud auth login --key ud_mcp_<your-key>
```

Generate an API key from [Account Settings](https://unstoppabledomains.com/account/settings?tab=advanced) under the "Advanced" tab.

### Managing Credentials

```bash
ud auth status   # Check authentication status
ud auth logout   # Clear stored credentials
```

{% admonition type="info" %}
Credentials are stored in your system keychain (macOS Keychain, Windows Credential Vault, or Linux Secret Service). If the keychain is unavailable, credentials fall back to `~/.ud-cli/credentials-{env}.json` with restricted permissions.
{% /admonition %}

## Quick Example

```bash
# Search for available domains
ud search "mybusiness"

# List your domains
ud domains list

# Check DNS records
ud domains dns records show example.com

# Add a domain to your cart and checkout
ud cart add registration example.com
ud cart checkout
```

## Global Options

Every command accepts these flags:

| Flag | Description |
|------|-------------|
| `--format <format>` | Output as `table` (default), `json`, or `csv` |
| `--fields [columns]` | Display specific columns (comma-separated) |
| `--env <environment>` | Override active environment (`production` or `sandbox`) |
| `--quiet` | Suppress output except errors |
| `--verbose` | Show detailed output |

## Output Customization

### Choosing a Format

```bash
# Default table output
ud domains list

# JSON for scripting
ud domains list --format json

# CSV for spreadsheets
ud domains list --format csv
```

### Selecting Fields

Show only the columns you need:

```bash
ud domains list --fields name,expiresAt,offersCount
```

Use dot notation for nested properties:

```bash
ud domains list --fields name,listing.price,autoRenewal.status
```

Run `--fields` with no value to see all available columns for a command:

```bash
ud domains list --fields
```

### Piping JSON

Combine with tools like `jq` for scripting workflows:

```bash
ud domains list --format json | jq '.[].name'
```

## Saving Defaults

Save frequently used options so you don't have to type them every time:

```bash
# Save default fields for 'domains list'
ud config set "domains list" fields name,expiresAt,offersCount

# Save JSON as default format
ud config set "domains list" format json

# View saved defaults
ud config get "domains list"

# Reset a saved default
ud config reset "domains list" fields
```

{% admonition type="info" %}
CLI flags always override saved defaults.
{% /admonition %}

## Environments

Two environments are available:

| Environment | API Base URL |
|-------------|-------------|
| `production` (default) | `https://api.unstoppabledomains.com` |
| `sandbox` | `https://api.ud-sandbox.com` |

Switch environments:

```bash
# Set the active environment
ud env set sandbox

# Check current environment
ud env show

# Override per-command
ud search "test" --env sandbox
```

Credentials are stored separately per environment, so you can authenticate in both simultaneously.

## Auto-Updates

The CLI checks for updates every 24 hours. You can also check manually:

```bash
ud update check
```

## Shell Completion

Generate shell completions for your shell:

```bash
ud completion
```

## What's Next

- [Command Reference](cli-commands) — Full list of all commands, flags, and examples
- [Common Workflows](cli-workflows) — Step-by-step guides for common tasks
- [API Reference](/apis/user-api/openapi) — The underlying REST API
