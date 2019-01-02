<template>
  <div class="myLive" v-loading="loading">
    <el-row :gutter="30">
      <el-col :span="12" v-for="list in 2" :key="list.id">
        <div class="grid-content">
          <div class="title-box flex">
            <div class="img-box">
              <img src="../common/images/dmjdFm_2.png" alt="">
            </div>
            <div class="time-box">
              <div class="title"><span>佛山市禅城区人民政府办公室关于印发佛山市禅城区科技型企业信贷风险补偿基金设立方案（2017年修订）的通知</span></div>
              <div class="label"><span>经济促进局</span></div>
              <div class="time"><b>2019.01.12  09:00 ~ 10:00</b></div>
              <div class="state"><button class="btn btn-success">未开始</button></div>
            </div>
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
    listIds: function(){
      return this.popIds
    }
  },
  watch: {
    listIds: function(){
      this.getApi()
    }
  },
  methods: {
    getApi: function() {
      this.$http.post(this.$url.zcfw.zclb,{
        pagesize: this.listPageSize,
        startindex: this.currentPage,
        ids: this.listIds
      }).then((res) => {
        this.lists = res.data.body.list
        this.listTotal = res.data.body.zs
        this.loading = false
        if(this.lists.length == 0){
          this.noData = true
        }
      })
    },
    bqs: function(index){
      return this.lists[index].bqname
    },
    handleCurrentChange(val) {
      this.loading = true
      this.currentPage = val;
      this.getApi()
      console.log(`当前页: ${val}`);
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
.myLive {
  .el-row {
    .el-col {
      margin-bottom: 30px;
      .grid-content {
        position: relative;
        margin: 0 10px;
        @include shadow(0,0,20px,2px);
        .title-box {
          border-top: 3px solid red;
          padding: 20px;
          @include theme_bd(primary);
          .img-box {
            width: 200px;
            height: 150px;
            margin-right: 20px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .time-box {
            flex: 1;
          }
          .title {
            height: 50px;
            span {
              @include lines(2);
            }
          }
          .label {
            font-size: $font-size-xs;
            @include theme_font(info);
          }
          .time {
            font-size: $font-size-xs;
            @include theme_font(warning);
          }
          .state {
            margin-top: 10px;
          }
        }
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