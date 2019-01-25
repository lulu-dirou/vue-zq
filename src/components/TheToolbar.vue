<template>
  <div class="the-toolbar">
    <ul class="clear">
      <li class="header"></li>
      <li v-for="(list,index) in lists" :key="list.id" :class="{ active: index==num }">
        <!-- <span><a :href="'#floor'+index">{{ list }}</a></span> -->
        <span><a href="" @click.prevent="jumpFloor(index)">{{ list }}</a></span>
      </li>
      <li class="top" @click="jumpTop()"><i class="iconfont icon-xialajiantou-up"></i></li>
    </ul>
  </div>
</template>


<script>
export default {
  components: {
  },
  props: {
  },
  data: function() {
    return {
      lists: ['基本信息','扶持对象','申报条件','扶持标准','办理流程','材料递交要求'],
      num: '',
      isActive: false,
      scrollView: '',
      scrollTop: '',
      scrollIndex: '',
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    //回到顶部
    jumpTop: function(){
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.scrollTo (0,0);
      }
    },
    //楼层跳转
    jumpFloor: function(index){
      let anchorElement = document.getElementById('floor'+index);
      if(anchorElement) { 
        anchorElement.scrollIntoView(); 
        this.scrollView = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log ('cccccccccccccccc'+this.scrollView)
        this.num = index
      }
    },
    //监听滑动
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scrollTop)
    }
  },
  created: function(){
  },
  mounted: function(){
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>


<style lang="scss" scoped>
.the-toolbar {
  position: fixed;
  right: 20px;
  bottom: 20%;
  width: 50px;
  overflow: hidden;
  @include radius(2px);
  @include shadow(0,10px,20px,0);
  ul {
    li {
      width: 50px;
      text-align: center;
      font-size: $font-size-sm;
      cursor: pointer;
      background-color: #fff;
      &:last-child {
        border-bottom: 0;
      }
      a {
        display: block;
        padding: 8px 8px;
        line-height: 1.2;
        border-bottom: 1px solid #e1e1e1;
      }
      &:hover {
        @include theme_bg(primary);
        a {
          color: #fff;
          @include theme_bg(primary);
        }
      }
    }
    .header {
      height: 10px;
      @include theme_bg(primary);
    }
    .top {
      padding: 8px 8px;
      @include theme_font(primary);
      i {font-size: 25px;}
      &:hover {
        i {color: #fff;}
      }
    }
  }
}
</style>