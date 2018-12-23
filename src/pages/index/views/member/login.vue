<template>
  <div class="reg clear">
    <!--  -->
    <div class="reg-box clear">
      <div class="reg-title"><span>用户登录</span></div>
      <div class="reg-area">
        <!-- el-form -->
        <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="150px" label-position=left class="reg-ruleForm" v-loading="loading">
          <!------------------------------------------------------------->
          <el-form-item label="用户名" prop="sjhm">
            <el-input v-model="ruleForm.sjhm" clearable></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" clearable></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="验证码">
            <el-col :span="17">
            <el-form-item prop="visitCode"><el-input v-model="ruleForm.visitCode" clearable></el-input></el-form-item>
            </el-col>
            <el-col :span="6" :offset="1">
            <el-form-item><el-button type="warning" plain>获取验证码</el-button></el-form-item></el-col>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label-width="0">
            <el-button class="submitBtn" type="primary" @click="getApi()">登录</el-button>
          </el-form-item>
          <!------------------------------------------------------------->

        </el-form>
        <!-- el-form end -->
        <div class="reg-msg flex"><span><router-link to="/reg">注册</router-link></span><span>忘记密码</span></div>
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
      ruleForm: {
        sjhm: '',
        pass: '',
        visitCode: ''
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
        sjhm: this.ruleForm.sjhm,
        mm: this.$md5(this.ruleForm.pass)
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


<style lang="scss">
.reg {
  .reg-box {
    width: 100%;
    margin: 30px auto 80px auto;
    .reg-title {
      height: 80px;
      line-height: 80px;
      font-size: 24px;
      border-bottom: 1px solid #e1e1e1;
      margin-bottom: 40px;
      @include theme_bd(neutral,0.6);
      @include theme_font(neutral-title);
      span {
        display: block;
        width: 600px;
        margin: 0 auto;
      }
    }
    .reg-area {
      width: 600px;
      margin: 0 auto;
      .el-form-item__label {
        font-size: $font-size-lgm;
      }
      button.submitBtn {
        width: 100%;
        padding: 14px 20px;
        font-size: $font-size-lg;
      }
      .reg-msg {
        justify-content: space-between;
        span,span a {
          border-bottom: 1px solid #e1e1e1;
          @include theme_bd(primary-light);
          @include theme_font(primary-light);
        }
      }
    }
  }
}
</style>