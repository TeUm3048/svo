<template>
  <div class="labeled">
    <p class="named">
      <slot></slot>
    </p>
    <icon :name="iconName"></icon>
  </div>
  <slot>
    Api
  </slot>
  <input type="text">

</template>

<script>
import Icon from '@/common/Icon.vue'

export default {
  name: "VInput",
  props: {
    iconName: ''
  },
  components: {
    Icon
  }
}
</script>

<style scoped></style>