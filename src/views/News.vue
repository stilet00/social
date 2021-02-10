<template>
<div class="news">
  <PostCreate
      :loggedUser="this.userPersonal"

  />
</div>
</template>

<script>
import PostCreate from "@/components/PostCreate";
export default {
  props:['userPersonal'],
  name: "News",
  components: {PostCreate}
}
</script>

<style scoped>


</style>