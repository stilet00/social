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
class Post {
  constructor(user, description) {
    this.author = user.name + ' ' + user.surName;
    this.authorId = user.id;
    this.photo = user.thumbnail;
    this.date = this.getTime();
    this.time = new Date().getTime();
    this.description = description || null;
    this.comments = [];
    this.likes = 0;
    this.likedUsers = [];
  }
  getTime() {
    let date = new Date();
    let time = date.getHours() + ':' + (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())
    let day = date.getDate()<10?('0'+date.getDate()):date.getDate();
    let month = date.getMonth()<10?('0'+(date.getMonth()+1)):date.getMonth()+1;
    let year = date.getFullYear();
    return `${time} - ${day}/${month}/${year}`
  }
}
export default {
  name: "PostCreate",
  components: {},
  props:['loggedUser'],
  methods: {
    createPost(e) {
      let post = new Post(this.loggedUser, e.target.previousSibling.value)
      this.$emit('postCreated', post)
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