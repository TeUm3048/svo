<template>
  <header>
    <nav>
      <router-link to="/about">Студенческие вакансии онлайн СПБГЭТУ “ЛЭТИ”</router-link> |
      <router-link to="/">О проекте</router-link>
    </nav>
    <v-button class="close-btn" :iconName="iconName"></v-button>
  </header>
  <router-view/>
</template>
<script>
  import vButton from "@/common/Button"
  export default {
    data () {
      return{
        iconName: 'iClose'
      }
    },
    components: {
      vButton
    }
  }
</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
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
  color: #42b983;

}

nav a.router-link-exact-active {
  color: #2c3e50;
}

</style>
