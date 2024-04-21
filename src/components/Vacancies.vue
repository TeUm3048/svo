<template>
  <labeled-text iconName="iVac">Вакансии</labeled-text>
  <transition-group class="vacancy__list"
                    name="list"
                    tag="ul"
                    @enter="onEnter"
                    @leave="onLeave"
                    @before-enter="onBeforeEnter">
    <vacancy v-for="job in vacList" :key="job.id">
      <template v-if="job.name" #vacTitle>{{ job.name }}</template>
      <template v-if="job.salaryFrom && job.salaryUpTo" #vacSalary>{{
          job.salaryFrom + " — " + job.salaryUpTo
        }}
      </template>
      <template v-else #vacSalary>{{
          job.salaryFrom || job.salaryUpTo
        }}
      </template>
      <template v-if="job.organization.name" #vacCompany>{{
          job.organization.name
        }}
      </template>
    </vacancy>
  </transition-group>
</template>
<script>
import Vacancy from "@/components/Vacancy"
import LabeledText from "@/common/LabeledText"
import gsap from "gsap"

export default {
  name: "Vacancies",
  data() {
    return {
      vacItems: [],
    }
  },
  props: {
    vacanciesList: [],
  },
  computed: {
    vacList() {
      return this.vacanciesList.filter((value, index, self) => {
        return self.findIndex((t) => t.name === value.name && t.job === value.job && t.salary === value.salary) === index;
      })
    }
  },
  components: {
    Vacancy,
    LabeledText,
  },
  methods: {
    onBeforeEnter(element) {
      element.style.left = "1.6em";
      element.style.opacity = 0;
    },
    onEnter(element, done) {
      gsap.to(element, {
        fontSize: "1em",
        left: "0",
        opacity: 1,
        onComplete: done,
      });
    },
    onLeave(element, done) {
      gsap.to(element, {
        left: 0,
        opacity: 0,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.vacancy__list {
  overflow-y: scroll;
}

.vacancy__list::-webkit-scrollbar {
  width: 0;
}

.vacancy__list {
  margin-top: 5px;
}


</style>
