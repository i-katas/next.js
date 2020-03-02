import Header, {links} from '@components/Header'

const linkNames = Object.keys(links)

describe('Header', () => {
  it('show all nav links if no page actived', () => {
    let header = mount(<Header/>)

    expect(header.find('li Link')).toHaveLength(linkNames.length)
  })

  it('active page navigation should be disabled', () => {
    let header = mount(<Header active={linkNames[0]}/>)

    expect(header.find('li Link')).toHaveLength(linkNames.length - 1)
  })

})
