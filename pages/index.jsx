import React from 'react'
import Header from './Header'
import Page from './Page'

export default class extends Page {
  constructor(props, context) {
    super(props, context, 'home')
  }

  content() {
    return <p>Hello, Next.js!</p>
  }
}
