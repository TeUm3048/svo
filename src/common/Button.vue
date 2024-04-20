<template>
<button>
  <slot>
  </slot>
  <icon :v-if="iconName" :name="iconName"></icon>
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
