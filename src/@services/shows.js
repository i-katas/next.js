const fetch = require('isomorphic-unfetch')

const serverURL = process.env.serverURL

if(!serverURL) {
    throw new Error(`Environment \`serverURL\` is absent, you can define it in next.config.js:
   module.exports = {
       env: {
         serverURL: '{scheme}://{host}:{port}/{path}'
       }
   }
  `)
}

module.exports = {
  list() {
    return fetch(`${serverURL}/shows.json`).then(resp => resp.json()).then(shows => shows.map(it => it.show))
  },
  get(id) {
    return fetch(`${serverURL}/${id}.json`).then(resp => resp.json())
  }
}
