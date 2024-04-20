<template>
  <li class="vacancy__item">
    <div class="vacancy">
      <h3 class="vacancy__title">
        <slot name="vacTitle"></slot>
      </h3>
      <h2 class="vacancy__salary">
        <slot name="vacSalary"></slot>

      </h2>
      <h2 class="vacancy__company">
        <slot name="vacCompany"></slot>
      </h2>
    </div>
  </li>
</template>

<script>
export default {
  name: "Vacancy"
}
</script>

<style scoped>
.vacancy__item {
  position: relative;
  padding-left: 15px;
  /*animation: slide-in-right 0.5s ease-out forwards;*/
}

/*@keyframes slide-in-right {*/
/*  0% {*/
/*    transform: translateX(100%);*/
/*    opacity: 0;*/
/*  }*/
/*  100% {*/
/*    transform: translateX(0);*/
/*    opacity: 1;*/
/*  }*/
/*}*/

.vacancy {
  font-size: 11px;
}

.vacancy__item::before {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 2px;
  background: currentColor;
}

.vacancy__title {
  font-size: 18px;
}

/*.list-enter-active, .list-leave-active {*/
/*  transition: all 0.5s;*/
/*  transition-delay: .2s;*/
/*}*/

/*.list-enter, .list-leave-to {*/
/*  opacity: 0;*/
/*  transform: translateX(100%);*/
/*}*/

/*.list-leave, .list-enter-to {*/
/*  opacity: 1;*/
/*  transform: translateX(0);*/
/*}*/
</style>
