---
title: User API | Unstoppable Domains Developer Portal
description: The Unstoppable Domains User API lets you search, purchase, and manage domain names, configure DNS, and interact with the marketplace.
---

# User API

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

The User API supports two authentication methods:

- **OAuth 2.0 (Recommended)** — Browser-based authentication with granular scopes. Authenticate when prompted using your Unstoppable Domains account.
- **API Key** — For scripts and custom integrations. Generate a key from [Account Settings](https://unstoppabledomains.com/account/settings?tab=advanced).

Both methods use a Bearer token in the `Authorization` header. See the [MCP Server](mcp-server) page for detailed setup and scope reference.

## MCP Server

The [MCP Server](mcp-server) wraps the User API in the Model Context Protocol, letting you access the same functionality through natural conversation inside ChatGPT, Claude, and other AI tools.

See [MCP Server setup and usage](mcp-server) to get started.
