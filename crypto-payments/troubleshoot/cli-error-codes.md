---
title: Resolution CLI Error Codes
description: This page provides error codes when troubleshooting the Resolution CLI.
---

# Resolution CLI Error Codes

This is a list of all the error codes you might encounter when using the Resolution CLI.

| Error Code | Description |
|---|---|
| Domain is not registered | Thrown when you resolve a domain not owned by any address. |
| Domain does not have configured Resolver | Thrown when the domain resolver contract address is not found. For example, the domain doesn't have a specified resolver. |
| Domain is not supported by naming service | Thrown when you resolve a domain with a TLD not supported by the CLI. |
| Method is not supported | Thrown when the CLI is trying to use a method not supported by the naming service its resolving from. |
| Domain was returned from metadata provider | Thrown when you resolve an invalid domain address. |
| Invalid UNS configuration value | Thrown when the UNS resolution service is misconfigured. |

## Asking for help

Please don't be shy; we're here to help. Join our [Discord channel](https://discord.gg/b6ZVxSZ9Hn) for real-time support from UD and the community if you need assistance integrating your app.
