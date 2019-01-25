<template>
  <div class="detail detail-policy clear">
    <div class="maskbg"></div>
    <div class="detail-box">
      <div class="navBar">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/policy' }">政策</el-breadcrumb-item>
          <el-breadcrumb-item>政策汇编</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content-box" v-loading="loading">
        <div class="title">{{ $common.html_decode(results.bt) }}</div>
        <div class="msg-box">
          <div class="state flex-middle">
            <div class="left">
              <span class="time"><i class="iconfont icon-timer"></i> 出台时间：{{ results.fbsj }}</span>
            </div>
            <div class="right"><button class="sc btn btn-primary-sec hover focus"><i class="iconfont icon-like-heart"></i>收藏</button></div>
          </div>
          <div class="label">标签：
            <span class="lab lab-xs lab-dark" 
              v-for="(bdlist,index) in bdlists"
              v-bind:key="bdlist.id" >{{ bdlists[index] }}</span>
          </div>
        </div>
        <div class="content">
          <table class="tc tc-f tc-b tc-pdt20 tc-pdl20">
            <tbody>
              <tr>
                <th id="floor0" style="width: 250px;">基本信息</th>
                <td><span class="lab lab-sm lab-primary">责任部门：{{ results.fwdw }}</span></td>
              </tr>
              <tr>
                <th id="floor1">扶持对象</th>
                <td v-html="$common.html_decode(results.fcdx)"></td>
              </tr>
              <tr>
                <th id="floor2">申报条件</th>
                <td v-html="$common.html_decode(results.sbtj)"></td>
              </tr>
              <tr>
                <th id="floor3">扶持标准</th>
                <td v-html="$common.html_decode(results.fcbz)"></td>
              </tr>
              <tr>
                <th id="floor4">办理流程</th>
                <td v-html="$common.html_decode(results.sblc)"></td>
              </tr>
              <tr>
                <th id="floor5">材料递交要求</th>
                <td v-html="$common.html_decode(results.clsjyq)"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="toMore">
          <el-tabs v-model="toMoreActiveName" class="tabs">
            <el-tab-pane label="相关政策" name="0">
              <list-my-zc></list-my-zc>
            </el-tab-pane>
            <el-tab-pane label="申报通知" name="1">
              <list-my-sb></list-my-sb>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <the-toolbar></the-toolbar>
  </div>
</template>


<script>
import TheToolbar from '../../../../components/TheToolbar'
import ListMyZc from '../../../../components/ListMyZc'
import ListMySb from '../../../../components/ListMySb'

export default {
  components: {
    'the-toolbar': TheToolbar,
    'list-my-zc': ListMyZc,
    'list-my-sb': ListMySb,
  },
  props: {
  },
  data: function() {
    return {
      loading: true,
      results: {
        bt: '',
        fcdx: '',
        sbtj: '',
        sblc: '',
        fcbz: '',
        clsjyq: '',
      },
      bdlists: [],
      reset_Zczt: '',
      toMoreActiveName: '0',
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    //获取接口
    getApi: function(){
      var newId = this.$route.query.id;
      this.$http.post(this.$url.zcfw.getZcfw,{
        zcid: newId
      }).then((res) => {
        this.loading = false
        this.results = res.data.body.data
        this.bdlists = res.data.body.bqList
      })
    },
  },
  created: function(){
    window.scrollTo(0,0)
    this.getApi()
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.detail-policy {
  table {
    th {
      font-size: $font-size-df;
    }
  }
  .label {
    padding: 10px;
    border: 1px solid #e1e1e1;
    @include theme_bd(neutral-border);
    span {
      margin-right: 5px;
      margin-bottom: 5px;
      font-weight: 600;
    }
  }
  .sc {
    @include radius(1000px);
    @include theme_shadow(primary-sec,0,5px,20px,0,0.6);
  }
}
</style>