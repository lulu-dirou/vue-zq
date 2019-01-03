<template>
  <div class="child child-appeal">
    <div class="child-banner">
      <div class="w-1200">
        <list-search-appeal class="childSearch" @search="Search"></list-search-appeal>
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
      <div class="left-box">
        <list-appeal 
          :paginationShow="true" 
          :propSqlx="ListQqlx"
          :propKeyWord="ListKeyWord"
          ref="mylistappeal"
        ></list-appeal>
      </div>
      <div class="right-box">
        <div class="sq">
          <button class="btn btn-danger active" @click="jump"><i class="iconfont icon-edit"></i>我要诉求</button>
        </div>
        <div class="nav">
          <div class="title"><span>诉求类型</span></div>
          <ul class="flex clear">
            <li :class="{active:sqlxsNum==-1}" @click="sqlxsActive('all','',-1,1)"><i class="iconfont icon-info"></i><span>全部</span></li>
            <li 
              v-for="(sqlx,index) in sqlxs" 
              :key="sqlx.id" 
              :class="{active:index==sqlxsNum}" 
              @click="sqlxsActive(sqlx.id,'',index,1)"
            >
              <i class="iconfont" :class="sqlxsIco[index]"></i>
              <span>{{ sqlx.name }}</span>
              <em v-if="sqlx.sl">{{ sqlx.sl }}</em>
            </li>
          </ul>
        </div>
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
      sqlxsIco: [
        'icon-notifications',
        'icon-user',
        'icon-hot',
        'icon-crown',
        'icon-repeat-',
        'icon-fb-messenger',
        'icon-route',
        'icon-route',
        'icon-route',
      ],
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
  .child-box {
    .right-box {
      .sq {
        margin-bottom: 20px;
        button {
          width: 100%;
          height: 60px;
          color: #fff;
          font-size: $font-size-lgx;
          @include radius(5px);
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