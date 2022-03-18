---
title: Scopes for Login with Unstoppable
description: This page details the scopes currently supported by Login with Unstoppable.
---

# Scopes for Login

Login with Unstoppable uses the concept of scopes to request data about a user. Instead of requesting all of a user's information at once, scopes are used to ask for granular information about a user (e.g., a wallet address; an email address). Each scope returns a set of user attributes called claims. If the user authorizes the access associated with a scope, the claims are returned inside the ID Token associated with that authorization.

Scopes are expressed as the scope parameter inside of each authorize request. Each scope inside the parameter are case sensitive strings called scope tokens separated by spaces.

An example scope configuration:

```json
{
  "scope": “openid wallet email:optional”
}
```

The scopes requested by an application varies depending on the type of user data needed by the application. The scopes requested by the application will be presented to the user in a list.

![Example scope list presented to UD users](../../images/consent-screen-marked-v2.png '#display=block;margin-left=auto;margin-right=auto;width=40%;')

Login with Unstoppable supports the following scopes which are detailed below:&#x20;

* [openid scope](scopes-for-login.md#openid-scope) (required)
* [wallet scope](scopes-for-login.md#wallet-scope)
* [email scope](scopes-for-login.md#email-scope)
* [email:optional scope](scopes-for-login.md#emailoptional-scope)
* [humanity_check scope](scopes-for-login.md#humanitycheck-scope-mark-style"colorred"betamark)
* [humanity_check:optional scope](scopes-for-login.md#humanitycheckoptional-scope-mark-style"colorred"betamark)

:::warning
The **humanity_check** and **humanity_check:optional** scopes are currently in <mark style="color:red;">`BETA`</mark> launch. Partners will be notified directly when these scopes are in final release.
:::

## openid Scope

The **openid** scope is a special scope required for all Login with Unstoppable requests. The scope indicates to the server to return an OIDC compatible ID Token containing the rest of the user’s claims.

:::info
This is a required scope for using Login with Unstoppable. The [OpenID scope](https://auth0.com/docs/configure/apis/scopes/openid-connect-scopes) must be included in addition to any other scope used to integrate this feature.
:::

## wallet Scope

The Login with Unstoppable **wallet** scope is best used for retrieving metadata about the user’s wallet. It returns two custom claims:

1. `wallet_address` - The address associated with the domain.
2. `wallet_type_hint` - A string indicating the type of wallet associated with the domain with two possible values:
   * `injected` - A web3/browser-based wallet like [MetaMask](https://docs.metamask.io/guide/)
   * `walletconnect` - Using the [WalletConnect](https://walletconnect.org) protocol

## email Scope

The Login with Unstoppable **email** scope can be used to retrieve metadata about the user's preferred email address. It is based on the [OIDC Standard email scope](https://openid.net/specs/openid-connect-basic-1_0.html#Scopes).

## email:optional Scope

The Login with Unstoppable **email:optional** scope is used to retrieve metadata about the user's preference for sharing their email address. Users will be able to select or deselect this option in the UI presented to them. If the user consents to sharing their email, the same claims associated with the **email** scope will be returned.&#x20;

![UI for email:optional scope](../../images/email_optional_scope-small.jpg '#display=block;margin-left=auto;margin-right=auto;width=30%;')

## humanity_check Scope <mark style="color:red;">`BETA`</mark>

The Login with Unstoppable **humanity_check** scope must be added to the library for existing apps that want to integrate the Humanity Check feature using [Persona](https://withpersona.com).&#x20;

After the user authenticates and proves their identity with the Persona authorization system, the application will receive a humanity_id, which is a unique identifier for each user to serve as that user's "[humanity check](humanity-check-for-login.md#persona)."

![UI for Humanity Check, can be used for any identity provider, including Persona](../../images/humanity-check-optional.png '#display=inline-block;padding=0px;width=30%;') ![Getting Started UI screen for Persona](../../images/persona_getting_started.png '#display=inline-block;padding=0px;width=30%;') ![Upload Drivers License UI screen for Persona](../../images/persona_front_drivers_license.png '#display=inline-block;padding=0px;width=30%;')

See the [Humanity Check for Login](humanity-check-for-login.md) for more information on identity providers, humanity check, and plans for future releases.

## humanity_check:optional Scope <mark style="color:red;">`BETA`</mark>

The Login with Unstoppable **humanity_check:optional** scope is used to retrieve metadata about the user's preference for sharing their Humanity Check unique identifier from [Persona](https://withpersona.com). Users will be able to select or deselect this option in the UI presented to them. If the user consents to sharing their Humanity Check information, the unique humanity_check_id associated with the **humanity_check:optional** scope will be returned.&#x20;

See the [Humanity Check for Login](humanity-check-for-login.md) for more information on identity providers, humanity check, and plans for future releases.
