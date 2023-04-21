---
title: Redirect URL Payments Guide | Unstoppable Domains Developer Portal
description: This guide covers configuring the Partner account to mint paid domains using the redirect URL payment processing flow.
redirectFrom:
  - /partner/partner-integration-guides/redirect-url-payments/
  - /partner/partner-integration-guides/redirect-url-payments-with-records/
---

# Redirect URL Payments

The Redirect URL payment flow is the most straightforward payment process to implement for Partners. You do not have to set up native paid domain flows in your application and can generate a URL to redirect payments to Unstoppable Domains to be processed.

In this case, the Partner acts like an "affiliate" where they redirect their users to the Unstoppable Domains website to purchase domains and receive a commission from the sale.

## Step 1: Retrieve Your UD Referral Code

Before integrating Redirect URL payments, you must acquire a referral code from Unstoppable Domains, which helps track and reward the traffic Partners bring and share sales revenue. Please email <partnerengineering@unstoppabledomains.com> to request a referral code for your integration.

## Step 2: Search for Available Domain Names (Optional)

Unstoppable Domains provides the [Get Domains Suggestions](../quickstart/search-domains.md) and [Domain Name Availability](./check-domains-availability.md) endpoints to check for domain names available for purchase.

## Step 3: Redirect Users to the Unstoppable Domains Website

The Unstoppable Domains website accepts the `ref` and `searchTerm` fields as query parameters for processing Redirect URL payments. After preparing your parameter values, construct the payment URL and redirect the user to it in their browser:

| Name       | Type   | Mandatory | Description                                      |
| ---------- | ------ | --------- | ------------------------------------------------ |
| ref        | STRING | YES       | The Partner's referral code for tracking traffic |
| searchTerm | STRING | NO        | The domain name the user wants to purchase       |

Sandbox Environment:

```bash
https://ud-sandbox.com/search?ref={UD_REFERRAL_CODE}&searchTerm={DOMAIN_TO_PURCHASE}
```

Production Environment:

```bash
https://unstoppabledomains.com/search?ref={UD_REFERRAL_CODE}&searchTerm={DOMAIN_TO_PURCHASE}
```

## Example

Here is an example payment URL for the `buyadomain.crypto` domain name and `unstoppable` referral code:

```bash
https://ud-sandbox.com/search?searchTerm=buyadomain.crypto&ref=unstoppable
```

Here is an example payment URL that only uses the Partner's referral code:

```bash
https://ud-sandbox.com/search?ref=unstoppable
```

:::success Congratulations!
You just configured your Partner account to process payments using a Redirect URL.
:::

<embed src="/snippets/_discord.md" />

<!-- ---
title: Redirect URL Payments With Auto-Configured Crypto Records Guide | UD Developer Portal
description: This guide covers configuring the Partner account to mint paid domains and automatically pre-fill resolution records using the redirect URL payment processing flow.
--- -->

# Redirect URL Payments With Auto-Configured Crypto Records Guide

The Redirect URL payment flow allows you to provide resolution records that should be automatically configured to the domain name purchased by the user after minting.

This payment flow is built upon the original [Redirect URL payment](#redirect-url-payments-guide), where a partner redirects a user to purchase a domain and be rewarded with the added functionality to configure resolution records to the domain name immediately after minting.

## Step 1: Prepare Your Payment URL

Follow the [Redirect URL Payments](#redirect-url-payments-guide) guide to prepare a payment URL for the user's purchase with your [referral code](#step-1-retrieve-your-ud-referral-code) and their desired domain (optional).

Sandbox Environment:

```bash
https://ud-sandbox.com/search?ref={UD_REFERRAL_CODE}&searchTerm={DOMAIN_TO_PURCHASE}
```

Production Environment:

```bash
https://unstoppabledomains.com/search?ref={UD_REFERRAL_CODE}&searchTerm={DOMAIN_TO_PURCHASE}
```

## Step 2: Prepare Query Parameters

The Unstoppable Domains website requires additional fields to the `ref` and `searchTerm` query parameters to pre-fill resolution records after minting using a payment URL:

| Name       | Type   | Mandatory | Description                                                                                                                                                                                      |
| ---------- | ------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| timestamp  | NUMBER | YES       | The epoch timestamp in milliseconds when the payment URL is created                                                                                                                              |
| strictName | STRING | YES       | The Partner's `resellerID` [gotten from their Partner account](../quickstart/retrieve-an-api-key.md#step-1-locate-your-reseller-id)                                                              |
| records    | OBJECT | YES       | A key-value pair of resolution records the domain should be configured to. See the [Records Reference](/developer-toolkit/reference/records-reference.md) documentation for supported key values |
| signature  | STRING | YES       | A HMAC-SHA256 hash of the query parameters for the order security                                                                                                                                |

:::info
There is an 8 hours window from when you generate the payment URL with the given timestamp before UD considers it invalid.
:::

## Step 3: Generate the Order Signature

The `signature` parameter is created by the partner and is used by Unstoppable Domains to verify the data integrity and authenticity of the order. You should generate the signature via the HMAC-SHA256 algorithm, and this authorization is necessary to help prevent attacks that may substitute insecure URL parameters.

The message object to sign is:

```javascript
{
  records, strictName, timestamp;
}
```

To ensure consistency, the message object should be **sorted recursively by its keys** before generating the HMAC-SHA256 hash and signed using the `Secret API Token` provided in your Partner account. In Javascript, you can use a library like [deep-sort-object](https://www.npmjs.com/package/deep-sort-object).

The code snippet below shows how to generate the `signature` parameter:

```javascript
// built-in node crypto lib
const crypto = require("crypto");
// third-party lib to sort objects
const sortObject = require("deep-sort-object");

// end-user records can include crypto records, ipfs hashes, etc
const records = {
  "crypto.ETH.address": "0xfa4E1b1095164BcDCA057671E1867369E5F51B92",
  "crypto.BTC.address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
};
// reseller id
const strictName = "testReseller";
// UNIX epoch in milliseconds
const timestamp = new Date().getTime();

// form the message to sign
// note that the object has to be sorted for consistency; we use deep-sort-object to verify signatures
// you can use a different approach to sort records, but using the same library to sort ensures that the signatures will match
const message = JSON.stringify(sortObject({ records, strictName, timestamp }));

// The Secret API Token provided by UD in your Partner account
const signatureKey = "someKey";
// create the hmac-sha256 digest
const signature = crypto
  .createHmac("sha256", signatureKey)
  .update(message)
  .digest("hex");
// this is added to the signature parameter in the redirect URL to pass resolution records to UD
console.log(signature);
```

:::info
You can use similar cryptography libraries for other languages and [online tools](https://www.devglan.com/online-tools/hmac-sha256-online) to generate HMAC-SHA256 signatures.
:::

## Step 4: Redirect Users to the Unstoppable Domains Website

After you have generated the order signature, add it to the payment URL and redirect the user to it like so:

Sandbox Environment:

```bash
https://ud-sandbox.com/search?ref={UD_REFERRAL_CODE}&searchTerm={DOMAIN_TO_PURCHASE}&timestamp={CURRENT_TIMESTAMP}&strictName={PARTNER_RESELLERID}&records={CRYPTO_RECORDS_TO_PREFILL}&signature={GENERATED_ORDER_SIGNATURE}
```

Production Environment:

```bash
https://unstoppabledomains.com/search?ref={UD_REFERRAL_CODE}&searchTerm={DOMAIN_TO_PURCHASE}&timestamp={CURRENT_TIMESTAMP}&strictName={PARTNER_RESELLERID}&records={CRYPTO_RECORDS_TO_PREFILL}&signature={GENERATED_ORDER_SIGNATURE}
```

:::info
The `timestamp` parameter value should be the same as the one signed in the order signature. The payment URL will be considered invalid 8 hours after you generate the timestamp.
:::

## Step 5: Test the Integration

You can use Unstoppable Domains [Sandbox Environment](../quickstart/retrieve-an-api-key.md#set-up-ud-sandbox-for-testing-guide) to test the redirect URL payments integration.

1. Navigate to the Sandbox Environment with the paid domains flow query parameters appended to the URL.
2. Purchase a domain. You can use `4242 4242 4242 4242` as the credit card number to checkout for free.
3. Proceed to mint the domain. If you are asked to verify records to pre-fill when minting the domain, then the redirect URL with resolution records integration is working successfully.

## Example

Here is an example payment URL with the following parameters:

| Parameter                 | Value                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Partner Referral Code     | unstoppable                                                                                                                             |
| Domain Name               | buyadomain.crypto                                                                                                                       |
| Order Timestamp           | 1641586875148                                                                                                                           |
| Partner Reseller ID       | testReseller                                                                                                                            |
| Predefined Domain Records | `{"crypto.ETH.address":"0xfa4E1b1095164BcDCA057671E1867369E5F51B92","crypto.BTC.address":"bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"}` |
| Signature Key             | someKey                                                                                                                                 |
| Order Signature           | 064436d88c9563e6e948fe9576f2a8c0c88317c045628eac5b8f74aea68eeee4                                                                        |

```bash
https://ud-sandbox.com/search?ref=unstoppable&searchTerm=buyadomain.crypto&timestamp=1641586875148&strictName=testReseller&records=%7B%22crypto.ETH.address%22%3A%220xfa4E1b1095164BcDCA057671E1867369E5F51B92%22%2C%22crypto.BTC.address%22%3A%22bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh%22%7D&signature=064436d88c9563e6e948fe9576f2a8c0c88317c045628eac5b8f74aea68eeee4
```

:::success Congratulations!
You just configured your Partner account to process payments and automatically configure resolution records using a Redirect URL.
:::

<embed src="/snippets/_discord.md" />
