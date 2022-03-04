---
description: >-
  This page describes the authentication protocol used in the Login with
  Unstoppable feature. The user's wallet signature is obtained using an
  extension of OIDC described below.
---

# Authentication Protocol

Login with Unstoppable uses a modified version of the OpenID Connect (OIDC) protocol to obtain a user’s wallet signature. This allows domain owners to authorize access to information and resources in the same way as the OIDC specification. This modified OIDC protocol, when with a blockchain based domain system, enables a far better decentralized authorization experience across web3 applications.

A key distinguisher between traditional and decentralized authorization protocols is that there is no centralized resource access. Decentralized authorization requires that the Authorization Server won’t have pre-existing knowledge of the resources it’s authorizing clients to use. OAuth, OIDC, and SAML only govern the parts of the interaction between clients & authorization Servers. Decentralized authentication is between two parties because resources must provide an interface for Authorization Servers to read from.

{% hint style="info" %}
With decentralized authorization, basic authentication information is likely stored directly on the Authorization Server, so Standard Claims will need to be separated out from Client-to-Resource authorization.
{% endhint %}

## Major Actors

The following table identifies the major actors in the decentralized authorization process.

| Actors               | Description                                                             | Examples                                                                                                       |
| -------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| User                 | The individual or entity using the interface and agreeing to share data | End-User, Resource owner, Domain Owner                                                                         |
| User Interface       | Any method used to connect the user to the authentication server        | Browser, Mobile app, Desktop app, CLI, Server                                                                  |
| Client               | An application that can request tokens                                  | Server-Side Website, SPA Website, Mobile w/ Backend, Mobile w/o Backend, TV or other device, Server or Service |
| Resource             | A server that can validate incoming tokens                              | An API that uses tokens as API keys                                                                            |
| Authorization Server | A Server that can issue tokens                                          | UD Login Server                                                                                                |

## Access and Consent

An Authorization Flow is any method used to get an access token, id token, or authorization code. Essentially it’s any method the Client uses to ask the Authorization Server for tokens.

The table below describes the primary ways that clients ask for tokens. The first three token request types are the most common: authorization code flow, implicit, and hybrid.

| Token Request Type | Description                                                                                                                                                                               | Pros                                                                                                                                      | Cons                                                                                                                                                              |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorization Code | The Client asks for an authorization code that they can exchange for an access token.                                                                                                     | More secure than Implicit Flow, doesn’t rely on Agents to store secrets securely. Authentication can be done on the Authorization Server. | Doesn’t work for all authorization apps, e.g. ones without a backend. Hard to establish secure back channels, making it less optimal for Unstoppable’s use cases. |
| Implicit           | The Client asks for the token directly.                                                                                                                                                   | This process is simpler, Mobile-friendly.                                                                                                 | Requires the Agent to store secrets, Relies on the front channel to work.                                                                                         |
| Hybrid             | The Client asks for an authorization code and an ID or access token up front.                                                                                                             | More flexible, works well for mobile applications with backends. Authentication can be done on the Authorization Server.                  | Complicated                                                                                                                                                       |
| Device Code        | Designed for TVs, Clients show a user code that they type in online to authenticate, while the device polls for the special token associated with that user code (i.e., the device code). | Less of a chance that a malicious application redirects users to the wrong Authorization Server, unknowingly.                             | Authorization Server doesn’t control all authentication UX. requires users to manually navigate to their Authorization Server.                                    |
| Client Credentials | Designed for trusted servers to gain access. Basically an API Key.                                                                                                                        | Simple                                                                                                                                    | Authorization Server doesn’t control authentication UX. Hard to control access to your resources from a UX perspective.                                           |
| Password           | Clients gain access with a username & password.                                                                                                                                           | Simple                                                                                                                                    | Authorization Server doesn’t control authentication UX. Less robust security.                                                                                     |
| SAML               | Clients gain access using a SAML Assertion.                                                                                                                                               | Works with lots of legacy authentication and authorization systems.                                                                       | Authorization Server doesn’t control authentication UX. Hard to control access to your resources from a UX perspective.                                           |

## Authentication

Authentication is any method the Authorization Server uses to validate the user’s ownership of the domain, which includes the actual consent screen authorizing everything. Login with Unstoppable uses the personal\_sign method inside the [Ethereum JSON-RPC](https://geth.ethereum.org/docs/rpc/ns-personal) to authenticate users, which allows authentication using domain ownership, or a record configured on the domain.

{% hint style="info" %}
Clients and Resource Servers don’t need to know or care what Authentication method the Authorization Server uses.
{% endhint %}

The table below lists the primary ways Authorization Servers authenticate users.

| Auth Method | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| pwd         | Password authentication                                      |
| rsa         | RSA authentication                                           |
| otp         | One-Time Passcode, e.g. email codes, sms, SMS authentication |
| fed         | Federated authentication assertions like SAML                |
| mfa         | Multi-factor authentication                                  |
| user        | User presence                                                |
| pin         | Pin code                                                     |
| ftp         | Finger print                                                 |
| geo         | Geographic authentication                                    |
| swk         | Software secured key                                         |
| hwk         | Hardware secured key                                         |
| None        | No authentication method used                                |

Login with Unstoppable uses the following primary authentication methods:

| Auth Method | Description                                                             | Support Status    |
| ----------- | ----------------------------------------------------------------------- | ----------------- |
| uns-own     | Ownership of the domain by getting a user to sign a message.            | Fully Supported   |
| uns-swk     | Attaching a swk record to the domain corresponding with a software key. | Not Supported Yet |
| uns-hwk     | Attaching a hwk record to the domain corresponding with a hardware key. | Not Supported Yet |

## Access Tokens

There are two primary types of access tokens.

### Opaque (Currently Supported)

Opaque access tokens don’t contain any information within themselves, and in principle cannot be deciphered by a resource server. To validate opaque tokens for use with Login with Unstoppable, resource servers must use the Token Introspection API provided by the Authorization servers.

The advantage of using this access token method is that less logic is required on the resource server, it is less subject to versioning issues, and it is easily revocable. On the other hand, this token method is much slower because tokens must be validated every single call to the resource server.

### Self-encoded (Not Yet Supported)

Self-encoded tokens contain all of the information the resource server needs to validate a request. All of the necessary information is embedded directly inside the request.

The major advantage of using this access token method is speed; it is much faster than the opaque method. However, more logic is required on the resource server and the authorization is harder to revoke.
