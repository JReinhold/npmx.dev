import { NPMX_DOCS_SITE_PROD } from '#shared/utils/constants'

export function useAppUrls() {
  const { env, siteUrl } = useAppConfig()
  return {
    siteUrl,
    // TODO(serhalp): Handle preview environment. The docs site is a separate deployment, so we'd
    // need to infer its preview URL from the site preview URL somehow...?
    docsUrl: env === 'dev' ? 'http://localhost:3001' : NPMX_DOCS_SITE_PROD,
  }
}
