<template>
  <div class="home">
    <div class="fullslide-box">
      <div class="fullmsg-box">
        <the-search class="search"></the-search>
        <the-home-nav-content class="homeNavContent"></the-home-nav-content>
      </div>
      <the-fullslide></the-fullslide>
    </div>
    <div class="tabs">
      <div class="tabs-box">
        <ul class="nav">
          <li :class="tabNmb===0?'active':''" @click="changeActive(0)">
            <div class="__bar"></div><i class="iconfont icon-icon_bangzhuwendang"></i><span>政策解读</span>
          </li>
          <li :class="tabNmb===1?'active':''" @click="changeActive(1)">
            <div class="__bar"></div><i class="iconfont icon-pen"></i><span>扶持申报</span>
          </li>
        </ul>
        <div class="content">
          <div v-show="tabNmb===0?'true':''" class="c1 flex">
            <list-wzjd :listNum='3'></list-wzjd>
            <list-dmjd :listNum='4'></list-dmjd>
          </div>
          <div v-show="tabNmb===1?'true':''" class="c2"><list-fcsb :listNum='6'></list-fcsb></div>
        </div>
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
      tabNmb: 0,
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    changeActive(val){
      this.tabNmb = val;
    }
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
  .tabs {
    padding: 50px 0;
    .tabs-box {
      width: 1200px;
      margin: 0 auto;
      .nav {
        margin-bottom: 30px;
        border-bottom: 1px solid #e1e1e1;
        text-align: center;
        @include theme_bd(neutral-border);
        li {
          position: relative;
          display: inline-block;
          padding: 0 100px;
          margin-bottom: 20px;
          border-right: 1px solid #e1e1e1;
          font-size: $font-size-lgx;
          cursor: pointer;
          @include transition(0.2s);
          @include theme_bd(neutral-border,0.8);
          @include theme_font(neutral,0.6);
          &:last-child {
            border-right: 0;
          }
          .__bar {
            display: none;
            position: absolute;
            bottom: -21px;
            left: 0;
            width: 100%;
            height: 3px;
            @include theme_bg(primary);
            &:before {
              position: absolute;
              left: 50%;
              margin-left: -3px;
              bottom: -6px;
              content: '';
              @include arrow(bottom,6px,#003688);
            }
          }
          i {
            margin-right: 10px;
            font-size: 30px;
          }
          span {
            position: relative;
            top: -3px;
          }
          &:hover {
            @include theme_font(primary);
          }
          &.active {
            @include theme_font(primary);
            .__bar {
              display: block;
            }
          }
        }
      }
      .content {
        .listWzjd {
          flex: 0 0 400px;
          margin-right: 20px;
        }
        .listDmjd {
          ul {
            li {
              .li-box {
                border: 1px solid #e1e1e1;
                @include theme_bd(neutral-border);
              }
            }
          }
        }
        .listFcsb {
          ul {
            li {
              .li-box {
                border: 1px solid #e1e1e1;
                @include theme_bd(neutral-border);
              }
            }
          }
        }
      }
    }
  }
}
</style>
