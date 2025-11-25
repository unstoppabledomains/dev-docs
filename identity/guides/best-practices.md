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

```typescript @uauth/js loginWithPop()
// In the login handler
const authorization = await uauth.loginWithPopup();
const account = uauth.getAuthorizationAccount(authorization);
```

```typescript @uauth/js loginCallback()
// On the callback page
const response = await uauth.loginCallback();
const account = uauth.getAuthorizationAccount(response.authorization);
```

```typescript @uauth middleware
const authorization = await uauth.authorization();
const account = uauth.getAuthorizationAccount(authorization);
```

This will return a [VerifiedAddress](/identity/sdk-and-libraries/uauth-js.md#verifiedaddress) describing the account used. For a standard Unstoppable Login, this will be the wallet address that owns the domain.

## Verify the Login Flow and Scopes

Before launching your application, you should verify the login flow that users will experience and ensure that correct scopes are being requested from users.
In the last modal screen shown below, only the minimum scopes are being requested by the application: [openID](/identity/guides/login-scopes.md#openid),
[wallet](/identity/guides/login-scopes.md#wallet), and [email](/identity/guides/login-scopes.md#email).

<figure class="one-third-inline-block" vertical-align="bottom">

![1) User Clicks Unstoppable Login button to get started](/images/login-domains-modal1.png)

<figcaption>Modal 1</figcaption>
</figure>

<figure class="one-third-inline-block" vertical-align="bottom">

![2)User Enters Unstoppable Domain Address to Login to dApp](/images/login-domains-modal2-v3.png)

<figcaption>Modal 2</figcaption>
</figure>

<figure class="one-third-inline-block" vertical-align="bottom">

![3) User Consent screen details the scopes being requested by dApp](/images/consent-screen-marked-v2.png)

<figcaption>Modal 3</figcaption>
</figure>

The modals are further described below:

- **Modal 1.** User clicks on Unstoppable Login Button.
- **Modal 2.** A modal is displayed which allows the user to begin the authorization process by entering their Unstoppable domain.
- **Modal 3.** During login, the user will see the resolved address and the information being requested by the application (i.e. the scopes).
  The user must sign the transaction using their wallet address in order to share their information with the dApp.

## Style the Login Buttons

Your integration will need Unstoppable Domains branded login buttons. See the table below for style guidelines.

| State   | Color     |                                    Button                                     |
| ------- | :-------: | :---------------------------------------------------------------------------: |
| Default | `#0D67FE` | ![Large login button: default](/images/login-buttons/login-default-large.png) |
| Hover   | `#0546B7` |   ![Large login button: hover](/images/login-buttons/login-hover-large.png)   |
| Pressed | `#478BFE` | ![Large login button: pressed](/images/login-buttons/login-pressed-large.png) |
| Loading | `#0D67FE` | ![Large login button: loading](/images/login-buttons/login-loading-large.png) |

Or you can download the full set of default [Unstoppable Login buttons](/images/login-buttons/ud-login-assets.zip).