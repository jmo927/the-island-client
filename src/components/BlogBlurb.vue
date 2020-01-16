<template>
  <div class="blog-blurb" @click="loadBlog(id)">
      <h2>{{ title }}</h2>
      <p v-html="blurbText"></p>
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
    },
    blurbText () {
      return (this.text.slice(0, 200) + '...')
    }
  },
  props: {
    title: String,
    text: String,
    date: String,
    admin: String,
    tags: Array,
    id: String
    // msg: String
  },
  methods: {
    async deletePost (id) {
      await BlogService.deleteBlogPost(id)
      this.$router.push({ name: 'home' })
    },
    loadBlog (id) {
      this.$router.push({ name: 'blogpost', params: { id: id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-blurb {
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
    text-align: justify;
    /* max-width: 700px; */
}

.blog-blurb:hover {
    cursor: pointer;
}

/* h2, h3, h4 {
  text-align: center;
  font-family: 'Spectral SC', sans-serif;
} */

</style>
