---
title: Build Your Static Website | Unstoppable Domains Developer Portal
description: This guide outlines the process of building your static website and configuring it to work with the IPFS protocol.
---

# Build Your Static Website

Once you have purchased your Unstoppable Domain, there are many options available for building and hosting your website, depending on the features you want.

## Step 1: Configure Your Site

Hosting a d-website on IPFS is slightly different from hosting it on a centralized web server and you will need to ensure that your website is properly configured for the IPFS network. All IPFS websites must adhere to the following constraints:

- All of the content for your website is contained in **one** directory, with an `index.html` file at the top level.
- All links within your source files are relative links.

You can build your static website using any tool or platform, as long as its output meets these requirements.

## Step 2: Select a Site Building Option

Here are a few options for creating your static site:

- Static website generators such as [Mobirise](http://mobirise.com) and [GoHugo](https://gohugo.io)
- Convert a Wordpress site to a static website with plugins like [Simply Static](https://wordpress.org/plugins/simply-static) or [WP2Static](https://wp2static.com) and save for offline use.
- Build a website using an [Unstoppable](#unstoppable-domains-templates) or [IPFS Community Template](#ipfs-community-templates)

### Unstoppable Domains Templates

<embed src="/snippets/_ud-templates.md" />

Developers can [personalize current website templates](https://support.unstoppabledomains.com/support/solutions/articles/48001184627-personalize-our-templates) or fork our open source templates in the [UD D-Web repository](https://github.com/unstoppabledomains/decentralized-websites) for greater customization.

### IPFS Community Templates

<embed src="/snippets/_community-templates.md" />

## Step 3: Upload Your Site to IPFS

The next step after building the site is to upload the entire website --as a single directory folder-- to IPFS. There are several ways to achieve this, so please review the guide on [Uploading Your Site to IPFS](upload-ipfs.md).

:::success Congratulations!
You just built your static website and configured it for IPFS.
:::
