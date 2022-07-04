<script setup>
const route = useRoute()
const {data} = await useFetch(`/api/products/${route.params.id}`)
</script>
<template>
    <v-container>
      <h4>{{ data.name }}</h4>
      <img :src="data.photoURL">
      <h4>{{ data.description }}</h4>
      <h4>{{ data.price }}</h4>
    </v-container>
</template>

<script>

  export default {
    computed: {
      shoppingCart () {
        return this.$store.state.shoppingCart
      }
    }

  }
</script>


