<template>
  <div class="new-posts">
    <h1>Add Post</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="TEXT" v-model="text"></textarea>
          <editor-content :editor="editor"/>
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import BlogService from '@/services/BlogService'
import { Editor, EditorContent } from 'tiptap'
// import EditorJS from '@editorjs/editorjs'

export default {
  name: 'NewPost',
  components: {
    EditorContent
  },
  data () {
    return {
      title: '',
      text: '',
      editor: null
    }
  },
  methods: {
    async addPost () {
      await BlogService.addBlogPost({
        title: this.title,
        text: this.text
      })
      this.$router.push({ name: 'blogspace' })
    }
  },
  mounted () {
    this.editor = new Editor({
      content: '<p>This is some text'
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>
