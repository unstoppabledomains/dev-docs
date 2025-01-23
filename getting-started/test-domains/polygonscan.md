---
title: Get a Free Polygon Test Domain Guide | Unstoppable Domains Developer Portal
description: This guide covers the process of obtaining a free test domain, through direct smart contract calling on Polygonscan.
---

# Get a Free Polygon Test Domain Guide

<embed src="/snippets/_test-domain-explain.md" />

:::info
[Polygon faucet](https://faucet.polygon.technology) offers free MATIC tokens for Polygon Testnets. You will need some MATIC to interact with our smart contracts and claim a free test domain.
:::

## Step 1. Configure your Metamask wallet for Polygon

- Follow these instructions: [Getting Started with Metamask on Polygon](https://polygon.technology/blog/getting-started-with-metamask-on-polygon)

## Step 2. Get free MATIC tokens from Polygon Faucet

### Visit the Polygon Faucet

Head over to the [Polygon Faucet](https://faucet.polygon.technology/). It is a website that gives out tiny amounts of MATIC cryptocurrency for you to test transactions.

### Select Amoy Test Network

Select `Amoy` as the Polygon test network:

<figure class="half-inline-block">

![faucet network selection](/images/faucet-network-selection.png)

<figcaption>faucet network selection</figcaption>
</figure>


### Submit Your Wallet Address

Enter your Polygon wallet address from MetaMask or any wallet client you use into the `Wallet Address` field of the faucet page and press the `Submit` button:

<figure>

![faucet address submission](/images/faucet-address-submission.png '#width=50%')

<figcaption>faucet address submission</figcaption>
</figure>

### Initiate the Transaction

Verify the details of the faucet transaction (token, network, address) and click on the `Confirm` button:

<figure class="half-inline-block">

![faucet transaction confirmation](/images/faucet-transaction-confirmation.png)

<figcaption>faucet transaction confirmation</figcaption>
</figure>

<figure class="half-inline-block">

![successful faucet request submission](/images/successful-faucet-request-submission.png)

<figcaption>successful faucet request submission</figcaption>
</figure>

## Step 3: Locate the domain ending namehash for Polygon

You can locate the domain ending [namehash](../domain-registry-essentials/namehashing.md) using the following list:

```bash
0x5c828ec285c0bf152a30a325b3963661a80cb87641d60920344caf04d4a0f31e = '888';
0x9bf15275eb85f2e69308f3dbfbe0f94cade4f05c2aa24ba7b9eba5ad2fb1a2cb = 'altimist';
0xaf4d61a6acdda7379d6f90207923aeb080994d0f1aaba4b8b24a14f965b2bb7c = 'anime';
0x89e68000b532da79f9a0d4b8416eaa4f64294236ab233205343453d5bec22933 = 'austin';
0x3fa9586c8b0c91c603728cff1ac819679a70197b33df9263d68750d8601fdf1f = 'bald';
0xd18112ce73608918c5c7f42ba03229594ecd9dafbd427b54e0de6c6ab67e03f5 = 'benji';
0x2a91107027b89ab420a4d8ec457493cfca12ab17615ec8c876695f1343f3f0fd = 'binanceus';
0x042fb01c1e43fb4a32f85b41c821e17d2faeac58cfc5fb23f80bc00c940f85e3 = 'bitcoin';
0xbf2121df4e351413ea6788cb220e735378a753cec288cb22644340d58d597b23 = 'bitget';
0x4118ebbd893ecbb9f5d7a817c7d8039c1bd991b56ea243e2ae84d0a1b2c950a7 = 'blockchain';
0xe7371ecc663fd700b2b56cb6141de1de8123261048e3328ea10befbd29100385 = 'boomer';
0x7d9041ccafaf9745838ecc365e3c7cd028d8c73bbea9e14d8a3493cdddda8b8d = 'caw';
0xb8072baa20e712ecf72b7fe107f8f307cf405f57f3b55d72a635fe22cf3c83a3 = 'chomp';
0x58872a8ca9414ae0f3ab850f51efaf4c77b647d903f9ec89a03d3018bb42e4fa = 'clay';
0x0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f = 'crypto';
0xb5f2bbf81da581299d4ff7af60560c0ac854196f5227328d2d0c2bb0df33e553 = 'dao';
0xb85e7a2457a224f5511a7790e48fa65ede8415b766ac9807a7fc63d3f07eb86d = 'doga';
0x3b270f4d000c6046ee64e8c025ad8cff71e728b275a81bf53a060442fe9f9766 = 'dfz';
0xd3225890d7777ac38091dfc10feff05127a34cf44cb65fd1a830e37046b6ecee = 'donut';
0x30b126da528ed6a22ad6ce11ea44a16f3990a215ef04115d84bb9275b709e89c = 'dream';
0x052e37ec9e3d85ccb12267d47068991786bdbc50974d5f63937c80d1eb5d1da1 = 'emir';
0xe3ec9fee76a74e3805fcc927d78308ffc19001efd50d94af4c3fc36ed6a34d1d = 'ethermail';
0xd75c01499ad11caab105cfefbf62ed6f0c7208f8de3fa293f01c209b37a1d036 = 'farms';
0xa264639c3dbff58a1ded5efcf724e50a9c7847ff8197c87c00d009fbba2a3720 = 'go';
0xfdb51f7f56d9b1149db5ce99afcf60dda4416fd6fb8dc0649fec13cd03e1803e = 'hi';
0xa18784bb78ee0f577251fb21ad5cac7a140ab47e9414e3c7af5125e3e1d28923 = 'klever';
0x2acf53593112265ba651274f0e33a6b3fe86f92bbee4d39211540592fde6b0f3 = 'kresus';
0x5e0664fb4fc872470219240d9272bd532629149e28b8ceed74f00d9e7314abb4 = 'kryptic';
0x8a1e62a27632ec008a082a22be9aded2ff7668fdd019e4d4001a5a27c4e84f81 = 'lfg';
0x57ea207b3238a69d8a9a53252de172f2ceae1d856008b13208a203867a707c78 = 'manga';
0x46a29e7d78413806ab5b6e30bc360bbff329e7bec2fc3ddf6f62d8c6c17c45b6 = 'metropolis';
0x3bada31b26c3e299047088ebc099d3cf3b3c4045b214745439add2807d753494 = 'moon';
0x54b432ba921dd5b52af171de6db29a833e11ba920bc91639bd80222c78e994f5 = 'mumu';
0xb75cf4f3d8bc3deb317ed5216d898899d5cc6a783f65f6768eb9bcb89428670d = 'nft';
0xc5f19a061ba3162336fde401da0e2554f72c076fc4b8c15cc7cb243bcfeb4954 = 'npc';
0xe8b04b2f0a94208f4f84a97cf3b9b5a01dc61f873c2edf8ba2d717a22c0a5c3d = 'onchain';
0xc8e9a3bd747b9690640fecbc68ce6795bc64579f4628b84f28b8c45586b25527 = 'podcast';
0xe76cc52c68a868af0cba676c92337a921cc721b45b6630e47f7ecb78e3e0edcc = 'pog';
0xed9ce6b49a0e2c56c57c86795b131bd6df792312183994c3cf3de1516cfe92d6 = 'polygon';
0xa5e27fb2696345ec44a24a5c2f7f413d717329c57710aad5f052ae750889edd8 = 'propykeys';
0x17936dd2b9c99a1e1bfa039dd7d40118f3ed535fcd9c8cda23c8070ffb4c2264 = 'pudgy';
0x2a595908979f49007772f276ab0ca35877efbb3c2ff0db6c903c70b9b092f581 = 'quantum';
0x2418c6dc1c5996890c54f1b197ce3d5f255b857445bce309215d0751b56fcd65 = 'raiin';
0x335f1d8a43ebd6d9277127e859f502a14bbe3ccbe2d3f89be38fd0086da4c396 = 'secret';
0x670e86e82c6551930f0b729bfa9173a1bfdebc6fb08f49fb97cc0077cae611a1 = 'smobler';
0x05cb1b6d0e0a38c2fdeacf5d8383eea8f73d8fdeca1e4cc99a0e202f68d5b7df = 'stepn';
0x241cdd75e86f1a1da99d0321ae7d8e31cdf7c71a31d68b44d8f6f20dfafa9db6 = 'tball';
0x5b22ab96ce6c7e714dde170ba8568b4ec754a8f7e9b1f8ff79d649a613694ee8 = 'tea';
0x0adc8e928b9a2309a49011aae110462d6f3642f8b8b0602ccd9a14763ba2f283 = 'ubu';
0x92bba949890cd44a226a8ce54135cf86538cd6c5ca0ccf41877102fd718cc8aa = 'unstoppable';
0xa665d9a61cfd00bafc3b436ff2724b2925006051d1456d11219a24425f3c0408 = 'u';
0x1e3f482b3363eb4710dae2cb2183128e272eafbe137f686851c1caea32502230 = 'wallet';
0x42b2913f9d847db7f0366ebde961700518fc7ce1d1d392fb57aa879a7a79a973 = 'wifi';
0xf72e00036d7ef2d56e70c6df1d619bcccb64c93ea5b96305e7d7f24c47b4b563 = 'witg';
0xacf08822cf871e802cb23fdb2224cb924878985b866b92e55aaae8c0a8a898eb = 'wrkx';
0x0169ba38fe2e45751c5c0f6af3bb37a1f216ffa0bbad727faf04a1d0949d7730 = 'xmr';
0x241e7e2b7fd7333b3c0c049b326316b811af0c01cfc0c7a90b466fda3a70fc2d = 'x';
0xd81bbfcee722494b885e891546eeac23d0eedcd44038d7a2f6ef9ec2f9e0d239 = 'zil';
```

For example, the `.dao` domain ending namehash is `0xb5f2bbf81da581299d4ff7af60560c0ac854196f5227328d2d0c2bb0df33e553`.

## Step 4: Write the Polygonscan Smart Contract Request

- Go to [Polygonscan/Amoy](https://amoy.polygonscan.com/address/0xabec3fF0F0b6375F65CB9aEB01e8347bf697082F#writeProxyContract) Smart Contract Page.
- Choose **Write as Proxy** tab.
- Connect your wallet (Amoy).
- Choose `claimToWithRecords` method and fill properties with needed values: receiver wallet address, domain ending namehash, and test domain suffix.

<figure>

![Enter data for 'claim to records' for Polygonscan domain (Layer2)](/images/polygonscan-claim-to-records.png)

<figcaption>Enter data for 'claim to records' for Polygonscan domain (Layer2)</figcaption>
</figure>

- Click the **Write** button to start the transaction.

:::success Congratulations!
You're the new proud owner of a test domain on Polygon Amoy testnet. Happy hacking!
:::
