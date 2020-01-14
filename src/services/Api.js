import axios from 'axios'

export default () => {
  return axios.create({
    // baseURL: `http://localhost:8081`
    baseURL: 'http://the-island-server.herokuapp.com/'
  })
}
