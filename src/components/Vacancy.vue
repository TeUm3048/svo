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


.vacancy {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 3px;
  overflow: visible;
  position: relative;
}

.vacancy__item {
  margin-bottom: 15px;
  padding-left: 26px;
  position: relative;
  transform: translateX(0%);
  transition: 0.2s;
}

.vacancy__item::before {
  background: #000000;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  transition: 0.2s;
  width: 2px;
}

.vacancy__item::after {
  background: #3755FA;
  bottom: 0;
  content: "";
  height: 12px;
  left: 2px;
  position: absolute;
  transform: translateX(-50%) rotate(45deg);
  transition: 0.2s;
  width: 12px;
}

.vacancy__item:hover {
  transform: translateX(20px);
}

.vacancy__item:hover::before {
  left: 2px;
}

.vacancy__item:hover::after {
  animation: rool infinite 2s;
  bottom: 50%;
  height: 18px;
  left: 3px;
  transform: translateX(-50%) translateY(50%) rotate(180deg);
  width: 18px;
}

@keyframes rool {
  0% {
    transform: translateX(-50%) translateY(50%) rotate(180deg);
  }
  100% {
    transform: translateX(-50%) translateY(50%) rotate(-180deg);
  }

}

.vacancy__title {
  font-size: 18px;
  max-width: 350px;
}

</style>
