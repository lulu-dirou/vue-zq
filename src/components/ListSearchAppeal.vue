<template>
  <div class="listSearch listSearchAppeal">
    <div class="search-box flex-middle">
      <input type="text" v-model="keyword" @keyup.enter="searchEnterFun"/>
      <button type="button" @click="clickSearch(keyword)"><i class="iconfont icon-search"></i></button>
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
      keyword: ''
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    clickSearch: function(val){
      this.$emit('search',val)
      this.keyword = ''
    },
    searchEnterFun: function(e){
      var keyCode = window.event? e.keyCode:e.which;
      if(keyCode == 13 ){
        this.clickSearch(this.keyword)
      }
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
</style>