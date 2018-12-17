<template>
  <div class="listNews">
    <ul class="clear">
      <li v-for="(list,index) in lists" :key="list.id" class="flex-middle">
        <div class="dot-box"><span></span></div>
        <div class="msg-box"><a href=""><span class="title">{{ lists[index].title }}</span></a></div>
        <div class="time-box"><span class="time">{{ lists[index].time }}</span></div>
      </li>
    </ul>
    <el-button size="small" round plain type="primary">更多</el-button>
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
      lists: [
        { 
          title: '鲁毅主持召开市委常委会会议 ' ,
          time: '2018-12-30'
        },
        { 
          title: '全市扫黑除恶专项斗争推进会召开 ' ,
          time: '2018-12-30'
        },
        { 
          title: '第十届佛山（禅城）岭南年俗欢乐节下周五启动 ' ,
          time: '2018-12-30'
        },
        { 
          title: '佛山食品药品安全百日行动硕果累累 案件查处实现历史性突破 ' ,
          time: '2018-12-30'
        },
        { 
          title: '全国政府网站绩效评估出炉 禅城区政府门户网站排名区县级第二 ' ,
          time: '2018-12-30'
        },
        { 
          title: '《佛山历史文化丛书》（第三辑）出版 ' ,
          time: '2018-12-30'
        },
        { 
          title: '鲁毅主持召开市委常委会会议 ' ,
          time: '2018-12-30'
        },
        { 
          title: '全市扫黑除恶专项斗争推进会召开 ' ,
          time: '2018-12-30'
        }
      ]
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
.listNews {
  ul {
    li {
      position: relative;
      margin: 15px 0;
      .dot-box {
        flex: 0 0 20px;
        span {
          display: block;
          width: 6px;
          height: 6px;
          @include radius(100px);
          @include theme_bg(warning);
        }
      }
      .msg-box {
        flex: 1;
        .title {
          @include lines(1);
        }
      }
      .time-box {
        margin-left: 20px;
        .time {
          @include theme_font(neutral-disabled);
        }
      }
    }
  }
}
</style>