<template>
  <div class="edit-posts">
    <h1>Add Post</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="TEXT" v-model="text"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="updateBlogPost">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import BlogService from '@/services/BlogService'
export default {
  name: 'EditBlogPost',
  data () {
    return {
      title: '',
      text: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await BlogService.getBlogPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.text = response.data.text
    },
    async updateBlogPost () {
      await BlogService.updateBlogPost({
        id: this.$route.params.id,
        title: this.title,
        text: this.text
      })
      this.$router.push({ name: 'blogspace' })
    }
  }
}
</script>
