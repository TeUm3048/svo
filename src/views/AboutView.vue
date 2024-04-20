<template>
  <div class="about">
    <h1>This is an about page</h1>
    <VInput :iconName="iDegree" >sadfasfd</VInput>
    <button @click="getApi">Поджать апи</button>
    <api>{{skills}}</api>
  </div>
</template>
<script>
import Api from '@/components/Api'
import Button from '@/common/Button'
import VInput from '@/common/VInput'
import ds from '@/plugins/DataService'

export default {
  data () {
    return{
      skills: [],
    }
  },
  props: [],
  methods: {
    getApi () {
      ds.getConsole()
      ds.getVacancyInfo().then(data => {
        this.skills = data
      })
      
    }
  },
  components: {
    Button,
    Api,
    VInput
  }
}

</script>
<style>

</style>
