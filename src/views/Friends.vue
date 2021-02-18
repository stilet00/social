<template>
<div>
  <div class="people-list">
    <ul>
      <li

          v-for="man in friends"
          :key="man.name"
          :id="man.id"
      >
        <img :src="man.thumbnail" alt="" width="50px" height="50px">
        <h2>{{man.name + " " + man.surName}}</h2>
        
        <button
          @click="removeFromFriends"
        >Remove from friend</button>
      </li>

    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Friends",
  props: ['friends'],
  methods: {
    removeFromFriends(e) {
      this.$emit('friendRemoved', e.target.parentNode.id)
    }

  }

}
</script>

<style scoped>
ul {
  width: 100%;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  align-items: center;
}
button {
  width: 27%;
  border: none; 
  outline: none;
  height: 30px;
  border-radius: 5px;
  color: #3f8ae6;
}
@media (min-width: 490px) {
  li {
    justify-content: center;
  }
  ul li h2 {
    margin: 0 20px;
  }
}
</style>