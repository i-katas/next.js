import About from 'about'


describe('about', () => {
  it('content', () => {
    let page = shallow(<About/>)

    expect(page).toIncludeText('This is an about page!')
  })
})
