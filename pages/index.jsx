import React from 'react'
import {links} from './Header'
import Page from './Page'

export default class extends Page {
  constructor(props, context) {
    super(props, context, links.home)
  }

  content() {
    return <p>Hello, Next.js!</p>
  }
}
