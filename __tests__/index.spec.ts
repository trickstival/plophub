import path from 'path'
import plophub from '../src'

describe('plugins', () => {
  let cwdSpy = jest.spyOn(process, 'cwd')
  cwdSpy.mockImplementation(() => __dirname)
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should be able to resolve both deps and devDeps', () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/depsAndDevDeps'))
    const plopMock = {
      setGenerator: jest.fn(),
      load: jest.fn((plugins: string[]) => {
        for (const plugin of plugins) {
          require(`./mocks/pkg/depsAndDevDeps/node_modules/${plugin}`)(plopMock)
        }
      })
    }
    // @ts-ignore
    plophub(plopMock)
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
    expect(plopMock.load).toHaveBeenCalledWith(['plophub-vue-tests', 'plophub-pluginfoo'])
  })
})
