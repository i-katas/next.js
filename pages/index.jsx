import React from 'react'
import Link from 'next/link'
import {links} from '@components/Header'
import withPageLayout from '@components/withPageLayout'

const PageLayout = withPageLayout(links.home)

export default () => {
  return (
    <PageLayout>
      <p><Link href={'/post?title=Hello, Next.js'}><a>Hello, Next.js!</a></Link></p>
    </PageLayout>
  )
}

