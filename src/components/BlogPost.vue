<template>
  <div class="blog-post">
      <h2>{{ title }}</h2>
      <p v-html="text"></p>
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
  props: {
    title: String,
    text: String,
    date: Date,
    admin: String,
    id: String
    // msg: String
  },
  methods: {
    async deletePost (id) {
      await BlogService.deleteBlogPost(id)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-post {
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
    /* max-width: 700px; */
}
</style>
