import Show from 'pages/show/[id]'
import shows from '@services/shows'

jest.mock('@services/shows')

describe('show', () => {

  beforeEach(jest.clearAllMocks)

  it('render the show', () => {
    let page = mount(<Show show={ {id: 1, name: 'Hello, Next.js', summary: '<b>Dear, Welcome to Next.js'} }/>)

    expect(page.find('h1')).toHaveText('Hello, Next.js')
    expect(page.find('p')).toHaveHTML('<p><b>Dear, Welcome to Next.js</b></p>')
  })

  it('active all nav links', () => {
    let page = mount(<Show />)

    expect(page.find('Header')).toExist()
    expect(page.find('Header').prop('active')).toBeUndefined()
  })

  it('load show by [id] for renderring', async () => {
    let show = {id: 1, name: 'test'}
    shows.get.mockResolvedValue(show)

    let result = await Show.getInitialProps({query: {id: 1}})

    expect(result).toEqual({show: show})
    expect(shows.get.mock.calls).toEqual([[1]])
  })

})
