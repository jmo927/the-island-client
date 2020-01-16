<template>
  <div class="blog">
    <h1>Posts</h1>

    <BlogBlurb
      v-for="(post, idx) in blogs"
      :key="idx"
      :title="post.title"
      :text="post.text"
      :date="post.createdAt"
      :tags="post.tags"
      :id="post._id"
      :admin="admin" />
  </div>
</template>

<script>
import BlogService from '@/services/BlogService'
import BlogBlurb from '@/components/BlogBlurb'

export default {
  name: 'blog',
  components: {
    // BlogPost,
    BlogBlurb
  },
  props: {
    admin: String
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
