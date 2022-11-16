---
title: Domain Management FAQs | Unstoppable Domains Developer Portal
description: Frequently asked questions about Unstoppable Domains domain management.
---

# Domain Management FAQ

### What is the limit of subdomains per domain?

There is no limit on the number of subdomains that can be minted to a domain.

### Will apps have to update in order to make subdomains work?

Unstoppable Domains APIs and libraries will not need to be updated. However, apps may want to confirm their code will support the format for subdomains (e.g., "blog.example.crypto")

### Can subdomains be minted for Ethereum-based domains?

No, Ethereum domains will need to be migrated to Polygon before they can mint subdomains.

### Can subdomains be minted for Zilliqa-based domains?

No, Zilliqa domains will need to be migrated to Polygon before they can mint subdomains.

### Can subdomains resolve to crypto addresses and IPFS websites?

Yes, subdomains can resolve into crypto records and IPFS websites like a regular domain name.

### Can I set Reverse Resolution for subdomains?

Yes, you can configure Reverse Resolution for subdomains, as there is no difference from a regular domain.

### What happens to subdomains when a domain is transferred to a new address?

Nothing, they remain intact and will be owned by the same address, having the same records.

### Can I block or restrict subdomain minting on my domain?

You need to approve every subdomain created, so if you don't want a subdomain to exist, you can decline to create it. Unstoppable Domains cannot create a subdomain for a domain you hold. Only you can do that.
