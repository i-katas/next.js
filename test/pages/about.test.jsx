import About from 'about'


describe('about', () => {
  it('content', () => {
    let page = shallow(<About/>)

    expect(page).toIncludeText('This is an about page!')
  })

  it('header', () => {
    let page = mount(<About/>)

    expect(page.find('Header')).toExist()
    expect(page.find('Header').prop('active')).toEqual('about')
  })

})
