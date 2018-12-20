<template>
  <div class="home">
    <div class="fullslide-box">
      <div class="fullmsg-box">
        <the-search class="search"></the-search>
        <the-home-nav-content class="homeNavContent"></the-home-nav-content>
      </div>
      <the-fullslide></the-fullslide>
    </div>
    <div class="homeList homeZcjd">
      <div class="homeList-box flex">
        <div class="ico-box flex-middle">
          <i class="abs iconfont icon-icon_bangzhuwendang"></i>
          <i class="iconfont icon-icon_bangzhuwendang"></i>
          <span>政策解读</span><em>Interpretation</em>
        </div>
        <div class="left-box"><list-wzjd :listNum='4'></list-wzjd></div>
        <div class="right-box">
          <div class="imp">
            <span><i class="iconfont icon-screenshot"></i>动漫解读</span>
            <span><i class="iconfont icon-instagram"></i>视频解读</span>
            <span><i class="iconfont icon-burger-"></i>文字解读</span>
          </div>
          <list-dmjd :listNum='4'></list-dmjd>
        </div>
      </div>
    </div>
    <div class="homeList homeFcsb">
      <div class="homeList-box flex">
        <div class="ico-box flex-middle">
          <i class="abs iconfont icon-pen"></i>
          <i class="iconfont icon-pen"></i>
          <span>扶持申报</span><em>Declaration</em>
        </div>
        <div class="right-box"><list-fcsb></list-fcsb></div>
      </div>
    </div>
  </div>
</template>


<script>
import TheFullslide from '../../../components/TheFullslide.vue'
import TheSearch from '../../../components/TheSearch.vue'
import TheHomeNavContent from '../../../components/TheHomeNavContent.vue'
import ListDmjd from '../../../components/ListDmjd.vue'
import ListWzjd from '../../../components/ListWzjd.vue'
import ListFcsb from '../../../components/ListFcsb.vue'

export default {
  components: {
    'the-fullslide': TheFullslide,
    'the-search': TheSearch,
    'the-home-nav-content': TheHomeNavContent,
    'list-dmjd': ListDmjd,
    'list-wzjd': ListWzjd,
    'list-fcsb': ListFcsb,
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


<style lang="scss">
.home {
  .fullslide-box {
    position: relative;
    width: 100%;
    height: 700px;
    .fullmsg-box {
      z-index: 2;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -620px;
      width: 1240px;
      .search {
        z-index: 2;
        position: relative;
        margin-top: 80px;
      }
      .homeNavContent {
        margin-top: 20px;
      }
    }
  }
  .homeList {
    width: 100%;
    padding: 50px 0;
    .homeList-box {
      width: 1200px;
      margin: 0 auto;
    }
    .ico-box {
      position: relative;
      flex: 0 0 140px;
      flex-direction: column;
      margin-right: 20px;
      color: #fff;
      @include theme_bg(primary);
      i.abs {
        position: absolute;
        right: -40px;
        top: -40px;
        font-size: 160px;
        color: rgba(#fff,0.1);
      }
      i {font-size: 60px;}
      span {font-size: 20px;}
      em { font-size: $font-size-xs;color: rgba(#fff,0.6);}
    }
    .left-box {
      flex: 0 0 300px;
      margin-right: 20px;
      background-color: #fff;
    }
    .right-box {
      flex: 1;
      .imp {
        padding: 20px;
        margin-bottom: 20px;
        text-align: center;
        background-color: #fff;
        span {
          padding: 0 30px;
          border-right: 1px solid #e1e1e1;
          cursor: pointer;
          @include theme_font(primary-light);
          @include theme_bd(neutral-border);
          &:last-child {
            border-right: 0;
          }
          i {
            margin-right: 5px;
          }
          &:hover {
            @include theme_font(primary-dark);
          }
        }
      }
    }
  }
  .homeZcjd {
    @include theme_bg(neutral-divider);
  }
  .homeFcsb {
  }
}
</style>
