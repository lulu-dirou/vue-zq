<template>
  <div class="setting">
    <div class="mySetting-title"><span>企业设置</span></div>
    <!-- el-form -->
        <el-form :model="settingFrom" status-icon ref="settingFrom" label-width="200px" class="settingFrom">
          <!------------------------------------------------------------->
          <el-form-item label="企业标志：" prop="qymc">
<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
          </el-form-item>
          <p>&nbsp;</p>
          <!------------------------------------------------------------->
          <el-form-item label="企业地址：" prop="qymc">
            <el-input></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="经营范围：" prop="frdb">
            <el-input></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="注册资本：" prop="zczb">
            <el-select v-model="zczbValue" placeholder="请选择">
              <el-option
                v-for="zczb in zczbs"
                :key="zczb.value"
                :label="zczb.label"
                :value="zczb.value">
              </el-option>
            </el-select>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="从业人数：" prop="email">
            <el-select v-model="cyrsValue" placeholder="请选择">
              <el-option
                v-for="cyrs in cyrss"
                :key="cyrs.value"
                :label="cyrs.label"
                :value="cyrs.value">
              </el-option>
            </el-select>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="经营面积：" prop="email">
            <el-select v-model="jymjValue" placeholder="请选择">
              <el-option
                v-for="jymj in jymjs"
                :key="jymj.value"
                :label="jymj.label"
                :value="jymj.value">
              </el-option>
            </el-select>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="成立时间：" prop="email">
            <el-date-picker
              v-model="timeValue"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="企业标签：" prop="email">
            <el-button type="success" size="mini">+ 增加标签</el-button>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容">
            </el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="营业执照：" prop="fj">
            <el-button type="success"  size="mini">附件</el-button>
          </el-form-item>
          <!------------------------------------------------------------->
          <p>&nbsp;</p>
          <el-form-item>
            <el-button class="submitBtn" type="primary">保存设置</el-button>
          </el-form-item>
          <!------------------------------------------------------------->
        </el-form>
        <!-- el-form end -->
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
      settingFrom: {
      },
      zczbs: [{
        value: '10',
        label: '10万人民币'
        }, {
        value: '100',
        label: '100万人民币'
      }],
      zczbValue: '请选择',
      cyrss: [{
        value: '100',
        label: '100人'
        }, {
        value: '200',
        label: '100人-200人'
      }],
      cyrsValue: '请选择',
      jymjs: [{
        value: '100',
        label: '100平方以上'
        }, {
        value: '1000',
        label: '1000平方以上'
      }],
      jymjValue: '请选择',
      timeValue: '',
      imageUrl: '',
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.setting {
  .settingFrom {
    width: 500px;
    .el-form-item {
      margin-bottom: 10px;
    }
    /deep/ .el-input__inner {
      @include theme_bd(neutral,0.3);
    }
    /deep/ .avatar-uploader {
      .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        @include theme_bd(neutral-border);
        &:hover {
          @include theme_bd(primary);
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 178px;
          height: 178px;
          line-height: 178px;
          text-align: center;
          @include theme_font(primary);
        }
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
  }
}
</style>