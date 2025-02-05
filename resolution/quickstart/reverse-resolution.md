---
title: Resolution Service API Integration Guide | UD Developer Portal
description: This guide covers how to retrieve the reverse record of UD domains using the Resolution Service API.
---

# Reverse Resolve Domains

This page details basic configuration and usage of the [Resolution Service API](https://docs.unstoppabledomains.com/openapi/resolution/) to retrieve the reverse record of UD domains.

## Project Setup

You'll need the following to get started:

- An [API key](https://docs.unstoppabledomains.com/resolution/quickstart/retrieve-an-api-key/)

## Backend Proxy

Express.js will serve as the API proxy throughout this quickstart and will handle all interactions with the Resolution Service API.

The Resolution Service API is not meant to be directly accessed from a frontend client and will throw `CORS` errors if it is. 

:::info
There is a 20 call/second/key limit on the Resolution Service API. If you need a higher rate limit, please contact partnerengineering@unstoppabledomains.com
:::

## Examples

### Reverse Resolution for an Address

Resolve the reverse record of a wallet address. The code snippet below shows how to do this in Typescript and `Express.js`.

```typescript
**
 * Express route to reverse resolve a wallet address via proxy.
 * 
 * Accepts query parameters:
 * - address: The address to reverse resolve
 * 
 * @route GET /resolve/reverse
 * @returns {JSON} Resolved domain name or error message
 */
app.get('/resolve/reverse', async (req: Request, res: Response) => {
  const { address } = req.query;

  if (!address || !UNSTOPPABLE_API_KEY) {
    res.status(400).json({ error: 'Missing required parameters' });
    return;
  }

  try {
    const domain = await reverseResolve(
      address as string, 
    );

    domain 
      ? res.json({ address, domain })
      : res.status(404).json({ error: 'No domain found' });

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * Resolves a domain name for a given address.
 * 
 * @param {string} address - The address to reverse resolve
 * @returns {Promise<string | null>} The resolved domain or null if not found
 * 
 * @throws {Error} When no domain can be resolved for the address
 */
async function reverseResolve(
  address: string, 
): Promise<string | null> {

  try {
    const response = await axios.get(
      UNSTOPPABLE_API_BASE_URL + 'reverse/' + encodeURIComponent(address), 
      {
      headers: { 'Authorization': 'Bearer ' + UNSTOPPABLE_API_KEY }
      }
    );

    const meta = response.data.meta;
      
    const domain = meta['domain'];

    if (domain) return domain;

    throw new Error('No domain found for ' + address);
  } catch (error) {
    console.error('Reverse resolution error:', error);
    return null;
  }
}
```

### Reverse Resolution for Multiple Addresses

Resolve the reverse record of up to 1000 unique wallet address. The code snippet below shows how to do this in Typescript and `Express.js`.

```typescript
/**
 * Express route to reverse resolve multiple wallet addresses via proxy.
 * 
 * Accepts JSON body:
 * {
 *   "addresses": string[] - Array of addresses to reverse resolve (up to 1000)
 * }
 * 
 * @route POST /resolve/reverse/batch
 * @returns {JSON} Array of resolved domain names or error message
 */
app.post('/resolve/reverse/query', async (req: Request, res: Response) => {
  const { addresses } = req.body;

  if (!addresses || !Array.isArray(addresses) || !UNSTOPPABLE_API_KEY) {
    res.status(400).json({ error: 'Missing required parameters or invalid format' });
    return;
  }

  if (addresses.length > 1000) {
    res.status(400).json({ error: 'Maximum of 1000 addresses allowed per request' });
    return;
  }

  try {
    const domains = await reverseResolveBatch(
      addresses as Array<string>, 
    );

    domains 
      ? res.json({
        total: addresses.length,
        unique: Object.values(domains).length,
        resolved: Object.values(domains).filter(Boolean).length,
        addresses: domains
      })
      : res.status(404).json({ error: 'No domains found' });

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

interface UnstoppableMeta {
  domain: string;
  owner: string;
  reverse: boolean;
}

interface UnstoppableResponse {
  meta: UnstoppableMeta;
}

interface AddressMapping {
  [address: string]: string | null;
}

/**
 * Resolves a domain name for a given address.
 * 
 * @param {string} address - The address to reverse resolve
 * @returns {Promise<string | null>} The resolved domain or null if not found
 * 
 * @throws {Error} When no domain can be resolved for the address
 */
async function reverseResolveBatch(
  addresses: Array<string>, 
): Promise<Object | null> {

  try {
    const uniqAddresses = [...new Set(addresses.map(a => a.toLowerCase()))];

    const response = await axios.post(
      UNSTOPPABLE_API_BASE_URL + 'reverse/query', 
      { addresses: uniqAddresses },
      {
      headers: { 'Authorization': 'Bearer ' + UNSTOPPABLE_API_KEY }
      }
    );

    // Create mapping of address to domain
    const addressToDomain = uniqAddresses.reduce<AddressMapping>((acc, address) => {
      // Find the corresponding result in the response
      const result = response.data.data.find((item: UnstoppableResponse) => 
        item.meta.owner.toLowerCase() === address.toLowerCase()
      );
      
      // Add to mapping, using null if no domain was found
      acc[address] = result ? result.meta.domain : null;
      return acc;
    }, {});


    if (addressToDomain) return addressToDomain;

    throw new Error('No data found for provided wallet addresses');
  } catch (error) {
    console.error('Bulk Reverse resolution error:', error);
    return null;
  }
}
```

:::success Congratulations
You have successfully integrated Reverse Resolution using Unstoppable Domains Resolution Service API. Happy Hacking!
:::


