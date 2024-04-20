<template>
    <div>
      <component :v-if="name" :is="name"></component>
      <i-degree></i-degree>
      <i-job></i-job>
      <i-anal></i-anal>
      <i-vac></i-vac>
      <slot></slot>
    </div>
  </template>
  
  <script>
  import iDegree from '@/assets/degree-icon.vue'
  import iJob from '@/assets/job-icon.vue'
  import iAnal from '@/assets/anal-icon.vue'
  import iVac from '@/assets/vacancy-icon.vue'

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
      iVac
    }
  }
  </script>
  
  <style  lang="stylus" scoped>
  </style>
  