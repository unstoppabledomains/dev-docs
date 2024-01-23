---
title: Humanity Check for Login | Unstoppable Domains Developer Portal
description: This page provides a high-level overview of the Humanity Check feature for Unstoppable Login.
redirectFrom:
  - /login-with-unstoppable/humanity-check/humanity-check-for-login/
  - /login-with-unstoppable/humanity-check/
---

# Humanity Check for Login

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/w2R2GUnzgOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The Unstoppable Login Humanity Check feature provides a way for applications to verify personal information for their users and attach that information to UD domains. This process allows users to safely prove their ‘uniqueness’ without revealing their identity or personal information. We’re calling this privacy-protected but robust authentication method Humanity Check.

The Humanity Check feature allows Unstoppable Domains to start building a community of data sharing with domains as the central hub through which that information passes.

- For domain owners, Humanity Check will become the primary way that web3 users store, share, and control who has access to their personal data online.
- For applications, Humanity Check will become the standard solution to sybil resistance, customer communication, and personal data storage.

:::info
Users will always have full control over which pieces of data they share with which applications, regardless of the information being requested by the application.
:::

## Identity Verification Partners

To offer the Humanity Check feature, Unstoppable Domains uses CAPTCHA for the verification process.

<figure class="one-third-inline-block">

![Screenshot for Humanity Check with CAPTCHA](/images/captcha_humanity_check.png)

<figcaption>Humanity Check with CAPTCHA</figcaption>
</figure>

:::info
Unstoppable Login will partner with additional Humanity Check providers in future releases. Applications will have the ability to ask for a specific Humanity Check provider, but the Client Configuration UI will have a default provider selected.
:::

## Humanity Check Configuration

Unstoppable Login passes the unique Humanity Check ID number (or a proxy for it) from the Humanity Check provider through to applications. To access the humanity check identifier for users, applications can add a [humanity_check scope](/identity/guides/login-scopes.md#humanity_check) to their Unstoppable Login configuration.

:::info
For the moment, Unstoppable Login only allows applications to request the Humanity Check identifier, but additional scopes will be added in future releases to allow applications to request more personal data (i.e., name, address, country, location, etc.).
:::

These specific considerations apply to the Humanity Check feature:

- **Any domain from the same wallet will return the same Humanity Check identifier.** If more than one domain exists in the same wallet, users will only need to complete the humanity check process once because identity verification is tied to the wallet address, not the domain.
- **Humanity Check information will not transfer when a domain is sold.** The humanity check identifier is tied to the wallet address, not the domain, so the humanity check information will not be transferred with the domain when it is sold to someone else.
- **Each user only needs to verify themselves once per wallet address.** If users verify humanity check information inside an app, this verification applies to other applications if using the same login. Even different domains within the same wallet will be pre-verified using the same humanity check information.

:::warning
While users can maintain a humanity-check-approved identity on the blockchain, the supporting personal data resides **off-chain on a conventional server**.
:::

## Considerations

The Unstoppable Login Humanity Check feature assumes the following:

- Users must have a UD-minted domain inside their wallet either on Polygon or Ethereum.
