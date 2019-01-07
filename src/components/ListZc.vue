<template>
  <div class="listZc" v-loading="loading">
    <el-row :gutter="30">
      <el-col :span="12" v-for="(list,index) in filterLists" :key="list.id">
        <div class="grid-content">
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
    listIds: function(){
      return this.popIds
    }
  },
  watch: {
    listIds: function(){
      this.getApi()
    }
  },
  methods: {
    getApi: function() {
      this.$http.post(this.$url.zcfw.zclb,{
        pagesize: this.listPageSize,
        startindex: this.currentPage,
        ids: this.listIds
      }).then((res) => {
        this.lists = res.data.body.list
        this.listTotal = res.data.body.zs
        this.loading = false
        if(this.lists.length == 0){
          this.noData = true
        }
      })
    },
    bqs: function(index){
      return this.lists[index].bqname
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
  padding: 20px;
  background-color: #fff;
  .el-row {
    .el-col {
      margin-bottom: 30px;
      .grid-content {
        border: 1px solid #ccc;
        background-color: #fff;
        @include theme_bd(neutral-border);
        .title-max {
          margin: -1px -1px 0 -1px;
          padding: 5px 20px;
          font-size: $font-size-xs;
          color: #fff;
          @include theme_bg(primary);
          span {
            @include lines(1);
          }
        }
        .title-box {
          padding: 20px;
          .title {
            height: 60px;
            span {
              @include lines(2);
            }
          }
          .label {
            width: 60%;
            font-size: $font-size-xs;
            @include lines(1);
            span {
              display: inline-block;
              padding: 1px 2px;
              margin-right: 2px;
              border: 0;
            }
          }
        }
        .msg-box {
          font-size: $font-size-xs;
          border-top: 1px solid #e1e1e1;
          @include theme_bd(neutral-border);
          @include theme_font(neutral,0.6);
          li {
            padding: 10px 20px 10px 20px;
            float: left;
            border-right: 1px solid #e1e1e1;
            @include theme_bd(neutral-divider);
            &:last-child {
              border-right: 0;
            }
            span {
            }
            em {
              @include theme_font(warning);
            }
          }
        }
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