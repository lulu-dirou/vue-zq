<template>
  <div class="listAppealSqlx">
    <el-row :gutter="10">
      <el-col :span="8" v-for="(list,index) in lists" :key="list.id" >
        <div class="grid-content" :class="{active:index==num}">
          <i class="iconfont icon-close" @click="clearActive"></i>
          <span @click="isActive(index)">{{ list.name }}</span>
        </div>
        </el-col>
    </el-row>

  </div>
</template>


<script>

export default {
  components: {
  },
  props: {
  },
  data: function() {
    return {
      lists:[],
      num: null
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getApi: function(){
      this.$http.post(this.$url.sq.getSqlx,{
      }).then((res) => {
        this.lists = res.data.body.sqlx
      })
    },
    isActive: function(index){
      this.num = index
    },
    clearActive: function(){
      this.num = null
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
.listAppealSqlx {
  .el-col {
    position: relative;
    margin-bottom: 10px;
    .grid-content {
      position: relative;
      border: 1px solid #e1e1e1;
      font-size: $font-size-xs;
      cursor: pointer;
      @include theme_bd(neutral-border);
      span {
        display: block;
        padding: 5px 0;
        text-align: center;
        @include lines(1);
      }
      i {
        display: none;
        position: absolute;
        right: 0;
        top: 0;
        font-size: $font-size-xs;
        @include theme_font(warning);
      }
      &.active {
        @include theme_font(warning);
        @include theme_bd(warning);
        @include theme_bg(warning,0.1);
        i {
          display: block;
        }
      }
      &:hover {
        @include theme_bd(warning);
      }
    }
  }
}
</style>