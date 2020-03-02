import React from 'react'
import {links} from './Header'
import Page from './Page'

export default class extends Page {
  constructor(props) {
    super(props, links.about);
  }

  content() {
    return <p>This is an about page!</p>
  }
}
