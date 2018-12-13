<template>
  <div id="app">
    <the-menu></the-menu>
    <div class="theContent clear"> 
      <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheMenu from '../../components/TheMenu.vue'
import TheFooter from '../../components/TheFooter.vue'

export default {
  components: {
    'the-menu':TheMenu,
    'the-footer':TheFooter,
  },
  data: function(){
    return {
    }
  },
  methods: {
  },
  created: function(){
    //默认加载主题
    window.document.documentElement.setAttribute('data-theme', 'theme')
  }
}
</script>

<style lang="scss">
</style>
