import withPageLayout from '@components/withPageLayout'

describe('PageLayout', () => {

  it('reports diagnostic message if page is not provided', () => {
    expect(() => withPageLayout()).toThrow(/<PageLayout\/> prop `page` is required/)
  })

  it('reports diagnostic message if page is invalid', () => {
    expect(() => withPageLayout('absent')).toThrow(/<PageLayout page=\{.*?}\/>, but was: "absent"/)
  })

  it('reports diagnostic message if children is not provided', () => {
    const PageLayout = withPageLayout('home')
    expect(() => shallow(<PageLayout/>)).toThrow('<PageLayout/> must has at least 1 child')
  })

  it('render children', () => {
    const PageLayout = withPageLayout('home')

    let layout = shallow(<PageLayout><span className='content'>content</span></PageLayout>)
    
    expect(layout.find('span.content')).toHaveText('content')
  })
})
