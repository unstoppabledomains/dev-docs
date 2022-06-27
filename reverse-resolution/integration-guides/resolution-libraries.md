---
title: Resolution Libraries Integration Guide | UD Developer Portal
description: This guide covers how to retrieve the reverse record of UD domains using the Resolution Libraries. This process requires using the language-specific and blockchain-agnostic libraries managed by Unstoppable Domains.
---

# Resolution Libraries Integration Guide

This guide covers how to retrieve the reverse record of UD domains using the Resolution Libraries. This process requires using the language-specific and blockchain-agnostic libraries managed by Unstoppable Domains. Please see the [Resolution Libraries Overview](../../developer-toolkit/resolution-libraries/libraries-overview.md) for a detailed description and configuration guide for the libraries.

## Reverse Resolution for an Address

To resolve the reverse record of a wallet address, you must call the appropriate method from the resolution library in the language you choose and provide the address parameter.

```javascript JavaScript
const {default: Resolution} = require('@unstoppabledomains/resolution');
const resolution = new Resolution({
  sourceConfig: {
    uns: {
      network: 'polygon-mumbai',
    },
  },
});

function reverseTokenId(address) {
  resolution
    .reverseTokenId(address)
    .then((tokenId) => console.log(address, 'reversed to', tokenId))
    // tokenId consists the namehash of the domain with reverse resolution to that address
    .catch(console.error);
}

function reverseUrl(address) {
  resolution
    .reverse(address, {location: 'UNSLayer2'})
    .then((domain) => console.log(address, 'reversed to url', domain))
    // domain consists of the domain with reverse resolution to that address
    // use this domain in your application
    .catch(console.error);
}

reverseTokenId('0xcb9c0e0Cd1949a42C4F876C384647aD652a95886');
reverseUrl('0xcb9c0e0Cd1949a42C4F876C384647aD652a95886');
```

```java Java
import com.unstoppabledomains.resolution.Resolution;
import com.unstoppabledomains.config.network.NetworkConfigLoader;
import com.unstoppabledomains.config.network.model.Network;
import com.unstoppabledomains.resolution.naming.service.uns.UNSLocation;

resolution = Resolution.builder()
        .unsContractAddress(UNSLocation.Layer1, NetworkConfigLoader.getContractAddress(Network.GOERLI, "ProxyReader"))
        .unsContractAddress(UNSLocation.Layer2, NetworkConfigLoader.getContractAddress(Network.MUMBAI_TESTNET, "ProxyReader"))
        .build();

// tokenId consists the namehash of the domain with reverse resolution to that address
String tokenId = resolution.getReverseTokenId("0xcb9c0e0Cd1949a42C4F876C384647aD652a95886");

// domain consists of the domain with reverse resolution to that address
// use this domain in your application
String domain = resolution.getReverse("0xcb9c0e0Cd1949a42C4F876C384647aD652a95886");
```

:::success Congratulations
You have successfully integrated reverse resolution using UD's Resolution Libraries. Happy Hacking!
:::

<embed src="/snippets/_discord.md" />
