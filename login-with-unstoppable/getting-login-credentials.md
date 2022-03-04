---
description: >-
  This page details the process for obtain login credentials. This is the first
  step in integrating and configuring your application to use the Login with
  Unstoppable feature.
---

# Getting Login Credentials

{% hint style="info" %}
You can begin App development right away while waiting on application approval. The application approval only relates to your application appearing on the UD global application screen and is not a blocker to integration.
{% endhint %}

## Step 1: Register Your Application

* **Go** to the Unstoppable Domains [Application Submission](https://unstoppabledomains.com/app-submission) page.
* **Complete** all fields: App Name, Description (at least 50 characters), App Logo, Website link, and any applicable checkboxes (e.g., use cases, platforms, extensions).
* **Submit** the application for review.

![Application Submission Page](../../.gitbook/assets/submit-your-application.png)

## Step 2: Configure the Application

* **Visit** the [App Dashboard](https://unstoppabledomains.com/app-dashboard) once your application has been created. (To see the status of the application, check your email or refresh the Application Dashboard.)
* Click the **Edit** button next to the application you would like to configure for Login with Unstoppable.

![View Application Status and Edit an Application](<../../.gitbook/assets/pending-application (1).png>)

* Scroll down and click the **Get New Client Credentials** button.

![Get New Client Credentials button located at bottom of Application Page (once approved)](../../.gitbook/assets/client-credentials-button.png)

### **Step 2A: Enter the Redirect URIs**

* **Enter the redirect URIs** on the Client Credentials Screen.&#x20;
  * [ ] The **New Redirect URIs** and **New Post Logout Redirect URIs** are both used by the server to determine where to redirect back to after logging in and logging out of the server. They are required to be supplied by the App when making an authorization request.
  * [ ] The **New Redirect URIs** and **New Post Logout Redirect URIs** can be changed, and you may enter more than one **New Redirect URIs** or **New Post Logout Redirect URIs** in each field. Enter each additional redirect URI on a separate line, if applicable. After modifying these credentials, click the **Get New Credentials Button** again and the New URIs will be configured.
  * [ ] Each time changes are made to the **New Redirect URIs** or **New Post Logout Redirect URIs** fields, a new secret will be generated. Be sure to save the secret for later use.

![Redirect URls on the Client Credentials Configuration Page](../.gitbook/assets/client-credentials-redirect-URls.png)

{% hint style="danger" %}
The website address saved on the applications page must match the URI's hostname, otherwise the URl's are considered invalid. Also, the redirect URls entered on this page must be an exact match to the redirect URIs used in the UAuth Library modification.
{% endhint %}

### Step 2B: Save the ClientID and Secret

* Save **the client id and secret** for later reference. (They will be needed to modify the UAuth library at a later stage.)&#x20;
* Scroll down and **Save the changes** by clicking the Get New Client Credentials button again.

![Client ID and Secret fields on the Client Credentials Configuration Page](../.gitbook/assets/client-credentials-client-secret.png)

{% hint style="info" %}
You will not be able to edit the client id and secret as these fields are automatically generated.
{% endhint %}
