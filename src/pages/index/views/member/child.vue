<template>
  <div class="child child-member">
    <div class="child-banner">
      <div class="maskbg"><img src="../../../../common/images/child-banner-setting.jpg"></div>
      <div class="w-1200">
        <div class="msg-box clear">
          <div class="title">个人中心</div>
          <div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>
        </div>
      </div>
    </div>
    <div class="child-box w-1200 flex">
      <div class="left">
        <div class="msg-box flex-middle">
          <span class="userImg"><img v-bind:src="$store.state.Member.userImg"></span>
          <span class="userName">{{ $store.state.Member.user }}</span>
        </div>
        <nav>
          <ul>
            <li><router-link to="/member/baseMsg"><i class="iconfont icon-user"></i>基本信息</router-link></li>
            <li><router-link to="/member/push"><i class="iconfont icon-route"></i>我的推送</router-link></li>
            <li><router-link to="/member/fav"><i class="iconfont icon-like-heart"></i>我的收藏</router-link></li>
            <li><router-link to="/member/myLive"><i class="iconfont icon-zhibo1"></i>我的直播</router-link></li>
            <li><router-link to="/member/setting"><i class="iconfont icon-gear-settings"></i>设置</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="right">
        <router-view></router-view> 
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
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.child-member {
  .left {
    flex: 0 0 215px;
    margin-right: 20px;
    background-color: #fff;
    .msg-box {
      flex-direction: column;
      padding: 30px;
      border-bottom: 1px solid #eee;
      @include theme_bd(neutral-divider);
      .userImg {
        margin-bottom: 10px;
        img {
          width: 100px;
          height: 100px;
          @include radius(50%);
        }
      }
      .userName {
        text-align: center;
      }
    }
    nav {
      padding: 30px 0;
      li {
        a {
          position: relative;
          display: block;
          padding: 5px 30px;
          margin: 15px 0;
          &:before {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 5px;
            content: '';
            @include theme_shadow(primary,5px,0,10px,0,0.2);
            @include theme_bg(primary);
            @include opacity(0);
            @include transition(0.2s);
          }
          i {
            position: relative;
            top: -1px;
            margin-right: 20px;
            font-size: 20px;
            vertical-align: middle;
          }
          &:hover,&.router-link-active {
            @include theme_font(primary);
            &:before {
              @include opacity(1);
            }
          }
        }
      }
    }
  }
  .right {
    flex: 1;
    background-color: #fff;
  }
}
</style>