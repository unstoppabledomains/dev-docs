---
title: Error Codes for Login with Unstoppable | UD Developer Portal
description: This page provides error codes and explanations to use when troubleshooting the Login with Unstoppable feature.
---

# Login Error Codes

Login with Unstoppable uses the OAuth 2.0 framework. The error codes below are based on that framework and only include codes specific to the Login feature.

## 400 Error: Bad Request

These errors are the most common and generally are percieved to be client errors (e.g., malformed syntax, invalid request parameters, etc.).

| Error Code                   | Description                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| invalid_request             | <p>The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed. </p><p></p><p>Make sure that the various parameters are correct, be aware of case sensitivity and trim the parameters. Make sure that the client being used has exactly whitelisted the redirect_uri specified.</p> |
| unauthorized_client         | <p>The client is not authorized to request a token using this method. </p><p></p><p>Make sure that client id and secret are correctly specified and that the client exists.</p>                                                                                                                                                                                          |
| unsupported_response_type  | The authorization server does not support obtaining a token using this method.                                                                                                                                                                                                                                                                                           |
| unsupported_response_mode  | The authorization server does not support obtaining a response using this response mode.                                                                                                                                                                                                                                                                                 |
| invalid_scope               | <p>The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner.<br><br>Make sure that the requested scope has been previously configured inside the client's configuration (inside the advanced section).</p>                                                                                                                 |
| unsupported_grant_type     | The authorization grant type is not supported by the authorization server.                                                                                                                                                                                                                                                                                               |
| invalid_grant               | The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client.                                                                                                                            |
| invalid_state               | The state is missing or does not have enough characters and is therefore considered too weak.                                                                                                                                                                                                                                                                            |
| insufficient_entropy        | The request used a security parameter (e.g., anti-replay, anti-csrf) with insufficient entropy.                                                                                                                                                                                                                                                                          |
| invalid_token               | Invalid token format. Ensure that a valid token has been provided in the right format.                                                                                                                                                                                                                                                                                   |
| login_required              | The Authorization Server requires End-User authentication. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User authentication.                                                                                         |
| interaction_required        | The Authorization Server requires End-User interaction of some form to proceed. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User interaction.                                                                       |
| consent_required            | The Authorization Server requires End-User consent. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User consent.                                                                                                       |
| request_not_supported      | The OpenID Connect Provider (OP) does not support use of the request parameter.                                                                                                                                                                                                                                                                                          |
| request_uri_not_supported | The OpenID Connect Provider (OP) does not support use of the request_uri parameter.                                                                                                                                                                                                                                                                                     |
| invalid_request_uri        | The request_uri in the Authorization Request returns an error or contains invalid data.                                                                                                                                                                                                                                                                                 |
| invalid_request_object     | The request parameter contains an invalid Request Object.                                                                                                                                                                                                                                                                                                                |
| jti_known                   | The jti was already used.                                                                                                                                                                                                                                                                                                                                                |
| error                        | The handler is not responsible for this request.                                                                                                                                                                                                                                                                                                                         |

## 401 Error: Unauthorized

These errors are the second-most common and generally occur when either the user or the client lacks valid authentication credentials to perform.

| Error Code            | Description                                                                                                                                                                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token_inactive       | Token is inactive because it is malformed, expired or otherwise invalid. Token validation failed.                                                                                                                                                                      |
| invalid_token        | The token expired.                                                                                                                                                                                                                                                     |
| request_unauthorized | The request could not be authorized. Ensure that valid credentials are provided in the right format.                                                                                                                                                                   |
| invalid_client       | Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method). The authorization server MAY return an HTTP 401 (Unauthorized) status code to indicate which HTTP authentication schemes are supported.  |

## 403 Error: Forbidden

| Error Code          | Description                                                                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope_not_granted | The token was not granted the requested scope. The resource owner did not grant the requested scope.                                                                                                                         |
| access_denied      | <p>The resource owner or authorization server denied the request. </p><p></p><p>Make sure that the request is valid. Maybe the credential or request parameters being used are limited in scope or otherwise restricted.</p> |
| request_forbidden  | The request is not allowed. This action is not allowed to be performed.                                                                                                                                                      |

## 404 Error: Resource Not Found

| Error Code | Description                               |
| ---------- | ----------------------------------------- |
| not_found | Could not find the requested resource(s). |

## 500 Error: Internal Server Error

| Error Code       | Description                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| misconfiguration | The request failed because of an internal error that is probably caused by misconfiguration.                |
| server_error    | The authorization server encountered an unexpected condition that prevented it from fulfilling the request. |

## 503 Error: Service Unavailable

| Error Code               | Description                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| temporarily_unavailable | The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server. |
