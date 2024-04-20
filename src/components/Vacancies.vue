<template>
  <div class="vacancy__wrapper">
    <labeled-text iconName="iVac">Вакансии</labeled-text>
    <ul v-for="job in vacList" class="vacancy__list">
      <vacancy>
        <template #vacTitle>{{job.title}}</template>
        <template #vacSalary>{{job.salary}}</template>
        <template #vacCompany>{{job.company}}</template>
      </vacancy>
    </ul>
  </div>

</template>

<script>
import Vacancy from "@/components/Vacancy"
import LabeledText from "@/common/LabeledText"
export default {
  name: "Vacancies",
  props:{
    vacanciesList:[]
  },
  computed: {
    vacList () {
      return this.vacanciesList
    }
  },
  components:{
    Vacancy,
    LabeledText
  }
}
</script>

<style scoped>
.vacancy__wrapper{
  font-size: 18px;
}

.vacancy__list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
