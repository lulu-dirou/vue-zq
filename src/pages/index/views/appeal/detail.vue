<template>
  <div class="single appealDetail clear">
    <div class="navBar">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/appeal' }">诉求</el-breadcrumb-item>
        <el-breadcrumb-item>诉求明细</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--  -->
    <div class="single-box clear" v-loading="loading">
      <div class="title-box"><div class="title"><span><em>{{ lists.qymc }} - {{ lists.sqlxmc }}</em></span></div></div>
      <div class="msg-box">
        <section class="state-box flex">
          <div class="state"><button class="btn" :class="ztColor()">{{ ztMsg() }}</button></div>
          <div class="time">总耗时：<b class="font-warning">{{ lists.clts }}</b>天</div>
          <!-- <div class="chat"><button class="btn btn-primary-light">查看互动(0)</button></div> -->
        </section>
        <section class="cd-container">
          <!-- 发问 -->
          <div class="cd-timeline-block clear">
            <div class="cd-timeline-img cd-icoleft bg-primary"><i class="iconfont icon-comment-dots"></i></div>
            <div class="cd-timeline-content clear">
              <h2>{{ lists.qymc }}</h2>
              <p>{{ lists.xbnr }}</p>
              <span class="cd-date">{{ lists.fbsj }}</span>
            </div>
          </div>
          <!-- 回复 -->
          <div v-for="hf in hfs" :key="hf.id" class="cd-timeline-block right clear">
            <div class="cd-timeline-img cd-icoright bg-neutral-disabled"><i class="iconfont icon-dui"></i></div>
            <div class="cd-timeline-content clear">
              <h2>{{ hf.bmmc }}</h2>
              <p>{{ hf.xbhf }}</p>
              <span class="cd-date">{{ hf.cjsj }}</span>
            </div>
          </div>
          <!-- 等待 -->
          <div class="cd-timeline-block right clear" v-if="!lists.bmmc">
            <div class="cd-timeline-img cd-icoright bg-warning"><i class="iconfont icon-hourglass"></i></div>
            <div class="cd-timeline-content clear">
              <p>处理中,请等待...</p>
            </div>
          </div>
          <!-- 结束 -->
          <div class="cd-timeline-block right clear" v-if="lists.bmmc">
            <div class="cd-timeline-img cd-icoright bg-success"><i class="iconfont icon-dui"></i></div>
            <div class="cd-timeline-content clear">
              <h2>{{ lists.bmmc }}</h2>
              <p>{{ lists.xbhf }}</p>
              <span class="cd-date">{{ lists.clsj }}</span>
            </div>
          </div>
        </section>
      </div>
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
      loading: true,
      lists: {},
      hfs: []
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getApi: function(){
      var Sqid = this.$route.query.sqid
      var Xbid = this.$route.query.xbid
      this.$http.post(this.$url.sq.mhGetQysq,{
        token: this.$store.state.Member.token,
        sqid: Sqid,
        xbid: Xbid
      }).then((res) => {
        this.lists = res.data.body.sqcl
        this.hfs = res.data.body.jdxxs
        this.loading = false
      })
    },
    ztMsg: function(){
      switch(Number(this.lists.zt))
      {
        case 0: return '处理中'
        case 2: return '已办结'
      }
    },
    ztColor: function(){
      switch(Number(this.lists.zt))
      {
        case 0: return 'btn-warning'
        case 2: return 'btn-disabled'
      }
    },
  },
  created: function(){
    this.getApi()
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.appealDetail {
  .single-box {
    .title-box {
      .title {
        width: 1200px;
        text-align: center;
      }
    }
    .msg-box {
      width: 1200px;
    }
  }
}
.cd-container {
  position: relative;
  padding: 30px 0;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    @include theme_bg(neutral-divider);
  }
  .cd-timeline-block {
    position: relative;
    margin: 20px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .cd-timeline-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
      color: #fff;
      i { font-size: 24px; }
    }
    .cd-timeline-content {
      position: relative;
      margin-left: 60px;
      padding: 10px;
      @include radius(5px);
      @include theme_bg(neutral-divider);
      &:before {
        content: '';
        position: absolute;
        top: 16px;
        right: 100%;
        @include arrow(left,7px,#E8EAEC);
      }
      h2 {
        font-size: $font-size-lgm;
        font-weight: normal;
        @include theme_font(primary);
      }
      p {
        margin: 10px 0;
      }
      .cd-date {
        float: left;
        font-size: $font-size-xs;
        @include theme_font(neutral,0.6);
      }
    }
  }
}


@media only screen and (min-width: 1200px) {
  .cd-container {
    &:before {
      left: 50%;
      margin-left: -2px;
    }
    .cd-timeline-block {
      margin: 30px 0;
      .cd-timeline-img {
        width: 50px;
        height: 50px;
        line-height: 50px;
        left: 50%;
        margin-left: -25px;
        text-align: center;
      }
      .cd-timeline-content {
        margin-left: 0;
        width: 45%;
        &:before {
          left: 100%;
          @include arrow(right,7px,#E8EAEC);
        }
        .cd-date {
          position: absolute;
          width: 100%;
          left: 122%;
          top: 24px;
        }
      }
    }
    .cd-timeline-block.right {
      .cd-timeline-content {
        float: right;
        &:before {
          left: auto;
          right: 100%;
          @include arrow(left,7px,#E8EAEC);
        }
        .cd-date {
          left: auto;
          right: 122%;
          text-align: right;
        }
      }
    }
  }
}
</style>