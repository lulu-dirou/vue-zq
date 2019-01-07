<template>
  <div class="the-home-nav">
    <el-row :gutter="40">
      <el-col :span="6">
        <div class="grid-content">
          <div class="ico ico-01"></div>
          <div class="msg clear">
            <span>企业查一查</span>
            <em></em>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="ico ico-02"></div>
          <div class="msg clear">
            <span>工商事项</span>
            <em></em>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
          <div class="grid-content">
          <div class="ico ico-03"></div>
          <div class="msg clear">
            <span>税务事项</span>
            <em></em>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <div class="ico ico-04"></div>
          <div class="msg clear">
            <span>自助咨询</span>
            <em></em>
          </div>
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
.the-home-nav {
  width: 1200px;
  margin: 40px auto;
  .grid-content {
    position: relative;
    height: 80px;
    cursor: pointer;
    .ico {
      position: absolute;
      left: 0;
      top: 0;
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      background-color: #fff;
      @include transition(0.4s);
      @include radius(10px);
      @include shadow(0,15px,30px,0,rgba(#000,0.15));
      background-image: url("../common/images/home-nav.png");
      &.ico-01 {
        background-position: 0 0;
      }
      &.ico-02 {
        background-position: 0 -80px;
      }
      &.ico-03 {
        background-position: 0 -160px;
      }
      &.ico-04 {
        background-position: 0 -240px;
      }
    }
    .msg {
      position: relative;
      margin-left: 90px;
      span {
        display: block;
        margin: 15px 0 15px 0;
      }
      em {
        display: block;
        width: 20px;
        height: 6px;
        @include transition(0.2s);
        @include radius(100px);
        @include theme_bg(neutral-border);
      }
    }
    &:hover {
      .ico {
        @include rotateY();
      }
      .msg {
        span {
          @include theme_font(danger);
        }
        em {
          width: 40px;
          @include theme_bg(primary);
        }
      }
    }
  }
}
</style>