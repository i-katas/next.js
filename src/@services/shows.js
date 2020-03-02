import fetch from 'isomorphic-unfetch'

export default {
  list() {
    return fetch('http://localhost:3000/shows.json').then(resp => resp.json()).then(shows => shows.map(it => it.show))
  },
  get(id) {
    return fetch(`http://localhost:3000/${id}.json`).then(resp => resp.json())
  }
}
