<template>
  <div class="people-list">
      <ul>
        <li
        v-for="man in people"
        :key="man.name"
        :id="man.id"
        >
        <h1>Name: {{man.name + ' ' + man.surName}}</h1>
          <p>Age: {{man.age}}</p>
          <img :src="man.thumbnail" alt="" width="100px" height="100px">
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
ul {
  text-align: center;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li {
  width: 70%;
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px 5px grey;
  box-sizing: border-box;
}
</style>