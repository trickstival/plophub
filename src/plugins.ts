import path from 'path'
import fs from 'fs'
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

interface PluginConfig {
  name: string,
  plopfile: string
}

export interface PlophubConfig {
  autoload: boolean,
  plugins: PluginConfig[]
}

export function readPlophubConfig (): PlophubConfig {
  const configPath = path.join(process.cwd(), 'plophub.conf.js')
  const defaultConfig: PlophubConfig = {
    autoload: true,
    plugins: []
  }
  if (!fs.existsSync(configPath)) {
    return defaultConfig
  }
  const config = {
    ...defaultConfig,
    ...require(configPath)
  }
  return config
}

