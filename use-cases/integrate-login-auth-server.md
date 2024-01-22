---
title: Integrate Unstoppable Login | UD Developer Portal
description: This page outlines the use case for integrating Unstoppable Login and using the Unstoppable Authorization server.
---

# Integrate Unstoppable Login

This page outlines the use case for integrating Unstoppable Login and using the Unstoppable Authorization server.

## How does it work?

With current wallet-based sign-in methods, it is difficult or impossible for application developers to contact their users. [Unstoppable Login](/identity/overview/login-with-unstoppable.md) is a feature that allows any Unstoppable Domain owner to login and share personal information with applications, such as email addresses. This enables developers to learn more about their users without hosting or maintaining a Customer Relationship Management (CRM) system.

Unstoppable Login is built using the Unstoppable [Authentication Protocol](/identity/guides/login-protocols/authentication-protocol.md) or simply **UAuth**. UAuth is an authorization system built with domains as the primary subject of authorization instead of usernames or wallet addresses. The UAuth protocol is an extension of the OpenID Connect (OIDC) protocol that allows Unstoppable Domain owners to designate authorization servers (OpenID Providers) to authorize access to a user's digital resources on that user’s behalf.

## Who controls the sharing of information?

Information sharing is 100% opt-in for users, and users maintain absolute control over their login credentials via private keys, not a corporation. While applications may request user information via [Login Scopes](/identity/guides/login-scopes.md), users can choose to decline specific requests and may revoke access at any time via their UD dashboard.

## Are there working integrations for this feature?

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tKOI1nIktdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

You can find additional working integrations on Unstoppable Domains Applications List, filtered by the [Login feature](https://unstoppabledomains.com/apps?filters=26).

## How do I get started?

See the [Getting Started with Login](/identity/quickstart/retrieve-client-credentials.md) to get started integrating your application with the Login feature. You should also review the [Scopes for Login](/identity/guides/login-scopes.md) and [Humanity Check](/identity/overview/humanity-check.md) pages.
