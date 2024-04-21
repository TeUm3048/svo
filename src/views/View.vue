<template>
  <div class="about">
    <div class="left-section">
      <div class="frame left-top">
        <super-input :suggestionsList="vacanciesList" iconName="iDegree" @input-value-changed="handleDegrees">
          Направление
        </super-input>
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
      <button @click="getSkills()">Поджать апи</button>
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
import SuperInput from "@/common/SuperInput";

export default {
  data() {
    return {
      vacanciesList: new Array(),
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
      if (!value) {
        this.refreshVacancies();
      }
      this.getSkills(value);
      this.getApi(this.skills);
    },
    getApi(valueList) {
      if (!valueList) return;
      valueList.map((v) => {
        ds.getVacancies(v)
          .then((data) => {
            this.vacanciesList = [...this.vacanciesList, ...data.results];
            if (data.next) {
              console.log(results);
              const nextResults = this.getApi(data.next);
              this.vacanciesList = this.vacanciesList.concat(nextResults);
            } else {
              // Если следующей страницы нет, возвращаем текущие результаты
              return results;
            }
          })
          .catch((e) => {
            console.log("Не удалось получить данные о вакансиях");
            console.log(e);
          });
      });
    },
    refreshVacancies() {
      this.skills = new Array();
      ds.getVacancies()
        .then((data) => {
          this.vacanciesList = data.results;
        })
        .catch((e) => {
          console.log("Не удалось получить данные о вакансиях");
          console.log(e);
        });
    },
    getSkills(value) {
      let data = degreeService.getSkills(value);
      console.log("ДАта", data);
      if (data) {
        this.skills = data;
      }
      console.log(this.skills);
    },
  },
  components: {
    Button,
    VInput,
    Vacancies,
    Analytics,
    SuperInput,
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
  height: 100%;
}

.right-section {
  width: 100%;
  height: 100%;
}
</style>
