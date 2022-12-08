Send a `POST` request to the [Create Domain Action Request](https://docs.unstoppabledomains.com/openapi/reference/#operation/PostActions) endpoint. To make a successful request, you must include the request body and authorization headers you have prepared, which should contain information about the domain action you want to perform.

Sandbox Environment:

```bash
https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/actions
```

Production Environment:

```bash
https://unstoppabledomains.com/api/v2/resellers/{PARTNER_RESELLERID}/actions
```

:::info
The `PARTNER_RESELLERID` path parameter is the same one you retrieved from your partner account earlier.
:::
