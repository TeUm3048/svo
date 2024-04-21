<template>
  <labeled-text iconName="iAnal">Анализ</labeled-text>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<script>
import LabeledText from "@/common/LabeledText"
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import gsap from "gsap"
export default {
  name: "Analytics",
  // props: {
  //   chartData: {
  //     type: Object,
  //     required: true
  //   },
  //   chartOptions: {
  //     type: Object,
  //     default: () => {}
  //   }
  // },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ {
          backgroundColor: '#ffffff',
          label: '',
          barPercentage: 0.7,
          barThickness: 200,
          maxBarThickness: 40,
          minBarLength: 4,
          data: [10, 20, 30, 40, 50, 60, 70]
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  // computed: {
  //   chartData() { return /* mutable chart data */ },
  //   chartOptions() { return /* mutable chart options */ }
  // },
  components: {
    LabeledText,
    Bar
  }
}
</script>

<style scoped>

</style>
