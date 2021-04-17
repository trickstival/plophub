import fs from 'fs'
import path from 'path'

interface Pkg {
  dependencies: Record<string, string>,
  devDependencies: Record<string, string>
}

const defaultPkg: Pkg = {
  dependencies: {},
  devDependencies: {}
}
function getPkg (): Pkg {
  const pkgPath = path.join(process.cwd(), 'package.json')
  if (!fs.existsSync(pkgPath)) {
    return defaultPkg
  }
  const pkg = fs.readFileSync(pkgPath, 'utf8')
  return JSON.parse(pkg)
}

export function getDependencies (): Record<string, string> {
  const pkg = getPkg()
  return {
    ...pkg.dependencies || {},
    ...pkg.devDependencies || {}
  }
}

