---
title: Resolve .zil With Direct Blockchain Calls | UD Developer Portal
description: This page reviews the process for resolving .zil domain names with direct blockchain calls.
---

# Resolve .zil With Direct Blockchain Calls

In this tutorial, we’ll build a simple app to resolve `.zil` domains — to read the information the domain holds.

:::info
This guide only applies to `.zil` domains. For information on resolving .crypto domains, See the guide for [Resolve Unstoppable Domains With Direct Blockchain Calls](resolve-unstoppable-domain-names.md).
:::

Here’s the finished product:

<figure>

![Dynamic GIF showing the steps to resolve a .zil domain](/images/zil-resolve-dynamic-image.gif)

<figcaption>Dynamic GIF showing the steps to resolve a .zil domain</figcaption>
</figure>

## Initialize the Project Folder

First, create a project folder with two files inside: `index.html` and `index.js`

```bash
$ mkdir zil-resolution
$ cd zil-resolution
$ touch index.js index.html
```

Your folder structure should look like this:

```
.
├── index.html
├── index.js
```

### Build the Layout: `index.html`

Next, let’s open our HTML page and add some boilerplate code. We are going to use the [js-sha256](https://cdnjs.com/libraries/js-sha256) CDN for encoding the domain.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Basic .zil integration</title>
</head>

<body>

  <div id="main" style="
    display: flex;
    flex-direction: column;
    height: 100vh;">
      <input id="input" />
      <button id="button">Resolve</button>

      <div
        id="records"
        style="display: flex; flex-direction: column;">

      </div>

  </div>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"
        integrity="sha512-szJ5FSo9hEmXXe7b5AUVtn/WnL8a5VofnFeYC2i2z03uS2LhAch7ewNLbl5flsEmTTimMN0enBZg/3sQ+YOSzQ=="
        crossorigin="anonymous">
    </script>
    <script src="./index.js"></script>
</body>

</html>
```

This is a simple HTML document with a **#main** `<div>` in the body. It contains an `<input>` field for our user, a `<button>` to resolve the domain, and **#records** `<div>` where we’ll display the results.

### Attach Some JavaScript to the Button

Now that we have our `index.html` file set up, let’s add some JavaScript. We can start by opening our `index.js` file and defining two constants:

| Constant                                   | Description                                                            |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| `ZILLIQA\_API`                               | This official API endpoint serves an entry point to Zilliqa blockchain |
| <p>`UD_REGISTRY`</p><p>`_CONTRACT_ADDRESS`</p> | Registry address of UD without _0x_ prefix                             |

We’ll discuss the registry contract address later in this guide.

```javascript
const ZILLIQA_API = "https://api.zilliqa.com/";
const UD_REGISTRY_CONTRACT_ADDRESS = "9611c53BE6d1b32058b2747bdeCECed7e1216793";
```

Next, we’ll need to define and attach the function `resolve()` to our HTML button under `id="button"`.

We can start writing this function by taking our input from the text field and preparing to handle an incorrect domain. The following code snippet shows the start of the `resolve()` function:

```javascript
const ZILLIQA_API = "https://api.zilliqa.com/";
const UD_REGISTRY_CONTRACT_ADDRESS = "9611c53BE6d1b32058b2747bdeCECed7e1216793";

async function resolve() {
  const userInput = (document.getElementById("input")).value;
  if (!userInput.endsWith(".zil")) {
    // placeholder for future error handling
    return;
  }
}

document.getElementById("button").addEventListener('click', () => resolve());
```

We will revisit [error handling](#set-up-error-notifications) later in this guide.

## Tokenize Your Domain by Namehashing

Namehashing is an algorithm that tokenizes your domain name in a way that a **Zilliqa** smart contract can understand.

To tokenize our domain, we’ll need to split the domain by the “.” character into separate labels, reverse the array, and reduce it to a single hash. We can do this by implementing a recursive `hash()` function.

We’ll also want to implement an `arrayToHex()` function to get the result as a string, as well as a wrapper function `namehash()`.

```javascript
function namehash(name) {
  const hashArray = hash(name);
  return arrayToHex(hashArray);
}

function hash(name) {
  if (!name) {
      return new Uint8Array(32);
  }
  const [label, ...remainder] = name.split('.');
  const labelHash = sha256.array(label);
  const remainderHash = hash(remainder.join('.'));
  return sha256.array(new Uint8Array([...remainderHash, ...labelHash]));
}

function arrayToHex(arr) {
  return '0x' + Array.prototype.map.call(arr, x => ('00' + x.toString(16)).slice(-2)).join('');
}
```

The following table shows sample Namehash outputs:

| Domain   | Namehash                                                             |
| -------- | -------------------------------------------------------------------- |
| ""       | `0x1c9ecec90e28d2461650418635878a5c91e49f47586ecf75f2b0cbb94e897112` |
| zil      | `0x9915d0456b878862e822e2361da37232f626a2e47505c8795134a95d36138ed3` |
| brad.zil | `0x5fc604da00f502da70bfbc618088c0ce468ec9d18d05540935ae4118e8f50787` |

:::info
It is essential to know the difference between Zilliqa namehashing and [EIP-137](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-137.md#namehash-algorithm). Zilliqa uses **sha256 from SHA-2** instead of **keccak256,** which is more commonly used in Ethereum.
:::

Let’s use this function to take a `namehash()` of our `userInput` in `index.js`:

```javascript
async function resolve() {
  const userInput = (document.getElementById("input")).value;
  if (!userInput.endsWith(".zil")) {
    // placeholder for future error handling
    return;
  }

  const token = namehash(userInput);
}
```

## Get the Resolver Address

Our next step is to fetch two very important addresses attached to every Unstoppable domain: the **owner address** and the **resolver contract address**. We can get them by querying the Unstoppable Domains [ZNS Registry Contract](https://viewblock.io/zilliqa/address/zil1jcgu2wlx6xejqk9jw3aaankw6lsjzeunx2j0jz).

The owner address, as expected, is the address that owns a domain. The resolver contract address requires a little more explanation. All Unstoppable domains are stored using two main smart contracts: a **Registry** contract and a **Resolver** contract.

The following table provides contract descriptions.

| Contract          | Explanation                                                                       |
| ----------------- | --------------------------------------------------------------------------------- |
| Registry contract | Stores the owner's address and a resolver contract address                        |
| Resolver contract | Stores all records attached to the domain, such as BTC address or an IPFS website |

In order to get the BTC address from a domain, we will need two queries: one to check the registry for the appropriate resolver address and another to check the resolver for the records.

Let’s write a function to make a JSON-RPC POST API request to the Zilliqa blockchain using their gateway. This function will take an array of parameters that we want to send and make a POST call to the Zilliqa API. The following code snippet shows the `fetchZilliqa()` function:

```javascript
async function fetchZilliqa(params) {
  const body = {
    method: "GetSmartContractSubState",
    id: "1",
    jsonrpc: "2.0",
    params
  };

  return await fetch(ZILLIQA_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
}
```

The parameters we need to send are:

* The **contract address** we want to query,
* For the **contract field name,** use string `"records"`,
* The contract state keys array of strings, which in our case is the domain namehash (this should be the only value in the array).

Let’s update our `resolve()` function and use the `fetchZilliqa()` function:

```javascript
async function resolve() {
  const userInput = document.getElementById("input").value;
  if (!userInput.endsWith(".zil")) {
    // placeholder for future error handling
    return;
  }

  const token = namehash(userInput);
  const registryState =
    await fetchZilliqa([UD_REGISTRY_CONTRACT_ADDRESS, "records", [token]]);

  if (registryState.result === null) {
    // placeholder for future error handling
    return;
  }
  const [ownerAddress, resolverAddress] =
    registryState.result.records[token].arguments;

  if (resolverAddress === "0x0000000000000000000000000000000000000000") {
    // placeholder for future error handling
    return;
  }

  console.log({
    ownerAddress,
    resolverAddress
  });

}
```

Now if we query for `brad.zil`, we should get a response as below:

```json
{
  "id": "1",
  "jsonrpc": "2.0",
  "result": {
    "records": {
      "0x5fc604da00f502da70bfbc618088c0ce468ec9d18d05540935ae4118e8f50787": {
        "argtypes": [],
        "arguments": [
          "0x2d418942dce1afa02d0733a2000c71b371a6ac07",
          "0xdac22230adfe4601f00631eae92df6d77f054891"
        ],
        "constructor": "Record"
      }
    }
  }
}
```

Order is very important, as the first address in the arguments array is the owner address, and the second one is a resolver contract address.

If we open the `index.html` file in the browser and type `brad.zil` as our domain input, we will see the following in the console:

```bash
ownerAddress: "0x2d418942dce1afa02d0733a2000c71b371a6ac07",
resolverAddress: "0xdac22230adfe4601f00631eae92df6d77f054891"
```

## Fetch the Records

After we verify that a domain has an owner address, we can query its resolver contract address for its records.

We can use our `fetchZilliqa()` function again, only this time change the parameters to contain the **resolver address**. For the state keys, we can pass an empty array. This code snippet shows how to fetch  records with `fetchZilliqa()` function:

```javascript
const recordResponse = await fetchZilliqa([
  resolverAddress.replace("0x", ""),
  "records",
  []
]);
console.log(recordResponse.result.records);
```

:::info
You must remove the leading `"0x"` from the contract address. This is a requirement of the Zilliqa Blockchain API
:::

We should get an object printed on our console with all the keys registered under that domain. Let’s test it out with domain `brad.zil`. For your result, you should get something similar to the following in the console.

```json
{
  "crypto.BCH.address": "qrq4sk49ayvepqz7j7ep8x4km2qp8lauvcnzhveyu6",
  "crypto.BTC.address": "1EVt92qQnaLDcmVFtHivRJaunG2mf2C3mB",
  "crypto.DASH.address": "XnixreEBqFuSLnDSLNbfqMH1GsZk7cgW4j",
  "crypto.ETH.address": "0x45b31e01AA6f42F0549aD482BE81635ED3149abb",
  "crypto.LTC.address": "LetmswTW3b7dgJ46mXuiXMUY17XbK29UmL",
  "crypto.XMR.address": "447d7TVFkoQ57k3jm3wGKoEAkfEym59mK96Xw5yWamDNFGaLKW5wL2qK5RMTDKGSvYfQYVN7dLSrLdkwtKH3hwbSCQCu26d",
  "crypto.ZEC.address": "t1h7ttmQvWCSH1wfrcmvT4mZJfGw2DgCSqV",
  "crypto.ZIL.address": "zil1yu5u4hegy9v3xgluweg4en54zm8f8auwxu0xxj",
  "ipfs.html.value": "QmVaAtQbi3EtsfpKoLzALm6vXphdi2KjMgxEDKeGg6wHuK",
  "ipfs.redirect_domain.value": "www.unstoppabledomains.com"
}
```

## Display the Resolution

Since this is a simple example, we won’t get too fancy. We’ll just create a `<span>` element for each record containing its key and value, its owner address, and its resolver address.

```javascript
function cleanDOM(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function displayResolution(resolution) {
  const {
    ownerAddress,
    resolverAddress,
    records
  } = resolution;
  const mainContainer = document.getElementById('records');
  cleanDOM(mainContainer);

  const ownerRecord = document.createElement('span');
  ownerRecord.innerHTML = `ownerAddress: ${ownerAddress}`;

  const resolverRecord = document.createElement('span');
  resolverRecord.innerHTML = `resolverAddress: ${resolverAddress}`;

  mainContainer.appendChild(ownerRecord);
  mainContainer.appendChild(resolverRecord);

  Object.entries(records).map(([key, value]) => {
    const recordSpan = document.createElement('span');
    recordSpan.innerHTML = `${key} : ${value}`;
    mainContainer.appendChild(recordSpan);
  });
}
```

Let’s also call this function right after we get the records. Here's the usage of `displayResolution()` inside resolve function:

```javascript
const recordResponse = await fetchZilliqa([
    resolverAddress.replace("0x", ""),
    "records",
    []
]);
displayResolution({
  ownerAddress,
  resolverAddress,
  records: recordResponse.result.records});
```

We should see something like the following on successful resolution:

<figure>

![Example of a successful domain resolution](/images/zil-successful-domain-resolution.png)

<figcaption>Example of a successful domain resolution</figcaption>
</figure>

## Set up Error Notifications

Now that we have made a successful call, let’s deal with all possible errors that might come up during the resolution. We can easily distinguish some of the use cases for our errors:

| Error Notification       | Description                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Domain is not registered | We couldn't find an owner address                                                                            |
| Domain is not supported  | We are trying to resolve a domain that doesn't end with .zil                                                 |
| Domain is not configured | It is possible that owner address exists but resolver address is set to `0x00000000000000000000000000000000` |
| Record is not found      | Records are queried for an address but the domain owner hasn't set  up the records yet                       |

For our purposes, we’ll want to create a function to place an error in our **#records** `<div>`. We’ll also want to add a boolean argument `cleanDom` to remove everything from the **#records** `<div>` before we place an error for display.

```javascript
function displayError(message, cleanDom) {
  const mainContainer = document.getElementById('records');
  if (cleanDom) {
    cleanDOM(mainContainer);
  }
  const error = document.createElement('p');
  error.style.color = "red";
  error.innerHTML = message;
  mainContainer.appendChild(error);
  return ;
}
```

Although any string can be stored as a key under the domain, Unstoppable domains have [standardized the keys](/developer-toolkit/reference/records-reference.md) across many applications.

For the **Record is not found** error message, we can check if the domain has a BTC address. If not, we can show the error without cleaning the entire DOM.

We will need to display errors in two functions: `resolve()` and `displayResolution()`. Here is how both functions should look after all of the updates:

### Final `resolve()` Function

```javascript
async function resolve() {
  const userInput = document.getElementById("input").value;
  if (!userInput.endsWith(".zil")) {
    displayError('domain is not supported', true);
    return;
  }

  const token = namehash(userInput);
  const registryState =
    await fetchZilliqa([UD_REGISTRY_CONTRACT_ADDRESS, "records", [token]]);

  if (registryState.result == null) {
    displayError('domain is not registered', true);
    return;
  }

  const [ownerAddress, resolverAddress] =
    registryState.result.records[token].arguments;

  if (resolverAddress === "0x0000000000000000000000000000000000000000") {
    displayError('domain is not configured', true);
    return;
  }

  const recordResponse = await fetchZilliqa([
    resolverAddress.replace("0x", ""),
    "records",
    []
  ]);

  displayResolution({
    ownerAddress,
    resolverAddress,
    records: recordResponse.result.records
  });
}
```

### Final `displayResolution()` Function

```javascript
function displayResolution(resolution) {
  const {
    ownerAddress,
    resolverAddress,
    records
  } = resolution;
  const mainContainer = document.getElementById('records');
  cleanDOM(mainContainer);

  const ownerRecord = document.createElement('span');
  ownerRecord.innerHTML = `ownerAddress: ${ownerAddress}`;

  const resolverRecord = document.createElement('span');
  resolverRecord.innerHTML = `resolverAddress: ${resolverAddress}`;

  mainContainer.appendChild(ownerRecord);
  mainContainer.appendChild(resolverRecord);

  Object.entries(records).map(([key, value]) => {
    const recordSpan = document.createElement('span');
    recordSpan.innerHTML = `${key} : ${value}`;
    mainContainer.appendChild(recordSpan);
  });

  if (!records['crypto.BTC.address']) {
    displayError('crypto.BTC.address: Record is not found', false);
  }
}
```

Now you can resolve any `.zil` domain and display the appropriate error message to your users. Just open the `index.html` file in your browser and play around with the results to get a better sense of the errors that may come up and the error messages you might want to include.

The following table displays some domains to test for resolution:

| Domain           | Result                      |
| ---------------- | --------------------------- |
| `brad.zil`         | resolves without any errors |
| `johnnyjumper.zil` | domain has no BTC record    |
| `unregistered.zil` | domain is not registered    |
| `paulalcock.zil`   | domain is not configured    |

## Resources

* [Full source code for this guide](https://github.com/unstoppable-domains-integrations/zil-Integration)
* [UD Discord Community](https://discord.gg/unstoppabledomains)
