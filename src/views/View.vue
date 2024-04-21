<template>
  <div class="about">
    <div class="left-section">
      <div class="frame left-top">
        <SuperInput
          :suggestions="degreeList"
          iconName="iDegree"
          @input-value-changed="handleDegrees"
        >
          Направление
        </SuperInput>
        <VInput iconName="iJob" @input-value-changed="handleJobs">
          Профессия
        </VInput>
      </div>
      <div class="frame left-bottom">
        <labeled-text iconName="iAnal">Анализ</labeled-text>
        <Analytics :dataset="dataset"></Analytics>
        <!-- <vacancy-anal :vacancyList="vacanciesList"></vacancy-anal> -->
      </div>
    </div>
    <div class="frame right-section">
      <vacancies :vacanciesList="vacanciesList"></vacancies>
      <!-- <button @click="getApi()">Поджать апи</button> -->
    </div>
  </div>
</template>
<script>
import Button from "@/common/Button";
import VInput from "@/common/VInput";
import LabeledText from "@/common/LabeledText";
import Vacancies from "@/components/Vacancies";
import Analytics from "@/components/Analytics";
import ds from "@/plugins/DataService";
import degreeService from "@/plugins/DegreeService";
import SuperInput from "@/common/SuperInput";
import VacancyAnal from "@/components/VacancyAnal";
import calcVacancyStats from "@/utils/calcVacancyStats";

export default {
  data() {
    return {
      vacanciesList: new Array(),
      skills: [],
      degreeList: new Array(),
      jobValue: "",
      degreeValue: "",
      dataset: {
        labels: [],
        values: [],
        total: 0,
      },
    };
  },
  created() {
    this.refreshVacancies();
    this.updateDataset();
    this.getDegrees();
  },

  methods: {
    handle() {},
    handleJobs(value) {
      console.log(value);
      this.jobValue = value;
      this.getApi();
    },

    handleDegrees(value) {
      this.degreeValue = value;
      if (!value) {
        this.refreshVacancies();
      }
      this.getApi();
    },
    updateDataset() {
      let data = calcVacancyStats(this.vacanciesList);
      this.dataset = data;
    },
    getApi() {
      this.getSkills(this.degreeValue);

      if (!this.skills || !this.jobValue) return;
      let valueList;
      if (!this.skills && this.skills.length === 0) {
        valueList = [this.jobValue];
      } else {
        valueList = this.skills.map((s) => `${s} ${this.jobValue}`);
      }

      valueList.map((v) => {
        this.getAllVacancies(v);
      });
    },
    getAllVacancies(v, page = 1) {
      ds.getVacancies(v, page)
        .then((data) => {
          this.vacanciesList.push(...data.results);
          this.updateDataset();


          if (data.next) {
            console.log(results);
            let nextResults = this.getAllVacancies(v, data.next);
            this.vacanciesList.push(...nextResults);
            this.updateDataset();
          } else {
            return;
          }
        })
        .catch((e) => {
          console.log("Не удалось получить данные о вакансиях");
          console.log(e);
        });
    },
    refreshVacancies() {
      this.skills = new Array();
      ds.getVacancies()
        .then((data) => {
          this.vacanciesList = data.results;
          this.updateDataset();
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
    getDegrees() {
      this.degreeList = degreeService.getAllDegree();
    },
  },
  components: {
    Button,
    VInput,
    Vacancies,
    Analytics,
    SuperInput,
    VacancyAnal,
    LabeledText,
  },
};
</script>
<style scoped>
.frame {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.about {
  display: flex;
  gap: 15px;
  height: calc(100vh - 120px);
  margin: 15px auto;
  max-width: 1200px;
  padding: 0 15px;
}

.left-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 600px;
}

.left-top {
  gap: 10px;
}

.left-bottom {
  height: 100%;
}

.right-section {
  height: 100%;
  width: 100%;
}
</style>
