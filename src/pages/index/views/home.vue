<template>
  <div class="home">
    <div class="fullslide-box">
      <!-- <the-search class="search"></the-search> -->
      <the-head-mini class="head-mini"></the-head-mini>
      <the-menu-mini class="menu-mini"></the-menu-mini>
      <the-home-zt class="home-zt"></the-home-zt>
      <the-fullslide></the-fullslide>
    </div>
    <the-home-nav></the-home-nav>
  </div>
</template>


<script>
import TheFullslide from '../../../components/TheFullslide.vue'
// import TheSearch from '../../../components/TheSearch.vue'
import TheHeadMini from '../../../components/TheHeadMini.vue'
import TheMenuMini from '../../../components/TheMenuMini.vue'
import TheHomeZt from '../../../components/TheHomeZt.vue'
import TheHomeNav from '../../../components/TheHomeNav.vue'

export default {
  components: {
    'the-fullslide': TheFullslide,
    // 'the-search': TheSearch,
    'the-head-mini': TheHeadMini,
    'the-menu-mini': TheMenuMini,
    'the-home-zt': TheHomeZt,
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
    .search {
      z-index: 3;
      position: absolute;
      top: 20px;
      left: 50%;
    }
    .head-mini {
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
    }
    .menu-mini {
      z-index: 2;
      position: absolute;
      top: 170px;
      left: 50%;
      margin-left: -600px;
    }
    .home-zt {
      z-index: 2;
      position: absolute;
      top: 200px;
      left: 50%;
      margin-left: 200px;
    }
  }
}
</style>
