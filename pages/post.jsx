import React from 'react'
import {useRouter} from 'next/router'
import withPageLayout from '@components/withPageLayout'

const PageLayout = withPageLayout()

export default () => {
  let router = useRouter()
  return (
    <PageLayout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content</p>
    </PageLayout>
  )
}
