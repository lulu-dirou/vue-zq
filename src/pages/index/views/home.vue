<template>
  <div class="home">
    <div class="fullslide-box">
      <div class="msg-box">
        <the-search class="search"></the-search>
        <the-home-nav class="homeNav"></the-home-nav>
      </div>
      <the-fullslide></the-fullslide>
    </div>
  </div>
</template>


<script>
import TheFullslide from '../../../components/TheFullslide.vue'
import TheSearch from '../../../components/TheSearch.vue'
import TheHomeNav from '../../../components/TheHomeNav.vue'

export default {
  components: {
    'the-fullslide': TheFullslide,
    'the-search': TheSearch,
    'the-home-nav': TheHomeNav,
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
.home {
  .fullslide-box {
    position: relative;
    width: 100%;
    .msg-box {
      z-index: 2;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -600px;
      width: 1200px;
      .search {
        z-index: 2;
        position: relative;
        margin-top: 120px;
      }
      .homeNav {
        z-index: 2;
        position: relative;
        margin-top: 100px;
      }
    }
  }
}
</style>
