---
description: >-
  This page provides a list of the browser resolution test domains and reviews
  the process for retrieving test records.
---

# Browser Resolution Test Domains

| Domain name |
| :--- |
| udtestdev-dns-ipfs.crypto |
| udtestdev-dns.crypto |
| udtestdev-dns-a-record.crypto |
| udtestdev-ipfs.crypto |
| udtestdev-dns-global-ttl.crypto |
| udtestdev-dns-ipfs-no-preffered-records.crypto |
| udtestdev-dns-cname.crypto |
| udtestdev-dns-ipfs-redirect.crypto |
| udtestdev-redirect.crypto |
| udtestdev-dns-ipfs-redirect-legacy-ipfs-legacy.crypto |
| udtestdev-ipfs-legacy.crypto |
| udtestdev-ipfs-legacy-redirect-legacy.crypto |
| udtestdev-redirect-legacy.crypto |

## Getting test records

Check records with [resolution-js](https://github.com/unstoppabledomains/resolution) library:

```typescript
import Resolution from '@unstoppabledomains/resolution/build/Resolution';

const resolution = new Resolution();
resolution.allRecords('udtestdev-dns-ipfs.crypto').then((records) => {
  console.log(records);
  // Output
  // {
  //   'dns.A': '["10.0.0.1","10.0.0.2"]',
  //   'dns.A.ttl': '1800',
  //   'dns.ttl': '1000',
  //   'dns.CNAME': '',
  //   'dns.CNAME.ttl': '',
  //   'dweb.ipfs.hash': 'QmVJ26hBrwwNAPVmLavEFXDUunNDXeFSeMPmHuPxKe6dJv',
  //   'browser.preferred_protocols': '["ipfs","https","http"]',
  //   'browser.redirect_url': '',
  //   'ipfs.html.value': '',
  //   'ipfs.redirect_domain.value': ''
  // }
});
```

Check records with [resolution-js CLI](https://github.com/unstoppabledomains/resolution#command-line-interface):

```bash
$ resolution -d udtestdev-dns-ipfs.crypto -a
{
    "records": {
        "dns.A": "[\"10.0.0.1\",\"10.0.0.2\"]",
        "dns.A.ttl": "1800",
        "dns.ttl": "1000",
        "dweb.ipfs.hash": "QmVJ26hBrwwNAPVmLavEFXDUunNDXeFSeMPmHuPxKe6dJv",
        "browser.preferred_protocols": "[\"ipfs\",\"https\",\"http\"]"
    }
}
```

