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

## 400 Error: Bad Request

| Error Message | Description |
| - | - |
| DOMAIN\_NAME\_INVALID | The provided domain name is invalid |
| DOMAIN\_NAME\_NOT\_PROVIDED | The request does not contain any domain name to search |
| INVALID\_DOMAIN\_SUFFIX | The provided domain endings in TLD filter are invalid |
| NOT\_SUPPORTED | The partner does not provide free domains (for free domain suggestions) |
| DOMAIN\_LOCK\_NOT\_AVAILABLE | The requested domain cannot be reserved. The domain is not available for free or has been minted |
| DOMAIN\_NAME\_NOT\_PROVIDED | The request does not contain any domain name to search |
| INVALID\_ORDER\_SCHEMA | The order information is not properly formatted or is missing critical information such as payment type |
| UNALLOWED\_PAYMENT\_METHOD | The payment method is not supported by Unstoppable Domains. Must use Stripe or minted freely |
| UNSUPPORTED\_PAYMENT\_METHOD | The requested payment method is currently not supported |
| INVALID\_OWNER\_ADDRESS | The owner address is not valid |
| INVALID\_EMAIL | The email address is not valid |
| DOMAIN\_NOT\_AVAILABLE | The domain name is unavailable for purchase |
| USER\_NOT\_ELIGIBLE | The provided user is not eligible for a free domain |
| WALLET\_NOT\_ELIGIBLE | The provided wallet address is not eligible for a free domain |
| FREE\_DOMAIN\_POLICY\_VIOLATION | The provided user has already claimed a free domain before |
| INVALID\_FINGERPRINTJS\_VISIT | The provided Fingerprint Visitor ID is invalid or is older than 30 seconds |
| MISSING\_FINGERPRINTJS\_VISITOR\_ID | The request does not contain a Fingerprint Visitor ID |
| SECURITY\_PARAMS\_NOT\_PROVIDED | The request does not contain any security parameters |
| UNSUPPORTED\_SECURITY\_TYPE | The requested security type is currently not supported |

## 404 Error: Not Found

| Error Message | Description |
| - | - |
| ORDER\_NOT\_FOUND | The requested order is not found |

<embed src="/snippets/_discord.md" />
