<template>
  <div id="app">
    <div class="button-div">
      <button
      @click="showMenu"
      >
        MENU
      </button>
    </div>
    <Menu
        v-if="menuPressed"
    />
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}
.button-div {
  display: flex;
  justify-content: flex-start;
}
</style>
<script>
import Menu from "@/views/Menu";
export default {
  components: {Menu},
  data() {
    return {
      menuPressed: false
    }
  },
  methods: {
    showMenu() {
      this.menuPressed = !this.menuPressed
    }
  }
}
</script>