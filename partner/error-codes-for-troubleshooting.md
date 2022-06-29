---
title: Error Codes for Troubleshooting Partner Integrations
description: This page provides error codes and explanations to use when troubleshooting the partner API endpoints.
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

## GET Domain name

| Error Code                  | Status Code | Explanation                          |
| --------------------------- | - | ----------------------------------- |
| DOMAIN\_NAME\_INVALID | 400 | The provided domain name is invalid. |

## GET Domains Suggestions

| Error Code                    | Status Code | Explanation                              |
| ----------------------------- | - | --------------------------------------- |
| INVALID\_DOMAIN\_SUFFIX | 400 | Provided domain endings in TLD filter are invalid. |

## GET **Domains Suggestions Free**

| Error Code                    | Status Code | Explanation                                                               |
| ----------------------------- | - | ------------------------------------------------------------------------ |
| INVALID\_DOMAIN\_SUFFIX | 400 | Provided domain endings in TLD filter are invalid.                                  |
| NOT\_SUPPORTED          | 400 | The partner does not provide free domains (for free domain suggestions). |

## POST **Orders**

| Error Code | Status Code | Explanation |
| - | - | - |
| INVALID\_ORDER\_SCHEMA | 400 | Order information is not properly formatted or is missing critical information such as payment type. |
| UNALLOWED\_PAYMENT\_METHOD | 400 | Payment method is not supported by UD. Must use Stripe or Coinbase. |
| UNSUPPORTED\_PAYMENT\_METHOD | 400 | Requested payment method is currently not supported. |
| INVALID\_OWNER\_ADDRESS | 400 | Owner address is not valid. |
| INVALID\_EMAIL | 400 | Email address is not valid. |
| DOMAIN\_NOT\_AVAILABLE | 400 | Domain name is unavailable for purchase. |
| USER\_NOT\_ELIGIBLE | 400 | The provided user is not eligible for a free domain. |
| WALLET\_NOT\_ELIGIBLE | 400 | The provided wallet address is not eligible for a free domain. |
| FREE\_DOMAIN\_POLICY\_VIOLATION | 400 | The provided user has already claimed a free domain before. |
| INVALID\_FINGERPRINTJS\_VISIT | 400 | The provided Fingerprint Visitor ID is invalid or is older than 30 seconds. |
| MISSING\_FINGERPRINTJS\_VISITOR\_ID | 400 | The request does not contain a Fingerprint Visitor ID. |
| SECURITY\_PARAMS\_NOT\_PROVIDED | 400 | The request does not contain any security parameters. |
| UNSUPPORTED\_SECURITY\_TYPE | 400 | Requested security type is currently not supported. |
| DOMAIN\_RESERVED | 400 | Requested domain has been reserved by another partner. |

## GET **Order Number**

| Error Code              | Status Code | Explanation         |
| ----------------------- | - | ------------------ |
| ORDER\_NOT\_FOUND | 404 | Order is not found. |

<embed src="/snippets/_discord.md" />
