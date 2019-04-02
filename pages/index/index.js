//index.js
//获取应用实例
const loginTool = require('../../utils/loginTool.js');
const app = getApp();

Page({

  onLoad(options) {
    /// 请求后台数据
    this.sendRequest();
  },

  /**
   * 发送网络请求
   */
  sendRequest() {
    wx.request({
      url: 'xxx/xxx/xxx',
      header: {
        'content-type': 'application/json',
        /// 通常情况下，我们会将登录状态添加到后台的请求头中发送给后台
        /// 后台拿到这个值后会在数据库中进行匹配，并判断登录是否失效
        'sessionId': loginTool.getSeccsionId()
      },
      data: {
        xxx:'xxx'
      },
      /// 请求完成
      complete(res) {
        if (200 == res.statusCode) {  /// 接口访问成功
          // 可以和后台协商下，用一个特定的 code 值来表示登录失效的情况
          /// 这里仅做模拟，0 表示成功；1004 表示登录失效
          const code = 1004;
          if (code === 0) { // 请求成功
            // 刷新 UI
            // ...
          } else if (code === 1004) { // 登录失效
            // 移除登录状态的缓存
            loginTool.clear();
            // 跳转到登录页面
            wx.reLaunch({
              url: '/pages/login/login',
            });
          } else {  // 其它异常
            // 略...
          }
        } else {  /// 接口访问失败
          // 一般是网络问题、服务器异常、参数问题等
          // ...
        }
      }
    })
  },

  /**
   * 点击退出登录的回调
   */
  clickLogoutAction(e) {
    /// 清空登录状态
    loginTool.clear();
    /// 跳转到登录页面
    wx.reLaunch({
      url: '/pages/login/login',
    })
  }
})
