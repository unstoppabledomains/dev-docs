# Restructure MCP Server into User API — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restructure the "MCP Server" documentation section into a "User API" section where the MCP server is a sub-page, making clear that the User API is the primary concept and the MCP server is a feature built on top of it.

**Architecture:** Rename the sidebar group, rewrite the overview page to describe the User API at a high level, create a new MCP Server page that receives the current MCP-specific content (setup instructions, auth, quick start), and update the top-level APIs overview to link to the new section.

**Tech Stack:** Redocly docs platform, Markdown, YAML sidebar config

---

### Task 1: Create new MCP Server page

This new page receives the MCP-specific content currently in `mcp/overview.md`: intro, quick start, setup instructions, authentication, and API reference table.

**Files:**
- Create: `mcp/mcp-server.md`

**Step 1: Create `mcp/mcp-server.md`**

Write this exact content:

```markdown
---
title: MCP Server | Unstoppable Domains Developer Portal
description: The Unstoppable Domains MCP server enables you to search, purchase, and manage domain names through natural conversation with AI assistants.
---

# MCP Server

The Unstoppable Domains MCP (Model Context Protocol) server lets you access the [User API](/mcp/overview) through natural conversation inside ChatGPT, Claude, or using automated AI agents.

## Quick Start

Point your AI tool at the Unstoppable Domains MCP server URL:

```
https://api.unstoppabledomains.com/mcp/v1
```

When prompted, authenticate with your Unstoppable Domains account via OAuth. That's it — start chatting to manage your domains. See the setup instructions below for your specific tool.

## Setup Instructions

### ChatGPT

#### Option 1: Use our Custom GPT (Easiest)

The fastest way to get started with ChatGPT is our pre-built **[Unstoppable Domains GPT](https://chatgpt.com/g/g-698a7d3768448191a7177d7f3f22a130-unstoppable-domains)**. Just open the link and start chatting.

{% admonition type="info" %}
The custom GPT supports core domain management tasks like searching, purchasing, and DNS configuration. For the full set of capabilities — including responding to offers and managing marketplace conversations — use the MCP server connection described below.
{% /admonition %}

#### Option 2: Add the MCP Server to ChatGPT

Connecting the MCP server directly gives you access to all available tools. Requires ChatGPT Plus, Pro, Team, or Enterprise. These steps must be completed in the [ChatGPT web app](https://chatgpt.com).

**1. Enable Developer Mode**

Open [ChatGPT's connector settings](https://chatgpt.com/#settings/Connectors/Advanced) and enable **"Developer Mode (beta)"** under Advanced Settings.

**2. Create a Connector**

Navigate back to the main Connectors page and click **"Create"**. Paste the MCP server URL:

```
https://api.unstoppabledomains.com/mcp/v1
```

Leave authentication as the default setting and click **Save**.

**3. Verify Installation**

Start a new conversation and ask ChatGPT to search for a domain. When prompted, authorize the connection with your Unstoppable Domains account.

### Claude (Desktop & Web)

Claude supports MCP connectors on both the desktop app and [claude.ai](https://claude.ai). The setup is the same for both.

#### For Paid Plans (Pro, Max, Team, Enterprise)

1. Open **Settings** (click your name in the bottom-left corner)
2. Select **Connectors**
3. Click **"Add custom connector"** at the bottom of the list
4. Enter the MCP server URL:
   ```
   https://api.unstoppabledomains.com/mcp/v1
   ```
5. Click **"Add"**
6. When prompted, sign in with your Unstoppable Domains account to authorize access

To use the connector in a conversation, click the **"+"** button in the compose area, select **"Connectors"**, and toggle on Unstoppable Domains.

#### For Free Plans (Desktop App Only)

Free users can connect via the JSON configuration file:

1. Open Claude Desktop and go to **Claude** (menu bar) &rarr; **Settings** &rarr; **Developer** &rarr; **Edit Config**

   This opens the config file at:
   - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

2. Add the following configuration:

   ```json
   {
     "mcpServers": {
       "unstoppable-domains": {
         "command": "npx",
         "args": ["mcp-remote", "https://api.unstoppabledomains.com/mcp/v1"]
       }
     }
   }
   ```

3. Save the file and **restart Claude Desktop** completely (quit and relaunch)

4. After restarting, look for the **hammer icon** in the bottom-right corner of the chat input — click it to verify the Unstoppable Domains tools are available

{% admonition type="info" %}
This method uses [mcp-remote](https://www.npmjs.com/package/mcp-remote) to bridge the remote MCP server to Claude's local stdio transport. You'll need [Node.js](https://nodejs.org/) installed on your machine.
{% /admonition %}

### Claude Code

Add the MCP server with a single command:

```bash
claude mcp add --transport http unstoppable-domains https://api.unstoppabledomains.com/mcp/v1
```

Then authenticate inside Claude Code:

1. Start a Claude Code session
2. Run `/mcp` to check the server status
3. Follow the browser-based OAuth flow to sign in with your Unstoppable Domains account
4. Once authenticated, all Unstoppable Domains tools are available in your session

{% admonition type="info" %}
By default this adds the server to your local (per-project) configuration. Add `--scope user` to make it available across all projects:

```bash
claude mcp add --transport http --scope user unstoppable-domains https://api.unstoppabledomains.com/mcp/v1
```
{% /admonition %}

## Authentication Options

### OAuth 2.0 (Recommended)

OAuth provides scoped access through browser-based authentication:

- **Easy setup** - Just authenticate when prompted using your Unstoppable Domains account
- **Granular permissions** - Only grant access to what you need
- **Revocable** - Disconnect apps anytime from [Account Settings](https://unstoppabledomains.com/account/settings?tab=advanced)

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

1. Go to [Account Settings](https://unstoppabledomains.com/account/settings?tab=advanced)
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
```

**Step 2: Commit**

```bash
git add mcp/mcp-server.md
git commit -m "Add dedicated MCP Server page with setup and auth content"
```

---

### Task 2: Rewrite `mcp/overview.md` as User API overview

Replace the current MCP-focused overview with a high-level User API overview that describes what the API does and links to the MCP Server page.

**Files:**
- Modify: `mcp/overview.md` (full rewrite)

**Step 1: Replace contents of `mcp/overview.md`**

Write this exact content:

```markdown
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
```

**Step 2: Commit**

```bash
git add mcp/overview.md
git commit -m "Rewrite MCP overview as User API overview page"
```

---

### Task 3: Update sidebar and top-level overview

Rename the sidebar group from "MCP Server" to "User API" and add the new MCP Server page. Update `apis/overview.md` links.

**Files:**
- Modify: `apis/sidebars.yaml:5` — change group name, add MCP Server item
- Modify: `apis/overview.md:13-14` — update links

**Step 1: Update `apis/sidebars.yaml`**

Replace lines 5-17 (the MCP Server group) with:

```yaml
- group: User API
  items:
    - label: Overview
      page: ../mcp/overview.md
    - label: MCP Server
      page: ../mcp/mcp-server.md
    - label: Common Workflows
      page: ../mcp/common-workflows.md
    - label: Available Tools
      page: ../mcp/available-tools.md
    - label: Troubleshooting
      page: ../mcp/troubleshooting.md
    - label: API Reference
      page: mcp/openapi.json
  separatorLine: true
```

**Step 2: Update `apis/overview.md`**

Replace the bullet list (lines 12-13) with:

```markdown
- [User API and MCP Server](/mcp/overview)
- [Reseller API](reseller/openapi.yaml)
```

**Step 3: Commit**

```bash
git add apis/sidebars.yaml apis/overview.md
git commit -m "Rename MCP Server section to User API in sidebar and overview"
```

---

### Task 4: Verify locally

**Step 1: Run local dev server**

```bash
npx @redocly/cli preview-docs
```

**Step 2: Verify in browser**

Check these pages:
- Sidebar shows "User API" group with Overview, MCP Server, Common Workflows, Available Tools, Troubleshooting, API Reference
- User API Overview page renders correctly with links to MCP Server and API Reference
- MCP Server page renders correctly with all setup instructions
- Common Workflows, Available Tools, Troubleshooting pages still render
- Top-level APIs Overview links work
- All internal links resolve (no broken links)

**Step 3: Commit any fixes if needed**
