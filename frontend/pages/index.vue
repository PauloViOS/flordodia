<template>
  <div>
    <div class="carregando">
      <v-progress-circular indeterminate color="#C672BF" v-if="!produtos"></v-progress-circular>
    </div>  
    <home :produtos="produtos" v-if="produtos"></home>
  </div>
</template>

<script>

import home from '~/components/Home.vue'
import AppApi from '~apijs'

export default {
  components: {
    home,
  },
  data () {
    return {
      produtos: null,
    }
  },
  mounted() {
    AppApi.list_products().then(result => {
      this.produtos = result.data
    })
  }
}
</script>

<style>

.carregando {
  display: flex;
  justify-self: center;
  vertical-align: middle;
}

</style>
