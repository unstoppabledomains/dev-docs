---
title: Managing Domain Ownership
description: This page covers all the Registry methods that can be used for managing domain ownership.
---

# Managing Domain Ownership

The smart contract is built upon [OpenZeppelin's implementation](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721#ERC721Burnable) of the [ERC-721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md) token standard.

Entities that can control domains are defined by the ERC-721 standard:

* **Owner.** This is a direct owner of a domain, which has full control in managing domain ownership and records.
* **Operator.** Operators can control all domains owned by a user. There can be multiple operators per user.
* **Approved address.** A domain owner can set an approved address that can control one particular domain. ERC-721 allows only one approved address per token (i.e.: domain).

There are five basic operations that affect domain ownership:

* **Minting.** When a domain is first created, an initial domain owner is assigned.
* **Transferring.** There are two possible ways to transfer a domain: one that keeps resolution settings, and one that resets them.
* **Setting an operator.** Operators are other Ethereum addresses, which can control all domains owned by a caller.
* **Setting an approved address.** This allows setting one approved address per domain, which has equal privileges with a domain owner.
* **Burning.** Burns a domain, clearing all associated metadata and domain records.

## Minting

Minting domains is a complex topic and won't be covered on this page.

## Transferring

Methods that change a direct owner of a domain can be called by either a domain owner, an operator, or an approved address.

The `Registry` smart contract supports the following ERC-721 functions for transferring:

```
transferFrom(address from, address to, uint256 tokenId)

safeTransferFrom(address from, address to, uint256 tokenId)

safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)
```

The `Registry` smart contract also implements the `setOwner` function, which is not a part of the ERC-721 standard:

```
setOwner(address to, uint256 tokenId)
```

### CNS Transferring

For CNS, if one of these methods is invoked, then both the approved operator and the `Resolver` address in the `Registry` smart contract will be set to `0x0`.

{% hint style="info" %}
For CNS, the current implementation of transferring will not modify any values in the `Resolver` smart contract. In other words, the records stored on a domain won't automatically reset when an ownership transfer occurs. A transferred domain could still point to a previous owner's addresses.

After receiving a domain, along with setting a `Resolver` address, the [`reconfigure`](https://github.com/unstoppabledomains/dot-crypto/blob/master/contracts/Resolver.sol) method should be called, which resets all previous records.
{% endhint %}

For CNS, `setOwner` keeps a `Resolver` address and resets an approved operator. This method makes it possible to preconfigure a domain with certain records and transfer it to another owner, keeping all resolution settings.

### UNS Transferring

For UNS, the approved operator in the `Registry`smart contract will be set to `0x0`. There is no resolver address for UNS.

{% hint style="info" %}
For UNS, transferring will reset approved operator and domain records. All domain records will be cleared and set to `0x0`.
{% endhint %}

For UNS, `setOwner` keeps domain records and resets an approved operator. All records and content will also be transferred.

## Setting an Operator

Any Ethereum address can set multiple operators, allowing them to manage domains that a caller owns directly. This is an operation defined by ERC-721:

```
setApprovalForAll(address to, bool approved)
```

## Setting an Approved Address

An approved address can be set by either a domain owner or an operator. This method is defined by ERC-721 as well:

```
approve(address to, uint256 tokenId)
```

Approved addresses have equal rights as domain owners and operators, being able to both transfer ownership and manage resolution.

## Burning

The `Registry` smart contract supports "burning" operations. After burning, a domain is no longer available -- for purchase or re-minting.

```
burn(tokenId)
```
