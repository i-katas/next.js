import React from 'react'
import Link from 'next/link'

export const links = {
  home: 'home',
  about: 'about'
}

const navLinks = {
  [links.home]: {name:'Home', href: '/'},
  [links.about]: {name:'About', href: '/about'}
}

export default function Header({active}){
  let links = Object.keys(navLinks).map(it => {
    let nav = navLinks[it]
    return (
      <li key={nav.href}>
        {
          it == active ?
            <span>{nav.name}</span>
          :
            <Link href={nav.href}>
              <a>{nav.name}</a>
            </Link>
        }
      </li>
    )
  })
  return <ul>{links}</ul>
}

