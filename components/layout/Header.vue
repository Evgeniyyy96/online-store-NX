<template>
    <div>
        <layout-shopping-cart :drawer="drawer" />
        <v-app-bar
                color="black"
                prominent
        >
            <!--        <v-toolbar-title>Puma</v-toolbar-title>-->
            <nuxt-link to="/">
                <v-avatar rounded="1">
                    <v-img src="/public/images/logo.png" contain>
                    </v-img>
                </v-avatar>
            </nuxt-link>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" icon="mdi-cart-outline" />
        </v-app-bar>
    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
    })
  }
</script>
