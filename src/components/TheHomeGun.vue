<template>
  <div class="theHomeGun">
    <div class="swiper-container" id="swiper-theHomeGun">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <i class="iconfont icon-hot"></i>
          <span>找准痛点谋划对策探索更多可复制经验</span>
        </div>
        <div class="swiper-slide">
          <i class="iconfont icon-hot"></i>
          <span>市场活跃度进一步提升，禅城前三季度新增市场主体22075户</span>
        </div>
        <div class="swiper-slide">
          <i class="iconfont icon-hot"></i>
          <span>2018年区领导挂点联系重点企业诉求汇总</span>
        </div>
      </div>
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
    new Swiper('#swiper-theHomeGun',{
      autoplay: 3000,
      speed: 600,
      direction: 'vertical',
    })
  }
}
</script>


<style lang="scss" scoped>
.theHomeGun {
  width: 360px;
  height: 40px;
  .swiper-container {
    height: 40px;
    line-height: 40px;
    .swiper-wrapper {
      .swiper-slide {
        font-size: $font-size-sm;
        i {
          float: left;
          margin-right: 5px;
          @include theme_font(warning);
        }
        span {
          float: left;
          width: 320px;
          @include lines(1);;
        }
      }
    } 
  }
}
</style>