<template>
  <v-button v-if="showImg" class="open-btn" @click="changeSite()" :iconName="iconName"></v-button>
  <div v-if="showImg" class="img-close"></div>
  <header>
    <nav>
      <router-link to="/about">Студенческие вакансии онлайн СПБГЭТУ “ЛЭТИ”</router-link> |
      <router-link to="/">О проекте</router-link>
    </nav>
    <v-button class="close-btn" @click="changeSite()" :iconName="iconName"></v-button>
  </header>
  <router-view/>

</template>
<script>
  import vButton from "@/common/Button"
  export default {
    data () {
      return{
        iconName: 'iClose',
        showImg: false
      }
    },
    components: {
      vButton
    },
    methods: {
      changeSite: function () {
        this.showImg = !this.showImg
      }
    }
  }
</script>
<style>

.img-close{
  background-image: url("assets/img/background2.png");
  object-fit:contain;
  position:absolute;
  display:block;
  z-index: 500;
  width: 100vw;
  height: 100vh;
}

.open-btn{
  z-index: 1000;
  display: flex;
  position: absolute;
  color: #fff;
  right: 20px;
  top: 26px;
}

#app {
  background-image: url("assets/img/background.png");
  color: #2c3e50;
}

header{
  display: flex;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 80px;
  background: rgba(255, 255, 255, 0.3);
  padding: 20px 0;
  font-size: 20px;
}

.close-btn{
  display: flex;
  position: absolute;
  right: 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #3755fa;
}

nav a.router-link-exact-active {
  color: #000000;
}

</style>
