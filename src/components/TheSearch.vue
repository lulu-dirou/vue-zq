<template>
  <div class="theSerch">
    <div class="search-box flex-middle">
      <input type="text"/>
      <button type="button"><i class="el-icon-search"></i></button>
    </div>
    <div class="hotWords">
      <span>热门搜索：</span>
      <a href="">上市扶持</a>
      <span>，</span>
      <a href="">找商铺</a>
      <span>，</span>
      <a href="">新企业注册</a>
      <span>，</span>
      <a href="">税务办理</a>
      <span>，</span>
      <a href="">人力社保</a>
    </div>
  </div>
</template>


<script >
export default {
  components: {
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
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.theSerch {
  .search-box {
    input {
      width: 500px;
      height: 40px;
      padding: 0 10px;
      border: 0;
      @include radius(2px 0 0 2px);
    }
    button {
      width: 100px;
      height: 40px;
      border: 0;
      color: #fff;
      font-size: $font-size-lgx;
      cursor: pointer;
      @include radius(0 2px 2px 0);
      @include theme_bg(primary);
    }
  }
  .hotWords {
    padding: 10px 0;
    text-align: center;
    span {
      color: rgba(#fff,0.7);
      @include text-shadow()
    }
    a {
      color: #fff;
      @include text-shadow()
    }
  }
}
</style>