import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('/api/blog')
  },

  getBlogPost (params) {
    return Api().get('/api/blog/' + params.id)
  },

  addBlogPost (params) {
    return Api().post('/api/blog/new', params)
  },

  updateBlogPost (params) {
    return Api().put('/api/blog/edit/' + params.id, params)
  },

  deleteBlogPost (params) {
    return Api().delete('/api/blog/delete/' + params)
  }
}
