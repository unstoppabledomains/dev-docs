---
title: Login Client Configuration | Unstoppable Domains Developer Portal
description: This guide covers the process for configuring the Login with Unstoppable client.
---

# Login Client Configuration

The default configuration for a new Login Client works right out of the box for local development and all [Login Scopes](../get-started-login/scopes-for-login.md) are enabled by default. The minimum viable configuration for the Login with Unstoppable client integrated with a live application requires custom [**redirect URIs**](#step-2-configure-redirect-uris).

## Step 1: Add a New Client

:::info
You will not need any ETH in your wallet to perform any action in this dashboard. You will only need to sign transactions to confirm ownership of your wallet address.
:::

* Go to the [Client Management](https://dashboard.auth.unstoppabledomains.com) page.
* Click **Connect Wallet** and sign the transaction.
* Click **Create Client** button to add a new client.

The dashboard will generate a unique **client ID** and open the configuration page for your new client. The **Client Metadata** section is automatically populated with the `clientID` and default values for the `redirectURI` and `scope`. This will update as you change these settings and can be copied directly into your application.

<figure>

![Connect Wallet and Create Client](/images/connect-wallet-and-create-client.gif)

<figcaption>Connect a Wallet and Create a New Client</figcaption>
</figure>

## Step 2: Configure Redirect URIs

In the **Basic** configuration section, add new **Redirect URIs** to your client by entering them into the text input box at the end of the list and hitting `return`/`enter` or clicking the `+` button to the right. 

<figure>

![Entering Redirect URIs](/images/login-enter-redirect-uris.gif '#width=70%')

<figcaption>Add New Redirect URIs</figcaption>
</figure>

### Rules for Redirect URIs

The Redirect URIs follow three rules:

1. `http` URIs must resolve to URIs hosted at `http://127.0.0.1` or `http://localhost`.
2. URIs hosted at `http://127.0.0.1` do **NOT** require the port to be specified. All other URIs (including those hosted at `http://localhost`) require the correct port to be specified.
3. All https URIs specified must use the same origin (e.g. `https://unstoppabledomains.com/redirectUri1`, `https://unstoppabledomains.com/redirectUri2`)

:::info
`localhost` is okay for test development, but `127.0.0.1` should be used for live environments. It is best practice to use a hardcoded IP address in a live environment instead of the local host.
:::

## Step 3: Customize the Login UI

The **Branding Configuration** section allows developers to customize the Login With Unstoppable UI to more closely match their own application's user experience.

<figure>

![Client Configuration UI, Cosmetic Config section](/images/login-client-config-branding.png '#width=50%')

<figcaption>Client Branding Configuration</figcaption>
</figure>

The following table describes the fields for the cosmetic configuration UI section.

| Cosmetic Config Field | Description                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Client Name           | The client name as presented to the user; display name of the **Client URI** hyperlink.                                     |
| Client URI            | The default value of the hyperlink is the client redirect URI (from **Client Metadata**) unless this field is complete.     |
| Logo URI              | If provided, the client will retrieve and display an image from this location directly above the **Client Name**.           |
| Policy URI            | Policy URI will display at the bottom of the UI.                                                                            |
| Terms of Service URI  | Terms of Service URI will display at the bottom of the UI.                                                                  |

## Step 4: Save Your Changes

You must save any changes made to the configuration options before they will take effect. For enhanced security, any changes made to update the application will require a wallet connection and signature.

<figure>

![Save button](/images/login-client-config-save-button.png '#width=60%; margin: auto;') 

<p style="padding: 1%" >or</p>

![Save icon](/images/login-client-config-save-icon.png '#width=5%; vertical-align: middle;')

<figcaption>Click the save button</figcaption>
</figure>


:::success Congratulations!
You now have a fully configured Login With Unstoppable Client.
:::

## Advanced Configuration

The **Advanced Configuration** page includes options for CORS, audience URIs, grant types, response types, scopes, and token endpoint auth method.

:::danger
The advanced configuration settings are unnecessary for many configurations and could break existing Login integrations.
:::

<figure>

![Login Client Advanced Configuration](/images/login-client-advanced-config.png '#width=50%')

<figcaption>Advanced Configuration</figcaption>
</figure>

The following section describes the fields for the advanced configuration UI section.

### Allowed CORS Origins

CORS is a browser protocol for accessing info from another domain. If a URI is entered, CORS is enabled for all requests from that client. Developers can enter the origin URI and specify the port. The Token, UserInfo, and Revocation endpoints all respect this option.

:::warning
The initial authorization endpoint that users are redirected to cannot use CORS; it will not work.
:::

### Audience URIs

:::info
This only needs to be configured if using an API that requires an audience URI.
:::

These URIs represent the audience that is inside the access token JWTs. You get back an access token and ID token and both are JWTs. The access token is opaque.

* For the ID token, the audience are the clientIDs.
* For the access token, the audience is the resource servers; those resource server URLs are the audience for the access token.

### Grant Types

There are two ways to request an access token: authorization code and refresh token.

* **auth code:** short lived, used to initially get the session with the user, corresponds to _authorization\_code grant type_
* **refresh token:** lives longer, used to maintain a session, receive an extra token to re-authenticate users later for a certain period of time, corresponds to the _offline grant type_

### Response Types

There are three response types: authorization code, access token, ID token.

* **auth code:** more secure; returns authorization code which you exchange for authorization
* **access token:** implicit flow, not recommended because it is less secure; no code but you receive ID or access token
* **ID token:** hybrid flow; receive all three: access code, access token, and/or ID token

:::danger
All authorization code requests or flows must use the PKCE extension. This only refers to the authorization code response type.
:::

### Token Endpoint Authentication Method

:::info
This setting cannot be used for front-end integrations. It can only be enabled for applications, such as servers, that can store secrets.
:::

This setting configures how to send the client secret to the authorization server after you receive the authorization code; can be enabled for an extra layer of security but can only be used if your application can store secrets (e.g., node.js integrations). The client secret is stored on the server as a hash, so the authorization server doesn't actually know the client secret. See additional resource for [Client Basic and Client Secret oAuth](https://datatracker.ietf.org/doc/html/rfc6749#section-2.3.1).

* **client secret basic:** uses http basic authentication to send over clientid:clientsecret inside the header, which is base64 encoded.
* **client secret post:** uses http POST authentication to send over client\_secret parameter inside the body.

:::danger warning
**Copy** and **Save** the Client Secret as soon as the Token Authentication Method has been changed/saved because the client secret will not re-appear after the page is refreshed. If you lose the client secret after the application goes live, then the only way to change the secret is to rotate it and immediately download the client metadata, so you have a copy of the client configuration (to create a new client with new login credentials).
:::