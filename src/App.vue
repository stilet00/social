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
        :friends="userFriends"
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
        posts: [
          {

          }
        ]

      },
      menuPressed: false,
      userFriends: [],
      allPeople: [
        {
          id: 1231230424124,
          name: 'Hulk',
          surName: 'vasilievych',
          age: 35,
          thumbnail: 'https://i.pinimg.com/originals/98/fa/60/98fa60221fbc02722d2fd725238a07ec.jpg',
          isAFriend: false,
          posts: [
            {

            }
          ]

        },
        {
          id: 405565656,
          name: 'Thor',
          surName: 'Odinovich',
          age: 3000,
          thumbnail: 'https://i.pinimg.com/originals/5c/84/27/5c84270dc20df2dcfffe305d498dbfb4.jpg',
          isAFriend: false

        },
        {
          id: 124545422,
          name: 'Captain',
          surName: 'Amerika',
          age: 98,
          thumbnail: 'https://i.pinimg.com/originals/3a/7b/ab/3a7bab297ad092caff498a6ad603a03e.jpg',
          isAFriend: false

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
      this.userFriends.push(this.allPeople.find(item => item.id === Number(data)))

    },
    removingFriend(data) {
      this.allPeople.find(item => item.id === Number(data)).isAFriend = false
      this.userFriends = this.userFriends.filter(item => item.id !== Number(data))
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