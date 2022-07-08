<template>
    <v-container class="my-10">
        <v-row>
            <v-col v-for="(product, index) in data" :key="'product-'+index" cols="12" md="4">
                <nuxt-link :to="`/sneakers/${ product.uuid }`" class="nav-link" active-class="active">
                    <div class="card mb-3">
                        <img :src="product.photoURL" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ product.name }}
                            </h5>
                            <p calass="card-text">
                                {{ product.description }}
                            </p>
                            <div class="d-grid">
                                <v-btn @click.prevent="addToCart(product)" class="btn btn-outline-primary">
                                    Add to cart
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </nuxt-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
  import { store } from '@/store/index.js'
  const {data} = await useFetch('/api/products')
</script>

<script>
  export default {
    name: 'MainPage',
    mounted() {
      this.store.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || "[]");
    },
    watch: {
      shoppingCart: {
        handler(newValue) {
          localStorage.setItem('shoppingCart', JSON.stringify(newValue))
        }, deep: true
      }
    },
    methods: {
      addToCart(product) {
        let exists = false;
        for (const cartItem of this.store.shoppingCart) {
          if (cartItem.uuid === product.uuid) {
            cartItem.amount = cartItem.amount + 1;
            exists = true;
            break;
          }
        }

        if (!exists) {
          this.store.shoppingCart.push({
            ...product,
            amount: 1,
          })
        }
      }
    }
  }
</script>
