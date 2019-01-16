<template>
  <div class="listAppeal" v-loading="loading">



    <!------------------------------------------------------------------------------------------- 原诉求 -->
    <el-dialog class="dialogYSQ" :visible.sync="dialogVisible" width="800px">
      <div slot="title"><span class="iconfont icon-xialajiantou-down"></span> 原诉求</div>
      <div class="content">
        <p>企业于2014年颁布了对骨干员工的股票奖励政策，至今年正式实施时，共83名骨干员工获得股票奖励，但其中67人须缴纳的个税比例高达45%，实际到手的奖励金额大幅减少。</p>
        <p>由于大部分骨干员工不属于企业高管范畴，无法享受针对企业高管的配套奖励政策，因此希望区政府也能够出台针对该类企业骨干员工的扶持，以减轻其在缴纳个税方面的压力。</p>
        <ul class="list">
          <li class="font-xs"><a href="" target="_blank" class="font-primary"><i class="el-icon-document"></i> 1212.jpg</a></li>
          <li class="font-xs"><a href="" target="_blank" class="font-primary"><i class="el-icon-document"></i> 1212.jpg</a></li>
        </ul>
      </div>
      <div slot="footer"><button class="btn btn-primary hover focus" @click="dialogVisible=false">关闭</button></div>
    </el-dialog>
    <!------------------------------------------------------------------------------------------- end -->



    <!------------------------------------------------------------------------------------------- 评价 -->
    <el-dialog class="dialogPJ" :visible.sync="dialogPJVisible" width="560px">
      <div slot="title"><span class="iconfont icon-xialajiantou-down"></span> 评价</div>
      <div class="content">
        <el-form :model="pjFrom">
          <el-row :gutter="10" >
            <el-col :span="8"><span class="font-primary-light">回复速度</span><el-rate v-model="pjFrom.hfsd"></el-rate></el-col>
            <el-col :span="8"><span class="font-primary-light">解决问题</span><el-rate v-model="pjFrom.jjwt"></el-rate></el-col>
            <el-col :span="8"><span class="font-primary-light">服务态度</span><el-rate v-model="pjFrom.fwtd"></el-rate></el-col>
          </el-row>
          <h4>其它意见</h4>
          <el-input v-model="pjFrom.qtyj" type="textarea" :rows="4" autocomplete="off"></el-input>
        </el-form>
      </div>
      <div slot="footer">
        <button class="btn btn0-disabled hover focus" @click="dialogPJVisible=false">取消</button>
        <button class="btn btn-primary hover focus" @click="dialogPJVisible=false">提交</button>
      </div>
    </el-dialog>
    <!------------------------------------------------------------------------------------------- end -->
    



    <el-row :gutter="40">
      <el-col :span="24" v-for="(list,index) in filterLists" :key="list.id">
        <div class="li-box">
          <div class="title-box flex">
            <div class="bh"><button class="btn btn-primary hover focus">诉求编号：201901090001</button></div>
            <div class="qymc"><i class="iconfont icon-account"></i> 佛山市微米科技有限公司</div>
            <div class="time font-primary"><b><i class="iconfont icon-calendar"></i> 2019-01-15</b></div>
            <div class="ztBtn"><button class="btn btn0-primary-sec hover focus"  @click="dialogVisible = true">原诉求</button></div>
          </div>
          <div class="msg-box flex" v-for="msg in 1" :key="msg.id">
            <div class="left"><i class="iconfont icon-pen"></i></div>
            <div class="center">
              <div class="title" @click="jump(index)">{{ list.xbnr }}</div>
              <dl class="mini-box clear">
                <dd v-if="list.sqlxmc"><em class="lab lab-xs lab1-primary">{{ list.sqlxmc }}</em></dd>
                <dd><i class="iconfont icon-timer"></i><em>{{ list.fbsj }}</em></dd>
                <dd><i class="iconfont icon-tag"></i>来源：<em>{{ list.sqzxly }}</em></dd>
                <dd v-if="list.pjzt == '已评价'">
                  <button class="btn btn-xs btn-success hover focus"  @click="dialogPJVisible = true">{{ list.pjzt }}</button>
                </dd>
              </dl>
            </div>
            <div class="right">
               <button class="btn hover focus" :class="ztColor(index)" @click="jump(index)">{{ ztMsg(index) }}</button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="noData" v-if="noData"><img src="../common/images/nodata.png"><p>抱歉！没有相关记录</p></div>
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
      dialogPJVisible: false,
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
        case 9: return '待处理'
      }
    },
    ztColor: function(index){
      switch(Number(this.lists[index].zt))
      {
        case 0: return 'btn-warning'
        case 2: return 'btn-disabled'
        case 9: return 'btn-info'
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
    padding: 50px 50px;
    margin-bottom: 30px;
    background-color: #fff;
    @include shadow(0,5px,20px,0,rgba(#000,0.05));
    .title-box {
      align-items: center;
      position: relative;
      height: 55px;
      border-bottom: 1px solid #e1e1e1;
      @include theme-bd(neutral-border);
      .bh {
        flex: 1;
      }
      .time {
        font-size: $font-size-sm;
        margin-right: 40px;
      }
      .qymc {
        font-size: $font-size-sm;
        margin-right: 40px;
      }
    }
    .msg-box {
      margin: 30px 0;
      .left {
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        margin-right: 30px;
        @include radius(10px);
        @include shadow(0,15px,30px,0,rgba(#000,0.15));
        i {
          font-size: 40px;
          @include theme-font(neutral-sec);
        }
      }
      .center {
        flex: 1;
        margin-right: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid #e1e1e1;
        @include theme-bd(neutral-divider);
        .title {
          line-height: 1.5;
          margin-bottom: 30px;
          cursor: pointer;
          @include lines(3);
        }
        .mini-box {
          dd {
            float: left;
            padding-right: 20px;
            margin-right: 20px;
            border-right: 1px solid #e1e1e1;
            font-size: $font-size-xs;
            @include theme_font(neutral-sec);
            @include theme-bd(neutral-divider);
            &:last-child {
              border-right: 0;
            }
            i {
              margin-right: 10px;
              vertical-align: middle;
            }
          }
        }
      }
      &:last-child {
        .center {
          padding-bottom: 0;
          border-bottom: 0;
        }
      }
    }
  }
  .noData {
    padding: 50px 0;
    margin-bottom: -10px;
    text-align: center;
    background-color: #fff;
  }
  .pagination {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #fff;
  }
  .dialogYSQ {
    /deep/ .el-dialog {
      .el-dialog__body {
        line-height: 1.5;
        .list {
          margin-top: 20px;
        }
      }
    }
  }
  .dialogPJ{
    .el-row {
      margin-bottom: 20px;
      .el-col {
        border-right: 1px solid #e1e1e1;
        text-align: center;
        font-size: $font-size-sm;
        @include theme_bd(neutral-divider);
        &:last-child {
          border-right: 0;
        }
        span {
          display: inline-block;
          margin-bottom: 10px;
        }
      }
    }
  }
}

</style>