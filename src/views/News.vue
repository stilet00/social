<template>
<div class="news">
  <PostCreate
      :loggedUser="this.userPersonal"
      @postCreated="translatePost"
  />
  <ul>
    <li
        v-for="object in allPosts"
        :key="object.time"
        :id="object.time"
        class="post"
    >
        <img :src="object.photo" alt="" height="50px" width="50px">
        <h2>{{object.author}}</h2>
        <span>At {{object.date}} twitted: </span>
        <p>{{object.description}}</p>
        <button
        @click="postLiked"
        >{{object.likes}} - likes</button>
        <span>{{object.comments.length}} - comments</span>
        <button>Leave a comment</button>

    </li>
  </ul>
</div>
</template>

<script>
import PostCreate from "@/components/PostCreate";
export default {
  props:['userPersonal', 'people'],
  name: "News",
  components: {PostCreate},
  data() {
    return {
      allPosts: []
    }
  },
  methods: {
    translatePost(data) {
      this.$emit('newPost', data)
    },
    postLiked(e) {
     let newPost = this.allPosts.find(item => {
        return item.time === Number(e.target.parentNode.id)

      })
      this.$emit('postLiked', {
        authorNumber: newPost.authorId,
        postNumber: e.target.parentNode.id,
      })
    }
  },
  mounted() {
    this.allPosts.push(...this.userPersonal.posts)

    this.people.forEach(item => {
      if (item.posts.length > 0) {
        this.allPosts.push(...item.posts)
      }
})
    this.allPosts.sort((a, b) => {
      return b.time - a.time
    })
  }
}
</script>

<style scoped>
.news {
  box-sizing: border-box;
}
.post {
  padding: 10px;
  width: 100%;
  box-shadow: 5px 5px 5px grey;
  border: 1px solid grey;
}
ul {
 padding-left: 0;
  box-sizing: border-box;
}
li {
  margin-bottom: 20px;
  list-style-type: none;
}

</style>