<template>
    <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title class="headline mb-1">
            {{user.username}}
            </v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar
            tile
            size="80"
            color="grey"
        ></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
        <v-btn
            outlined
            rounded
            text
        >
            
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>


export default {
    props: ['user'],
    data () {
        return {}
    }
}
</script>

<style>
</style>
