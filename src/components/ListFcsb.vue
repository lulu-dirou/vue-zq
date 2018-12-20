<template>
  <div class="listFcsb">
    <ul class="clear">
      <li v-for="list in filterLists" :key="list.id">
        <div class="li-box">
          <div class="li-h flex-middle">
            <span class="label">市质监局</span>
            <span class="state">已结束</span>
          </div>
          <div class="li-c flex">
            <div class="time-box flex-middle"><span>0</span><em>剩余天数</em></div>
            <div class="msg-box">
              <div class="money">0万-10万</div>
              <div class="title">佛山市工业产品质量提升扶持（计量类）</div>
            </div>
          </div>
          <div class="li-f flex">
            <div class="time">申报时间：2018-08-20</div>
            <div class="sc"><i class="iconfont icon-like-heart" title="收藏"></i></div>
          </div>
        </div>
      </li>
    </ul>
    <div class="pagination" v-if="paginationShow">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="100"
        layout="total, prev, pager, next, jumper"
        :total="400">
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
      currentPage: 1,
      lists: [1,2,3,4,5,6,7,8,9]
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created: function(){
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
        @include theme_font(primary-dark);
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