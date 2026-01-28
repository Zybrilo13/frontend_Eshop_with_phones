<template>
  <div class="card h-100 shadow-sm">
    <div class="img-wrapper d-flex align-items-center justify-content-center bg-light p-3" style="height: 250px;">
      <img :src="phone.image" class="img-fluid" style="max-height: 100%;" :alt="phone.name">
    </div>

    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ phone.name }}</h5>

      <div class="mt-auto d-flex justify-content-between align-items-center pt-3">
        <span class="badge bg-success fs-5">{{ phone.price }} €</span>

        <RouterLink :to="'/product/' + phone.slug" class="btn btn-primary">
          More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneCard',
  props: {
    phone: {
      type: Object,
      required: true
    }
  }
}
</script>