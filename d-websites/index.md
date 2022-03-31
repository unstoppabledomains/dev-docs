---
title: Unstoppable D-Websites
description: This page provides a high-level overview of IPFS and decentralized websites and how they work alongside Unstoppable domains.
---

# Unstoppable D-Websites

For a **decentralized website** \(d-website\) or **decentralized application** \(DApp\), you will upload website files to IPFS network instead of to Github or another centralized file hosting service. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/I9vTeAtELOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## IPFS Basics

[**InterPlanetary File System** \(IPFS\)](https://en.wikipedia.org/wiki/InterPlanetary_File_System) is a protocol and peer-to-peer network for storing and sharing data in a distributed file system.

IPFS allows users to not only receive but host content in a similar manner to BitTorrent. As opposed to a centrally located server, IPFS is built around a decentralized system of user-operators who hold a portion of the overall data, creating a resilient system of file storage and sharing. 

## IPFS Hash & Your D-Website

Your decentralized website will have a unique hash or **content identifier** (CID), allowing other peers in the network to find and request that content from any node that has it using a **distributed hash table** \(DHT\).

Once you have attached this IPFS hash to your domain, you can navigate to your new d-website using a human-readable address much like a centralized website resolved through DNS. 

## Connect the D-Website to Your Domain

You will follow these steps to connect your d-website to your Unstoppable Domain. 

1. [Build your static website](build-website.md)
2. [Upload Your Site to IPFS](upload-ipfs.md)
3. [Connect Your IPFS Website to Your Domain](connect-ipfs-to-domain.md)

:::info Important
If you use [**Unstoppable's IPFS uploader**](upload-ipfs.md#option-1-upload-your-website-with-our-ipfs-uploader), our systems will automatically connect the IPFS site to your Unstoppable domain without requiring you to separately retrieve the IPFS hash.
:::