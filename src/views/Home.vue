<template>
  <div class="home">
    <h1>Welcome to The Island</h1>
    This page is still under heavy development.  Head on over <router-link v-bind:to="{ name: 'blogspace' }">the blog</router-link> for more information.
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
