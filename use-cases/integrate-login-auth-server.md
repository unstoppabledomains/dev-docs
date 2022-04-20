---
title: Integrate Login with Unstoppable | UD Developer Portal
description: This page outlines the use case for integrating Login with Unstoppable and using the Unstoppable Authorization server.
---

# Integrate Login with Unstoppable

This page outlines the use case for integrating Login with Unstoppable and using the Unstoppable Authorization server.

## How does it work?

With current wallet-based sign-in methods, it is difficult or impossible for application developers to contact their users. [Login with Unstoppable](../login-with-unstoppable/index.md) is a feature that allows any Unstoppable Domain owner to login and share personal information with applications, such as email addresses. This allows developers to learn more information about their users without having to host or maintain their own Customer Relationship Management (CRM) system.

Login with Unstoppable is built using the Unstoppable [Authentication Protocol](../login-with-unstoppable/login-protocols/authentication-protocol.md) or simply **UAuth**. UAuth is an authorization system built with domains as the primary subject of authorization instead of usernames or wallet addresses. The UAuth protocol is an extension of the OpenID Connect (OIDC) protocol that allows Unstoppable Domain owners to designate authorization servers (OpenID Providers) to authorize access to digital resources a user owns on that user’s behalf.

## Who controls the sharing of information?

Information sharing is 100% opt-in for users, and users maintain absolute control over their login credentials via private key, not a corporation. While applications may request information from users via [Login Scopes](../login-with-unstoppable/get-started-login/scopes-for-login.md), users can choose to decline specific requests and may revoke access at any time via their UD dashboard.

## Are there working integrations for this feature?

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/j119MCi2NRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

You can find additional working integrations on UD's Applications List, filtered by the [Login feature](https://unstoppabledomains.com/apps?filters=26).

## How do I get started?

See the login [Login Integration Pathways](/login-with-unstoppable/get-started-login/integration-pathways.md) guide to get started integrating your application with the Login feature. You should also review the [Scopes for Login](../login-with-unstoppable/get-started-login/scopes-for-login.md) and [Humanity Check](../login-with-unstoppable/humanity-check/humanity-check-for-login.md) pages.
