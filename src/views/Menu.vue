<template>
  <div id="nav">

    <router-link to="/">Main page</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>
    <router-link to="/friends">Friends</router-link>
    <router-link to="/myprofile">My profile</router-link>
    <router-link to="/news">News</router-link>

  </div>

</template>

<script>
export default {
name: "Menu"
}
</script>

<style scoped>


#nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: grey;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>