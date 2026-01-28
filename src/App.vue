<template>
  <div class="app-container d-flex flex-column min-vh-100">
    <AppHeader />

    <div class="container flex-grow-1">
      <RouterView />
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
