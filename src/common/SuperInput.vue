<template>
  <div class="wrapper">
    <labeled-text :iconName="iconName"><slot></slot></labeled-text>
    <auto-complete
      ref="input"
      v-model="inputValue"
      :suggestions="items"
      @complete="emitInputValue"
      type="text"
    />
  </div>
</template>

<script>
import LabeledText from "@/common/LabeledText.vue";
import AutoComplete from "primevue/autocomplete";

export default {
  name: "SuperInput",
  props: {
    iconName: "",
    suggestionsList: []
  },
  components: {
    LabeledText,
    AutoComplete
  },
  computed: {
    items () {
      return [...this.suggestionsList]
    }
  },
  methods: {
    emitInputValue() {
      this.$emit("input-value-changed", this.inputValue);
    },
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
  background: rgba(255, 255, 255, 0.3);
  font-weight: 200 !important;
}
</style>
