import Index from 'pages/index'
import {links} from '@components/Header'
import shows from '@services/shows'


jest.mock('@services/shows')

describe('index', () => {
  it('render shows', () => {
    let page = mount(<Index shows={ [{id: 1, name: 'Batman'}] }/>)

    let shows = page.find('.show Link')
    expect(shows.prop('href')).toEqual('/show/[id]')
    expect(shows.prop('as')).toEqual('/show/1')
    expect(shows).toIncludeText('Batman')
  })

  it('actived', () => {
    let page = mount(<Index/>)

    expect(page.find('Header')).toExist()
    expect(page.find('Header').prop('active')).toEqual(links.home)
  })

  it('load shows', async () => {
    let expected = []
    shows.list.mockResolvedValue(expected)

    let data = await Index.getInitialProps()

    expect(data).toEqual({shows: expected})
  })

})
