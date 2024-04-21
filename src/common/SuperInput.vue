<template>
  <div class="wrapper">
    <labeled-text :iconName="iconName"><slot></slot></labeled-text>
    <AutoComplete
      @change="emitInputValue"
      v-model="selectedValue"
      :suggestions="filteredSuggestions"
      @complete="filterSuggestions"
      dropdown="true"
      variant="filled"
      forceSelection="true"
      inputStyle="
      .p-autocomplete {
        border-radius: 5px;
        height: 34px;
        width:calc(100% - 30px);
        border: 2px solid #3755fa;
        background: rgba(255, 255, 255, 0.3);
        font-weight: 200 !important;
      }
      "

    >
    </AutoComplete>
  </div>
</template>

<script>
import LabeledText from "@/common/LabeledText.vue";
import AutoComplete from "primevue/autocomplete";

export default {
  name: "SuperInput",
  props: {
    iconName: "",
    suggestions: Array,
  },
  components: {
    LabeledText,
    AutoComplete,
  },
  computed: {
    items() {
      return this.suggestionsList;
    },
  },
  data() {
    return {
      selectedValue: null,
      filteredSuggestions: [],
    };
  },
  methods: {
    filterSuggestions(event) {
      this.filteredSuggestions = this.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(event.query.toLowerCase())
      );
      console.log(this.filteredSuggestions);
    },
    emitInputValue() {
      this.$emit("input-value-changed", this.selectedValue);
    },
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
}

.p-autocomplete input {
    padding: 5px;
    font-size:16px;
    margin-right: 5px;
    border-radius: 5px;
  }

.p-autocomplete-panel.p-component {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  font-size:16px;
  border-radius: 3px;
  padding:2px;
}
.p-autocomplete-panel .p-autocomplete-item {
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}
.p-autocomplete-panel .p-autocomplete-item:hover {
  background: rgba(255, 255, 255, 0.5);
}

</style>
