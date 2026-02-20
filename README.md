# Unstoppable Domains Documentation

[![Unstoppable Domains Documentation](https://img.shields.io/badge/docs-unstoppabledomains.com-blue)](https://docs.unstoppabledomains.com/)

Unstoppable Domains Documentation is hosted by [Redocly](https://www.redocly.com/) and can be accessed at
[docs.unstoppabledomains.com](https://docs.unstoppabledomains.com/).

## Contributing

### General rules

- Follow the [Google developer documentation style guide](https://developers.google.com/style). (Unstoppable docs style *coming soon*!)

- Files that shouldn't be edited directly:
    - `/reference/smart-contracts/cns-smart-contracts.md`
    - `developer-toolkit/reference/smart-contracts/uns-smart-contracts.md`
    - `developer-toolkit/changelogs/*-changelog.md`

### Suggesting page edits

Clicking **Edit** at the upper right corner of any page on the documentation site will take you directly to the page in this repository.

1. Click **Edit this file** on the Github page to begin editing directly in your browser.

2. Make your changes. You can preview standard markdown and HTML in the **Preview** tab. `.tsx` pages and other redocly features will require setting up the [Redocly development environment](#redocly-development-environment).

3. When you're finished with your changes, enter your commit details, create a new branch, and start a pull request.

---

## Redocly development environment

To preview Redocly-specific features while editing, you will need to clone the repository and set up the [Redocly Realm](https://redocly.com/docs/realm) development environment.

### Prerequisites

- [node.js 20.x](https://nodejs.org/en/) (specified in `.nvmrc`)
- [nvm](https://github.com/nvm-sh/nvm) (recommended for managing Node versions)
- [yarn](https://yarnpkg.com/en/)

### Setup

1. Use the correct Node version:

```bash
nvm use
```

2. Install dependencies:

```bash
yarn install
```

### Start the development server

```bash
yarn start
```

The development server will run on `http://localhost:4000`.

**Note**: *search isn't functional in the development environment.*

### Build

To build the site for production:

```bash
yarn build
```

### Troubleshooting

If changes are not reflected in the portal, try clearing your browser cache or restart the development server.

---

## API Specifications

### Partner API (`apis/partner/openapi.yaml`)

The Partner API v3 spec for Web3 domain distribution and management (minting, custody wallets, blockchain operations). This spec is maintained manually.

### Reseller API (`apis/reseller/openapi.yaml`)

The Reseller API v1 spec for traditional DNS domain registration and management. This spec follows a two-stage workflow:

1. **Generate** the bare spec (paths, schemas, tags, `x-tagGroups`) from the upstream source using the generation script
2. **Enrich** the generated spec with documentation metadata (info block, servers, tag `x-displayName`s, endpoint `summary`/`description` fields) using the `enrich-reseller-spec` Claude skill (`.claude/skills/enrich-reseller-spec/`)

The generation script handles tag splitting — the original `domains` tag is split into 6 sub-tags (`domain-search`, `domain-registration`, `dns-records`, `domain-transfers`, `domain-flags`, `domain-contacts`) and grouped under `x-tagGroups` for Redocly sidebar navigation.

### Linting

All API specs can be validated with:

```bash
npx @redocly/cli lint apis/reseller/openapi.yaml
npx @redocly/cli lint apis/partner/openapi.yaml
```

API configuration is in `redocly.yaml` under the `apis:` key.
