import fs from 'fs'
import path from 'path'
import { fileExists } from './fsUtils'

interface Pkg {
  dependencies: Record<string, string>,
  devDependencies: Record<string, string>
}

const defaultPkg: Pkg = {
  dependencies: {},
  devDependencies: {}
}
async function getPkg (): Promise<Pkg> {
  const pkgPath = path.join(process.cwd(), 'package.json')
  if (!await fileExists(pkgPath)) {
    return defaultPkg
  }
  const pkg = await fs.promises.readFile(pkgPath, 'utf8')
  return JSON.parse(pkg)
}

export async function getDependencies (): Promise<Record<string, string>> {
  const pkg = await getPkg()
  return {
    ...pkg.dependencies || {},
    ...pkg.devDependencies || {}
  }
}

