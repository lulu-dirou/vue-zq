<template>
  <div class="zchb flex">
    <div class="left-box">
      <div class="list-box">
        <div class="screening clear">
          <div class="left"><span class="shaixuan" @click="dialogVisible = true"><i class="iconfont icon-shaixuan"></i> 智能筛选</span></div>
          <!--  -->
          <el-dialog
            :visible.sync="dialogVisible"
            width="800px" class="dialogScreening">
            <the-dialog-screening></the-dialog-screening>
          </el-dialog>
          <!--  -->
          <div class="right">
            <span>5-10万</span>
            <span>金融产业</span>
            <span>园区企业</span>
          </div>
        </div>
        <list-zc :paginationShow="true" :popIds="ids"></list-zc>
      </div>
    </div>
    <div class="right-box">
<!--       <div class="screening">
        <button class="btn-danger"><i class="iconfont icon-shaixuan"></i>智能筛选</button>
      </div> -->
      <div class="nav">
        <div class="title"><span>综合类</span></div>
        <ul class="flex">
          <li @click="jump('fe5ac768714b45faaa90f79ae0297b11')"><i class="iconfont icon-info"></i><span>促投资</span></li>
          <li @click="jump('4d78f8e6994a486981338da601384998')" class="active"><i class="iconfont icon-notifications"></i><span>助融资</span></li>
          <li @click="jump('8160ff0c0a354c72a4718eef3a2e5c32')"><i class="iconfont icon-user"></i><span>引人才</span></li>
          <li @click="jump('0619c5b14e144e61b7635ee65e12fc14')"><i class="iconfont icon-hot"></i><span>促创新</span></li>
          <li @click="jump('9dbeb07c5d4f4176a410f24b9a9045e2')"><i class="iconfont icon-crown"></i><span>建品牌</span></li>
          <li @click="jump('3827b8d067d54e2cb7f8db615f68905c')"><i class="iconfont icon-repeat-"></i><span>降成本</span></li>
          <li @click="jump('6d8fa80fd308440eaa880044566e4cec')"><i class="iconfont icon-fb-messenger"></i><span>扶成长</span></li>
          <li @click="jump('4a7730d35ded4d9f9620c5962bd73afd')"><i class="iconfont icon-route"></i><span>鼓励园区发展</span></li>
        </ul>
      </div>
      <div class="nav">
        <div class="title"><span>产业类</span></div>
        <ul class="flex">
          <li @click="jump('aeb977fa85834ca591419dbe90660686')"><i class="iconfont icon-chart"></i><span>金融产业</span></li>
          <li @click="jump('b826e2ce62ea4f8d884ba77850266201')"><i class="iconfont icon-user"></i><span>服务业</span></li>
          <li @click="jump('aeb977fa85834ca591419dbe90660686')"><i class="iconfont icon-office-box"></i><span>制造业</span></li>
          <li @click="jump('aeb977fa85834ca591419dbe90660686')"><i class="iconfont icon-monitor"></i><span>电子商务</span></li>
          <li @click="jump('aeb977fa85834ca591419dbe90660686')"><i class="iconfont icon-globe"></i><span>文旅产业</span></li>
          <li @click="jump('8b370fa9c5284b0b83f1e0525ddcf170')"><i class="iconfont icon-delivery"></i><span>物流产业</span></li>
          <li @click="jump('d7a272b248cf475d831d0fc99ee1b9ce')"><i class="iconfont icon-lamp"></i><span>生命健康</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import ListZc from '../../../../components/ListZc'
import TheDialogScreening from '../../../../components/TheDialogScreening'

export default {
  components: {
    'list-zc': ListZc,
    'the-dialog-screening': TheDialogScreening,
  },
  props: {

  },
  data: function() {
    return {
      dialogVisible: false,
      ids: ''
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    jump: function(val){
      this.ids = val
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.zchb {
  .screening {
    padding: 20px;
    margin-bottom: 10px;
    background-color: #fff;
    border-top: 2px solid #e1e1e1;
    @include theme_bd(danger);
    .left {
      float: left;
      span {
        margin-left: 0;
      }
    }
    .right {
      float: right;
    }
    span {
      display: inline-block;
      padding: 5px 10px;
      margin-left: 5px;
      border: 1px solid #e1e1e1;
      @include theme_font(danger);
      @include theme_bd(danger);
      &.shaixuan {
        cursor: pointer;
        color: #fff;
        @include theme_bg(danger);
      }
    }
  }
}
</style>