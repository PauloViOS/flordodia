<template>
    <usercard :user="user"></usercard>
</template>

<script>

import usercard from '~/components/UserCard.vue'


export default {
    props: ['user'],
    components: {
        usercard
    },
    data () {
        return {}
    }
}
</script>

<style>
</style>
