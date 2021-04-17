import path from 'path'
import { resolvePlugins } from '../src/plugins'

describe('plugins', () => {
  let cwdSpy = jest.spyOn(process, 'cwd')
  cwdSpy.mockImplementation(() => __dirname)
  afterAll(() => {
    jest.clearAllMocks()
  })
  it('should be able to resolve both deps and devDeps', () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/depsAndDevDeps'))
    const deps = resolvePlugins()
    expect(deps).toEqual(['plophub-vue-tests', 'plophub-pluginfoo'])
  })
})
