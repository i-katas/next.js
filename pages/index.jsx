import React from 'react'
import {links} from '@components/Header'
import Page from '@components/Page'

export default () => {
    return <Page page={links.home} children={<p>Hello, Next.js!</p>}/>
}

