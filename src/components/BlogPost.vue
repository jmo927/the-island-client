<template>
  <div class="blog-post">
      <h2>{{ title }}</h2>
      <p v-html="text"></p>
      <p>{{ dateString }}
      <p>Tags: {{ tags }}</p>
      <div v-if="admin === 'true'" class="admin-stuff">
        <router-link v-bind:to="{ name: 'editblog', params: { id: id } }">Edit</router-link> |
        <a href="#" @click="deletePost(id)">Delete</a>
      </div>
  </div>
</template>

<script>
import BlogService from '@/services/BlogService'

export default {
  name: 'BlogPost',
  computed: {
    dateString () {
      return this.date.slice(0, 10)
    }
  },
  data () {
    return {
      title: '',
      text: '',
      tags: [],
      date: '',
      admin: ''
    }
  },
  props: {
    // title: String,
    // text: String,
    // date: Date,
    // admin: String,
    // tags: Array,
    id: String
  },
  methods: {
    async getPost (id) {
      const response = await BlogService.getBlogPost(id)
      this.title = response.data.title
      this.text = response.data.text
      this.tags = response.data.tags
      this.date = response.data.createdAt
    },
    async deletePost (id) {
      await BlogService.deleteBlogPost(id)
      this.$router.push({ name: 'home' })
    }
  },
  created () {
    this.getPost(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-post {
    border: 1px solid black;
    margin: 5px;
    padding: 10px;
    text-align: justify;
    /* max-width: 700px; */
}

/* h2, h3, h4 {
  text-align: center;
  font-family: 'Spectral SC', sans-serif;
} */

</style>
