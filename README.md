# Unstoppable Domains Documentation

[![Unstoppable Domains Documentation](https://img.shields.io/badge/docs-unstoppabledomains.com-blue)](https://docs.unstoppabledomains.com/)

Unstoppable Domains Documentation is hosted by [Redocly](https://www.redocly.com/) and can be accessed at
[docs.unstoppabledomains.com](https://docs.unstoppabledomains.com/).

## Contributing

### General rules

- Follow the [Google developer documentation style guide](https://developers.google.com/style). (Unstoppable docs style *coming soon*!)

- Files that shouldn't be edited directly: 
    - `developer-toolkit/smart-contracts/cns-smart-contracts.md`
    - `developer-toolkit/smart-contracts/uns-smart-contracts.md`
    - `getting-started/changelogs/*-changelog.md`

### Suggesting page edits

Clicking **Edit this page** at the upper right corner of any page on the documentation site will take you directly to the page in this repository.

1. Click **Edit this page** on the Github page to begin editing directly in your browser. 

2. Make your changes. You can preview standard markdown and HTML in the **Preview** tab. `.mdx` pages and other redocly features will require setting up the [Redocly development environment](#redocly-development-environment).

3. When you're finished with your changes, enter your commit details, create a new branch, and start a pull request.

---

## Redocly development environment

To preview Redocly-specific features while editing, you will need to clone the respository and [install the Redocly developer portal](https://redocly.com/docs/developer-portal/installation/).

### Prerequisites

- [node.js >= 12.22.6 and <= 16.x](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

### Install

    yarn install

### Start the development server

    yarn start

**Note**: *search isn't functional in the development environment.*

### Troubleshooting

Redocly heavily relies on caching for performance issues so if some changes are not reflected in the resulting portal try cleaning cache by running:

    yarn clean
