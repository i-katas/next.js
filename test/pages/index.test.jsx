import Index from 'index'
import {links} from '@components/Header'

describe('index', () => {
  it('render posts', () => {
    let page = mount(<Index/>)

    let posts = page.find('p').find('Link')
    expect(posts.prop('href')).toEqual('/post/[id]')
    expect(posts.prop('as')).toEqual('/post/Hello, Next.js')
    expect(posts).toIncludeText('Hello, Next.js!')
  })

  it('actived', () => {
    let page = mount(<Index/>)

    expect(page.find('Header')).toExist()
    expect(page.find('Header').prop('active')).toEqual(links.home)
  })

})
