<template>
  <div class="listZc" v-loading="loading">
    <el-row :gutter="30">
      <el-col :span="8" v-for="(list,index) in filterLists" :key="list.id">
        <div class="li-box">
          <div class="t">
            <div class="title-max"><span class="lab lab-sm lab-primary">{{ list.fwdw}}</span></div>
          </div>
          <div class="c">
            <div class="title">
              <router-link v-bind:to="{path:'./detail',query:{id:list.id}}"><span>{{ $common.html_decode(list.bt) }}</span></router-link>
            </div>
            <div class="lable"><span><em class="" v-for="bq in bqs(index)" :key="bq.id">{{ bq.name }}</em></span></div>
          </div>
          <div class="b flex">
            <div class="left">
              <span title="阅读量" class="rd"><i class="iconfont icon-hot"></i>{{ list.djl }}</span>
              <span title="收藏" class="sc"><i class="iconfont icon-like-heart"></i></span>
            </div>
            <div class="right">
              <span class="time">{{ list.ctsj }}</span>
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
    bqs: function(index){
      return this.lists[index].bqname
    },
    handleCurrentChange(val) {
      this.loading = true
      this.currentPage = val
      this.getApi(this.popIds)
      console.log(`当前页: ${val}`)
    },
    jump: function(index){
      this.$router.push({path:'./detail', query:{id:this.lists[index].id}}) 
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
    @include transition(0.2s);
    &:hover {
      @include shadow(0,5px,20px,0,rgba(#000,0.15));
    }
    .t {
      position: relative;
      padding: 20px 30px;
      border-bottom: 1px solid #e1e1e1;
      @include theme_bd(neutral-divider);
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
        position: relative;
        border: 1px solid #e1e1e1;
        padding: 10px;
        @include theme_bd(neutral-border);
        span {
          height: 20px;
          @include lines(1);
        }
        em {
          border-right: 1px solid #e1e1e1;
          font-size: $font-size-xs;
          margin-right: 10px;
          padding-right: 10px;
          @include theme_font(primary);
        }
      }
    }
    .b {
      font-size: $font-size-xs;
      padding: 15px 30px;
      span {
        @include theme_font(neutral-sec);
        i {
          vertical-align: middle;
          margin-right: 5px;
        }
      }
      .left {
        flex: 1;
      }
      .rd {
        margin-right: 20px;
        @include theme_font(primary-sec);
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