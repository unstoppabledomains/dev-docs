---
description: >-
  This page details the process for configuring payment methods for Stripe and
  Coinbase.
---

# Setup Payment Methods

## Locate Your Reseller ID

To integrate payment methods for Stripe and Coinbase for your customers, you must know your resellerID. This information can be found in your [UD Reseller Dashboard](https://unstoppabledomains.com/resellers).

![Location of ResellerID in UD Reseller Dashboard](../.gitbook/assets/screen-shot-2021-07-12-at-2.00.26-pm.png)

![](../.gitbook/assets/5.png)

## Stripe Setup \(for Credit Cards, PayPal, ApplePay, etc.\)

Unstoppable Domains supports [Stripe](http://stripe.com/) payments. Stripe is a payment provider that allows you to accept credit cards, PayPal, and Apple Pay from customers. This is a recommended and **secure** payment method for resellers that mostly use client side applications.

The following diagram shows the general process that takes place between Stripe and Unstoppable Domains, after a customer buys a domain.

![Payment flow for Stripe Customer Orders](../.gitbook/assets/6.png)

### Create a Stripe Account

You must [Create a Stripe Account](https://dashboard.stripe.com/register?redirect=%2Fsettings%2Faccount%2F) in advance before you connect it to your Unstoppable Domains reseller account.

### Connect Stripe to Unstoppable Domains

There is a stripe connect button in the [UD Reseller Dashboard](https://unstoppabledomains.com/resellers) for live and test connections. At UD, we use a different stripe API key for live and test orders. These Stripe API keys are public keys and they are safe to reveal.

* pk\_test\_\* \(reseller-test-\* namespace\)
* pk\_live\_\* \(all other domains\)

The **Stripe Live Connect Button** is how you get paid by Unstoppable Domains when your customers make a purchase; it uses real money and generates real transactions. The **Stripe Test Connect Button** does not involve real money and uses test credentials to integrate.

![Strive Live and Stripe Test payment setup areas](../.gitbook/assets/screen-shot-2021-07-12-at-2.04.09-pm.png)

![](../.gitbook/assets/8.png)![](../.gitbook/assets/9.png)

After clicking the Stripe Live or Stripe Test **Connect Button**, you will be walked through the Stripe Integrations form.

![Stripe integrations form to connect your Stripe and UD accounts](../.gitbook/assets/10.png)

Once your Stripe and Unstoppable Domains accounts have been connected, your Stripe API key will appear directly in your Stripe Dashboard.

### Other Stripe Considerations

To begin accepting payments from your customers, Stripe requires you to embed their form into your application or website. Please see the documentation for [Accepting Payments using Stripe](https://stripe.com/docs/payments/accept-a-payment?platform=web) for more information.

Stripe generates a token ID for each transaction, which is later used by UD to process the ‘Buy Domain’ API endpoint. This keeps Unstoppable Domains from needing to store your customer’s sensitive data. Please see the documentation for [Accepting Payments using Stripe Elements](https://stripe.com/docs/payments/accept-a-payment-charges#web) for more information.

## CoinBase Setup \(for Bitcoin and other crypto currencies\)

Unstoppable Domains supports [Coinbase](https://developers.coinbase.com/) payments. Coinbase allows you to accept other forms of payments from your customers, such as bitcoin, litecoin, and other crypto currencies.

The following diagram shows the general process that occurs between CoinBase and Unstoppable Domains, after a customer buys a domain.

![Payment flow for Coinbase Customer Orders](../.gitbook/assets/11.png)

### Configure Coinbase for Unstoppable Domains

To begin accepting crypto payments from customers, UD resellers must ensure that Coinbase integration is configured correctly. A wallet transaction should make a ‘Buy Domain’ call with the payments field defined to **“coinbase.”** UD will respond with the coinbase chargeID which can be used with the Coinbase API.

The example below shows how to properly configure the wallet information to process a coinbase transaction:

Example: [https://api.commerce.coinbase.com/charges/BDCL6NRV](https://api.commerce.coinbase.com/charges/BDCL6NRV)

```text
{"data":{"addresses":
{"ethereum":"0x868d6f546fbe306fda3b2b34df3fca35c8fe8c33","usdc":"0x868d6f546fbe306fda3b2b34df3fca35c8fe8c33","litecoin":"LhqK9aSgGYZQGKHZ93GEetQzZozpq5SQSG","bitcoincash":"qr3u0efzpz9nkg5u8acc2e24n496jcd57c8t0ljmdf","bitcoin":"17xbgqD9yhUwovkNTwffqd7UcejDjYfsp7"},"code":"BDCL6NRV","created_at":"2019-10-02T14:38:22Z","description":"Purchase for 1 domains","exchange_rates":
{"BCH-USD":"222.585","BTC-USD":"8220.74","ETH-USD":"175.89","LTC-USD":"55.425","USDC-USD":"1.0"},"expires_at":"2019-10-02T15:38:22Z","hosted_url":"https://commerce.coinbase.com/charges/BDCL6NRV","id":"cff51903-9237-49eb-88c3-8878d2360de6","name":"Unstoppable Domains Purchase","organization_name":"Unstoppable Domains Inc.","payments":[],"pricing":
{"local":{"amount":"10.00","currency":"USD"},"ethereum":{"amount":"0.056854000","currency":"ETH"},"usdc":{"amount":"10.000000","currency":"USDC"},"litecoin":{"amount":"0.18042400","currency":"LTC"},"bitcoincash":{"amount":"0.04492666","currency":"BCH"},"bitcoin":{"amount":"0.00121644","currency":"BTC"}},"pricing_type":"fixed_price","resource":"charge","support_email":"support@unstoppabledomains.com","timeline":
[{"status":"NEW","time":"2019-10-02T14:38:23Z"},{"status":"EXPIRED","time":"2019-10-02T15:38:29Z"}]},"warnings":["Missing X-CC-Version header; serving latest API version (2018-03-22)"]}
```

### Tracking the CoinBase Transaction

To track whether the customer’s payment was processed successfully, the developer can use the Order Status API endpoint.

### Other CoinBase Considerations

The chargeID token is unique to each customer order, which is a secure method that allows UD to easily track your customer’s payments through the ‘Buy a Domain’ API endpoint. Please see the documentation for [Crypto Payments using CoinBase](https://commerce.coinbase.com/docs/#cryptocurrency-payments) for more information.

To begin accepting crypto payments from your customers, Coinbase offers several methods of integrating their services into your application or website such as payment buttons, hosted pages, and shopping cart plugins. Please see the documentation for [CoinBase Commerce API](https://commerce.coinbase.com/docs/#not-a-developer) for more information.

