<template>
<div class="news">
  <PostCreate
      :loggedUser="this.userPersonal"
      @postCreated="translatePost"
  />
  <transition-group tag="ul" name="slide-up">
    <li
        v-for="object in allPosts"
        :key="object.time"
        :id="object.time"
        class="post"
        :data-author="object.authorId"
    >
        <div class="post__autor">
          <img :src="object.photo" alt="" height="50px" width="50px">
          <h2>{{object.author}}</h2>
          <span>At {{object.date}} twitted: </span>
        </div>
        <p>{{object.description}}</p>
        <button
        @click="postLiked"
        > {{object.likedUsers.length}} - likes</button>
        <span>{{object.comments.length}} - comments</span>
        <CommentCreatingBlock
            :user="userPersonal"
             v-if="showComments"
            @newComment="translateComment"
        />
        <CommentsBlock
        v-if="object.comments.length>0"
        :allComments="object.comments"
        />
    </li>
  </transition-group>
</div>
</template>

<script>
import PostCreate from "@/components/PostCreate";
import CommentCreatingBlock from "@/components/CommentCreatingBlock";
import CommentsBlock from "@/components/CommentsBlock";
export default {
  props:['userPersonal', 'people'],
  name: "News",
  components: {CommentsBlock, CommentCreatingBlock, PostCreate},
  data() {
    return {
      allPosts: [],
      showComments: true
    }
  },
  methods: {
    translatePost(data) {
      this.$emit('newPost', data);
      this.allPosts.push(data);
      this.sortPosts();
    },
    translateComment(data) {

      this.$emit('newComment', data)
    },
    postLiked(e) {
     let newPost = this.allPosts.find(item => {
        return item.time === Number(e.target.parentNode.id)

      })
      this.$emit('postLiked', {
        authorNumber: newPost.authorId,
        postNumber: e.target.parentNode.id,
      })
    },
    sortPosts() {
      this.allPosts.sort((a, b) => {
        return b.time - a.time
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
    this.sortPosts();
  }
}
</script>

<style scoped>
.news {
  box-sizing: border-box;
  position: relative;
}
ul {
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: visible;
}
.post {
  width: 100%;
  /* border-bottom: 5px solid #e4e6e9; */
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  margin-bottom: 20px;
  list-style-type: none;
  
}
.post::after {
  content: "";
  border-bottom: 5px solid #e4e6e9;
  width: 100%;
  
}
.post p {
  width: 100%;
  margin: 25px 0;
}
.post button {
  border: none;
  background: #99a2ad;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 15px;
}
.post__autor {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
}
.post__autor h2 {
  margin: 0;
}
.post__autor span {
  position: absolute;
  top: 29px;
  left: 51px;
}


/*animating list*/

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 1s ease;
}
.slide-up-enter, .slide-up-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

@media (min-width: 800px) {
  .post{
    width: 80%;
  }
  .post::after {
  content: "";
  border-bottom: 5px solid #e4e6e9;
  width: 90%;
  
}
}
@media (min-width: 1200px) {
  .post{
    width: 50%;
  }
}
</style>