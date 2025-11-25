You can generate the [namehash](/getting-started/glossary.md#namehash) of a domain using the [Resolution Service](https://docs.unstoppabledomains.com/apis/resolution/#operation/DomainsController.getDomain). You can also use [online tools](https://swolfeyes.github.io/ethereum-namehash-calculator/) to calculate the namehash of the domain.

```typescript
/**
 * Resolves the namehash for a given domain.
 * 
 * @param {string} domain - The domain name to resolve
 * @returns {Promise<string | null>} The resolved namehash or null if not found
 * 
 * @throws {Error} When no namehash can be resolved for the given domain
 */
async function resolveNamehash(
  domain: string, 
): Promise<string | null> {

  try {
    const response = await axios.get(
      UNSTOPPABLE_API_BASE_URL + 'domains/' + encodeURIComponent(domain), 
      {
      headers: { 'Authorization': 'Bearer ' + UNSTOPPABLE_API_KEY }
      }
    );

    const metadata = response.data.meta;
      
    const namehash = metadata['namehash'];

    if (namehash) return namehash;

    throw new Error('No namehash found for ' + domain);
  } catch (error) {
    console.error('Namehash resolution error:', error);
    return null;
  }
}
```
