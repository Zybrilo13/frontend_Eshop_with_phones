<template>
  <div class="home container py-4"> <h1 class="text-center mb-5">Make Your Choice</h1>

    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="phone in phones" :key="phone.id">
        <PhoneCard :phone="phone" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { usePhoneStore } from '@/stores/phoneStore';
import PhoneCard from '@/components/PhoneCard.vue';

export default {
  name: 'HomeView',
  components: { PhoneCard },
  computed: {
    ...mapState(usePhoneStore, ['phones'])
  }
}
</script>