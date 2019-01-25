<template>
  <div class="setting-qy">
    <el-form :model="postFrom" status-icon ref="postFrom" label-width="150px" class="postFrom" size="mini">
      <ul>
        <li>
          <div class="header">企业账号注册信息</div>
          <div class="content">
            <el-row :gutter="20">
              <el-col :span="14">
                <el-form-item label="企业名称："><el-input></el-input></el-form-item>
                <el-form-item label="法人代表："><el-input></el-input></el-form-item>
                <el-form-item label="统一社会信用代码："><el-input></el-input></el-form-item>
                <el-form-item label="邮箱："><el-input></el-input></el-form-item>
                <el-form-item label="营业执照：">
                  <el-upload
                    class="license-upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="licenseHandlePreview"
                    :on-remove="licenseHandleRemove"
                    :file-list="licenseList"
                    list-type="picture">
                    <button type="button" class="btn btn-sm btn0-primary hover focus">点击上传</button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
                  </el-upload>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="企业标志：">
                  <el-upload
                    class="logo-upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="logoHandleSuccess"
                    :before-upload="logoBeforeUpload">
                    <img v-if="logoURL" :src="logoURL" class="logo">
                    <i v-else class="el-icon-plus logo-upload-icon"></i>
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </li>
        <li>
          <div class="header">企业基本信息</div>
          <div class="content">
            <el-row :gutter="20">
              <el-col :span="12"><el-form-item label="企业名称："><el-input></el-input></el-form-item></el-col>
              <el-col :span="12"><el-form-item label="统一社会信用代码："><el-input></el-input></el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12"><el-form-item label="注册资本："><el-input><span slot="suffix">万元</span></el-input></el-form-item></el-col>
              <el-col :span="12"><el-form-item label="注册时间："><el-date-picker
              v-model="timeValue"
              type="date"
              placeholder="选择日期">
            </el-date-picker></el-form-item></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12"><el-form-item label="所属行业：">
                <el-select v-model="hyValue" placeholder="请选择">
                  <el-option
                    v-for="hy in hys"
                    :key="hy.value"
                    :label="hy.label"
                    :value="hy.value">
                  </el-option>
                </el-select>
              </el-form-item></el-col>
              <el-col :span="12"><el-form-item label="企业类型：">
                <el-select v-model="qylxValue" placeholder="请选择">
                  <el-option
                    v-for="qylx in qylxs"
                    :key="qylx.value"
                    :label="qylx.label"
                    :value="qylx.value">
                  </el-option>
                </el-select>
              </el-form-item></el-col>
            </el-row>
            <el-row>
              <el-form-item label="经营范围："><el-input type="textarea"></el-input></el-form-item>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="企业地址：">
                  <el-row :gutter="0">
                    <el-col :span="4">
                      <el-select v-model="ProvincialValue" placeholder="请选择">
                        <el-option
                          v-for="provincial in Provincials"
                          :key="provincial.value"
                          :label="provincial.label"
                          :value="provincial.value">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="4">
                      <el-select v-model="CityValue" placeholder="请选择">
                        <el-option
                          v-for="city in Citys"
                          :key="city.value"
                          :label="city.label"
                          :value="city.value">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="4">
                      <el-select v-model="DistrictValue" placeholder="请选择">
                        <el-option
                          v-for="district in Districts"
                          :key="district.value"
                          :label="district.label"
                          :value="district.value">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="12"><el-input></el-input></el-col>
                  </el-row>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </li>
        <li>
          <div class="header">企业经营信息</div>
          <div class="content">
            <el-row>
              <el-form-item label="企业资质信息：">
                <el-checkbox-group v-model="checkListZz">
                  <el-checkbox label="高新技术企业"></el-checkbox>
                  <el-checkbox label="民营科技企业"></el-checkbox>
                  <el-checkbox label="软件企业"></el-checkbox>
                  <el-checkbox label="科技型中小企业"></el-checkbox>
                  <el-checkbox label="技术先进企业"></el-checkbox>
                  <el-checkbox label="领军人才企业"></el-checkbox>
                  <el-checkbox label="两化融合管理体系贯标示范的企业"></el-checkbox>
                  <el-checkbox label="其它"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="技术能力信息：">
                <el-switch
                  v-model="switchVal1"
                  inactive-text="是否有注册商标：">
                </el-switch>
                <br/>
                <el-switch
                  v-model="switchVal2"
                  inactive-text="是否有专利：">
                </el-switch>
                <br/>
                <el-switch
                  v-model="switchVal3"
                  inactive-text="是否有软件著作权：">
                </el-switch>
              </el-form-item>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12"><el-form-item label="企业总人数："><el-input><span slot="suffix">人</span></el-input></el-form-item></el-col>
              <el-col :span="12"><el-form-item label="研发人员数："><el-input><span slot="suffix">人</span></el-input></el-form-item></el-col>
            </el-row>
            <el-row>
              <el-form-item label="企业荣誉信息："><el-input type="textarea"></el-input></el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="知识产权："><el-input type="textarea"></el-input></el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="营收信息：">
                <p class="font-xs font-primary-light">单位：万元</p>
                <table class="tc tc-f tc-b tc-pdt8 tc-pdl8">
                  <thead>
                    <tr>
                      <th>年份</th>
                      <th>资产总额</th>
                      <th>营业收入</th>
                      <th>利润总额</th>
                      <th>净利润</th>
                      <th>纳税总额</th>
                      <th>研发投入</th>
                      <th>技改投入</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="width:70px">2018年</td>
                      <td><el-form-item><el-input></el-input></el-form-item></td>
                      <td><el-form-item><el-input></el-input></el-form-item></td>
                      <td><el-form-item><el-input></el-input></el-form-item></td>
                      <td><el-form-item><el-input></el-input></el-form-item></td>
                      <td><el-form-item><el-input></el-input></el-form-item></td>
                      <td><el-form-item><el-input></el-input></el-form-item></td>
                      <td><el-form-item><el-input></el-input></el-form-item></td>
                    </tr>
                  </tbody>
                </table>
              </el-form-item>
            </el-row>
          </div>
        </li>
      </ul>
      <div class="footer">
        <button type="button" class="btn btn-lg btn-primary hover focus">&nbsp;&nbsp;&nbsp;保存修改&nbsp;&nbsp;&nbsp;</button>
      </div>
    </el-form>
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
      postFrom: {},
      timeValue: '',
      logoURL: '',
      qylxValue: '请选择',
      qylxs: [
        {value: '1',label: '内资'},
        {value: '2',label: '外资'},
        {value: '3',label: '内资'},
      ],
      hyValue: '请选择',
      hys: [
        {value: '1',label: '农、林、牧、渔业'},
        {value: '2',label: '采矿业'},
        {value: '3',label: '制造业'},
      ],
      ProvincialValue: '请选择',
      Provincials: [
        {value: '1',label: '广东省'},
        {value: '2',label: '广西省'},
        {value: '3',label: '江苏省'},
      ],
      CityValue: '请选择',
      Citys: [
        {value: '1',label: '广州市'},
        {value: '2',label: '佛山市'},
        {value: '3',label: '中山市'},
      ],
      DistrictValue: '请选择',
      Districts: [
        {value: '1',label: '禅城区'},
        {value: '2',label: '南海区'},
        {value: '3',label: '三水区'},
      ],
      checkListZz: ['高新技术企业'],
      switchVal1: false,
      switchVal2: false,
      switchVal3: false,
      licenseList: [],
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    licenseHandleRemove(file, fileList) {
      console.log(file, fileList);
    },
    licenseHandlePreview(file) {
      console.log(file);
    },
    logoHandleSuccess(res, file) {
      this.logoURL = URL.createObjectURL(file.raw);
    },
    logoBeforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isGIF = file.type === 'image/gif';
      const isPNG = file.type === 'image/png';
      const isBMP = file.type === 'image/bmp';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG && !isGIF && !isPNG && !isBMP) {
        this.$message.error('上传头像图片只能是 JPG/GIF/PNG/BMP 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return (isJPG || isBMP || isGIF || isPNG) && isLt2M;
    }
  },
  created: function(){
  },
  mounted: function(){
  }
}
</script>


<style lang="scss" scoped>
.setting-qy {
  ul {
    li {
      margin-bottom: 40px;
      border: 1px solid #e1e1e1;
      @include theme_bd(neutral-border);
      @include shadow(0,5px,20px,0,rgba(#000,0.1));
      .header {
        padding: 10px 0;
        border-bottom: 1px solid #e1e1e1;
        text-align: center;
        font-weight: 600;
        @include theme_font(primary);
        @include theme_bd(neutral-border);
        @include theme_bg(neutral-divider);
      }
      .content {
        padding: 30px;
        >.el-row {
          margin-bottom: 20px;
        }
      }
    }
  }
  .footer {
    text-align: center;
  }
}
</style>