'use strict'

var netwok = require('../../utils/network.js')
// https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?count=7 近期上映
// tv_hot/items 电视剧
// movie_hot_gaia/items 热门电影
// tv_variety_show/items 综艺
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    boards: ['movie_showing/items', 'tv_hot/items', 'movie_hot_gaia/items', 'tv_variety_show/items'],
    board: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
    this.data.boards.map(function(param){
      console.log(param)

      netwok.get({
        url: 'rexxar/api/v2/subject_collection/' + param,
        params: {
          count: 7
        },
        success: function (res) {
          console.log(res.data.subject_collection_items)
          that.setData({
            board: res.data.subject_collection_items
          })
        },
        fail: function (err) {

        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})