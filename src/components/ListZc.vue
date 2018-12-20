<template>
  <div class="listZc">
    <ul>
      <li v-for="list in 5" :key="list.id">
        <dd class="dd-1 flex-middle"><span class="title-max btn btn-sm">企业云服务平台</span><el-button icon="el-icon-star-off" circle size="mini"></el-button></dd>
        <!-- <dd class="dd-2"><span class="title"><router-link to="/policy/detail">2018年度广东省科学技术奖评审方案</router-link></span></dd> -->
        <dd class="dd-2"><span class="title"><router-link :to="{path:'/policy/detail'}">2018年度广东省科学技术奖评审方案</router-link></span></dd>
        <dd class="dd-3"><span class="label">企业标签：<em>电力市场，运营系统，现货交易，系统功能指南</em></span></dd>
        <dd class="dd-4"><span class="time">发布时间：<em class="font-info">2018-11-27 12:32:02</em></span><span class="time">阅读量：<em class="font-info">140</em></span></dd>
      </li>
      <li class="pagination">
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
  },
  data: function() {
    return {
      currentPage: 1,
    }
  },
  computed: {
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
.listZc {
  ul {
    li {
      padding: 20px;
      border-bottom: 1px solid #e1e1e1;
      background: #fff;
      @include theme_bd(neutral-border);
      &:last-child {
        border-bottom: 0;
      }
      dd {
        margin: 5px 0;
        &.dd-1 {
          justify-content: space-between;
        }
      }
      .title-max {
        @include theme_font(warning);
        @include theme_bd(warning,0.3);
        @include theme_bg(warning,0.1);
      }
      .title {
        font-size: $font-size-lg;
        &:hover {
          text-decoration: underline;
        }
      }
      .label {
        font-size: $font-size-xs;
        @include theme_font(neutral,0.6);
        em {
          @include theme_font(primary,0.8);
          @include theme_bg(primary,0.08);
        }
      }
      .time {
        margin-right: 20px;
        font-size: $font-size-xs;
        @include theme_font(neutral,0.6);
      }
    }
  }
}
</style>