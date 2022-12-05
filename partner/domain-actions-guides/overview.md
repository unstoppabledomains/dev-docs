---
title: Domain Actions API Overview | UD Developer Portal
description: This page provides a high-level overview of the Domain Actions API hosted by Unstoppable Domains.
---

# Domain Actions API Overview

The Domain Actions API from Unstoppable Domains is designed to make it easier for Partners to interact with domains on the blockchain. It provides a convenient way to generate the transactions needed to perform various actions, such as updating domain records, configuring reverse resolution, or transferring domain ownership.

This allows Partners to quickly and efficiently perform these actions with a single API request without worrying about the complex details of forming transactions on the client side.

The diagram below illustrates the general process between a Partner and Unstoppable Domains when utilizing the Domain Actions API.

<figure>

![Domain action API success flow](/images/domain-action-api-flow.png '#width=80%;')

<figcaption>Domain action API success flow</figcaption>
</figure>

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

The Domain Actions API has an endpoint called [Submit Domain Action Signature](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostActionSign) that allows users to submit the signatures and transaction hashes for their signed transactions. This allows Unstoppable Domains to verify the signatures and confirm that the necessary fees have been paid.

## Step 4: Track the Transaction Status

There are several ways to track the status of transactions submitted to the Domain Actions API, detailed in the table below.

| Endpoint | Description | Integration Guides |
| - | - | - |
| Get Domain Action | retrieve the details of a domain action request with its domain action ID | [Get Domain Action Guide](get-domain-action.md) |
| Get Domain Actions | retrieve the domain actions performed by a user, domain or owner address | [Get Domain Action Guide](get-domain-action.md) |

<embed src="/snippets/_discord.md" />

<embed src="/snippets/_partner-survey-embed.md" />
