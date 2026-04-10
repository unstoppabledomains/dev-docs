# Restructure MCP Server Section into User API

## Problem

The MCP server documentation is currently the top-level section, but the MCP server is a feature built on top of the User API. The docs should reflect this hierarchy: User API is the primary concept, MCP server is a sub-section within it.

## Design

### Sidebar changes (`apis/sidebars.yaml`)

Rename the "MCP Server" group to "User API" and add a dedicated MCP Server page:

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
```

### Rewrite `mcp/overview.md` — User API overview

- Title: "User API"
- What the API does (search, purchase, manage domains, configure DNS, marketplace, conversations)
- Brief authentication summary (OAuth recommended, API key for advanced use)
- Mention MCP Server as a way to access the API through AI assistants
- Link to MCP Server page and API Reference

### New `mcp/mcp-server.md` — MCP-specific content

Receives the bulk of current `mcp/overview.md` content:

- Brief intro (what MCP is, how it wraps the User API)
- Quick Start (server URL)
- Full Setup Instructions (ChatGPT, Claude Desktop/Web, Claude Code)
- Authentication Options (OAuth scopes table, API key generation)
- API Reference table (endpoint, spec URL, protocol)

### Update `apis/overview.md`

Change bullet list to reference "User API" and update links:

```markdown
- [User API and MCP Server](/user-api/overview)
- [Reseller API](/apis/reseller/openapi)
```

### Unchanged files

- `mcp/common-workflows.md`
- `mcp/available-tools.md`
- `mcp/troubleshooting.md`
- `apis/mcp/openapi.json`
- Files stay in `mcp/` directory
