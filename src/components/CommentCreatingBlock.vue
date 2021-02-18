<template>
<div class="comments">
  <img :src="user.thumbnail" alt="">
  <input type="text" placeholder="Say something about it...">
  <button
  @click="commentCreate"
  >Add comment</button>

</div>
</template>

<script>
import Comment from '@/models/CommentClass'
export default {
name: "CommentCreatingBlock",
  props: ['user'],
  methods: {
  commentCreate(e) {
    let comment = new Comment(this.user, e.target.previousSibling.value, e.target.parentNode.parentNode.dataset.author, e.target.parentNode.parentNode.id)
    this.$emit('newComment', comment)
  }
  }
}
</script>

<style scoped>
.comments {
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 50px;
  border: 1px solid grey;
  border-radius: 5px;
  align-items: center;
  box-shadow: 2px 2px 2px 2px grey;
  border: none;
  margin-bottom: 10px;
}
.comments img {
  width: 10%;
  height: 30px;
  border-radius: 50%;
}
.comments input {
  width: 50%;
  height: 30px;
  border-radius: 20px;
  outline: none;
  border: none;
  background: #ebedf0;
  padding-left: 10px;
}
.comments button  {
  width: 25%;
  color: #3f8ae2;
  border: none;
  border-radius: 5px;
}

@media (min-width: 490px) {
  .comments img {
    width: 5%;
  }
  .comments button  {
    width: 15%;
    height: 25px;
  }

}
</style>