import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
        <p>Hello, Next.js!</p>
      </>
    )
  }
}
