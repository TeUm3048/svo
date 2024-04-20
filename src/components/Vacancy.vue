<template>
  <li class="vacancy__item">
        <div class="vacancy">
          <h3 class="vacancy__title">
            <slot name="vacTitle">fsg</slot>
          </h3>
          <h2 class="vacancy__salary">
            <slot name="vacSalary">dsfsgg</slot>
          </h2>
          <h2 class="vacancy__company">
            <slot name="vacCompany">dadfdffsg</slot>
          </h2>
        </div>
  </li>
</template>

<script>
export default {
  data () {
    return{

    }
  },
  props:{

  },
  name: "Vacancy"
}
</script>

<style scoped>

.vacancy__item {
  position: relative;
  padding-left: 15px;
}

.vacancy__item::before{
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 2px;
  background: currentColor;
}

.vacancy {
  font-size: 14px;
}

.vacancy__title {
  font-size: 18px;
}

.vacancy__salary {
  font-size: 13px;
}

.vacancy__company {
  font-size: 13px;
}
</style>
