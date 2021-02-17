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
  border-top: 5px solid #e4e6e9;
  border-bottom: 5px solid #e4e6e9;
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  align-items: center;
  margin-top: 10px;
}
.post-container img {
  width: 10%;
  height: 30px;
  border-radius: 50%;
}
.post-container input {
  background: #ebedf0;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding-left: 10px;
}
.post-container button {
  border: none;
  border-radius: 5px;
  height: 25px;
  color: #3f8ae0;
}
</style>