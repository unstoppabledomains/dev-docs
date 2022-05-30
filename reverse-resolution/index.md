---
title: Getting Started With Reverse Resolution | UD Developer Portal
description: This page provides a high-level overview of the Reverse Resolution feature.
---

# Reverse Resolution Overview

Reverse resolution is a feature that enables applications that integrate with Unstoppable Domains to show domain names where they would typically only show addresses.

Unlike standard domain resolution, where a domain is provided to an application and returns a wallet address, reverse resolution allows applications to take a wallet address and return the domain name linked to them. Reverse resolution is a user experience upgrade that makes your wallet addresses recognizable on the applications you use, thereby promoting the use of NFT domains for user identity.

As a domain owner, you can now see your domain names instead of wallet addresses in any application which has integrated reverse resolution.

<figure>

![reverse resolution demo](/images/reverse-resolution-etherscan-demo.png "#width=80%;")

<figcaption>Reverse Resolution demo</figcaption>
</figure>

This works by having domain owners set a reverse record for their domains on the blockchain. Then when an application uses our libraries to resolve a reverse record, our smart contracts return the domain name that the owner selected.
