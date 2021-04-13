import path from 'path'
import { getDependencies } from '../src/pkg'

describe('pkg', () => {
  let cwdSpy = jest.spyOn(process, 'cwd')
  cwdSpy.mockImplementation(() => __dirname)
  afterAll(() => {
    jest.clearAllMocks()
  })
  it('should return an empty object if there is no package.json', async () => {
    const deps = await getDependencies()
    expect(deps).toEqual({})
  }) 
  it('should be able to resolve only devDependencies', async () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/devDeps'))
    const deps = await getDependencies()
    expect(deps).toEqual({ 'plophub-devDep1': '1.0.0', devDep2: '2.0.0' })
  })
  it('should be able to resolve only dependencies', async () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/deps'))
    const deps = await getDependencies()
    expect(deps).toEqual({ dep1: '1.0.0', dep2: '2.0.0' })
  })
  it('should be able to resolve both deps and devDeps', async () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/depsAndDevDeps'))
    const deps = await getDependencies()
    expect(deps).toEqual({ 'plophub-pluginfoo': '1.0.0', devDep2: '2.0.0', 'plophub-vue-tests': '1.0.0', dep2: '2.0.0' })
  })
})
