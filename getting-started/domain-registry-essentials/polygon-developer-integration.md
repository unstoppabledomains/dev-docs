---
description: >-
  This page outlines the steps developers will take to integrate with Polygon
  and support Unstoppable domains on Polygon L2 network.
---

# Polygon Developer Integration

There will be minimal changes to Unstoppable Domains’ resolution libraries and resolution service with the rollout of our Layer 2 solution on Polygon. Over 90% of the library and resolution service will be similar to what we provide for Ethereum. However, for UD developers, all of the integrated "apps" will need to update their resolution libraries or API endpoints in order to be able to read and resolve NFT domains on Polygon.

## Polygon Updates

Polygon apps will resolve domains by reading [UNS Smart Contracts](../domain-registry-essentials/uns-smart-contracts.md#interfaces) housed on Polygon. Developers can also go directly to the [Smart Contracts Repo](https://github.com/unstoppabledomains/uns/blob/main/Contracts.md) to help with integration.

To further assist with L2, the Polygon team will be adding Unstoppable Domains resolution to their API and Matic.js library. This will make it easier, for example, for Polygon apps to use domains for payments in wallets and login with dapps.

## Resolution Library Updates

Our Layer 2 resolution libraries will require a few configuration changes to allow the libraries to read from Polygon. There are a few small changes to function/method calls and one brand new method which provides additional resolution information.&#x20;

### Method Changes and Updates

* **gettokensownedby** has been deprecated and is no longer supported in L2.
* **getallrecords** has changed structurally but does not require a change to the function or method call; the external interface remains the same, but the method will not be as decentralized because it uses our resolution service instead of querying the blockchain.

### New Supported Method

**Resolution#getLocations(\[domain1, domain2, domain3])** is a new method array that returns information for an unlimited number of domains; it only supports UNS and CNS due to Zilliqa technical limits.&#x20;

This method returns a list of domain locations:

* Blockchain Provider URL (if possible otherwise null)
* RegistryAddress&#x20;
* ResolverAddress&#x20;
* [Network ID](https://chainlist.org)&#x20;
* Blockchain ([Coin symbol](https://github.com/satoshilabs/slips/blob/master/slip-0044.md))&#x20;
* Owner address

### List of Network IDs

This table displays the network IDs used by Unstoppable Domains in the UNS config file.

| Network ID | Description     |
| ---------- | --------------- |
| 1          | mainnet         |
| 4          | Rinkeby testnet |
| 137        | Polygon mainnet |
| 80001      | Polygon testnet |

## Resolution Service Updates

Unstoppable Domains’ Polygon resolution service will have the same specifications as our [existing resolution service](http://resolve.unstoppabledomains.com/api-docs/), but there will be a few metadata changes to the service.

### /status route

Overall changes for **/status route**

* Return [Network ID](https://chainlist.org) instead of _network_&#x20;
* Move all fields under “blockchain” namespace

{% tabs %}
{% tab title="NEW Response" %}
```javascript
{
   "blockchain":{
      "ETH":{
         "latestNetworkBlock":13100548,
         "latestMirroredBlock":12674000,
         "networkId":1
      },
      "ZIL":{
         "latestNetworkBlock":1385207,
         "latestMirroredBlock":1385207,
         "networkId":1
      }
   }
}
```
{% endtab %}

{% tab title="OLD response" %}
```javascript
{
   "ETH":{
      "latestNetworkBlock":13230550,
      "latestMirroredBlock":13230530,
      "network":"mainnet"
   },
   "ZIL":{
      "latestNetworkBlock":1433099,
      "latestMirroredBlock":1433091,
      "network":"mainnet"
   }
}
```
{% endtab %}
{% endtabs %}

### /domains and /domains/\<domain name> routes

Overall changes for **/domain and /domains\<domain name> routes**

* Return [Network ID](https://chainlist.org) instead of location field
* Add blockchain field to store data about Layer 1 and Layer 2

{% tabs %}
{% tab title="NEW response" %}
```javascript
{
  "records": {
    "crypto.BTC.address": "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y",
    "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
  },
   "meta": {
    "networkId":  1,
    "blockchain": "ETH",
    "domain": "brad.crypto",
    "owner": "0x8aad44321a86b170879d7a244c1e8d360c99dda8",
    "resolver": "0xb66dce2da6afaaa98f2013446dbcb0f4b0ab2842",
    "registry": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe"
  }
}
```
{% endtab %}

{% tab title="OLD Response" %}
```javascript
{
  "records": {
    "crypto.BTC.address": "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y",
    "crypto.ETH.address": "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
  },
   "meta": {
    "location": "CNS",
    "domain": "brad.crypto",
    "owner": "0x8aad44321a86b170879d7a244c1e8d360c99dda8",
    "resolver": "0xb66dce2da6afaaa98f2013446dbcb0f4b0ab2842",
    "registry": "0xd1e5b0ff1287aa9f9a268759062e4ab08b9dacbe"
  }
}
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
**Congratulations!** You just implemented Polygon Layer2 Network.
{% endhint %}
