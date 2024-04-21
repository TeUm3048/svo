<template>
  <div class="labeled">
    <p class="named">
      <slot></slot>
    </p>
    <icon :name="iconName"></icon>
  </div>
</template>

<script>
import Icon from '@/common/Icon.vue'

export default {
  name: "LabeledText",
  props: {
    iconName: 'IDegree'
  },
  components: {
    Icon
  }
}
</script>

<style scoped>
.labeled {
  align-items: center;
  display: flex;
  gap: 5px;
  height: 34px;
  padding: 8px 5px;
}
</style>
