<template>
  <div class="detail detail_dm clear">
    <div class="detail-box">
      <div class="navBar">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/policy' }">政策</el-breadcrumb-item>
          <el-breadcrumb-item>动漫图解</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content-box" v-loading="loading">
        <div class="title">{{ $common.html_decode(results.jdmc) }}</div>
        <div class="msg-box">
          <div class="state flex-middle">
            <div class="title-max">
              <span class="time">发布时间：{{ $common.time_slice(results.fbsj) }}</span>
              <span class="time">类型：{{ resultsFjList[0].ywlx }}</span>
            </div>
            <el-button class="sc flex-middle" type="info" icon="iconfont icon-like-heart" size="small" round>收藏</el-button>
          </div>
        </div>
        <div class="content">
          <p>
            <img :src="$common.api_baseUrl+resultsFjList[0].xdlj">
          </p>
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
      results: {
        jdmc: '',
        fbsj: ''
      },
      resultsFjList: [
        {
          xdlj: '',
          ywlx: ''
        }
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getApi: function(){
      var newId = this.$route.query.id;
      this.$http.post(this.$url.zcfw.getZbDetail,{
        jdid: newId
      }).then((res) => {
        this.loading = false
        this.results = res.data.body.data
        this.resultsFjList = res.data.body.fjList
      })
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