---
title: Browser Resolution Algorithm | Unstoppable Domains Developer Portal
description: This section explains how different domain record configurations should be interpreted by browsers.
---

# Browser Resolution Algorithm

<figure>

![Diagram shows how to Resolve DWeb by direct read from Ethereum](/images/resolve\_dweb\_website\_by\_direct\_reading\_from\_ethereum\_and\_decentralized\_network.png '#width=75%')

<figcaption>Diagram shows how to Resolve DWeb by direct read from Ethereum</figcaption>
</figure>

A browser can select the supported protocol. If a domain is configured for multiple protocols, it should prioritize a protocol based on `browser.preferred_protocols` record that can be set to a list of the defined protocols.

If `browser.preferred_protocols` is not set, a browser should use the following value as a default `["bzz", "ipfs", "https", "http", "ftp"]`. If `browser.preferred_protocols` is set but is not complete, a browser should append the absent protocols in the default order specified above. A domain can have a single content identifier for each distributed protocol stored in `dweb.<protocol>.hash`. Ex: `dweb.bzz.hash` for Swarm's `bzz` protocol. See [D-Web Records](#decentralized-web-records) for more information.

If none of the `dweb` hash records are set, a browser should fall back to legacy ipfs record that is set as `ipfs.html.value`.

If none of the `dweb` or legacy `ipfs.html.value` records are set, a browser should fall back to DNS resolution that is set within `dns.*` namespace.

If none of the `dns.*` records are set, a browser should fall back to the `browser.redirect_url` or legacy `ipfs.redirect_domain.value` keys. `browser.redirect_url` key has a priority over `ipfs.redirect_domain.value` if both are set.

Generally, browsers automatically add `http://` prefix for any domain in the address bar if the protocol is not specified explicitly by a user. For web3 domain names (assuming a browser supports many protocols), it is preferred to determine a protocol only after resolving domain records.

`browser.redirect_url` and `ipfs.redirect_domain.value` contains full URL according to RFC-1738 and no additional actions required to provide redirect.

<figure>

![Process diagram depicting entire browser resolution algorithm](/images/browser\_resolution\_algorithm.svg '#width=75%')

<figcaption>Process diagram depicting entire browser resolution algorithm</figcaption>
</figure>

## Browser resolution records

All records related to browser resolution are stored within these namespaces:

* `dns.*` — For traditional DNS records
* `dweb.*` — For distributed content records
* `browser.*` — Hint records to help a browser determine a preferred hypermedia protocol

To retrieve records associated with a domain, see [Resolve Using Smart Contracts](/developer-toolkit/resolution-integration-methods/direct-blockchain-calls/resolve-eth-smart-contracts.md).

### DNS records

`Resolver` records may contain classical DNS records along with other records. To distinguish those from other CNS (Crypto Name Service) records, the `dns.*` namespace is used. So DNS `A` corresponds to the `dns.A` CNS record. Any [listed DNS record](https://en.wikipedia.org/wiki/List\_of\_DNS\_record\_types) described in RFC standards is supported. All record names must follow the uppercase naming convention.

Unlike DNS, the CNS `Resolver` doesn't support multiple records with the same key. Therefore, DNS record values must be stored as a [JSON](http://json.org) serialized array of strings.

* **Example 1:** A domain that needs one `CNAME` record set to `example.com.` must be configured as one crypto record `dns.CNAME` set to `["example.com."]`.
* **Example 2:** A domain that needs two `A` records set to `10.0.0.1` and `10.0.0.2` must be configured as one crypto record `dns.A` set to `["10.0.0.1","10.0.0.2"]`.

This serialization is the only data transformation required when converting a traditional DNS record into a CNS record.

CNS records do not have a domain name associated with them. That is why there is no feature for storing your subdomain records inside a parent domain. Example: `www.example.com` record can only be set inside a resolver of `www.example.com` but never inside `example.com`.

A recommended way to display content in a browser for web3 domains is explained in [Resolve Domains in Web Applications](../resolve-domains-in-web-applications.md).

#### TTL records

TTL records can be set for all records or individual types of records. TTL for all records can be set in `dns.ttl`. TTL for an individual record type can be set in `dns.<RECORD>.ttl`. If `ttl` for individual an record type is not set, a default `dns.ttl` must be applied. If a `dns.ttl` record is not set, the client recommends using `300` (5 minutes) as a default value.

Example CNS records setup:

| Record    | Value                         |
| --------- | ----------------------------- |
| dns.A     | \["10.0.0.1", "10.0.0.2"]     |
| dns.A.ttl | 168                           |
| dns.AAAA  | \["2a00:1450:401b:805::200e"] |
| dns.MX    | \["10 aspmx.example.com."]    |
| dns.ttl   | 128                           |

Should be transformed into the following DNS records:

| Record | Value                    | TTL |
| ------ | ------------------------ | --- |
| A      | 10.0.0.1                 | 168 |
| A      | 10.0.0.2                 | 168 |
| AAAA   | 2a00:1450:401b:805::200e | 128 |
| MX     | 10 aspmx.example.com.    | 128 |

TTL for individual records of the same type is currently unsupported. This is due to needing to change the record value format, increased gas cost, and their depreciated status according to [RFC-2181](https://datatracker.ietf.org/doc/html/rfc2181#section-5.2). Setting `dns.ttl` instead of TTL for individual records is recommended due to higher gas efficiency.

#### Authority responses

It is a common practice in DNS to have an authority of a subdomain delegated to a parent domain. This mechanism is not necessary for web3 domains because the cost of subdomain registration is comparable to setting records. In other words, configuring a subdomain using the parent domain has no benefit and may result in even higher gas costs since it's necessary to store associated subdomain names to each record.

Therefore, authority configurations are not supported by web3 domains at the moment.

### Decentralized Web Records

Decentralized Web (D-Web) records allow configuring a domain for decentralized website protocols like IPFS or Swarm. These records are stored in the `dweb.*` namespace. Each protocol has its own sub-namespace for its data using a canonical name. Example: Swarm's protocol canonic name is `bzz` so its records are stored at `dweb.bzz.*` namespace.

Record structure can be different based on the protocol. However, all protocols have a common `.hash` record used to reference content in the decentralized network. Example: `dweb.ipfs.hash` for IPFS protocol.

See [Resolve Domains in Web Applications](../resolve-domains-in-web-applications.md) for information on how to interpret those records.

### Legacy records support

As of Q3 2020, most .crypto domains are configured using legacy record names for IPFS hash and redirect domain:

1. `ipfs.html.value` depreciated in favor of `dweb.ipfs.hash`
2. `ipfs.redirect_domain.value` depreciated in favor of `browser.redirect_url`

Browsers are strongly recommended to support those records as a fallback when corresponding replacement records are not set.
