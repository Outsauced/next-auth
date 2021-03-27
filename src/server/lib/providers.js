/** Adds `signinUrl` and `callbackUrl` to each provider. */
export default function parseProviders ({ providers = [], baseUrl }) {
  return providers.map((provider) => ({
    ...provider,
    signinUrl: `${baseUrl}/signin/${provider.id}`,
    callbackUrl: `${baseUrl}/callback/${provider.id}`
  }))
}
