//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    price: '单价',
    count: '数量',
    ground: 'ground',
    rsl5: 'rsl5',
    rsl6: 'rsl6',
    rsl7: 'rsl7',
    other: 'other',
    members:'members',
    half:'half',
    total: 'total',
    allball: '0', allground: '0', all:'0',
    num5:'0',num6:'0',num7:'0',numother:'0',
    price5:'0',price6:'0',price7:'0',priceother:'0',
    ground1: '0', ground2: '0', ground3: '0', ground4:'0',
    allmembers: '0',halfmembers:'0'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getrsl5num: function(e){
    console.log(e)
    this.setData({
      num5:e.detail.value
    })
  },
  getrsl5price: function(e){
    console.log(e)
    this.setData({
      price5:e.detail.value
    })
  },
  getground1: function(e){
    console.log(e)
    this.setData({
      ground1:e.detail.value
    })
  },
  getrsl6num: function (e) {
    console.log(e)
    this.setData({
      num6: e.detail.value
    })
  },
  getrsl6price: function (e) {
    console.log(e)
    this.setData({
      price6: e.detail.value
    })
  },
  getground2: function (e) {
    console.log(e)
    this.setData({
      ground2: e.detail.value
    })
  },
  getrsl7num: function (e) {
    console.log(e)
    this.setData({
      num7: e.detail.value
    })
  },
  getrsl7price: function (e) {
    console.log(e)
    this.setData({
      price7: e.detail.value
    })
  },
  getground3: function (e) {
    console.log(e)
    this.setData({
      ground3: e.detail.value
    })
  },
  getothernum: function (e) {
    console.log(e)
    this.setData({
      numother: e.detail.value
    })
  },
  getotherprice: function (e) {
    console.log(e)
    this.setData({
      priceother: e.detail.value
    })
  },
  getground4: function (e) {
    console.log(e)
    this.setData({
      ground4: e.detail.value
    })
  },
  getallmembers: function(e){
    console.log(e)
    this.setData({
      allmembers:e.detail.value
    })
  },
  gethalfmembers: function (e) {
    console.log(e)
    this.setData({
      halfmembers: e.detail.value
    })
  },
  calc:function(){
    
  }
})
