---
title: MCP Troubleshooting | Unstoppable Domains Developer Portal
description: Troubleshooting guide for the Unstoppable Domains MCP server.
---

# Troubleshooting

## Tools not appearing

**Claude Code:**

```bash
claude mcp list  # Check if server is configured
```

**Claude Desktop:**

- Restart the app completely
- Verify config file: `cat ~/Library/Application\ Support/Claude/claude_desktop_config.json`

## Authentication errors

- Verify your API key starts with `ud_mcp_`
- For OAuth, try disconnecting and reconnecting in [Account Settings](https://unstoppabledomains.com/manage?page=user-profile&overlay=settings)
- Check that your token hasn't expired

## "Domain not found" errors

- Verify you own the domain with `ud_portfolio_list`
- Check the domain name spelling
- Ensure you're using the full domain name (e.g., "example.com" not just "example")

## DNS changes not appearing

- DNS propagation can take up to 48 hours
- Use `ud_domain_pending_operations` to check operation status
- Verify you're using UD default nameservers (custom nameservers disable DNS management)
