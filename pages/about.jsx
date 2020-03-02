import React from 'react'
import {links} from '@components/Header'
import Page from '@components/Page'

export default () => {
    return <Page page={links.about} children={<p>This is an about page!</p>}/>
}
