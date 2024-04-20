<template>
  <div class="wrapper">
    <labeled-text :iconName="iconName"><slot></slot></labeled-text>
    <input placeholder="Введите ваше направление" type="text" value="Информационные системы и технологии 09.12.12">
  </div>
</template>

<script>
import LabeledText from '@/common/LabeledText.vue'

export default {
  name: "VInput",
  data() {
    return {

    }
  },
  props: {
    iconName: ''
  },
  components: {
    LabeledText
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

input {
  padding: 7px;
  height: 34px;
  border: 2px solid #3755FA;
  font-weight: 200 !important;
}
</style>
