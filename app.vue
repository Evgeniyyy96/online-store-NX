<template>
  <div>
<!--    <TheNavbar />-->
    <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>
<script>
import TheNavbar from "./components/TheNavbar";
import ShoppingCart from "./components/ShoppingCart";
export default {
  components: { ShoppingCart, TheNavbar}
}
</script>
