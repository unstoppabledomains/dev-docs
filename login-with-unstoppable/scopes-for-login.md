---
title: Scopes for Login with Unstoppable | UD Developer Portal
description: This page details the scopes currently supported by Login with Unstoppable.
showNextButton: false
---

# Scopes for Login

Login with Unstoppable uses scopes to request data about a user. Instead of requesting all of a user's information at once, scopes are used to make granular requests (for example, a wallet address or an email address). Each scope returns a set of user attributes called **claims**. If the user authorizes the access associated with a scope, the claims are returned inside the **ID Token** associated with that authorization.

These scopes are passed to the authorization request in the `scope` parameter, which is a list of case-sensitive strings called **scope tokens** separated by spaces.

<figure>
<figcaption>Example scope configuration</figcaption>

```json
{
  "scope": "openid wallet email:optional"
}
```

</figure>

The scopes requested by an application vary depending on the type of user data needed by the application and will be presented to the user in a list.

<figure>

![Example scope list presented to UD users](/images/login-scopes-example.png '#width=40%;')

<figcaption>Example scope list presented to UD users</figcaption>
</figure>

Login with Unstoppable supports the following scopes which are detailed below:

* [openid](#openid) (required)
* [wallet](#wallet)
* [email](#email)
* [humanity_check](#humanity_check)
* [profile](#profile)
* [social](#social)
* [badges](#badges)

## Optional Scopes

Many login scopes have `scope:optional` variants that allow users to opt in to or out of sharing requested information, instead of requiring it to login. These appear with checkmarks next to them in the login request. If the user consents to sharing this information, the claims associated with the standard scope will be returned.

<figure>

![UI for email:optional scope](/images/login-scopes-email-optional.png '#width=40%;')

<figcaption>Consenting to the <code>email:optional</code> scope</figcaption>
</figure>

:::warning
Optional scopes are mutually exclusive with their equivalent standard scopes. If an application tries to request both `scope` and `scope:optional`, the request will fail and throw an error.
:::

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
2. `wallet_type_hint` - A string indicating the type of wallet associated with the domain with three possible values:
   * `web3` - A web3/browser-based wallet like [MetaMask](https://docs.metamask.io/guide/)
   * `walletconnect` - Using the [WalletConnect](https://walletconnect.org) protocol
   * `coinbase-wallet` - Using the [Coinbase Wallet](https://www.coinbase.com/wallet)

## email
`optional: true`

The Login with Unstoppable `email` scope can be used to retrieve the users's `domain.tld@ud.me` [Unstoppable Email](https://support.unstoppabledomains.com/support/solutions/articles/48001218107-unstoppable-email) address, which provides Unstoppable Domain owners with a proxy email service that doesn't share their private address.

Unstoppable email is disabled for domains by default. If a user has not enabled this feature but consents to the `email` scope, a unique, DApp-specific email address is generated and authorized for their domain. This unique email address is then returned in the `email` claim.

## humanity_check
`optional: true`

The Login with Unstoppable `humanity_check` scope must be added to the library for existing apps that want to integrate the Humanity Check feature using [Persona](https://withpersona.com).

After the user authenticates and proves their identity with the Persona authorization system, the application will receive a `humanity_id`, which is a unique identifier for each user to serve as that user's "[humanity check](/login-with-unstoppable/humanity-check.md#persona)."


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


See [Humanity Check for Login](/login-with-unstoppable/humanity-check.md) for more information on identity providers, humanity check, and plans for future releases.

## profile
`optional: true`

The Login with Unstoppable `profile` scope is used to retrieve profile metadata the user has associated with their domain. It returns the following claims:

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

:::info note
You should only request either `social`, `social:optional`, or a combination of individual social scopes. Requesting any combination of those three will throw an error.
:::

## badges
`optional: true`

The Login with Unstoppable `badges` scope is used to retrieve a list of badges associated with a user's domain profile. It returns the following claim:

<figure>

```json
"badges": [
  {
    "code": "NFTDomainHolder",
    "description": "Holds Unstoppable Domains NFT domain",
    "logo": "http://storage/googleapis.com/unstoppable-client-assets/images/badges/ud-logo.svg",
    "name": "NFT Domain",
  }
],
```

<figcaption>Example <code>badges</code> claim</figcaption>
</figure>