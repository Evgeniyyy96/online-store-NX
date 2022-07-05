<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-10">
      <div class="container-fluid">
        <nuxt-link to="/" class="navbar-brand">
          Online Store
        </nuxt-link>

        <button
            class="navbar-toggler"
            data-bs-toggler="collapse"
            data-bs-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" active-class="active">
                Home
              </NuxtLink>
            </li>
            <li class="nav-item">
              <nuxt-link to="/sneakers" class="nav-link">
                Sneakers
              </nuxt-link>
            </li>
          </ul>
          <div class="d-flex">
            <v-btn
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"

            >
              Shopping cart
            </v-btn>
          </div>
        </div>
      </div>

    </nav>
  </div>
</template>


<script>

</script>
