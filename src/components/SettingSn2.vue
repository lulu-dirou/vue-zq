'<template>
  <div class="setting-sn2">

    <!------------------------------------------------------------------------------------------- 子账号 -->
    <el-dialog class="dialogZZH" :visible.sync="dialogVisible" width="500px">
      <div slot="title"><span class="iconfont icon-xialajiantou-down"></span> {{ title }}</div>
      <div class="content">
        <el-form :model="postFrom" ref="postFrom" :rules="rules" label-width="100px" class="postFrom">
          <el-form-item label="姓名：" prop="name"><el-input v-model="postFrom.name" clearable></el-input></el-form-item>
          <el-form-item label="部门：" prop="bm"><el-input v-model="postFrom.bm" clearable></el-input></el-form-item>
          <el-form-item label="岗位：" prop="gw"><el-input v-model="postFrom.gw" clearable></el-input></el-form-item>
          <el-form-item label="手机号码：" prop="phone"><el-input v-model="postFrom.phone" clearable></el-input></el-form-item>
          <el-form-item label="登录密码：" prop="pw"><el-input v-model="postFrom.pw" type="password" clearable></el-input></el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <button class="btn btn0-disabled hover focus" @click="close('postFrom')">取消</button>
        <button class="btn btn-primary hover focus" @click="handleList('postFrom')">提交</button>
      </div>
    </el-dialog>
    <!------------------------------------------------------------------------------------------- end -->

    <div class="header">
      <button @click="addList()" type="button" class="btn btn-primary-sec hover"><i class="iconfont icon-add"></i>&nbsp;&nbsp;增加&nbsp;&nbsp;</button>
    </div>
    <table class="tc tc-f tc-b tc-pdt8 tc-pdl8 tc-sd-x">
      <thead>
        <tr>
          <th style="width: 5%">#</th>
          <th>姓名</th>
          <th style="width: 20%">部门</th>
          <th style="width: 20%">岗位</th>
          <th style="width: 20%">电话</th>
          <th style="width: 20%">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!lists.length">
          <td colspan="6">暂无子账号!</td>
        </tr>
        <tr v-for="(list,index) in lists" :key="list.index">
          <td>{{ index+1 }}</td>
          <td>{{ list.name }}</td>
          <td>{{ list.bm }}</td>
          <td>{{ list.gw }}</td>
          <td>{{ list.phone }}</td>
          <td>
            <button @click="editList(index)" type="button" class="btn btn-sm btn0-primary hover focus">修改</button>&nbsp;
            <button @click="delList(index)" type="button" class="btn btn-sm btn0-disabled hover focus">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
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
      title: '',
      dialogVisible: false,
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' }
        ],
        pw: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '密码需要6-10位', trigger: 'blur' }
        ],
      },
      postFrom: {
        name:'',
        bm:'',
        gw:'',
        phone:'',
        pw:'',
      },
      lists: [
        {
          name:'张三',
          bm:'开发',
          gw:'美工',
          phone:'1391111',
          pw:'123456',
        },
        {
          name:'李四',
          bm:'营销',
          gw:'总监',
          phone:'138',
          pw:'123456',
        },
      ],
      selected : -1,
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    addList: function(){
      this.title = '增加子账号'
      this.dialogVisible = true
      this.selected = -1
      this.postFrom = {}
    },
    editList: function(index){
      this.title = '修改子账号'
      this.dialogVisible = true
      this.selected = index
      console.log(this.selected)
      // this.postFrom = this.lists[index]
      this.postFrom = JSON.parse( JSON.stringify(this.lists[index]) )
    },
    handleList: function(formName){
      let a = {
        name: this.postFrom.name,
        bm: this.postFrom.bm,
        gw: this.postFrom.gw,
        phone: this.postFrom.phone,
        pw: this.postFrom.pw,
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 
          if(this.selected > -1){
            this.lists.splice(this.selected,1,a)
            this.selected = -1
          }else {
            this.lists.push(a)
          }
          this.selected = -1;
          this.dialogVisible=false
          this.$refs[formName].resetFields()
          // 
        } else {
          return false;
        }
      });
    },
    delList: function(index){
      this.$confirm("<i class='el-alert__icon el-icon-warning font-warning'></i> 是否要删除当前子账号！", {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.lists.splice(index,1)
        console.log(this.lists)
      }).catch(() => {
      })
    },
    close(formName) {
      this.$refs[formName].resetFields()
      this.postFrom = {}
      this.dialogVisible=false
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.setting-sn2 {
  .header {
    margin-bottom: 10px;
    text-align: right;
  }
  table {
    th {
      text-align: left;
    }
  }
}
</style>