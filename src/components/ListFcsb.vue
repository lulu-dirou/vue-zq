<template>
  <div class="listFcsb" v-loading="loading">
    <ul class="clear">
      <li v-for="(list,index) in filterLists" :key="list.id">
        <router-link v-bind:to="{path:'/policy/detail_sb',query:{id:list.id}}">
          <div class="li-box">
            <div class="li-h flex-middle">
              <span class="label">{{ list.govname }}</span>
              <span class="state">已结束</span>
            </div>
            <div class="li-c flex">
              <div class="time-box flex-middle"><span>0</span><em>剩余天数</em></div>
              <div class="msg-box">
                <div class="money">{{ moneyState(index) }}</div>
                <div class="title">{{ list.name }}</div>
              </div>
            </div>
            <div class="li-f flex">
              <div class="time">申报时间：{{ $common.date_en(list.createdAt) }}</div>
              <div class="sc"><i class="iconfont icon-like-heart" title="收藏"></i></div>
            </div>
          </div>
        </router-link>
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
      loading: true,
      listTotal: 150,
      listPageSize: 12,
      currentPage: 1,
      lists: [],
      noData: false,
      btnState: '',
      btnStateMsg: '',
      stateTimeClass: '',
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
    getApi: function(){
      this.$http.post(this.$url.sbfw.sbzt,{
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
    handleCurrentChange(val) {
      this.loading = true
      this.currentPage = val;
      this.getApi();
      console.log(`当前页: ${val}`);
    },
    moneyState: function(val){
      if(this.lists[val].moneyMin == this.lists[val].moneyMax){
        return '资金支持'
      }else{
        return this.lists[val].moneyMin+'万-'+this.lists[val].moneyMax+'万'
      }
    },
    dayState: function(index){
      //let startTime = this.$common.date_de(this.lists[index].startDate)
      let endTime = this.$common.date_de(this.lists[index].endDate)
      let curTime = this.lists[index].dqsj
      if(endTime>curTime){
        this.btnState = 'active'
        this.btnStateMsg = '申报中'
        this.stateTimeClass = 'active'
        return parseInt((Math.abs(endTime - curTime)) / 3600 / 24 / 1000)
      }else{
        this.btnStateMsg = '已结束'
        return 0
      }
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
.listFcsb {
  height: 100%;
  ul {
    margin-left: -5px;
    margin-right: -5px;
    margin-bottom: -10px;
  }
  li {
    float: left;
    width: 33.33%;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 10px;
  }
  .li-box {
    position: relative;
    top: 0;
    padding: 10px 20px;
    background-color: #fff;
    @include radius(2px);
    @include theme_bd(neutral-border);
    @include transition(0.2s);
    @include radius(2px);
    &:hover {
      z-index: 2;
      top: -5px;
      @include shadow(0,0,20px,2px);
    }
    .li-h {
      justify-content: space-between;
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 5px;
      margin-bottom: 10px;
      font-size: $font-size-xs;
      @include theme_bd(neutral-border);
      .label {
        @include theme_font(primary-light);
      }
      .state {
        padding: 5px 10px;
        border: 1px solid #e1e1e1;
        @include theme_font(neutral-disabled);
        @include theme_bg(neutral-disabled,0.1);
        @include theme_bd(neutral-disabled,0.3);
        &.active {
          @include theme_font(danger);
          @include theme_bg(danger,0.1);
          @include theme_bd(danger,0.3);
        }
      }
    }
    .li-c {
      margin-bottom: 10px;
      .time-box {
        flex-direction: column;
        flex: 0 0 55px;
        width: 55px;
        height: 60px;
        margin-right: 20px;
        text-align: center;
        color: #fff;
        @include radius(5px);
        @include theme_bg(neutral-disabled);
        &.active {
          @include theme_bg(warning);
        }
        span {font-weight: 600;font-size: 24px;}
        em {font-size: $font-size-xs;}
      }
      .msg-box {
        flex: 1;
        .money {
          @include theme_font(danger);
        }
        .title {
          @include lines(2);
        }
      }
    }
    .li-f {
      justify-content: space-between;
      font-size: $font-size-xs;
      .time {
        @include theme_font(neutral-disabled);
      }
      .sc {
        @include theme_font(success);
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