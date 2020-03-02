import Post from 'post/[id]'
import {RouterContext} from 'next-server/dist/lib/router-context'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('post', () => {

  beforeEach(() => {
    useRouter.mockImplementation(()=> ({query: {id: 'Hello, Next.js'}}))
  })

  it('render page with query string', () => {

    let page = shallow(<Post />)

    expect(page.find('h1')).toHaveText('Hello, Next.js')
  })

  it('header', () => {
    let page = mount(<Post />)

    expect(page.find('Header')).toExist()
    expect(page.find('Header').prop('active')).toBeUndefined()
  })

})
