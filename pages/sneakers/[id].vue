<template>
  <div>
  <h4></h4>
  </div>
</template>

<script setup>

const route = useRoute()
const { data } = await useFetch(`api/products/${route.params.id}`)


</script>


