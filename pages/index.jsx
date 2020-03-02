import React from 'react'
import {links} from './Header'
import Page from './Page'

export default () => {
    return <Page page={links.home} children={<p>Hello, Next.js!</p>}/>
}

