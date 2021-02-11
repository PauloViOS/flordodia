<template>
  <div>
    <v-dialog v-model="visible" max-width="500px">
      <v-list three-line  v-for="(item, index) in carrinho_lista" :key="index">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-html="item.product_name">
            </v-list-item-title><br>

            R$ 
            <v-list-item-subtitle v-html="item.product_price">
            </v-list-item-subtitle>

          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-dialog>
  </div>
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
    add(produto){
        this.carrinho_lista.push(produto)
        return this.carrinho_lista
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
