<template>
    <div id="nav">
      <router-link to="/">Main page</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/friends">Friends</router-link>
      <router-link to="/myprofile">My profile</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/people"
                   @friendAdded="friendHasBeenAdded"

      >People</router-link>

    </div>


</template>

<script>
export default {
name: "Menu",
  methods: {
    friendHasBeenAdded() {
      console.log('yes')
    }
  }
}
</script>

<style scoped>


#nav {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background: grey;
  width: 30%;
  margin: 0 auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>