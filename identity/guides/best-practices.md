---
title: Best Practices for Unstoppable Login | UD Developer Portal
description: >-
  This guide covers the recommended best practices for integrating Unstoppable
  Login with your dApp.
showNextButton: false
redirects:
  /login-with-unstoppable/login-ui-configuration/: {}
  /login-with-unstoppable/login-integration-guides/login-ui-configuration/: {}
  /login-with-unstoppable/login-best-practices/: {}
---

<!--
This file was automatically renamed from MDX to Markdown.
Please, review and update the content.
-->

<!-- Color samples replaced with hex text -->

# Best Practices for Unstoppable Login

The following are some best practices for integrating your application with Unstoppable Login.

## Confirm the Authorization Account

In addition to logging in with the controlling Ethereum or Polygon wallet, the UAuth service allows users to login using certain verified accounts associated with the domain's **ud.me** profile, such as a Solana wallet address. You can check which account was used to authorize the login session using the [getAuthorizationAccount()](/identity/sdk-and-libraries/uauth-js.md#getauthorizationaccount) method.

```