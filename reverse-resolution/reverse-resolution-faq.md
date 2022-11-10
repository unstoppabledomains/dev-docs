---
title: Reverse Resolution FAQs | Unstoppable Domains Developer Portal
description: Frequently asked questions about the Reverse Resolution feature of Unstoppable Domains.
---

# Reverse Resolution FAQ

### Can one address have multiple reverse records?

No, each wallet address can only have one reverse record configured.

### How many domains can I link to a wallet address?

No, you can only have one primary domain linked to an address.

### Can I change the domain I set for Reverse Resolution?

Yes, you can change and switch the domain you link to a wallet address at any time.

### Can multiple addresses have reverse records that point to the same domain?

Yes and no. There’s nothing stopping users from pointing multiple addresses to a domain in the contracts. However, our website UI does not support this at the moment. If there is demand, we may change this in the future.

### How can applications add Reverse Resolution support?

Our resolution libraries and APIs support Reverse Resolution. See our [Integration Pathways](index.md#choose-an-integration-path) guides for more detailed instructions.

### Will apps have to update to make Reverse Resolution work?

Yes, Reverse Resolution is a new feature for our domains with a new set of smart contracts. Applications will need to upgrade their resolution libraries to access the new Reverse Resolution functions we’ll include.

### Can I set Reverse Resolution for Ethereum-based domains?

Yes, there is a separate Reverse Resolution contract on Ethereum for L1 domains.

### Can I set Reverse Resolution for Zilliqa-based domains?

No, you cannot set Reverse Resolution for Zilliqa domains. Reverse resolution only supports Ethereum and Polygon domains.

### Can I set Reverse Resolution for other address types like Bitcoin?

No, Reverse Resolution only supports Ethereum addresses because the Ethereum blockchain only supports the algorithms to verify the signature of Ethereum transactions. We would have to implement signature verification of other blockchains into our smart contracts to support them, significantly increasing gas costs for configuring Reverse Resolution.

### Can I set Reverse Resolution for subdomains?

Yes, you can configure Reverse Resolution for subdomains, as there is no difference from a regular domain.

### What happens when a single wallet has a reverse record to both Unstoppable Domains and a third party?

Integrating applications will need to check and decide how to display both records. Of course, we’d love to have Unstoppable Domains records take precedence, but it’s ultimately up to each application to decide.

### What happens to the reverse record when a domain is transferred to a new address?

Whenever a domain owner changes, reverse records are wiped automatically at the contract level, not only our website UI.

### What happens to a reverse record when a domain is bridged?

We create a new reverse record on the blockchain where the domain is being transferred to.

### What happens when reverse records are stored on both L1 and L2?

By default, L1 reverse records take precedence over L2 reverse records. If we detect a domain with both L1 and L2 records in our website UI, we’ll ask the user to clear the record from the chain where the domain is not stored.
