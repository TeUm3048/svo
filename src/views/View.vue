<template>
  <div class="about">
    <div class="left-section">
      <div class="frame left-top">
        <VInput iconName="iDegree" @input-value-changed="handleDegrees">
          Направление
        </VInput>
        <VInput iconName="iJob" @input-value-changed="handleJobs">
          Профессия
        </VInput>
      </div>
      <div class="frame left-bottom">
        <Analytics></Analytics>
      </div>
    </div>
    <div class="frame right-section">
      <vacancies :vacanciesList="vacanciesList"></vacancies>
      <button @click="getApi()">Поджать апи</button>
    </div>
  </div>
</template>
<script>
import Button from "@/common/Button";
import VInput from "@/common/VInput";
import Vacancies from "@/components/Vacancies";
import Analytics from "@/components/Analytics";
import ds from "@/plugins/DataService";
import degreeService from "@/plugins/DegreeService";

export default {
  data() {
    return {
      vacanciesList: [],
      skills: [],
    };
  },
  created() {
    this.getApi();
  },
  methods: {
    handleJobs(value) {
      this.getApi(value);
    },
    handleDegrees(value) {
      this.getApi(value);
    },
    getApi(value) {
      ds.getVacancies(value)
        .then((data) => {
          this.vacanciesList = data.results;
        })
        .catch((e) => {
          console.log("Не удалось получить данные о вакансиях");
          console.log(e);
        });
    },
    getSkills(degree) {
      let data = degreeService.getSkills(degree);
      this.skills = data;
    }
  },
  components: {
    Button,
    VInput,
    Vacancies,
    Analytics
  },
};
</script>
<style scoped>
.frame {
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
}

.about {
  margin: 15px auto;
  padding: 0 15px;
  max-width: 1000px;
  height: calc(100vh - 120px);
  display: flex;
  gap: 15px;
}

.left-section {
  min-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.left-top {
  gap: 10px;
}

.left-bottom {
  height: 100%
}

.right-section {
  width: 100%;
  height: 100%;
}
</style>
