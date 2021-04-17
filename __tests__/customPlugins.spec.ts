import path from 'path'
import plophub from '../src'

describe('custom plugins', () => {
  let cwdSpy = jest.spyOn(process, 'cwd')
  cwdSpy.mockImplementation(() => __dirname)
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should load custom plugins', () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/customPlopfile'))
    const plopMock = {
      load: jest.fn(),
    }
    // @ts-ignore
    plophub(plopMock)

    expect(plopMock.load.mock.calls).toEqual([
      ['customPlopFile'],
      ['customPlugin']
    ])
  })

  it('should override config file with local config', () => {
    cwdSpy.mockImplementation(() => path.join(__dirname, 'mocks/pkg/customPlopfile'))

    const plopMock = {
      load: jest.fn(),
    }
    // @ts-ignore
    plophub(plopMock, { autoload: true })

    expect(plopMock.load.mock.calls).toEqual([
      ['customPlopFile'],
      ['customPlugin'],
      [['plophub-something']]
    ])
  })
})
