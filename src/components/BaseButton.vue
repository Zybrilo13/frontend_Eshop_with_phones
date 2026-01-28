<template>
  <button :class="['btn', btnClass]" @click="$emit('action')">
    <slot></slot> </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    btnClass() {
      return `btn-${this.variant}`;
    }
  }
}
</script>