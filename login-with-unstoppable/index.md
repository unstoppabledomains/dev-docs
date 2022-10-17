---
title: Login with Unstoppable | Unstoppable Domains Developer Portal
description: This page provides a high-level overview of the Login with Unstoppable feature.
---

# Login with Unstoppable Overview

<figure>

![Login with Unstoppable Promo](/images/login-promo.png)

<figcaption>Login with Unstoppable Promo</figcaption>
</figure>

Login with Unstoppable allows owners of Unstoppable Domains to log in and share profile information with EVM-compatible applications. This gives users more control over their personal information and allows developers to access information about their users without needing to host or maintain a CRM database.

The UAuth protocol extends the standard OpenID Connect (OIDC) authorization protocol with a simple wallet signature. This decentralized authorization process enables a better user experience and a closer relationship between applications and their users.

<figure>

![User flow for Login with Unstoppable](/images/login-with-unstoppable-flow-revised.png '#width=50%')

<figcaption>User flow for Login with Unstoppable</figcaption>
</figure>

## Benefits for Applications

1. Avoid hosting a database of user contact information by requesting access only when it's needed.
2. Request additional data from users such as social profiles to further enhance the user experience.
3. Communicate with users directly via opt-in access and the `@ud.me` proxy email service.

## Benefits for Users

1. Maintain absolute control over login credentials.
2. Sharing personal information is 100% opt-in.
3. Receive email communications without sharing private email addresses.
4. Only one login for every web3 app. No need to remember multiple unique usernames and passwords.

## Supported TLDs

Login with Unstoppable currently supports the following top-level domains (TLDs):

- .crypto
- .nft
- .blockchain
- .bitcoin
- .wallet
- .888
- .dao
- .x
- .zil *

:::warning
\* Login with Unstoppable only supports `.zil` domains that have been bridged to the Polygon blockchain.
:::

## Considerations

* The components provided by the UAuth libraries are only available in React. The UAuth modal is written in React, which has a larger library size.

<embed src="/snippets/_developer-survey-embed.md" />
