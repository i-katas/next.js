import Index from 'index'


describe('index', () => {
  it('content', () => {
    let page = shallow(<Index/>)

    expect(page).toIncludeText('Hello, Next.js!')
  })

  it('header', () => {
    let page = mount(<Index/>)

    expect(page.find('Header')).toExist()
    expect(page.find('Header').prop('active')).toEqual('home')
  })

})
