<template>
  <div class="the-hd">
    <the-head-mini class="head-min"></the-head-mini>
    <the-menu class="menu"></the-menu>
<!--     <div class="msg-box clear">
      <div class="title">{{ data[num].title }}</div>
      <div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>
    </div>
    <div class="maskbg">
      <img src="../common/images/child-banner.jpg">
    </div> -->
  </div>
</template>


<script>
import TheHeadMini from './TheHeadMini'
import TheMenu from './TheMenu'


export default {
  components: {
    'the-head-mini': TheHeadMini,
    'the-menu': TheMenu,
  },
  props: {
  },
  data: function() {
    return {
      num: 0,
      data: [
        {
          title: 'loading...',
          maskbg: '../common/images/child-banner.jpg'
        },
        {
          title: '我要诉求',
          maskbg: '../common/images/child-banner.jpg'
        },
        {
          title: '我要找政策',
          maskbg: '../common/images/child-banner.jpg'
        }
      ]
    }
  },
  computed: {
  },
  watch: {
    $route: function(e){
      this.num = (e.name=='appeal') ? 1 : '0'
      this.num = (e.name=='zchb') ? 2 : '0'
    }
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
.the-hd {
  z-index: 2;
  position: relative;
  .maskbg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    overflow:hidden;
    img {
      width: 100%;
      min-height: 100%;
      @include transition(0.4s);
    }
  }
  .head-min {
    z-index: 1;
    position: relative;
  }
  .menu {
    z-index: 1;
    position: relative;
  }
  .msg-box {
    z-index: 1;
    position: relative;
    height: 150px;
    text-align: center;
    .title {
      margin-top: 40px;
      font-size: 30px;
      font-weight: 600;
      color: #fff;
    }
    .dot {
      position: relative;
      bottom: -30px;
      margin: 0 auto;
      width: 60px;
      height: 60px;
      line-height: 60px;
      background-color: #fff;
      @include radius(100%);
      @include shadow(0,15px,40px,0,rgba(#000,0.15));
      i {
        font-size:30px;
        @include theme_font(primary);
      }
    }
  }
  &:hover {
    .maskbg {
      img {
        @include scale(1.2,1.2);
      }
    }
  }
}
</style>