<template>
  <footer class="the-footer">
    <div class="footer">
      <p class="link">
        <router-link to="/home"><span>首页</span></router-link>|
        <router-link to="/appeal"><span>诉求</span></router-link>|
        <router-link to="/policy"><span>政策</span></router-link>|
        <router-link to="/declare"><span>申报</span></router-link>
      </p>
      <p>Copyright © 2018 -  OKing Co.,Ltd All Rights Reserved 禅城区数据统筹局，服务热线：0757-82271580</p>
      <p>技术支持：广东奥博信息产业股份有限公司</p>
    </div>
  </footer>
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
.the-footer {
  padding: 40px 0;
  @include theme_bg(neutral-title);
  .footer {
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    p {
      line-height: 1.5;
      font-size: $font-size-xs;
      color: rgba(#fff,0.5);
    }
    .link {
      margin-bottom: 10px;
      a {
        display: inline-block;
        margin-right: 10px;
        margin-left: 10px;
        &:first-child {
          margin-left: 0;
        }
        span {
          color: rgba(#fff,0.5);
        }
        &:hover {
          span {
            color: rgba(#fff,1);
          }
        }
      }
    }
  }
}
</style>