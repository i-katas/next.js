const path = require('path')

const serverURL = process.env.serverURL || 'http://localhost:3000'

module.exports = {
  env: {
    serverURL: serverURL
  },
  webpack(config, options) {
    Object.assign(config.resolve.alias, {
      '@components': path.join(__dirname, 'src/@components'),
      '@services': path.join(__dirname, 'src/@services')
    });
    return config
  },
  exportTrailingSlash: true,
  async exportPathMap(_, env) {
    if(env.dev) {
      return 
    }

    process.env.serverURL = serverURL
    const shows = require('./src/@services/shows')

    let pages = {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
    return await shows.list().then(shows => 
        shows.reduce((pages, show) => {
          pages[`/show/${show.id}`] = {page: '/show/[id]', query: {id: show.id}}
          return pages;
        }, pages)
    );
  }
}
