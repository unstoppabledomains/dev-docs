Send a `POST` request with the authorization headers and request body you have prepared to the [Buy a Domain or Claim for Free](https://docs.unstoppabledomains.com/openapi/reference/#tag/orders/paths/~1orders/post) endpoint. Here is the URL for our API environments:

Sandbox Environment:

```bash
https://api.ud-sandbox.com/api/v2/resellers/{PARTNER_RESELLERID}/orders/
```

Production Environment:

```bash
https://unstoppabledomains.com/api/v2/resellers/{PARTNER_RESELLERID}/orders/
```

:::info
The `PARTNER_RESELLERID` path parameter is the same one you retrieved from your partner account earlier.
:::
