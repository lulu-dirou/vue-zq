<template>
  <div class="listWzjd">
    <ul>
      <li v-for="(list,index) in filterLists" :key="list.id" class="flex">
        <div class="dot-box"><span>{{ index+1 }}</span></div>
        <div class="msg-box">
          <span class="title"><a href="">{{ lists[index].title }}</a></span>
          <span class="time">{{ lists[index].time }}</span>
        </div>
      </li>
      <li class="pagination" v-if="paginationShow">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="100"
          layout="total, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  components: {
  },
  props: {
    listNum: Number,
    paginationShow: Boolean,
  },
  data: function() {
    return {
      currentPage: 1,
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
        {
          title: '佛山市市级现代农业研究中心认定标准政策解读',
          time: '2018-11-24'
        },
        {
          title: '佛山市重点品牌展会认定扶持方法政策解读',
          time: '2018-11-12'
        },
      ]
    }
  },
  computed: {
    filterLists: function(){
      return this.lists.slice(0, this.listNum)
    }
  },
  watch: {
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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
      background-color: #fff;
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