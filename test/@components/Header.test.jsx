import Header, {links} from '@components/Header'

const keys = Object.keys(links)

describe('Header', () => {
  it('no-active page', () => {
    let header = mount(<Header/>)

    expect(header.find('li Link')).toHaveLength(keys.length)
  })

  it('active page', () => {
    let header = mount(<Header active={keys[0]}/>)

    expect(header.find('li Link')).toHaveLength(keys.length - 1)
  })

})
