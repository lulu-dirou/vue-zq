// 依赖包
import Axios from 'axios' 
import Qs from 'qs'
import Store from '../store/store'


//创建axios实例
const instance = Axios.create({
  'X-Requested-With': 'XMLHttpRequest',
  timeout: 16000,
  baseURL: '/api' //引用vue.config配置文件
})


// 调试loading方法
function showLoading(){
  console.log('/loading/');
}
function hideLoading(){
  console.log('/end/');
}

// 错误状态方法
function errStatus(error){
  if(error && error.response){
    switch(error.response.status){
    case 400:
      error.message = '错误请求：400'
      break;
    case 401:
      error.message = '未授权，请重新登录：401'
      break;
    case 403:
      error.message = '拒绝访问：403'
      break;
    case 404:
      error.message = '请求错误,未找到该资源：404'
      break;
    case 405:
      error.message = '请求方法未允许:405'
      break;
    case 408:
      error.message = '请求超时:408'
      break;
    case 500:
      error.message = '服务器端出错:500'
      break;
    case 501:
      error.message = '网络未实现：501'
      break;
    case 502:
      error.message = '网络错误:502'
      break;
    case 503:
      error.message = '服务不可用:503'
      break;
    case 504:
      error.message = '网络超时:504'
      break;
    case 505:
      error.message = 'http版本不支持该请求:505'
      break;
    default:
      error.message = `连接错误${error.response.status}`
      break;
    }
  }else{
    error.message = "连接到 服务器 失败"
  }
  console.log('错误信息：'+error.message)
}


// 添加"请求"拦截器
// 在发送请求之前做些什么
// 对请求错误做些什么
instance.interceptors.request.use(
  function(config){
    //headers都加上Content-Type
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    //判断是否存在token,则header都加上token
    if(Store.state.Member.token){
      config.headers.Authorization = `token ${Store.state.Member.token}`;
      config.headers.token = Store.state.Member.token
    }
    //测试loading方法
    showLoading();
    return config
  },
  function(error){
    return Promise.reject(error)
  }
)


// 添加"响应"拦截器
// 对响应数据做点什么
// 对响应错误做点什么
instance.interceptors.response.use(
  function(response){ 
    // Store.state.xLoading.loading = false;
    hideLoading();
    console.log(response);
    return response
  },
  function(error){
    errStatus(error)
    // Store.state.xLoading.loading = false
    return Promise.reject(error)
  }
)


export default {
  // 封装get请求(@接口地址,@接口参数,@服务器响应的数据类型,默认json,图片流用arraybuffer)
  get: function(url,data,json){
    return new Promise((resolve,reject)=>{
      instance({
        method:'get',
        url: url,
        data: Qs.stringify(data),
        responseType: json
      }).then(res=>{
        resolve(res);     
      }).catch(err=>{
        reject(err);
      })
    })
  },
  // 封装post请求(@接口地址,@接口参数,@服务器响应的数据类型,默认json,图片流用arraybuffer)
  post: function(url,data,json){
    return new Promise((resolve,reject)=>{
      instance({
        method:'post',
        url: url,
        data: Qs.stringify(data),
        responseType: json
      }).then(res=>{
        resolve(res);
      }).catch(err=>{
        reject(err);
      })
    })
  }
}

