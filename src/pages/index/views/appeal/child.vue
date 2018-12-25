<template>
  <div class="child child-appeal">
    <div class="child-banner">
      <div class="w-1200">
        <list-search></list-search>
      </div>
    </div>
    <div class="child-box w-1200 flex">
      <div class="left-box"><list-appeal :paginationShow="true"></list-appeal></div>
      <div class="right-box">
        <div class="sq">
          <button class="btn-danger" @click="jump"><i class="iconfont icon-edit"></i>我要诉求</button>
          <!-- <el-button type="danger"><i class="iconfont icon-edit"></i>我要诉求</el-button> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ListSearch from '../../../../components/ListSearch'
import ListAppeal from '../../../../components/ListAppeal'

export default {
  components: {
    'list-search': ListSearch,
    'list-appeal': ListAppeal
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