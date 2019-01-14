<template>
  <div class="child child-appeal">
    <div class="child-banner">
      <div class="maskbg"><img src="../../../../common/images/child-banner-appeal.jpg"></div>
      <div class="w-1200">
        <div class="msg-box clear">
          <div class="title">我要诉求</div>
          <div class="dot"><i class="iconfont icon-xialajiantou-down"></i></div>
          <div class="sq"><button class="btn btn-lg btn-primary-sec hover">提诉求</button></div>
          <list-search-appeal @search="Search"></list-search-appeal>
          <div class="breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>您现在的位置</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/appeal' }">诉求</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </div>
    </div>
    <div class="child-box w-1200">
      <div class="top-box">
        <ul class="flex clear">
          <li class="title">诉求类型：</li>
          <li class="all" :class="{active:sqlxsNum==-1}" @click="sqlxsActive('all','',-1,1)">
            <i v-if="sqlxsNum==-1" class="iconfont icon-dui"></i>
            <span>全部</span>
          </li>
          <li 
            v-for="(sqlx,index) in sqlxs" 
            :key="sqlx.id" 
            :class="{active:index==sqlxsNum}" 
            @click="sqlxsActive(sqlx.id,'',index,1)"
          >
            <i v-if="index==sqlxsNum" class="iconfont icon-dui"></i>
            <span>{{ sqlx.name }}</span>
            <em v-if="sqlx.sl">{{ sqlx.sl }}</em>
          </li>
        </ul>
      </div>
      <div class="bottom-box">
        <list-appeal 
          :paginationShow="true" 
          :propSqlx="ListQqlx"
          :propKeyWord="ListKeyWord"
          ref="mylistappeal"
        ></list-appeal>
      </div>
    </div>
  </div>
</template>


<script>
import ListSearchAppeal from '../../../../components/ListSearchAppeal'
import ListAppeal from '../../../../components/ListAppeal'

export default {
  components: {
    'list-search-appeal': ListSearchAppeal,
    'list-appeal': ListAppeal,
  },
  props: {
  },
  data: function() {
    return {
      sqlxsNum: '-1',
      sqlxs: [],
      ListQqlx: 'all',
      ListKeyWord: ''
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getApi_xqlx: function(){
      this.$http.post(this.$url.sq.mhGetSqlxTj,{
        token: this.$store.state.Member.token
      }).then((res) => {
        this.sqlxs = res.data.body.sqlx
      })
    },
    jump(){
      this.$router.push({path: '/appeal/appealFrom'})
    },
    sqlxsActive: function(sqlxVal,keywordVal,index,curVal){
      this.sqlxsNum = index
      this.ListQqlx = sqlxVal
      this.ListKeyWord = keywordVal
      this.$refs.mylistappeal.getApi(sqlxVal,keywordVal,curVal)
    },
    Search: function(val){
      this.ListQqlx = 'all'
      this.ListKeyWord = val
      this.$refs.mylistappeal.getApi('all',val,1)
    } 
  },
  created: function(){
    this.getApi_xqlx()
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.child-appeal {
  .child-banner {
    .sq {
      position: absolute;
      right: 230px;
      bottom: -20px;
      button {
        width: 120px;
        height: 60px;
        padding: 0;
        @include radius(1000px);
        @include theme_shadow(primary-sec,0,5px,20px,0,0.5);
      }
    }
  }
  .child-box {
    background-color: #fff;
  }
}
</style>