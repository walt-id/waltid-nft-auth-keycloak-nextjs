## Login with NFT | Keycloak - Next.js 

Let your users authenticate in a Next.js app with NFTs from a specified collection or with specific traits.
The login requests are handled by Keycloak and the validation of the NFTs is handled by the IDP Kit, an open-source
product by walt.id. NextAuth.js is used as an authentication solution as it can be easily configured to work with 
Keycloak.

## Setup
1. Follow the steps in our Login With NFTs | Keycloak tutorial, to set up and configure the IDP-Kit as well as Keycloak.
2. Update the `CLIENT_ID` and `CLIENT_SECRET` environment variables based on the values you get from Keycloak. 
3. The `ISSUER` environment variable should include the realm - e.g. `https://my-keycloak-domain.com/realms/My_Realm` - 
from your hosed Keycloak instance. For more information on how to configure the Keycloak provider visit the
[documentation](https://next-auth.js.org/providers/keycloak)

## Installation
```bash
yarn install
```

## Running the Project
```bash
// dev 

yarn dev

// production

yarn build // builds the project

yarn start // runs the project
```
