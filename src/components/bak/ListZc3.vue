<template>
  <div class="listZc" v-loading="loading">
    <el-row :gutter="30">
      <el-col :span="8" v-for="(list,index) in filterLists" :key="list.id">
        <div class="li-box">
          <div class="t">
            <div class="time"><span>{{ list.ctsj }}</span></div>
            <div class="title-max"><span class="lab lab-sm lab-primary"><i class="iconfont icon-wenben"></i> {{ list.fwdw}}</span></div>
          </div>
          <div class="c">
            <!-- <div class="title-max"><span>{{ list.fwdw}}</span></div> -->
            <div class="title"><span>{{ $common.html_decode(list.bt) }}</span></div>
            <div class="lable"><span class="lab lab-sm lab1-primary" v-for="bq in bqs(index)" :key="bq.id">{{ bq.name }}</span></div>
          </div>
          <div class="b flex">
            <span title="阅读量" class="rd"><i class="iconfont icon-hot"></i>{{ list.djl }}</span>
            <span title="收藏" class="sc"><i class="iconfont icon-like-heart"></i></span>
            <!-- <div class="rd" title="阅读量"></div> -->
            <!-- <div class="sc"><button class="btn btn-xs"><i class="iconfont icon-like-heart"></i>收藏</button></div> -->
          </div>
        </div>
      </el-col>
    </el-row>
    <div v-if="noData">抱歉！没有相关记录</div>
    <div class="pagination" v-if="paginationShow">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="listPageSize"
        layout="total, prev, pager, next, jumper"
        :total="listTotal">
      </el-pagination>
    </div>
  </div>
</template>


<script>

export default {
  components: {
  },
  props: {
    listNum: Number,
    paginationShow: Boolean,
    popIds: String
  },
  data: function() {
    return {
      listTotal: 10,
      listPageSize: 6,
      currentPage: 1,
      lists: [],
      noData: false,
      loading: true
    }
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, this.listNum)
    },
    currentPageX: function(){
      return (this.currentPage-1)*this.listPageSize
    }
  },
  watch: {
  },
  methods: {
    // @企业标签,@当前页初始化
    getApi: function(idsVal,curVal) {
      if(curVal==1){
        this.currentPage = 1
      }
      this.$http.post(this.$url.zcfw.zclb,{
        pagesize: this.listPageSize,
        startindex: this.currentPageX,
        ids: idsVal
      }).then((res) => {
        this.lists = res.data.body.list
        this.listTotal = res.data.body.zs
        this.loading = false
        if(this.lists.length == 0){
          this.noData = true
        }else {
          this.noData = false
        }
      })
    },
    filterDate1: function(val){
      return this.lists[val].ctsj.slice(0, 7)
    },
    filterDate2: function(val){
      return this.lists[val].ctsj.slice(8, 10)
    },
    bqs: function(index){
      return this.lists[index].bqname
    },
    handleCurrentChange(val) {
      this.loading = true
      this.currentPage = val
      this.getApi(this.popIds)
      console.log(`当前页: ${val}`)
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
.listZc {
  .li-box {
    position: relative;
    margin-bottom: 30px;
    text-align: left;
    background-color: #fff;
    .t {
      position: relative;
      padding: 20px 30px;
      border-bottom: 1px solid #e1e1e1;
      @include theme_bd(neutral-divider);
      .time {
        height: 20px;
        margin-bottom: 5px;
        font-weight: 600;
        font-size: $font-size-xs;
        @include theme_font(primary-light);
      }
      .title-max {
        height: 29px;
        overflow:hidden;
        font-size: $font-size-sm;
        font-weight: 600;
        @include lines(1);
      }
      .sc {
        position: absolute;
        right: 30px;
        bottom: 20px;
      }
    }
    .c {
      padding: 20px 30px 30px 30px;
      border-bottom: 1px solid #e1e1e1;
      @include theme_bd(neutral-divider);
      .title {
        line-height: 1.5;
        height: 70px;
        margin-bottom: 20px;
        @include lines(3);
      }
      .lable {
        width: 70%;
        height: 30px;
        @include lines(1);
        .lab {
          margin-right: 3px;
          margin-bottom: 3px;
        }
      }
    }
    .b {
      font-size: $font-size-xs;
      padding: 15px 30px;
      span {
        margin-right: 20px;
        i {
          vertical-align: middle;
          margin-right: 5px;
        }
      }
      .rd {
        @include theme_font(primary-sec);
      }
      .sc {
        @include theme_font(neutral-sec);
      }
    }
  }
  .pagination {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #fff;
  }
}
</style>