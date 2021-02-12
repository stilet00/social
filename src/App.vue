<template>
  <div id="app">

      <button
      @click="showMenu"
      >
        MENU
      </button>

    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    :css="false"
    >
      <Menu
          v-if="menuPressed"
      />
    </transition>

    <router-view
        @friendAdded="newFriend"
        @friendRemoved="removingFriend"
        @newPost="saveUserPost"
        @newComment="saveUserComment"
        @postLiked="catchLike"

        :friends="user.friends"
        :people="allPeople"
        :userPersonal="user"
    />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
</style>
<script>

import Velocity from 'velocity-animate'
import Menu from "@/views/Menu";
export default {
  components: {Menu},
  data() {
    return {
      user: {
        id: 23342424242424,
        name: 'Iron',
        surName: 'Man',
        age: 27,
        thumbnail: 'https://cdn.igromania.ru/mnt/news/7/6/b/a/7/6/86257/6122e9f65da7ef05_1920xH.jpg',
        location: 'New York',
        posts: [],
        friends: [],
      },
      menuPressed: false,
      allPeople: [
        {
          id: 1231230424124,
          name: 'Hulk',
          surName: 'vasilievych',
          age: 35,
          thumbnail: 'https://i.pinimg.com/originals/98/fa/60/98fa60221fbc02722d2fd725238a07ec.jpg',
          isAFriend: false,
          posts: [
            { "authorId": "1231230424124", "author": "Hulk vasilievych", "photo": "https://i.pinimg.com/originals/98/fa/60/98fa60221fbc02722d2fd725238a07ec.jpg", "date": "17:54 - 11/02/2021", "time": 1613058870452, "description": "Let's crush some buildings!!!", "comments": [], "likes": 0, "likedUsers": [] },
            { "authorId": "1231230424124", "author": "Hulk vasilievych", "photo": "https://i.pinimg.com/originals/98/fa/60/98fa60221fbc02722d2fd725238a07ec.jpg", "date": "18:06 - 11/02/2021", "time": 1613058870453, "description": "I am tired!!!", "comments": [], "likes": 10, "likedUsers": [] }
          ]

        },
        {
          id: 405565656,
          name: 'Thor',
          surName: 'Odinovich',
          age: 3000,
          thumbnail: 'https://i.pinimg.com/originals/5c/84/27/5c84270dc20df2dcfffe305d498dbfb4.jpg',
          isAFriend: false,
          posts: [
            { "authorId": "405565656", "author": "Thor Odinovich", "photo": "https://i.pinimg.com/originals/5c/84/27/5c84270dc20df2dcfffe305d498dbfb4.jpg", "date": "18:07 - 11/02/2021", "time": 1613060925844, "description": "For ODIN!", "comments": [], "likes": 3, "likedUsers": [] }
          ]

        },
        {
          id: 124545422,
          name: 'Captain',
          surName: 'Amerika',
          age: 98,
          thumbnail: 'https://i.pinimg.com/originals/3a/7b/ab/3a7bab297ad092caff498a6ad603a03e.jpg',
          isAFriend: false,
          posts: []

        }

      ]
    }
  },
  methods: {
    showMenu() {
      this.menuPressed = !this.menuPressed
    },
    newFriend(data) {

      this.allPeople.find(item => item.id === Number(data)).isAFriend = true
      this.user.friends.push(this.allPeople.find(item => item.id === Number(data)))

    },
    removingFriend(data) {
      this.allPeople.find(item => item.id === Number(data)).isAFriend = false
      this.user.friends = this.user.friends.filter(item => item.id !== Number(data))
    },
    saveUserPost(data) {
      this.user.posts.push(data)
    },
    saveUserComment(data) {

      if (Number(data.postAuthor) === this.user.id) {
        let currentPost = this.user.posts.find(item => item.time === Number(data.postId));
        currentPost.comments.push(data)
      } else {

        let postOwner = this.allPeople.find(item => Number(data.postAuthor) === item.id)

        let hisPost = postOwner.posts.find(item => Number(data.postId) === item.time)
        hisPost.comments.push(data)
      }

    },
    catchLike(data) {
      if (Number(data.authorNumber) === this.user.id) {
        this.user.posts.forEach(item => {
          if (item.time === Number(data.postNumber)) {
            if (!item.likedUsers.includes(data.authorNumber)) {
              item.likedUsers.push(data.authorNumber);
            } else {
              item.likedUsers = item.likedUsers.filter(itemInner => itemInner !== data.authorNumber);
            }
          }
        })
      } else {
        let findedUser = this.allPeople.find(item => item.id === Number(data.authorNumber))
        findedUser.posts.forEach(item => {
          if (item.time === Number(data.postNumber)) {
            if (!item.likedUsers.includes(data.authorNumber)) {
              item.likedUsers.push(data.authorNumber);
              item.likes += 1;
            } else {
              item.likedUsers = item.likedUsers.filter(itemInner => itemInner !== data.authorNumber);
              item.likes -= 1;
            }
          }
        } )
      }
    },






    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = '0em'
    },
    enter(el, done) {
      Velocity(
          el,
          {opacity: 1, height: '12em'},
          {duration: 1000, easing: 'easeOutCubic', complete: done}
      )
    },
    leave(el, done) {
      Velocity(
          el,
          {opacity: 0, height: '0em'},
          {duration: 1000, easing: 'easeOutCubic', complete: done}
      )
    }
  }
}
</script>