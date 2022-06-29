Send a `POST` request with the authorization headers and request body you have prepared to the `Buy a Domain or Claim Free Domain` endpoint. Here is the URL for our API environments:

Sandbox Environment:

```
POST https://api.ud-sandbox.com/api/v2/resellers/{ResellerID}/orders/
```

Production Environment:

```
POST https://unstoppabledomains.com/api/v2/resellers/{ResellerID}/orders/
```

:::info
The `ResellerID` path parameter is the same one you retrieved from your dashboard earlier.
:::
