---
title: Coinbase Payments Guide
description: This guide covers the process for configuring the Reseller account to accept Coinbase payments. Payout information can be tracked in the UD Reseller Dashboard.
---

# Coinbase Payments Guide

:::warning
The Coinbase feature has been temporarily disabled. Resellers will be notified when support for this feature has resumed.
:::

Unstoppable Domains supports [Coinbase](https://developers.coinbase.com) payments. Coinbase allows you to accept other forms of payments from your customers, such as bitcoin, litecoin, and other crypto currencies.

The following diagram shows the general process that occurs between Coinbase and Unstoppable Domains, after a customer buys a domain.

<figure>

![Payment flow for pre-paid domain purchases, such as Coinbase](/images/paid-domains-claiming-prepayment.png '#width=80%;')
	
<figcaption>Payment flow for pre-paid domain purchases, such as Coinbase</figcaption>
</figure>

## Step 1: Configure Coinbase for Unstoppable Domains

* To begin accepting crypto payments from customers, UD resellers must ensure that Coinbase integration is configured correctly. 
* A wallet transaction should make a ‘Buy Domain’ call with the payments field defined to **“coinbase.”** 
* UD will respond with the coinbase chargeID which can be used with the Coinbase API.

The example below shows how to properly configure the wallet information to process a coinbase transaction:

Example: [https://api.commerce.coinbase.com/charges/BDCL6NRV](https://api.commerce.coinbase.com/charges/BDCL6NRV)

```
{"data":{"addresses":
{"ethereum":"0x868d6f546fbe306fda3b2b34df3fca35c8fe8c33","usdc":"0x868d6f546fbe306fda3b2b34df3fca35c8fe8c33","litecoin":"LhqK9aSgGYZQGKHZ93GEetQzZozpq5SQSG","bitcoincash":"qr3u0efzpz9nkg5u8acc2e24n496jcd57c8t0ljmdf","bitcoin":"17xbgqD9yhUwovkNTwffqd7UcejDjYfsp7"},"code":"BDCL6NRV","created_at":"2019-10-02T14:38:22Z","description":"Purchase for 1 domains","exchange_rates":
{"BCH-USD":"222.585","BTC-USD":"8220.74","ETH-USD":"175.89","LTC-USD":"55.425","USDC-USD":"1.0"},"expires_at":"2019-10-02T15:38:22Z","hosted_url":"https://commerce.coinbase.com/charges/BDCL6NRV","id":"cff51903-9237-49eb-88c3-8878d2360de6","name":"Unstoppable Domains Purchase","organization_name":"Unstoppable Domains Inc.","payments":[],"pricing":
{"local":{"amount":"10.00","currency":"USD"},"ethereum":{"amount":"0.056854000","currency":"ETH"},"usdc":{"amount":"10.000000","currency":"USDC"},"litecoin":{"amount":"0.18042400","currency":"LTC"},"bitcoincash":{"amount":"0.04492666","currency":"BCH"},"bitcoin":{"amount":"0.00121644","currency":"BTC"}},"pricing_type":"fixed_price","resource":"charge","support_email":"support@unstoppabledomains.com","timeline":
[{"status":"NEW","time":"2019-10-02T14:38:23Z"},{"status":"EXPIRED","time":"2019-10-02T15:38:29Z"}]},"warnings":["Missing X-CC-Version header; serving latest API version (2018-03-22)"]}
```

## Step 2: Track the CoinBase Transaction

* To track whether the customer’s payment was processed successfully, the developer can use the [Order Number API endpoint](../reseller-api-endpoints.md).

### Other CoinBase Considerations

The chargeID token is unique to each customer order, which is a secure method that allows UD to easily track your customer’s payments through the ‘Buy a Domain’ API endpoint. Please see the documentation for [Crypto Payments using Coinbase](https://commerce.coinbase.com/docs/#cryptocurrency-payments) for more information.

To begin accepting crypto payments from your customers, Coinbase offers several methods of integrating their services into your application or website such as payment buttons, hosted pages, and shopping cart plugins. Please see the documentation for [Coinbase Commerce API](https://commerce.coinbase.com/docs/#not-a-developer) for more information.

## Step 3: Receive CoinBase Payouts

* Coinbase payouts are manually processed by Unstoppable Domains within 5 business days of receiving the payout request and only after the reseller has earned at least $600 in Coinbase sales. 
* Resellers can request a Coinbase payout in the UD Reseller Dashboard by clicking on the “Request Payout” button.

:::info
The “Request Payout” button is grayed out and automatically appears after the Reseller account has earned a minimum of $600 in Coinbase sales.
:::

<figure>

![Button location for requesting a manual payout of Coinbase sales](/images/screen-shot-2021-07-12-at-3.12.14-pm.png '#width=80%;')
	
<figcaption>Button location for requesting a manual payout of Coinbase sales</figcaption>
</figure>

* Resellers can receive Coinbase payouts via Stripe or Ethereum. This information is discussed and setup with the UD Finance Team before processing the initial CoinBase payout.

:::success Congratulations!
You just setup your Reseller account to accept Coinbase payments.
:::
