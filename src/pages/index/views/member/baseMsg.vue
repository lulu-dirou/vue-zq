<template>
  <div class="baseMsg">
    <div class="mySetting-title"><span>基本信息</span></div>
    <div class="mySetting-content">
      <table class="tc tc-f tc-b tc-pdt10 tc-pdl20" v-loading="loading">
        <tbody>
          <tr>
            <th style="width: 200px">统一社会信用代码</th>
            <td><span class="lab lab0-primary-sec">{{ list.tyshxydm }}</span></td>
          </tr>
          <tr>
            <th>组织机构代码</th>
            <td>{{ list.zzjgdm }}</td>
          </tr>
          <tr>
            <th>注册号</th>
            <td>{{ list.zch }}</td>
          </tr>
          <tr>
            <th>经营状态</th>
            <td></td>
          </tr>
          <tr>
            <th>经营地址</th>
            <td>{{ list.jydz }}</td>
          </tr>
          <tr>
            <th>公司类型</th>
            <td>{{ list.qylx }}</td>
          </tr>
          <tr>
            <th>成立日期</th>
            <td>{{ $common.date_en(list.clsj) }}</td>
          </tr>
          <tr>
            <th>法定代表人</th>
            <td>{{ list.frdb }}</td>
          </tr>
          <tr>
            <th>营业期限</th>
            <td></td>
          </tr>
          <tr>
            <th>注册资本</th>
            <td>{{ list.zczb }}万</td>
          </tr>
          <tr>
            <th>发照日期</th>
            <td>{{ $common.date_en(list.hzrq) }}</td>
          </tr>
          <tr>
            <th>登记机关</th>
            <td>{{ list.gxdw }}</td>
          </tr>
        </tbody>
      </table>
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