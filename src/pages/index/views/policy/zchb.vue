<template>
  <div class="zchb">
    <div class="w-1200">
    <div class="top-box">
<!--       <div class="screening">
        <button class="btn btn-lg btn-primary-sec hover"  @click="dialogVisible = true"><i class="iconfont icon-shaixuan"></i> 智能筛选</button>
      </div> -->
      <!--  -->
<!--       <el-dialog class="dialogScreening" :visible.sync="dialogVisible" width="800px">
        <the-dialog-screening></the-dialog-screening>
      </el-dialog> -->
      <!--  -->

      <!-- el-collapse -->
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title"><span class="iconfont icon-xialajiantou-down"></span></template>
          <nav class="topNav">
            <el-row :gutter="60">
<!--               <el-col :span="24" class="flex">
                <div class="title"></div>
                <ul class="clear">
                  <li 
                    :class="{active:changeNum==-1}" 
                    @click="changeActive('',-1)">
                    <i v-if="changeNum==-1" class="iconfont icon-dui"></i>
                    <span>全部</span>
                  </li>
                </ul>
              </el-col> -->
              <el-col :span="24" class="flex">
                <div class="title"><span>综合类</span></div>
                <ul class="clear">
                  <li 
                    v-for="(list,index) in navlist1" 
                    :key="list.id" 
                    :class="{active:index==changeNum}" 
                    @click="changeActive(list.id,index)">
                    <i v-if="index==changeNum" class="iconfont icon-dui"></i>
                    <span>{{ list.name }}</span>
                  </li>
                </ul>
              </el-col>
              <el-col :span="24" class="flex">
                <div class="title"><span>产业类</span></div>
                <ul class="clear">
                  <li 
                    v-for="(list,index) in navlist2" 
                    :key="list.id" 
                    :class="{active:(index+navlist1)==changeNum}" 
                    @click="changeActive(list.id,index+navlist1)">
                    <i v-if="(index+navlist1)==changeNum" class="iconfont icon-dui"></i>
                    <span>{{ list.name }}</span>
                  </li>
                </ul>
              </el-col>
            </el-row>
          </nav>
        </el-collapse-item>
      </el-collapse>
      <!-- el-collapse end -->



    </div>
    <div class="bottom-box">
        <list-zc :popIds="ListIds" ref="ListRef" :paginationShow="true"></list-zc>
    </div>
    </div>
  </div>
</template>


<script>
import ListZc from '../../../../components/ListZc'
// import TheDialogScreening from '../../../../components/TheDialogScreening'

export default {
  components: {
    'list-zc': ListZc,
    // 'the-dialog-screening': TheDialogScreening,
  },
  props: {

  },
  data: function() {
    return {
      activeNames: ['1'],
      changeNum: '-1',
      // dialogVisible: false,
      ListIds: '',
      navlist1: [
        {name: '促投资',id: 'f656d7259661486d933999c1a314d564'},
        {name: '助融资',id: '32b844d0b1754087868aa277da80e613'},
        {name: '引人才',id: '3470e8bd069a4fba8bd5689a24b21b9e'},
        {name: '促创新',id: '46eadcc59bd3475f8f9fd726ba5c675b'},
        {name: '建品牌',id: '9e56188591dd44628caeb9ad79c91239'},
        {name: '降成本',id: 'af1d4548e26a4e8f8aaad7b8dc4e3bbf'},
        {name: '扶成长',id: '2600b3682ee840c68e818e8c912a60ab'},
        {name: '鼓励园区发展',id: '9c6968b96d9a4419a4e010bba50e97bf'},
      ],
      navlist2: [
        {name: '金融产业',id: 'aeb977fa85834ca591419dbe90660686'},
        {name: '服务业',id: 'b826e2ce62ea4f8d884ba77850266201'},
        {name: '制造业',id: 'cc81ff20799b404097bf051704a567c4'},
        {name: '电子商务',id: '0cdc0c809e6d4ea38b62b88fb2ed69c5'},
        {name: '文旅产业',id: '513e55d71af34c60b5cbd72840619e97'},
        {name: '物流产业',id: '8b370fa9c5284b0b83f1e0525ddcf170'},
        {name: '生命健康',id: 'd7a272b248cf475d831d0fc99ee1b9ce'},
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    // @企业标签,@下标
    changeActive: function(idsVal,index){
      if(index == this.changeNum){
        this.changeNum = -1
        this.ListIds = ''
        this.$refs.ListRef.getApi('',1)
      }else{
        this.changeNum = index
        this.ListIds = idsVal
        this.$refs.ListRef.getApi(idsVal,1)
      }
    },
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.zchb {
  // background-color: #fff;
  .top-box {
    position: relative;
    // .screening {
    //   z-index: 3;
    //   position: absolute;
    //   right: 0;
    //   top: -90px;
    //   button {
    //     width: 210px;
    //     height: 60px;
    //     padding: 0;
    //     @include radius(1000px);
    //     @include theme_shadow(primary-sec,0,5px,20px,0,0.5);
    //   }
    // }
    /deep/ .el-collapse {
      border: 0;
      .el-collapse-item {
        .el-collapse-item__header {
          display: block;
          position: absolute;
          top: 0;
          left: 50%;
          margin-left: -50px;
          width: 100px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          border-bottom: 0;
          @include theme_font(neutral);
          @include theme_bg(neutral-disabled);
          span {
            display:block;
            @include transition(0.2s);
          }
          .el-collapse-item__arrow {
            display: none;
          }
          &.is-active {
            span {
              @include rotate(-180deg);
            }
          }
        }
        .el-collapse-item__wrap {
          border-bottom: 0;
          .el-collapse-item__content {
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
</style>