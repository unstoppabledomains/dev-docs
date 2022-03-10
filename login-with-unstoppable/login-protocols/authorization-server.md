---
description: >-
  This page outlines the authorization server for the Login with Unstoppable
  feature.
---

# Authorization Server

In order for an OpenID Connect Relying Party to utilize OpenID Connect services for an End-User, the RP needs to know where the OpenID Provider is. RPs can use [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1\_0.html).&#x20;

Specifically, the extension provides an alternative method for OpenID Connect Issuer Discovery, [Section 2](https://openid.net/specs/openid-connect-discovery-1\_0.html#IssuerDiscovery). With Login with Unstoppable, clients will resolve WebFinger information using records stored on a domain name instead of resolving WebFinger information from a server. Essentially, this process allows End-Users to specify their OpenID Provider using their domains.

## Unstoppable WebFinger & Issuer Discovery

Unstoppable Webfinger uses a variety of records stored on domains to resolve a WebFinger Issuer discovery request. For Login with Unstoppable, webfinger information can be stored on the domain in the following ways: by request, reference, or value.

[WebFinger](https://datatracker.ietf.org/doc/html/rfc7033) requires the following information to make a discovery request:

* resource: Identifier for the target End-User that is the subject of the discovery request
* host: Server where a WebFinger service is hosted
* rel: URI that identifies the type of service whose location is being requested

Traditional Issuer discovery requires only the requestor resource and host to form the request, the rel must be [http://openid.net/specs/connect/1.0/issuer](http://openid.net/specs/connect/1.0/issuer) to make an issuer request.

#### Example: WebFinger Blockchain Domain Records

```
{
	“webfinger”: {
	“alice”: { “https://example.com/webfinger/rel”: “{\“uri\”:\“ipfs://Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu\”}”

“bob”: {“https://example.com/webfinger/rel”: “{\“host\”:\“example.com\”}”},
“charlie”: {“https://example.com/webfinger/rel”: “{\“value\”:\“{...Webfinger JRD Doc...}\”}”}
}
```

#### Example: WebFinger DNS Records

| Name      | Type | Value                                      |
| --------- | ---- | ------------------------------------------ |
| webfinger | TXT  | BASE64 encoded Document from above example |

### **By Request**

This is a method used to construct a WebFinger request. The below fields are used to construct a WebFinger request, that a Client can then resolve.

| Field | Description                                                                                                                                                                                                                                              |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user  | The OPTIONAL user of the account. If one was resolving this information on domain.tld, the webfinger resource constructed would be acct:user@domain.tld. If no user is present in the record, the account would be domain itself, i.e. acct:@domain.tld. |
| host  | Server where a WebFinger service is hosted.                                                                                                                                                                                                              |
| rel   | The OPTIONAL URI that identifies the type of service whose location is being requested, defaults to [http://openid.net/specs/connect/1.0/issuer](http://openid.net/specs/connect/1.0/issuer), used for Unstoppable Issuer Discovery.                     |

### By Reference

| Field | Description                                                                                                                                                    |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user  | The OPTIONAL user of the account. This is interpreted in the same way as it is in the “By Request” flow.                                                       |
| uri   | A URI specifying the location of a WebFinger JRD Document. This can be a https scheme URL, or a DID, or even a decentralized storage URL.                      |
| rel   | The OPTIONAL URI that identifies the type of service whose location is being requested. This is interpreted in the same way as it is in the “By Request” flow. |

### By Value

| Field |  Description                                                                                                                                                   |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user  | The OPTIONAL user of the account. This is interpreted in the same way as it is in the “By Request” flow.                                                       |
| value | The WebFinger JRD Document in plaintext.                                                                                                                       |
| rel   | The OPTIONAL URI that identifies the type of service whose location is being requested. This is interpreted in the same way as it is in the “By Request” flow. |

## Unstoppable Authentication

Unstoppable Authentication is a group of methods for authenticating End-Users of blockchain based domain names. OpenID Connect has no standards around authentication, other than metadata encoded inside jwts, e.g. _amr_, [Authentication Method Reference Values](https://datatracker.ietf.org/doc/html/rfc8176).&#x20;

Unstoppable Authentication uses two types of authentication that authorization servers will need to support Logins with Unstoppable: owner-based authentication and record-based authentication.

### Owner-based authentication

This is the default authentication method used for Unstoppable Authentication. To consent, users sign a message provided by an Authentication server, instead of using a username and  password combination. We use the owner of the domain as the public key that is recovered.

The Authentication server should use the AMR Value of _uns-own_.

### Record-based authentication

For domains owned by multisig wallets, owner-based authentication isn’t sufficient for authentication because there is no private key associated with the owner account. To solve this problem, domains can specify a private key as a record on the domain.&#x20;

## Ethereum Address

The below fields are used to specify a public key that can be used for authentication.&#x20;

{% hint style="info" %}
It’s recommended that dApps support the web3 and oob methods at a minimum.
{% endhint %}

| Field            | Description                                                                                                                                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user             | The OPTIONAL user of the account. If one was resolving this information on domain.tld, the webfinger resource constructed would be acct:user@domain.tld. If no user is present in the record, the account would be domain itself, i.e. acct:@domain.tld. |
| addr             | An Ethereum address corresponding to a private key a user owns.                                                                                                                                                                                          |
| addr\_type\_hint | An OPTIONAL hint for the Authentication server to suggest sign-in methods. If no hint is present the Authentication server should display as many methods as it can support.                                                                             |

For context, _addr\_type\_hint_ can have the following values:

| Value         | Description                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| web3          | Signing done via Injected web3 instance                                                                                                                                    |
| trezor        | Signing done via Trezor Wallet. This method is considered uns-hwk.                                                                                                         |
| ledger        | Signing done via Ledger Wallet. This method is considered uns-hwk.                                                                                                         |
| walletconnect | Signing done via Wallet Connect Modal                                                                                                                                      |
| walletlink    | Signing done via Wallet Link Modal                                                                                                                                         |
| mewconnect    | Signing done via My Ether Wallet Connect, used by their Mobile app                                                                                                         |
| formatic      | Signing done via Formatic Wallet                                                                                                                                           |
| portis        | Signing done via Portis Wallet                                                                                                                                             |
| oob           | Signing done via Out of Band signing. Authorization server should have a message to sign displayed and have a form for the user to paste the signature for authentication. |

{% hint style="info" %}
If the Ethereum account is stored using a hardware wallet, the AMR Value SHOULD be _uns-hwk_. For all other address types, the Authentication server should use the AMR Value of _uns-swk_.
{% endhint %}

## **JWKS by Value**

The Authentication Server should use the AMR Value of _uns-swk_.

| Field | Description                                                                                                    |
| ----- | -------------------------------------------------------------------------------------------------------------- |
| user  | The OPTIONAL user of the account. This is interpreted in the same way as it is in the “Ethereum Address” flow. |
| jwks  | A JWKS document stored in plaintext containing the signing key(s) used to prove the identity of the End-User   |

### Example: Authentication Blockchain Domain Records

Those records would correspond to the user alice@domain.tld.

```
{
	“authentication”: {
	“alice”: “{\“addr\”:\“0x1234567890123456789012345678901234567890\”,\“addr_type_hint\”:\“web3\”}”,
“bob”: “{\“jwks\”:\“{\“keys\”:[...]}\”}”,
“charlie”: “{\“jwks_uri\”:\“ipfs://Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu\”}”
}
}
```

## JWKS by Reference

The Authentication Server should use the AMR Value of _uns-swk._

| Field    | Description                                                                                                    |
| -------- | -------------------------------------------------------------------------------------------------------------- |
| user     | The OPTIONAL user of the account. This is interpreted in the same way as it is in the "Ethereum Address" flow. |
| jwk\_uri | URL of the JWKS document containing the signing key(s) used to prove the identity of the End-User              |

## Introspective Access Token Validation

Access tokens are put into an authorization header using the “Bearer” authentication scheme with the following format:

```
Authentication: “Bearer ” + Base64<username + “:” + token_id>

username = The subject of the access_token
token_id = The token returned from the token_endpoint earlier

```

This scheme is very similar to the Basic Authentication scheme, but for compatibility purposes, the token is opaque and therefore a Bearer token.

## Additional Standards & Resources

The Authorization server supports several standards beyond Authentication and Authorization explained in these docs.

* [JWT Token Introspection/Userinfo](https://tools.ietf.org/id/draft-ietf-oauth-jwt-introspection-response-02.html) \*\*
* [JRAM Responses](https://openid.net/specs/openid-financial-api-jarm.html)  \*\*
* [Client Registration & Management](https://openid.net/specs/openid-connect-registration-1\_0.html)
* [Request Objects](https://openid.net/specs/openid-connect-core-1\_0.html#JWTRequests)
* [Resource Indicators](https://datatracker.ietf.org/doc/html/rfc8707)
* [Token Revocation](https://datatracker.ietf.org/doc/html/rfc7009)
* [private\_key\_jwt Client Authentication](https://openid.net/specs/openid-connect-core-1\_0-15.html#ClientAuthentication)
* [PKCE](https://datatracker.ietf.org/doc/html/rfc7636)
* [Rotating Refresh Tokens](https://auth0.com/docs/security/tokens/refresh-tokens/refresh-token-rotation)
* [Encrypted JWT Responses](https://tools.ietf.org/id/draft-ietf-oauth-jwt-introspection-response-02.html#rfc.section.3)
* [Backchannel Logout](https://openid.net/specs/openid-connect-backchannel-1\_0.html) \*\*

\*\*The OIDC Consortium hasn’t formally audited these features offered by the server.
