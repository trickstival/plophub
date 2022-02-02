import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { fetchPlugins } from '../src/marketplace'
import npmResponse from './mocks/npm/npmResponse.json'

const server = setupServer()
beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

describe('marketplace', () => {
  it('should be able to fetch packages from npm', async () => {
    server.use(
      rest.get('https://registry.npmjs.com/-/v1/search', (req, res, ctx) => {
        return res(ctx.json(npmResponse))
      })
    )
    const plugins = await fetchPlugins()
    expect(plugins).toEqual([
      { packageName: 'plophub' },
      { packageName: 'plophub-silly-example' }
    ])
  })
  it('should return empty array if the request does not succeed', async () => {
    server.use(
      rest.get('https://registry.npmjs.com/-/v1/search', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    const plugins = await fetchPlugins()
    expect(plugins).toEqual([])
  })
  it('should return empty array if the response is empty', async () => {
    server.use(
      rest.get('https://registry.npmjs.com/-/v1/search', (req, res, ctx) => {
        return res(ctx.json([]))
      })
    )
    const plugins = await fetchPlugins()
    expect(plugins).toEqual([])
  })
})

