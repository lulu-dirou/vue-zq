<template>
  <div class="listWzjd">
    <ul>
      <li v-for="(list,index) in lists" :key="list.id" class="flex">
        <div class="dot-box"><span>{{ index+1 }}</span></div>
        <div class="msg-box">
          <span class="title"><a href="">{{ lists[index].title }}</a></span>
          <span class="label">{{ lists[index].label }}</span>
          <span class="time">{{ lists[index].time }}</span>
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
      lists : [
        {
          title: '提振民营企业信心营造良好法治环境--全面清理不利明规则更要清理暗规则',
          time: '2018-12-12'
        },
        {
          title: '改革开放大潮中的全面依法治国壮丽诗篇',
          time: '2018-12-07'
        },
        {
          title: '媒体：建学校增学位　办人民满意教育',
          time: '2018-12-05'
        },
        // {
        //   title: '佛山市市级现代农业研究中心认定标准政策解读',
        //   time: '2018-11-24'
        // },
        // {
        //   imgUrl: ImgUrl5,
        //   title: '佛山市重点品牌展会认定扶持方法政策解读',
        //   label: '动漫图片',
        //   time: '2018-11-12'
        // },
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
.listWzjd {
  ul {
    li {
      padding: 15px 15px;
      border-bottom: 1px solid #e1e1e1;
      @include theme_bd(neutral-divider);
      &:last-child {
        border-bottom: 0;
      }
      .dot-box {
        margin-right: 10px;
        span {
          display: block;
          width: 15px;
          height: 15px;
          line-height: 15px;
          text-align: center;
          color: #fff;
          font-size: $font-size-xs;
          @include theme_bg(primary-light);
        }
      }
      .msg-box {
        .title {
          @include lines(1);
        }
        .time {
          font-size: $font-size-xs;
          @include theme_font(info);
        }
      }
    }
  }
}
</style>