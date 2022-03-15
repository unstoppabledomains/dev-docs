---
description: >-
  This guide covers the process for configuring the Reseller account to claim
  paid domains using the redirect URL payment processing flow.
---

# Redirect URL Payments Guide

The Redirect URL payment flow is the easiest payment process to implement for resellers. Resellers do not have to setup native paid domain flows, using Stripe or Coinbase, and can instead just generate a URL to redirect payments to Unstoppable Domains to be processed.

Basically, in this case, the reseller acts like an "affiliate". Resellers redirect their users to the UD website where users can purchase domains and the reseller receives a commission (% of the sale).

## Step 1: Configure `GET` Parameters with Wallet Address

Implement the redirect URL with signed GET parameters filled with the user's wallet address. Redirect url should include `Resellers#strictName` and `domain name`.

### Request Parameter

Since the request is **GET**, the parameters should be URL-encoded and passed as query parameters.

```typescript
// Query parameters that should be included in the signature
type MessageToSign = {
  timestamp: number;
	resellerName: string;
  records: Record<string, string>;
}

// Query parameters that shoud NOT be included in signature
type AdditionalParameters = {
	ref: string;
	searchTerm: string;
}
```

### **Request URL**

The request URL is likely to change. In addition to the message parameters, the URL should contain signature=\<HMAC signature string> parameter.

```bash
curl -X GET https://unstoppabledomains.com/search?ref=ffsdd4234&searchTerm=buyadomain.crypto&timestamp=1638960015&resellerName=blockchaincom&records=%7B%22crypto.ETH.address%22%3A%220xfa4E1b1095164BcDCA057671E1867369E5F51B92%22%2C%22crypto.BTC.address%22%3A%22bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh%22%2C%22crypto.USDT.version.ERC20.adress%22%3A%220xfa4E1b1095164BcDCA057671E1867369E5F51B92%22%2C%22crypto.DAI.address%22%3A%220xfa4E1b1095164BcDCA057671E1867369E5F51B92%22%2C%22crypto.EOS.address%22%3A%22playuplandme%22%7D&signature=8ab46b082c1b256c2e92347c8d90c11c923bf7b0e802d13b53bcecb28d6b6269 
```

{% hint style="info" %}
The searchTerm and ref parameters are NOT included in the signature.
{% endhint %}

{% hint style="danger" %}
The records parameter should contain URL encoded and minified JSON with domains records according to the standard outlined in the [Records Reference](../../domain-registry-essentials/records-reference.md).
{% endhint %}

## **Step 2: Create HMAC Authorization**

The authorization is necessary to help prevent attacks that may substitute insecure URL parameters.

1. Client (wallet) or backend prepares **MessageToSign** and **AdditionalParameters** parameters
2. Client (wallet) sends the **MessageToSign** and **AdditionalParameters** parameters to backend
   * (Alternative) Backend prepares **MessageToSign** and **AdditionalParameters** parameters
3. Backend validates correctness of **MessageToSign** parameters
   * Check validity of records addresses
   * Check validity of owner field
4. Backend sorts **MessageToSign** parameters by keys in alphabetical order recursively (including _**records**_ field).
   * For javascript, developers may use the deep-sort-object package
5. Backend produces a HMAC-SHA256 signature of **MessageToSign** request parameters
6. Client forms a URL using **MessageToSign** and **AdditionalParameters** parameters + _**signature**_
7. Redirect URL can be opened and processed by UD backend

## Step 3: Verify the Message

To verify the message, the server has to recreate the hmac using the same key:

```typescript
import sha256 from 'crypto-js/sha256'
import hmacsha256 from 'crypto-js/hmac-sha256'
import deepSortObject from 'deep-sort-object';

type MessageToSign = {
  timestamp: number;
	resellerName: string;
  records: Record<string, string>;
}

// backend forms the HMAC authorization
function signMessage(message: MessageToSign): string {
	const secret = 'pre-shared-secret'; // pre-shared secret
  // to ensure hash consistency between parties 
  // message should be sorted in aplhabetical order
  const sortedMessage = deepSortObject(message); 
	const hash = hmacsha256(JSON.stringify(sortedMessage), secret);
	const signature = hash.toString();
	return signature;
}

// verification on the reseller API side
function verify(message: MessageToSign, expectedSignature: string): boolean {
	const serverSecret = 'pre-shared-secret'; // the server has its own copy of the pre-shared secret
  const sortedMessage = deepSortObject(message);
	const serverHash = hmacsha256(JSON.stringify(sortedMessage), serverSecret);
	const signature = serverHash.toString(); // perform the same hashing algorith
	return expectedSignature === signature // true if hashes match, false otherwise
}

// Full verification process
const message: MessageToSign = {...}; // some code to create the request message from user input
const signature = signMessage(message); // happens on the reseller backend
const verified = verify(message, signature); // happens on Unstoppable backend
```

{% hint style="info" %}
In JavaScript, hmac signatures can be created using the crypto-js library. Similar cryptography libraries can be used for other languages.&#x20;
{% endhint %}

### Example Request

JSON Records Example:

```json
{"crypto.ETH.address":"0xfa4E1b1095164BcDCA057671E1867369E5F51B92","crypto.BTC.address":"bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh","crypto.USDT.version.ERC20.adress":"0xfa4E1b1095164BcDCA057671E1867369E5F51B92","crypto.DAI.address":"0xfa4E1b1095164BcDCA057671E1867369E5F51B92","crypto.EOS.address":"playuplandme"}
```

JSON records example (URL encoded):

```
%7B%22crypto.ETH.address%22%3A%220xfa4E1b1095164BcDCA057671E1867369E5F51B92%22%2C%22crypto.BTC.address%22%3A%22bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh%22%2C%22crypto.USDT.version.ERC20.adress%22%3A%220xfa4E1b1095164BcDCA057671E1867369E5F51B92%22%2C%22crypto.DAI.address%22%3A%220xfa4E1b1095164BcDCA057671E1867369E5F51B92%22%2C%22crypto.EOS.address%22%3A%22playuplandme%22%7D
```

{% hint style="success" %}
**Congratulations!** You just configured your Reseller account to process payments using a Redirect URL.
{% endhint %}
