---
title: Connect Your AI Agent to Unstoppable Domains
description: The Unstoppable Domains MCP server enables you to search, purchase, and manage domain names through natural conversation with AI assistants.
---

# Connect Your AI Agent to Unstoppable Domains

The Unstoppable Domains MCP (Model Context Protocol) server enables you to search, purchase, and manage domain names through natural conversation inside ChatGPT, Claude, or using automated AI agents. This guide explains how to connect an AI agent to your Unstoppable Domains account and setup permissions for various interactions.

## What Can You Do?

With the MCP server, you can ask AI assistants to:

- **Search & Purchase Domains** - Find available domains, check pricing, and complete purchases
- **Manage Your Portfolio** - View your domains, filter by status, track expirations
- **Configure DNS** - Set up A records, CNAME, MX, TXT, and other DNS records
- **Sell on Marketplace** - List domains for sale, manage offers, negotiate with buyers
- **Communicate** - Contact domain sellers and manage conversations

## Getting Started

### Connecting via OAuth (Recommended)

Most MCP-compatible tools support OAuth 2.0 authentication. These tools follow the general approach below to add a custom MCP connection:

1. Add the Unstoppable Domains MCP server URL to your AI tool. See the table below for specific instructions for each tool.
   ```
   https://api.unstoppabledomains.com/mcp/v1
   ```
2. When prompted, authenticate via your browser
3. Authorize the requested permissions
4. Start a chat to manage your domains using natural language

{% admonition type="info" %}
**Manage your connections:** Go to [Account Settings](https://unstoppabledomains.com/manage?page=user-profile&overlay=settings) to view connected apps, their scopes, and disconnect if needed.
{% /admonition %}

### Instructions for Popular AI Tools

| Tool | Setup Method |
|------|-------------|
| Claude Code | `claude mcp add unstoppable-domains --transport http https://api.unstoppabledomains.com/mcp/v1/` |
| Claude Desktop (Paid) | Settings &rarr; Connectors &rarr; Add Connector &rarr; Enter MCP URL: `https://api.unstoppabledomains.com/api/mcp/v1` |
| Claude Desktop (Free) | Edit `~/Library/Application Support/Claude/claude_desktop_config.json` |
| ChatGPT Custom GPT | Import the API endpoint directly + OAuth 2.0 (OpenAPI spec) |
| Bots & Scripts | Use the API endpoint directly + API Key (OpenAPI spec) |
| Other MCP Tools | Follow tool-specific MCP server configuration |

## Authentication Options

### OAuth 2.0 (Recommended)

OAuth provides scoped access through browser-based authentication:

- **Easy setup** - Just authenticate when prompted using your Unstoppable Domains account
- **Granular permissions** - Only grant access to what you need
- **Revocable** - Disconnect apps anytime from [Account Settings](https://unstoppabledomains.com/manage?page=user-profile&overlay=settings)

**Available scopes:**

| Scope | Access |
|-------|--------|
| `domains:search` | Search domains, check availability |
| `portfolio:read` | View your domains, DNS records, offers |
| `portfolio:write` | Manage DNS, create listings, send messages |
| `cart:read` | View cart and payment methods |
| `cart:write` | Add/remove cart items |
| `checkout` | Complete purchases |

### API Key (Advanced)

For manual configuration or custom integrations:

1. Go to [Account Settings](https://unstoppabledomains.com/manage?page=user-profile&overlay=settings)
2. Scroll to bottom and click **Advanced**
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

{% admonition type="info" %}
API keys grant full access to all tools. Use OAuth for scoped access.
{% /admonition %}

## API Reference

| Item | Value |
|------|-------|
| Endpoint | `https://api.unstoppabledomains.com/mcp/v1/` |
| OpenAPI Spec | `https://api.unstoppabledomains.com/mcp/v1/openapi.json` |
| Authentication | `Authorization: Bearer <token>` |
| Protocol | MCP (Model Context Protocol) over HTTP |

For the full interactive API reference, see the [MCP API Reference](/apis/mcp/openapi).
