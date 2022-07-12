---
title: Scopes for Login with Unstoppable | UD Developer Portal
description: This page details the scopes currently supported by Login with Unstoppable.
---

# Scopes for Login

Login with Unstoppable uses scopes to request data about a user. Instead of requesting all of a user's information at once, scopes are used to make granular requests (e.g., a wallet address, an email address). Each scope returns a set of user attributes called **claims**. If the user authorizes the access associated with a scope, the claims are returned inside the **ID Token** associated with that authorization.

These scopes are passed to the authorization request in the `scope` parameter, which is a list of case-sensitive strings called **scope tokens** separated by spaces.

<figure>
<figcaption>Example scope configuration</figcaption>

```json
{
  "scope": “openid wallet email:optional”
}
```

</figure>

The scopes requested by an application vary depending on the type of user data needed by the application and will be presented to the user in a list.

<figure>

![Example scope list presented to UD users](/images/consent-screen-marked-v2.png '#width=40%;')
	
<figcaption>Example scope list presented to UD users</figcaption>
</figure>

Login with Unstoppable supports the following scopes which are detailed below:

* [openid](#openid) (required)
* [wallet](#wallet)
* [email](#email)
* [humanity_check](#humanity_check)
* [profile](#profile) 
* [social](#social)

## Optional Scopes

Many login scopes have `scope:optional` variations that allow users to opt in or opt out of sharing requested information. These appear with checkmarks next to them in the login request. If the user consents to sharing this information, the claims associated with the standard scope will be returned.

<figure>

![UI for email:optional scope](/images/email_optional_scope-small.jpg '#width=30%;')
	
<figcaption>Consenting to the <code>email:optional</code> scope</figcaption>
</figure>

## openid
`optional: false`

The `openid` scope is a special scope that is required for all Login with Unstoppable requests. The scope indicates to the server that it should return an OIDC compatible ID Token containing the rest of the user’s claims.

:::info
This is a required scope for using Login with Unstoppable. The [OpenID scope](https://auth0.com/docs/configure/apis/scopes/openid-connect-scopes) must be included in addition to any other scope used to integrate this feature.
:::

## wallet
`optional: false`

The Login with Unstoppable `wallet` scope is best used for retrieving metadata about the user’s wallet. It returns two custom claims:

1. `wallet_address` - The address associated with the domain.
2. `wallet_type_hint` - A string indicating the type of wallet associated with the domain with two possible values:
   * `web3` - A web3/browser-based wallet like [MetaMask](https://docs.metamask.io/guide/)
   * `walletconnect` - Using the [WalletConnect](https://walletconnect.org) protocol
   * `coinbase-wallet` - Using the [Coinbase Wallet](https://www.coinbase.com/wallet)

## email
`optional: true`

The Login with Unstoppable `email` scope can be used to retrieve metadata about the user's preferred email address. It is based on the [OIDC Standard email scope](https://openid.net/specs/openid-connect-basic-1_0.html#Scopes).

## humanity_check
`optional: true`

The Login with Unstoppable `humanity_check` scope must be added to the library for existing apps that want to integrate the Humanity Check feature using [Persona](https://withpersona.com).

After the user authenticates and proves their identity with the Persona authorization system, the application will receive a `humanity_id`, which is a unique identifier for each user to serve as that user's "[humanity check](../humanity-check/humanity-check-for-login.md#persona)."


<figure class="one-third-inline-block">

![UI for Humanity Check, can be used for any identity provider, including Persona](/images/humanity-check-optional.png)

<figcaption>Humanity Check request</figcaption>
</figure>


<figure class="one-third-inline-block">

![Getting Started UI screen for Persona](/images/persona_getting_started.png) 

<figcaption>Persona, getting started</figcaption>
</figure>

<figure class="one-third-inline-block">

![Upload Drivers License UI screen for Persona](/images/persona_front_drivers_license.png)
<figcaption>Upload driver license</figcaption>
</figure>


See [Humanity Check for Login](../humanity-check/humanity-check-for-login.md) for more information on identity providers, humanity check, and plans for future releases.

## profile
`optional: true`

The Login with Unstoppable `profile` scope is used to retrieve profile metadata the user has associated with their domain. It returns the following claims.

* `name` - Display name
* `picture` - Cover photo URI
* `profile` - ud.me profile URI (e.g. `https://ud.me/domain.tld`)
* `ipfs_website` - IFPS website hash
* `website` - Web2 URI to the IPFS hash
* `location` - The domain owner's location

## social
`optional: true`

The Login with Unstoppable `social` scope is used to retrieve metadata about the user's social media profiles.

Individual social scopes may also be used separately to require specific social media profiles from users. These scopes cannot be optional.

- `social:twitter`
- `social:reddit`
- `social:youtube`
- `social:discord`
- `social:telegram`
- `social:instagram`
- `social:github`

:::info note
You should only request either `social`, `social:optional`, or a combination of individual social scopes. Requesting any combination of those three will throw an error.
:::