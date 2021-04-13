import path from 'path'
import { resolvePlugins } from '../src/plugins'

describe('pkg', () => {
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
})
