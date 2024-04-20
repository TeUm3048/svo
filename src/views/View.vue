<template>
  <div class="about">
    <div class="left-section">
      <div class="left-top">
        <VInput iconName="iDegree">Направления</VInput>
        <VInput iconName="iJob">Направления</VInput>
      </div>
      <div class="left-bottom"></div>
      <div class="analitycs">

      </div>
    </div>
    <div class="right-section">

      <vacancies :vacanciesList="vacanciesList"></vacancies>
      <button @click="getApi">Поджать апи</button>
    </div>
    <api>{{ skills }}</api>
  </div>
</template>
<script>
import Api from "@/components/Api";
import Button from "@/common/Button";
import VInput from "@/common/VInput";
import Vacancies from "@/components/Vacancies";
import Vacancy from "@/components/Vacancy";
import ds from "@/plugins/DataService";

export default {
  data() {
    return {
      skills: [],
      vacanciesList: [{
        title: 'Инженер-программист микроконтроллеров',
        salary: '324342',
        company: 'OOO'}
      ]
    };
  },
  props: [],
  methods: {
    getApi() {
      ds.getConsole();
      ds.getVacancies().then((data) => {
        this.skills = data;
      })
        .catch((e) => {
          console.log("Не удалось получить данные о вакансиях")
          console.log(e)
        });
    },
  },
  components: {
    Button,
    Api,
    VInput,
    Vacancy,
    Vacancies
  },
};
</script>
<style scoped>
.about {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.left-section {
  min-width: 656px;
}

.left-top {
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.right-section {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 20px;
}
</style>
