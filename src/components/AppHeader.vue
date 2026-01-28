<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4 sticky-top">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">PhoneShop</RouterLink>

      <div class="navbar-nav ms-auto d-flex flex-row align-items-center">
        <RouterLink class="nav-link me-3 text-white" to="/">Home Page</RouterLink>

        <RouterLink to="/cart" class="btn btn-light position-relative">
          BASKET
          <span v-if="cartCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ cartCount }}
          </span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'pinia';
import { usePhoneStore } from '@/stores/phoneStore';

export default {
  name: 'AppHeader',
  computed: {
    ...mapState(usePhoneStore, ['cartCount'])
  }
}
</script>