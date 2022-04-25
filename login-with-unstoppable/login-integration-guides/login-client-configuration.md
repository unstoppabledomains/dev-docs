---
title: Login Client Configuration | Unstoppable Domains Developer Portal
description: This guide covers the process for configuring the Login with Unstoppable client.
---

# Login Client Configuration

The default configuration for the Login Client works right out of the box for local development and all [Login Scopes](../get-started-login/scopes-for-login.md) are enabled by default. The minimum viable configuration for the Login with Unstoppable client is the **client ID** and **redirect URIs**, which is established in the [Client Metadata](#step-2-client-metadata-configuration) section (Step 2 below).

<figure>

![Login client configuration complete example](/images/login-client-config.gif '#width=70%')

<figcaption>Login client configuration complete example</figcaption>
</figure>

## Step 1: Add a New Client to Your Account

- Visit the [My Clients](https://dashboard.auth.unstoppabledomains.com) page to view all of the clients associated with your wallet address.
- Take any of the following actions on this page:
  - Click **Change Wallet** button to signin with a different wallet and see clients associated with a different wallet address.
  - Click the gear ![gear](/images/gear_icon_my_clients.png '#width=32px;vertical-align=text-bottom') to modify an existing client configuration.
  - Click the trash can ![trashcan](/images/trashcan_icon_my_clients.png '#width=32px;vertical-align=text-bottom') to delete or remove a client from your account.
  - Click **Create Client** button to add a new client.

<figure>

![My Clients UI screen for adding, removing, and configuring applications](/images/new_my_clients_screen_markup.png '#width=50%')

<figcaption>My Clients UI screen for adding, removing, and configuring applications</figcaption>
</figure>

## Step 2: Client Metadata Configuration

The **Client Metadata** section includes the unique client ID and redirect URIs. Developers can also download metadata for the existing client configuration from within this sub-section.

<figure>

![Client Configuration Metadata UI](/images/client_config_screen_metadata.png '#width=50%')

<figcaption>Client Configuration Metadata UI</figcaption>
</figure>

### Rules for Redirect URIs

The Redirect URIs follow three rules:

1. `http` URIs must resolve to URIs hosted at `http://127.0.0.1` or `http://localhost`.
2. URIs hosted at `http://127.0.0.1` do **NOT** require the port to be specified. All other URIs (including those hosted at `http://localhost`) require the correct port to be specified.
3. All https URIs specified must use the same origin (e.g. `https://unstoppabledomains.com/redirectUri1`, `https://unstoppabledomains.com/redirectUri2`)

:::info
`localhost` is okay for test development, but `127.0.0.1` should be used for live environments. It is best practice to use a hardcoded IP address in a live environment instead of the local host.
:::

## **Step 3: Cosmetic Configuration (Optional)**

The **Cosmetic Configuration** allows developers to customize the UI to improve the user experience. This includes updating or modifying the client name presented to the user, client URI, logo URI, policy URI, and terms of service URI.

<figure>

![Client Configuration UI, Cosmetic Config section](/images/client_config_screen_cosmetic.png '#width=50%')

<figcaption>Client Configuration UI, Cosmetic Config section</figcaption>
</figure>

The following table describes the fields for the cosmetic configuration UI section.

| Cosmetic Config Field | Description                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Client Name           | The client name as presented to user; display name of the Client URI hyperlink.                                             |
| Client URI            | By default, the value of the hyperlink is the redirect URI (from Client Metadata area) unless client URI field is complete. |
| Logo URI              | If provided, the Logo URI will retrieve the logo image and display the logo directly above client name.                     |
| Policy URI            | Policy URI will display at the bottom of the UI.                                                                            |
| Terms of Service URI  | ToS URI will display at the bottom of the UI.                                                                               |

## Step 4: Advanced Configuration (Optional)

The **Advanced Configuration** includes options for CORS, audience URIs, grant types, response types, scopes, and token endpoint auth method.

:::danger
The advanced configuration settings are unnecessary for many configurations and could break existing Login integrations.
:::

<figure>

![Client Configuration UI, Advanced Config section](/images/client_config_screen_advanced.png '#width=50%')

<figcaption>Client Configuration UI, Advanced Config section</figcaption>
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

- For the ID token, the audience are the clientIDs.
- For the access token, the audience is the resource servers; those resource server URLs are the audience for the access token.

### Grant Types

There are two ways to request an access token: authorization code and refresh token.

- **auth code:** short lived, used to initially get the session with the user, corresponds to _authorization_code grant type_
- **refresh token:** lives longer, used to maintain a session, receive an extra token to re-authenticate users later for a certain period of time, corresponds to the _offline grant type_

### Response Types

There are three response types: authorization code, access token, ID token.

- **auth code:** more secure; returns authorization code which you exchange for authorization
- **access token:** implicit flow, not recommended because it is less secure; no code but you receive ID or access token
- **ID token:** hybrid flow; receive all three: access code, access token, and/or ID token

:::danger
All authorization code requests or flows must use the PKCE extension. This only refers to the authorization code response type.
:::

### Scopes

All [scopes](../get-started-login/scopes-for-login.md) are turned on by default. To limit the scopes that the application can request, simply uncheck or disable those scopes.

- **wallet** maps to the [wallet scope](../get-started-login/scopes-for-login.md#wallet-scope)
- **email** maps to the [email scope](../get-started-login/scopes-for-login.md#email-scope)
- **email:optional** maps to the [email:optional scope](../get-started-login/scopes-for-login.md#emailoptional-scope)
- **humanity_check** maps to the [humanity_check scope](../get-started-login/scopes-for-login.md#humanity_check-scope)
- **humanity_check:optional** maps to the [humanity_check:optional scope](../get-started-login/scopes-for-login.md#humanity_checkoptional-scope)

### Token Endpoint Authentication Method

:::info
This setting cannot be used for front-end integrations. It can only be enabled for applications, such as servers, that can store secrets.
:::

This setting configures how to send the client secret to the authorization server after you receive the authorization code; can be enabled for an extra layer of security but can only be used if your application can store secrets (e.g., node.js integrations). The client secret is stored on server as a hash, so authorization server doesn't actually know the client secret. See additional resource for [Client Basic and Client Secret oAuth](https://datatracker.ietf.org/doc/html/rfc6749#section-2.3.1).

- **client secret basic:** uses http basic authentication to send over clientid:clientsecret inside the header, which is base64 encoded.
- **client secret post:** uses http POST authentication to send over client_secret parameter inside the body.

:::danger warning
**Copy** and **Save** the Client Secret as soon as the Token Authentication Method has been changed/saved because the client secret will not re-appear after the page is refreshed. If you lose the client secret after the application goes live, then the only way to change the secret is to rotate it and immediately download the client metadata, so you have a copy of the client configuration (to create a new client with new login credentials).
:::

## Step 5: Save Changes

You must save any changes made to the configuration options before they will take effect. For enhanced security, any changes made to update the application requires a wallet connection and signature.

:::info reminder
Developers must store the client secret before saving changes, refreshing the page, or exiting the page. It is also recommended that developers periodically download and save the current client configuration JSON file from the [Client Metadata](#step-2-client-metadata-configuration) section.
:::

:::success Congratulations!
You finished configuring your Login with Unstoppable client.
:::
