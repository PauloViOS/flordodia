<template>
  <div>
    <v-dialog v-model="visible" max-width="250px">
      <v-list v-if="!temProduto()" class="nada_no_carrinho">
        Não há nada no seu carrinho :(
      </v-list>

      <v-list three-line  v-for="(item, index) in carrinho_lista" :key="index">
        <v-list-item class="item_da_lista">
          <v-list-item-content>
            
            <v-list-item-title v-html="item.product_name">
            </v-list-item-title><br>

            <v-list-item-subtitle v-html="item.product_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })">
            </v-list-item-subtitle>

            <v-btn color="red" class="botao_de_remover" @click="remove_do_carrinho(index)">
              <v-icon color="white" size="15" class="icone_de_remover">
              X
              </v-icon> 
            </v-btn>

          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-if="temProduto()" class="total_do_carrinho">
        Total: R$ {{precoTotal()}}
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
    },

    temProduto() {
      return this.carrinho_lista.length > 0;
    },

    precoTotal() {
      return this.carrinho_lista.reduce((current, next) =>
        current + next.product_price, 0);
    },

    remove_do_carrinho(index) {
      this.carrinho_lista.splice(index, 1)
    }

  }

}
</script>

<style>

.botao_de_remover {
  min-width: 10px;
  min-height: 5px;
  height: 20px;
  width: 5px;
  position: relative;
  left: 90px;
  bottom: 10px;
  color: red;
}

.item_da_lista {
  display: flex;
  padding-left: 15px;
}

.icone_de_remover {

}

.total_do_carrinho {
  padding-left: 15px;
  font-weight: bold;
  font-size: 18px;
}

.nada_no_carrinho {
  padding-left: 15px;
}

</style>
