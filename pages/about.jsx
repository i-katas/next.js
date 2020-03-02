import React from 'react'
import {links} from './Header'
import Page from './Page'

export default () => {
    return <Page page={links.about} children={<p>This is an about page!</p>}/>
}
