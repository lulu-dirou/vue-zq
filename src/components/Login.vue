<template>
  <div class="login-box" v-if="propsLoginShow">
    <div class="login">
      <h1>登录</h1>
      <ul>
        <li>
          <span>name:</span>
          <input type="text" v-model="userName">
        </li>
        <li>
          <span>password:</span>
          <input type="text" v-model="passWord">
        </li>
      </ul>
      <div>
        <button type="button" v-on:click="getApi">登录</button>
        <button type="button" v-on:click="modelClose">关闭</button>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>


<script>
export default {
  props: {
    propsLoginShow: Boolean
  },
  data: function(){
    return {
      loginShow : this.propsLoginShow,
      userName: '',
      passWord: ''
    }
  },
  methods: {
    modelClose: function(){
      this.$emit('emitModelClose',false)
    },
    //获取loginAPI
    getApi: function(){
      this.$http.post(this.$url.qyzcxx.login,{
        sjhm: this.userName,
        mm: this.$md5(this.passWord)
      }).then((res) => {
        if(res.status===200){
          if(res.data.errorCode == 1){
            alert("登录失败！请输入账号密码")
          }else if(res.data.errorCode == 2){
            alert("用户不存在")
          }else if(res.data.errorCode == 3){
            alert("密码错误")
          }else if(res.data.errorCode == -1) {
            this.$store.commit('setToken', res.data.body.token);
            this.$store.commit('getUser', res.data.body.qyzcxx.qymc);
            this.modelClose(); //关闭窗口
            this.$emit('emitMsgChange',false); //传给父组件
            this.getUserImgApi();
            //this.$router.push("./home"); //跳转到路由指定页面
          }
        }
      })
    },
    //获取头像API放到getApi里面调用,注意设置图片请求类型arraybuffer
    getUserImgApi: function(){
      this.$http.post(this.$url.qyzcxx.getQytx,{
        token: this.$store.state.Member.token,
      },'arraybuffer').then((res) => {
        //图片流转码
        var src = 'data:image/png;base64,'+ btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        this.$store.commit('getUserImg', src)
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.login-box {
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(#000,0.5);
  .login {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -250px;
    width: 400px;
    height: 500px;
    background-color: #fff;
  }
}
</style>