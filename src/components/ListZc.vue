<template>
  <div class="listZc" v-loading="loading">
    <el-row :gutter="30">
      <el-col :span="12" v-for="(list,index) in filterLists" :key="list.id">
        <div class="grid-content">
          <div class="time"><span>{{ filterDate2(index) }}</span><em>{{ filterDate1(index) }}</em></div>
          <div class="title-max"><span>{{ list.fwdw}}</span></div>
          <div class="title"><span>{{ $common.html_decode(list.bt) }}</span></div>
          <div class="rd" title="阅读量"><i class="iconfont icon-hot"></i><b>{{ list.djl }}</b></div>
          <div class="label"><span class="lab lab1-primary-sec" v-for="bq in bqs(index)" :key="bq.id">{{ bq.name }}</span></div>
        </div>
        <!-- <div class="grid-content">
          <div class="title-max"><span>{{ list.fwdw}}</span></div>
          <div class="title-box">
            <div class="title"><span>{{ $common.html_decode(list.bt) }}</span></div>
            <div class="label"><span class="btn0-primary-light" v-for="bq in bqs(index)" :key="bq.id">{{ bq.name }}</span></div>
          </div>
          <div class="msg-box">
            <ul class="clear">
              <li><span>{{ list.ctsj }}</span></li>
              <li><span>阅读量：</span><em>{{ list.djl }}</em></li>
            </ul>
          </div>
        </div> -->
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
<!--     <ul class="clear">
       <li v-for="list in filterLists" :key="list.id">
        <dd class="dd-1 flex-middle">
          <span class="title-max">{{ list.zcly }}</span>
          <el-button icon="el-icon-star-off" circle size="mini"></el-button>
        </dd>
        <dd class="dd-2">
          <span class="title">
            <router-link :to="{path:'/policy/detail',query:{id:list.id}}">{{ $common.html_decode(list.zczt) }}</router-link>
          </span>
        </dd>
        <dd class="dd-3">
          <span class="label">企业标签：<em>{{ list.zcbqname }}</em></span>
        </dd>
        <dd class="dd-4">
          <span class="time">发布时间：<em class="font-info">{{ list.fbsj }}</em></span>
          <span class="time">阅读量：<em class="font-info">140</em></span>
        </dd> 
      </li>
      <li v-if="noData">抱歉！没有相关记录</li>
      <li class="pagination" v-if="paginationShow">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="listPageSize"
          layout="total, prev, pager, next, jumper"
          :total="listTotal">
        </el-pagination>
      </li>
    </ul> -->
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
  background-color: #fff;
  .grid-content {
    position: relative;
    padding: 30px 40px 30px 150px;
    margin-bottom: 20px;
    border: 1px solid #e1e1e1;
    @include theme_bd(neutral-border);
    .time {
      position: absolute;
      left: 30px;
      top: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      @include transition(0.4s);
      @include theme_font(primary);
      @include shadow(0,15px,30px,0,rgba(#000,0.15));
      @include radius(10px);
      span {
        display: block;
        margin-top: 10px;
        font-size: 28px;
        font-weight: 600;
      }
      em {
        display: block;
        line-height: 1.5;
        font-size: $font-size-sm;
        font-weight: 600;
      }
    }
    .title-max {
      margin-bottom: 10px;
      font-size: $font-size-lg;
      font-weight: 600;
      @include lines(1);
      @include theme_font(neutral-title);
    }
    .title {
      margin-bottom: 10px;
      height: 66px;
      @include lines(3);
    }
    .rd {
      margin-bottom: 10px;
      font-size: $font-size-xs;
      @include theme_font(neutral-sec);
      i {
        margin: -2px 5px 0 0;
      }
      b {
        @include theme_font(info);
      }
    }
    .label {
      width: 60%;
      @include lines(1);
      span {
        margin-right: 3px;
      }
    }
    &:hover {
      .time {
        color: #fff;
        @include theme_bg(primary);
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