<template>
  <div class="zchb flex">
    <div class="left-box">
      <div class="list-box">
        <list-zc></list-zc>
      </div>
    </div>
    <div class="right-box">
      <div class="nav">
        <div class="title"><span>综合类</span></div>
        <ul class="flex">
          <li><i class="iconfont icon-info"></i><span>促投资</span></li>
          <li class="active"><i class="iconfont icon-notifications"></i><span>助融资</span></li>
          <li><i class="iconfont icon-user"></i><span>引人才</span></li>
          <li><i class="iconfont icon-hot"></i><span>促创新</span></li>
          <li><i class="iconfont icon-crown"></i><span>建品牌</span></li>
          <li><i class="iconfont icon-repeat-"></i><span>降产品</span></li>
          <li><i class="iconfont icon-fb-messenger"></i><span>扶成长</span></li>
          <li><i class="iconfont icon-route"></i><span>鼓励园区发展</span></li>
        </ul>
      </div>
      <div class="nav">
        <div class="title"><span>产业类</span></div>
        <ul class="flex">
          <li><i class="iconfont icon-chart"></i><span>金融产业</span></li>
          <li><i class="iconfont icon-user"></i><span>服务业</span></li>
          <li><i class="iconfont icon-office-box"></i><span>制造业</span></li>
          <li><i class="iconfont icon-monitor"></i><span>电子商务</span></li>
          <li><i class="iconfont icon-globe"></i><span>文旅产业</span></li>
          <li><i class="iconfont icon-delivery"></i><span>物流产业</span></li>
          <li><i class="iconfont icon-lamp"></i><span>生命健康</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import ListZc from '../../../../components/ListZc'

export default {
  components: {
    'list-zc': ListZc
  },
  props: {
  },
  data: function() {
    return {
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