<template>
  <nav class="theMenu">
    <ul class="clear">
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/appeal">诉求</router-link></li>
      <li><router-link to="/declare">申报</router-link></li>
      <li><router-link to="/policy">政策</router-link></li>
      <!-- <li><router-link to="/message">信息</router-link></li> -->
    </ul>
  </nav>
</template>


<script>
export default {
  components: {
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
.theMenu {
    width: 100%;
    @include theme_bg(primary);
    ul{
      width: 1200px;
      margin: 0 auto;
      li {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-right: 1px solid rgba(#fff,0.1);
        a {
          display: block;
          padding: 0 80px;
          color: #fff;
          font-size: $font-size-lgm;
          cursor: pointer;
          &:hover {
            @include theme_bg(primary-dark);
          }
          &.router-link-active {
            @include theme_bg(primary-light);
          }
        }
      }
    }
}
</style>