---
title: Browser Resolution Test Domains | Unstoppable Domains Developer Portal
description: This page provides a list of the browser resolution test domains and reviews the process for retrieving test records.
redirectFrom:
  - /developer-toolkit/advanced-use-cases/resolve-domains-browser/test-domains/
---

# Browser Resolution Test Domains

| Domain name                                           |
| :---------------------------------------------------- |
| udtestdev-dns-ipfs.crypto                             |
| udtestdev-dns.crypto                                  |
| udtestdev-dns-a-record.crypto                         |
| udtestdev-ipfs.crypto                                 |
| udtestdev-dns-global-ttl.crypto                       |
| udtestdev-dns-ipfs-no-preffered-records.crypto        |
| udtestdev-dns-cname.crypto                            |
| udtestdev-dns-ipfs-redirect.crypto                    |
| udtestdev-redirect.crypto                             |
| udtestdev-dns-ipfs-redirect-legacy-ipfs-legacy.crypto |
| udtestdev-ipfs-legacy.crypto                          |
| udtestdev-ipfs-legacy-redirect-legacy.crypto          |
| udtestdev-redirect-legacy.crypto                      |

## Getting test records

Check records with the [Resolution Service API](/resolution/quickstart/resolution/):

```typescript
/**
 * Resolves all records for a given domain.
 * 
 * @param {string} domain - The domain name to resolve
 * @returns {Promise<string | null>} The resolved addresses or null if not found
 * 
 * @throws {Error} When no addresses can be resolved for the custom record
 */
async function resolveAllRecords(
  domain: string, 
): Promise<string | null> {

  try {
    const response = await axios.get(
      UNSTOPPABLE_API_BASE_URL + 'domains/' + encodeURIComponent(domain), 
      {
      headers: { 'Authorization': 'Bearer ' + UNSTOPPABLE_API_KEY }
      }
    );

    const records = response.data.records;

    if (records) return records;

    throw new Error('No records found for ' + domain);
  } catch (error) {
    console.error('Record resolution error:', error);
    return null;
  }
}
```
