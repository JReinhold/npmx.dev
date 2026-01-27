export function getPackagePageParams(pkg: string, version: string | null = null) {
  const [org, name] = pkg.startsWith('@') ? pkg.split('/') : [null, pkg]

  return { org, name, version }
}
