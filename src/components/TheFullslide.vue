<template>
  <div class="fullsilde">
    <div class="swiper-fullsilde swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../common/images/fullslide-1.jpg"></div>
        <div class="swiper-slide"><img src="../common/images/fullslide-2.jpg"></div>
        <div class="swiper-slide"><img src="../common/images/fullslide-3.jpg"></div>
      </div>
      <div class="midCircle"><img src="../common/images/fullslide_mid.png" alt=""></div>
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
    new Swiper('.swiper-fullsilde',{
      autoplay: 8000,
      speed: 2000,
      autoplayDisableOnInteraction : false,
      loop : true,
      pagination: '.swiper-pagination',
      paginationType: 'bullets',
      paginationClickable : true,
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true//修改swiper的父元素时，自动初始化swiper
    })
  }
}
</script>


<style lang="scss">
.fullsilde {
  width: 100%;
  .midCircle {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    @include scale(0.85,0.85);
    img {
      height: 100%;
      @include animation(midCircleImg,50s,linear);
      @include keyframes(midCircleImg){
        0% {
          @include rotate(0);
        }
        100% {
          @include rotate(360deg);
        }
      }
    }
  }
  .swiper-container {
    .swiper-wrapper {
      .swiper-slide {
        font-size: 0;
        text-align: center;
        img {
          max-width: 100%;
          height: 800px;
        }
      }
    }
    .swiper-pagination {
      bottom: 20px;
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #fff;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }
}

</style>