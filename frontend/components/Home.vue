<template>
  <produtos :produtos="produtos"></produtos>
</template>

<script>

import produtos from '~/components/Produtos.vue'

export default {
    props: ["produtos"],
  components: {
    produtos,
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
