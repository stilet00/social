<template>
<div>
  <div class="people-list">
    <ul>
      <li

          v-for="man in friends"
          :key="man.name"
          :id="man.id"
      >
        <h1>Name: {{man.name + man.surName}}</h1>
        <p>Age: {{man.age}}</p>
        <img :src="man.thumbnail" alt="" width="100px" height="100px">

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

</style>