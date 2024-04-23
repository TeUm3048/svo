<template>
  <div class="wrapper">
    <labeled-text :iconName="iconName"><slot></slot></labeled-text>
    <input
      ref="input"
      v-model="inputValue"
      @change="emitInputValue"
      type="text"
    />
  </div>
</template>

<script>
import LabeledText from "@/common/LabeledText.vue";

export default {
  data () {
    return {
      inputValue: ''
    }
  },
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
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

input {
  border-radius: 5px;
  font-size: 16px;
  padding: 7px;
  height: 34px;
  border: 2px solid #3755fa;
  width: calc(100% - 30px);
  background: rgba(255, 255, 255, 0.3);
}
</style>
