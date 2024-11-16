---
title: Getting Started With Reverse Resolution | UD Developer Portal
description: This page provides a high-level overview of the Reverse Resolution feature.
---

# Reverse Resolution Overview

Reverse Resolution is a feature that enables applications that integrate with Unstoppable Domains to show domain names where they would typically only show addresses. As a domain owner, you can now see your domain names instead of wallet addresses in applications integrating Reverse Resolution.

Unlike standard domain resolution, where a domain is provided to an application and returns a wallet address, Reverse Resolution allows applications to take a wallet address and return the domain name linked to them.

<figure>

![reverse resolution demo](/images/reverse-resolution-illustration.jpeg "#width=80%;")

<figcaption>Reverse Resolution demo</figcaption>
</figure>

## How Reverse Resolution Works

Reverse Resolution works by having domain owners set a reverse record for their domains on the blockchain. Then when an application uses our APIs or libraries to resolve a reverse record, our smart contracts return the domain name that the owner selected.

## Who Sets the Domain for Reverse Resolution?

Individuals maintain absolute control over their domains and their reverse records. No one can set or remove a reverse record of a domain other than the domain owner. However, reverse records are wiped automatically at the contract level whenever a domain owner changes.

## Choose an Integration Path

There are several ways to integrate Unstoppable's Reverse Resolution feature into your application, detailed in the table below. Developers are encouraged to integrate more than one pathway.

| Pathway | Description | Integration Guides |
| - | - | - |
| Resolution Service API | integrate Reverse Resolution using the Resolution Service API hosted by Unstoppable Domains | [Resolution Service API Guide](https://docs.unstoppabledomains.com/openapi/resolution/#operation/ReverseController.getReverse)
| Resolution Libraries | integrate Reverse Resolution using the resolution libraries managed by Unstoppable Domains | [Resolution Libraries Guide](integration-guides/resolution-libraries.md)
| Smart Contracts | integrate Reverse Resolution using Unstoppable Domains UNS smart contracts | [Smart Contracts Guide](integration-guides/smart-contracts.md) |



<embed src="/snippets/_developer-survey-embed.md" />
