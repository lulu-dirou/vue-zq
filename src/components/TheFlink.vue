<template>
  <div class="theFlink">
    <div class="box">
      <el-row :gutter="40">
        <el-col :span="6">
          <el-select v-model="value1" @change="getUrl(value1);">
            <el-option
              v-for="item in options1"
              :key="item.label"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="value2" @change="getUrl(value2);">
            <el-option
              v-for="item in options2"
              :key="item.label"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="value3" @change="getUrl(value3);">
            <el-option
              v-for="item in options3"
              :key="item.label"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="value4" @change="getUrl(value4);">
            <el-option
              v-for="item in options4"
              :key="item.label"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
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
      value1: '区政府部门',
      options1: [{
        value: 'http://www.1261.com',
        label: '区教育局'
      }, {
        value: 'http://www.126.com',
        label: '区审计局'
      }],
      value2: '本区重要机构',
      options2: [{
        value: 'http://www.1261.com',
        label: '区教育局'
      }, {
        value: 'http://www.126.com',
        label: '区审计局'
      }],
      value3: '垂直管理部门',
      options3: [{
        value: 'http://www.1261.com',
        label: '区教育局'
      }, {
        value: 'http://www.126.com',
        label: '区审计局'
      }],
      value4: '其它单位',
      options4: [{
        value: 'http://www.1261.com',
        label: '区教育局'
      }, {
        value: 'http://www.126.com',
        label: '区审计局'
      }],
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getUrl: function(val){
      window.open(val);
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss">
.theFlink {
  padding: 20px 0;
  @include theme_bg(neutral-divider);
  .box {
    width: 1200px;
    margin: 0 auto;
    .el-select {
      width: 100%;
      .el-input__inner {
        @include theme_font(neutral,0.6);
      }
      .el-input .el-select__caret {
        @include theme_font(neutral);
      }
    }
  }
}
</style>