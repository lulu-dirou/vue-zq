<template>
  <header class="theHead">
    <div class="box clear">
      <div class="logo">
        <img src="../common/images/logo.png" alt="500*80">
      </div>
      <div class="gun">
        <the-home-gun></the-home-gun>
      </div>
      <div class="user" v-if="showMsg">
        <el-button type="warning" icon="el-icon-location-outline" round plain @click="ModelCtr">登录</el-button>
        <el-button round plain @click="ModelReg">注册</el-button>
      </div>
      <div class="user flex-middle" v-if="showMsged">
        <el-dropdown :hide-on-click="false" :show-timeout=0>
          <span class="el-dropdown-link flex-middle">
            <span class="img"><img v-bind:src="this.$store.state.Member.userImg"></span><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="userPop">
            <el-dropdown-item><span class="font-primary-light">{{ qymc }}</span></el-dropdown-item>
            <el-dropdown-item divided>
              <span class="color">
                <i class="iconfont icon-mouse"></i>
                <em 
                  v-for="(color,index) in colors" 
                  :key="color.id" 
                  @click="changeTheme (color) " 
                  class="" 
                  :class="[colorCur===index+1?'active':'',color===index+1?('color'+index):('')]"
                  ><b class="iconfont icon-dui"></b></em>
              </span>
            </el-dropdown-item>
            <el-dropdown-item ><router-link to="/member/baseMsg"><span><i class="iconfont icon-gear-settings"></i>个人中心</span></router-link></el-dropdown-item>
            <el-dropdown-item divided><span @click="logouted"><i class="iconfont icon-close-"></i>退出</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="phone">
        <el-popover
          placement="top-start"
          title="微信公众号"
          width="200"
          trigger="hover">
          <!-- <el-button  icon="" circle plain></el-button> -->
          <div class="ico" slot="reference"><i class="iconfont icon-QRCode"></i></div>
          <div>二维码</div>
        </el-popover>
      </div>
    </div>
  </header>
</template>


<script >
import TheHomeGun from './TheHomeGun.vue'

export default {
  components: {
    'the-home-gun': TheHomeGun,
  },
  data: function(){
    return {
      colors: [1,2,3,4],
      colorCur: 1,
      showMsg: true,
      showMsged: false,
    }
  },
  methods: {
    changeTheme: function(val) {
      var vals = val - 1
      if (vals==0) { vals = ''}
      window.document.documentElement.setAttribute('data-theme', 'theme'+vals)
      this.colorCur = val
    },
    ModelCtr: function(){
      this.$router.push({path:'/login'})
    },
    ModelReg: function(){
      this.$router.push({path:'/reg'})
    },
    logouted: function(){
      this.$confirm("<i class='el-alert__icon el-icon-warning font-warning'></i> 是否退出登录？", {
        dangerouslyUseHTMLString: true, //作为 HTML 片段处理
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.$store.commit('logout');
        this.$router.push("./home");
      }).catch(() => {
      })
    },
    msgChange: function(val){
      if(this.$store.state.Member.token) {
        this.showMsg = val;
        this.showMsged = true;
      }else {
        this.showMsg = true;
        this.showMsged = false;
      }
    }
  },
  computed: {
    token: function(){
      return this.$store.state.Member.token
    },
    qymc: function(){
      return this.$store.state.Member.user
    }
  },
  watch: {
    token(){
      if(this.token) {
        this.showMsg = false;
        this.showMsged = true;
      }else {
        this.showMsg = true;
        this.showMsged = false;
      }
    }
  },
  created: function(){
    this.msgChange();
  }
}
</script>


<style lang="scss" scoped>
.theHead {
  background-color: #fff;
  .box {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    .logo {
      float: left;
      font-size: 0;
      img {
        height: 80px;
      }
    }
    .gun {
      float: left;
      margin-top: 20px;
    }
    .phone {
      float: right;
      margin-right: 10px;
      margin-top: 20px;
      .ico {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #e1e1e1;
        @include radius(50%);
        @include theme_bd(neutral-border);
        .iconfont {
          font-size: 26px;
        }
      }
    }
    .user {
      float: right;
      margin-top: 20px;
      button {
        margin-left: 10px;
      }
      span {
        cursor: pointer;
      }
      em {
        margin: 0 10px;
        // color: #ccc;
      }
      .img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border: 1px solid #ccc;
        @include radius(100px);
        overflow: hidden;
        img {
          width: 40px;
          height: 40px;
        }
      }
      .set .router-link-active {
        font-weight: 600;
        @include theme_font(primary);
      }
    }
  }
}
.userPop {
  .el-dropdown-menu__item{
    font-size: $font-size-xs;
    span {
      display: flex;
      align-items: center;
      i {
        margin-right: 10px;
      }
    }
    .color {
      em {
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin: 5px 10px 5px 0;
        text-align: center;
        @include radius(20px);
        background-color: #e1e1e1;
        b {
          display: none;
        }
        &.color0{ background-color: map-get($theme, primary); }
        &.color1{ background-color: map-get($theme1, primary); }
        &.color2{ background-color: map-get($theme2, primary); }
        &.color3{ background-color: map-get($theme3, primary); }
        &.active {
          color: #fff;
          @include theme_bg(primary);
          b {
            display: block;
          }
        }
      }
    }
  }
}
</style>