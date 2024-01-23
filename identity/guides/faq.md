---
title: Unstoppable Login Frequently Asked Questions
description: Frequently asked questions about the Unstoppable Login Web3 user authentication service.
redirectFrom:
  - /login-with-unstoppable/get-started-login/login-faq/
  - /login-with-unstoppable/login-faq/
  - /login-with-unstoppable/humanity-check-faq/
---

# Unstoppable Login Frequently Asked Questions

## How does it work?

Data is stored on users’ personal servers. To start, Unstoppable will run the first servers, but the goal is to have every user running their own server. Think running a Raspberry Pi or renting a personal server on Amazon or a decentralized protocol. Just like how everyone now owns a mobile phone, we think one day we’ll all have our own server, ultimately giving us full ownership and control of our data.

When a user visits an app and logs in with their domain:

1. The app reads the domain and directs the user to the authorization server saved to that domain name.

2. The user then authenticates and grants access to the information requested by signing a transaction with the wallet that owns their domain.

3. The app receives an access token and an id token from the authorization server with the user’s contact information (e.g., email address).

4. The app and user now have an open communication channel!

## Will Login be a paid service?

No, Unstoppable Login is a free feature members get with the purchase/ownership of their Web3 domain. It is free to use and free for apps to integrate.

[comment]: # "How is this different from Facebook Login or Google Login?"

## How is this different from Login with Ethereum?

Unstoppable Login is live and available for use. We see it as becoming the foundations of your digital identity. That’s why we don’t charge renewal fees on our domains, we don’t believe that you should ever be able to lose your identity.

## How is this different from logging in with a wallet?

Unstoppable Login allows people to login to apps using their desired username instead of using a bank account number/wallet number. Additionally, Unstoppable Login offers users and apps the ability to permission the sharing of off-chain data should a user choose, which is not available using a wallet.

Also with Unstoppable Login your identity/login is associated to your Web3 domain, so you can transfer it to a different wallet down the road should you desire. You can't transfer your private key.

## Can users choose what information to share with each app?

In time they will be able to. We’re continuing to make improvements to Unstoppable Login. Today we’ve limited the data that can be shared (email address, domain name), but in time as we introduce additional metadata that users can share we will also introduce more flexibility and controls.

## Can users create accounts from the Login app?

No, you can’t currently create an account from the app, so users will need to create one on [Unstoppable Domains](https://unstoppabledomains.com) first.

## Which apps are currently integrated with Login?

See our official list of application integrations [here](https://unstoppabledomains.com/apps?filters=26).

[comment]: # "Is UD doing a kyc/mlr service?"

<!-- ---
title: Humanity Check Frequently Asked Questions | UD Developer Portal
description: Frequently asked questions about the Humanity Check feature of the Unstoppable Login service.
redirectFrom:
    - /login-with-unstoppable/humanity-check/humanity-check-faq/
--- -->

# Humanity Check Frequently Asked Questions

## Do users need to do a Humanity Check to use their domains?

No, it is entirely opt-in.

## Can Humanity Check replace KYC?

Yes, because it is a decentralized KYC solution.

## Will there be support for corporate verification in the future?

Yes.

## How/where is user data stored? How do they know their data is safe?

**Note: we have switched our Humanity Check provider from Persona to CAPTCHA**

Persona is an identity verification industry leader and works with cryptocurrency exchanges such as BlockFi, Swan, Dacxi and TantraLabs, as well as companies such as Square and Postmates to help facilitate identity verification. Persona securely stores all photos of identity documents that you upload, photos of your face that you upload, and data from scans of facial geometry extracted from the photos of your face that you upload in an encrypted format on their servers.

Persona will not sell, lease, trade, or, other than to provide the Verification to their partners. Persona will not disclose, redisclose, or otherwise disseminate data from scans of facial geometry extracted from the photos of your face that you upload unless doing so:

- A. Completes a Customer transaction requested and authorized by you or your legally authorized representative;
- B. Is required by state or federal law, or municipal ordinance;
- C. Is required pursuant to a warrant or subpoena issued by a court of competent jurisdiction;
- or D. Is expressly consented to by you.

Persona does not use, share, rent or sell the Personal Data of our Users’ Customers for interest-based advertising. We do not sell or rent the Personal Data of our Users, their Customers or our Site visitors.

See the [Persona Security and Privacy](https://withpersona.com/security) page for more information.

## What happens to user personal data? Is it stored on web2?

**Note: we have switched our Humanity Check provider from Persona to CAPTCHA**

Persona collects a set of information (documentary, selfie, non-documentary) to identify users, and deter would-be fraudsters. This information is stored in a dashboard to track verifications and corresponding decisions (pass / fail).

However, Unstoppable Domains and Unstoppable Login-integrated apps **do not have access** to this data. They only have access to the randomized **Persona ID** that is generated by the verification process.

## Does UD have access to personal data?

**NO**, once users verify they are given a randomly-generated number that represents their Persona ID number.

## Is the data on-chain?

The randomized **Persona ID** that is created during the verification process is off-chain data. The personal information (selfie photo and photo of ID) is held on Persona’s server.

## Does this mean Unstoppable Domains is becoming a centralized entity?

No.

## Is there a roadmap to move this process to web3?

We partner on the identity verification side of the humanity check. To be fully decentralized we’d need an identity provider that was decentralized. Due to the nature of how the personal identity is verified, finding such a provider may be a few years out. We are open to suggestions if the community has a decentralized identity provider recommendation for partnership.

## Why not use other services like bright ID?

UD does due diligence on all its partners and is always looking for new ones. UD uses their current partner because of their trust in the space

## Wouldn’t some partners rather have more personal data access and control?

There are a number of advantages for decentralized apps to use humanity check with Unstoppable Login versus partner with an identity provider themselves.

1. DApps won’t need to manage PII data
2. DApps don’t need to pay for verifications
3. DApp users can go through humanity check once and use the check across every integrated DApp for Unstoppable Domains.

## Can users attach the same unique ID to several wallets/domains?

No. The Persona ID is associated with a single Web3 domain.

## Can users transfer their Humanity Check to another domain?

No, but this feature is in development.
