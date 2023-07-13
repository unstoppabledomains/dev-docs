---
title: Implementing Webhooks with the Partner API | Unstoppable Domains Developer Portal
description: How to create, receive and verify webhooks when using the Unstoppable Domains Partner API
---

# Webhooks in the Partner API

The Partner API offers webhooks as a way to register asynchronous callbacks from our servers to yours when important events take place. This provides the most efficient way for your application to handle updates from the Partner API without needing to poll for updates.

## What are Webhooks?

A webhook is an HTTP-based callback that your web server receives from our servers. This means our servers will make an HTTP API call to your server to notify your application that a specific event has taken place.

Webhooks enable applications to be written with reactive, asynchronous logic instead of using a proactive, synchronous polling approach. This is the most efficient way for applications to be implemented to not waste resources checking for updates when there are none to receive.

## Registering Webhooks

The Partner API provides [several endpoints for managing webhooks](https://docs.unstoppabledomains.com/openapi/partner/latest/#tag/webhooks).

You will need an absolute URL to your server where we should send webhook requests. For example: `https://api.my-server.com/webhooks`. This endpoint should be setup to receive `POST` requests with an `application/json` Content Type.

Once you know the URL for your server, you simply need to make a [registration request](https://docs.unstoppabledomains.com/openapi/partner/latest/#operation/createWebhook) using that URL and the desired webhook event type. In the following example payload we are using the `OPERATION_FINISHED` webhook event type.

```json
{
  "url": "https://api.my-server.com/webhooks",
  "type": "OPERATION_FINISHED"
}
```

That's it! Now your server will receive `POST` requests anytime an operation completes.

## Receiving Webhooks

Your server should be prepared to receive HTTP `POST` requests that have an `application/json` body. The request to your server will include a JSON payload and headers from our server that you can use to process the update. The request body will depend on the webhook event type. In the example from the previous section, we registered an `OPERATION_FINISHED` webhook. For the exact request to expect, [see the API specification](https://docs.unstoppabledomains.com/openapi/partner/latest/#operation/webhook_OperationFinished).

Other considerations:
- In addition to processing the JSON payload, you should check the `x-ud-timestamp` header to ensure you are not receiving updates out of order.
- Your application needs to respond with a `200` status code to confirm it successfully received the request. Any other response status will result in us retrying delivery of the webhook.

Here is a simple example of a webhook-receiving server using Node and `express`:

```typescript
import * as express from 'express';
const app = express();

// Setup express to receive JSON payloads
app.use(express.json());

// Receive the webhook at api.my-server.com/webhooks
app.post('/webhooks', (req, res) => {
  const { body } = req;
  const headers = Object.fromEntries(
      Object.entries(req.headers).filter(
        ([key]) =>
          key.toLowerCase().startsWith('x-ud-')
      ),
    );

  // Log the headers and body
  console.log(
    'Received Webhook\nHEADERS:\n',
    JSON.stringify(headers, null, 2),
    '\nBODY:\n',
    JSON.stringify(body, null, 2),
  );

  // Send successful response to the UD server
  res.sendStatus(200);
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log('Started webhook dev server on port', port);
});
```

### Webhook Delivery Retries

If your application does not respond with a `200` status code, we will attempt to retry the delivery up to 8 times.

The retry delay interval doubles after each failed attempt, resulting in the following retry schedule:
1. 1 minute delay
2. 2 minutes
3. 4 minutes
4. 8 minutes
5. 16 minutes
6. 32 minutes
7. 64 minutes
8. 120 minutes (2 hours)

If your server fails to respond successfully after these retries we will no longer attempt to delivery that payload and you must use the [API to check for the expected updates](https://docs.unstoppabledomains.com/openapi/partner/latest/#operation/checkOperation).

## Verifying Webhooks

The webhook requests sent to your server do not include traditional authentication headers, instead it includes a signature header (`x-ud-signature`) that should be used to verify the authenticity of the request.

The `x-ud-signature` header is a Base64 encoded HMAC-SHA256 of the raw payload body bytes, using your account's primary API key as the secret.

You simply need to recompute the HMAC in your application to verify the request:

```typescript TypeScript (Node)
import { createHmac } from 'crypto';

function verifyRequest(signatureHeader: string, rawBodyBytes: Buffer, accountApiKey: string): boolean {
    const computedSignature = createHmac('sha256', accountApiKey)
        .update(rawBodyBytes)
        .digest('base64');
    return computedSignature === signatureHeader;
}
```

```python Python
import hashlib
import hmac
import base64

def verify_request(signature_header, raw_body_bytes, account_api_key):
    computed_hmac = hmac.new(account_api_key.encode(), raw_body_bytes, hashlib.sha256).digest()
    computed_signature = base64.b64encode(computed_hmac).decode()
    return computed_signature == signature_header
```

```go Go
import (
    "crypto/hmac"
    "crypto/sha256"
    "encoding/base64"
)

func verifyRequest(signatureHeader string, rawBodyBytes []byte, accountAPIKey string) bool {
    key := []byte(accountAPIKey)
    mac := hmac.New(sha256.New, key)
    mac.Write(rawBodyBytes)
    expectedMAC := mac.Sum(nil)
    computedSignature := base64.StdEncoding.EncodeToString(expectedMAC)
    return computedSignature == signatureHeader
}
```

```java Java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

// Should be in a class...

public static boolean verifyRequest(String signatureHeader, byte[] rawBodyBytes, String accountApiKey) {
    try {
        Mac mac = Mac.getInstance("HmacSHA256");
        SecretKeySpec secretKey = new SecretKeySpec(accountApiKey.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
        mac.init(secretKey);
        byte[] computedSignature = mac.doFinal(rawBodyBytes);
        String encodedComputedSignature = Base64.getEncoder().encodeToString(computedSignature);
        return encodedComputedSignature.equals(signatureHeader);
    } catch (NoSuchAlgorithmException | InvalidKeyException e) {
        e.printStackTrace();
    }
    return false;
}
```

```php PHP
function verifyRequest($signatureHeader, $rawBodyBytes, $accountApiKey) {
    $computedSignature = base64_encode(hash_hmac('sha256', $rawBodyBytes, $accountApiKey, true));
    return $computedSignature === $signatureHeader;
}
```

```csharp C#
using System;
using System.Security.Cryptography;
using System.Text;

// Should be in a class...

public static bool VerifyRequest(string signatureHeader, byte[] rawBodyBytes, string accountApiKey)
{
    using (HMACSHA256 hmac = new HMACSHA256(Encoding.UTF8.GetBytes(accountApiKey)))
    {
        byte[] computedSignature = hmac.ComputeHash(rawBodyBytes);
        string encodedComputedSignature = Convert.ToBase64String(computedSignature);
        return encodedComputedSignature == signatureHeader;
    }
}
```

When using Node with `express`, you can use the `express.json({ verify: ... })` callback to get access to the raw buffer:

```typescript
import * as express from 'express';
const app = express();

app.use(
  express.json({
    verify(req, _res, buf) {
      // Attach the buffer to the request object so you can handle the verification in your route handler
      (req as unknown as Record<string, unknown>).rawBodyBuffer = buf;

      // OR verify the request here
      const signature = req.headers['x-signature-header']?.toString();
      if(!signature || !verifyRequest(signature, buf, process.env.UD_PARTNER_API_KEY)) {
        throw new Error('Not authentic!');
      }
    },
  }),
);
```


<embed src="/snippets/_discord.md" />
