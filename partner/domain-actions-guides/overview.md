---
title: Domain Actions API Overview | UD Developer Portal
description: This page provides a high-level overview of the Domain Actions API hosted by Unstoppable Domains.
---

# Domain Actions API Overview

Unstoppable Domains provides the Domain Actions API for conveniently generating the transactions you need to perform to interact with a domain on the blockchain, saving you the burden of forming them on the client.

The Domain Actions API provides a convenient and efficient way for Partners to perform transactions on the blockchain (e.g., update domain records, configure reverse resolution, or transfer domain ownership) with a single API request without having to handle the details themselves.

<!-- The following diagram shows the general process between the Partner and Unstoppable Domains when using the Domain Actions API. -->

## Gas Compensation Policies

There are three gas compensation policies that Partners can choose from when creating a domain action draft depending on how they want to make users send and pay for transaction fees.

* `AlwaysCompensate`: This policy always assumes the use of [meta transactions](/manage-domains/delegating-transactions.md). It allows the user pay for transactions in USD via [Stripe payment intent](https://stripe.com/docs/payments/payment-intents), rather than in ETH.
* `CompensateFree`: This policy allows Unstoppable Domains to pay the transaction fees for a user on the Polygon network.
* `NeverCompensate`: This policy should be used if a client wants to make the user send and pay for the transactions themselves and guarantees maximum privacy.

:::info
You can only use one gas compensation policy per domain action request based on the user experience you want to provide to your users.
:::

## Step 1: Create a Domain Action Draft

There are several functionalities offered by the Domain Actions API to interact with your domains, detailed in the chart below.

| Action Name | Description | Integration Guides |
| - | - | - |
| UpdateRecords | generate transactions to update resolution records for a domain | [UpdateRecords Action Guide](update-records-action.md) |
| Return | generate transactions to return a domain to Unstoppable Domains and receive a refund | [Return Action Guide](return-action.md) |
| SetReverseResolution | generate transactions to configure reverse resolution records for a domain | [SetReverseResolution Action Guide](set-reverse-resolution-action.md) |
| Transfer | generate transactions to transfer a domain name | [Transfer Action Guide](transfer-action.md) |
| Bridge | generate transactions to bridge domains between Ethereum and Polygon | [Bridge Action Guide](bridge-action.md) |

## Step 2: Sign the Transaction

## Step 3: Submit Domain Action Signature

The Domain Actions API provides a [Submit Domain Action Signature](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostActionSign) endpoint to submit all the necessary signatures and transaction hashes after signing the transaction.

## Step 4: Track the Transaction Status

There are several ways to track the status of transactions submitted to the Domain Actions API, detailed in the table below.

| Endpoint | Description | Integration Guides |
| - | - | - |
| Get Domain Action | retrieve the details of a domain action request with its domain action ID | [Get Domain Action Guide](get-domain-action.md) |
| Get Domain Actions | retrieve the domain actions performed by a user, domain or owner address | [Get Domain Action Guide](get-domain-action.md) |

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
