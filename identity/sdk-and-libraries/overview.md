---
title: UAuth Libraries Overview | Unstoppable Domains Developer Portal
description: >-
  This page provides a high level overview of the UAuth core and middleware
  libraries.
redirects:
  /login-with-unstoppable/libraries/uauth-overview/: {}
---

# UAuth Libraries Overview

## Core libraries

| Reference                                                     | Package       | Description                           |
| ------------------------------------------------------------- | ------------- | ------------------------------------- |
| [UAuth JS](/identity/sdk-and-libraries/uauth-js.md)     | `@uauth/js`   | SDK used for single-page applications |
| [UAuth Node](/identity/sdk-and-libraries/uauth-node.md) | `@uauth/node` | SDK used server-side applications     |

## Middleware libraries

The UAuth middleware libraries provide an additional custom interface for `@uauth/js` to simplify the process of integrating with several existing web3 libraries.

| Reference                                                               | Package               | Description                       |
| ----------------------------------------------------------------------- | --------------------- | --------------------------------- |
| [Web3-React](/identity/sdk-and-libraries/web3-react.md)     | `@uauth/web3-react`   | Middleware library for Web3-React |
| [Web3-Onboard](/identity/sdk-and-libraries/web3-onboard.md) | `@web3-onboard/uauth` | UAuth Module for Web3-Onboard     |

## Examples

| Example Project                                                                              | Description                                                        |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [spa](https://github.com/unstoppabledomains/uauth/tree/main/examples/spa)                    | Basic login integration using the `@uauth/js` library.             |
| [web3-react](https://github.com/unstoppabledomains/uauth/tree/main/examples/web3-react)      | Login integration using the `@uauth/web3-react` library.           |
| [web3-onboard](https://github.com/unstoppabledomains/uauth/tree/main/examples/web3-onboard/) | Login integration using the `@uauth/web3-onboard` library.         |
| [server](https://github.com/unstoppabledomains/uauth/tree/main/examples/server)              | Login integration using the `@uauth/node` library.                 |
| [sveltekit](https://github.com/unstoppabledomains/uauth/tree/main/examples/sveltekit)        | Login integration using the `sveltekit` framework and `@uauth/js`. |


## Help us improve

We're always looking for ways to improve how developers use and integrate our products into their applications. We'd love to hear about your experience to help us improve by [taking our survey](https://form.typeform.com/to/uHPQyHO6).
