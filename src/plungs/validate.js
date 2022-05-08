export default{
  phone(value){
    if(!value) return '请输入号码'
    if(!/^1\d{10}$/.test(value)) return '请输入有效号码'
    return true
  },
  code(value){
    if(!value) return '请输入验证码'
    if(!/^\d{6}$/.test(value)) return '验证码错误'
    return true
  },
  password(value){
    if(!value) return '请输入密码'
    if(!/^[0-9A-Za-z]{8,20}$/.test(value)) return '密码格式错误'
    return true
  },
  password1(value){
    if(!value) return '请再次输入密码'
    if(!/^[0-9A-Za-z]{8,20}$/.test(value)) return '密码不相等'
    return true
  },
  isAgree(value){
    if(!value) return '请勾选同意协议'
    return true
  }
}