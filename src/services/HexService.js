import Api from '@/services/Api'

export default {
  fetchHexes () {
    return Api().get('/api/hexes')
  },

  getThisHex (params) {
    return Api().get('/api/hexes/' + params.id)
  },

  updateHex (params) {
    return Api().put('/api/hexes/edit/' + params.id, params)
  },

//   addHex (params) {
//     return Api().post('/api/hexes/new', params)
//   },

//   deleteHex (params) {
//     return Api().delete('/api/hexes/delete/' + params)
//   }
}
