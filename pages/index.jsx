import React from 'react'
import {links} from '@components/Header'
import withPageLayout from '@components/withPageLayout'

const PageLayout = withPageLayout(links.home)

export default () => {
  return (
    <PageLayout>
      <p>Hello, Next.js!</p>
    </PageLayout>
  )
}

