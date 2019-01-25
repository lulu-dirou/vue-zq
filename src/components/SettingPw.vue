<template>
  <div class="setting-pw">
    <el-form :model="postFrom" status-icon ref="postFrom" label-width="200px" class="postFrom">
      <el-form-item label="手机号码：">139****8888</el-form-item>
      <el-form-item label="验证码：">
        <el-row>
          <el-col :span="17"><el-input></el-input></el-col>
          <el-col :span="6" :offset="1"><button type="button" class="btn btn0-primary-sec block hover">获取验证码</button></el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="原始密码："><el-input type="password"></el-input></el-form-item>
      <el-form-item label="新密码："><el-input type="password"></el-input></el-form-item>
      <el-form-item label="再次输入新密码："><el-input type="password"></el-input></el-form-item>
      <el-form-item><button class="btn btn-lg btn-primary hover focus">&nbsp;&nbsp;&nbsp;保存修改&nbsp;&nbsp;&nbsp;</button></el-form-item>
    </el-form>
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
      postFrom: {},
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
</style>