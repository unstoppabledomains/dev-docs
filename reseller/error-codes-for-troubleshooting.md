---
description: >-
  This page provides error codes and explanations to use when troubleshooting
  the reseller API endpoints.
---

# Error Codes for Troubleshooting

Reseller API errors are in JSON format.

```
{ 
  code: string,         // string error code
  message: string,      // error message
  field: string | null, // request field that caused the error 
  value: string | null, // request value that caused the error
  status: number        // error status
}
```

## GET Domain name

| Error Code                  | Explanation                          |
| --------------------------- | ------------------------------------ |
| 400 - DOMAIN\_NAME\_INVALID | The provided domain name is invalid. |

## GET Domains Suggestions

| Error Code                    | Explanation                              |
| ----------------------------- | ---------------------------------------- |
| 400 - INVALID\_DOMAIN\_SUFFIX | Provided TLDs in TLD filter are invalid. |

## GET **Domains Suggestions Free**

| Error Code                    | Explanation                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| 400 - INVALID\_DOMAIN\_SUFFIX | Provided TLDs in TLD filter are invalid.                                  |
| 400 - NOT\_SUPPORTED          | The reseller does not provide free domains (for free domain suggestions). |

## POST **Orders**

| Error Code                         | Explanation                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 400 - INVALID\_ORDER\_SCHEMA       | Order information is not properly formatted or is missing critical information such as payment type. |
| 400 - UNALLOWED\_PAYMENT\_METHOD   | Payment method is not supported by UD. Must use Stripe or Coinbase.                                  |
| 400 - UNSUPPORTED\_PAYMENT\_METHOD | Requested payment method is currently not supported.                                                 |
| 400 - INVALID\_OWNER\_ADDRESS      | Owner address is not valid.                                                                          |
| 400 - INVALID\_EMAIL               | Email address is not valid.                                                                          |
| 400 - DOMAIN\_NOT\_AVAILABLE       | Domain name is unavailable for purchase.                                                             |
| 400 - USER\_NOT\_ELIGIBLE          | The provided user is not eligible for a free domain.                                                 |
| 400 - WALLET\_NOT\_ELIGIBLE        | The provided wallet address is not eligible for a free domain.                                       |

## GET **Order Number**

| Error Code              | Explanation         |
| ----------------------- | ------------------- |
| 404 - ORDER\_NOT\_FOUND | Order is not found. |
