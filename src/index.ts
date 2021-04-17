import { resolvePlugins } from './plugins'

interface PlopCfg {
	force: boolean;
	destBasePath: string;
}

interface Plop {
  load(target: string[] | string, loadCfg?: PlopCfg, includeOverride?: boolean): void;
}

export default (plop: Plop) => {
  const pluginsNames = resolvePlugins()
  plop.load(pluginsNames)
}
