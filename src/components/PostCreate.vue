<template>
<div class="post-container">
  <img :src="loggedUser.thumbnail" alt="" width="50px">
  <input type="text" placeholder="What is new?">
  <button
  @click="createPost"
  >Add post</button>

</div>
</template>

<script>
import Post from '@/models/PostClass'
export default {
  name: "PostCreate",
  components: {},
  props:['loggedUser'],
  methods: {
    createPost(e) {
      if (e.target.previousSibling.value.trim()) {
        let post = new Post(this.loggedUser, e.target.previousSibling.value)
        this.$emit('postCreated', post)
        e.target.previousSibling.value = ''
      }

    }
  }
}
</script>

<style scoped>
.post-container {
  width: 100%;
  border: 1px solid black;
}
img {
  border-radius: 50%;
}

</style>