import Page from 'Page'

describe('Page', () => {

  it('reports diagnostic message if page is not provided', () => {
    expect(() => shallow(<Page/>)).toThrow(/<Page\/> prop `page` is required/)
  })

  it('reports diagnostic message if page is invalid', () => {
    expect(() => shallow(<Page page='absent'/>)).toThrow(/<Page page=\{.*?}\/>, but was: "absent"/)
  })

  it('reports diagnostic message if children is not provided', () => {
    expect(() => shallow(<Page page='home'/>)).toThrow('<Page/> must has at least 1 child')
  })

})
