<template>
  <div class="wrapper">
    <labeled-text :iconName="iconName"><slot></slot></labeled-text>
    <input
      ref="input"
      v-model="inputValue"
      @input="emitInputValue"
      type="text"
    />
  </div>
</template>

<script>
import LabeledText from "@/common/LabeledText.vue";

export default {
  name: "VInput",
  props: {
    iconName: "",
  },
  components: {
    LabeledText,
  },
  methods: {
    emitInputValue() {
      this.$emit('input-value-changed', this.inputValue);
    }
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

input {
  padding: 7px;
  height: 34px;
  border: 2px solid #3755fa;
  font-weight: 200 !important;
}
</style>
