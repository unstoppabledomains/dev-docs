---
title: Resolution Service API Error Codes
description: This page provides all the error codes existing in the Resolution Service API.
---

# Resolution Service API Error Codes

This is a list of all the error codes you might encounter when using the Resolution Service API. The errors are in JSON format.

```typescript
{
    code: string, // one of our custom error names
    message: string, // human-readable error summary
    errors: [
        {
            httpCode: number, // error status code
            name: string, // one of our custom error names
            message: string // human-readable error summary
        }
    ]
}
```

The resolution service will not return an error in the case of an invalid domain or unsupported TLD to simplify communication.

## 400 Error: Bad Request

| Error Message | Description |
|---|---|
| each value in owners should not be empty | There is no domain name provided to the `/domains/` endpoint. |
| owners should not be empty | There is no domain name provided to the `/domains/` endpoint. |
| perPage must not be greater than 200 | The provided `perPage` parameter is a value greater than 200. |
| perPage must not be less than 1 | The provided `perPage` parameter is a value less than 1. |
| perPage must be an integer number | The provided `perPage` parameter is not an integer value. |
| sortDirection must be one of the following values: ASC, DESC | The provided `sortDirection` parameter value is not `ASC` or `DESC`. |
| sortBy must be one of the following values: id, name | The provided `sortBy` parameter value is not `id` nor `name`. |
| Invalid TLD list provided | The Resolution Service API does not support the provided list of TLDs. |

## 403 Error: Forbidden

| Error Message | Description |
|---|---|
| This API requires an auth token provided in an Authorization header in the form "Bearer \<auth-token\>". | There is no Alchemy API key provided in the API request |
| Invalid API key | The provided Alchemy API key is invalid or has expired. |

## 404 Error: Not Found

| Error Message | Description |
|---|---|
| Not Found | Could not find the requested resource(s). |

## Asking for help

Please don't be shy; we're here to help. Join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community if you need assistance integrating your app.
