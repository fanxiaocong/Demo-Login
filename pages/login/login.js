// pages/login/login.js

const loginTool = require('../../utils/loginTool.js');

Page({

  /**
   * 点击登录按钮的回调
   */
  clickLoginAction(e) {
    
    /// 1、调用 wx.login() 获取 code
    wx.login({
      success: res => {
        /// 2、发送 res.code 到后台换取 openId, sessionKey, unionId
        /// 注意：对于网络请求，最好能够自己封装一下，这里只是做演示
        wx.request({
          // 2.1 后台登录接口地址
          url: 'xxx/xxx/xxx',
          // 2.2 请求参数，一般包括 登录账号、密码（验证码）、code
          data: {
            code: res.code,
            // phone: xxx
            // password: xxx
          },
          /// 3、登录成功，接收后台返回的数据，一般包括用户相关的信息以及登录状态
          success(res) {
            // 3.1 缓存登录状态
            loginTool.save('xxx');
            // 3.2 跳转到首页
            wx.reLaunch({
              url: '/pages/order/order'
            });
          }
        })
      }
    })
  },
})