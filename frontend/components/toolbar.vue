<template>
  <v-toolbar color="#C672BF" dark fixed app clipped-right>
    <v-toolbar-title>
      <v-btn flat ripple :to="{ name: 'index'}">Ateliê Flor do Dia</v-btn>
      <v-btn icon flat ripple a href="https://www.instagram.com/wmflordodia/" target="_blank">
        <v-icon>
          camera
        </v-icon>
      </v-btn>

      <v-btn icon flat ripple a href="https://api.whatsapp.com/send?phone=5522992840970" target="_blank">
        <v-icon>
          phone
        </v-icon>
      </v-btn>

    </v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-btn
    icon
    class="botao_carrinho" 
    color="white" 
    @click="open_carrinho($event)"
    >
                
      <v-icon color="#C672BF">shopping_bag</v-icon>

      <span class="alerta_do_carrinho" v-if="temProduto()">
        {{carrinho.length}}
      </span>

    </v-btn>

    <v-btn v-if="!logged_user" dark ripple class="ma-0 ml-5" color="#C672BF"  @click="open_login_dialog($event)">Login</v-btn>
    <v-menu v-if="logged_user" offset-y>
      <v-btn icon slot="activator" class="ma-0 ml-5">
        <v-avatar size="36px">
          <img src="july.png">
        </v-avatar>
      </v-btn>
      <v-card class="no-padding">
        <v-list two-line>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-avatar>
                <img src="july.png">
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{logged_user.first_name}} {{logged_user.last_name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{logged_user.email}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile @click="switchMode()">
            <v-list-tile-content>
              <v-list-tile-title>Staff mode</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout()">
            <v-list-tile-content>
              <v-list-tile-title>Log out</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
    <login-dialog ref="login_dialog"/>
    <carrinho :carrinho_lista="carrinho_lista" ref="carrinho"/>
  </v-toolbar>
</template>

<script>
  
import Vuex from 'vuex'
import loginDialog from '~/components/login-dialog.vue'
import Snacks from '~/helpers/Snacks.js'
import AppApi from '~apijs'
import carrinho from '~/components/carrinho.vue'

export default {
  
  components: {
    loginDialog,
    carrinho
  },

  data () {
    return {
      carrinho_lista: [],
    }
  },
  
  computed: Object.assign(
    {},
    Vuex.mapGetters([
      'logged_user',
      'carrinho'
    ])
  ),
  
  props: ['state'],
  
  methods: {
    open_login_dialog (evt) {
      this.$refs.login_dialog.open();
      evt.stopPropagation();
    },

    logout(){
      AppApi.logout().then(()=>{
        this.$store.commit('SET_LOGGED_USER', null);
        Snacks.show(this.$store, {text: 'Até logo!'})
      });
    },

    open_carrinho (evt) {
      this.$refs.carrinho.open();
      evt.stopPropagation();
    },

    temProduto() {
      return this.carrinho.length > 0;
    }

  }
}
</script>

<style>

.botao_carrinho {

}

</style>