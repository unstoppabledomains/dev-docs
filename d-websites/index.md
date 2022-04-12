---
title: IPFS and D-Web Overview
description: This page provides a high-level overview of IPFS and decentralized websites and how they work alongside Unstoppable domains.
---

# IPFS and D-Web Overview

For a **decentralized website** \(d-website\) or **decentralized application** \(DApp\), you will upload website files to IPFS network instead of to Github or another centralized file hosting service. 

## IPFS Basics

<embed src="/snippets/_ipfs-basics.md" />

## IPFS Hash & Your D-Website

Your decentralized website will have a unique hash or **content identifier** (CID), allowing other peers in the network to find and request that content from any node that has it using a **distributed hash table** \(DHT\).

Once you have attached this IPFS hash to your domain, you can navigate to your new d-website using a human-readable address much like a centralized website resolved through DNS. 

## Build Your Unstoppable D-Website

You will follow these steps to build and connect your d-website to your Unstoppable Domain. 

1. [Build your static website](build-website.md)
2. [Upload Your Site to IPFS](upload-ipfs.md)
3. [Connect Your IPFS Website to Your Domain](connect-ipfs.md)

:::info Important
If you use [**Unstoppable's IPFS uploader**](upload-ipfs.md#option-1-upload-your-website-with-our-ipfs-uploader), our systems will automatically connect the IPFS site to your Unstoppable domain without requiring you to separately retrieve the IPFS hash.
:::