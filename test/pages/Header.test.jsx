import Header from 'Header'

describe('Header', () => {
  it('active home by default', () => {
    let header = mount(<Header/>)

    expect(header.find('li Link').map(it => it.prop('href'))).toEqual(['/about'])
    expect(header.find('li').map(it => it.text())).toEqual(['Home', 'About'])
  })

  it('active others', () => {
    let header = mount(<Header active='about'/>)

    expect(header.find('li Link').map(it => it.prop('href'))).toEqual(['/'])
    expect(header.find('li').map(it => it.text())).toEqual(['Home', 'About'])
  })

})
