import LiftOff from 'liftoff'
import { getDependencies } from './pkg'

async function resolvePlugins () {
  const dependencies = await getDependencies()
  const plugins = Object.keys(dependencies)
    .filter(dep => dep.match(/^plophub-(.*)$/))
    .map(dep => dep[1])
  return plugins
}

export default (plop: LiftOff) => {
  const plugins = resolvePlugins()
}
