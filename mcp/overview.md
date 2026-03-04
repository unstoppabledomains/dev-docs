---
title: User API Quick Start | Unstoppable Domains Developer Portal
description: The Unstoppable Domains User API lets you search, purchase, and manage domain names, configure DNS, and interact with the marketplace.
---

# User API Quick Start

The Unstoppable Domains User API provides programmatic access to manage domain names, DNS, and the marketplace. You can integrate it directly via REST or use it through AI assistants via the [MCP Server](mcp-server).

## What Can You Do?

The User API supports the full domain lifecycle:

- **Search & Purchase Domains** — Find available domains, check pricing, and complete purchases
- **Manage Your Portfolio** — View your domains, filter by status, track expirations
- **Configure DNS** — Set up A, AAAA, CNAME, MX, TXT, NS, SRV, and CAA records
- **Sell on Marketplace** — List domains for sale, manage offers, negotiate with buyers
- **Communicate** — Contact domain sellers and manage conversations

For a full list of operations, see the [API Reference](/apis/mcp/openapi).

## Authentication

Authenticate with an API key in the `Authorization` header:

1. Go to [Account Settings](https://unstoppabledomains.com/account/settings?tab=advanced)
2. Go to the "Advanced" tab
3. Find the **MCP API Key** section
4. Generate a key (format: `ud_mcp_*`)
5. Copy your key (available anytime from this page)
6. Use the key in the Authorization header:

```
Authorization: Bearer ud_mcp_your_key_here
```

{% admonition type="warning" %}
**Security tip:** Store your API key in an environment variable to avoid exposing it in shell history or process listings:

```bash
export UD_MCP_API_KEY="ud_mcp_your_key_here"
# Then reference $UD_MCP_API_KEY in your scripts or configuration
```
{% /admonition %}

## MCP Server

The [MCP Server](mcp-server) wraps the User API in the Model Context Protocol, letting you access the same functionality through natural conversation inside ChatGPT, Claude, and other AI tools.

See [MCP Server setup and usage](mcp-server) to get started.

## CLI

The [CLI](cli) provides the same User API capabilities from your terminal. Search, register, manage DNS, and interact with the marketplace using standard shell commands.

See [CLI setup and usage](cli) to get started.
