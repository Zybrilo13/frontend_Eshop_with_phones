<template>
  <span class="badge bg-success fs-5">
    {{ price }} €
  </span>
</template>

<script>
export default {
  name: 'PriceBadge',
  props: ['price']
}
</script>