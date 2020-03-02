import Post from 'post'
import {RouterContext} from 'next-server/dist/lib/router-context'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('post', () => {

  beforeEach(() => {
    useRouter.mockImplementation(()=> ({query: {title: 'Hello, Next.js'}}))
  })

  it('render page with query string', () => {

    let page = shallow(<Post />)

    expect(page.find('h1').length).toBe(1)
  })

  it('header', () => {
    let page = mount(<Post />)

    expect(page.find('Header')).toExist()
    expect(page.find('Header').prop('active')).toBeUndefined()
  })

})
