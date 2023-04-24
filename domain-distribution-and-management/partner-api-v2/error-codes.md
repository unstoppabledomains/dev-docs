---
title: Error Codes for Troubleshooting Partner Integrations
description: This page provides error codes and explanations to use when troubleshooting the partner API endpoints.
redirectFrom:
  - /partner/reference/error-codes/
---

# Error Codes for Troubleshooting

Partner API errors are in JSON format.

```javascript
{
  code: string,         // string error code
  message: string,      // error message
  field: string | null, // request field that caused the error
  value: string | null, // request value that caused the error
  status: number        // error status
}
```

## 400 Error: Bad Request

| Error Message                    | Description                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| DOMAIN_NAME_INVALID              | The provided domain name is invalid                                                                     |
| DOMAIN_NAME_NOT_PROVIDED         | The request does not contain any domain name to search                                                  |
| INVALID_DOMAIN_SUFFIX            | The provided domain endings in TLD filter are invalid                                                   |
| NOT_SUPPORTED                    | The partner does not provide free domains (for free domain suggestions)                                 |
| DOMAIN_LOCK_NOT_AVAILABLE        | The requested domain cannot be reserved. The domain is not available for free or has been minted        |
| DOMAIN_NAME_NOT_PROVIDED         | The request does not contain any domain name to search                                                  |
| INVALID_ORDER_SCHEMA             | The order information is not properly formatted or is missing critical information such as payment type |
| UNALLOWED_PAYMENT_METHOD         | The payment method is not supported by Unstoppable Domains. Must use Stripe or minted freely            |
| UNSUPPORTED_PAYMENT_METHOD       | The requested payment method is currently not supported                                                 |
| INVALID_OWNER_ADDRESS            | The owner address is not valid                                                                          |
| INVALID_EMAIL                    | The email address is not valid                                                                          |
| DOMAIN_NOT_AVAILABLE             | The domain name is unavailable for purchase                                                             |
| USER_NOT_ELIGIBLE                | The provided user is not eligible for a free domain                                                     |
| WALLET_NOT_ELIGIBLE              | The provided wallet address is not eligible for a free domain                                           |
| FREE_DOMAIN_POLICY_VIOLATION     | The provided user has already claimed a free domain before                                              |
| INVALID_FINGERPRINTJS_VISIT      | The provided Fingerprint Visitor ID is invalid or is older than 30 seconds                              |
| MISSING_FINGERPRINTJS_VISITOR_ID | The request does not contain a Fingerprint Visitor ID                                                   |
| SECURITY_PARAMS_NOT_PROVIDED     | The request does not contain any security parameters                                                    |
| UNSUPPORTED_SECURITY_TYPE        | The requested security type is currently not supported                                                  |
| QUERY_ARGUMENT_REQUIRED          | The request does not contain critical query parameters                                                  |
| BRIDGE_DISABLED                  | The Polygon bridge feature flag is not enabled in your environment                                      |
| REQUEST_INVALID                  | The request body is not properly formatted or is missing critical information                           |

## 401 Error: Unauthorized

| Error Message     | Description                        |
| ----------------- | ---------------------------------- |
| PARTNER_NOT_FOUND | The requested Partner is not found |

## 404 Error: Not Found

| Error Message    | Description                                 |
| ---------------- | ------------------------------------------- |
| ORDER_NOT_FOUND  | The requested order is not found            |
| DOMAIN_NOT_FOUND | The requested domain name is not registered |
| ACTION_NOT_FOUND | The requested domain action is not found    |

<embed src="/snippets/_discord.md" />
