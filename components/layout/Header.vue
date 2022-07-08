<template>
    <v-app-bar
            color="black"
            prominent
    >
        <!--        <v-toolbar-title>Puma</v-toolbar-title>-->
        <v-avatar rounded="1">
            <v-img src="/public/images/logo.png" contain>
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
        shoppingCart[productIndex].amount -= 1

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
      group() {
        this.drawer = false
      },
    },
  }
</script>
