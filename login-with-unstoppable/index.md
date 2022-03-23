---
title: Login with Unstoppable
description: This page provides a high-level overview of the Login with Unstoppable feature.
---

# High Level Overview

Login with Unstoppable allows an Unstoppable Domain owner to log in and share information with applications, which works for Polygon and Ethereum domains. This allows application developers to learn information about their users (email, for example) without needing to host or maintain their own CRM database. With current wallet-based sign-in methods it is difficult or impossible for application developers to contact their users.&#x20;

Login with Unstoppable gives users and applications a simple way to solve this problem. This protocol extends the standard OpenID Connect (OIDC) authorization protocol with a simple wallet signature. This decentralized authorization process enables a better user experience and a closer relationship between applications and the communities they serve.&#x20;

:::info
Login with Unstoppable is currently configured for users to share the email address associated with their UD account. Future updates will allow users to share other metadata such as social profiles and community memberships with their login, as well as receive direct requests from applications to share specialized information.
:::

![User flow for Login with Unstoppable](/images/login-with-unstoppable-flow-revised.png '#display=block;margin-left=auto;margin-right=auto;width=50%;')

## Benefits for Applications

1. Communicate with community members directly via opt-in access to their email addresses.
2. Avoid hosting a database of user contact information by asking for permissions to access that information only when it's needed.
3. Request additional data from users, such as social profiles, to further enhance the user experience (future release).

## Benefits for Users

1. Information sharing is 100% opt-in.
2. Only one login for every web3 application. No need to remember multiple unique usernames and passwords.&#x20;
3. Gives users absolute control over their login credentials (private key), not a corporation.

## Considerations

* Does not support .zil domains
* Pre-made components are only available initially in React. The modal is written in react, which has a larger library size.
