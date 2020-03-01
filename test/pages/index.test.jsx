import Index from 'index'


describe('index', () => {
  it('content', () => {
    let page = shallow(<Index/>)

    expect(page).toIncludeText('Hello, Next.js!')
  })

  it('links', () => {
    let page = mount(<Index/>)

    expect(page.find('a')).toIncludeText('About')
  })

})
