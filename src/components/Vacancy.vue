<template>
  <li class="vacancy__item">
    <div class="vacancy">
      <p class="vacancy__title">
        <slot name="vacTitle"></slot>
      </p>
      <p class="vacancy__salary">
        <slot name="vacSalary"></slot>

      </p>
      <p class="vacancy__company">
        <slot name="vacCompany"></slot>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: "Vacancy"
}
</script>

<style scoped>


.vacancy{
  position: relative;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap:3px;
  cursor: pointer;
  overflow:visible;
}

.vacancy__item {
  position: relative;
  margin-bottom: 15px;
  padding-left: 26px;
  transform: translateX(0%);
  transition: 0.2s;
}

.vacancy__item::before {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 2px;
  background: #000000;
  transition: 0.2s;
}

.vacancy__item::after {
  content: "";
  position: absolute;
  transition: 0.2s;
  transform: translateX(-50%) rotate(45deg);
  left: 2px;
  bottom: 0px;
  height: 12px;
  width: 12px;
  background: #3755FA;
}

.vacancy__item:hover{
  transform: translateX(20px);
}

.vacancy__item:hover::before {
  left: 2px;
}

.vacancy__item:hover::after{
  transform: translateX(-50%) translateY(50%) rotate(180deg);
  left: 3px;
  bottom: 50%;
  height: 18px;
  width: 18px;
  background: #3755FA;
  animation: rool infinite 2s;
}

@keyframes rool {
  0%{
    transform: translateX(-50%) translateY(50%) rotate(180deg);
  }
  100%{
    transform: translateX(-50%) translateY(50%) rotate(-180deg);
  }

}

.vacancy__title {
  font-size: 18px;
  max-width: 350px;
  /*white-space: nowrsap;*/
  /*overflow: hidden;*/
  /*text-overflow: ellipsis !important;*/
}

/*.vacancy__item:hover{*/
/*  border: 2px solid #000;*/
/*}*/

/*.vacancy__item:hover .vacancy__title {*/
/*  font-size: 18px;*/
/*  max-width: 300px;*/
/*  white-space: normal;*/
/*  !*overflow: hidden;*!*/
/*  text-overflow: unset !important;*/
/*}*/
</style>
