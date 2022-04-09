Unstoppable Domains follows the error handling best practices specific to each library's language. Each error data structure contains an error code, a human-readable message, and extra details that may help you debug the error.

```typescript
{
  code: string; // one of our custom error codes
  message?: string; // human-readable error summary
  providerMessage?: string; // internal error message from the provider (alchemy, infura, etc.)
  errorMessage?: string; // internal error message / nested error
  method?: ResolutionMethod; // resolution method (UNS L1, UNS L2, CNS, ZNS, UD API)
  methodName?: string; // resolution method that was used (e.g. Resolution.addr, Resolution.allRecords)
  domain?: string; // domain that caused the error
  currencyTicker?: string; // currency ticker that caused the error
  recordName?: string; // record that caused the error
  namingService?: string; // naming service (UNSL1, UNSL2, ZNS, ENS, CNS, etc.)
  location?: UnsLocation; // domain location (L1, L2)
  tokenUri?: string; // domain metadata link
}
```

The code snippet below shows how to handle the common error cases you may encounter during integration, including:

- Resolving an unregistered domain
- Resolving an undefined record of a domain
- Resolving a misconfigured domain
- Resolving a domain with an unsupported domain ending

We handle the errors thrown by the resolution library by switching on the `error code` and displaying custom messages to the user. You can then perform other actions to handle the error or show the `error message` value from the error data structure to the user.
