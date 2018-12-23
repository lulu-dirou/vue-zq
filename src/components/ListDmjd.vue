<template>
  <div class="listDmjd" v-loading="loading">
    <ul class="clear">
      <li v-for="list in filterLists" :key="list.id">
        <div class="li-box">
          <div class="img-box">
            <router-link v-bind:to="{path:'/policy/detail_dm',query:{id:list.id}}">
              <!-- <img src="../common/images/imgAj.png" class="aj"> -->
              <img :src="$common.api_baseUrl_fj+'fjid='+list.fjid">
            </router-link>
          </div>
          <div class="msg-box">
            <span class="title">
              <router-link v-bind:to="{path:'/policy/detail_dm',query:{id:list.id}}">
                {{ $common.html_decode(list.jdmc) }}
              </router-link>
            </span>
            <span class="label">图片</span>
            <span class="time">{{ $common.time_slice(list.fbsj) }}</span>
          </div>
          <div class="edit-box flex-middle"><i class="iconfont icon-pin" title="收藏"></i></div>
        </div>
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
      this.$http.post(this.$url.zcfw.listDmjd,{
        pageSize: this.listPageSize,
        pageNo: this.currentPage
      }).then((res) => {
        this.lists = res.data.body.list
        this.loading = false
        if(this.lists.length == 0){
          this.noData = true
        }
      })
    },
    getApiTotal: function(){
      this.$http.post(this.$url.zcfw.listDmjd,{
        pageSize: 9999,
        pageNo: 1
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
.listDmjd {
  height: 100%;
  ul {
    margin-left: -5px;
    margin-right: -5px;
    margin-bottom: -10px;
  }
  li {
    float: left;
    width: 50%;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 10px;
  }
  .li-box {
    display: flex;
    position: relative;
    padding: 20px;
    top: 0;
    background-color: #fff;
    @include transition(0.2s);
    @include radius(2px);
    &:hover {
      z-index: 2;
      top: -5px;
      @include shadow(0,0,20px,2px);
    }
    .img-box {
      position: relative;
      flex: 0 0 70px;
      height: 70px;
      margin-right: 20px;
      .aj {
        position: absolute;
        left: 0;
        top: 0;
      }
      img {
        width: 100%;
        height: 100%;
        @include radius(100px);
      }
    }
    .msg-box {
      margin-right: 20px;
      .title {
        height: 40px;
        @include lines(2);
      }
      .label {
        margin-right: 10px;
        font-size: $font-size-xs;
        @include theme_font(info);
      }
      .time {
        font-size: $font-size-xs;
        @include theme_font(neutral-disabled);
      }
    }
    .edit-box {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 25px;
      height: 25px;
      font-size: $font-size-xs;
      color: #fff;
      background: url("../common/images/sprite.png") 0 0 no-repeat;
      i {
        position: relative;
        top: 5px;
        left: 5px;
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