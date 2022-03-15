---
description: >-
  This page outlines the features of creating a custom smart contract for
  flexible permission models. This technique works for CNS, ZNS, and UNS.
---

# Delegating Domain Management

Creating a custom smart contract is a way to implement a flexible permission model over domain records, which allows you to delegate the domain management to someone else. This may include:

* **Community-owned domains** — where individual members of a community decide on a domain website content.
* **Domain leasing** — where a domain is temporarily managed by a different authority and then comes back to the original authority.

A custom smart contract can be implemented as a separate contract.

The [Twitter Validation Operator](https://github.com/unstoppabledomains/uns/blob/main/contracts/operators/TwitterValidationOperator.sol) is an example of a smart contract with a flexible permission model.

