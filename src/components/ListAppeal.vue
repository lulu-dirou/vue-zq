<template>
  <div class="listAppeal" v-loading="loading">
    <ul class="clear">
      <li v-for="(list,index) in filterLists" :key="list.id">
        <div class="li-box">
          <div class="title-box flex-middle">
            <span class="title" @click="jump(index)">{{ list.qymc }}的{{ list.sqlxmc }}</span>
            <button class="btn active" @click="jump(index)" :class="ztColor(index)">{{ ztMsg(index) }}</button>
          </div>
          <div class="msg-box">
            <div class="title" @click="jump(index)">{{ list.xbnr }}</div>
            <dl class="font-xs clear">
            <dd><span>诉求类型</span><span><em class="btn btn-xs btn0-info">{{ list.sqlxmc }}</em></span></dd>
            <dd><span>诉求时间</span><span><em class="font-info">{{ list.fbsj }}</em></span></dd>
            <dd><span>诉求来源</span><span><em class="font-info">{{ list.sqzxly }}</em></span></dd>
            <!-- <dd><el-button type="primary" size="mini" icon="el-icon-star-off" plain @click="dialogVisible = true">待评价</el-button></dd> -->
            </dl>
          </div>
          <el-dialog
            title="评价/详细评价信息"
            :visible.sync="dialogVisible"
            width="500px" class="pjDialog">
            <el-form :model="pjFrom">
              <ul class="clear flex">
                <li><span>回复速度</span><el-rate v-model="pjFrom.hfsd"></el-rate></li>
                <li><span>解决问题</span><el-rate v-model="pjFrom.jjwt"></el-rate></li>
                <li><span>服务态度</span><el-rate v-model="pjFrom.fwtd"></el-rate></li>
              </ul>
              <h4>其它意见</h4>
              <el-input v-model="pjFrom.qtyj" type="textarea" :rows="4" autocomplete="off"></el-input>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </li>
    </ul>
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
  height: 100%;
  ul {
    margin-left: -5px;
    margin-right: -5px;
    margin-bottom: -10px;
  }
  li {
    float: left;
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 10px;
  }
  .li-box {
    position: relative;
    top: 0;
    float: left;
    width: 100%;
    padding: 0 20px;
    border-top: 2px solid #e1e1e1;
    margin-bottom: 20px;
    background-color: #fff;
    @include transition(0.2s);
    @include theme_bd(primary);
    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      @include shadow(0,0,20px,2px);
    }
    .title-box {
      padding: 20px 0;
      border-bottom: 1px solid #e1e1e1;
      @include theme_bd(neutral-divider);
      .title {
        flex: 1;
        font-size: $font-size-lg;
        font-weight: 600;
        cursor: pointer;
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
        font-size: $font-size-lgm;
        margin-bottom: 20px;
        cursor: pointer;
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
    .pjDialog {
      ul {
        margin-bottom: 10px;
        li {
          padding-right: 10px;
          margin-right: 10px;
          border-right: 1px solid #e1e1e1;
          text-align: center;
          @include theme_bd(neutral-divider);
          &:last-child {
            border-right: 0;
          }
          span {
            display: block;
            margin-bottom: 5px;
            @include theme_font(primary-light);
          }
        }
      }
      /deep/ .el-dialog__body {
        padding: 20px 20px;
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