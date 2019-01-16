<template>
  <nav class="theMenu">
    <ul class="clear">
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/appeal">我要诉求</router-link></li>
      <li><router-link to="/policy">政策配一配</router-link></li>
      <li><router-link to="/declare">我要申报</router-link></li>
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
    height: 60px;
    border-bottom: 1px solid rgba(#fff,0.2);
    ul{
      width: 1200px;
      margin: 0 auto;
      li {
        display: inline-block;
        text-align: center;
        a {
          position: relative;
          display: block;
          height: 60px;
          line-height: 70px;
          padding: 0 40px;
          color: #fff;
          cursor: pointer;
          &:before {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 5px;
            content: '';
            @include scale(0,1);
            @include transition(0.2s);
          }
          &:hover:before {
            @include scale(1,1);
            @include theme_bg(primary);
          }
          &.router-link-active {
            font-weight: 600;
            &:before {
              @include scale(1,1);
              @include theme_bg(primary-light);
            }
          }
        }
      }
    }
}
</style>