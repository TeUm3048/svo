<template>
      <component :v-if="name" :is="name"></component>
  </template>

  <script>
  import iDegree from '@/assets/degree-icon.vue'
  import iJob from '@/assets/job-icon.vue'
  import iAnal from '@/assets/anal-icon.vue'
  import iVac from '@/assets/vacancy-icon.vue'
  import iClose from '@/assets/close-icon.vue'

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
