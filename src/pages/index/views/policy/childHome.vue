<template>
  <div class="child child-home">
    <div class="maskbg"></div>
    <div class="box">
      <div class="top">
        <h1>政企管家</h1>
        <p>智能政策推荐报告</p>
      </div>
      <div class="content clear">
        <ul class="list clear">
          <li class="li1 flex">
            <div class="ico"><i class="iconfont icon-dui"></i></div>
            <div class="msg-box" @click="jumpChildHomeList()">
              <div class="title"><p>为您推荐</p></div>
              <div class="msg">
                <p>可能可享受扶持政策<b>5项</b></p>
                <p>可能可享受扶持资金共<b>2000万元</b></p>
              </div>
            </div>
          </li>
          <li class="li2 flex">
            <div class="ico"><i class="iconfont icon-exclamation"></i></div>
            <div class="msg-box">
              <div class="title">
                <p>可能与您相关的政策共<b class="font-primary">38项</b></p>
                <button class="btn btn0-primary-sec hover focus">请进一步完善企业信息，为你更精确推荐政策</button>
              </div>
            </div>
          </li>
          <li class="li3 flex">
            <div class="ico"><i class="iconfont icon-times"></i></div>
            <div class="msg-box">
              <div class="title">
                <p>可能暂不符合政策共<b class="font-primary">6项</b></p>
                <button class="btn btn0-primary-sec hover focus">匹配度排序</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="search">
        <button class="btn btn-lg btn-primary hover focus">政策自助查询</button>
      </div>
    </div>
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
    jumpChildHomeList: function(){
      this.$router.push({path:'./childHomeList'}) 
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.child-home {
  position: relative;
  background-color: transparent;
  .maskbg {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: -150px;
    background: url("../../../../common/images/policy-zt3.jpg") center 0 no-repeat;
    background-size: cover;
  }
  .box {
    z-index: 2;
    position: relative;
    width: 1200px;
    padding: 40px 0 80px 0;
    margin: 0 auto;
    .top {
      margin-bottom: 20px;
      color: #fff;
      text-align: center;
      h1 { font-size: 50px; }
      p {font-size: 30px; }
    }
    .content {
      width: 1200px;
      height: 600px;
      margin-bottom: 30px;
      background: url("../../../../common/images/policy-zt3-2.png") center 0 no-repeat;
      // background-color: #000;
      .list {
        margin: 100px 100px 100px 560px;
        li {
          margin-bottom: 40px;
          .ico {
            width: 80px;
            height: 80px;
            line-height: 80px;
            margin-right: 30px;
            text-align: center;
            @include radius(100%);
            i {
              color: #fff;
              font-size: 40px;
            }
          }
          .msg-box {
            cursor: pointer;
            .title {
              p {
                margin-bottom: 10px;
                font-size: $font-size-lgx;
                @include theme_font(neutral-title);
                b { font-size: 30px; }
              }
              button {
                padding: 12px 20px;
                @include radius(1000px);
                // @include theme_shadow(primary-sec,0,5px,20px,0,0.5);
              }
            }
            .msg {
              @include theme_font(neutral-title);
              b { font-size: 30px; }
            }
          }
        }
        .li1 {
          .ico { @include theme_bg(primary-sec); }
          b { @include theme_font(primary-sec); }
        }
        .li2,.li3 {
          .ico { @include theme_bg(neutral-sec); }
          b { @include theme_font(primary); }
        }
      }
    }
    .search {
      text-align: center;
      button {
        padding: 16px 100px;
        @include radius(1000px);
        // @include theme_shadow(primary,0,5px,20px,0,0.5);
      }
    }
  }
}
</style>