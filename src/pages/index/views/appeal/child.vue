<template>
  <div class="child child-appeal">
    <div class="child-banner">
      <div class="w-1200">
        <list-search-appeal class="childSearch"></list-search-appeal>
        <div class="childTitle">我的诉求</div>
      </div>
    </div>
    <div class="navBar">
      <div class="w-1200 flex">
        <i class="iconfont icon-periscope icohome"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/appeal' }">诉求</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="child-box w-1200 flex">
      <div class="left-box"><list-appeal :paginationShow="true"></list-appeal></div>
      <div class="right-box">
        <div class="sq">
          <button class="btn-danger" @click="jump"><i class="iconfont icon-edit"></i>我要诉求</button>
          <!-- <el-button type="danger"><i class="iconfont icon-edit"></i>我要诉求</el-button> -->
        </div>
        <section class="r-md-1">
          <div class="hd"><span>诉求类型</span></div>
          <div class="bd"><list-appeal-sqlx></list-appeal-sqlx></div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import ListSearchAppeal from '../../../../components/ListSearchAppeal'
import ListAppeal from '../../../../components/ListAppeal'
import ListAppealSqlx from '../../../../components/ListAppealSqlx'

export default {
  components: {
    'list-search-appeal': ListSearchAppeal,
    'list-appeal': ListAppeal,
    'list-appeal-sqlx': ListAppealSqlx
  },
  props: {
  },
  data: function() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    jump(){
      this.$router.push({path: '/appeal/appealFrom'})
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.child-appeal {
  .child-box {
    .right-box {
      .sq {
        margin-bottom: 20px;
        button {
          width: 100%;
          height: 60px;
          border: 0;
          color: #fff;
          font-size: $font-size-lgx;
          cursor: pointer;
          @include radius(5px);
          // @include theme_bg(success);
          i {
            margin-right: 10px;
            font-size: 30px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>