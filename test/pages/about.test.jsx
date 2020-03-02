import About from 'pages/about'
import {links} from '@components/Header'

describe('about', () => {
  it('content', () => {
    let page = mount(<About/>)

    expect(page).toIncludeText('This is an about page!')
  })

  it('actived', () => {
    let page = mount(<About/>)

    expect(page.find('Header')).toExist()
    expect(page.find('Header').prop('active')).toEqual(links.about)
  })

})
