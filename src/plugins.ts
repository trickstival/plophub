import { getDependencies } from './pkg'

export async function resolvePlugins () {
  const dependencies = await getDependencies()
  const regex = /^plophub-(.*)$/
  const plugins = Object.keys(dependencies)
    .map(dep => dep.match(regex))
    .filter(matches => matches)
    .map(matches => (matches as string[])[1])
  return plugins
}
