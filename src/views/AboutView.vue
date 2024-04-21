<template>
  <div class="home frame">
    <h3>Карьерный навигатор для студентов</h3>
    <h4>Откройте для себя мир профессиональных возможностей</h4>
    <h5 style="text-align:center">Внедрение сервиса по подбору вакансий по направлению на сайте вуза может значительно улучшить процесс трудоустройства студентов, повысить их вовлеченность в процесс поиска работы и способствовать развитию карьерных навыков.</h5>
  </div>
</template>

<script >
import {Options, Vue} from 'vue-class-component';

export default class View extends Vue {

}
</script>

<style>
.home{
  display: flex;
  flex-direction:column;
  align-items:center;
  gap: 15px;
  height: calc(100vh - 120px);
  margin: 15px auto;
  max-width: 800px;
  padding: 0 15px;
}
.frame {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

</style>
