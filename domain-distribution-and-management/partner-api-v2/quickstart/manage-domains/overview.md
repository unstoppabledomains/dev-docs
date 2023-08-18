---
title: Domain Actions API (Legacy) Overview | UD Developer Portal
description: This page provides a high-level overview of the Domain Actions API hosted by Unstoppable Domains.
redirectFrom:
  - /partner/domain-actions-guides/overview/
  - /domain-distribution-and-management/quickstart/manage-domains/overview/
---

# Domain Actions API (Legacy) Overview

The Domain Actions API (Legacy) from Unstoppable Domains is designed to make it easier for Partners to interact with domains on the blockchain. It provides a convenient way to generate the transactions needed to perform various actions, such as updating domain records, configuring reverse resolution, or transferring domain ownership.

This allows Partners to quickly and efficiently perform these actions with a single API request without worrying about the complex details of forming transactions on the client side. For more information about the endpoints, please consult the [Partner API v2 (Legacy) endpoint specification](https://docs.unstoppabledomains.com/openapi/partner/v2/).

The diagram below illustrates the general process between a Partner and Unstoppable Domains when utilizing the Domain Actions API.

<figure>

![Domain Actions API success flow](/images/domain-action-api-flow.png "#width=80%;")

<figcaption>Domain Actions API success flow</figcaption>
</figure>

## Gas Compensation Policies

There are three gas compensation policies that Partners can choose from when creating a domain action draft depending on how they want to make users send and pay for transaction fees.

- `AlwaysCompensate`: This policy always assumes the use of [meta transactions](/manage-domains/delegating-transactions.md). It allows the user pay for transactions in USD via [Stripe payment intent](https://stripe.com/docs/payments/payment-intents), rather than in ETH.
- `CompensateFree`: This policy allows Unstoppable Domains to pay the transaction fees for a user on the Polygon network.
- `NeverCompensate`: This policy should be used if a client wants to make the user send and pay for the transactions themselves and guarantees maximum privacy.

:::info
You can only use one gas compensation policy per domain action request based on the user experience you want to provide to your users.
:::

## Step 1: Create a Domain Action Draft

There are several functionalities offered by the Domain Actions API to interact with your domains, detailed in the chart below.

| Action Name          | Description                                                                          | Integration Guides                                                               |
| -------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| UpdateRecords        | generate transactions to update resolution records for a domain                      | [UpdateRecords Action Guide](../manage-domains/update-records.md)                |
| Return               | generate transactions to return a domain to Unstoppable Domains and receive a refund | [Return Action Guide](../manage-domains/return-domains.md)                       |
| SetReverseResolution | generate transactions to configure reverse resolution records for a domain           | [SetReverseResolution Action Guide](../manage-domains/set-reverse-resolution.md) |
| Transfer             | generate transactions to transfer a domain name                                      | [Transfer Action Guide](../manage-domains/transfer.md)                           |
| Deposit or Withdraw  | generate transactions to bridge domains from Ethereum to Polygon and vice versa      | [Deposit or Withdraw Action Guide](../manage-domains/deposit-or-withdraw.md)     |

## Step 2: Sign the Transaction

When working with a `Meta` transaction, you must sign the `tx.messageToSign` obtained from the Domain Actions API using the `ethers.js` library or a tool such as [Etherscan](https://etherscan.io/verifiedSignatures), [Polygonscan](https://polygonscan.com/verifiedSignatures), or [Mumbai Polygonscan](https://mumbai.polygonscan.com/verifiedSignatures). After signing the message, you must send the signature to the Domain Actions API.

For a `Regular` transaction, the process is slightly different. After signing the message, you must send it to the transaction pool. Once the transaction has been added to the pool, you send the `transaction hash` to the Domain Actions API.

<figure>

![Signing messages on Etherscan](/images/etherscan-sign-message.png "#width=40%;")

<figcaption>Signing messages on Etherscan</figcaption>
</figure>

## Step 3: Submit Domain Action Signature

The Domain Actions API (legacy) has an endpoint that allows users to submit the signatures and transaction hashes for their signed transactions. This allows Unstoppable Domains to verify the signatures and confirm that the necessary fees have been paid.

## Step 4: Track the Transaction Status

There are several ways to track the status of transactions submitted to the Domain Actions API (Legacy), detailed in the table below.

| Endpoint           | Description                                                               | Integration Guides                                                                                      |
| ------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Get Domain Action  | retrieve the details of a domain action request with its domain action ID | [Get Domain Action Guide](https://docs.unstoppabledomains.com/openapi/partner/v2/#operation/GetAction)  |
| Get Domain Actions | retrieve the domain actions performed by a user, domain or owner address  | [Get Domain Action Guide](https://docs.unstoppabledomains.com/openapi/partner/v2/#operation/GetActions) |

## Fork Our Postman Collection

Unstoppable Domains offers a Postman collection that you can easily import into your workspace to quickly interact with the Partner and Domain Actions API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9?action=collection%2Ffork&collection-url=entityId%3D19507736-d4edfdfc-0eb1-4def-bea7-d7bcbabf3aa9%26entityType%3Dcollection%26workspaceId%3D6762865c-b510-4216-ba7f-45cd07f164c7#?env%5BSandbox%20-%20Partner%20API%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6Imh0dHBzOi8vYXBpLnVkLXNhbmRib3guY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwczovL2FwaS51ZC1zYW5kYm94LmNvbSIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJodHRwX2F1dGgiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOmZhbHNlLCJ0eXBlIjoic2VjcmV0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6ImFwaV9rZXkiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJzZWNyZXQiLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjJ9LHsia2V5IjoicmVzZWxsZXJfaWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6InN0cmlwZV90ZXN0X2tleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6InNlY3JldCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NH1d)



<embed src="/snippets/_partner-survey-embed.md" />
