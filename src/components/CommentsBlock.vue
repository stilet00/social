<template>
<ul>
  <li
  v-for="comment in allComments"
  :key="comment.time"
  >
    <i>
      {{comment.author}} commented:
    </i>

    <span>
      <b>
        {{comment.description}}
      </b>

    </span>
  </li>
</ul>
</template>

<script>
export default {
name: "CommentsBlock",
  props: ['allComments']
}
</script>

<style scoped>

</style>