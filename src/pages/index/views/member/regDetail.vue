<template>
  <div class="reg regDetail clear">
    <!--  -->
    <div class="reg-box clear">
      <div class="reg-title"><span>请完善企业资料</span></div>
      <div class="reg-area">
        <!-- el-form -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px" label-position=left class="reg-ruleForm">
          <!------------------------------------------------------------->
          <el-form-item label="企业名称" prop="qymc">
            <el-input v-model="ruleForm.qymc"></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="法人代表" prop="frdb">
            <el-input v-model="ruleForm.frdb"></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="组织机构代码(营业执照号)" prop="zzjgdm">
            <el-input v-model="ruleForm.zzjgdm"></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="营业执照" prop="fj">
            <el-button type="warning" plain>附件</el-button>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label-width="0">
            <el-button class="submitBtn" type="primary" @click="submitForm('ruleForm')">保存详细资料</el-button>
          </el-form-item>
          <!------------------------------------------------------------->
        </el-form>
        <!-- el-form end -->
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
        qymc: '',
        frdb: '',
        zzjgdm: '',
        email: '',
        fj: '',
      },
      rules: {
        email: [
          { required: false, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          this.$router.push({path:'/home'})
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
        span {
          border-bottom: 1px solid #e1e1e1;
          @include theme_bd(primary-light);
          @include theme_font(primary-light);
        }
      }
    }
  }
}
</style>