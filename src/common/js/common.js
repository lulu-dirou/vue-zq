import { MessageBox } from 'element-ui'


export default {
  // api_baseUrl: 'http://183.237.175.100:3333',
  api_baseUrl: 'http://zqpt.chancheng.gov.cn',
  api_baseUrl_fj: 'http://zqpt.chancheng.gov.cn/GEService/qyfwpt/file/down?',
  // 特殊符号(转出)
  html_encode: function(str){
    var s = ''
    if (str.length === 0) return ''
    s = str.replace(/&/g, '&amp;')
    s = s.replace(/</g, '&lt;')
    s = s.replace(/>/g, '&gt;')
    s = s.replace(/ /g, '&nbsp;')
    s = s.replace(/'/g, '&#39;')
    s = s.replace(/“/g, '&rdquo;')
    s = s.replace(/”/g, '&rdquo;')
    s = s.replace(/\n/g, '<br>')
  return s
  },
  // 特殊符号(转入)
  html_decode: function(str){
    var s = ''
    if (str.length === 0) return ''
    s = str.replace(/&amp;/g, '&')
    s = s.replace(/&lt;/g, '<')
    s = s.replace(/&gt;/g, '>')
    s = s.replace(/&nbsp;/g, ' ')
    s = s.replace(/&#39;/g, '\'')
    s = s.replace(/&ldquo;/g, '“')
    s = s.replace(/&rdquo;/g, '”')
    s = s.replace(/<br>/g, '\n')
    s = s.replace(/\r/g, '<br>')
    return s
  },
  // 时间戳转时间
  date_en: function(time){
    let date = new Date(Number(time));
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let m = date.getMinutes();
    m = m < 10 ? ('0' + m) : m;
    let s = date.getSeconds();
    s = s < 10 ? ('0' + s) : s;
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
  },
  // 时间转时间戳
  date_de: function(index){
   let date = new Date(index);
   return Date.parse(date);
  },
  // 时间截取2018-01-01 12:00:00 => 2018-01-01
  time_slice: function(val){
    return val.slice(0,10)
  },
  // 封装elAlert http://element-cn.eleme.io/#/zh-CN/component/message-box
  elAlert: function(ico,msg){
    if(ico == "warning"){
      ico = String("<i class='el-alert__icon el-icon-warning font-warning'></i> ")
    }else if(ico == "success"){
      ico = String("<i class='el-alert__icon el-icon-success font-success'></i> ")
    }
    MessageBox.alert(ico+String(msg),{
      closeOnClickModal: true, //是否可通过点击遮罩关闭 MessageBox
      dangerouslyUseHTMLString: true, //作为 HTML 片段处理
      showConfirmButton: false
    }).then(() => {
    }).catch(() => {
    })
  }
}
