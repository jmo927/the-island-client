<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link>
    </div>
    <router-view v-if="apiReady"/>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import BlogService from '@/services/BlogService'

export default {
  data () {
    return {
      apiReady: false
    }
  },
  methods: {
    // Where the data happens.
    async getBlogs () {
      const response = await BlogService.fetchPosts()

      if (response.data) {
        this.apiReady = true
      } else {
        setTimeout(this.getBlogs(), 500)
      }
    }
  },
  created () {
    this.getBlogs()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli|Spectral+SC&display=swap');

h1, h2, h3, h4 {
  text-align: center;
  font-family: 'Spectral SC', sans-serif;
}

#app {
  font-family: 'Muli', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
