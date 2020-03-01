import Index from 'index'


describe('index', () => {
  it('content', () => {
    let page = shallow(<Index/>)

    expect(page).toIncludeText('Hello, Next.js!')
  })
})
