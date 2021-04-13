import { getDependencies } from './pkg'
import path from 'path'
import fs from 'fs'
import LiftOff from 'liftoff'
import {fileExists} from './fsUtils'

export async function resolvePlugins () {
  const dependencies = await getDependencies()
  const regex = /^plophub-(.*)$/
  const plugins = Object.keys(dependencies)
    .map(dep => dep.match(regex))
    .filter(matches => matches)
    .map(matches => (matches as string[])[1])
  return plugins
}

type PlopPlugin = (plop: LiftOff) => any

export async function loadPlugins (plugins: string[]): Promise<PlopPlugin[]> {
  return Promise.all(
    plugins.map(async plugin => {
      const pluginPath = path.join(process.cwd(), 'node_modules', 'plophub-' + plugin)
      const pkgPath = path.join(pluginPath, 'package.json')
      if (!await fileExists(pkgPath)) {
        throw new Error(`plugin ${plugin} does not contain a package.json`)
      }
      const pkgStr = await fs.promises.readFile(pkgPath, 'utf8')
      const pkg = JSON.parse(pkgStr)
      const pluginModule = await import(path.join(pluginPath, pkg.main))
      return pluginModule.default
    })
  )
}
