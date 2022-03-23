---
title: Send and Receive Crypto Payments
description: This page gives an overview of the Unstoppable Domains crypto payments feature.
---

## Crypto Payments Overview

Unstoppable Domains allows you to make payments with over [281 cryptocurrencies](https://support.unstoppabledomains.com/support/solutions/articles/48001185621-what-cryptocurrencies-are-currently-supported-) using a single domain name. As long as you have configured your addresses to the domain, users can send crypto to your domain, and it will end up in your wallet.

Still confused about how it works? If you own the `ryan.crypto` domain and a user sends BTC to that domain, you will receive it at your BTC address. If another user sends ETH to that domain, you will receive it at your ETH address. Unstoppable Domains achieves this with a process called domain resolution.

## What is Domain Resolution?

Domain resolution is the process of converting a human-readable domain name like `ryan.crypto` to the cryptocurrency addresses attached to them. It involves retrieving a domain’s records through [smart contracts](../developer-toolkit/smart-contracts/uns-smart-contracts/) deployed on the blockchain.

![a successful domain resolving example](/images/best-practices.png '#display=block;margin-left=auto;margin-right=auto;width=50%;')

## How Does it Work?

In the demo above, we sent 1 `ETH` to the `ryan.crypto` domain. The application sends both parameters (currency and domain) to the [Resolver contract](../developer-toolkit/smart-contracts/cns-smart-contracts/#resolver) on the Ethereum blockchain, which returns the `crypto.ETH.address` record attached to that domain. The resolved address is used to complete the ETH transfer to Ryan’s wallet.

![the crypto payments success flow diagram](/images/crypto-payments-success-flow.png)

:::attention info
A domain can store many records and key formats. To learn about our supported record types, see our [records reference](../getting-started/domain-registry-essentials/records-reference/) guide.
:::

## Asking for help

Please don't be shy; we're here to help. Join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community if you need assistance integrating your app.
