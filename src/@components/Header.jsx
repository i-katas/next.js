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
        <style jsx>{`
          li {
            float: left;
            margin: 0 20px 0 -10px;
          }
          a {
            color: red;
            text-decoration: none;
          }
        `}</style>
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
  return (
    <ul>
    {links}
    <style jsx>{`
      ul {
        margin: 0 -10px 0 0;
        padding: 0 0 0 20px;
        list-style: none;
      }
      ul:after {
        content: '';
        position: relative;
        display: block;
        height: 0;
        clear: both;
      }
    `}</style>
    </ul>
  )
}

