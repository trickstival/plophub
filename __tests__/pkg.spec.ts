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
})
