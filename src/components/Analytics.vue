<template>
  <Bar id="my-chart-id" :data="chartData" :options="chartOptions" />
</template>

<script>
import { Bar } from "vue-chartjs";
import { Colors } from 'chart.js';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Colors,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

ChartJS.defaults.backgroundColor = "#000";
ChartJS.defaults.borderColor = "#000";
ChartJS.defaults.color = "#000";


export default {
  name: "Analytics",
  props: {
    dataset: {
      type: Object,
      default: () => ({
        labels: [],
        values: [],
      }),
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
      },
    };
  },
  components: {
    Bar,
  },
  computed: {
    chartData() {
      return {
        labels: this.dataset.labels,
        datasets: [
          {
            backgroundColor: '#3755FA',
            label: null,
            barPercentage: 0.9,
            barThickness: 400,
            maxBarThickness: 60,
            minBarLength: 4,
            data: this.dataset.values,
          },
        ],
      };
    },
  },
  watch: {
    dataset: {
      handler(newVal) {
        this.updateChartData(newVal);
      },
      deep: true,
    },
  },
  methods: {
    updateChartData(newVal) {
      this.chartData.labels = newVal.labels;
      this.chartData.datasets[0].data = newVal.values;
      this.$nextTick(() => {
        this.renderChart()
      });
    },
  },
};
</script>

<style scoped>
</style>
