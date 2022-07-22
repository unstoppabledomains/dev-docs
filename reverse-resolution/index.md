---
title: Getting Started With Reverse Resolution | UD Developer Portal
description: This page provides a high-level overview of the Reverse Resolution feature.
---

# Reverse Resolution Overview

Reverse Resolution is a feature that enables applications that integrate with Unstoppable Domains to show domain names where they would typically only show addresses.

Unlike standard domain resolution, where a domain is provided to an application and returns a wallet address, Reverse Resolution allows applications to take a wallet address and return the domain name linked to them. As a domain owner, you can now see your domain names instead of wallet addresses in any integrated Reverse Resolution application.

<figure>

![reverse resolution demo](/images/reverse-resolution-etherscan-demo.png "#width=80%;")

<figcaption>Reverse Resolution demo</figcaption>
</figure>

This works by having domain owners set a reverse record for their domains on the blockchain. Then when an application uses our APIs or libraries to resolve a reverse record, our smart contracts return the domain name that the owner selected.

## Choose a Configuration Path

There are several ways to set a reverse record for your UD domains, detailed in the chart below.

| Pathway | Short Description | Configuration Guides |
| - | - | - |
| Unstoppable Domains Dashboard | set reverse resolution records using the Unstoppable Domains dashboard | [UD Dashboard Guide](config-guides/ud-dashboard.md) |
| Smart Contracts | set reverse resolution records using Unstoppable Domains UNS smart contracts | [Smart Contracts Guide](config-guides/smart-contracts.md) |

## Choose an Integration Path

There are several ways to integrate Unstoppable's Reverse Resolution feature into your application, detailed in the chart below. Developers are encouraged to integrate more than one pathway.

| Pathway | Short Description | Integration Guides |
| - | - | - |
| Resolution Service API | integrate Reverse Resolution using the Resolution Service API hosted by Alchemy | [Resolution Service API Guide](integration-guides/resolution-service-api.md)
| Resolution Libraries | integrate Reverse Resolution using the resolution libraries managed by Unstoppable Domains | [Resolution Libraries Guide](integration-guides/resolution-libraries.md)
| Smart Contracts | integrate Reverse Resolution using Unstoppable Domains UNS smart contracts | [Smart Contracts Guide](integration-guides/smart-contracts.md) |

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_developer-survey-embed.md" />
