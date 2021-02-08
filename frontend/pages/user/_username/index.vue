<template>
  <viewuser :user="user"></viewuser>
</template>

<script>

import viewuser from '~/components/ViewUser.vue'


export default {
  components: {
    viewuser
  },
  asyncData (context) {
      return {
        user: {
          username: context.params.username
        }
      }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
