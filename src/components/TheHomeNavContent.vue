<template>
  <div class="theHomeNavContent">
    <el-row :gutter="20">


      <el-col :span="18">
        <el-row :gutter="20">
          <el-col :span="8">
            <span>111</span>
          </el-col>
          <el-col :span="8">
            <span>111</span>
          </el-col>
          <el-col :span="8">
            <span>111</span>
          </el-col>
        </el-row>
      </el-col>


      <el-col :span="6">
        <span>111</span>
      </el-col>



    </el-row>
  </div>
</template>


<script>
import TheVideo from './TheVideo.vue'
import ListNews from './ListNews.vue'

export default {
  components: {
    'the-video': TheVideo,
    'list-news': ListNews,
  },
  props: {
  },
  data: function() {
    return {
      hotActiveName: '1',
      fcListActiveName: '1',
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
.theHomeNavContent {
  padding: 20px;
  background-color: #fff;
  @include shadow(0,0,20px,5px,rgba(#000,0.1));
  span {
    display: block;
    background-color: #e1e1e1;
  }
}
</style>