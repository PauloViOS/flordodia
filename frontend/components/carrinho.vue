<template>
  <v-dialog v-model="visible" max-width="500px">
    {{carrinho_lista}}
  </v-dialog>
</template>

<script>

import AppApi from '~apijs'

export default {
  props: ['carrinho_lista'],
  data () {
    console.log('data');
    return {
      product_name: '',
      product_price: '',
      visible: false,
      loading: false,
      username: '',
      password: '',
      error: false,
    };
  },
  methods: {
    add(product_name, product_price){
        return [product_name, product_price]
        },
    open(){
      this.visible = true;
      console.log('Open');
    },
    close(){
      this.visible = false;
      console.log('Close');
    },
    login(){
      this.loading = true;
      this.error = false;
      AppApi.login(this.username, this.password).then((result)=>{
        var user = result.data;
        if(user){
          this.$store.commit('SET_LOGGED_USER', user);
          this.visible = false;
          console.log('logged')
        } else {
          this.error = true;
        }
        this.loading = false;
      });
    }
  }

}
</script>
