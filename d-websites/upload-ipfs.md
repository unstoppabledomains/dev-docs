---
title: Upload Your Website to IPFS Guide | Unstoppable Domains Developer Portal
description: This guide covers several different options of uploading your website to IPFS.
---

# Upload Your Website to IPFS Guide

There are several different options for uploading your website to IPFS. The preferred option is to simply use the Unstoppable Domains IPFS Uploader located within your My Domains account. A second option is to use an external IPFS service, which will require you to upload, retrieve the IPFS hash, and paste it into your UD account.

:::info
You only need to select one upload option for your website. Select the option that is easiest or most convenient for your local testing environment.
:::

## Option 1: Upload Your Website With Our IPFS Uploader

You can upload and attach your d-website to your domain in a single step from the Unstoppable Domains web interface.

* Go to [**My Domains**](https://unstoppabledomains.com/domains)
* Select **Manage** next to the domain you want to use
* Select the **Website** tab

<figure>

![How to locate the 'Website' tab under My Domains --> Manage](/images/website-tab-manage-domains.png '#width=60%;')

<figcaption>How to locate the 'Website' tab under My Domains --> Manage</figcaption>
</figure>

* Upload your files to the **IPFS Uploader** and **Save Changes**

<figure>

![Upload files using the IPFS Uploader, limited to 20MB per domain](/images/ipfs-file-uploader.png '#width=60%;')

<figcaption>Upload files using the IPFS Uploader, limited to 20MB per domain</figcaption>
</figure>

:::info
For websites that exceed the 20MB file limit, we recommend using a dedicated pinning service, such as [Pinata](https://pinata.cloud) or [Fleek](https://fleek.co).
:::

:::success
**Congratulations!** You just connected your d-website to your Unstoppable Domain.
:::

## Option 2: Manually Upload Your Website to IPFS

If you decide not to use the UD IPFS Uploader, you will need to upload the site yourself and retrieve the resulting IPFS hash. There are many options for doing this.

### IPFS Deploy

[IPFS Deploy](https://github.com/ipfs-shipyard/ipfs-deploy) is a zero-config CLI designed specifically for deploying a static website to IPFS. Pinning service configuration options include Infura, DAppNode, IPFS Cluster, and Pinata.

For more information on this tool for deploying d-websites, please review the [IPFS Deploy README](https://github.com/ipfs-shipyard/ipfs-deploy#readme) file.

### IPFS Upload via GitHub Action

There is a [GitHub Action](https://github.com/marketplace/actions/upload-to-ipfs) which allows you to upload a D-website directly to IPFS.

Input parameters:

| Parameter     | Required | Service | Description                                                                                |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------------------ |
| path          | Yes      |         | Directory’s path to upload.                                                                |
| service       | No       |         | Type of target service to upload. Supported services \[ipfs, pinata, infura]. Default ipfs |
| timeout       | No       |         | Request timeout. Default 60000 (1 minute)                                                  |
| verbose       | No       |         | Level of verbosity \[false - quiet, true - verbose]. Default false                         |
| host          | No       | ipfs    | IPFS host. Default ipfs.komputing.org                                                      |
| port          | No       | ipfs    | IPFS host’s port. Default 443                                                              |
| protocol      | No       | ipfs    | IPFS host’s protocol. Default https                                                        |
| pinataKey     | Yes\*    | pinata  | Pinata Api Key. Required for pinata service.                                               |
| pinataSecret  | Yes\*    | pinata  | Pinata Secret Api Key. Required for pinata service.                                        |
| pinataPinName | No       | pinata  | Human name for pin.                                                                        |

In order to use it, you need to add one step to `main.yml`:

```yaml
- uses: aquiladev/ipfs-action@v0.1.1
  id: upload
  with:
    path: ./build
```

There will be a build artifact on a runner after [steps](https://dapps-delivery-guide.readthedocs.io/en/latest/delivery/github-actions.html#step-1-create-pipeline) (usually in directory build or dist). You need to pass the directory as a path parameter.

This step will have hash output — it will be needed later to [add the IPFS hash to your domain](connect-ipfs.md). Token **{steps.upload.outputs.hash}** can be used in next steps where _upload_ is the id of current step.

### IPFS Upload to Pinata via GitHub Action

The same GitHub Action allows you to upload a D-website to [Pinata](https://pinata.cloud) pinning service. Pinata simplifies immutable data with an IPFS API and toolkit.

In order to use it, you need to add one step to `main.yml`:

```yaml
- uses: aquiladev/ipfs-action@v0.1.3
  id: pinata
  with:
    path: ./build
    service: pinata
    pinataKey: {PINATA_KEY}
    pinataSecret: {PINATA_SECRET}
    pinataPinName: {PIN_NAME}
```

As in the previous example, you will need to save the hash output to [add the IPFS hash to your domain](connect-ipfs.md).

### IPFS Upload to Pinata.cloud Website

You can also upload your static site to IPFS using the Pinata website.

* Go to [Pinata.cloud](https://pinata.cloud) and sign-up / sign-in.
* Ensure the **Pin Manager** tab is selected and click **Upload**.

<figure>

![Locate the Pin Manager tab for uploading files to Pinata.cloud](/images/pin-manager-pinata.png '#width=60%;')

<figcaption>Locate the Pin Manager tab for uploading files to Pinata.cloud</figcaption>
</figure>

* Then, click **Folder** and select the folder containing the website files you wish to upload.
* When the upload is complete, the **IPFS CID** (or **IPFS hash**) will appear under the **Pin Manager** tab.

<figure>

![Locate the IPFS Hash for your d-website in Pinata.cloud](/images/ipfs-hash-pinata-web-interface.png '#width=60%;')

<figcaption>Locate the IPFS Hash for your d-website in Pinata.cloud</figcaption>
</figure>

* Click the IPFS hash to copy it to the clipboard. Then [add the IPFS hash to your domain](connect-ipfs.md).

:::success Congratulations!
You just uploaded your website to IPFS. If you selected Option 2 above, then please proceed to the next guide: [Connect Your IPFS Site To Your Domain](connect-ipfs.md).
:::
