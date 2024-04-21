<template>
  <Bar id="my-chart-id" :data="chartData" :options="chartOptions" />
</template>

<script>
import { Bar } from "vue-chartjs";
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
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

ChartJS.defaults.backgroundColor = "#9BD0F5";
ChartJS.defaults.borderColor = "#36A2EB";
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
  computed: {
    chartData() {
      return {
        labels: this.dataset.labels,
        datasets: [
          {
            backgroundColor: "magenta",
            label: null,
            barPercentage: 0.7,
            barThickness: 200,
            maxBarThickness: 40,
            minBarLength: 4,
            data: this.dataset.values,
          },
        ],
      };
    },
  },
  components: {
    Bar,
  },
};
</script>

<style scoped>
</style>
