<template>
  <div class="detail detail_sb clear">
    <div class="detail-box">
      <div class="navBar">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/policy' }">政策</el-breadcrumb-item>
          <el-breadcrumb-item>申报政策</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content-box" v-loading="loading">
        <div class="title">{{ results.name }}</div>
        <div class="msg-box">
          <div class="state flex-middle">
            <div class="title-max">
              <span class="pt">
                <em class="font-lgm font-danger">{{ moneyState() }}</em>，剩余
                <em class="font-danger">{{ dayState() }}</em>天
              </span></div>
            <div class="sc">
              <button class="btn" :class="btnState">{{ btnStateMsg }}</button>
              <el-button class="sc" type="info" icon="iconfont icon-like-heart" size="small" round>收藏</el-button>
            </div>
          </div>
          <table class="tc tc-f tc-b tc-pdt5 tc-pdl10">
            <tbody>
              <tr>
                <td style="width: 160px;">申报时间：</td>
                <td>{{ results.startDate }} 至 {{ results.endDate }}</td>
              </tr>
              <tr>
                <td>扶持形式：</td>
                <td>{{ results.support_type }}</td>
              </tr>
              <tr>
                <td>支持方式：</td>
                <td>{{ results.request_type }}</td>
              </tr>
              <tr>
                <td>主管部门：</td>
                <td>{{ results.govname }}</td>
              </tr>
              <tr>
                <td>联系人员：</td>
                <td>{{ results.contact }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="content">
           <el-tabs v-model="activeName" class="tabs">
              <el-tab-pane label="项目介绍" name="0">
                <h3 class="font-neutral-title">项目描述：</h3>
                <p v-html="results.description"></p></br>
                <h3 class="font-neutral-title">申报单位要求：</h3>
                <p v-html="results.unit_needs"></p></br>
                <h3 class="font-neutral-title">项目申报要求：</h3>
                <p v-html="results.request_needs"></p>
              </el-tab-pane>
              <el-tab-pane label="政策文件" name="1">
                暂无相关政策文件
              </el-tab-pane>
            </el-tabs>
        </div>
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
      loading: true,
      results: [],
      activeName: 0,
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getApi: function(){
      var newId = this.$route.query.id;
      this.$http.post(this.$url.sbfw.sbztmx,{
        id: newId
      }).then((res) => {
        this.results = res.data.body.list[0]
        this.loading = false
      })
    },
    dayState: function(){
      let endTime = this.$common.date_de(this.results.endDate)
      let curTime = this.results.dqsj
      if(endTime>curTime){
        this.btnState = 'btn-warning'
        this.btnStateMsg = '申报中'
        return parseInt((Math.abs(endTime - curTime)) / 3600 / 24 / 1000)
      }else{
        this.btnState = 'btn-disabled'
        this.btnStateMsg = '已结束'
        return 0
      }
    },
    moneyState: function(){
      if(this.results.moneyMin == this.results.moneyMax){
        return '资金支持'
      }else{
        return this.results.moneyMin+'万-'+this.results.moneyMax+'万'
      }
    }
  },
  created: function(){
    this.getApi()
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.detail_dm {
  .content {
    p {
      text-align: center;
    }
  }
}
</style>