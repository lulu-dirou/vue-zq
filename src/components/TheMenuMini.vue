<template>
  <nav class="the-menu-mini">
    <ul class="clear">
      <li>
        <div class="li-box">
          <router-link to="/appeal">
          <div class="ico ico-01"></div>
          <div class="title">我要诉求</div>
          <div class="msg">登录后可查看企业、个人相关诉求结果</div>
          <div class="dot"><i class="iconfont icon-xialajiantou-up"></i></div>
          </router-link>
        </div>
      </li>
      <li>
        <div class="li-box">
          <router-link to="/policy">
          <div class="ico ico-02"></div>
          <div class="title">我要找政策</div>
          <div class="msg">精准推荐符合企业、个人的相关政策和解读</div>
          <div class="dot"><i class="iconfont icon-xialajiantou-up"></i></div>
          </router-link>
        </div>
      </li>
      <li>
        <div class="li-box">
          <router-link to="/declare">
          <div class="ico ico-03"></div>
          <div class="title">我要申报</div>
          <div class="msg">查看企业、个人相关申报结果</div>
          <div class="dot"><i class="iconfont icon-xialajiantou-up"></i></div>
          </router-link>
        </div>
      </li>
    </ul>
  </nav>
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
.the-menu-mini {
  width: 680px;
  ul {
    margin-right: -40px;
    li {
      position: relative;
      float: left;
      width: 200px;
      height: 350px;
      padding: 10px;
      margin-right: 40px;
      cursor: pointer;
      background-color: #fff;
      @include radius(15px);
      @include shadow(0,25px,60px,0,rgba(#000,0.15));
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: '';
        @include opacity(0);
        @include radius(15px);
        @include transition(0.2s);
        @include linear-gradient(#25cec7,#148ef1);
      }
      .li-box {
        z-index: 2;
        position: relative;
        width: 100%;
        height: 100%;
        padding: 30px 0;
        text-align: center;
        background-color: #fff;
        @include radius(10px);
        .ico {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          background-image: url("../common/images/menu-mini-ico.png");
          &.ico-01 {
            background-position: 0 -240px;
          }
          &.ico-02 {
            background-position: 0 -120px;
          }
          &.ico-03 {
            background-position: 0 0;
          }
        }
        .title {
          line-height: 3;
          font-size: 30px;
          font-weight: 600;
          @include theme_font(neutral-title);
        }
        .msg {
          padding: 0 20px;
          text-align: left;
          @include lines(2);
        }
        .dot {
          position: absolute;
          bottom: -20px;
          left: 50%;
          margin-left: -20px;
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #fff;
          @include transition(0.2s);
          @include radius(100px);
          @include theme_bg(primary);
          i {
            font-size: 24px;
          }
        }
      }
      &:hover:before {
        @include opacity(1);
      }
      &:hover .li-box .dot {
        @include rotate(180deg);
      }
    }
  }
}
</style>