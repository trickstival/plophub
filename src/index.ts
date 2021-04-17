import { readPlophubConfig, resolvePlugins, PlophubConfig } from './plugins'

interface PlopCfg {
	force: boolean;
	destBasePath: string;
}

interface Plop {
  load(target: string[] | string, loadCfg?: PlopCfg, includeOverride?: boolean): void;
}

export default (plop: Plop, localConfig: PlophubConfig) => {
  const config = {
    ...readPlophubConfig(),
    ...localConfig
  }

  loadPluginsFromConfig()
  autoloadPlugins()

  function loadPluginsFromConfig () {
    for (const plugin of config.plugins) {
      plop.load(plugin.name)
    }
  }

  function autoloadPlugins () {
    if (!config.autoload) {
      return
    }
    const pluginsFromConfig = new Set(config.plugins.map(config => config.name))
    const autoloadedPlugins = resolvePlugins()
      .filter(plugin => !pluginsFromConfig.has(plugin))

    plop.load(autoloadedPlugins)
  }
}
