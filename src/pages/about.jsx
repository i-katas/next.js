import React from 'react'
import {links} from '@components/Header'
import withPageLayout from '@components/withPageLayout'

const PageLayout = withPageLayout(links.about)

export default () => {
  return (
    <PageLayout>
      <p>This is an about page!</p>
    </PageLayout>
  )
}
