<template>
  <div class="list-zcgj-yes">
    <el-row :gutter="50">
      <el-col :span="12">
        <ul class="list clear">
          <li v-for="(item,index) in items" :key="item.id" v-if="index%2==0">
            <div class="main-box flex">
              <!-- <div class="pg">111</div> -->
              <div class="time"><em>2018-4</em><span>20</span></div>
              <div class="title-box">
                <div class="title">{{ item.e_title }}</div>
                <div class="msg-box flex">
                  <dd class="dd3"><span>匹配度</span><em><el-progress :percentage="item.e_pg"></el-progress></em></dd>
                  <dd class="dd1"><span>责任部门</span><em>{{ item.e_bm }}</em></dd>
                  <dd class="dd2"><span>有效期</span><em><b>{{ item.e_date }}年</b></em></dd>
                </div>
<!--                 <div class="msg"><span>责任部门：{{ item.e_bm }}</span><span>有效期：{{ item.e_date }}年</span></div>
                <div class="pg flex">匹配度：<el-progress :percentage="item.e_pg"></el-progress></div> -->
              </div>
            </div>
            <div class="intro-box"><p v-html="item.e_intro"></p></div>
            <div class="ctr-box">
              <button class="btn btn-sm btn0-primary hover focus">详细</button>
              <button class="btn btn-sm btn-primary-sec hover focus">我要申报</button>
            </div>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <ul class="list clear">
          <li v-for="(item,index) in items" :key="item.id" v-if="index%2==1">
            <div class="main-box flex">
              <div class="time"><em>2018-4</em><span>20</span></div>
              <div class="title-box">
                <div class="title">{{ item.e_title }}</div>
                <div class="msg-box flex">
                  <dd class="dd3"><span>匹配度</span><em><el-progress :percentage="item.e_pg"></el-progress></em></dd>
                  <dd class="dd1"><span>责任部门</span><em>{{ item.e_bm }}</em></dd>
                  <dd class="dd2"><span>有效期</span><em><b>{{ item.e_date }}年</b></em></dd>
                </div>
              </div>
            </div>
            <div class="intro-box"><p v-html="item.e_intro"></p></div>
            <div class="ctr-box">
              <button class="btn btn-sm btn0-primary hover focus">详细</button>
              <button class="btn btn-sm btn-primary-sec hover focus">我要申报</button>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
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
      items: [
        {
          e_pg: 88,
          e_title: '佛山市禅城区促进“百企争先”奖励办法 & 佛山市禅城区促进“百企争先”奖励办法补充规定',
          e_bm: '禅城区经济和科技促进局',
          e_time: '2019-1-19',
          e_date: '10',
          e_intro: '<span>1.</span> A类企业奖励：<b>50万元</b>。</br><span>2.</span> B类企业奖励：<b>30万元</b>。'
        },
        {
          e_pg: 89,
          e_title: '佛山市禅城区经济和科技促进局关于修订佛山市禅城区加快培育高新技术企业和推进企业研发机构建设实施细则的通知',
          e_bm: '禅城区经济和科技促进局',
          e_time: '2019-1-18',
          e_date: '10',
          e_intro: '<span>1.</span> A类企业奖励：<b>50万元</b>。'
        },
        {
          e_pg: 95,
          e_title: '佛山市禅城区人民政府办公室关于印发佛山市禅城区工业设计产业发展扶持办法（试行）的通知',
          e_bm: '禅城区经济和科技促进局',
          e_time: '2019-1-12',
          e_date: '10',
          e_intro: '<span>1.</span> A类企业奖励：<b>50万元</b>。</br><span>2.</span> B类企业奖励：<b>30万元</b>。'
        },
        {
          e_pg: 81,
          e_title: '佛山市禅城区人民政府办公室关于印发佛山市禅城区生命健康产业促进办法的通知',
          e_bm: '禅城区经济和科技促进局',
          e_time: '2019-1-04',
          e_date: '10',
          e_intro: '<span>1.</span> A类企业奖励：<b>50万元</b>。</br><span>2.</span> B类企业奖励：<b>30万元</b></br><span>3.</span> C类企业奖励：<b>20万元</b>。'
        },
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
.list-zcgj-yes {
  .list {
    li {
      margin-bottom: 20px;
      background-color: #fff;
      // @include radius(10px);
      .main-box {
        padding: 20px 30px;
        border-bottom: 1px solid #e1e1e1;
        .time {
          width: 80px;
          height: 80px;
          margin-right: 30px;
          text-align: center;
          // @include theme_font(primary);
          @include shadow(0,15px,30px,0,rgba(#000,0.15));
          @include radius(10px);
          span {
            display: block;
            font-size: 30px;
            font-weight: 600;
          }
          em {
            display: block;
            margin-top: 10px;
            line-height: 1.5;
            font-size: $font-size-xs;
            font-weight: 600;
          }
        }
        .title-box {
          flex: 1;
          .title {
            margin-bottom: 20px;
            @include lines(2);
            @include theme_font(primary);
          }
          .msg-box {
            dd {
              padding-right: 20px;
              margin-right: 20px;
              border-right: 1px solid #e1e1e1;
              font-size: $font-size-sm;
              @include theme_bd(neutral_border);
              &:last-child {
                padding-right: 0;
                margin-right: 0;
                border-right: 0;
              }
              span {
                // @include theme_font(neutral-sec);
                display: block;
              }
              em {
                // @include theme_font(primary);
              }
              /deep/ .el-progress {
                margin-top: 2px;
                .el-progress-bar {
                }
                .el-progress-bar__outer {
                  @include theme_bg(neutral-border);
                  .el-progress-bar__inner {
                    @include theme_bg(primary-sec);
                  }
                }
                .el-progress__text {
                  @include theme_font(primary-sec);
                  font-weight: 600;
                  font-size: $font-size-xs!important;
                }
              }
            }
            .dd1 {
              flex: 1;
            }
            .dd2 {
              flex: 0 0 60px;
            }
            .dd3 {
              flex: 0 0 140px;
            }
          }
          // .pg {
          //   font-size: $font-size-xs;
          //   /deep/ .el-progress {
          //     width: 200px;
          //     .el-progress-bar__outer {
          //       @include theme_bg(neutral-border);
          //       .el-progress-bar__inner {
          //         @include theme_bg(success);
          //       }
          //     }
          //     .el-progress__text {
          //       @include theme_font(success);
          //       font-weight: 600;
          //       font-size: $font-size-xs!important;
          //     }
          //   }
          // }
          // .msg {
          //   margin-bottom: 5px;
          //   font-size: $font-size-xs;
          //   span {
          //     margin-right: 40px;
          //   }
          // }
        }
      }
      .intro-box {
        padding: 20px 30px;
        border-bottom: 1px solid #e1e1e1;
        /deep/ p {
          font-size: $font-size-sm;
          line-height: 1.5;
          span {
            font-weight: 600;
            @include theme_font(primary);
          }
          b {
            @include theme_font(primary-sec);
          }
        }
      }
      .ctr-box {
        text-align: right;
        padding: 10px 30px;
        button {
          width: 80px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>