<template>
  <div class="child member">
    <div class="navBar">
      <div class="w-1200 flex">
        <i class="iconfont icon-periscope icohome"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/member' }">个人中心</el-breadcrumb-item>
        </el-breadcrumb>
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
            <li><router-link to="/member/push"><i class="iconfont icon-route"></i>推送</router-link></li>
            <li><router-link to="/member/fav"><i class="iconfont icon-like-heart"></i>收藏夹</router-link></li>
            <li><router-link to="/member/myLive"><i class="iconfont icon-zhibo1"></i>我的直播</router-link></li>
            <li><router-link to="/member/setting"><i class="iconfont icon-gear-settings"></i>个人设置</router-link></li>
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
.member {
  .left {
    flex: 0 0 300px;
    margin-right: 20px;
    .msg-box {
      flex-direction: column;
      padding: 20px;
      margin-bottom: 10px;
      background-color: #fff;
      .userImg {
        img {
          width: 120px;
          height: 120px;
          @include radius(50%);
        }
      }
    }
    nav {
      background-color: #fff;
      li {
        a {
          display: block;
          padding: 10px 30px;
          border-bottom: 1px solid #eee;
          @include theme_font(neutral-content);
          i {
            position: relative;
            top: -1px;
            margin-right: 20px;
            font-size: 20px;
            vertical-align: middle;
            @include theme_font(primary-light);
          }
          &.router-link-active {
            color: #fff;
            @include theme_bg(primary);
            i {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .right {
    flex: 1;
    padding: 40px;
    background-color: #fff;
  }
}
</style>