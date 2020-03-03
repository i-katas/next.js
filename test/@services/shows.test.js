import shows from '@services/shows'
import fetch from 'isomorphic-unfetch'

jest.mock('isomorphic-unfetch')

describe('shows', () => {

  beforeEach(jest.clearAllMocks)

  it('unpack shows from response', async () => {
    let show = {id: 1, name: 'boot'}
    fetch.mockResolvedValue({
      json: () => Promise.resolve([{show: show}])
    })

    let unpacked = await shows.list()

    expect(unpacked).toEqual([show])
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching('/shows.json$'))
  })

  it('unpack a show from response', async () => {
    let show = {id: 1, name: 'boot'}
    fetch.mockResolvedValue({ json: () => Promise.resolve(show) })

    let unpacked = await shows.get(1)

    expect(unpacked).toEqual(show)
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching('/1.json$'))
  })

  it('reports diagnostic message if missing process.env.serverURL on loading', () => {
    jest.resetModules()

    delete process.env.serverURL

    expect(() => require('@services/shows')).toThrow(/Environment `serverURL` is absent/)
  })

})
