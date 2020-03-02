import Index from 'index'


describe('index', () => {
  it('content', () => {
    let page = mount(<Index/>)

    let posts = page.find('p').find('Link')

    expect(posts.prop('href')).toEqual('/post/[id]')
    expect(posts.prop('as')).toEqual('/post/Hello, Next.js')
    expect(posts).toIncludeText('Hello, Next.js!')
  })

  it('header', () => {
    let page = mount(<Index/>)

    expect(page.find('Header')).toExist()
    expect(page.find('Header').prop('active')).toEqual('home')
  })

})
