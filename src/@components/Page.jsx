import React from 'react'
import Header, {links} from './Header'

const stringify = JSON.stringify

function validated(callback) {
  return (props) => {
    let {page, children} = props
    if(!page) {
      throw '<Page/> prop `page` is required'
    }
    if(!links[page]) {
      throw `<Page page={${Object.values(links).map(stringify).join(' | ')}}/>, but was: ${stringify(page)}`
    }
    if(!children) {
      throw '<Page/> must has at least 1 child'
    }
    return callback(props)
  }
}

export default validated(({page, children}) => {
  return (
    <>
      <Header active={page}/>
      {children}
    </>
  )
})
