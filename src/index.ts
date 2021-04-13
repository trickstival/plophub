import LiftOff from 'liftoff'
import { loadPlugins, resolvePlugins } from './plugins'


export default async (plop: LiftOff) => {
  const pluginsNames = await resolvePlugins()
  const plugins = await loadPlugins(pluginsNames)
  for (const plugin of plugins) {
    plugin(plop)
  }
}
