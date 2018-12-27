<template>
  <div class="theDialogScreening">
                <!-- step1 -->
            <div class="Screening-box" v-if="true">
              <div class="title">1- 请选择政策方向</div>
              <div class="content">
                <div class="step-li">
                  <div class="ico"><i class="iconfont icon-user"></i></div>
                  <div class="msg">详细说明...</div>
                  <div class="button"><button class="btn btn-lg btn-primary">人才政策</button></div>
                </div>
                <div class="step-li">
                  <div class="ico"><i class="iconfont icon-qiye"></i></div>
                  <div class="msg">详细说明...</div>
                  <div class="button"><button class="btn btn-lg btn-primary">企业政策</button></div>
                </div>
              </div>
            </div>
            <!-- step2 -->
            <div class="Screening-box">
              <div class="title">2- 发展阶段</div>
              <div class="content content-sel">
                <!------->
                <ul v-if="true">
                <el-radio v-model="screeningStep1" label="1" border>初创期</el-radio>
                <el-radio v-model="screeningStep1" label="2" border>成长期</el-radio>
                <el-radio v-model="screeningStep1" label="3" border>成熟期</el-radio>
                </ul>
                <!------->
                <ul v-if="false">
                <el-radio v-model="screeningStep2" label="1" border>金融产业</el-radio>
                <el-radio v-model="screeningStep2" label="2" border>服务业</el-radio>
                <el-radio v-model="screeningStep2" label="3" border>制造业</el-radio>
                <el-radio v-model="screeningStep2" label="4" border>电子商务</el-radio>
                <el-radio v-model="screeningStep2" label="5" border>文旅产业</el-radio>
                <el-radio v-model="screeningStep2" label="6" border>物流产业</el-radio>
                <el-radio v-model="screeningStep2" label="7" border>生命健康</el-radio>
                </ul>
                <!------->
              </div>
              <div class="footer">
                <el-button >上一步</el-button>
                <el-button type="primary">下一步</el-button>
              </div>
            </div>
    <!-- <div class="screening-box">
      <div class="screening">
        
      </div>
    </div> -->

<!-- <el-steps :active="active" finish-status="success">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

<el-button style="margin-top: 12px;" @click="prev" v-if="prevShow">上一步</el-button>
<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
 -->
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
      screeningStep1: '1',
      screeningStep2: '1',
      active: 0,
      prevShow: true
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    prev() {
      if (this.active-- > 0) {
        this.active = 0;
      }
    },
    next() {
      if (this.active++ > 2) {
        this.active = 2;
      }
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
</style>