---
title: Build a Custom D-Website
description: This page discusses some of the options for building a custom decentralized website (without a template).
---

You can build a custom decentralized website using any tool or platform, such as [Mobirise](http://mobirise.com), [GoHugo](https://gohugo.io), or even [convert an existing static website to IPFS](building-a-custom-d-website.md#convert-a-static-website). You can also build a custom website manually and store all HTML, CSS, and javascript files inside of the same folder.&#x20;

Keep in mind that all IPFS websites must adhere to the following configuration rules:

* All of the content for your website must be contained in one build folder, with an index.html file.
* All links within your files should be relative links.

To build a custom website, you might consider uploading the website files to a pinning service, like [Pinata.cloud](https://www.pinata.cloud) or [Temporal.cloud](https://temporal.cloud), and saving the IPFS hash output to [connect with your domain](./#option-3-build-a-customized-website-yourself-and-attach-your-ipfs-hash-to-your-domain).

## Upload Directly to IPFS (GitHub Action)

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

In order to use it, you need to add one step to main.yml:

```yaml
- uses: aquiladev/ipfs-action@v0.1.1
  id: upload
  with:
    path: ./build
```

There will be a build artifact on a runner after [steps](https://dapps-delivery-guide.readthedocs.io/en/latest/delivery/github-actions.html#step-1-create-pipeline) (usually in directory build or dist). You need to pass the directory as a path parameter.

The step will have hash output — it will be needed later to [connect your d-website to your domain](./#option-3-build-a-customized-website-yourself-and-attach-your-ipfs-hash-to-your-domain). Token **${{ steps.upload.outputs.hash }}** can be used in next steps where _upload_ is the id of current step.

## Upload to Pinata using GitHub Action

The same GitHub Action allows you to upload a D-website to [Pinata](https://pinata.cloud) pinning service. Pinata simplifies immutable data with a simple IPFS API and toolkit.

In order to use it, you need to add one step to main.yml:

```yaml
- uses: aquiladev/ipfs-action@v0.1.3
  id: pinata
  with:
    path: ./build
    service: pinata
    pinataKey: ${{ secrets.PINATA_KEY }}
    pinataSecret: ${{ secrets.PINATA_SECRET }}
    pinataPinName: {pin_name}
```

The output of the upload action is similar to the previous example. You will need to save the hash output to [connect to your domain](./#option-3-build-a-customized-website-yourself-and-attach-your-ipfs-hash-to-your-domain).

## Upload to Pinata.cloud Website Interface

The following guide explains how to upload files to IPFS via Pinata website interface.

* Go to [Pinata.cloud](https://pinata.cloud) and sign-up / sign-in.
* Ensure the **Pin Manager** tab is selected and click **Upload**.

![Locate the Pin Manager tab for uploading files to Pinata.cloud](../../../.gitbook/assets/pin-manager-pinata.png)

* Then, click **Folder** and select the folder containing the website files you wish to upload.
* When the upload is complete, the IPFS CID (or **IPFS hash**) will appear under the Pin Manager tab.

![Locate the IPFS Hash for your d-website in Pinata.cloud](../../../.gitbook/assets/ipfs-hash-pinata-web-interface.png)

* Click the IPFS hash to copy it to the clipboard. Then, [connect the IPFS hash to your domain](./#option-3-build-a-customized-website-yourself-and-attach-your-ipfs-hash-to-your-domain).

## Convert a Static Website for IPFS

A few options exist for converting a static website to the proper IPFS configuration for d-websites.

### IPFS Deploy

The first option is [IPFS Deploy](https://github.com/ipfs-shipyard/ipfs-deploy), which is a zero-config CLI designed specifically for deploying a static website to IPFS. Pinning service configuration options include Infura, DAppNode, IPFS Cluster, and Pinata.

For more information on this tool for building d-websites, please review the [IPFS Deploy README](https://github.com/ipfs-shipyard/ipfs-deploy#readme) file.

### WordPress Websites

If you have a Wordpress website that you'd like to configure for use as a d-website, then you can test out a few plugins. One plugin to consider is [Simply Static](https://wordpress.org/plugins/simply-static/), which converts your existing WordPress website to a static website that you can host on your server, a static hosting provider, or a CDN.&#x20;

For more information on this feature and how it works for d-websites, please see our Guide on [Converting Wordpress for IPFS](https://community.unstoppabledomains.com/t/convert-wordpress-site-for-use-with-ipfs-guide/327).
