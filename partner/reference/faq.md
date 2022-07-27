---
title: Partner Feature FAQs | Unstoppable Domains Developer Portal
description: Frequently asked questions about the Partner API of Unstoppable Domains.
---

# Partner API FAQ

### What happens when the HMAC signature becomes invalid for redirect URI payments?

You would be able to put in an order, but no crypto records would be available to pre-fill during the minting step.

### Can I use my Stripe account to generate tokens and pass them to the Partner API?

Yes, you should create a Stripe token using your Stripe details. Please note that this token is single-use.

### How are the funds collected for Coinbase payments?

Unstoppable Domains creates the Coinbase charge using the partner details.

### What are the requirements for a domain to be "free"?

An account manager from the BD team establishes the terms and conditions (T&Cs) with the partner, including the allowed TLDs, allowed tiers, and pricing. This information is used to configure the partner account for selling and minting free domains. Tiers are usually defined by domain length and the presence of dictionary words.

The domain is considered free when:

* It has a TLD that is listed in the "allowed free TLDs" list for this specific partner.
* It matches one of the tiers listed in "allowed free tiers" for the partner.
* The domain is available for sale (e.g., it's not restricted, protected, trademarked, claimed, etc.)
* It does not have a custom price set.
* It has 8+ characters, at least one letter, and one number.

### Do you limit one domain per wallet to help with anti-fraud?

Yes, we do not allow wallets that have minted a UD domain in the past to mint a free domain.

### Does UD have ways to prevent users from creating unlimited wallets to claim free domains?

Unstoppable Domains uses [Fingerprint](https://fingerprint.com/) to verify free domain orders and catch sophisticated fraudsters.

### Can the Partner API resell the same domains offered on the UD website?

Yes, you can use the Partner API to resell domains offered for sale on the UD website. However, suppose the domain being purchased is above a certain threshold ($10k). In that case, you must use a cryptocurrency method instead of Stripe or Paypal as these payment processors often decline more significant transactions.

### Are there any limitations to the Partner API account I should know?

Yes, the Partner API is limited to 60 requests per hour. However, this is subject to change in the future.

### What happens when a domain is purchased without providing a wallet?

You must provide a wallet address or an email when purchasing a domain. If you only provide an email address, UD creates an account with the email and assigns the domain for the user to log in and claim manually. If you provide both the wallet address and email address, then the domain is minted, and the account is created too.

### What is the difference between a UD affiliate and a UD partner?

An affiliate uses a link with tracking and re-directs people to run searches on the UD website. Meanwhile, UD partners require developer resources to integrate because partners call Unstoppable Domains Partner API and surfacing results inside their application or page. UD partners can create an immersive experience for their users where they can complete the entire purchase experience using the Partner API without sending traffic directly to UD's website.
