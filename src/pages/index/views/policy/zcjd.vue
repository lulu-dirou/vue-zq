<template>
  <div class="zcjd flex">
    <div class="left-box">
      <div class="list-box">
        <list-dmjd v-if="num===0?'true':''"></list-dmjd>
        <list-spjd v-if="num===1?'true':''"></list-spjd>
        <list-wzjd v-if="num===2?'true':''"></list-wzjd>
      </div>
    </div>
    <div class="right-box">
      <div class="nav-max">
        <li :class="num===0?'active':''" @click="changeActive(0)">
          <div class="li-box flex"><i class="iconfont icon-screenshot"></i><span>动漫解读</span></div>
        </li>
        <li :class="num===1?'active':''" @click="changeActive(1)">
          <div class="li-box flex"><i class="iconfont icon-instagram"></i><span>视频解读</span></div>
        </li>
        <li :class="num===2?'active':''" @click="changeActive(2)">
          <div class="li-box flex"><i class="iconfont icon-burger-"></i><span>文字解读</span></div>
        </li>
      </div>
    </div>
  </div>
</template>


<script>
import ListDmjd from '../../../../components/ListDmjd'
import ListSpjd from '../../../../components/ListSpjd'
import ListWzjd from '../../../../components/ListWzjd'

export default {
  components: {
    'list-dmjd': ListDmjd,
    'list-spjd': ListSpjd,
    'list-wzjd': ListWzjd,
  },
  props: {
  },
  data: function() {
    return {
      num: 0,
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    changeActive(val){
      this.num = val;
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