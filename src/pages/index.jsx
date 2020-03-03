import React from 'react'
import Link from 'next/link'
import {links} from '@components/Header'
import withPageLayout from '@components/withPageLayout'
import shows from '@services/shows'

const PageLayout = withPageLayout(links.home)

export default class extends React.Component {
  render() {
    let {shows} = this.props
    return (
      <PageLayout>
        { shows?.map(withShowItem) }
      </PageLayout>
    )
  }

  static async getInitialProps() {
    return {shows: await shows.list()};
  }
}

function withShowItem(show) {
  return (
    <div className='show' key={show.id}>
      <style jsx>{`
        a {
          color: #00a;
        }
      `}</style>
      <Link href='/show/[id]' as={`/show/${show.id}`}>
        <a>{show.name}</a>
      </Link>
    </div>
  )
}
