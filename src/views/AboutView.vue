<template>
  <div class="home">
    <img alt="Vue logo" style="object-fit: contain; width: 300px;" src="../assets/img/img.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class View extends Vue {}
</script>
