---
title: Free Domain Minting Guide | Unstoppable Domains Developer Portal
description: This guide covers the process for configuring the Reseller account to mint free domains.
---

# Free Domain Minting Guide

Unstoppable Domains offers free domain minting to Resellers. The free domain minting criteria will vary based on the Reseller, but when enabled, it allows Resellers to use the following [Reseller API endpoints](../reseller-api-endpoints.md): free domain suggestions, free domain claiming, and reserve free domain.

The following diagram shows the general process that takes place between the Reseller and Unstoppable Domains during the free domain minting process.

<figure>

![Success flow for minting free domains with UD](/images/free-domain-minting-success-flow.png '#width=80%;')

<figcaption>Success flow for minting free domains with UD</figcaption>
</figure>

## Step 1: Retrieve the Secret Key for Authentication

* A secret key is required when a domain is purchased using the **Payback** or **Free** payment type.
* The secret key should be saved and can only be used on the server-side. This process hasn't been automated yet, so resellers must email [bd@unstoppabledomains.com](mailto:bd@unstoppabledomains.com) to request the secret key.

<figure>

![Location of Reseller API Token when enabled in the Reseller Dashboard](/images/reseller-api-secret.png '#width=80%;')

<figcaption>Location of Reseller API Token when enabled in the Reseller Dashboard</figcaption>
</figure>

## Step 2: Setup Criteria for Free Domains

* Resellers work with UD administration to establish the "allowed free TLDs" and "allowed free tiers" for the reseller account. **The free domain criteria will vary based on the Reseller.**
* This list of "allowed free TLDs" and "allowed free tiers" is then assigned to the resellers account.
* Resellers can only mint a free domain if it matches the tier and has an appropriate domain ending.

The table below shows how the pricing tiers are structured at UD. Most free domains will be a Tier 7 or Tier 8 domain with a combination of letters and numbers.

<figure>

![Pricing tiers for UD domains](/images/domain-pricing-tiers.png '#width=80%;')

<figcaption>Pricing tiers for UD domains</figcaption>
</figure>

:::info info
Domains containing numerals in the name (i.e: tim1, monica95, etc) are discounted by up to 75% of the standard prices, and most free domains fall within this category.
:::

## Step 3: Use the Free Domain Claiming Endpoint

* The free domain claiming endpoint allows the partner (Reseller ID) to mint free domains for a specified wallet address, if the Reseller is eligible to offer free domains.
* The free domain claiming endpoint is implemented as an additional payment type within the [orders API endpoint.](../reseller-api-endpoints.md)

:::info
No additional configuration is necessary from the Reseller to begin using this endpoint once the free domains criteria has been established with UD administrators and added to the Reseller account.
:::

## Considerations

The following considerations apply to the free domain minting:

* The Reseller ID will be allowed to provide specified domain endings for free.
* The domain must be eight characters or more and contain at least a letter and number.
* If the Reseller ID doesn't have an allowance to provide free domains, then users will not be permitted to mint free domains.
* If the wallet or email already has a free domain, then a second free domain is not permitted.

:::success Congratulations!
You just configured your Reseller account to mint free domains.
:::
