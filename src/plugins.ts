import { getDependencies } from './pkg'

export function resolvePlugins () {
  const dependencies = getDependencies()
  const regex = /^plophub-(.*)$/
  const plugins = Object.keys(dependencies)
    .map(dep => dep.match(regex))
    .filter(matches => matches)
    .map(matches => (matches as string[])[0])
  return plugins
}

