<template>
  <div class="container py-4">
    <h2 class="mb-4">Your Basket</h2>

    <div v-if="cart.length > 0">
      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead class="table-light">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td style="width: 80px;">
              <img :src="item.image" alt="phone" style="width: 50px; height: auto;" class="rounded">
            </td>
            <td>{{ item.name }}</td>
            <td class="fw-bold">{{ item.price }} €</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeFromCart(index)">
                &times; Remove
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-4 p-4 bg-light rounded shadow-sm">
        <h4>Total amount: <span class="text-primary fw-bold">{{ cartTotal }} €</span></h4>
        <button class="btn btn-success btn-lg" @click="checkout">Place an order</button>
      </div>
    </div>

    <div v-else class="text-center py-5">
      <h3 class="text-muted">Your Basket is Empty</h3>
      <RouterLink to="/" class="btn btn-primary mt-3">Go to shopping</RouterLink>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { usePhoneStore } from '@/stores/phoneStore';

export default {
  name: 'CartView',
  computed: {
    ...mapState(usePhoneStore, ['cart', 'cartTotal'])
  },
  methods: {
    ...mapActions(usePhoneStore, ['removeFromCart', 'clearCart']),

    checkout() {
      alert(`Thank you for your purchase in the amount of: ${this.cartTotal} €!`);
      this.clearCart();
      this.$router.push('/');
    }
  }
}
</script>