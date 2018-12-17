<template>
  <footer class="theFooter">
    <div class="footer flex">
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
.theFooter {
  padding: 40px 0;
  @include theme_bg(neutral-title);
  .footer {
    width: 1200px;
    margin: 0 auto;
    .link {
      flex: 1;
    }
    .about {
      border-left: 1px solid rgba(#fff,0.2);
      border-right: 1px solid rgba(#fff,0.2);
      padding: 0 40px;
      flex: 0 0 300px;
      margin-left: 20px;
    }
    li {
      margin-right: 60px;
      .title {
        display: block;
        margin-bottom: 20px;
        color: rgba(#fff,0.7);
      }
      dd {
        color: rgba(#fff,0.5);
        margin-bottom: 5px;
      }
      .new {
        @include theme_font(primary-light);
      }
      .hot {
        @include theme_font(warning);
      }
    }
  }
}
</style>