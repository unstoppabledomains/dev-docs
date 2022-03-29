---
title: Resolve Unstoppable Domains with Direct Blockchain Calls
description: This page reviews the process for resolving Unstoppable domains with direct blockchain calls. It has been updated to reflect changes on L2 Polygon network.
---

# Resolve Unstoppable Domains with Direct Blockchain Calls

:::info
The `.zil` namespace is located on a separate chain and requires a [different process](resolve-zil-without-libraries.md).
:::

In this tutorial, we will look at resolving Unstoppable Domains, using nothing but HTML, JavaScript, and the ethers.js library. Each domain can be resolved in exactly the same manner as the examples shown below.

![Dynamic GIF showing the steps to resolve an Unstoppable domain (.crypto, .wallet, .dao, etc.)](/images/crypto-article.gif)

To resolve an unstoppable domain, we will need to

* Tokenize the domain
* Configure Ethers.js library
* Make a call and fetch the data

Let’s visualize the resolution process using some of the simplest tools a web developer has: knowledge of `HTML` and `JavaScript`.

## Initialize the Project Folder

The first thing we need to do is create a folder with three files inside: index.html, index.js, and ethers.js.

```
$ mkdir crypto-resolution
$ cd crypto-resolution
$ touch index.html index.js ethers.js
```

Your project folder should look exactly like the following:

```
.
├── index.html
├── index.js
├── ethers.js
```

### Build the Layout: `index.html`

Let’s open the index.html file and build out the layout for our app. To create a positive UI experience for the user, we’ll need to build an input bar, a button to trigger the resolution, and a `<div>` to display our records.

Next, we’ll need to connect [js-sha3](https://www.npmjs.com/package/js-sha3) (so that we can use the keccak\_256 hash function) and [ethers.js](https://docs.ethers.io/v5/getting-started/) to communicate with the blockchain contract.

:::info
We will need the keccak\_256 hash function to calculate ERC-721 token ID for the **unstoppable** domain. To see a full description of this process, read our [Namehashing article](../../getting-started/domain-registry-essentials/namehashing.md).
:::

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Basic .crypto integration</title>
    </head>
    <body>
      <div id="main" style="
      display: flex;
      flex-direction: column;
      height: 100vh;"
      >

        <input id="input" />
        <button onclick="resolve()">Resolve</button>
        <div id="records" style="display: flex; flex-direction: column;">

        </div>
      </div>

      <!-- This exposes keccak_256 hash function -->
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/js-sha3/0.8.0/sha3.min.js"
        integrity="sha512-PmGDkK2UHGzTUfkFGcJ8YSrD/swUXekcca+1wWlrwALIZho9JX+3ddaaI9wmmf8PmgDIpMtx6TU8YBJAZS0mPQ=="
        crossorigin="anonymous">
      </script>

      <!-- This exposes the ethers.js library as a global variable: ethers -->
      <script src="https://cdn.ethers.io/lib/ethers-5.0.umd.min.js"
        type="application/javascript"></script>

      <!-- This are our custom files -->
      <script src="ethers.js"></script>
      <script src="index.js"></script>
    </body>
</html>
```

### Add Some JavaScript: `index.js`

Now that we have our `index.html` file set up, let’s add some JavaScript. We can start by inputting some basic code into our `index.js` file to capture the text from the input field and print it onto our console.

The code snippet below shows the resolve function:

```javascript
async function resolve() {
  const userInput = document.getElementById("input").value;
  console.log({ domain: userInput });
}
```

:::info
We can open `index.html` in a browser to make sure everything is connected and launches.
:::

## Tokenize Your Domain by Namehashing

Namehashing is an algorithm that tokenizes your domain name in a way that the `.crypto` smart contract can understand.

To tokenize our domain, we’ll need to split the domain name by the “.” character into separate labels, reverse the array, and reduce it to a single hash. We can do this by implementing a recursive hash function.

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
  const labelHash = keccak_256.array(label);
  const remainderHash = hash(remainder.join('.'));
  return keccak_256.array(new Uint8Array([...remainderHash, ...labelHash]));
}
function arrayToHex(arr) {
  return '0x' + Array.prototype.map.call(arr, x => ('00' + x.toString(16)).slice(-2)).join('');
}
```

This table shows a list of Namehash examples with different inputs:

| Label       | Namehash                                                             |
| ----------- | -------------------------------------------------------------------- |
| ""          | `0x88d4843af302c2093286898cd34cba7a471c3cdce4c78514fc971c3c6a53891e` |
| crypto      | `0x0f4a10a4f46c388cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f` |
| brad.crypto | `0x756e4e998dbffd803c21d23b06cd855cdc7a4b57706c95964a37e24b47c10fc9` |

## Configure the Ethers.js Library

To talk with any blockchain contract using `ethers.js`, we need to know the following:

* Ethereum contract address
* Polygon contract address
* Contract ABI
* Ethereum provider
* Polygon provider

Let’s add the following information to our `ethers.js` file:

```javascript
var ethAddress = '0x299974AeD8911bcbd2C61262605b89F591a53E83';
var polygonAddress = '0x332A8191905fA8E6eeA7350B5799F225B8ed30a9';

var abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: 'string[]',
        name: 'keys',
        type: 'string[]',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getData',
    outputs: [
      {
        internalType: 'address',
        name: 'resolver',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'string[]',
        name: 'values',
        type: 'string[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  }
];
var polygonProvider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/demo");
var provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.alchemyapi.io/v2/demo");
```

:::info
The network and contract addresses are from goerli and polygon mumbai test networks respectively. For mainnet, use the following contract addresses: [0xfEe4D4F0aDFF8D84c12170306507554bC7045878](https://etherscan.io/address/0xfee4d4f0adff8d84c12170306507554bc7045878#code) (Ethereum) and [0xA3f32c8cd786dc089Bd1fC175F2707223aeE5d00](https://polygonscan.com/address/0xa3f32c8cd786dc089bd1fc175f2707223aee5d00#code) (Polygon). Be sure to set the network to **mainnet** instead of **goerli**.
:::

For the scope of this project, we will only need to use the `getData()` function from the [CNS Smart Contract](../smart-contracts/cns-smart-contracts.md#proxyreader).

### Create a Contract Instance

Next, we’ll need to create a contract instance and create a function to query our contract.

```javascript
var ethContract = new ethers.Contract(ethAddress, abi, provider);
var poligonContract = new ethers.Contract(polygonAddress, abi, polygonProvider);

async function fetchContractData(contract, keys, tokenId) {
 return contract.getData(keys, tokenId);
}
```

By inspecting the contract’s getData function interface, we can see that it requires from us an **array of keys** and a **tokenId**. We can get the **tokenId** by calling the `namehash()` function from above.

:::info
Although any string can be stored as a key under the domain, Unstoppable Domains has [standardized the keys](../../getting-started/domain-registry-essentials/records-reference.md) across many applications.
:::

### Record Keys Lookup

The following table shows record keys and a description for each:

| Key                | Description                        |
| ------------------ | ---------------------------------- |
| crypto.BTC.address | BTC address attached to the domain |
| crypto.ETH.address | ETH address attached to the domain |

## Make the Call to the Contract

Let’s update our `resolve()` function to use the namehash and then look up the desired record keys from the input domain name. We’ll then want to print the result in the console to inspect it further.

First, we will query the polygon network and check the ownership. If there is no owner for a domain on Polygon network, we need to query the Ethereum network.

```javascript
async function resolveEthNetwork(tokenId, interestedKeys) {
 fetchContractData(ethContract, interestedKeys, tokenId).then(data => {
   console.log({
     ownerAddress: data.owner,
     resolverAddress: data.resolver,
     records: data[2]
   });
 });
}

async function resolveBothChains(tokenId, interestedKeys) {
 // try to resolve the polygon network first
 fetchContractData(poligonContract, interestedKeys, tokenId).then(data => {
   if (isEmpty(data.owner)) {
     // if no owner for domain found on polygon network look up the eth network
     return resolveEthNetwork(tokenId, interestedKeys);
   }

   // proceed with polygon results
   console.log({
     ownerAddress: data.owner,
     resolverAddress: data.resolver,
     records: data[2]
   });

 });
}


async function resolve() {
  const userInput = document.getElementById("input").value;
  const tokenId = namehash(userInput);

  const interestedKeys = [
    "crypto.BTC.address",
    "crypto.ETH.address",
  ];

  resolveBothChains(tokenId, interestedKeys);
}
```

If we try to resolve the **brad.crypto** domain with the above keys, we should see the following parsed result from `fetchContractData()` function:

```javascript
{
  "ownerAddress":"0x8aaD44321A86b170879d7A244c1e8d360c99DdA8",
  "resolverAddress":"0xb66DcE2DA6afAAa98F2013446dBCB0f4B0ab2842",
  "records":[
    "bc1q359khn0phg58xgezyqsuuaha28zkwx047c0c3y",
    "0x8aaD44321A86b170879d7A244c1e8d360c99DdA8"
    ]
}
```

:::info
data\[2] is an array containing all resolved records in the same order in which they were queried. In this case, the first argument is a BTC address and the last one is an ETH address attached to the domain.
:::

## Display the Records

Since this is a simple example, we won’t get too fancy. We’ll just create a `<span>` element for each record containing its key and value, its owner address, and its resolver address. We’ll also want to set the font to <span style="color: red">red</span> if the record is not found.

```javascript
function cleanDOM(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function displayResolution(resolution) {
  const {ownerAddress, resolverAddress, records} = resolution;
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
    if (!value) {
      recordSpan.style.color = 'red';
      value = `No ${key} found`;
    }
    recordSpan.innerHTML = `${key} : ${value}`;
    mainContainer.appendChild(recordSpan);
  });
}
```

Before we test it out, let’s make our lives a little easier by implementing a function to combine keys and results into one object.

```javascript
function combineKeysWithRecords(keys, records) {
  const combined = {};
  keys.map((key, index) => {
    combined[key] = records[index];
  });
  return combined;
}
```

Now we can easily show the records on our page:

```javascript
async function resolveEthNetwork(tokenId, interestedKeys) {
 fetchContractData(ethContract, interestedKeys, tokenId).then(data => {
   displayResolution({
     ownerAddress: data.owner,
     resolverAddress: data.resolver,
     records: combineKeysWithRecords(interestedKeys, data[2])
   });
 });
}


async function resolveBothChains(tokenId, interestedKeys) {
 // try to resolve the polygon network first
 fetchContractData(poligonContract, interestedKeys, tokenId).then(data => {
   if (isEmpty(data.owner)) {
     // if no owner for domain found on poligon look up the eth network
     return resolveEthNetwork(tokenId, interestedKeys);
   }

   displayResolution({
     ownerAddress: data.owner,
     resolverAddress: data.resolver,
     records: combineKeysWithRecords(interestedKeys, data[2])
   });
 });
}
```

If we are successful, we should see the following on our page:

![Example of a successful resolution](/images/example-successful-resolution.png)

## Set-up Error Notifications

Now that we've made a successful call, let’s deal with all possible errors that might come up during the resolution.

To do this, we’ll want to create a function to print an error in our records `<div>`. We’ll also want to add a boolean argument `cleanDom` to remove everything from the records `<div>` before we place an error for display.

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

We can easily identify the possible errors by playing around with the app in its current state. The following table lists the possible errors and their descriptions.

| Errors                   | Description                                                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Domain is not registered | Owner address is `0x00000000000000000000000000000000`                                                            |
| Domain is not configured | It is possible that owner address exists but resolver address is set to `0x00000000000000000000000000000000`     |
| Record is not found      | Records are queried for an address (e.g. crypto.BTC.address) but the domain owner hasn't set  up the records yet |

Once we’ve identified the errors, we will need to update the callback to the `fetchContractData()` function to show the errors to the user:

```javascript
function isEmpty(msg) {
 return !msg || msg === '0x0000000000000000000000000000000000000000';
}


async function resolveEthNetwork(tokenId, interestedKeys) {
 fetchContractData(ethContract, interestedKeys, tokenId).then(data => {
   if (isEmpty(data.owner)) {
     displayError('Domain is not registered', true);
     return;
   }

   if (isEmpty(data.resolver)) {
     displayError('Domain is not configured', true);
     return ;
   }

   displayResolution({
     ownerAddress: data.owner,
     resolverAddress: data.resolver,
     records: combineKeysWithRecords(interestedKeys, data[2])
   });
 });
}


async function resolveBothChains(tokenId, interestedKeys) {
 // try to resolve the polygon network first
 fetchContractData(poligonContract, interestedKeys, tokenId).then(data => {
   if (isEmpty(data.owner)) {
     // if no owner for domain found on polygon look up the eth network
     return resolveEthNetwork(tokenId, interestedKeys);
   }

   if (isEmpty(data.resolver)) {
     displayError('Domain is not configured', true);
     return ;
   }

   displayResolution({
     ownerAddress: data.owner,
     resolverAddress: data.resolver,
     records: combineKeysWithRecords(interestedKeys, data[2])
   });
 });
}
```

Now you can resolve any `.crypto` domain and display the appropriate error message to your users. Just open the `index.html` file in your browser and play around with the results to get a better sense of the errors that may come up and the error messages you might want to include.

For example, you can try to resolve the following domains:

| Domain                           | Result                      |
| -------------------------------- | --------------------------- |
| `udtestdev-creek.crypto`           | Domain has no BTC record    |
| `udtestdev-test-btc-record.coin`   | Resolves without any issues |
| `udtestdev-johnny-dev-domain.coin` | Domain has no BTC record    |

## Resources

* [Full source code for this guide](https://github.com/unstoppable-domains-integrations/crypto-integration)
* [Discord community for UD](https://discord.gg/b6ZVxSZ9Hn)
