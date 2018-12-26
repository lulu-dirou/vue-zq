<template>
  <div class="theDetailbar">
    <ul class="clear">
      <li><a href="">基本信息</a></li>
      <li><a href="">扶持对象</a></li>
      <li><a href="">申报条件</a></li>
      <li></li>
    </ul>
    <div class="btn-box">111</div>
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
.theDetailbar {
  position: fixed;
  right: 20px;
  top: 50%;
  width: 50px;
  background-color: #ccc;
  ul {
    li {
      border-bottom: 1px solid #e1e1e1;
      a {
        display: block;
        padding: 8px 8px;
        line-height: 1.2;
        text-align: center;
      }
    }
  }
  .btn-box {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>