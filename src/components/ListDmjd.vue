<template>
  <div class="listDmjd">
    <ul class="flex">
      <li v-for="(list,index) in lists" :key="list.id">
        <div class="img-box"><img src="../common/images/imgAj.png" class="aj"><img :src="lists[index].imgUrl"></div>
        <div class="msg-box">
          <span class="title"><a href="">{{ lists[index].title }}</a></span>
          <span class="label">{{ lists[index].label }}</span>
          <span class="time">{{ lists[index].time }}</span>
        </div>
        <div class="edit-box flex-middle"><i class="iconfont icon-pin" title="收藏"></i></div>
      </li>
    </ul>
  </div>
</template>


<script>
import ImgUrl1 from '../common/images/dmjdFm_1.png'
import ImgUrl2 from '../common/images/dmjdFm_2.png'
import ImgUrl3 from '../common/images/dmjdFm_3.png'
import ImgUrl4 from '../common/images/dmjdFm_4.png'
// import ImgUrl5 from '../common/images/dmjdFm_5.png'
// import ImgUrl6 from '../common/images/dmjdFm_6.png'

export default {
  components: {
  },
  props: {
  },
  data: function() {
    return {
      lists : [
        {
          imgUrl: ImgUrl1,
          title: '关于深化产教融合的实施意见',
          label: '动漫图片',
          time: '2018-12-12'
        },
        {
          imgUrl: ImgUrl2,
          title: '广东省进一步扩大对外开放积极利用外资若干政策措施',
          label: '动漫图片',
          time: '2018-12-07'
        },
        {
          imgUrl: ImgUrl3,
          title: '佛山市推进广东省农业科技示范市建设专项资金管理方法政策解读',
          label: '动漫图片',
          time: '2018-12-05'
        },
        {
          imgUrl: ImgUrl4,
          title: '广东省降低制造业企业成本支持实体经济发展的若干政策措施政策解读',
          label: '动漫图片',
          time: '2018-11-24'
        },
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
.listDmjd {
  ul {
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: -10px;
    li {
      position: relative;
      padding: 20px;
      top: 0;
      flex: 0 0 24%;
      margin-bottom: 10px;
      background-color: #fff;
      @include transition(0.2s);
      @include radius(2px);
      &:hover {
        z-index: 2;
        top: -5px;
        @include shadow(0,0,20px,2px);
      }
      .img-box {
        position: relative;
        height: 90px;
        .aj {
          position: absolute;
          left: 0;
          top: 0;
        }
        img {
          width: 100%;
          height: 100%;
          @include radius(2px);
        }
      }
      .msg-box {
        .title {
          margin: 10px 0;
          @include lines(2);
        }
        .label {
          margin-right: 10px;
          font-size: $font-size-xs;
          @include theme_font(info);
        }
        .time {
          font-size: $font-size-xs;
          @include theme_font(neutral-disabled);
        }
      }
      .edit-box {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 25px;
        height: 25px;
        font-size: $font-size-xs;
        color: #fff;
        background: url("../common/images/sprite.png") 0 0 no-repeat;
        i {
          position: relative;
          top: 5px;
          left: 5px;
        }
      }
    }
  }
}
</style>