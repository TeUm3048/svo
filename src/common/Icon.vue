<template>
  <component :is="name" :v-if="name"></component>
</template>

<script>
import iDegree from '@/assets/icons/degree-icon.vue'
import iJob from '@/assets/icons/job-icon.vue'
import iAnal from '@/assets/icons/anal-icon.vue'
import iVac from '@/assets/icons/vacancy-icon.vue'
import iClose from '@/assets/icons/close-icon.vue'

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  components: {
    iDegree,
    iJob,
    iAnal,
    iVac,
    iClose
  }
}
</script>

<style scoped>
</style>
