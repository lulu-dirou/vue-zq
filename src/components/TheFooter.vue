<template>
  <footer class="the-footer">
    <div class="footer">
      <p class="link">
        <router-link to="/home"><span>首页</span></router-link>|
        <router-link to="/appeal"><span>诉求</span></router-link>|
        <router-link to="/policy"><span>政策</span></router-link>|
        <router-link to="/declare"><span>申报</span></router-link>
      </p>
      <p>Copyright © 2018 -  OKing Co.,Ltd All Rights Reserved 禅城区政企服务中心，服务热线：0757-82271580</p>
      <p>技术支持：广东奥博信息产业股份有限公司</p>
    </div>
<!--     <div class="footer flex">
      <div class="link">
        <ul class="flex">
          <li>
            <span class="title">政企首页</span>
            <dl>
              <dd>法律声明</dd>
              <dd>官方微信公众号</dd>
              <dd>违规有害信息举报</dd>
            </dl>
          </li>
          <li>
            <span class="title">联系与合作</span>
            <dl>
              <dd>联系我们</dd>
              <dd>用户反馈</dd>
              <dd>常见问题</dd>
            </dl>
          </li>
          <li>
            <span class="title">移动客户端</span>
            <dl>
              <dd>微网站</dd>
              <dd class="new">Android版本</dd>
              <dd class="hot">微信</dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="about">
        <ul>
          <li>
            <span class="title">关注我们</span>
            <dl>
              <dd>新浪微博：@广东奥博</dd>
              <dd>联系客服：在线客服</dd>
              <dd>官方微信：</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div> -->
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
    // .link {
    //   flex: 1;
    // }
    // .about {
    //   border-left: 1px solid rgba(#fff,0.2);
    //   border-right: 1px solid rgba(#fff,0.2);
    //   padding: 0 40px;
    //   flex: 0 0 300px;
    //   margin-left: 20px;
    // }
    // li {
    //   margin-right: 60px;
    //   .title {
    //     display: block;
    //     margin-bottom: 20px;
    //     color: rgba(#fff,0.7);
    //   }
    //   dd {
    //     color: rgba(#fff,0.5);
    //     margin-bottom: 5px;
    //   }
    //   .new {
    //     @include theme_font(primary-light);
    //   }
    //   .hot {
    //     @include theme_font(warning);
    //   }
    // }
  }
}
</style>