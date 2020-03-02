import React from 'react'
import Header from './Header'

export default ({page, children}) => {
  return (
    <>
      <Header active={page}/>
      {children}
    </>
  )
}
