// pages/launch/launch.js

const loginTool = require('../../utils/loginTool.js');

Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /// 判断登录状态
    if (loginTool.isLogin()) { // 已经登录
      // 跳转到 首页页面
      wx.reLaunch({
        url: '/pages/index/index',
      })
    } else {  // 没有登录
      // 跳转到 登录页面
      wx.reLaunch({
        url: '/pages/login/login',
      })
    }
  }
})