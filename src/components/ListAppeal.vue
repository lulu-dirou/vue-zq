<template>
  <div class="listAppeal" v-loading="loading">
    <el-row :gutter="40">
      <el-col :span="12" v-for="(list,index) in filterLists" :key="list.id">
        <div class="li-box">
          <div class="title-max">{{ list.sqlxmc }}</div>
          <div class="title" @click="jump(index)">{{ list.xbnr }}</div>
          <div class="res"><button class="btn hover focus" :class="ztColor(index)" @click="jump(index)">{{ ztMsg(index) }}</button></div>
          <div class="msg-box">
            <dl class="font-xs clear">
            <dd><span>诉求时间：</span><span><em class="font-info">{{ list.fbsj }}</em></span></dd>
            <dd><span>诉求来源：</span><span><em class="font-info">{{ list.sqzxly }}</em></span></dd>
            </dl>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="noData" v-if="noData">抱歉！没有相关记录</div>
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
    propSqlx: String,
    propKeyWord: String,
  },
  data: function() {
    return {
      loading: true,
      listTotal: 5,
      listPageSize: 5,
      currentPage: 1,
      lists: [],
      noData: false,
      dialogVisible: false,
      pjFrom: {
        hfsd: null,
        jjwt: null,
        fwtd: null,
        qtyj: '',
      }
    }
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, this.listNum)
    }
  },
  watch: {
  },
  methods: {
    // @诉求类型,@关键字,@当前页初始化
    getApi: function(sqlxValue,keyWordValue,curVal){
      if(curVal==1){
        this.currentPage = 1
      }
      this.$http.post(this.$url.sq.mhListQysq,{
        pageSize: this.listPageSize,
        pageNo: this.currentPage,
        token: this.$store.state.Member.token,
        sqlx: sqlxValue,
        keyWord: keyWordValue,
      }).then((res) => {
        this.lists = res.data.body.list
        this.listTotal = res.data.body.tatol
        this.loading = false
        if(this.lists.length == 0){
          this.noData = true
        }else {
          this.noData = false
        }
      })
    },
    ztMsg: function(index){
      switch(Number(this.lists[index].zt))
      {
        case 0: return '处理中'
        case 2: return '已办结'
      }
    },
    ztColor: function(index){
      switch(Number(this.lists[index].zt))
      {
        case 0: return 'btn-warning'
        case 2: return 'btn-disabled'
      }
    },
    handleCurrentChange(val) {
      this.loading = true
      this.currentPage = val
      this.getApi(this.propSqlx,this.propKeyWord);
      console.log(`当前页: ${val}`);
    },
    jump: function(index){
      // this.$router.push("./appeal/detail"); 
      this.$router.push({path:'./appeal/detail', query:{sqid:this.lists[index].id,xbid:this.lists[index].xbid}}) 
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
  .li-box {
    position: relative;
    padding: 0 40px 10px 40px;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid #e1e1e1;
    text-align: center;
    @include theme_bd(neutral-border);
    .title-max {
      position: absolute;
      left: 50%;
      top: -30px;
      margin-left: -60px;
      width: 120px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border: 1px solid #e1e1e1;
      background-color: #fff;
      font-size: $font-size-lg;
      font-weight: 600;
      @include radius(1000px);
      @include theme_font(primary);
      @include theme_bd(neutral-sec);
    }
    .title {
      margin-top: 50px;
      height: 42px;
      @include lines(2);
    }
    .msg-box {
      margin: 15px 0;
      dd {
        display: inline-block;
        margin: 0 10px;
        @include theme_font(neutral-sec);
      }
    }
    .res {
      margin: 15px 0;
    }
    &:hover {
      @include theme_bd(primary);
      .title-max {
        color: #fff;
        @include theme_bd(primary);
        @include theme_bg(primary);
      }
    }
  }
  .noData {
    padding: 20px;
    margin-bottom: -10px;
    background-color: #fff;
  }
  .pagination {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #fff;
  }
}

</style>