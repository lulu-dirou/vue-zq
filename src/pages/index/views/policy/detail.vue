<template>
  <div class="detail policy clear">
    <div class="detail-box">
      <div class="navBar">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/policy' }">政策</el-breadcrumb-item>
          <el-breadcrumb-item>政策汇编</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content-box" v-loading="loading">
        <div class="title">{{ reset_Zczt }}</div>
        <div class="msg-box">
          <div class="label">标签：
            <span 
              v-for="(bdlist,index) in bdlists"
              v-bind:key="bdlist.id" >{{ bdlists[index] }}</span>
          </div>
          <div class="state flex-middle">
            <div class="title-max">
              <span class="pt">政策来源：<em class="font-primary">{{ results.zcly }}</em></span>
              <span class="time">发布时间：{{ results.fbsj }}</span>
            </div>
            <el-button class="sc flex-middle" type="info" icon="iconfont icon-like-heart" size="small" round>收藏</el-button>
          </div>
        </div>
        <div class="content">
          <p v-html="results.zcbj"></p>
        </div>
      </div>
    </div>
    <the-toolbar></the-toolbar>
  </div>
</template>


<script>
import TheToolbar from '../../../../components/TheToolbar'

export default {
  components: {
    'the-toolbar': TheToolbar
  },
  props: {
  },
  data: function() {
    return {
      loading: true,
      results: [],
      bdlists: [],
      reset_Zczt: ''
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  created: function(){
    var newId = this.$route.query.id;
    this.$http.post(this.$url.zcfw.getZcfw,{
      zcid: newId
    }).then((res) => {
      this.loading = false
      this.results = res.data.body.data
      this.bdlists = res.data.body.bqList
      this.reset_Zczt = this.$common.html_decode(this.results.zczt)
    })
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
</style>