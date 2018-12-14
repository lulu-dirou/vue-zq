<template>
  <div class="theHomeNav">
    <ul class="clear">
      <li>
        <div class="li-box clear">
          <div class="ico"><i class="iconfont icon-wodegongzuo-liebiao"></i></div>
          <div class="title">企业服务</div>
        </div>
      </li>
      <li>
        <div class="li-box clear">
          <div class="ico"><i class="iconfont icon-woderenwu-liebiao"></i></div>
          <div class="title">知识库</div>
        </div>
      </li>
      <li class="disabled">
        <div class="li-box clear">
          <div class="ico"><i class="iconfont icon-tiaochaziliaoguanli"></i></div>
          <div class="title">政策库</div>
        </div>
      </li>
      <li class="disabled">
        <div class="li-box clear">
          <div class="ico"><i class="iconfont icon-hezhunshenqing"></i></div>
          <div class="title">企业诉求</div>
        </div>
      </li>
      <li class="disabled">
        <div class="li-box clear">
          <div class="ico"><i class="iconfont icon-rizhi"></i></div>
          <div class="title">日常办公</div>
        </div>
      </li>
      <div class="line"></div>
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
.theHomeNav {
  ul {
    position: relative;
    text-align: center;
    .line {
      position: absolute;
      top: 50%;
      left: -5%;
      width: 110%;
      height: 1px;
      content: '';
      background-color: rgba(#fff,0.3);
    }
    li {
      position: relative;
      display: inline-block;
      width:200px;
      height: 200px;
      margin: 20px;
      cursor: pointer;
      background-color: rgba(#fff,0.2);
      @include radius(200px);
      &:before {
        display: none;
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 200px;
        content: '';
        @include radius(200px);
        @include animation(libg,2s,ease-out);
        @include keyframes(libg){
          0% {
            @include scale(1,1);
            background-color: rgba(#fff,0.4);
          }
          100% {
            @include scale(1.5,1.5);
            background-color: rgba(#fff,0);
          }
        }
      }
      &:hover:before {
        display: block;
      }
      .li-box {
        z-index: 2;
        position: relative;
        width: 160px;
        height: 160px;
        margin: 20px;
        @include radius(200px);
        @include shadow(0,0,20px,10px,rgba(#000,0.05));
        background-color: #fff;
        .ico {
          width: 90px;
          height: 90px;
          margin: 15px auto 5px auto;
          i {
            font-size: 80px;
            @include theme_font(primary-light);
          }
        }
        .title {
          @include theme_font(neutral-title);
          font-size: $font-size-lgx;
        }
      }
      &:hover {
        .li-box {
          @include theme_bg(primary);
          .ico {
            i {
              color: #fff;
            }
          }
          .title {
            color: #fff;
          }
        }
      }
      &.disabled,&.disabled:hover {
        cursor: not-allowed;
        .li-box {
          background-color: rgba(#fff,1);
          .ico {
            i {
              background-color: transparent;
              @include theme_font(neutral-disabled);
            }
          }
          .title {
            @include theme_font(neutral-disabled);
          }
        }
      }
    }
  }
}
</style>