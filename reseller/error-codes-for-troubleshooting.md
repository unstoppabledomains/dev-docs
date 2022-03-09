---
description: >-
  This page provides error codes and explanations to use when troubleshooting
  the reseller API endpoints.
---

# Error Codes for Troubleshooting

{% hint style="warning" %}
The Reseller API feature is under development due to recent upgrades to [Polygon L2](../polygon-l2-network/polygon-high-level-overview.md). When the Reseller feature resumes, it will only support domains and wallets on the Polygon L2 network. See the [Polygon Developer Integration Guide](../polygon-l2-network/polygon-developer-integration.md) for next steps.
{% endhint %}

Reseller API errors are in JSON format.

```
{ 
code: string, message: string, field: string | null, 
value: string | null, status: number 
}
```

## GET Order Status

| Error Code              | Explanation                                         |
| ----------------------- | --------------------------------------------------- |
| 400 - ORDER\_NOT\_FOUND | Order information could not be found in UD systems. |

## GET User Status

| Error Code           | Explanation                 |
| -------------------- | --------------------------- |
| 400 - INVALID\_EMAIL | Email address is not valid. |

## GET Domain Name Availability

| Error Code                  | Explanation                                              |
| --------------------------- | -------------------------------------------------------- |
| 400 - DOMAIN\_NAME\_INVALID | Domain name is not valid or is unavailable for purchase. |

## GET Reverse Look Up

| Error Code               | Explanation                                                 |
| ------------------------ | ----------------------------------------------------------- |
| 400 - EXTENSION\_INVALID | Extension is not valid or supported by UD.                  |
| 400 - OWNER\_INVALID     | Owner information is not valid or doesn’t match UD records. |

## POST Buy Domain

| Error Code                       | Explanation                                                                                                                                                                                         |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 400 - INVALID\_ORDER\_SCHEMA     | Order information is not properly formatted or is missing critical information such as payment type (e.g. “Coinbase” for payment).                                                                  |
| 400 - UNALLOWED\_PAYMENT\_METHOD | Payment method is not supported by UD. Must use Stripe or Coinbase.                                                                                                                                 |
| 400 - INVALID\_PUBLIC\_KEY       | <p>Public key information is incorrect or invalid.</p><ul><li>Stripe Test Public Key: pk_test_* (reseller-test-* namespace)</li><li>Stripe Live public key: pk_live_* (all other domains)</li></ul> |
| 400 - INVALID\_OWNER\_ADDRESS    | Owner address is not valid.                                                                                                                                                                         |
| 400 - DOMAIN\_UNAVAILABLE        | Domain name is unavailable for purchase.                                                                                                                                                            |
| 400 - STRIPE\_CARD\_INVALID      | Stripe card information is invalid or the customer enters credit card information that cannot be charged for some reason.                                                                           |
| 400 - STRIPE\_TOKEN\_ID\_INVALID | Stripe unique tokenID is invalid or expired and the order cannot be processed. Start a new order to continue.                                                                                       |
