import React from 'react'
import withPageLayout from '@components/withPageLayout'
import shows from '@services/shows'

const PageLayout = withPageLayout()

export default class extends React.Component {
  render() {
    let {show} = this.props
    return (
      <PageLayout>
        <h1>{show?.name}</h1>
        <div className='summary' dangerouslySetInnerHTML={ {__html: show?.summary} }/>
      </PageLayout>
    )
  }

  static async getInitialProps({query}) {
    return {show: await shows.get(query.id)}
  }
}
