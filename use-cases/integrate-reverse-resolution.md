---
title: Integrate Reverse Resolution into Your App | UD Developer Portal
description: This page outlines the use case for integrating the Reverse Resolution feature into your application.
---

# Integrate Reverse Resolution into Your App

This page outlines the use case for integrating the Reverse Resolution feature into your application. You can improve your application's user experience by displaying your users' domain names instead of their wallet addresses.

## How does it work?

[Reverse Resolution](/reverse-resolution/index.md) works like a phonebook where you would typically search for a contact's phone number, but you can also search for a contact with their phone number. This works by having domain owners set a reverse record for their domains on the blockchain. Then when an application uses our APIs or libraries to resolve a reverse record, our smart contracts return the domain name that the owner selected.

You can use Reverse Resolution anywhere your application has to display the identity of a connected user.

<figure>

![reverse resolution demo](/images/reverse-resolution-illustration.jpeg "#width=80%;")

<figcaption>Reverse Resolution demo</figcaption>
</figure>

## Who sets the domain for Reverse Resolution?

Individuals maintain absolute control over their domains and their reverse records. No one can set or remove a reverse record of a domain other than the domain owner. However, reverse records are wiped automatically at the contract level whenever a domain owner changes.

## Are there working integrations for this feature?

<https://web3udmintfeed.nft>, a platform that tracks newly minted UD domain names in real-time, has implemented Reverse Resolution and can also be used as a reference for implementation: [web3udmintfeed.nft Code Reference](https://github.com/Noxturnix/web3udmintfeed.nft).

There are UD Partners like [Liquality](https://blog.liquality.io/liquality-x-unstoppable-domains/) and [ShapeShift](https://shapeshift.com/library/easy-shapeshifting-crypto-sending-and-receiving-with-unstoppable-domains) that have integrated Reverse Resolution into their applications.

## How do I get started?

See the [Resolution Service API](https://docs.unstoppabledomains.com/openapi/resolution/#operation/ReverseController.getReverse), [Resolution Libraries](/reverse-resolution/integration-guides/resolution-libraries.md), and [Smart Contracts](/reverse-resolution/integration-guides/smart-contracts.md) guides to get started integrating the Reverse Resolution feature into your application. You should also review the [Frequently Asked Questions](/reverse-resolution/reverse-resolution-faq.md) page for answers to common questions you might have.
