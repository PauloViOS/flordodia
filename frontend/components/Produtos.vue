<template>
    <div>
        <v-layout row>

            <v-btn class="botao_carrinho" color="#C672BF" 
            @click="open_carrinho($event)"
            >
                
                <v-icon color="white">shopping_bag</v-icon>
                
                <span class="alerta_do_carrinho" v-if="temProduto()">
                    {{carrinho_lista.length}}
                </span>

            </v-btn>

            <v-flex class="cards">
                <v-card class="card_individual" v-for="(produto, index) in produtos" :key="index">
                    <div class="container_da_imagem">    
                        <v-img :src="produto.product_image" class="imagem_do_card">
                        </v-img>
                    </div>
                    <v-card-subtitle class="produto_nome">
                    {{produto.product_name}} <br>
                    {{produto.product_price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}}
                    </v-card-subtitle>

                    <v-card-text class="produto_descricao">
                    <div>{{produto.product_description}}</div>
                    </v-card-text>

                    <div class="container_botoes">
                        <v-card-actions class="botao_do_card">
                            <v-btn  color="#C672BF" class="botao_do_card white--text">
                                Detalhes
                            </v-btn>
                        </v-card-actions>
                        
                        <v-card-actions  class="botao_do_card">
                        <v-btn color="#C672BF" class="botao_do_card" @click="add_carrinho($event, produto)">
                            <v-icon color="white">
                                shopping_cart
                            </v-icon>
                        </v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
        <carrinho :carrinho_lista="carrinho_lista" ref="carrinho"/>
    </div>
</template>

<script>

import carrinho from '~/components/carrinho.vue'

export default {
    components: {
      carrinho
    },

    props: ['produtos'],
    data () {
        return {
            carrinho_lista: [],
            hover: false
        }
    },
    methods: {
      open_carrinho (evt) {
        this.$refs.carrinho.open();
        evt.stopPropagation();
      },

      add_carrinho (evt, produto) {
        this.carrinho_lista = this.$refs.carrinho.add(produto);
        this.$store.commit('ADD_CARRINHO_LISTA', produto);
        console.log(this.carrinho_lista)
        evt.stopPropagation();
      },

      temProduto() {
        return this.carrinho_lista.length > 0;
      }
    }
}
</script>

<style>

.alerta_do_carrinho {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -20px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.botao_carrinho {
    color:#C672BF;
    transition-property: color;
}

.botao_do_card {
    border-radius: 25px;
    display:flex;
    justify-content:center;
    vertical-align: bottom;
}

.container_botoes {
    margin-bottom: 15px;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card_individual {
    border-radius: 25px;
    margin: 30px;
    width: 200px;
    text-align: center;
}

.imagem_do_card {
    justify-content:center;
    margin: 15px;
}

.container_da_imagem {
    height: 200px;
    display: flex;
    align-items: center;
}

.produto_descricao {
    display:flex;
    justify-content:center;
    height: 74px;
    max-height: 74px;
    align-items: center;
}

.produto_nome {
    display:flex;
    justify-content:center;
    margin-top:15px;
}

</style>
