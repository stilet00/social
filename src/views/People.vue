<template>
  <div class="people-list">
      <ul>
        <li
        v-for="man in people"
        :key="man.name"
        :id="man.id"
        >
        <img :src="man.thumbnail" alt="" width="50px" height="50px">
        <h2>{{man.name + ' ' + man.surName}}</h2>
          <button
          v-if="!man.isAFriend"
          @click="addToFriends"
          >Add friend</button>
          <button
              v-else
              @click="removeFromFriends"
          >Remove from friend</button>
        </li>

      </ul>
  </div>
</template>

<script>
export default {
name: "People",
  props: ['people'],
  methods: {
    addToFriends(e) {
      this.$emit('friendAdded', e.target.parentNode.id)
    },
    removeFromFriends(e) {
      this.$emit('friendRemoved', e.target.parentNode.id)
    }
  }
}

</script>

<style scoped>
.people-list {
  width: 100%;
}
ul {
  width: 100%;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  align-items: center;
}
button {
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