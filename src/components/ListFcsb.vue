<template>
  <div class="listFcsb">
    <ul class="flex">
      <li v-for="index in 6" :key="index.id">
        <div class="li-h flex-middle">
          <span class="label">【市质监局】</span>
          <span class="state">已结束</span>
        </div>
        <div class="li-c flex">
          <div class="time-box flex-middle"><span>0</span><em>剩余天数</em></div>
          <div class="msg-box">
            <div class="money">0万-10万</div>
            <div class="title">佛山市工业产品质量提升扶持（计量类）</div>
          </div>
        </div>
        <div class="li-f flex">
          <div class="time">申报时间：2018-08-20</div>
          <div class="sc"><i class="iconfont icon-like-heart" title="收藏"></i></div>
        </div>
      </li>
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
.listFcsb {
  ul {
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: -10px;
    li {
      position: relative;
      top: 0;
      flex: 0 0 32.5%;
      margin-bottom: 10px;
      padding: 10px 20px;
      border: 1px solid #e1e1e1;
      background-color: #fff;
      @include radius(2px);
      @include theme_bd(neutral-border);
      @include transition(0.2s);
      @include radius(2px);
      &:hover {
        z-index: 2;
        top: -5px;
        @include shadow(0,0,20px,2px);
      }
      .li-h {
        justify-content: space-between;
        border-bottom: 1px solid #e1e1e1;
        padding-bottom: 5px;
        margin-bottom: 10px;
        font-size: $font-size-xs;
        @include theme_bd(neutral-border);
        .label {
        }
        .state {
          padding: 5px 10px;
          border: 1px solid #e1e1e1;
          @include theme_font(neutral-disabled);
          @include theme_bg(neutral-disabled,0.1);
          @include theme_bd(neutral-disabled,0.3);
          &.active {
            @include theme_font(danger);
            @include theme_bg(danger,0.1);
            @include theme_bd(danger,0.3);
          }
        }
      }
      .li-c {
        margin-bottom: 10px;
        .time-box {
          flex-direction: column;
          flex: 0 0 55px;
          width: 55px;
          height: 60px;
          margin-right: 20px;
          text-align: center;
          color: #fff;
          @include radius(5px);
          @include theme_bg(neutral-disabled);
          &.active {
            @include theme_bg(warning);
          }
          span {font-weight: 600;font-size: 24px;}
          em {font-size: $font-size-xs;}
        }
        .msg-box {
          flex: 1;
          .money {
            @include theme_font(danger);
          }
          .title {
            @include lines(2);
          }
        }
      }
      .li-f {
        justify-content: space-between;
        font-size: $font-size-xs;
        .time {
          @include theme_font(neutral-disabled);
        }
        .sc {
          @include theme_font(success);
        }
      }
    }
  }
}
</style>