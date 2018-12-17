<template>
  <div class="reg clear">
    <!--  -->
    <div class="reg-box clear">
      <div class="reg-title"><span>用户登录</span></div>
      <div class="reg-area">
        <!-- el-form -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" label-position=left class="reg-ruleForm">
          <!------------------------------------------------------------->
          <el-form-item label="用户名" prop="jgdm">
            <el-input v-model="ruleForm.jgdm"></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="验证码">
            <el-col :span="17">
            <el-form-item prop="visitCode"><el-input v-model="ruleForm.visitCode"></el-input></el-form-item>
            </el-col>
            <el-col :span="6" :offset="1">
            <el-form-item><el-button type="warning" plain>获取验证码</el-button></el-form-item></el-col>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label-width="0">
            <el-button class="submitBtn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
      ruleForm: {
        jgdm: '',
        pass: '',
        visitCode: ''
      },
      rules: {
        jgdm: [
          { required: false, message: '没有用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: false, validator: this.validatePass, trigger: 'blur' },
          { min: 6, max: 10, message: '密码需要6-10位', trigger: 'blur' }
        ],
        visitCode: [
          { required: false, message: '请输入验证码', trigger: 'blur' },
        ],
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    validatePass: function(rule, value, callback){
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!登录成功');
          this.$router.push({path:'/home'})
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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