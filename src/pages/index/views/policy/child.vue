<template>
  <div class="child policy">
    <div class="child-banner">
      <div class="w-1200">
        <list-search></list-search>
        <nav>
          <ul class="flex-middle">
            <li><router-link to="/policy/zchb">政策汇编</router-link></li>
            <li><router-link to="/policy/sbzc">申报政策</router-link></li>
            <li><router-link to="/policy/zcjd">政策解读</router-link></li>
            <li><router-link to="/policy/zcdy">政策订阅</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="child-box w-1200">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import ListSearch from '../../../../components/ListSearch'

export default {
  components: {
    'list-search': ListSearch
  },
  props: {
  },
  data: function() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
</style>