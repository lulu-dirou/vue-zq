<template>
  <div class="child reg clear">
    <div class="child-banner">
      <div class="maskbg"><img src="../../../../common/images/child-banner-reg.jpg"></div>
      <div class="w-1200">
        <div class="msg-box clear">
          <div class="title">登录</div>
          <div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>
        </div>
      </div>
    </div>


    <!--  -->
    <div class="reg-box clear">
      <el-tabs v-model="loginTab" class="tabs">
        <el-tab-pane label="企业登录" name="0">
          <!-- el-form -->
          <el-form :model="ruleForm1" status-icon ref="ruleForm1" label-width="150px" label-position=left class="reg-ruleForm" v-loading="loading">
          <!------------------------------------------------------------->
          <br/>
          <el-form-item label="用户名" prop="sjhm">
            <el-input v-model="ruleForm1.sjhm" prefix-icon="iconfont icon-user" clearable></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm1.pass" prefix-icon="iconfont icon-lamp" clearable></el-input>
          </el-form-item>
          <br/>
          <!------------------------------------------------------------->
          <el-form-item label-width="0">
            <button type="button" class="submitBtn btn btn-lg btn-primary block hover focus" @click="getApi()">登录</button>
          </el-form-item>
          <!------------------------------------------------------------->
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="人才登录" name="1">
          <el-tabs v-model="loginTabMini" class="tabsMini">
            <el-tab-pane label="短信验证码登陆" name="0">
              <!-- el-form -->
              <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="150px" label-position=left class="reg-ruleForm" v-loading="loading">
              <!------------------------------------------------------------->
              <el-form-item label="手机号码" prop="sjhm">
                <el-input v-model="ruleForm2.sjhm" prefix-icon="iconfont icon-user" clearable></el-input>
              </el-form-item>
              <!------------------------------------------------------------->
              <el-form-item label="验证码">
                <el-col :span="17">
                <el-form-item prop="visitCode"><el-input v-model="ruleForm2.visitCode" clearable></el-input></el-form-item>
                </el-col>
                <el-col :span="6" :offset="1"><button type="button" class="btn btn0-warning block hover focus">获取验证码</button></el-col>
              </el-form-item>
              <br/>
              <!------------------------------------------------------------->
              <el-form-item label-width="0">
                <button type="button" class="submitBtn btn btn-lg btn-primary block hover focus" @click="getApi()">登录</button>
              </el-form-item>
              <!------------------------------------------------------------->
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="密码登录" name="1">
              <!-- el-form -->
              <el-form :model="ruleForm3" status-icon ref="ruleForm3" label-width="150px" label-position=left class="reg-ruleForm" v-loading="loading">
              <!------------------------------------------------------------->
              <el-form-item label="手机号码" prop="sjhm">
                <el-input v-model="ruleForm3.sjhm" prefix-icon="iconfont icon-user" clearable></el-input>
              </el-form-item>
              <!------------------------------------------------------------->
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm3.pass" prefix-icon="iconfont icon-lamp" clearable></el-input>
              </el-form-item>
              <br/>
              <!------------------------------------------------------------->
              <el-form-item label-width="0">
                <button type="button" class="submitBtn btn btn-lg btn-primary block hover focus" @click="getApi()">登录</button>
              </el-form-item>
              <!------------------------------------------------------------->
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
      </el-tabs>
      <div class="reg-msg flex">
        <span><router-link to="/reg">注册</router-link></span>
        <span>忘记密码</span>
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
      loading: false,
      loginTab: '0',
      loginTabMini: '0',
      ruleForm1: {
        sjhm: '',
        pass: '',
        visitCode: ''
      },
      ruleForm2: {
        sjhm: '',
        visitCode: ''
      },
      ruleForm3: {
        sjhm: '',
        pass: '',
      },
      // rules: {
      //   jgdm: [
      //     { required: false, message: '没有用户名', trigger: 'blur' },
      //     { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
      //   ],
      //   pass: [
      //     { required: false, validator: this.validatePass, trigger: 'blur' },
      //     { min: 6, max: 10, message: '密码需要6-10位', trigger: 'blur' }
      //   ],
      //   visitCode: [
      //     { required: false, message: '请输入验证码', trigger: 'blur' },
      //   ],
      // }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // validatePass: function(rule, value, callback){
    //   if (value === '') {
    //     callback(new Error('请输入密码'));
    //   } else {
    //     callback();
    //   }
    // },
    //获取loginAPI
    getApi: function(){
      this.loading = true
      this.$http.post(this.$url.qyzcxx.login,{
        sjhm: this.ruleForm1.sjhm,
        mm: this.$md5(this.ruleForm1.pass)
      }).then((res) => {
        this.loading = false
        if(res.status===200){
          if(res.data.errorCode == 1){
            this.$common.elAlert("warning","登录失败！请输入账号密码")
          }else if(res.data.errorCode == 2){
            this.$common.elAlert("warning","用户不存在!")
          }else if(res.data.errorCode == 3){
            this.$common.elAlert("warning","密码错误!")
          }else if(res.data.errorCode == -1) {
            this.$store.commit('setToken', res.data.body.token);
            this.$store.commit('getUser', res.data.body.qyzcxx.qymc);
            this.getUserImgApi();
            // this.elAlert(" <i class='el-alert__icon el-icon-success font-success'></i> 登录成功！")
            this.$router.push("./home"); //跳转到路由指定页面
          }
        }
      })
    },
    //获取头像API放到getApi里面调用,注意设置图片请求类型arraybuffer
    getUserImgApi: function(){
      this.$http.post(this.$url.qyzcxx.getQytx,{
        token: this.$store.state.Member.token,
      },'arraybuffer').then((res) => {
        //图片流转码
        var src = 'data:image/png;base64,'+ btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        this.$store.commit('getUserImg', src)
      })
    },
    // 封装elAlert
    // elAlert: function(msg){
    //   this.$alert(String(msg), {
    //     closeOnClickModal: true, //是否可通过点击遮罩关闭 MessageBox
    //     dangerouslyUseHTMLString: true, //作为 HTML 片段处理
    //     showConfirmButton: false
    //   }).then(() => {
    //   }).catch(() => {
    //   })
    // }
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!登录成功');
    //       this.$router.push({path:'/home'})
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.reg {
  background-color: #fff;
  .reg-box {
    width: 100%;
    margin: 30px auto 80px auto;
    .tabs {
      /deep/ >.el-tabs__header {
        .el-tabs__nav-wrap::after {
          height: 1px;
          @include theme_bg(neutral-border);
        }
        .el-tabs__nav-scroll {
          width: 600px;
          margin: 0 auto;
        }
        .el-tabs__active-bar {
          height: 4px;
          @include theme_bg(primary-sec);
        }
        .el-tabs__item {
          height: 80px;
          line-height: 80px;
          font-size: $font-size-lgx;
        }
        .el-tabs__item:hover,.el-tabs__item.is-active {
          @include theme_font(primary-sec);
        }
      }
      /deep/ >.el-tabs__content {
        width: 640px;
        padding: 0 20px;
        margin: 0 auto;
        .el-form-item__label {
          font-size: $font-size-lgm;
        }
        .el-input__inner {
          font-weight: 600;
          font-family: initial;
          @include theme_font(neutral-title);
        }
        .el-input__icon {
          font-size: $font-size-lgx;
        }
      }
    }
    .tabsMini {
      /deep/ >.el-tabs__header {
        @include theme_bg(neutral-disabled,0.4);
        .el-tabs__nav-wrap::after {
          height: 1px;
          @include theme_bg(primary);
        }
        .el-tabs__nav {
          float: right;
        }
        .el-tabs__active-bar {
          display: none;
        }
        .el-tabs__item {
          padding: 0 20px;
          font-size: $font-size-xs;
        }
        .el-tabs__item:hover {
          color: #999;
        }
        .el-tabs__item.is-active {
          color: #fff;
          @include theme_bg(primary);
        }
      }
      /deep/ >.el-tabs__content {
        padding: 20px 0;
      }
    }
  }
  .reg-msg {
    width: 600px;
    margin: 0 auto;
    justify-content: space-between;
    span,span a {
      border-bottom: 1px solid #e1e1e1;
      @include theme_bd(primary-light);
      @include theme_font(primary-light);
    }
  }
}
</style>