<template>
  <analytics :dataset="dataset"></analytics>
</template>
<script>
import Analytics from "@/components/Analytics.vue";
import calcVacancyStats from "@/utils/calcVacancyStats.ts";

export default {
  name: "VacancyAnal",
  data() {
    return {
      dataset: {},
    };
  },
  props: {
    vacancyList: [],
  },
  watch: {
    vacancyList: {
      immediate: true,
      handler(newVal) {
        this.dataset = calcVacancyStats(newVal);
      },
    },
  },
  onMounted() {
    this.dataset = calcVacancyStats(this.vacancyList);
  },

  components: {
    Analytics,
  },
};
</script>
