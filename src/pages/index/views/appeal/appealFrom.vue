<template>
  <div class="single appealFrom clear">
    <div class="navBar">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/appeal' }">诉求</el-breadcrumb-item>
        <el-breadcrumb-item>我要诉求</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--  -->
    <div class="single-box clear">
      <div class="title-box"><div class="title"><span><i class="iconfont icon-edit"></i><em>我要诉求</em></span></div></div>
      <div class="msg-box">
        <!-- el-form -->
        <el-form :model="ruleForm" status-icon :rules="rules" hide-required-asterisk ref="ruleForm" label-width="150px" label-position=left>
          <!------------------------------------------------------------->
          <el-form-item label="诉求类型" prop="sqlx">
            <el-select v-model="ruleForm.sqlx" placeholder="请选择诉求类型" >
              <el-option label="税赋诉求" value="280631c7f0d84ad6b82c58cb2d1e6b4c"></el-option>
              <el-option label="融资诉求" value="d9c2d87c72794a7cb62fab7737eae76a"></el-option>
              <el-option label="用地诉求" value="ae7d5fd3411443558ddab7a7d9d6c3c4"></el-option>
              <el-option label="市场诉求" value="31abdee7c6dc4612855936a7b59642da"></el-option>
              <el-option label="人才诉求" value="d6ed0df40e0d4728bc0caba8b7c10151"></el-option>
              <el-option label="环保诉求" value="17aea9cda7ad4fa69d9a9c29d6d83124"></el-option>
              <el-option label="其他诉求" value="e4d72dab745f4fa6a1a076e4a7ae5dd3"></el-option>
              <el-option label="发展诉求" value="eea8d9958f8e40808483c40bb3f3b2ec"></el-option>
              <el-option label="交通诉求" value="1ba749fa00e9488cbd0262051df419c8"></el-option>
            </el-select>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="诉求标题" prop="title">
            <el-input v-model="ruleForm.title" autocomplete="off" placeholder="广东奥博信息产业股份有限公司的税赋诉求"></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label="诉求内容" prop="content">
            <el-input v-model="ruleForm.content" type="textarea" :rows="4" autocomplete="off"></el-input>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="5"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="info">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <!------------------------------------------------------------->
          <el-form-item label-width="0">
            <el-button class="submitBtn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
        sqlx: '',
        title: '',
        content: '',
      },
      rules: {
        sqlx: [
          { required: true, message: '请选择诉求类型', trigger: 'change' },
        ],
        title: [
          { required: true, message: '请输入诉求标题', trigger: 'blur' },
          { min: 1, max: 30, message: '标题字数1-30字之间', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入诉求内容', trigger: 'blur' },
        ],
      },
      fileList: [{
        name: 'aa1.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'aa2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
</style>