<template>
  <div class="listAppeal" v-loading="loading">
    <ul class="clear">
      <li v-for="(list,index) in filterLists" :key="list.id">
        <div class="title-box flex-middle">
          <span class="title">{{ list.sqzxzt }}</span>
          <button class="btn" :class="ztColor(index)">{{ ztMsg(index) }}</button>
        </div>
        <div class="msg-box">
          <div class="title">{{ list.sqzxnr }}</div>
          <dl class="font-xs clear">
          <dd><span>诉求类型</span><span><em class="btn btn-xs btn0-info">{{ list.sqzxlx }}</em></span></dd>
          <dd><span>诉求时间</span><span><em class="font-info">{{ list.fbsj }}</em></span></dd>
          <dd><el-button type="primary" size="mini" icon="el-icon-star-off" plain>待评价</el-button></dd>
          </dl>
        </div>
      </li>
    </ul>
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
  },
  data: function() {
    return {
      listTotal: 999,
      listPageSize: 5,
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
  },
  watch: {
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.sq.listQysq,{
        token: this.$store.state.Member.token
      }).then((res) => {
        this.lists = res.data.body.zdSqList
        this.listTotal = res.data.body.zdSqList.length
        this.loading = false
        if(this.lists.length == 0){
          this.noData = true
        }
      })
    },
    ztMsg: function(index){
      switch(Number(this.lists[index].zt))
      {
        case 1: return '已提交'
        case 4: return '已办结'
      }
    },
    ztColor: function(index){
      switch(Number(this.lists[index].zt))
      {
        case 1: return 'btn-warning'
        case 4: return 'btn-disabled'
      }
    },
    handleCurrentChange(val) {
      this.loading = true
      this.currentPage = val;
      this.getApi();
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
.listAppeal {
  height: 100%;
  ul {
    li {
      float: left;
      width: 48%;
      margin-right: 10px;
      padding: 0 20px;
      border-top: 2px solid #e1e1e1;
      margin-bottom: 20px;
      background-color: #fff;
      @include theme_bd(primary);
      &:last-child {
        margin-bottom: 0;
      }
      .title-box {
        padding: 20px 0;
        border-bottom: 1px solid #e1e1e1;
        @include theme_bd(neutral-divider);
        span {
          flex: 1;
          font-size: $font-size-lg;
          font-weight: 600;
          @include lines(1);
          @include theme_font(primary);
        }
        button {
          border: 0;
        }
      }
      .msg-box {
        padding: 10px 0 20px 0;
        .title {
          margin-bottom: 20px;
        }
        dl {
          dd {
            float: left;
            margin-right: 30px;
            padding-right: 30px;
            border-right: 1px solid #e1e1e1;
            @include theme_font(neutral,0.6);
            @include theme_bd(neutral-divider);
            &:last-child {
              border-right: 0;
            }
            span {
              display: block;
              margin-bottom: 5px;
            }
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