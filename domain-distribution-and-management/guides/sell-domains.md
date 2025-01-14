---
title: Selling Domains with the Partner API | Unstoppable Domains Developer Portal
description: This page details basic configuration and usage of the Partner API.
---

# Sell Domains with the Partner API

The Partner API v3 provides you with the ability to lookup, register and manage Web3 domains. The API exposes a RESTful interface for interacting with Web3 domains and the Unstoppable Domains registry.

- Lookup Domains: Search for specific domains or find suggested alternatives, to determine pricing, availability and on-chain details
- Registering Domains: Secure domains into your dedicated Custody wallets to maintain the domains on the blockchain
- Manage Domains: Update records on the blockchain or transfer the domain to external owners, all through a simple API interface

In this integration guide, we will create a Partner API flow focussing on domain lookup and registration. To complete this integration, you should be a JavaScript developer with experience in RESTful APIs.

:::info
If you’d like to skip ahead or follow along you can clone the [full example](https://github.com/unstoppabledomains/demos/tree/vincent/full-flow/Unstoppable%20Partner%20API%20Example) from GitHub beforehand.
:::

## Step 1: Project Setup

Before we get started, you’ll need to install Node >= v18 and yarn or npm. Then, download the following setup script in a unix-like environment (MacOS, Linux, WSL, etc) to create the project directory, install the suggested packages, and create the suggested configuration files. If you do not have access to a unix-environment, clone the [full example](https://github.com/unstoppabledomains/demos/tree/vincent/full-flow/Unstoppable%20Partner%20API%20Example) from GitHub and follow along.

[Download Setup Script](../../static/scripts/setup-pav3-guide.sh)

After downloading the script, move the `setup-pav3-guide.sh` file to your desired directory and run the following commands:

```shell
chmod +x setup-pav3-guide.sh
./setup-pav3-guide.sh
```

This will create a `project` folder in your directory that we will use throughout this guide.

:::info
**@uauth/js** will be the library used for implementing Unstoppable Login on the frontend, **axios** will be used for the API calls on both the client and server, **nodemon** will be used for easier typescript server development, and **lowdb** will act as an interim database on the server to keep the guide self-contained.
:::

## Step 2: Setup Express.js

Express.js will serve as our backend throughout this guide. It will handle all interactions with the Partner API, any necessary database operations, and ideally also implement [webhooks](https://docs.unstoppabledomains.com/domain-distribution-and-management/guides/implementing-webhooks/). To keep this guide self-contained, we will be utilizing `lowdb` as an interim database and will forego webhooks to avoid needing an absolute URL.

It's very important that the Partner API is not directly accessed from a frontend client as the API key is very sensitive. As the API does not handle checkout payments, Unstoppable Domains keeps track of a running balance against the API key for periodic invoicing. It is up to the partner to collect payment from users and subsequently keep their API key secure. 

:::info
There is no charge for developing with the Partner API on our **sandbox** environment. Once you migrate to **production**, a running balance will be kept against your **production API key**.
:::

### Environment Variables

Build out your `./server/.env` file per the below. You can retrieve your Partner API key by following our [Set up Partner API Access Guide](https://docs.unstoppabledomains.com/domain-distribution-and-management/quickstart/retrieve-an-api-key/). 

```javascript
API_URL = 'https://api.ud-sandbox.com/partner/v3'
API_KEY_VALUE = 'xxxxx'
PORT = 3001
```

### Express Endpoints 

With our environment variables configured, we can start outlining the endpoints we'll need to use throughout our guide. We'll need a way to lookup domain suggestions based on a search query, register domains, and check domain availability.  This means the server will need to be prepared to recieve HTTP `POST` requests that have an `application/json` body as well as general HTTP `GET` requests with url query parameters. The request body will depend on the client implementation but in this guide, we will keep things consistent.

Other considerations:
- As the Partner API is dependant on the blockchain, it provides an operation ID for us to use to check current status. We should have some way of tracking these API operations so we know when the operations complete or if there are any problems and handle them appropriately.
- As there is a running balance against the `production` API, we should implement a way to know whether the frontend checkout was successful or not, and handle each case. While there is no cost for using `sandbox` like we are here, our recomendation is to return the registered domain to Unstoppable should checkout fail for any reason. Returns can be made within 14 days of registration and will be deducted from the running balance.
- Should checkout succeed, we should transfer the registered domain to the end-user to custody. 

Here is a basic implementation of our three necessary endpoints using Node and `express`. We'll add this to our `./server/src/server.ts` file.

```typescript
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables from .env file
dotenv.config();

// Set up the Express application instance
const app: Express = express();
const port = process.env.PORT || 3001;

// Unstoppable Domains Sandbox API configurations
const UNSTOPPABLE_SANDBOX_API_KEY = process.env.API_KEY_VALUE as string;
const UNSTOPPABLE_SANDBOX_API_URL = process.env.API_URL as string;

// Middleware setup
app.use(express.json()); // For parsing JSON request bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

/**
 * GET /api/domains - Fetch domain suggestions based on a query string.
 *
 * @query {string} query - The search term for domain suggestions.
 * @returns {Response} - Returns a JSON response with domain suggestions or an error message.
 */
app.get('/api/domains', async (req: Request, res: Response) => {
  const query = req.query.query as string;
  try {
    const domains = await searchDomains(query);
    res.json(domains);
  } catch (error: any) {
    res.status(500).json({ error: 'Error fetching domains', details: error.message });
  }
});

/**
 * POST /api/register - Registers a domain by its ID.
 *
 * @body {string} domainId - The ID of the domain to be registered.
 * @returns {Response} - Returns a JSON response with registration status or an error message.
 */
app.post('/api/register', async (req: Request, res: Response) => {
  const domainId = req.body.domainId as string;
  try {
    const register = await registerDomain(domainId);
    if (register.error) {
      res.status(500).json(register);
    } else {
      res.json(register);
    }
  } catch (error: any) {
    res.status(500).json({ error: 'Error registering domain', details: error.message });
  }
});

/**
 * POST /api/availability - Checks availability of an array of domains.
 *
 * @body {string[]} domains - Array of domains to check availability.
 * @returns {Response} - Returns a JSON response with availability status or an error message.
 */
app.post('/api/availability', async (req: Request, res: Response) => {
  const domains = req.body.domains as string[];
  try {
    const availability = await checkAvailability(domains);
    if (availability.error) {
      res.status(500).json(availability);
    } else {
      res.json(availability);
    }
  } catch (error: any) {
    res.status(500).json({ error: 'Error checking domain availability', details: error.message });
  }
});

/**
 * Starts the Express server and listens on the specified port.
 * Logs a message to the console once the server is running.
 */
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### Partner API Proxy

Now that our Express.js server has appropriate endpoints for domain suggestions, domain registration, and domain availability, we need to proxy these endpoints to the Partner API. We'll use our `searchDomains`, `registerDomain`, and `checkAvailability`. functions previously defined for this task. We'll import the appropriate typings from our `./types` directory and make an `axios` request to the appropriate endpoint: 

- `searchDomains()` will be proxied to the [suggestions endpoint](https://docs.unstoppabledomains.com/openapi/partner/#operation/getSuggestions)
- `registerDomain()` will be proxied to the [registration endpoint](https://docs.unstoppabledomains.com/openapi/partner/#operation/mintSingleDomain)
- `checkAvailability()` will be proxied to the [domain details endpoint](https://docs.unstoppabledomains.com/openapi/partner/#operation/getMultipleDomains)

We'll also add error handling here to encompass any issues with our server, `axios`, or the Partner API. Add these to the existing `server/src/server.ts` file.

```typescript searchDomains
import { Suggestions } from './types/suggestions';

/**
 * Searches for domain suggestions based on the provided domain name.
 *
 * This function makes an API call to the Unstoppable Domains suggestions endpoint
 * to retrieve a list of suggested domains related to the provided `domainName`.
 * It returns the suggestions data or an error object if the request fails.
 *
 * @param {string} domainName - The domain name query string to search suggestions for.
 * @returns {Promise<Suggestions>} - A promise that resolves to the Suggestions object,
 * containing either the suggestions data or an error object if an error occurs.
 *
 * @throws {Error} - If an error occurs during the API call, this function catches the error
 * and returns an error object with a descriptive message and details about the failure:
 *  - "Server error" if the server responded with an error
 *  - "No response received" if there was no response from the server
 *  - "Error setting up request" if the request could not be configured properly
 */
const searchDomains = async (domainName: string): Promise<Suggestions> => {
  let data = <Suggestions>{};
  try {
    const response = await axios.get(
      `${UNSTOPPABLE_SANDBOX_API_URL}/suggestions/domains?query=${domainName}`, 
      {
        headers: {
          Authorization: 'Bearer ' + UNSTOPPABLE_SANDBOX_API_KEY
        }
      }
    );
    console.log('Suggestions:', response.data);
    data = response.data as Suggestions;
    return data
  } catch (error: any) {
    if (error.response) {
      console.error('Server error:', error.response.data);
      data.error = { message: 'Server error', details: error.response.data };
      return data;
    } else if (error.request) {
      console.error('No response received:', error.request);
      data.error = { message: 'No response received', details: error.request };
      return data;
    } else {
      console.error('Error setting up request:', error.message);
      data.error = { message: 'Error setting up request', details: error.message };
      return data;
    }
  }
};
```

```typescript registerDomain
import { Order } from './types/orders';

/**
 * Registers a domain with the provided domain ID.
 *
 * This function sends a POST request to the Unstoppable Domains API to register a domain to the default API wallet.
 * On successful registration, it returns the registration details as an `Order` object.
 * If an error occurs, it returns an error object with relevant details.
 *
 * @param {string} domainId - The ID of the domain to register.
 * @returns {Promise<Order>} - A promise that resolves to the `Order` object containing the registration details or an error object.
 *
 * @throws {Error} - If an error occurs, it catches the error and returns an error object with:
 *  - "Server error" if the server responded with an error
 *  - "No response received" if there was no response from the server
 *  - "Error setting up request" if the request configuration failed
 */
const registerDomain = async (domainId: string): Promise<Order> => {
  let data = <Order>{};
  try {
    const response = await axios.post(
      `${UNSTOPPABLE_SANDBOX_API_URL}/domains?query=${domainId}`,
      JSON.stringify({
        name: domainId,
        records: {}
      }),
      {
        headers: {
          Authorization: 'Bearer ' + UNSTOPPABLE_SANDBOX_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Domain registered:', response.data);
    data = response.data as Order;
    return data
  } catch (error: any) {
    if (error.response) {
      console.error('Server error:', error.response.data);
      data.error = { message: 'Server error', details: error.response.data };
      return data;
    } else if (error.request) {
      console.error('No response received:', error.request);
      data.error = { message: 'No response received', details: error.request };
      return data;
    } else {
      console.error('Error setting up request:', error.message);
      data.error = { message: 'Error setting up request', details: error.message };
      return data;
    }
  }
};
```

```typescript checkAvailability
import { Domains } from './types/domains';

/**
 * Checks the availability of a list of domains.
 *
 * This function sends a GET request to the Unstoppable Domains API to check the
 * availability of a given list of domain names. It returns the domain details or an
 * error object if an error occurs.
 *
 * @param {Array<string>} domains - The ID of the operation to check.
 * @returns {Promise<Domains>} - A promise that resolves to an `Operation` object with status details or an error object.
 *
 * @throws {Error} - If an error occurs, it catches the error and returns an error object with:
 *  - "Server error" if the server responded with an error
 *  - "No response received" if there was no response from the server
 *  - "Error setting up request" if the request configuration failed
 */
const checkAvailability = async (domains: Array<string>): Promise<Domains> => {
  let data = <Domains>{};
  const query = domains.join('&query=');
  try {
    const response = await axios.get(
      `${UNSTOPPABLE_SANDBOX_API_URL}/domains?query=${query}`,
      {
        headers: {
          Authorization: 'Bearer ' + UNSTOPPABLE_SANDBOX_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Domain Availability:', response.data);
    data = response.data as Domains;
    return data;
  } catch (error: any) {
    if (error.response) {
      console.error('Server error:', error.response.data);
      data.error = { message: 'Server error', details: error.response.data };
      return data;
    } else if (error.request) {
      console.error('No response received:', error.request);
      data.error = { message: 'No response received', details: error.request };
      return data;
    } else {
      console.error('Error setting up request:', error.message);
      data.error = { message: 'Error setting up request', details: error.message };
      return data;
    }
  }
};
```

We can also take this opportunity to take into account our earlier considerations:
- Partner API Operations 
- Returns
- Transfers

Partner API operation tracking will ideally be handled by [webhooks](https://docs.unstoppabledomains.com/domain-distribution-and-management/guides/implementing-webhooks/) but, as mentioned, this guide will not encompass public hosting. As such, we'll rely on the [operations endpoint](https://docs.unstoppabledomains.com/openapi/partner/#operation/checkOperation). Similarily, we will use the [returns endpoint](https://docs.unstoppabledomains.com/openapi/partner/#operation/returnDomain) to handle returning domains and we will use the [overwriting update endpoint](https://docs.unstoppabledomains.com/openapi/partner/#operation/updateDomainPut) to transfer the domain to the end user.

:::info
We'd ideally register a webhook for each Partner API operation we initiate, including a return, registration, transfer, etc. For the purposes of this guide, we can use the `checkOperation()` function as a synchronous polling approach within `trackOperation()`.
:::

```typescript checkOperation
import { Operation } from './types/orders';

/**
 * Checks the status of a domain-related operation.
 *
 * This function sends a GET request to the Unstoppable Domains API to check the
 * status of a given operation by its ID. It returns the operation details or an
 * error object if an error occurs.
 *
 * @param {string} operationId - The ID of the operation to check.
 * @returns {Promise<Operation>} - A promise that resolves to an `Operation` object with status details or an error object.
 *
 * @throws {Error} - If an error occurs, it catches the error and returns an error object with:
 *  - "Server error" if the server responded with an error
 *  - "No response received" if there was no response from the server
 *  - "Error setting up request" if the request configuration failed
 */
const checkOperation = async (operationId: string): Promise<Operation> => {
  let data = <Operation>{};
  try {
    const response = await axios.get(
      `${UNSTOPPABLE_SANDBOX_API_URL}/operations/${operationId}`,
      {
        headers: {
          Authorization: 'Bearer ' + UNSTOPPABLE_SANDBOX_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Operation Status:', response.data);
    data = response.data as Operation;
    return data;
  } catch (error: any) {
    if (error.response) {
      console.error('Server error:', error.response.data);
      data.error = { message: 'Server error', details: error.response.data };
      return data;
    } else if (error.request) {
      console.error('No response received:', error.request);
      data.error = { message: 'No response received', details: error.request };
      return data;
    } else {
      console.error('Error setting up request:', error.message);
      data.error = { message: 'Error setting up request', details: error.message };
      return data;
    }
  }
};
```

```typescript trackOperation
/**
 * Periodically tracks the status of an operation and updates the database.
 *
 * This function polls the Unstoppable Domains API at a set interval to check the
 * status of a specified operation. It stops tracking if the operation completes.
 *
 * @param {string} operationId - The ID of the operation to track.
 */
const trackOperation = async (operationId: string) => {
  const interval = setInterval(async () => {
    const operation = await checkOperation(operationId);
    if (operation.error) {
      console.log('Error:', operation.error);
    } else {
      if (operation.status === "COMPLETED") {
        // Handle completed operation
        clearInterval(interval);
      }
      if (operation.status === "FAILED") {
        // Handle failed operation
        clearInterval(interval);
      }
      // You would want to ensure you're handling other status cases here
    }
  }, 60000); // 1 minute timer
};
```

```typescript returnDomain
import { Return } from './types/returns';

/**
 * Returns a domain to Unstoppable Domains.
 *
 * This function sends a DELETE request to the Unstoppable Domains API to remove
 * the specified domain from the default API wallet and returns it to Unstoppable Domains. 
 * It returns a confirmation or an error object in case of failure. Domains must be returned within 14 days.
 *
 * @param {string} domainId - The ID of the domain to return.
 * @returns {Promise<Return>} - A promise that resolves to a `Return` object with return details or an error object.
 *
 * @throws {Error} - If an error occurs, it catches the error and returns an error object with:
 *  - "Server error" if the server responded with an error
 *  - "No response received" if there was no response from the server
 *  - "Error setting up request" if the request configuration failed
 */
const returnDomain = async (domainId: string): Promise<Return> => {
  let data = <Return>{};
  try {
    const response = await axios.delete(
      `${UNSTOPPABLE_SANDBOX_API_URL}/domains/${domainId}`,
      {
        headers: {
          Authorization: 'Bearer ' + UNSTOPPABLE_SANDBOX_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    data = response.data as Return;
    return data
  } catch (error: any) {
    if (error.response) {
      console.error('Server error:', error.response.data);
      data.error = { message: 'Server error', details: error.response.data };
      return data;
    } else if (error.request) {
      console.error('No response received:', error.request);
      data.error = { message: 'No response received', details: error.request };
      return data;
    } else {
      console.error('Error setting up request:', error.message);
      data.error = { message: 'Error setting up request', details: error.message };
      return data;
    }
  }
};
```
```typescript transferDomain
import { Transfer } from './types/transfers';

/**
 * Transfers a domain to a specified wallet address.
 *
 * This function sends a PUT request to the Unstoppable Domains API to transfer ownership
 * of the specified domain to the provided wallet address. It returns the transfer details
 * or an error object in case of a failure.
 *
 * @param {string} domainId - The ID of the domain to transfer.
 * @param {string} walletAddress - The wallet address to transfer the domain ownership to.
 * @returns {Promise<Transfer>} - A promise that resolves to a `Transfer` object with transfer details or an error object.
 *
 * @throws {Error} - If an error occurs, it catches the error and returns an error object with:
 *  - "Server error" if the server responded with an error
 *  - "No response received" if there was no response from the server
 *  - "Error setting up request" if the request configuration failed
 */
const transferDomain = async (domainId: string, walletAddress: string): Promise<Transfer> => {
  let data = <Transfer>{};
  try {
    const response = await axios.put(
      `${UNSTOPPABLE_SANDBOX_API_URL}/domains/${domainId}`,
      JSON.stringify({
        name: domainId,
        owner: {
          type: 'EXTERNAL',
          address: walletAddress
        },
        records: {}
      }),
      {
        headers: {
          Authorization: 'Bearer ' + UNSTOPPABLE_SANDBOX_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    data = response.data as Transfer;
    return data
  } catch (error: any) {
    if (error.response) {
      console.error('Server error:', error.response.data);
      data.error = { message: 'Server error', details: error.response.data };
      return data;
    } else if (error.request) {
      console.error('No response received:', error.request);
      data.error = { message: 'No response received', details: error.request };
      return data;
    } else {
      console.error('Error setting up request:', error.message);
      data.error = { message: 'Error setting up request', details: error.message };
      return data;
    }
  }
};
```

We'll want to update our original `/api/register` endpoint with the `trackOperation()` function as registrations are blockchain dependant. We don't need to worry about the `transfer` or `return` functions just yet.

```typescript
app.post('/api/register', async (req: Request, res: Response) => {
  const domainId = req.body.domainId as string;
  try {
    const register = await registerDomain(domainId);
    if (register.error) {
      res.status(500).json(register);
    } else {
      res.json(register);
      trackOperation(register.operation.id);
    }
  } catch (error: any) {
    res.status(500).json({ error: 'Error registering domain', details: error.message });
  }
});
```

### Mock Database 

As the focus of this guide is not databases, we'll be taking advantage of `lowdb` which is a type-safe local JSON database. We'll use these mock databases to store Partner API responses for our orders, transfers, and returns in an easily-digestible format. These responses will be used in conjunction with the `trackOperation()` function to know when we can complete other actions on the domain. Only one operation can be done on a domain at a time so it's important to now when we're able to act on it again. We'll add the below to our `./server/src/server.ts` file.

To start, we'll need to specify the storage directory for the JSON files as well as the default data for the JSON. In this case, we'll be using the `./server/src/data/` directory for the JSON files and will specify `items` as our default data: 

```typescript
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSONFile } from 'lowdb/node';
import { Low } from 'lowdb';
import { Orders } from './types/orders';
import { Transfers } from './types/transfers';
import { Returns } from './types/returns';

// Directory setup for the databases
const __dirname = dirname(fileURLToPath(import.meta.url));

// Default data for databases
const defaultOrderData: Orders = { items: <Order[]>[] }
const defaultTransferData: Transfers = { items: <Transfer[]>[] }
const defaultReturnData: Returns = { items: <Return[]>[] }

// Paths for local JSON databases
const orderDBPath = path.join(__dirname, 'data/orders.json')
const transferDBPath = path.join(__dirname, 'data/transfers.json')
const returnDBPath = path.join(__dirname, 'data/returns.json')
```

From there, we can instantiate and start the databases: 

```typescript
// LowDB instances for each JSON database
const orderDB = new Low(new JSONFile<Orders>(orderDBPath), defaultOrderData);
const transferDB = new Low(new JSONFile<Transfers>(transferDBPath), defaultTransferData);
const returnDB = new Low(new JSONFile<Returns>(returnDBPath), defaultReturnData);

/**
 * Initializes local JSON databases for orders, transfers, and returns.
 * Reads data from the database files and writes default data if none exists.
 */
const initDB = async () => {
  // Initialize Orders database
  await orderDB.read();
  orderDB.data = orderDB.data || defaultOrderData;
  await orderDB.write();

  // Initialize Transfers database
  await transferDB.read();
  transferDB.data = transferDB.data || defaultTransferData;
  await transferDB.write();

  // Initialize Returns database
  await returnDB.read();
  returnDB.data = returnDB.data || defaultReturnData;
  await returnDB.write();
  console.log('Databases initialized');
};

// Initialize the databases on server start
initDB().catch((error) => console.error('Error initializing DB:', error));
```

With the databases initialized, we can update our original `/api/register` endpoint with the JSON `orderDB` accordingly. This will add the Partner API response for each registration to `./server/src/data/orders.json`:

```typescript
app.post('/api/register', async (req: Request, res: Response) => {
  const domainId = req.body.domainId as string;
  try {
    const register = await registerDomain(domainId);
    if (register.error) {
      res.status(500).json(register);
    } else {
      res.json(register);
      await orderDB.update(({ items }) => items.push(register));
      trackOperation(register.operation.id, orderDB);
    }
  } catch (error: any) {
    res.status(500).json({ error: 'Error registering domain', details: error.message });
  }
});
```

Currently, the `trackOperation()` function only sets an interval for synchronously checking an operation ID until it either succeeds or fails. However, we need to utilize this function to keep our `orders.json` file up-to-date. To do this, we'll need a way to check the operation status currently saved in the orders database as well as a way to update it. We can do that with these two functions: 

```typescript
/**
 * Updates an operation in the database with new operation data.
 *
 * Reads the database, searches for an existing operation by its ID, and updates it
 * if found. Writes the updated data back to the database.
 *
 * @param {Operation} operation - The operation data to update in the database.
 * @param {Low<any>} db - The database instance to perform the update.
 * @returns {Promise<void>} - A promise that resolves when the operation is updated.
 */
const updateOperation = async (operation: Operation, db: Low<any>): Promise<void> => {
  await db.read();
  const item = db.data.items.find((item: any) => item.operation.id === operation.id);
  if (item) {
    item.operation = operation;
    await db.write();
  }
};

/**
 * Retrieves the current status of an operation from the database.
 *
 * This function reads the database, searches for an operation by its ID,
 * and returns its status. If the operation is not found, it returns the provided
 * default status.
 *
 * @param {string} operationId - The ID of the operation to retrieve the status for.
 * @param {string} status - The default status to return if the operation is not found.
 * @param {Low<any>} db - The database instance to search.
 * @returns {Promise<string>} - A promise that resolves to the status of the operation.
 */
const getCurrentOperationStatus = async (operationId: string, status: string, db: Low<any>): Promise<string> => {
  await db.read();
  const item = db.data.items.find((item: any) => item.operation.id === operationId);
  if (item) {
    return item.operation.status;
  }
  return status;
};
```

From there, we can update our `trackOperation()` function with database support. Now, it will check if there has been a change in the operation status :

```typescript
const trackOperation = async (operationId: string, db: Low<any>) => {
  const interval = setInterval(async () => {
    const operation = await checkOperation(operationId);
    const status = await getCurrentOperationStatus(operationId, operation.status, db);
    if (operation.error) {
      console.log('Error:', operation.error);
    } else {
      if (operation.status != status) {
        await updateOperation(operation, db);
        if (operation.status === "COMPLETED") {
          // Handle completed operation
          clearInterval(interval);
        }
        if (operation.status === "FAILED") {
          // Handle failed operation
          clearInterval(interval);
        }
        // You would want to ensure you're handling other status cases here
      }
    }
  }, 60000); // 1 minute timer
};
```

One final consideration with `lowdb` is that the database stops running when the `express` server is stopped. As such, it is possible for operations to complete and not be properly tracked. As a workaround, we can call `trackOperation()` when the server starts for any operation in our databases that are neither `COMPLETED` or `FAILED`.

```typescript
/**
 * Initializes tracking for any pending operations in the order, transfer, and return databases.
 * Loads the database data and identifies entries where the `operation.status` is not 'COMPLETED'.
 * For each pending operation, it triggers tracking functions to monitor ongoing processes.
 *
 * @async
 * @function initializeTracking
 * @returns {Promise<void>} - Resolves once all pending operations have been re-tracked.
 */
const initializeTracking = async (): Promise<void> => {
  // Load databases
  await orderDB.read();
  await transferDB.read();
  await returnDB.read();

  // Function to check and track pending operations
  const checkAndTrackPendingOperations = async (db: Low<any>) => {
    // Update according to the appropriate status of the operation
    const pendingItems = db.data?.items?.filter((item: any) => item.operation.status !== 'COMPLETED' && item.operation.status !== 'FAILED') || [];
    for (const item of pendingItems) {
      await trackOperation(item.operation.id, db);
    }
  };

  // Check and track pending operations in each database
  await checkAndTrackPendingOperations(orderDB);
  await checkAndTrackPendingOperations(transferDB);
  await checkAndTrackPendingOperations(returnDB);
  console.log('Pending operations re-tracked');
}

// Call initializeTracking when server starts
initializeTracking().catch((error) => console.error('Error initializing tracking:', error));
```

### Checkout

At this point, we have tied everything together with the exception of these two unused functions: `returnDomain()` and `transferDomain()`. As a reminder, both the `return` and `transfer` functions depend on the status of our frontend checkout. Should checkout succeed, we'll transfer the registered domain to the end user. If checkout fails, we'll return the registered domain to Unstoppable.

While this will be fully dependent on the frontend solution, we'll keep things simple and leverage our `lowdb` databases with a set interval. First, we need a way for the frontend to tell us whether checkout is completed or not and for what order.  

We'll set up a `POST` endpoint on our `express` server that will accept `application/json`. We'll need the domain that was purchased, the operation ID, a `TRUE` / `FALSE` boolean, and the wallet address the domain should be transferred to. The below function will use these parameters to update our `orderDB` with the appropriate data.

```typescript
/**
 * POST /api/checkout/:domain - Processes checkout for a domain by updating the order details.
 *
 * @param {string} domain - The domain ID in the URL path.
 * @body {string} wallet - Wallet address for the domain transfer.
 * @body {boolean} payment - Payment confirmation status.
 * @body {string} operationId - Operation ID associated with the checkout.
 * @returns {Response} - Returns a JSON response indicating order processing status.
 */
app.post('/api/checkout/:domain', async (req: Request, res: Response) => {
  const domain = req.params.domain as string;
  const walletAddress = req.body.wallet as string;
  const payment = req.body.payment as boolean;
  const operationId = req.body.operationId as string;
  try {
    await orderDB.read();
    const order = orderDB.data.items.find(order => order.operation.id === operationId);
    if (order) {
      order.walletAddress = walletAddress;
      order.payment = payment;
      await orderDB.write();
    }
    res.json(`Order for domain ${domain} is being processed`);
  } catch (error: any) {
    res.status(500).json({ error: 'Error processing checkout', details: error.message });
  }
});
```

Next, we'll need a function similar to `trackOperation()` that will track the status of the order checkout against the database. If the registration operation is complete, check if the `payment` boolean is `TRUE` and subsequently check if there is a `wallet address`. Presumably, that will be a successful order. Otherwise, assume failure and return the domain. Depending on the state, we'll use our `returnDomain()` or `transferDomain` functions and their associated databases.

The below does not account for edge cases and is meant as a starting point.

```typescript
/**
 * Monitors the checkout process and handles domain transfer or return based on payment status.
 *
 * This function periodically checks the status of an order associated with the provided domain ID.
 * If the order status is "COMPLETED" and payment is successful, it transfers the domain to the user's
 * wallet address. If payment is unsuccessful, it returns the domain to Unstoppable Domains.
 *
 * @param {string} operationId - The ID of the operation to monitor during checkout.
 */
const trackCheckout = async (operationId: string) => {
  const interval = setInterval(async () => {
    await orderDB.read();
    const order = orderDB.data.items.find(order => order.operation.id === operationId);
    if (order) {
      // Successful checkout
      if (order.operation.status === "COMPLETED" && order.walletAddress && order.payment === true) {
        try {
          const domainTransfer = await transferDomain(order.operation.domain, order.walletAddress);
          if (domainTransfer.error) {
            console.log('Error transferring domain:', domainTransfer.error);
            // Handle failed init transfer
          } else {
            console.log('Domain transferred:', domainTransfer);
            // Handle successful init transfer
            clearInterval(interval);
            await transferDB.update(({ items }) => items.push(domainTransfer));
            trackOperation(domainTransfer.operation.id, transferDB);
          }
        } catch (error: any) {
          console.log('Error transferring domain:', error.message);
        }
      // Usuccessful Checkout
      } else if (order.operation.status === "COMPLETED" && order.payment != true) {
        try {
          const domainReturn = await returnDomain(order.operation.domain);
          if (domainReturn.error) {
            console.log('Error returning domain:', domainReturn.error);
            // Handle failed init return
          } else {
            console.log('Domain returned:', domainReturn);
            // Handle successful init return
            clearInterval(interval);
            await returnDB.update(({ items }) => items.push(domainReturn));
            trackOperation(domainReturn.operation.id, returnDB);
          }
        } catch (error: any) {
          console.log('Error returning domain:', error.message);
        }
      }
      // You would want to ensure you're handling other status cases here
    }
  }, 180000); // 3 minute timer
};
```

Finally, we can update our original `/api/register` endpoint with the `trackCheckout()` function:

```typescript
app.post('/api/register', async (req: Request, res: Response) => {
  const domainId = req.body.domainId as string;
  try {
    const register = await registerDomain(domainId);
    if (register.error) {
      res.status(500).json(register);
    } else {
      res.json(register);
      await orderDB.update(({ items }) => items.push(register));
      trackOperation(register.operation.id, orderDB);
      trackCheckout(register.operation.id);
    }
  } catch (error: any) {
    res.status(500).json({ error: 'Error registering domain', details: error.message });
  }
});
```

At this point, we have a completed backend built with Node and `express`!

## Step 3: Setup Next.js

With our backend completed, it is now time to focus on the frontend. Next.js will serve this purpose throughout the remainder of this guide. While there are many viable alternatives, Next.js provides easy page and API management. 

In this section of the guide, we will creat functions to call our backend, build out an ecommerce cart, checkout and order pages, as well as a general search page. following sections will not focus on CSS or visual improvements but the initial setup script did add `Tailwind CSS` and the [full example](https://github.com/unstoppabledomains/demos/tree/vincent/full-flow/Unstoppable%20Partner%20API%20Example) can be referenced for a rough CSS outline.

### Environment Variables

Build out your `./client/.env` file per the below. You can retrieve your UAuth Client ID key by following our [Retrieve Client Credentials guide](https://docs.unstoppabledomains.com/identity/quickstart/retrieve-client-credentials/). 

```javascript
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_CLIENT_ID=
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000
NEXT_PUBLIC_SCOPES=openid wallet profile
```

### Express.js API

With our environment variables configured, we can start outlining our backend function calls. Per the above, we have four exposed endpoints on our `express` server: 
- `POST` to `/api/availability`
- `POST` to `/api/register`
- `GET` to `/api/domains`
- `POST` to `/api/checkout/:domain`

The general outline for each function will be very similar and, with the exception of `/api/domains` will contain a JSON body. We'll need to call our backend server running on `port 3001` and handle both the expected result and any possible errors. In our `./client/src/app/api` directory, create the following files and add add the outlined example functions.
-  `fetchAvailability.ts`
-  `claimDomain.ts`
-  `fetchSuggestions.ts`
-  `initCheckout.ts`

```typescript fetchAvailability.ts
import axios from 'axios';
import { Domains } from '@/types/domains';

/**
 * Checks the availability of a list of domains.
 *
 * @param {string[]} domains - An array of domain names to check for availability.
 * @returns {Promise<Domains>} - A promise that resolves to a `Domains` object containing availability data for each domain.
 * @throws {Error} - If an error occurs during the request, throws an error with details.
 */
export const fetchAvailability = async (domains: string[]) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/availability`;
    const res = await axios.post(url, 
      {
        domains: domains,
      }
    );

    return res.data as Domains;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error('Error domain(s) availability: ', err);
    }
  }
}
```

```typescript claimDomain.ts
import axios from 'axios';
import { DomainSuggestion } from '../../types/suggestions';
import { Order } from '@/types/orders';

/**
 * Attempts to claim a specific domain.
 *
 * @param {DomainSuggestion} selectedDomain - The domain to claim, specified by a `DomainSuggestion` object.
 * @returns {Promise<Order>} - A promise that resolves to an `Order` object if the domain is successfully claimed.
 * @throws {Error} - If an error occurs during the request, throws an error with details.
 */
export const claimDomain = async (selectedDomain: DomainSuggestion) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/register`;
    const res = await axios.post(url, 
      {
        domainId: selectedDomain.name,
      }
    );

    return res.data as Order;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error('Error registering domain(s): ', err);
    }
  }
}
```

```typescript fetchSuggestions.ts
import { Suggestions } from '@/types/suggestions';
import axios from 'axios';

/**
 * Fetches domain suggestions based on a search query.
 *
 * @param {string} query - The search term used to find domain suggestions.
 * @returns {Promise<Suggestions>} - A promise that resolves to a `Suggestions` object containing domain suggestions.
 * @throws {Error} - If an error occurs during the request, throws an error with details.
 */
export const fetchSuggestions = async (query: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/domains?query=${query}`;
    const res = await axios.get(url);

    return res.data as Suggestions;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error('Error fetching domains: ', err);
    }
  }
}
```

```typescript initCheckout.ts
import axios from 'axios';

/**
 * Initializes the checkout process for a specific domain.
 *
 * @param {string} domain - The domain name being checked out.
 * @param {string} walletAddress - The wallet address for the domain transfer.
 * @param {boolean} payment - The payment status; `true` if payment is confirmed.
 * @param {string} operationId - The unique ID for the checkout operation.
 * @returns {Promise<any>} - A promise that resolves to the server response on checkout initiation.
 * @throws {Error} - If an error occurs during the request, throws an error with details.
 */
export const initCheckout = async (domain: string, walletAddress: string, payment: boolean, operationId: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/checkout/${domain}`;
    const res = await axios.post(url, 
      {
        wallet: walletAddress,
        payment: payment,
        operationId: operationId,
      }
    );

    return res.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error('Error processing checkout: ', err);
    }
  }
}
```

The above four functions will serve as the core of our frontend. 

### Search

In our 

### Cart

### Checkout

### Orders

That's it! You are now running a local ecommerce platform for selling Unstoppable domains.