---
title: On-chain Purchases with the Registry API | Unstoppable Domains Developer Portal
description: How to purchase Unstoppable domains using the Unstoppable Domains Registry API and Smart Contract
---

# On-chain Buy

The Registry API expands the domain registration options by offering a direct-to-blockchain mothod for registering domains. The API is publically available and retrieves both domain pricing and pre-approval for purchase which are sent to the `Buy` function on the [smart contract](https://polygonscan.com/address/0x7be83293BeeDc9Eba1bd76c66A65F10F3efaeC26#writeProxyContract).

## Check Domain Availability

The Registry API provides a domain availability endpoint for checking registration status of a domain name.

To use this endpoint, you will need to include the domain name of interest and one of our [supported domain endings](https://docs.unstoppabledomains.com/openapi/resolution/#operation/StatusController.listSupportedTlds) as part of the API query. For example, checking the availability of `qwerty.wallet` would look like this:

```typescript
const data = fetch(`https://api.unstoppabledomains.com/registry/v1/domains/qwerty.wallet`, {
  method: "GET",
});
```

Which would yield the below JSON response.

```json
{
    "name": "qwerty.wallet",
    "availability": {
        "status": "AVAILABLE",
        "price": {
            "listPrice": {
                "usdCents": 75000
            },
            "subTotal": {
                "usdCents": 75000
            }
        }
    }
}
```

## Request Purchase Transaction Details

Once you have confirmed the domain is available, you can request the transaction details for purchasing the domain and minting it to a specific wallet address. In the example above, the domain `qwerty.wallet` was confirmed to be available. Now, you will make a `POST` request to `https://api.unstoppabledomains.com/registry/v1/domains/qwerty.wallet/parameters/purchase` with a payload indicating the claiming wallet address, any crypto records that should be set on mint, as well as the currency the domain will be purchased in. 

```json
{
    "owner": { 
      "address": "0xEE72F1035C706478F84AB9480E45B427Aa6B6682" 
    },
    "records": {},
    "currency": "MATIC"
}
```

:::info
Currently `MATIC` is the only supported currency.
:::

In response, you will get JSON that confirms the domain availability and pricing, as well as the encoded transaction details such as: 

```json
{
...
"params": {
            "to": "0x7be83293BeeDc9Eba1bd76c66A65F10F3efaeC26",
            "data": "0xd7db74c7000000000000000000000000ee72f1035c706478f84ab9480e45b427aa6b668200000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000006583051a0000000000000000000000000000000000000000000000342006d851f399d89d000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000067177657274790000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000677616c6c65740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041470820c63403b51b4be6bbb30af2b00aa977f674c13b4c0a7c35f2be351e9b026585e1b337d7ca916f2d0650493bcd4e3ba804ee34e10e8c9fee7448288c84921b00000000000000000000000000000000000000000000000000000000000000",
            "value": "0x342006d851f399d89d"
        }
}

```

### Send Transaction

With the above transaction details, you are now able to use your Web3 library of choice to send the transaction. Using `ethers` as an example:  

```typescript
const provider = new ethers.providers.Web3Provider(library.provider);
const params = {
  to: txParams.to,
  data: txParams.data,
  value: txParams.value,
};

const signer = provider.getSigner();
await signer.sendTransaction(params);
```

The specified owner will recieve the domain as a result of a `successful` transaction. 

That's it! You are now able to purchase Unstoppable domains on chain.
