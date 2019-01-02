<template>
  <div class="baseMsg">
    <div class="mySetting-title"><span>基本信息</span></div>
    <table class="tc tc-f tc-bb tc-pdt10" v-loading="loading">
      <tbody>
        <tr>
          <td style="width: 200px">统一社会信用代码</td>
          <td><span class="btn btn0-danger">{{ list.tyshxydm }}</span></td>
        </tr>
        <tr>
          <td>组织机构代码</td>
          <td>{{ list.zzjgdm }}</td>
        </tr>
        <tr>
          <td>注册号</td>
          <td>{{ list.zch }}</td>
        </tr>
        <tr>
          <td>经营状态</td>
          <td></td>
        </tr>
        <tr>
          <td>经营地址</td>
          <td>{{ list.jydz }}</td>
        </tr>
        <tr>
          <td>公司类型</td>
          <td>{{ list.qylx }}</td>
        </tr>
        <tr>
          <td>成立日期</td>
          <td>{{ $common.date_en(list.clsj) }}</td>
        </tr>
        <tr>
          <td>法定代表人</td>
          <td>{{ list.frdb }}</td>
        </tr>
        <tr>
          <td>营业期限</td>
          <td></td>
        </tr>
        <tr>
          <td>注册资本</td>
          <td>{{ list.zczb }}万</td>
        </tr>
        <tr>
          <td>发照日期</td>
          <td>{{ $common.date_en(list.hzrq) }}</td>
        </tr>
        <tr>
          <td>登记机关</td>
          <td>{{ list.gxdw }}</td>
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
      loading: true,
      list: {
        clsj: '',
        hzrq: '',
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getApi: function() {
      this.$http.post(this.$url.qyzcxx.getQyxxzl,{
        token: this.$store.state.Member.token
      }).then((res) => {
        this.list = res.data.body.data
        this.loading = false
      })
    },
  },
  created: function(){
    this.getApi()
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
</style>