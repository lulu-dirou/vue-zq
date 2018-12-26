<template>
  <div class="listSbtz" v-loading="loading">
    <!-- <ul class="clear">
      <li v-for="list in filterLists" :key="list.id">
        111111111
      </li>
    </ul> -->
    <el-row :gutter="20">
      <el-col :span="12" v-for="list in filterLists" :key="list.id">
        <div class="grid-content">
          <div class="title">{{ list.title }}</div>
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
  },
  data: function() {
    return {
      listTotal: 150,
      listPageSize: 10,
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
      this.$http.post(this.$url.sbfw.sbtz,{
        pagesize: this.listPageSize,
        startindex: this.currentPage
      }).then((res) => {
        this.lists = res.data.body.list
        this.loading = false
        if(this.lists.length == 0){
          this.noData = true
        }
      })
    },
    getApiTotal: function(){
      this.$http.post(this.$url.sbfw.sbtz,{
        pagesize: 9999,
        startindex: 1
      }).then((res) => {
        this.listTotal = res.data.body.list.length
      })
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
    this.getApiTotal()
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.listSbtz {
  .el-row {
    margin-bottom: -10px;;
    .el-col {
      margin-bottom: 10px;
      .grid-content {
        background-color: #fff;
        .title {
          @include lines(1);
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