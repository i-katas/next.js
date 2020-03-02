import React from 'react'
import Header from './Header'

export default class Page extends React.Component {

  constructor(props, page) {
    super(props)
    this.page = page
  }

  render() {
    return (
      <>
        <Header active={this.page}/>
        {this.content()}
      </>
    )
  }

}
