---
title: Resolution Service Error Codes | Unstoppable Domains Developer Portal
description: This page covers the error codes you might encounter when using the Resolution Service API.
---

# Resolution Service Error Codes

Below is a list of all the error codes you might encounter when using the Resolution Service API. The errors are in JSON format.

```javascript
{
    code: string, // one of our custom error names
    message: string, // human-readable error summary
    errors: [
        {
            httpCode: number, // error status code
            name: string, // one of our custom error names
            message: string, // human-readable error summary
            level: "error",
            service: "resolution-service"
        }
    ]
}
```

The resolution service will not return an error in the case of an invalid or unsupported domain ending to simplify communication.

## 400 Error: Bad Request

| Error Message | Description |
|---|---|
| perPage must not be greater than 200 | The provided `perPage` parameter is a value greater than 200. |
| perPage must not be less than 1 | The provided `perPage` parameter is a value less than 1. |
| perPage must be an integer number | The provided `perPage` parameter is not an integer value. |
| sortDirection must be one of the following values: ASC, DESC | The provided `sortDirection` parameter value is not `ASC` or `DESC`. |
| sortBy must be one of the following values: id, name, created_at | The provided `sortBy` parameter value has to be either `id`, `name` or `created_at`. |
| Invalid TLD list provided | The Resolution Service API does not support the provided list of domain endings. |
| Invalid resolution records provided | The provided `resolution` parameter value contains records not supported by the resolution service API. See the [Records Reference](/developer-toolkit/reference/records-reference.md) guide for supported key values. |

## 403 Error: Forbidden

| Error Message | Description |
|---|---|
| Please provide a valid API key. | The provided API key is invalid or has expired. |

## 404 Error: Not Found

| Error Message | Description |
|---|---|
| Not Found | Could not find the requested resource(s). |

<embed src="/snippets/_discord.md" />
