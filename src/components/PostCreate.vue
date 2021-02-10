<template>
<div class="post-container">
  <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt="" width="50px">
  <input type="text" placeholder="What is new?">
  <button
  @click="createPost"
  >Add post</button>

</div>
</template>

<script>
class Post {
  constructor(author, description) {
    this.uniqueId = Symbol(Math.floor(Math.random()*10));
    this.author = author;
    this.date = this.getTime();
    this.description = description || null;
    this.comments = [];
    this.likes = 0;
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
      let post = new Post(this.loggedUser.name, e.target.previousSibling.value)
      console.log(post)
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