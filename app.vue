<template>
  <div class="container mb-3">
     <TheNavbar />
    <NuxtPage />
  </div>
</template>
<script>
import TheNavbar from "./components/TheNavbar";
import ShoppingCart from "./components/ShoppingCart";
export default {
  components: {ShoppingCart, TheNavbar}
}
</script>
