---
title: Troubleshooting Guide for Unstoppable Login | UD Developer Portal
description: This page reviews frequently encountered problems when integrating the Unstoppable Login feature. Potential solutions are included.
showNextButton: false
redirectFrom:
  - /login-with-unstoppable/troubleshooting-guide/
  - /login-with-unstoppable/troubleshoot/troubleshooting-guide/
---

# Troubleshooting Guide

Here are some of the most common error messages when integrating Unstoppable Login and how to fix them.

<figure>
<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/uqGOJ9jKrmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<figcaption>Tutorial: Integrating Login With Popup</figcation>
</figure>

## Error: Invalid Redirect URI

This commonly happens when a set of credentials meant to be used in a live environment are copied to the local test environment, which causes a mismatch between the configuration on the server and the configuration of the library instance. The error displays in the console and is highlighted in red when you inspect it (for Chrome).

To resolve this, modify the redirect URIs in the Login Client to ensure a match between the server and library instance. More than one redirect URI can be added to the Login Client to support two different sets of credentials (i.e. one for the live environment and another for the local test environment).

See [Rules for Redirect URIs](/identity/guides/client-configurations.md#rules-for-redirect-uris) for more details on valid redirect URIs.

## Error: Login Modal Doesn't Close

If the login modal does not close after the signing request has been accepted, the website URL in the application credentials isn’t at the same origin as the site hosting the pop-up flow. For example, if the login pop-up is hosted at `https://staging.example.io`, while the **Redirect URI** is at `https://example.io`.

<figure>

![Login modal should close after signature request is confirmed](/images/login-modal-doesnt-close.png "#width=33%")

<figcaption>Login modal should close after signature request is confirmed</figcaption>
</figure>

To resolve this, make sure that the **redirect URI** in your [client configuration](/identity/guides/client-configurations.md) is at same origin as the application hosting the login flow.

## Error: Port "5000" Could Not Be Used

If you see the following error message on MacOS, you need to turn off AirPlay Receiver in the Sharing preferences or use a different port for local development. MacOS Monterey (version 12) is already using Port 5000 for the Airplay Receiver, which is the default port used for local development.

```bash
lisa@Unstoppable-Lisa login % yarn parcel --port 5000 --open index.html
yarn run v1.22.17
$ /Users/username/workspaces/login/node_modules/.bin/parcel --port 5000 --open index.html
Error: Port "5000" could not be used
    at normalizeOptions (/Users/username/workspaces/login/node_modules/parcel/lib/cli.js:463:15)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (/Users/username/workspaces/login/node_modules/parcel/lib/cli.js:264:17)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## Error: Please Unlock or Install MetaMask

If you get an error message to “Please unlock or install MetaMask,” it means you need to [install MetaMask](https://metamask.io/download/) within your browser. Alternatively, you can use the browser extension for WalletConnect (or whichever is your preferred wallet).

<figure>

![Error Message presented to user if MetaMask is not installed](/images/MetaMaskError-small.png "#width=50%")

<figcaption>Error Message presented to user if MetaMask is not installed</figcaption>
</figure>

## Error: SSR Errors

This error occurs when you try to import the uAuth library, and the system won't allow you launch your application. This SSR error happens at runtime, not build time, and is most common with these frameworks: **Next.js**, **Svelte kit**, **Nuxt.js**, and **Gatsby**. The error will look something like the following:

`Reference error: window is not defined`

To resolve this, upgrade the UAuth library associated with Unstoppable Login.

## Error: Node Version

This error happens when you try to add a package using the package manager, and you receive an error like this:

`The engine "node" is incompatible with this module.`

To resolve this, upgrade the UAuth library associated with Unstoppable Login.

## Error: Critical Dependency

This is a common build error that occurs when you attempt to run the application with an outdated library.

```bash
./node_modules/@uauth/js/node_modules/@unstoppabledomains/resolution/build/utils/requireOrFail.js
Critical dependency: the request of a dependency is an expression
```

To resolve this, upgrade the UAuth library associated with Unstoppable Login.

## Error: Logging in/Logging Out

**This error is specific to the BNC Onboard model.** Logging in/out is actively managed by Web3 React and Web3 Modal, so logging out is not an issue with those models.

The problem happens the second, or subsequent time, that you attempt to login to the application. You get a default popup login modal (this is the bug) and are unable to proceed through the login flow. This happens because the session expires every hour, which means that you are trying to access user information when there isn't any because the session has already ended (i.e. user data has been removed/wiped).

To resolve this for BNC Onboard integrations, check that you are still logged in by calling `user function` and catching the result.
