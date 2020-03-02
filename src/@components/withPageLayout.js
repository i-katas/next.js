import React from 'react'
import Header, {links} from './Header'

const stringify = JSON.stringify

export default (page) => {
  if(page && !links[page]) {
    throw `<PageLayout page={${Object.values(links).map(stringify).join(' | ')}}/>, but was: ${stringify(page)}`
  }
  return ({children}) => {
    if(!children || children.length === 0) {
      throw '<PageLayout/> must has at least 1 child'
    }

    return (
      <>
        <Header active={page}/>
        <div className='main'>{children}</div>
      </>
    )
  };
}
