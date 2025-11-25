---
title: Resolution Service API Integration Guide | Unstoppable Domains Developer Portal
description: This guide covers how to retrieve the records of UD domains using the Resolution Service API.
---

# Resolve Domains

This page details basic configuration and usage of the [Resolution Service API](https://docs.unstoppabledomains.com/apis/resolution/) to retrieve the record(s) of UD domains.

## Project Setup

You'll need the following to get started:

- An [API key](https://docs.unstoppabledomains.com/resolution/quickstart/retrieve-an-api-key/)

## Backend Proxy

Express.js will serve as the API proxy throughout this quickstart and will handle all interactions with the Resolution Service API.

The Resolution Service API is not meant to be directly accessed from a frontend client and will throw `CORS` errors if it is. 

{% admonition type="info"%}
There is a 20 call/second/key limit on the Resolution Service API. If you need a higher rate limit, please contact partnerengineering@unstoppabledomains.com
{% /admonition %}

## Examples

### Resolve Wallet Addresses 

Retrieve wallet addresses for tokens on a given network. You will need the network family mapping available [here](https://gist.github.com/V-Shadbolt/7d4d80a36a30c55fff143671607ea60d/archive/01f5fdb27818088f6ca5baa7966c8996e31488d8.zip). Download the zip file containing `networks.ts` and place it in the same folder as the snippet below. The snippet shows how to resolve wallet addresses in Typescript and `Express.js`. 

```typescript
/**
 * Express route to resolve wallet addresses via proxy.
 * 
 * Accepts query parameters:
 * - domain: The domain name to resolve
 * - network: Blockchain network
 * - token: Cryptocurrency token symbol
 * 
 * @route GET /resolve
 * @returns {JSON} Resolved wallet address or error message
 */
app.get('/resolve', async (req: Request, res: Response) => {
  const { domain, network, token } = req.query;

  if (!domain || !network || !token || !UNSTOPPABLE_API_KEY) {
    res.status(400).json({ error: 'Missing required parameters' });
    return;
  }

  try {
    const address = await resolveWalletAddress(
      domain as string, 
      network as string, 
      token as string,
    );

    address 
      ? res.json({ domain, network, token, address })
      : res.status(404).json({ error: 'No address found' });

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

import { NETWORK_FAMILY_MAP } from './networks.ts';

/**
 * Prioritized list of record key templates for wallet address lookup.
 * The order determines the precedence of address resolution strategies.
 */
const ADDRESS_LOOKUP_PRIORITY = [
  'token.{family}.{network}.{token}.address',
  'token.{family}.{network}.address',
  'token.{family}.address'
];

/**
 * Resolves a wallet address for a given domain, network, and token.
 * 
 * @param {string} domain - The domain name to resolve
 * @param {string} network - The blockchain network (e.g., ETH, BSC, MATIC)
 * @param {string} token - The cryptocurrency token symbol
 * @returns {Promise<string | null>} The resolved wallet address or null if not found
 * 
 * @throws {Error} When no address can be resolved after trying all priority formats
 */
async function resolveWalletAddress(
  domain: string, 
  network: string, 
  token: string,
): Promise<string | null> {
  const family = NETWORK_FAMILY_MAP[network] || '';

  if (!family) {
    throw new Error('Unsupported network: ' + network);
  }

  try {
    const response = await axios.get(
      UNSTOPPABLE_API_BASE_URL + 'domains/' + encodeURIComponent(domain), 
      {
      headers: { 'Authorization': 'Bearer ' + UNSTOPPABLE_API_KEY }
      }
    );

    const records = response.data.records;

    for (const recordTemplate of ADDRESS_LOOKUP_PRIORITY) {
      const recordKey = recordTemplate
        .replace('{family}', family)
        .replace('{network}', network)
        .replace('{token}', token)
      
      const address = records[recordKey];

      if (address) return address;
    }

    throw new Error('No address found for ' + domain + ' on ' + network + ' for token ' + token);
  } catch (error) {
    console.error('Address resolution error:', error);
    return null;
  }
}
```

### Resolve Custom Domain Records

Retrieve any record of a domain. Applications sometimes set custom records for a domain to use within their application. The code snippet below shows how to do this in Typescript and `Express.js`.

```typescript
/**
 * Express route to resolve custom records via proxy.
 * 
 * Accepts query parameters:
 * - domain: The domain name to resolve
 * - record: The custom record to resolve
 * 
 * @route GET /resolve/custom
 * @returns {JSON} Resolved record address or error message
 */
app.get('/resolve/custom', async (req: Request, res: Response) => {
  const { domain, record } = req.query;

  if (!domain || !record || !UNSTOPPABLE_API_KEY) {
    res.status(400).json({ error: 'Missing required parameters' });
    return;
  }

  try {
    const address = await resolveCustomRecord(
      domain as string, 
      record as string,
    );

    address 
      ? res.json({ domain, record, address })
      : res.status(404).json({ error: 'No address found' });

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * Resolves a custom record for a given domain.
 * 
 * @param {string} domain - The domain name to resolve
 * @param {string} record - The record to resolve
 * @returns {Promise<string | null>} The resolved address or null if not found
 * 
 * @throws {Error} When no address can be resolved for the custom record
 */
async function resolveCustomRecord(
  domain: string, 
  record: string,
): Promise<string | null> {

  try {
    const response = await axios.get(
      UNSTOPPABLE_API_BASE_URL + 'domains/' + encodeURIComponent(domain), 
      {
      headers: { 'Authorization': 'Bearer ' + UNSTOPPABLE_API_KEY }
      }
    );

    const records = response.data.records;
      
    const address = records[record];

    if (address) return address;

    throw new Error('No ' + record + ' record found for ' + domain);
  } catch (error) {
    console.error('Record resolution error:', error);
    return null;
  }
}
```

### Resolve IPFS Hashes for Decentralized Websites

Retrieves the IPFS hash on a domain. The code snippet below shows how to do this in Typescript and `Express.js`.

```typescript
/**
 * Express route to resolve IPFS hash records via proxy.
 * 
 * Accepts query parameters:
 * - domain: The domain name to resolve
 * 
 * @route GET /resolve/ipfs
 * @returns {JSON} Resolved IPFS hash or error message
 */
app.get('/resolve/ipfs', async (req: Request, res: Response) => {
  const { domain } = req.query;

  if (!domain || !UNSTOPPABLE_API_KEY) {
    res.status(400).json({ error: 'Missing required parameters' });
    return;
  }

  try {
    const ipfsHash = await resolveIpfsHash(
      domain as string, 
    );

    ipfsHash 
      ? res.json({ domain, ipfsHash })
      : res.status(404).json({ error: 'No IPFS Hash found' });

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * Resolves an IPFS hash for a given domain.
 * 
 * @param {string} domain - The domain name to resolve
 * @returns {Promise<string | null>} The resolved address or null if not found
 * 
 * @throws {Error} When no address can be resolved for the IPFS hash record
 */
async function resolveIpfsHash(
  domain: string, 
): Promise<string | null> {

  try {
    const response = await axios.get(
      UNSTOPPABLE_API_BASE_URL + 'domains/' + encodeURIComponent(domain), 
      {
      headers: { 'Authorization': 'Bearer ' + UNSTOPPABLE_API_KEY }
      }
    );

    const records = response.data.records;
      
    const address = records['ipfs.html.value'];

    if (address) return address;

    throw new Error('No IPFS hash found for ' + domain);
  } catch (error) {
    console.error('IPFS resolution error:', error);
    return null;
  }
}
```

{% admonition type="success" name="Congratulations" %}
You have successfully integrated Resolution using Unstoppable Domains Resolution Service API. Happy Hacking!
{% /admonition %}