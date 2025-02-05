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

## Resolution Service API

Is our HTTP-based API that allows you to quickly build applications that fetch UD domain data from the blockchain with a single API request, see the [Resolution Service API](/openapi/resolution). The Unstoppable Domains team manages this service.

## Smart Contracts

Integrate Reverse Resolution using Unstoppable Domains UNS smart contracts. See the [Smart Contracts Guide](../smart-contracts/quick-start/reverse-resolve-domains.md). The Unstoppable Domains team manages this service.

<embed src="/snippets/_developer-survey-embed.md" />
