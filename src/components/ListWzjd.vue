<template>
  <div class="listWzjd" v-loading="loading">
    <ul class="clear">
      <li v-for="(list,index) in filterLists" :key="list.id" class="flex">
        <div class="dot-box"><span>{{ index+1 }}</span></div>
        <div class="msg-box">
          <span class="title">
            <router-link v-bind:to="{path:'/policy/detail_wz',query:{id:list.id}}">
              {{ $common.html_decode(list.jdmc) }}
            </router-link>
          </span>
          <span class="time">{{ $common.time_slice(list.fbsj) }}</span>
        </div>
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
    }
  },
  watch: {
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.zcfw.listZcjd,{
        pageSize: this.listPageSize,
        pageNo: this.currentPage
      }).then((res) => {
        this.lists = res.data.body.list
        this.loading = false
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
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.listWzjd {
  ul {
    li {
      padding: 15px 20px;
      border-bottom: 1px solid #e1e1e1;
      background-color: #fff;
      @include theme_bd(neutral-divider);
      &:last-child {
        border-bottom: 0;
      }
      .dot-box {
        margin-right: 10px;
        span {
          display: block;
          margin-top: 3px;
          width: 15px;
          height: 15px;
          line-height: 15px;
          text-align: center;
          color: #fff;
          font-size: $font-size-xs;
          @include theme_bg(primary-light);
          @include radius(100px);
        }
      }
      .msg-box {
        .title {
          @include lines(1);
        }
        .time {
          font-size: $font-size-xs;
          @include theme_font(info);
        }
      }
    }
  }
}
</style>