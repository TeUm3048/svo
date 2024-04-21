<template>
  <button>
    <slot/>
    <icon :name="iconName" :v-if="iconName"></icon>
  </button>
</template>

<script>
import Icon from "@/common/Icon";

export default {
  name: "VButton",
  props: {
    iconName: 'iJob'
  },
  components: {
    Icon
  }
}
</script>

<style scoped>

</style>
