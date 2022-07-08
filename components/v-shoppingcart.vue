<template>
  <v-card>
    <v-layout>
<!--       <v-system-bar color="deep-purple darken-3"></v-system-bar>-->
      <v-navigation-drawer
          width="500"
          v-model="drawer"
          bottom
          temporary
          location="right"
      >
        <v-container>
          <v-row class="shopping-cart-content">
            <v-col md="3" v-for="(product, index) in modelValue" :key="'cart-product-'+index">
              <v-card>

                <v-img
                    :src="product.photoURL"
                >

                </v-img>

              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-navigation-drawer>

      <v-app-bar
          color="black"
          prominent
      >
<!--        <v-toolbar-title>Puma</v-toolbar-title>-->
        <v-avatar rounded="1">
        <v-img

            src="/icons/logo.png"
            contain

        >
        </v-img>
        </v-avatar>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" icon="mdi-cart-outline"></v-app-bar-nav-icon>


<!--        <v-toolbar-title>Puma</v-toolbar-title>-->

<!--        <v-spacer></v-spacer>-->

<!--        <v-btn variant="text" icon="mdi-magnify"></v-btn>-->

<!--        <v-btn variant="text" icon="mdi-filter"></v-btn>-->

<!--        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>-->
      </v-app-bar>

<!--      <v-navigation-drawer-->
<!--          v-model="drawer"-->
<!--          bottom-->
<!--          temporary-->
<!--          location="right"-->
<!--      >-->
<!--        <v-list-->
<!--            :items="items"-->
<!--        ></v-list>-->
<!--      </v-navigation-drawer>-->

      <v-main>
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>

export default {
  props: ['modelValue'],
  computed: {
    totalSum() {
      let sum = 0;

      for (const product of this.modelValue) {
        sum += product.price * product.amount;
      }

      return sum;
    }
  },
  methods: {
    removeFromCart(product) {
      const shoppingCart = this.modelValue
      const productIndex = shoppingCart.findIndex(item => item.uuid === product.uuid)
      shoppingCart[productIndex].amount -=1

      if (shoppingCart[productIndex].amount < 1) {
        shoppingCart.splice(productIndex, 1);

        this.$emit('update: modelValue', shoppingCart)
      }
    }
  },

  data: () => ({
    drawer: false,
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
