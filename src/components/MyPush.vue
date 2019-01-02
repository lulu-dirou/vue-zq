<template>
  <div class="myFavZc" v-loading="loading">
    <el-row :gutter="30">
      <el-col :span="12" v-for="(list,index) in filterLists" :key="list.id">
        <div class="grid-content">
          <div class="title-box">
            <div class="title-max"><em class="math bg-warning">{{ index+1 }}</em><span>{{ list.fwdw}}</span></div>
            <div class="title"><span>{{ $common.html_decode(list.bt) }}</span></div>
            <div class="label"><span class="btn0-primary-light" v-for="bq in bqs(index)" :key="bq.id">{{ bq.name }}</span></div>
          </div>
          <div class="msg-box flex">
            <li><b>{{ list.ctsj }}</b></li>
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
.myFavZc {
  padding: 20px 0;
  .el-row {
    .el-col {
      margin-bottom: 30px;
      .grid-content {
        position: relative;
        margin: 0 10px;
        @include shadow(0,0,20px,2px);
        .favBtn {
          position: absolute;
          right: -1px;
          top: 0;
          width: 25px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          cursor: pointer;
          @include theme_bg(warning);
          i {
            font-size: $font-size-lg;
            color: #fff;
          }
        }
        .title-box {
          border-top: 3px solid red;
          padding: 20px;
          @include theme_bd(primary);
          .title-max {
            margin-bottom: 10px;
            font-weight: bold;
            @include lines(1);
            @include theme_font(primary);
            .math {
              display: inline-block;
              padding: 0 4px;
              margin-right: 5px;
              color: #fff;
              font-weight: normal;
              font-size: $font-size-xs;
              @include radius(2px);
            }
          }
          .title {
            height: 50px;
            span {
              @include lines(2);
            }
          }
          .label {
            font-size: $font-size-xs;
            @include lines(1);
            span {
              display: inline-block;
              padding: 1px 2px;
              margin-right: 2px;
              border: 0;
            }
          }
        }
        .msg-box {
          justify-content: space-between;
          font-size: $font-size-xs;
          border-top: 1px solid #e1e1e1;
          @include theme_bd(neutral-border);
          @include theme_font(neutral,0.6);
          li {
            padding: 10px 20px;
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