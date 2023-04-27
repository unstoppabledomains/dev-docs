---
title: Send and Receive Crypto Payments | UD Developer Portal
description: This page gives an overview of the Unstoppable Domains crypto payments feature.
---

# Send and Receive Crypto Payments

Unstoppable Domains allows you to make payments with over [297 cryptocurrencies](https://unstoppabledomains.freshdesk.com/support/solutions/articles/48001185621-supported-cryptocurrencies) using a single domain name. As long as you have configured your addresses to the domain, our members can send crypto to your domain, and it will end up in your wallet.

Still confused about how it works? If you own the `ryan.crypto` domain and BTC is sent to that domain, you will receive it at your BTC address. If ETH is also sent to that domain, you will receive it at your ETH address. Unstoppable Domains achieves this with a process called Domain Resolution.

## Overview

Domain Resolution is the process of converting a human-readable domain name like `ryan.crypto` to the cryptocurrency addresses attached to them. It involves retrieving a domain’s records through [Smart Contracts](/smart-contracts/contract-reference/uns-smart-contracts.md) deployed on the blockchain. Please see the [Reverse Resolution](/reverse-resolution/index.md) guide for converting cryptocurrency addresses into human-readable domain names.

<figure>

![successful domain resolving example](/images/successful-domain-resolving.png '#width=50%')

<figcaption>Successful domain resolving example</figcaption>
</figure>

## How Domain Resolution Works

In the demo above, we wanted to send `ETH` to the `ryan.crypto` domain. The application sends both parameters (`currency` and `domain name`) to the [Resolver Contract](/smart-contracts/contract-reference/uns-smart-contracts.md/#resolver) on the Ethereum blockchain, which returns the `crypto.ETH.address` record attached to that domain to complete the `ETH` transfer to Ryan’s wallet. Please see the [Web3 Domain Resolution Demo](https://resolutionwithunstoppable.com) to understand how Domain Resolution works.

<figure>

![the crypto payments success flow diagram](/images/crypto-payments-success-flow.svg)

<figcaption>Crypto payments success flow</figcaption>
</figure>

:::info
A domain can store many records and key formats. To learn about our supported record types, see our [Records Reference](/resolution/guides/records-reference.md) guide.
:::

<embed src="/snippets/_developer-survey-embed.md" />
