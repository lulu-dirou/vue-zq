<template>
  <div class="the-home-zt">
    <div class="swiper-container" id="swiper-the-home-zt">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="list in lists" :key="list.id">
          <div class="myself">
            <h1>{{ list.title }}</h1>
            <p>{{ list.nr }}</p>
            <button class="btn btn-lg btn-danger active"><span><i class="iconfont icon-sound-on"></i></span>查看详情</button>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>


<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

export default {
  components: {
  },
  props: {
  },
  data: function() {
    return {
      lists: [
        {
          title: '人才专题',
          nr: '佛山市禅城区人民政府办公室关于印发佛山市禅城区科技型企业信贷风险补偿基金设立方案（2017年修订）的通知'
        },
        {
          title: '人才专题',
          nr: '中共佛山市委组织部 佛山市人力资源和社会保障局 佛山市财政局关于印发《佛山市新引进博士博士后、进站博士后和新建博士后载体扶持工作实施细则》的通知'
        },
        {
          title: '人才专题',
          nr: '佛山市禅城区人民政府办公室关于印发佛山市禅城区重点产业非户籍常住人口技能人才子女入学补助办法（试行）的通知'
        },
      ]
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
    new Swiper('#swiper-the-home-zt',{
      autoplay: 6000,
      speed: 600,
      effect: 'fade',
      pagination: '.swiper-pagination',
      paginationType: 'bullets',
      paginationClickable : true,
      autoplayDisableOnInteraction : false,
    })
  }
}
</script>


<style lang="scss" scoped>
.the-home-zt {
  width: 400px;
  color: #fff;
  .swiper-container {
    height: 300px;
    .swiper-pagination {
      text-align: left;
      /deep/ .swiper-pagination-bullet {
        width: 20px;
        height: 5px;
        background-color: #fff;
        @include transition(0.2s);
        @include radius(100px);
        &.swiper-pagination-bullet-active {
          width: 40px;
        }
      }
    }
  }
  .myself {
    position: relative;
    top: 50px;
    opacity: 0;
    @include transition(0.3s);
  }
  .swiper-slide-active {
    .myself {
      top: 0;
      opacity: 1;
    }
  }
  h1 {
    margin-bottom: 20px;
    font-size: 36px;
    @include text-shadow();
  }
  p {
    margin-bottom: 30px;
    line-height: 1.5;
    font-size: $font-size-lgm;
    @include lines(3);
    @include text-shadow();
  }
  button {
    margin-bottom: 30px;
    border: 0;
    font-size: $font-size-df;
    @include radius(100px);
    span {
      position: relative;
      left: -10px;
      top: -1px;
      vertical-align: middle;
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background-color: #fff;
      @include theme_font(neutral);
      @include radius(100px);
      @include shadow(5px,5px,20px,2px,rgba(#000,0.2));
    }
  }
}
</style>