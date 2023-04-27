Once a user has successfully authenticated, the application should display the user’s **domain** (and not their **wallet address**) in the application’s UI to confirm the authorization was successful.

<figure>

![Showing an authenticated user's domain](../../../static/images/third-UI-example-login-domains.png '#width=50%')

<figcaption>Showing an authenticated user's domain</figcaption>
</figure>

Authorizations are stored inside `localStorage`, so any identically configured `UAuth` instance has access to the same users.
Any integration using [@uauth/js](/identity/sdk-and-libraries/uauth-js.md) or a dependent middleware package can access the authorized user information by instantiating a new [UAuth](/identity/sdk-and-libraries/uauth-js.md#client) object with the same client options and calling the [user()](/identity/sdk-and-libraries/uauth-js.md#user) method.

```javascript @uauth/js
import UAuth from '@uauth/js'

const uauth = new UAuth({
  // ... options
})

uauth.user()
  .then((user) => {
    // user exists
    console.log("User information:", user)
  })
  .catch(() => {
    // user does not exist
  })
```

```javascript web3-onboard
const wallets$ = onboard.state.select('wallets').pipe(share())

wallets$.subscribe(wallet => {
  const unstoppableUser = wallet.find(
    provider => provider.label === 'Unstoppable'
  )

  if (unstoppableUser) console.log(unstoppableUser.instance.user)
})
```

```javascript web3-react
const uauthConnector = new UAuthConnector()

uauthConnector.uauth.user().then().catch()
```

```javascript web3modal
import UAuth from '@uauth/js'

const uauthOptions = {
  clientID: "",
  redirectUri: ""
}

const web3ModalOptions = {
  'custom-uauth': {
    ...uauthOptions}
}

const web3Modal = new Web3Modal(web3ModalOptions)

new UAuth(uauthOptions).user().then().catch()
```

```javascript moralis
const uauthMoralisConnector = new UAuthMoralisConnector()

uauthMoralisConnector.uauth.user().then().catch()

```

The `user()` method will return a [UserInfo](/identity/sdk-and-libraries/uauth-js.md#userinfo) object containing the information requested by your client scopes. The following key-value pairs would be returned by a login session with the minimum `"openid wallet"` scopes defined:

```json
{
  "sub" : "domain.tld", // The domain used to login
  "wallet_address" : "0x . . . ", // The Ethereum wallet that owns the domain
  "wallet_type_hint" : "web3",
  "eip4361_message" : "identity.unstoppable domains wants you sign in with your Ethereum account: . . . ",
  "eip4361_signature" : "0x . . . ",
}
```

<embed src="/snippets/_discord.md" />