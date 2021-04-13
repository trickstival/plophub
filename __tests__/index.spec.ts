import path from 'path'
import plophub from '../src'

describe('plugins', () => {
  let cwdSpy = jest.spyOn(process, 'cwd')
  cwdSpy.mockImplementation(() => __dirname)
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should be able to resolve both deps and devDeps', async () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/depsAndDevDeps'))
    const plopMock = {
      setGenerator: jest.fn()
    }
    // @ts-ignore
    await plophub(plopMock)
    expect(plopMock.setGenerator).toHaveBeenCalledTimes(2)
    expect(plopMock.setGenerator).toHaveBeenCalledWith('controller', {
        description: 'application controller logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'controller name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/{{name}}.js',
            templateFile: 'plop-templates/controller.hbs'
        }]
    })
  })
  
  it('should throw an error if no package.json is found', async () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/devDeps'))
    // @ts-ignore
    const rej = await expect(plophub({})).rejects.toEqual(new Error(
     'plugin devDep1 does not contain a package.json'
    ))
  })
})
