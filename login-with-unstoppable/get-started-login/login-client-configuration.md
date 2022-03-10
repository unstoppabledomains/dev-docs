---
description: >-
  This guide covers the process for configuring the Login with Unstoppable
  client.
---

# Login Client Configuration

{% hint style="info" %}
You can begin App development right away while waiting on application approval. The  approval only relates to your application appearing on the UD global application screen and is not a blocker to integration.
{% endhint %}

## Step 1: Edit Client Credentials

* **Visit** the [App Dashboard](https://unstoppabledomains.com/app-dashboard) once your application has been created. Check your email or refresh the Application Dashboard to see the status of the application.\

* Click the **Edit** button next to the application you would like to configure for Login with Unstoppable.

![View Application Status and Edit an Application](<../../images/pending-application (2).png>)

* Scroll down and click the **Get New Client Credentials** button. This will allow you to add additional configuration options to the Login Client.&#x20;

![Get New Client Credentials button located at bottom of Application Page](../../images/client-credentials-button.png)

## Step 2: Enter the Redirect URIs

* Enter the **New Redirect URIs** and **New Post Logout Redirect URIs** on the Client Credentials Screen. Both **redirect URIs** must be provided by the app when making an authorization request as this information tells the server where to redirect back to after logging in and out of the server.
* Enter additional **New Redirect URIs** or **New Post Logout Redirect URIs** in each field to setup separate credentials for live environments and local test environments \[highly recommended]. Enter each additional **redirect URI** on a separate line, if applicable.

{% hint style="danger" %}
**Warning:** The hostname of the **redirect URIs** must match the website address saved on the applications page **** to avoid build errors. For example, if the application hostname or website address is [http://example.com](http://example.com), then the **redirect URIs** must share this host name, such as [http://docs.example.com](http://docs.example.com) or [http://community.example.com](http://community.example.com).
{% endhint %}

![Redirect URls on the Client Credentials Configuration Page](../images/client-credentials-redirect-URls.png)

* Click the **Get New Credentials Button** again to save changes and the New URIs will be configured.

{% hint style="danger" %}
**Warning:** Save these credentials! The **redirect URls** must be an exact match to the redirect URIs used in the UAuth Library modification.
{% endhint %}

## Step 3: Save the Client ID and Secret

* Save **the Client ID and Secret** for later reference. These credentials will be needed to modify the UAuth library at a later stage.&#x20;

![Client ID and Secret fields on the Client Credentials Configuration Page](../images/client-credentials-client-secret.png)

{% hint style="warning" %}
Warning: Each time changes are made to the **New Redirect URIs** or **New Post Logout Redirect URIs**, a new secret will be generated. Be sure to save the new secret for later use in the UAuth Library modification.
{% endhint %}

{% hint style="success" %}
**Congratulations!** You finished configuring your Login with Unstoppable client.
{% endhint %}
