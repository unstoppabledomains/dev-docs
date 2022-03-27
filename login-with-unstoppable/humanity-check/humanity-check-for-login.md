---
title: Humanity Check Overvew
description: This page provides a high-level overview of the Humanity Check feature for Login with Unstoppable.
---

# Humanity Check Overview

<iframe width="560" height="315" src="https://www.youtube.com/embed/w2R2GUnzgOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The Login with Unstoppable Humanity Check feature provides a way for applications to verify personal information for their users and attach that information to UD domains. This process allows users to safely prove their ‘uniqueness’ without revealing their identity or personal information. We’re calling this privacy-protected but robust authentication method Humanity Check.

The Humanity Check feature allows the UD community to start building an ecosystem of data sharing with domains as the central hub through which that information passes.

* For domain owners, Humanity Check will become the primary way that web3 users store, share, and control who has access to their personal data online.&#x20;
* For applications, Humanity Check will become the standard solution to sybil resistance, customer communication, and personal data storage.

:::info
Users will always have full control over which pieces of data they share with which applications, regardless of the information being requested by the application.
:::

## Identity Verification Partners

To offer the Humanity Check feature, Unstoppable Domains has partnered with identity verification services such as [Persona](https://withpersona.com). When a Humanity Check provider verifies a new person, it assigns that person a new randomly generated ID number, which is then passed to UD.

:::info
Login with Unstoppable will partner with additional Humanity Check providers in future releases. Applications will have the ability to ask for a specific Humanity Check provider, but the Client Configuration UI will have a default provider selected.
:::

### Persona

Persona asks users to take a photo of their government-issued ID and a few selfies. Persona uses these images to verify that a person is who they claim to be. Every time Persona verifies a new person, it gives that person a new randomly generated ID number.

![Persona UI for uploading government ID](/images/persona_upload_photo_id.png '#display=inline-block;padding=0px;width=33%;') ![Persona UI for uploading live photos or selfies](/images/persona_live_photo_capture.png '#display=inline-block;padding=0px;width=33%;') ![Persona UI after identity verification is complete](/images/persona_congratuations.png '#display=inline-block;padding=0px;width=33%;')

## Humanity Check Configuration

Login with Unstoppable passes the unique Humanity Check ID number (or a proxy for it) from the Humanity Check provider through to applications. To access the humanity check identifier for users, applications can add a [humanity check scope](scopes-for-login.md#humanitycheck-scope-mark-style"colorred"betamark) to their Login with Unstoppable configuration.&#x20;

:::info
For the moment, Login with Unstoppable only allows applications to request the Humanity Check identifier, but additional scopes will be added in future releases to allow applications to request more personal data (i.e., name, address, country, location, etc.).&#x20;
:::

These specific considerations apply to the Humanity Check feature:

* **Any domain from the same wallet will return the same Humanity Check identifier.** If more than one domain exists in the same wallet, users will only need to complete the humanity check process once because identity verification is tied to the wallet address, not the domain.&#x20;
* **Humanity Check information will not transfer when a domain is sold.** The humanity check identifier is tied to the wallet address, not the domain, so the humanity check information will not be transferred with the domain when it is sold to someone else.
* **Each user only needs to verify themselves once per wallet address.** If users verify humanity check information inside an app, this verification applies to other applications if using the same login. Even different domains within the same wallet will be pre-verified using the same humanity check information.

:::warning
While users can maintain a humanity-check-approved identity on the blockchain, the supporting personal data resides **off-chain on a conventional server**.
:::

## Considerations

The Login with Unstoppable Humanity Check feature assumes the following:

* Users must have a UD-minted domain inside their wallet either on Polygon or Ethereum.&#x20;
* Users should have a Government ID of some kind to verify their identity (i.e., drivers license, passport, visa, etc.).
* Users need access to a webcam / camera phone to take additional verification photos.
* Users probably need 5 minutes to complete the web-based verification process with a UD identity partner.
