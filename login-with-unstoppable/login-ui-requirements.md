---
description: This page details the UI requirements for Login with Unstoppable.
---

# Login UI Requirements

This page details UI requirements for Login with Unstoppable buttons, user modals for logging in and giving consent, and authenticated user icons.

## Login with Unstoppable Buttons

Login with Unstoppable button status and states can be found in the table below:

| Status  | Small                                       | Large                                         |
| ------- | ------------------------------------------- | --------------------------------------------- |
| Default | ![](../../.gitbook/assets/default-icon.png) | ![](../../.gitbook/assets/default-button.png) |
| Hover   | ![](../../.gitbook/assets/hover-icon.png)   | ![](../../.gitbook/assets/hover-button.png)   |
| Pressed | ![](../../.gitbook/assets/pressed-icon.png) | ![](../../.gitbook/assets/pressed-button.png) |

## User Modals for Login with Unstoppable

![1) User Clicks Login with Unstoppable button to get started](../../.gitbook/assets/login-domains-modal1.png) ![2) User Enters Unstoppable Domain Address to Login to dApp](../.gitbook/assets/login-domains-modal2-v2.png) ![3) User Consent screen details the info being requested by dApp](../.gitbook/assets/consent-screen-v3.png)

The modals are further described below:

* **Modal 1.** User clicks on Login with Unstoppable Button.
* **Modal 2.** A modal is displayed which allows the user to begin the authorization process by entering their Unstoppable domain address.
* **Modal 3.** During login, the user will see the resolved address and the information being requested by the application. User must sign the transaction using their wallet address in order to share their information with the dApp.

## UI Requirements After Successful Login

Once a user has successfully authenticated, the application should display the user’s domain name in the application’s UI to confirm the authorization was successful. In other words, the UI must show the user’s domain instead of the address.

### Examples

![UI Example for displaying authenticated user](<../.gitbook/assets/second-UI-example-login-domains (1).png>) ![Second UI Example for displaying authenticated user](../.gitbook/assets/brad-crypto-UI-recommendation.png)
