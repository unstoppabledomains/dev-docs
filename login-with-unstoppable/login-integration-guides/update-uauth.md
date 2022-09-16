---
title: Updating Your UAuth Libraries | UD Developer Portal
description: This page details how to update the UAuth libraries in an existing Login With Unstoppable integration.
showNextButton: false
---

# Updating Your UAuth Libraries

To make use of all of the latest features of Login with Unstoppable in an existing Login integration, simply upgrade your UAuth libraries and redeploy. No code update is required.

## Check for Outdated Dependencies

Check your project for outdated dependencies with the following _yarn_ or _npm_ command.

```sh yarn
yarn outdated
```

```sh npm
npm outdated
```

## Upgrade `@uauth/*` Libraries

Upgrade any outdated `@uauth/*` libraries.

```sh yarn
yarn upgrade @uauth/js
```

```sh npm
npm upgrade @uauth/js
```

:::success
Your app is now ready to use all of the latest features of Login with Unstoppable.
:::