<template>
    <v-navigation-drawer
            width="500"
            :model-value="drawer"
            bottom
            app
            location="right"
    >
        <v-container>
            <v-row class="shopping-cart-content">
                <v-col md="3" v-for="(product, index) in store.shoppingCart" :key="'cart-product-'+index">
                    <v-card @click="removeFromCart(product)">
                        <v-img :src="product.photoURL" />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-navigation-drawer>
</template>

<script setup>
  import { store } from '@/store/index.js'
  const {data} = await useFetch('/api/products')
</script>

<script>

export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    totalSum() {
      let sum = 0;

      for (const product of this.shoppingCart) {
        sum += product.price * product.amount;
      }

      return sum;
    }
  },
  methods: {
    removeFromCart(product) {
      const shoppingCart = this.store.shoppingCart
      const productIndex = shoppingCart.findIndex(item => item.uuid === product.uuid)
      shoppingCart[productIndex].amount -=1

      if (shoppingCart[productIndex].amount < 1) {
        shoppingCart.splice(productIndex, 1);

        // this.$emit('update: modelValue', shoppingCart)
      }
    }
  },
  data: () => ({
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
