'use strit'

var wechat = require('./utils/wechat.js');

var douban = require('./utils/douban.js');

var baidu = require('./utils/baidu.js');


App({
  data: {
    name: 'DouBan Movie',
    version: '0.1.0',
    currentCity: '北京'
  },
  wechat: wechat,
  douban: douban,
  baidu: baidu,
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    var that = this

    wechat.getLocation().then(function(res) {
      var latitude = res.latitude, longitude = res.longitude;
      return baidu.getCityName(latitude, longitude)
    }).then(function(name) {
      that.data.currentCity = name.replace('市', '');
      console.log('currentCity:', that.data.currentCity)
    }).catch(function(err){
      that.data.currentCity = "北京";
      console.log('err:', err);
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
