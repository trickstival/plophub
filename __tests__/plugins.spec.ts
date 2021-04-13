import path from 'path'
import { loadPlugins, resolvePlugins } from '../src/plugins'

describe('plugins', () => {
  let cwdSpy = jest.spyOn(process, 'cwd')
  cwdSpy.mockImplementation(() => __dirname)
  afterAll(() => {
    jest.clearAllMocks()
  })
  it('should be able to resolve both deps and devDeps', async () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/depsAndDevDeps'))
    const deps = await resolvePlugins()
    expect(deps).toEqual(['vue-tests', 'pluginfoo'])
  })
  it('should be able to load plugins', async () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/depsAndDevDeps'))
    // @ts-ignore
    const pluginFoo = await import('./mocks/pkg/depsAndDevDeps/node_modules/plophub-pluginfoo')
    const plugins = await loadPlugins(['pluginfoo'])
      expect(plugins).toEqual([pluginFoo.default])
  })
})
