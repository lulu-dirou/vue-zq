<template>
  <div class="listDmjd">
    <ul class="clear">
      <li v-for="index in 3" :key="index.id" class="clear">
        <div class="img-box"><img src="../common/images/fullslide-3.jpg" alt=""></div>
        <div class="msg-box">
          <span class="title"><a href="">媒体：省政府发布《关于进一步加强野生动物保护管理工作的通知》 明年起5年全面禁猎野生鸟类</a></span>
          <span class="time">2018.12.12</span>
        </div>
      </li>
    </ul>
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
.listDmjd {
  ul {
    margin-right: -20px;
    margin-bottom: -10px;
    li {
      float: left;
      position: relative;
      width: 386px;
      padding: 10px 10px;
      margin: 0 20px 10px 0;
      border: 1px solid #e1e1e1;
      @include radius(2px);
      .img-box {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 60px;
        height: 40px;
        margin-right: 10px;
        background-color: #666;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .msg-box {
        margin-left: 80px;
        height: 40px;
        overflow: hidden;
        .title {
          @include lines(1);
        }
        .time {
          font-size: $font-size-xs;
          @include theme_font(neutral-disabled);
        }
      }
      &:hover {
        @include transition(0.2s);
        @include theme_bd(primary-light);
      }
    }
  }
}
</style>