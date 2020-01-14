<template>
  <div class="blog">
    <h1>Posts</h1>
    This file will list all the posts.

    <BlogPost
      v-for="(post, idx) in blogs"
      :key="idx"
      :title="post.title"
      :text="post.text"
      :date="post.date"
      :id="post._id"
      admin="false" />
  </div>
</template>

<script>
import BlogService from '@/services/BlogService'
import BlogPost from '@/components/BlogPost'

export default {
  name: 'blog',
  components: {
    BlogPost
  },
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await BlogService.fetchPosts()
      this.blogs = response.data
    },
    async deletePost (id) {
      await BlogService.deleteBlogPost(id)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
