<template>
  <div class="listZc" v-loading="loading">
    <ul class="clear">
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
    </ul>
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
    }
  },
  watch: {
  },
  methods: {
    getApi: function() {
      this.$http.post(this.$url.zcfw.listZcfw,{
        pageSize: this.listPageSize,
        pageNo: this.currentPage,
        // zcflid: this.popZcflid
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
.listZc {
  ul {
    li {
      padding: 20px;
      border-bottom: 1px solid #e1e1e1;
      background: #fff;
      @include theme_bd(neutral-diviter);
      &:last-child {
        border-bottom: 0;
      }
      dd {
        margin: 3px 0;
        &.dd-1 {
          justify-content: space-between;
        }
      }
      .title-max {
        position: relative;
        padding: 5px 8px;
        font-size: $font-size-xs;
        color: #fff;
        @include radius(3px);
        @include theme_bg(primary-light,1);
        &:before {
          position: absolute;
          right: -4px;
          top: 50%;
          margin-top: -6px;
          content: '';
          @include arrow(right,6px,$theme-primary-light);
        }
      }
      .title {
        font-size: $font-size-lgm;
        &:hover {
          text-decoration: underline;
        }
      }
      .label {
        font-size: $font-size-xs;
        @include theme_font(neutral,0.6);
        em {
          @include theme_font(warning,0.8);
          @include theme_bg(warning,0.08);
        }
      }
      .time {
        margin-right: 20px;
        font-size: $font-size-xs;
        @include theme_font(neutral,0.6);
      }
    }
  }
}
</style>