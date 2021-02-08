<template>
    <div>
        <v-layout row>
            <v-btn color="pink enlighten-2" @click="open_carrinho($event)"><v-icon>shopping_bag</v-icon></v-btn>
            <v-flex class="cards">
                <v-card class="teste" v-for="(produto, index) in produtos" :key="index">
                    <v-img :src="produto.product_image" class="imagem_do_card">
                    </v-img>

                    <v-card-subtitle class="produto_nome">
                    {{produto.product_name}} <br>
                    R$ {{produto.product_price}},00
                    </v-card-subtitle>

                    <v-card-text class="produto_descricao">
                    <div>{{produto.product_description}}</div>
                    </v-card-text>

                    <v-card-actions class="botao_do_card">
                    <v-btn class="botao_do_card" color="pink enlighten-2">
                        Detalhes
                    </v-btn>
                    </v-card-actions>

                    <v-card-actions class="botao_do_card">
                    <v-btn class="botao_do_card" color="pink enlighten-2" @click="add_carrinho($event, produto.product_name, produto.product_price)">
                        <v-icon>
                            shopping_cart
                        </v-icon>
                    </v-btn>
                    </v-card-actions>
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
            carrinho_lista: []
        }
    },
    methods: {
      open_carrinho (evt) {
        this.$refs.carrinho.open();
        evt.stopPropagation();
      },
      add_carrinho (evt, nome, preco) {
        this.carrinho_lista = this.$refs.carrinho.add(nome, preco);
        console.log(this.carrinho_lista)
        evt.stopPropagation();
      }
    }
}
</script>

<style>

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.teste {
    border-radius: 25px;
    margin: 40px;
    width: 200px
}

.produto_nome {
    display:flex;
    justify-content:center;
    margin-top:15px;
}

.produto_descricao {
    display:flex;
    justify-content:center;
}

.botao_do_card {
    border-radius: 25px;
    display:flex;
    justify-content:center;
    vertical-align: bottom;
}

.imagem_do_card {
    display:flex;
    justify-content:center;
    margin: 15px;
}

</style>
