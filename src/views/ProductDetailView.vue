<template>
  <div class="container" v-if="phone">
    <BackButton /> <div class="row mt-5">
    <div class="col-md-6 mb-4">
      <div class="product-image-container">
        <img :src="phone.image" :alt="phone.name">
      </div>
    </div>

    <div class="col-md-6">
      <h2>{{ phone.name }}</h2>
      <hr>
      <p class="lead">{{ phone.description }}</p>

      <div class="my-4">
        <span class="badge bg-success fs-4">{{ phone.price }} €</span>
      </div>

      <div class="d-flex gap-3">
        <button class="btn btn-primary btn-lg" @click="buyPhone">
          Buy Now
        </button>

        <RouterLink to="/" class="btn btn-outline-secondary btn-lg">
          Back
        </RouterLink>
      </div>
    </div>
  </div>
  </div>

  <div v-else class="text-center mt-5">
    <h3>The phone is loading...</h3>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { usePhoneStore } from '@/stores/phoneStore';

export default {
  name: 'ProductDetailView',
  data() {
    return {
      phone: null
    }
  },
  computed: {
    ...mapState(usePhoneStore, ['phones'])
  },
  methods: {
    ...mapActions(usePhoneStore, ['addToCart']),

    buyPhone() {
      this.addToCart(this.phone);
    }
  },
  mounted() {
    const routeSlug = this.$route.params.slug;
    this.phone = this.phones.find(p => p.slug === routeSlug);
  }
}
</script>

<style scoped>
.product-image-container {
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
}

.product-image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>