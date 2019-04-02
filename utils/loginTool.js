
const app = getApp();
const LOGIN_STATUS = 'SESSIONID';

/**
 * 获取 sessionId
 */
function getSeccsionId() {
  return app._sessionId;
};

/**
 * 是否登录
 */
function isLogin() {
  /// 取出缓存在本地的 sessionId
  app._sessionId = wx.getStorageSync(LOGIN_STATUS);
  if ((null != app._sessionId) && ('' != app._sessionId)) { // 已经登录登录
    return true;
  }
  // 没有登录
  return false;
};

/**
 * 保存登录状态
 */
function save(sessionId) {
  // 1、内存中缓存，防止频繁的 IO 操作
  app._sessionId = sessionId;
  // 2、本地缓存
  wx.setStorage({
    key: LOGIN_STATUS,
    data: app._sessionId
  });
};

/**
 * 清除登录状态
 */
function clear() {
  // 1、清除内存中的登录状态
  app._sessionId = null;
  // 2、移除本地的登录登录状态
  wx.removeStorage({
    key: LOGIN_STATUS,
  })
};

/// ------------   API   -----------
module.exports = {
  getSeccsionId: getSeccsionId, /// 获取 sessionId
  isLogin: isLogin, /// 是否登录
  save: save, /// 保存登录状态
  clear: clear /// 清除登录状态
};