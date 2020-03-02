import {links} from '@components/Header'
import withPageLayout from '@components/withPageLayout'

describe('PageLayout', () => {

  it('show all nav links if no page was actived', () => {
    const PageLayout = withPageLayout()

    let layout = mount(<PageLayout><span/></PageLayout>)

    expect(layout.find('Header Link')).toHaveLength(Object.keys(links).length)
  })

  it('reports diagnostic message if page is invalid', () => {
    expect(() => withPageLayout('absent')).toThrow(/<PageLayout page=\{.*?}\/>, but was: "absent"/)
  })

  it('reports diagnostic message if not children exists', () => {
    const PageLayout = withPageLayout('home')

    expect(() => shallow(<PageLayout/>)).toThrow('<PageLayout/> must has at least 1 child')
    expect(() => shallow(<PageLayout children={[]}/>)).toThrow('<PageLayout/> must has at least 1 child')
  })

  it('render children', () => {
    const PageLayout = withPageLayout('home')

    let layout = shallow(<PageLayout><span className='content'>content</span></PageLayout>)
    
    expect(layout.find('span.content')).toHaveText('content')
  })
})
